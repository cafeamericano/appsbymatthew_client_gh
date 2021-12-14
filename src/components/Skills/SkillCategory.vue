<template>
    <div>

        <br/><h5 class="text-left">{{$attrs.categoryName}}</h5>
        <hr/>
        <div class="row p-2">    
            <div class="col-xl-4 col-lg-6 col-md-6 col-12 text-left" v-for='item in $attrs.items' :key='item.name'>
                <div class="card mb-2 p-2">
                    <span>{{item.name}}</span>
                    <span style="text-align: right; position: absolute; right: 10px; width: 100%">
                        <router-link :to="{name:'Skills_Edit', params: {code: item.code}}">
                            <small>
                                <i class="fas fa-wrench text-dark mr-2"></i>
                            </small>
                            <small v-if="item.provide_disclaimer" title="Non-proficient but utilized in an application.">
                                <i class="fas fa-exclamation-circle text-danger"></i>
                            </small>
                            <small v-else-if="!item.is_proficient" title="Partial proficiency">
                                <i class="fas fas fa-info-circle text-warning"></i>
                            </small>
                            <small v-else title="Proficient">
                                <i class="fas fa-check-circle text-success"></i>
                            </small>
                        </router-link>
                    </span>
                </div>           
            </div>
        </div>

    </div>
</template>

<script>

// @ is an alias to /src
import SkillPreview from "@/components/Skills/SkillCard.vue";
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