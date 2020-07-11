<template>
    <div>
        <NavbarApplications/>
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
                                <input v-model='app.isFeatured' type="text" class="form-control">
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
                                <input v-model='app.supportStatus' type="text" class="form-control">
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

            <!-- <section v-else>
                <ScreenOverlay :content='loadingMessage'/>
            </section> -->
        </div>
    </div>
</template>

<script>

// @ is an alias to /src
import ScreenOverlay from "@/components/ScreenOverlay.vue";
import NavbarApplications from "@/components/Navbars/Applications.vue";
import global from "@/global.js";
import _ from 'lodash';

export default {
    name: "Applications",
    components: {
        ScreenOverlay,
        NavbarApplications
    },
    mounted: function() {
        var self = this;
        global.getSkills(function(result) {
            self.skills = _.orderBy(result, [function(resultItem) { return resultItem.name.toLowerCase() },'name'], 'asc') || [];
            self.skillsLoaded = true;
        });
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
        processCreate: function() {
            var self = this;
            var url = 'http://localhost:5000/api/applications'
            fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(self.app)
            }).then(response => {
                self.goBack();
            });
        },
    }
};
</script>