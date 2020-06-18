<template>
    <div style="overflow-x: scroll; font-size: 14px">
        <table>



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
            <th v-for='(col, colIndex) in columns.filter(item => 1 == 1)' 
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
                <td v-for='(item, colIndex) in filterBar.filter(item => 1 == 1)' :key='colIndex + "filter"' style="padding: 5px; background-color: rgb(205, 205, 205)">
                    <input v-if='item.type == "text"'
                        v-on:keyup.enter="item.onPressEnter"
                        type="text" 
                        style="border: none; border-radius: 5px; padding: 8px; width: 100%;"
                    />
                    <select v-if='item.type == "select"' style="border: none; border-radius: 5px; padding: 8px; width: 100%;">
                        <option v-for='(opt, optIndex) in item.options' :key='optIndex + "option"' :value='opt.value'>{{opt.label}}</option>
                    </select>
                </td>
            </tr>
            <!-- END Filter Bar-->



            <!-- BEGIN Content -->
            <tr v-for='(row, rowIndex) in rows.filter(row => 1 == 1)'
                :key='colIndex + rowIndex + "row"'
                :style='
                    "background-color: " +  (rowIndex % 2 == 0 ? "white" : "rgba(230,230,230)") +           ";"
                '
            >
                <td :style='"border: 1px solid rgba(210,210,210); padding: 15px"'>{{rowIndex + 1}}</td>
                <td v-for='(field, fieldIndex) in Object.keys(row).filter(field => !hiddenFields.includes(field))'
                    @click='processClick(row._id)'
                    :key='colIndex + rowIndex + fieldIndex + "field"'
                    :title='row[field]'
                    :v-html="row[field]"
                    :style='
                        "border: 1px solid rgba(210,210,210); " +
                        "padding: 8px; " +
                        "text-overflow: ellipsis; " + 
                        "overflow: hidden; " + 
                        "white-space: nowrap; " + 
                        "max-width: " + "200px" + ";"
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

var filterBar = [
    {
        type: 'text',
        associatedDataField: 'name',
        onPressEnter: function (e) {
            event.preventDefault(e);
            alert('enter pressed: ' + this.associatedDataField)
        }
    },
    {
        type: 'select',
        options: [
            {label: 'Language', value: 'language'},
            {label: 'Front-End Framework', value: 'front-end-framework'},
            {label: 'Back-End Framework', value: 'back-end-framework'},
            {label: 'Library', value: 'library'},
            {label: 'Database', value: 'database'},
            {label: 'Deployment Technology', value: 'deployment'},
            {label: 'ORM', value: 'orm'},
            {label: 'Operating System', value: 'operating-system'},
            {label: 'Other', value: 'other'},
        ],
        associatedDataField: 'type'
    },
    {
        type: 'select',
        options: [
            {label: 'Yes', value: 'true'},
            {label: 'No', value: 'false'},
        ],
        associatedDataField: 'showInGallery'
    },
    {
        type: 'select',
        options: [
            {label: 'Yes', value: 'true'},
            {label: 'No', value: 'false'},
        ],
        associatedDataField: 'showOnPortfolio'
    }
]
var xyz = [
    {
        "isCollaboration": "",
        "frontendRepoLink": "https://bitbucket.org/mfarmer5102/portamonete_api/src/master/",
        "description": "A personal financial management tool.",
        "language": "JavaScript",
        "title": "Portamonete",
        "supportStatus": "active",
        "githubLink": "",
        "publishDate": "2020-06-10",
        "frontendLink": "http://ec2-18-223-119-126.us-east-2.compute.amazonaws.com/",
        "isFeatured": true,
        "deployedLink": "http://ec2-18-223-119-126.us-east-2.compute.amazonaws.com/",
        "backendLink": "http://ec2-18-223-119-126.us-east-2.compute.amazonaws.com/",
        "applicationType": "unified",
        "backendRepoLink": "https://bitbucket.org/mfarmer5102/portamonete_client/src/master/"
    },
    {
        "isCollaboration": "",
        "frontendRepoLink": "https://github.com/cafeamericano/keywordFactory",
        "description": "An Angular app designed for managing keywords available to my App Gallery Lite and App Factory applications.",
        "language": "JavaScript",
        "title": "Keyword Factory",
        "supportStatus": "active",
        "githubLink": "https://github.com/cafeamericano/keywordFactory",
        "publishDate": "2020-04-10",
        "frontendLink": "https://cafeamericano.github.io/keywordFactory",
        "isFeatured": true,
        "deployedLink": "https://cafeamericano.github.io/keywordFactory",
        "backendLink": "https://central-api-go.appspot.com/",
        "applicationType": "client-side",
        "backendRepoLink": "https://github.com/cafeamericano/keywordFactory-api"
    },
        {
        "isCollaboration": "",
        "frontendRepoLink": "https://bitbucket.org/mfarmer5102/portamonete_api/src/master/",
        "description": "A personal financial management tool.",
        "language": "JavaScript",
        "title": "Portamonete",
        "supportStatus": "active",
        "githubLink": "",
        "publishDate": "2020-06-10",
        "frontendLink": "http://ec2-18-223-119-126.us-east-2.compute.amazonaws.com/",
        "isFeatured": true,
        "deployedLink": "http://ec2-18-223-119-126.us-east-2.compute.amazonaws.com/",
        "backendLink": "http://ec2-18-223-119-126.us-east-2.compute.amazonaws.com/",
        "applicationType": "unified",
        "backendRepoLink": "https://bitbucket.org/mfarmer5102/portamonete_client/src/master/"
    },
    {
        "isCollaboration": "",
        "frontendRepoLink": "https://github.com/cafeamericano/keywordFactory",
        "description": "An Angular app designed for managing keywords available to my App Gallery Lite and App Factory applications.",
        "language": "JavaScript",
        "title": "Keyword Factory",
        "supportStatus": "active",
        "githubLink": "https://github.com/cafeamericano/keywordFactory",
        "publishDate": "2020-04-10",
        "frontendLink": "https://cafeamericano.github.io/keywordFactory",
        "isFeatured": true,
        "deployedLink": "https://cafeamericano.github.io/keywordFactory",
        "backendLink": "https://central-api-go.appspot.com/",
        "applicationType": "client-side",
        "backendRepoLink": "https://github.com/cafeamericano/keywordFactory-api"
    },
        {
        "isCollaboration": "",
        "frontendRepoLink": "https://bitbucket.org/mfarmer5102/portamonete_api/src/master/",
        "description": "A personal financial management tool.",
        "language": "JavaScript",
        "title": "Portamonete",
        "supportStatus": "active",
        "githubLink": "",
        "publishDate": "2020-06-10",
        "frontendLink": "http://ec2-18-223-119-126.us-east-2.compute.amazonaws.com/",
        "isFeatured": true,
        "deployedLink": "http://ec2-18-223-119-126.us-east-2.compute.amazonaws.com/",
        "backendLink": "http://ec2-18-223-119-126.us-east-2.compute.amazonaws.com/",
        "applicationType": "unified",
        "backendRepoLink": "https://bitbucket.org/mfarmer5102/portamonete_client/src/master/"
    },
    {
        "isCollaboration": "",
        "frontendRepoLink": "https://github.com/cafeamericano/keywordFactory",
        "description": "An Angular app designed for managing keywords available to my App Gallery Lite and App Factory applications.",
        "language": "JavaScript",
        "title": "Keyword Factory",
        "supportStatus": "active",
        "githubLink": "https://github.com/cafeamericano/keywordFactory",
        "publishDate": "2020-04-10",
        "frontendLink": "https://cafeamericano.github.io/keywordFactory",
        "isFeatured": true,
        "deployedLink": "https://cafeamericano.github.io/keywordFactory",
        "backendLink": "https://central-api-go.appspot.com/",
        "applicationType": "client-side",
        "backendRepoLink": "https://github.com/cafeamericano/keywordFactory-api"
    }
]

var abc = [
    {
        header: 'Title',
        width: '200px',
        textAlignment: 'Left',
    },
    {
        header: 'Publish Date',
        width: '150px',
        textAlignment: 'Left'
    },
    {
        header: 'Title',
        width: '300px',
        textAlignment: 'Left'
    },
    {
        header: 'Publish Date',
        width: '200px',
        textAlignment: 'Left'
    },
                    {
        header: 'Title',
        width: '200px',
        textAlignment: 'Left'
    },
    {
        header: 'Publish Date',
        width: '150px',
        textAlignment: 'Left'
    },
    {
        header: 'Title',
        width: '300px',
        textAlignment: 'Left'
    },
    {
        header: 'Publish Date',
        width: '200px',
        textAlignment: 'Left'
    },
                    {
        header: 'Title',
        width: '200px',
        textAlignment: 'Left'
    },
    {
        header: 'Publish Date',
        width: '150px',
        textAlignment: 'Left'
    },
                    {
        header: 'Title',
        width: '300px',
        textAlignment: 'Left'
    },
    {
        header: 'Publish Date',
        width: '200px',
        textAlignment: 'Left'
    },
                    {
        header: 'Title',
        width: '200px',
        textAlignment: 'Left'
    },
    {
        header: 'Publish Date',
        width: '150px',
        textAlignment: 'Left'
    }
]

var def = ['id', 'uuid']

export default {
    name: 'StandardTable',
    props: [],
    components: {},
    methods: {
        processClick: function(data) {
            alert(data)
        }
    },
    data: function () {
        return {
            columns: this.$attrs.columns || abc,
            rows: this.$attrs.rows || xyz,
            filterBar: this.$attrs.filterBar || filterBar,
            hiddenFields: this.$attrs.hiddenFields || def
        }
    }
}

</script>