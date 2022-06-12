<template>
    <section @mouseenter="inflate" @mouseleave="deflate" :class='isInflated ? "animated pulse" : "animated"'>
        <div class='card mt-3 mb-1 border rounded-0'>
            <h5 class='text-left pl-2 pr-2 pt-2'>{{$attrs.data.title}}</h5>
            <div class="text-left pl-2 pr-2 pb-1" >
                <span v-for='thisSkill in skillsWithBadges' :key='thisSkill'>
                    <i v-if="$attrs.data.associated_skill_codes && $attrs.data.associated_skill_codes.includes(thisSkill)" :title="thisSkill" class="skill-icon">
                        <img :src="'https://applicationthumbnails.s3.amazonaws.com/skill_thumbnails/' + thisSkill + '.png'" height="25px" width="25px"/>
                    </i>
                </span>
            </div>
            <img :src='$attrs.data.image_url' style="width: 100%"/>
            <p class="p-3 text-left">
                {{$attrs.data.description}}
            </p>
            <div class="text-right p-2" style="padding-bottom: 0px !important">
                <small @click="handleDeployLinkClick" v-if="$attrs.data.deployed_link"><a :href='$attrs.data.deployed_link' :target='"_blank"' class="p-2" title="Experience this application"><i class="far fa-play-circle"></i></a></small>
                <small @click="handleFrontEndRepoLinkClick" v-if="$attrs.data.front_end_repo_link"><a :href='$attrs.data.front_end_repo_link' :target='"_blank"' class="p-2" title='Client Source Code'><i class="fas fa-laptop-code"></i></a></small>
                <small @click="handleBackEndRepoLinkClick" v-if="$attrs.data.back_end_repo_link"><a :href='$attrs.data.back_end_repo_link' :target='"_blank"' class="p-2" title='API Source Code'><i class="fas fa-code-branch"></i></a></small>
                <small style="opacity: 0">.</small>
            </div>
            <div class="text-left p-2" style="padding-top: 0px !important">
                <router-link :to="{name:'Applications_Edit', params: {applicationId: $attrs.data._id.$oid}}">
                    <small><i class="fas fa-wrench text-secondary"></i></small>
                </router-link>
            </div>
        </div>
    </section>
</template>

<script>

import {config} from "@/config";
import common from "@/common";
// import commonUtils from '@cafeamericano/common-js-utils';

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
            // commonUtils.analyticsDashboard.recordAction({
            //     location: window.location.hostname,
            //     sublocation: "Applications Page - All", 
            //     description: `The user has clicked the deployed link for ${this.$attrs.data.title}.`,
            //     details: {}
            // });
        },
        handleFrontEndRepoLinkClick: function() {
            // commonUtils.analyticsDashboard.recordAction({
            //     location: window.location.hostname,
            //     sublocation: "Applications Page - All", 
            //     description: `The user has clicked the frontend repo link for ${this.$attrs.data.title}.`,
            //     details: {}
            // });
        },
        handleBackEndRepoLinkClick: function() {
            // commonUtils.analyticsDashboard.recordAction({
            //     location: window.location.hostname,
            //     sublocation: "Applications Page - All", 
            //     description: `The user has clicked the backend repo link for ${this.$attrs.data.title}.`,
            //     details: {}
            // });
        },
    },
    data() {
        return {
            componentKey: 0,
            isInflated: false,
            filterFeatured: null,
            skillsWithBadges: [
                'ANGULAR',
                'CPP',
                'DOCKER',
                'GO',
                'GRAPHQL',
                'JAVA',
                'JAVASCRIPT',
                'JENKINS',
                'KUBERNETES',
                'MARIADB',
                'MONGODB',
                'MYSQL',
                'NODE',
                'POSTGRES',
                'PYTHON',
                'REACT',
                'REDIS',
                'SCALA',
                'SPARK',
                'VUE'
            ]
        }
    }
};
</script>

<style scoped>
    .skill-icon{
        padding: 5px;
    }
    .skill-icon img{
        border-radius: 100%;
    }
</style>
