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
                                    <span class="input-group-text">Title</span>
                                </div>
                                <input v-model='app.title' type="text" class="form-control">
                            </div>
                            
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Front-End Repo Link</span>
                                </div>
                                <input v-model='app.frontendRepoLink' type="text" class="form-control">
                            </div>

                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Back-End Repo Link</span>
                                </div>
                                <input v-model='app.backendRepoLink' type="text" class="form-control">
                            </div>

                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Deployed Link</span>
                                </div>
                                <input v-model='app.deployedLink' type="text" class="form-control">
                            </div>

                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Is Featured</span>
                                </div>
                                <select v-model='app.isFeatured' class='form-control'>
                                    <option default disabled>Select featured status</option>
                                    <option value='true'>Yes</option>
                                    <option value='false'>No</option>
                                </select>     
                            </div>

                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Publish Date</span>
                                </div>
                                <input v-model='app.publishDate' type="date" class="form-control">
                            </div>

                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Support Status</span>
                                </div>
                                <select v-model='app.supportStatus' class='form-control'>
                                    <option default disabled>Select support status</option>
                                    <option value='active'>Active</option>
                                    <option value='inactive'>Inactive</option>
                                    <option value='discontinued'>Discontinued</option>
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
                                <input v-model='app.imagePath' type="text" class="form-control">
                            </div>

                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Description</span>
                                </div>
                                <textarea v-model='app.description' class="form-control"></textarea>
                            </div>
                        </section>
                    </div>

                    <div class="col-12 card p-3 mb-3 shadow">
                        <h5>Skills Utilized</h5><hr/>
                        <section class="row m-0">
                            <div class="col-4" v-for='(item, index) in skills.filter(item => 1 == 1)' :key='index'>
                                <div class="row border-bottom mb-1">
                                    <div><input :value='item.name' v-model='app.keywords' type='checkbox'/><span class='pl-2'>{{item.name}}</span></div>
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
import ScreenOverlay from "@/components/ScreenOverlay.vue";
import global from "@/global.js";
import _ from 'lodash';

export default {
    name: "AppDetails",
    components: {
        ScreenOverlay
    },
    mounted: function() {
        var self = this;
        global.getSkills(function(result) {
            self.skills = _.orderBy(result, [function(resultItem) { return resultItem.name.toLowerCase() },'name'], 'asc') || [];
            self.skillsLoaded = true;
        });
        if (this.$attrs.isEditing) {
            self.processGet();
        }
    },
    data() {
        // console.log('***', global.skills)
        return {
            componentKey: 0,
            skills: [],
            skillsLoaded: global.skillsLoaded,
            loadingMessage: `
                <div>Loading list of Applications...</div>
                <div class="spinner-grow text-success" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            `,
            app: {
                title: '',
                frontendRepoLink: '',
                backendRepoLink: '',
                deployedLink: '',
                isFeatured: '',
                publishDate: '',
                supportStatus: '',
                imagePath: '',
                description: '',
                keywords: []
            },
        }
    },
    methods: {
        goBack: function() {
            this.$router.go(-1)
        },
        processGet: function() {
            var self = this;
            var url = `http://localhost:5000/api/applications/filter?id=${self.$route.params.id}`;
            fetch(url, {
                method: "GET",
                headers: { "Content-Type": "application/json" }
            }).then(function (response) {
                return response.json();
            }).then(response => {
                self.app = response[0];
                self.app.publishDate = self.app.publishDate.substring(0,10)
            });
        },
        processCreate: function() {
            var self = this;
            if (self.$attrs.isEditing) {
                return self.processEdit();
            }
            var url = 'http://localhost:5000/api/applications';
            fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(self.app)
            }).then(response => {
                self.goBack();
            });
        },
        processEdit: function() {
            var self = this;
            var url = 'http://localhost:5000/api/applications';
            fetch(url, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    _id: self.$route.params.id,
                    title: self.app.title,
                    publishDate: self.app.publishDate,
                    isFeatured: self.app.isFeatured,
                    imagePath: self.app.imagePath,
                    description: self.app.description,
                    deployedLink: self.app.deployedLink,
                    supportStatus: self.app.supportStatus,
                    frontendRepoLink: self.app.frontendRepoLink,
                    backendRepoLink: self.app.backendRepoLink,
                    keywords: self.app.keywords
                })
            }).then(response => {
                self.$router.go(-1)
            });
        },
        processDelete: function() {
            var self = this;
            var url = 'http://localhost:5000/api/applications';
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
};
</script>