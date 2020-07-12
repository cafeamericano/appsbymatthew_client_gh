<template>
    <div>
        <NavbarApplications/>
        <section v-if="applicationsLoaded" class='animated fadeIn container pb-4'>

            <div class="row mt-3">
                <div class="col-12">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text">Search</span>
                        </div>
                        <input v-model='suppliedTitle' @input="fetchApps" placeholder='Search by title (case-sensitive)' type="text" class="form-control">
                    </div>
                </div>
            </div>


            <div class="row mt-3">

                <!-- Support Status Filter -->
                <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-2">
                    <multiselect 
                        v-model="selectedStatuses" 
                        :options="statuses" 
                        :multiple="true" 
                        :close-on-select="false" 
                        :clear-on-select="false" 
                        :preserve-search="true"
                        placeholder="Support Status"
                        :preselect-first="false"
                        track-by="value" 
                        label="label"
                        @input="fetchApps"
                        >
                        <template 
                            slot="selection" 
                            slot-scope="{ values, search, isOpen }"
                        >
                            <span 
                                class="multiselect__single" 
                                v-if="selectedStatuses.length &amp;&amp; !isOpen">
                                    {{ selectedStatuses.length }} status(es) selected
                            </span>
                        </template>
                    </multiselect>
                </div>

                <!-- Skill Filter -->
                <div class="col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-2">
                    <multiselect 
                        v-model="selectedSkills" 
                        :options="skills" 
                        :multiple="true" 
                        :close-on-select="false" 
                        :clear-on-select="false" 
                        :preserve-search="true"
                        placeholder="Skills Employed"
                        :preselect-first="false"
                        @input="fetchApps"
                        >
                        <template 
                            slot="selection" 
                            slot-scope="{ values, search, isOpen }"
                        >
                            <span 
                                class="multiselect__single" 
                                v-if="selectedSkills.length &amp;&amp; !isOpen">
                                    {{ selectedSkills.length }} skill(s) selected
                            </span>
                        </template>
                    </multiselect>
                </div>

                <!-- Is Deployed Filter -->
                <div class='col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-2'>
                    <multiselect 
                        v-model="isDeployedValue" 
                        deselect-label=""
                        placeholder="Hide Non-Deployed Apps" 
                        :options="isDeployedOptions"
                        :searchable="false" 
                        track-by="value" 
                        label="label"
                        :preselect-first="false"
                        @input="fetchApps"
                    >
                        <template 
                            slot="singleLabel" 
                            slot-scope="{ option }"
                        >
                            <strong>Hide undeployed apps: {{ option.label }}</strong>
                        </template>
                    </multiselect>
                </div>

            </div>

            <hr/>

            <div class="row">    
                <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12" v-for='item in applications' :key='item.title'>
                    <AppPreviewMini :data='item'/>
                </div>
            </div>

            <div class="row mt-3">
                <div class='col-12'>
                    <div id='loadMoreAppsButton' class="btn btn-primary w-100" @click="loadMoreApps">Load More Applications</div>
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
import global from "@/global";
import Multiselect from 'vue-multiselect'
import AppPreviewMini from "@/components/AppPreviewMini.vue";

export default {
    name: "Applications",
    components: {
        ScreenOverlay,
        NavbarApplications,
        Multiselect,
        AppPreviewMini
    },
    mounted: function() {
        var self = this;
        self.fetchApps();
        self.fetchSkills();
    },
    methods: {

        fetchApps: function(isExtending) {
            var self = this;
            var url = "https://appsbymatthew-qgzgpr7klq-uc.a.run.app/api/applications/filter";
            var queryString = '?';

            queryString += `limit=${this.appsPerPage}&`
            queryString += `skip=${isExtending == true ? (this.appsPerPage * this.currentPage) : 0}&`

            if (this.filterFeatured) { 
                queryString += `featured=${this.filterFeatured}&`
            }
            if (this.isDeployedValue.value) {
                queryString += `deployed=true&`
            }
            if(this.selectedSkills.length) {
                queryString += `keywords=${this.selectedSkills}`;
            }
            if(this.suppliedTitle && this.suppliedTitle.length) {
                queryString += `title=${this.suppliedTitle}`;
            }
            if(this.selectedStatuses.length) {
                let statusList = []
                this.selectedStatuses.forEach(status => {
                    if (status) {
                        statusList.push(status.value)
                    }
                })
                queryString += `supportStatus=${statusList}`;
            }

            fetch(url + queryString)
            .then(function (response) {
                return response.json();
            })
            .then(function (result) {
                self.applicationsLoaded = true;
                console.log(isExtending)
                if (isExtending == true) {
                    self.applications = self.applications.concat(result)
                }
                else {
                    self.applications = result;
                    self.currentPage = 0;
                }
                result.length < self.appsPerPage
                    ? document.getElementById('loadMoreAppsButton').style.display = 'none'
                    : document.getElementById('loadMoreAppsButton').style.display = 'block'
            });

        },

        fetchSkills: function() {

            var self = this;
            var url = "https://appsbymatthew-qgzgpr7klq-uc.a.run.app/api/skills";
            var queryString = '?';

            fetch(url + queryString)
            .then(function (response) {
                return response.json();
            })
            .then(function (result) {
                var skillNames = [];
                result.forEach(element => {
                    skillNames.push(element.name)
                });
                self.skillsLoaded = true;
                self.skills = skillNames;
            });

        },
        
        loadMoreApps: function() {
            this.currentPage += 1;
            this.fetchApps(true);
        },
        toggleFeaturedFilter: function() {
            if (this.filterFeatured) {
                this.filterFeatured = false;
            }
            else {
                this.filterFeatured = true;
            }
            this.fetchApps();
        },
        toggleDeployedFilter: function() {
            if (this.isDeployed) {
                this.isDeployed = false;
            }
            else {
                this.isDeployed = true;
            }
            this.fetchApps();
        }
    },
    data() {
        return {
            componentKey: 0,
            appsPerPage: 6,
            currentPage: 0,
            applications: [],
            skills: [],
            selectedSkills: [],
            applicationsLoaded: false,
            skillsLoaded: false,
            isInflated: false,
            filterFeatured: null,
            loadingMessage: `
                <div>Loading list of Applications...</div>
                <div class="spinner-grow text-success" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            `,
            isDeployedValue: false,
            isDeployedOptions: [
                {label: "No", value: false},
                {label: "Yes", value: true}
            ],
            selectedStatuses: [],
            statuses: [
                {label: "Active", value: 'active'},
                {label: "Inactive", value: 'inactive'},
                {label: "Discontinued", value: 'discontinued'}
            ],
            suppliedTitle: ''
        }
    }
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>