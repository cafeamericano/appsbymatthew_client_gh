<template>
    <div>
        <div class="pt-2 pb-4 pl-4 pr-4">
            <section class='animated fadeIn container pt-2 pb-4 pl-4 pr-4'>

                <div class="row mb-3">
                    <div class="col pr-0 text-right">
                        <span @click='goBack' class="btn btn-secondary rounded-0">Cancel</span>
                        <span @click='processCreate' class="btn btn-primary rounded-0">Save</span>
                    </div>
                </div>

                <div class="row text-left">
                    <div class="col-12 card p-3 mb-3 shadow">
                        <h5>Basic Info</h5><hr/>
                        <section class="">
                            
                           <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Title*</span>
                                </div>
                                <input v-model='appDetails.title' type="text" class="form-control">
                            </div>
                            
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Front-End Repo Link</span>
                                </div>
                                <input v-model='appDetails.front_end_repo_link' type="text" class="form-control">
                            </div>

                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Back-End Repo Link</span>
                                </div>
                                <input v-model='appDetails.back_end_repo_link' type="text" class="form-control">
                            </div>

                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Deployed Link</span>
                                </div>
                                <input v-model='appDetails.deployed_link' type="text" class="form-control">
                            </div>

                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Is Featured*</span>
                                </div>
                                <select v-model='appDetails.is_featured' class='form-control'>
                                    <option default disabled>Select featured status</option>
                                    <option value='true'>Yes</option>
                                    <option value='false'>No</option>
                                </select>     
                            </div>

                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Publish Date*</span>
                                </div>
                                <input v-model='appDetails.publish_date' type="date" class="form-control">
                            </div>

                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Support Status*</span>
                                </div>
                                <select v-model='appDetails.support_status_code' class='form-control'>
                                    <option default disabled>Select support status</option>
                                    <option value='ACTIVE'>Active</option>
                                    <option value='INACTIVE'>Inactive</option>
                                    <option value='DISCONTINUED'>Discontinued</option>
                                    <option value='EXPERIMENTAL'>Experimental</option>
                                </select>                            
                            </div>

                        </section>
                    </div>

                    <div class="col-12 card p-3 mb-3 shadow">
                        <h5>Image and Description</h5><hr/>
                        <section class="">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Image Thumbnail</span>
                                </div>
                                <input v-model='appDetails.image_url' type="text" class="form-control">
                            </div>

                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Description</span>
                                </div>
                                <textarea v-model='appDetails.description' class="form-control"></textarea>
                            </div>
                        </section>
                    </div>

                    <div class="col-12 card p-3 mb-3 shadow">
                        <h5>Skills Utilized</h5><hr/>
                        <section class="row m-0">
                            <div class="col-xl-4 col-lg-6 col-md-6 col-12" v-for='(item, index) in skills.filter(item => item.is_visible_in_app_details)' :key='index'>
                                <div class="row border-bottom mb-1">
                                    <div><input :value='item.code' v-model='appDetails.associated_skill_codes' type='checkbox'/><span class='pl-2'>{{item.name}}</span></div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>

            </section>
            
        </div>
    </div>
</template>

<script>

// @ is an alias to /src
import ScreenOverlay from "@/components/_Shared/ScreenOverlay.vue";
import common from "@/common.js";
import {config} from "@/config";
import _ from 'lodash';
import moment from 'moment';

export default {
    name: "AppDetails",
    components: {
        ScreenOverlay
    },
    mounted: function() {
        var self = this;
        common.getSkills(function(result) {
            self.skills = _.orderBy(result, [function(resultItem) { return resultItem.name.toLowerCase() },'name'], 'asc') || [];
        });
        if (this.$attrs.isEditing) {
            self.processGet();
        }
    },
    data() {
        return {
            componentKey: 0,
            skills: [],
            skillsLoaded: common.skillsLoaded,
            loadingMessage: `
                <div>Loading list of Applications...</div>
                <div class="spinner-grow text-success" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            `,
            appDetails: {
                associated_skill_codes: []
            },
        }
    },
    methods: {
        goBack: function() {
            this.$router.go(-1)
        },
        processGet: function() {
            var self = this;
            common.superFetch(`${config.apiUrl}/applications?applicationId=${self.$attrs.applicationId}`, 'GET', null, (res) => {
                self.appDetails = res[0];
                self.appDetails.publish_date = res[0].publish_date ? moment.unix(res[0].publish_date.$date / 1000).format('YYYY-MM-DD') : null; // MongoDB specific date parsing
            })
        },
        processCreate: function() {
            var self = this;
            if (self.$attrs.isEditing) {
                return self.processEdit();
            }
            console.log(self.appDetails)
            common.superFetch( `${config.apiUrl}/applications`, 'POST', self.appDetails, (res) => {
                self.goBack();
            })
        },
        processEdit: function() {
            var self = this;
            var url = `${config.apiUrl}/applications`;
            common.superFetch( `${config.apiUrl}/applications`, 'PUT', self.appDetails, (res) => {
                self.goBack();
            })
        }
    }
};
</script>