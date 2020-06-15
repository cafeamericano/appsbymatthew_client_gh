<template>
    <section v-bind:class='$attrs.rownum % 2 == 0 ? "bg-light" : "bg-gray"'>
        <tr @contextmenu="processRightClick" class="text-left">
            <td style="width: 50px" class="border-left">{{ $attrs.rownum }}</td>
            <td style="width: 70px" class="border-left"><img style="height: 25px; width: 40px" class="border-left" :src='$attrs.imagePath'/></td>
            <td style="width: 50px" class="border-left"><span class="material-icons" :title='$attrs.keywords'>info_outline</span></td>

            <td style="width: 200px" class="border-left">{{ $attrs.title }}</td>
            <td style="width: 150px" class="border-left">
                <span class="material-icons">zoom_in</span>
                <span class="material-icons">create</span>
                <span class="material-icons">delete_outline</span>
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

        </tr>
    </section>
</template>

<script>

export default {
    name: 'SkillPreview',
    data: function () {
        var self = this;
        console.log(self.rownum)
        return {
            rowBg: self.rownum % 2 == 0 ? 'bg-light' : 'bg-secondary'
            // Properties go here
        }
    },
    props: [],
    methods: {
        processRightClick(e) {
            e.preventDefault();
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
