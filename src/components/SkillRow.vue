<template>
    <tr class="text-left">
        <td style="width: 200px">{{ $attrs.name }}</td>
        <td style="width: 250px">{{ $attrs.type }}</td>
        <td style="width: 50px">{{ $attrs.showInGallery }}</td>
        <td style="width: 50px">{{ $attrs.showOnPortfolio }}</td>
    </tr>
</template>

<script>

export default {
    name: 'SkillPreview',
    data: function () {
        return {
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

.card {
    max-height: 100px;
    overflow: hidden;
}

img {
    height: 100px;
    width: 150px;
}

</style>
