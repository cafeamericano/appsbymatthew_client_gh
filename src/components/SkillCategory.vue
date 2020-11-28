<template>
    <div>

        <br/><h5 class="text-left">{{$attrs.categoryName}}</h5>
        <hr/>
        <div class="row p-2">    
            <div class="col-xl-4 col-lg-6 col-md-6 col-12 text-left" v-for='item in $attrs.items' :key='item.name'>
                <div class='card mb-2 p-2'>
                    <span>{{item.name}}</span>
                    <span style="text-align: right; position: absolute; right: 10px; width: 100%">
                        <router-link :to="{name:'Skills-Edit', params: {code: item.code}}">
                            <small><i class="fas fa-wrench text-secondary"></i></small>
                        </router-link>
                    </span>
                </div>                
            </div>
        </div>

    </div>
</template>

<script>

// @ is an alias to /src
import SkillPreview from "@/components/SkillPreview.vue";
import common from '@/common';
import {config} from "@/config";

export default {
    name: "SkillCateogry",
    components: {
        SkillPreview
    },
    mounted: function() {
    },
    data() {
        return {
        }
    }
};
</script>

<style scoped>
    .fa-wrench {
        opacity: 25%;
    }
</style>