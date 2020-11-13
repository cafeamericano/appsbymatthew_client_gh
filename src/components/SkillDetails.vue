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
                                    <span class="input-group-text">Name</span>
                                </div>
                                <input v-model='skill.name' type="text" class="form-control">
                            </div>

                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <label class="input-group-text" for="inputGroupSelect01">Type</label>
                                </div>
                                <select v-model='skill.type' class="custom-select" id="inputGroupSelect01">
                                    <option selected>Choose...</option>
                                    <option value="language">Language</option>
                                    <option value="front-end-framework">Front End Framework</option>
                                    <option value="back-end-framework">Back End Framework</option>
                                    <option value="library">Library</option>
                                    <option value="database">Database</option>
                                    <option value="orm">ORM</option>
                                    <option value="deployment">Deployment Tech</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <label class="input-group-text" for="inputGroupSelect01">Demonstrable</label>
                                </div>
                                <select v-model='skill.showInGallery' class="custom-select" id="inputGroupSelect01">
                                    <option selected>Choose...</option>
                                    <option value="true">Yes</option>
                                    <option value="false">No</option>
                                </select>
                            </div>

                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <label class="input-group-text" for="inputGroupSelect01">Proficient</label>
                                </div>
                                <select v-model='skill.showOnPortfolio' class="custom-select" id="inputGroupSelect01">
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

export default {
    name: "Skill-Details",
    components: {
    },
    mounted: function() {
        var self = this;
        if (self.$attrs.isEditing) {
            self.processGet();
        }
    },
    data() {
        return {
            componentKey: 0,
            loadingMessage: `
                <div>Loading list of Applications...</div>
                <div class="spinner-grow text-success" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            `,
            skill: {
                name: '',
                type: '',
                showOnPortfolio: false,
                showInGallery: false
            }
        }
    },
    methods: {
        goBack: function() {
            this.$router.go(-1)
        },
        formatSkillBooleans: function() {
            var self = this;
            self.skill.showOnPortfolio = (self.skill.showOnPortfolio == 'true');
            self.skill.showInGallery = (self.skill.showInGallery == 'true');
        },
        processCreate: function() {
            var self = this;
            self.formatSkillBooleans();
            var url = `${config.apiUrl}/skills`;
            fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(self.skill)
            }).then(response => {
                self.goBack();
            });
        },
        processGet: function() {
            var self = this;
            var url = `${config.apiUrl}/skills/filter?id=${self.$route.params.id}`;
            fetch(url, {
                method: "GET",
                headers: { "Content-Type": "application/json" }
            }).then(function (response) {
                return response.json();
            }).then(response => {
                self.skill = response[0];
            });
        },
        processCreate: function() {
            var self = this;
            if (self.$attrs.isEditing) {
                return self.processEdit();
            }
            self.formatSkillBooleans();
            var url = `${config.apiUrl}/skills`;
            fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(self.skill)
            }).then(response => {
                self.goBack();
            });
        },
        processEdit: function() {
            var self = this;
            self.formatSkillBooleans();
            var url = `${config.apiUrl}/skills`;
            fetch(url, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    _id: this.$route.params.id,
                    name: this.skill.name,
                    showOnPortfolio: this.skill.showOnPortfolio,
                    showInGallery: this.skill.showInGallery
                })
            }).then(response => {
                self.$router.go(-1)
            });
        },
        processDelete: function() {
            var self = this;
            var url = `${config.apiUrl}/skill`;
            fetch(url, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    _id: this.$route.params.id
                })
            }).then(response => {
                self.$router.go(-1)
            });
        }
    }
}

</script>

<style scoped>
</style>