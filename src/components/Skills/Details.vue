<template>
    <main class="container p-3 animated fadeIn">
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
                        <h5>Skill Information</h5><hr/>
                        <section class="">
                            
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Name*</span>
                                </div>
                                <input v-model='skillDetails.name' type="text" class="form-control">
                            </div>

                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Reference Code*</span>
                                </div>
                                <input v-model='skillDetails.code' type="text" class="form-control">
                            </div>

                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <label class="input-group-text" for="inputGroupSelect01">Type*</label>
                                </div>
                                <select v-model='skillDetails.skill_type_code' class="custom-select" id="inputGroupSelect01">
                                    <option selected>Choose...</option>
                                    <option value="LANGUAGE">Language</option>
                                    <option value="FRONTENDFRAMEWORK">Front End Framework</option>
                                    <option value="BACKENDFRAMEWORK">Back End Framework</option>
                                    <option value="LIBRARY">Library</option>
                                    <option value="DATABASE">Database</option>
                                    <option value="DATASCIENCE">Data Science and ML</option>
                                    <option value="OPERATINGSYSTEM">Operating System</option>
                                    <option value="CLOUD">Cloud Technology</option>
                                    <option value="DEPLOYMENT">Deployment Technology</option>
                                    <option value="ORM">ORM</option>
                                    <option value="OTHER">Other</option>
                                </select>
                            </div>

                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <label class="input-group-text" for="inputGroupSelect01">Proficient*</label>
                                </div>
                                <select v-model='skillDetails.is_proficient' class="custom-select" id="inputGroupSelect01">
                                    <option selected>Choose...</option>
                                    <option value="true">Yes</option>
                                    <option value="false">No</option>
                                </select>
                            </div>

                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <label class="input-group-text" for="inputGroupSelect01">Allow App Association*</label>
                                </div>
                                <select v-model='skillDetails.is_visible_in_app_details' class="custom-select" id="inputGroupSelect01">
                                    <option selected>Choose...</option>
                                    <option value="true">Yes</option>
                                    <option value="false">No</option>
                                </select>
                            </div>

                        </section>
                    </div>

                </div>

            </section>

        </div>
    </main>
</template>

<script>

import {config} from "@/config";
import common from "@/common";

export default {
    name: "Skill-Details",
    components: {
    },
    mounted: function() {
        var self = this;
        if (self.$attrs.isEditing) {
            self.processGet();
        }
        common.getSkills((res) => this.skillTypes = res);
    },
    data() {
        return {
            text: {},
            componentKey: 0,
            loadingMessage: `
                <div>Loading list of Applications...</div>
                <div class="spinner-grow text-success" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            `,
            skillDetails: {}
        }
    },
    methods: {
        goBack: function() {
            this.$router.go(-1)
        },
        processGet: function() {
            var self = this;
            var url = `${config.apiUrl}/skills/one?skillCode=${self.$attrs.skillCode}`;
            common.superFetch(url, 'GET', null, function(response) {
                self.skillDetails = response[0];
            });
        },
        processCreate: function() {
            var self = this;
            if (self.$attrs.isEditing) {
                return self.processEdit();
            }
            var url = `${config.apiUrl}/skills`;
            common.superFetch(url, 'POST', self.skillDetails, function(res) {
                self.goBack();
            })
        },
        processEdit: function() {
            var self = this;
            var url = `${config.apiUrl}/skills`;
            common.superFetch(url, 'PUT', self.skillDetails, function(res) {
                self.goBack();
            })
        }
    }
}

</script>

<style scoped>
</style>