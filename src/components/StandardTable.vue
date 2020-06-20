<template>
    <div style="overflow-x: scroll; font-size: 14px">
        <div class="text-right p-1">1 | 2 | 3
        </div>
        <table style="min-width: 100%">



            <!-- BEGIN Header -->
            <th :style='
                    "width: " +             "50px" +                                    ";" +
                    "text-align: " +        "center" +                                  ";" +
                    "color: " +             "white" +                                   ";" +
                    "background-color: " +  "rgb(175,175,175)" +                        ";" +
                    "border:" +             "1px solid rgba(210,210,210)" +             ";" +
                    "padding: " +           "8px" +                                     ";"
                '
            >
            </th>
            <th v-for='(col, colIndex) in props.columns.filter(item => 1 == 1)'
                @click='applySort(col.associatedDataField, $event)'
                :key='colIndex + "column"' 
                :style='
                    "width: " +             col.width +                                 ";" +
                    "text-align: " +        col.textAlignment +                         ";" +
                    "color: " +             "white" +                                   ";" +
                    "background-color: " +  "rgb(175,175,175)" +                        ";" +
                    "border:" +             "1px solid rgba(210,210,210)" +             ";" +
                    "padding: " +           "8px" +                                     ";"
                '
            >
                {{col.header}}
            </th>
            <!-- END Header -->



            <!-- BEGIN Filter Bar -->
            <tr>
                <td style="padding: 5px; background-color: rgb(205, 205, 205)"/>
                <td v-for='(item) in props.filterBar.filter(item => 1 == 1)' 
                    style="padding: 5px; background-color: rgb(205, 205, 205)"
                >
                    <input v-if='item.type == "text"'
                        v-on:keyup.enter="applyFilter(item.associatedDataField, $event)"
                        type="text" 
                        style="border: none; border-radius: 5px; padding: 8px; width: 100%;"
                    />
                    <select @change='applyFilter(item.associatedDataField, $event)' v-if='item.type == "select"' style="border: none; border-radius: 5px; padding: 8px; width: 100%;">
                        <option default value=''>Select</option>
                        <option 
                            v-for='(opt) in item.options' 
                            :key='opt.value'
                            :value='opt.value'
                        >
                            {{opt.label}}
                        </option>
                    </select>
                </td>
            </tr>
            <!-- END Filter Bar-->



            <!-- BEGIN Content -->
            <tr v-for='(row, rowIndex) in props.rows.filter(row => 1 == 1)'
                :style='
                    "background-color: " +  (rowIndex % 2 == 0 ? "white" : "rgba(245,245,245)") +           ";"
                '
            >
                <td :style='"border: 1px solid rgba(210,210,210); padding: 15px"'>{{rowIndex + 1}}</td>
                <td v-for='(field, fieldIndex) in Object.keys(row).filter(field => !props.hiddenFields.includes(field))'
                    @click='processRowClick(row._id)'
                    @contextmenu='processRowRightClick(row._id, row.name, $event)'
                    :title='row[field]'
                    :v-html="row[field]"
                    :style='
                        "border: 1px solid rgba(210,210,210); " +
                        "padding: 8px; " +
                        "text-overflow: ellipsis; " + 
                        "overflow: hidden; " + 
                        "white-space: nowrap; " + 
                        "max-width: " + "200px" + "; " +
                        "text-align: " + "left" + ";"
                    '
                >
                    <span v-html='row[field]'></span>
                </td>
            </tr>
            <!-- END content -->



        </table>
    </div>
</template>

<script>



import _ from 'lodash';

export default {
    name: 'StandardTable',
    props: [],
    components: {},
    methods: {
        applySort: function(sortBy, e) {
            var self = this;
            if (self.$attrs.rows) {
                self.state.sort.by = sortBy
                let direction;
                if (self.state.sort.direction == 'asc') {
                    direction = 'desc';
                    self.state.sort.direction = 'desc';
                } else {
                    direction = 'asc';
                    self.state.sort.direction = 'asc';
                }
                self.props.rows = _.orderBy(self.$attrs.rows, sortBy, direction);
            }
        },
        applyFilter: function(filterBy, e) {
            console.log(filterBy, e.target.value)
            var self = this;
            self.state.activeFilter.tags.push({[filterBy]: e.target.value})
            console.log(self.state.activeFilter.tags)
            if (!e.target.value) {
                self.props.rows = self.$attrs.rows;
                return;
            }
            else if (self.$attrs.rows) {
                self.props.rows = self.$attrs.rows.filter(row => {
                    let thisValue = e.target.value;
                    let thatValue = row[filterBy];
                    console.log(row)
                    console.log(e.target.value, row[filterBy])
                    return thatValue.toLowerCase().includes(thisValue.toLowerCase());
                });
            }
        },
        processRowClick: function(data) {
            if (this.$attrs.processRowClick) {
                return this.$attrs.processRowClick(data);
            }
        },
        processRowRightClick: function(id, name, e) {
            event.preventDefault();
            if (this.$attrs.processRowClick) {
                return this.$attrs.processRowRightClick(id, name, e);
            }
        },
        randomIndex: function() {
            return Math.random();
        }
    },
    data: function () {
        return {
            // randomIndex: Math.random(),
            props: {
                columns: this.$attrs.columns,
                rows: this.$attrs.rows,
                filterBar: this.$attrs.filterBar,
                hiddenFields: this.$attrs.hiddenFields
            },
            state: {
                sort: {
                    by: 'type',
                    direction: 'asc'
                },
                activeFilter: {
                    tags: []
                }
            }
        }
    }
}

</script>