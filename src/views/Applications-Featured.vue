<template>
    <div>
        <NavbarApplications/>
        <section v-if="applicationsLoaded" class='animated fadeIn container-fluid pb-4 pl-5 pr-5'>

            <div class="row">
                <div class="col-xl-4 col-lg-6 col-md-6 col-12" v-for='item in applications.filter(item => item.is_featured)' :key='item.title'>
                    <div class='card mt-3 mb-1 border rounded-0'>
                        <h5 class='text-left pl-2 pr-2 pt-2'>{{item.title}}</h5>
                        <div class="text-left pl-2 pr-2 pb-1">
                            <i v-if="item.keywords && item.keywords.includes('React')" title='React' class="fab fa-react fa-lg text-primary p-1"></i>
                            <i v-if="item.keywords && item.keywords.includes('Vue')" title='Vue' class="fab fa-vuejs fa-lg text-success p-1"></i>
                            <i v-if="item.keywords && item.keywords.includes('Angular')" title='Angular' class="fab fa-angular fa-lg text-danger p-1"></i>
                            <i v-if="item.keywords && item.keywords.includes('Node')" title='Node' class="fab fa-node fa-lg text-secondary p-1"></i>
                            <i v-if="item.keywords && item.keywords.includes('JavaScript')" title='JavaScript' class="fab fa-js fa-lg text-warning p-1"></i>
                            <i v-if="item.keywords && item.keywords.includes('Python')" title='Python' class="fab fa-python fa-lg text-info p-1"></i>
                            <i v-if="item.keywords && item.keywords.includes('Go')" title='Go' class="fa-lg text-primary p-1"><strong>GO</strong></i>
                            <i v-if="item.keywords && item.keywords.includes('Java')" title='Java' class="fab fa-java fa-lg text-danger p-1"></i>
                        </div>
                        <img :src='item.image_url' style="width: 100%"/>
                        <p class="p-3 text-left">
                            {{item.description}}
                        </p>
                        <div class="text-right p-2">
                            <small @click="handleDeployLinkClick(item.title)" v-if="item.deployed_link"><a :href='item.deployed_link' :target='"_blank"' class="p-2">Experience</a></small>
                            <small @click="handleFrontEndRepoLinkClick(item.title)" v-if="item.front_end_repo_link">|<a :href='item.front_end_repo_link' :target='"_blank"' class="p-2">Client Source</a></small>
                            <small @click="handleBackEndRepoLinkClick(item.title)" v-if="item.back_end_repo_link">|<a :href='item.back_end_repo_link' :target='"_blank"' class="p-2">API Source</a></small>
                        </div>
                    </div>
                </div>
            </div>

        </section>

        <section v-else>
            <ScreenOverlay :content='loadingMessage'/>
        </section>

    </div>
</template>

<script>

// @ is an alias to /src
import ScreenOverlay from "@/components/ScreenOverlay.vue";
import NavbarApplications from "@/components/Navbars/Applications.vue";
import common from "@/common";
import {config} from "@/config";

export default {
    name: "Applications",
    components: {
        ScreenOverlay,
        NavbarApplications
    },
    mounted: function() {
        var self = this;
        common.logClientAction({sublocation: "Applications - Featured", description: "Visited the Featured Apps page."});
        fetch(`${config.apiUrl}/applications?featured=true`).then(function (response) {
            return response.json();
        }).then(function (result) {
            self.applicationsLoaded = true;
            self.applications = result;
        });
    },
    methods: {
        handleDeployLinkClick: function(title) {
            common.logClientAction({sublocation: "Applications Page - Featured", description: `The user has clicked the deployed link for ${title}.`});
        },
        handleFrontEndRepoLinkClick: function(title) {
            common.logClientAction({sublocation: "Applications Page - Featured", description: `The user has clicked the frontend repo link for ${title}.`});
        },
        handleBackEndRepoLinkClick: function(title) {
            common.logClientAction({sublocation: "Applications Page - Featured", description: `The user has clicked the backend repo link for ${title}.`});
        },
    },
    data() {
        return {
            componentKey: 0,
            applications: [],
            applicationsLoaded: false,
            loadingMessage: `
                <div>Loading list of Applications...</div>
                <div class="spinner-grow text-success" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            `
        }
    }
};
</script>