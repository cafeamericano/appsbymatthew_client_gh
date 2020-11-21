<template>
    <section v-bind:class='$attrs.rownum % 2 == 0 ? "bg-light" : "bg-gray"'>
        <tr @contextmenu="processRightClick" class="text-left">
            <td style="width: 50px" class="border-left">{{ $attrs.rownum }}</td>
            <td style="width: 70px" class="border-left"><img style="height: 25px; width: 40px" class="border-left" :src='$attrs.imagePath'/></td>
            <td style="width: 50px" class="border-left"><span class="material-icons" :title='$attrs.keywords'>info_outline</span></td>

            <td style="width: 200px" class="border-left">{{ $attrs.title }}</td>
            <td style="width: 150px" class="border-left">
                <!-- <span @click='processViewDetails' class="material-icons">zoom_in</span> -->
                <span @click='processEdit' class="material-icons">create</span>
                <span @click='processDelete' class="material-icons">delete_outline</span>
            </td>
            <td style="width: 150px" class="border-left">{{ $attrs.publishDate }}</td>
            <td style="width: 250px" class="border-left">{{ $attrs.language }}</td>

            <td style="width: 100px" class="border-left text-center">
                <div v-if='$attrs.isFeatured'><span class="material-icons">star_outline</span></div>
                <div v-else></div>
            </td>
            <td style="width: 80px" class="border-left">
                <div v-if='$attrs.showOnPortfolio'><span class="material-icons">check</span></div>
                <div v-else></div>            
            </td>
            <td style="width: 250px" class="border-left">{{ $attrs.supportStatus }}</td>

        </tr>
    </section>
</template>

<script>

import {config} from "@/config";

export default {
    name: 'SkillPreview',
    data: function () {
        var self = this;
        recordId = self.oid
        console.log(self.data)
        return {
            rowBg: self.rownum % 2 == 0 ? 'bg-light' : 'bg-secondary'
            // Properties go here
        }
    },
    props: [],
    methods: {
        processRightClick(e) {
            console.log(this.$attrs)
            e.preventDefault();
            // alert(this.$attrs._id.$oid)
        },
        processViewDetails() {
            alert('View details for : ' + this.$attrs.title)
        },
        processEdit() {
            confirm('Process edit for : ' + this.$attrs.title)
        },
        processDelete() {
            var self = this;
            if (confirm(`Are you sure you would like to delete ${self.$attrs.title}`)){
                var url = 'https://central-api-flask-cm6ud432ka-uc.a.run.app/AppGalleryLite/api/applications'
                fetch(url, {
                    method: "DELETE",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        _id: self.$attrs._id.$oid
                    })
                }).then(response => {
                    // self.$router.go(-1)
                });
            }
        }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.row {
    margin-right: 0px;
}

td {
    padding: 0.75rem;
}

.card {
    max-height: 100px;
    overflow: hidden;
}

img {
    height: 100px;
    width: 150px;
}

</style>
