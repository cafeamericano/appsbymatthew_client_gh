<template>
    <section @mouseenter="inflate" @mouseleave="deflate" :class='isInflated ? "animated pulse" : "animated"'>
        <div class='card mt-3 mb-1 border rounded-0'>
            <h5 class='text-left pl-2 pr-2 pt-2'>{{$attrs.data.title}}</h5>
            <div class="text-left pl-2 pr-2 pb-1">
                <i v-if="$attrs.data.associated_skill_codes && $attrs.data.associated_skill_codes.includes('REACT')" title='React' class="skill-icon">
                    <img src="https://applicationthumbnails.s3.amazonaws.com/skill_thumbnails/react.png" height="25px" width="25px"/>
                </i>
                <i v-if="$attrs.data.associated_skill_codes && $attrs.data.associated_skill_codes.includes('VUE')" title='Vue' class="skill-icon">
                    <img src="https://applicationthumbnails.s3.amazonaws.com/skill_thumbnails/vue.png" height="25px" width="25px"/>
                </i>
                <i v-if="$attrs.data.associated_skill_codes && $attrs.data.associated_skill_codes.includes('ANGULAR')" title='Angular' class="skill-icon">
                    <img src="https://applicationthumbnails.s3.amazonaws.com/skill_thumbnails/angular.png" height="25px" width="25px"/>
                </i>
                <i v-if="$attrs.data.associated_skill_codes && $attrs.data.associated_skill_codes.includes('NODE')" title='Node' class="skill-icon">
                    <img src="https://applicationthumbnails.s3.amazonaws.com/skill_thumbnails/node.png" height="25px" width="25px"/>
                </i>
                <i v-if="$attrs.data.associated_skill_codes && $attrs.data.associated_skill_codes.includes('JAVASCRIPT')" title='JavaScript' class="skill-icon">
                    <img src="https://applicationthumbnails.s3.amazonaws.com/skill_thumbnails/javascript.png" height="25px" width="25px"/>
                </i>
                <i v-if="$attrs.data.associated_skill_codes && $attrs.data.associated_skill_codes.includes('PYTHON')" title='Python' class="skill-icon">
                    <img src="https://applicationthumbnails.s3.amazonaws.com/skill_thumbnails/python.png" height="25px" width="25px"/>
                </i>
                <i v-if="$attrs.data.associated_skill_codes && $attrs.data.associated_skill_codes.includes('JAVA')" title='Java' class="skill-icon">
                    <img src="https://applicationthumbnails.s3.amazonaws.com/skill_thumbnails/java.png" height="25px" width="25px"/>
                </i>
                <i v-if="$attrs.data.associated_skill_codes && $attrs.data.associated_skill_codes.includes('CPP')" title='C++' class="skill-icon">
                    <img src="https://applicationthumbnails.s3.amazonaws.com/skill_thumbnails/cpp.png" height="25px" width="25px"/>
                </i>
                <i v-if="$attrs.data.associated_skill_codes && $attrs.data.associated_skill_codes.includes('GO')" title='Go' class="skill-icon">
                    <img src="https://applicationthumbnails.s3.amazonaws.com/skill_thumbnails/golang.png" height="25px" width="25px"/>
                </i>
                <i v-if="$attrs.data.associated_skill_codes && $attrs.data.associated_skill_codes.includes('SCALA')" title='Scala' class="skill-icon">
                    <img src="https://applicationthumbnails.s3.amazonaws.com/skill_thumbnails/scala.png" height="25px" width="25px"/>
                </i>
                <i v-if="$attrs.data.associated_skill_codes && $attrs.data.associated_skill_codes.includes('SPARK')" title='Apache Spark' class="skill-icon">
                    <img src="https://applicationthumbnails.s3.amazonaws.com/skill_thumbnails/spark.png" height="25px" width="25px"/>
                </i>
                <i v-if="$attrs.data.associated_skill_codes && $attrs.data.associated_skill_codes.includes('DOCKER')" title='Docker' class="skill-icon">
                    <img src="https://applicationthumbnails.s3.amazonaws.com/skill_thumbnails/docker.png" height="25px" width="25px"/>
                </i>
                <i v-if="$attrs.data.associated_skill_codes && $attrs.data.associated_skill_codes.includes('KUBERNETES')" title='Kubernetes' class="skill-icon">
                    <img src="https://applicationthumbnails.s3.amazonaws.com/skill_thumbnails/kubernetes.png" height="25px" width="25px"/>
                </i>
                <i v-if="$attrs.data.associated_skill_codes && $attrs.data.associated_skill_codes.includes('JENKINS')" title='Jenkins' class="skill-icon">
                    <img src="https://applicationthumbnails.s3.amazonaws.com/skill_thumbnails/jenkins.png" height="25px" width="25px"/>
                </i>
                <i v-if="$attrs.data.associated_skill_codes && $attrs.data.associated_skill_codes.includes('GRAPHQL')" title='GraphQL' class="skill-icon">
                    <img src="https://applicationthumbnails.s3.amazonaws.com/skill_thumbnails/graphql.png" height="25px" width="25px"/>
                </i>
                <i v-if="$attrs.data.associated_skill_codes && $attrs.data.associated_skill_codes.includes('MONGODB')" title='MongoDB' class="skill-icon">
                    <img src="https://applicationthumbnails.s3.amazonaws.com/skill_thumbnails/mongodb.png" height="25px" width="25px"/>
                </i>
                <i v-if="$attrs.data.associated_skill_codes && $attrs.data.associated_skill_codes.includes('MYSQL')" title='MySQL' class="skill-icon">
                    <img src="https://applicationthumbnails.s3.amazonaws.com/skill_thumbnails/mysql.png" height="25px" width="25px"/>
                </i>
                <i v-if="$attrs.data.associated_skill_codes && $attrs.data.associated_skill_codes.includes('MARIADB')" title='MariaDB' class="skill-icon">
                    <img src="https://applicationthumbnails.s3.amazonaws.com/skill_thumbnails/mariadb.png" height="25px" width="25px"/>
                </i>
                <i v-if="$attrs.data.associated_skill_codes && $attrs.data.associated_skill_codes.includes('POSTGRES')" title='PostgreSQL' class="skill-icon">
                    <img src="https://applicationthumbnails.s3.amazonaws.com/skill_thumbnails/postgres.png" height="25px" width="25px"/>
                </i>
                <i v-if="$attrs.data.associated_skill_codes && $attrs.data.associated_skill_codes.includes('REDIS')" title='Redis' class="skill-icon">
                    <img src="https://applicationthumbnails.s3.amazonaws.com/skill_thumbnails/redis.png" height="25px" width="25px"/>
                </i>
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

<style scoped>
    .skill-icon{
        padding: 5px;
    }
    .skill-icon img{
        border-radius: 100%;
    }
</style>