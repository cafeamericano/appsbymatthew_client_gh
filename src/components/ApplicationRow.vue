<template>
    <section v-bind:class='$attrs.rownum % 2 == 0 ? "bg-light" : "bg-gray"'>
        <tr class="text-left">
            <td style="width: 50px">{{ $attrs.rownum }}</td>
            <td style="width: 70px"><img style="height: 25px; width: 40px" :src='$attrs.imagePath'/></td>
            <td style="width: 50px"><span class="material-icons" :title='$attrs.keywords'>info_outline</span></td>

            <td style="width: 200px">{{ $attrs.title }}</td>
            <td style="width: 150px">
                <span class="material-icons">zoom_in</span>
                <span class="material-icons">create</span>
                <span class="material-icons">delete_outline</span>
            </td>
            <td style="width: 150px">{{ $attrs.publishDate }}</td>
            <td style="width: 250px">{{ $attrs.language }}</td>


            <td style="width: 80px">
                <div v-if='$attrs.isFeatured'><span class="material-icons">star_outline</span></div>
                <div v-else></div>
            </td>
            <td style="width: 80px">
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
    props: []
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
