<template>
    <section @mouseenter="inflate" @mouseleave="deflate" :class='isInflated ? "animated pulse" : "animated"'>
        <div class='card mt-3 mb-1 border rounded-0'>
            <h5 class='text-left pl-2 pr-2 pt-2'>{{$attrs.data.title}}</h5>
            <div class="text-left pl-2 pr-2 pb-1">
                <i v-if="$attrs.data.keywords && $attrs.data.keywords.includes('React')" title='React' class="fab fa-react fa-lg text-primary p-1"></i>
                <i v-if="$attrs.data.keywords && $attrs.data.keywords.includes('Vue')" title='Vue' class="fab fa-vuejs fa-lg text-success p-1"></i>
                <i v-if="$attrs.data.keywords && $attrs.data.keywords.includes('Angular')" title='Angular' class="fab fa-angular fa-lg text-danger p-1"></i>
                <i v-if="$attrs.data.keywords && $attrs.data.keywords.includes('Node')" title='Node' class="fab fa-node fa-lg text-secondary p-1"></i>
                <i v-if="$attrs.data.keywords && $attrs.data.keywords.includes('JavaScript')" title='JavaScript' class="fab fa-js fa-lg text-warning p-1"></i>
                <i v-if="$attrs.data.keywords && $attrs.data.keywords.includes('Python')" title='Python' class="fab fa-python fa-lg text-info p-1"></i>
                <i v-if="$attrs.data.keywords && $attrs.data.keywords.includes('Java')" title='Java' class="fab fa-java fa-lg text-danger p-1"></i>
                <i v-if="$attrs.data.keywords && $attrs.data.keywords.includes('C++')" title='C++' class="fa-lg text-info p-1">C++</i>
                <i v-if="$attrs.data.keywords && $attrs.data.keywords.includes('Go')" title='Go' class="fa-lg text-primary p-1"><strong>GO</strong></i>
            </div>
            <img :src='$attrs.data.image_url' style="width: 100%"/>
            <div class="text-right p-2" style="padding-bottom: 0px !important">
                <small @click="handleDeployLinkClick" v-if="$attrs.data.deployed_link"><a :href='$attrs.data.deployed_link' :target='"_blank"' class="p-2" title="Experience this application"><i class="far fa-play-circle"></i></a></small>
                <small @click="handleFrontEndRepoLinkClick" v-if="$attrs.data.front_end_repo_link">|<a :href='$attrs.data.front_end_repo_link' :target='"_blank"' class="p-2" title='Client Source Code'><i class="fas fa-laptop-code"></i></a></small>
                <small @click="handleBackEndRepoLinkClick" v-if="$attrs.data.back_end_repo_link">|<a :href='$attrs.data.back_end_repo_link' :target='"_blank"' class="p-2" title='API Source Code'><i class="fas fa-code-branch"></i></a></small>
                <small style="opacity: 0">.</small>
            </div>
            <div class="text-left p-2" style="padding-top: 0px !important">
                <router-link :to="{name:'Applications-Edit', params: {applicationId: $attrs.data._id.$oid}}">
                    <small><i class="fas fa-wrench text-secondary"></i></small>
                </router-link>
            </div>
        </div>
    </section>
</template>

<script>

import {config} from "@/config";
import common from "@/common";

export default {
    name: "AppPreviewMini",
    components: {},
    mounted: function() {
    },
    methods: {
        inflate: function() {
            this.isInflated = true;
        },
        deflate: function() {
            this.isInflated = false;
        },
        handleDeployLinkClick: function() {
            common.logClientAction({sublocation: "Applications Page - All", description: `The user has clicked the deployed link for ${this.$attrs.data.title}.`});
        },
        handleFrontEndRepoLinkClick: function() {
            common.logClientAction({sublocation: "Applications Page - All", description: `The user has clicked the frontend repo link for ${this.$attrs.data.title}.`});
        },
        handleBackEndRepoLinkClick: function() {
            common.logClientAction({sublocation: "Applications Page - All", description: `The user has clicked the backend repo link for ${this.$attrs.data.title}.`});
        },
    },
    data() {
        return {
            componentKey: 0,
            isInflated: false,
            filterFeatured: null
        }
    }
};
</script>
