<template>
    <div class='card rounded shadow mb-3 text-left'>
        <div class='row'>
            <div class='col'>
                <img :src='$attrs.imagePath'/>
            </div>
            <div class="col text-right p-3">
                <strong>{{ $attrs.name }}</strong>
                <br/>
                <small>Published {{ $attrs.publishDate }}</small>
                <br/>
                <router-link :to="{name:'EditRecord', params: {id: $attrs._id.$oid || $attrs._id}}">
                    <i class="far fa-edit"></i>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>

import {config} from "@/config";

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
