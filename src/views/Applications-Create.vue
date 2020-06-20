<template>
    <div>
        <NavbarApplications/>
        <div class="pt-2 pb-4 pl-4 pr-4">
            <section class='animated fadeIn container pt-2 pb-4 pl-4 pr-4'>

                <div class="row mb-3">
                    <div class="col pr-0 text-right">
                        <span class="btn btn-secondary rounded-0">Cancel</span>
                        <span class="btn btn-primary rounded-0">Save</span>
                    </div>
                </div>

                <div class="row text-left">
                    <div class="col-8">
                        <section class="card p-3 mb-3 shadow">
                            
                           <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Title</span>
                                </div>
                                <input type="text" class="form-control">
                            </div>

                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Image Thumbnail</span>
                                </div>
                                <input type="text" class="form-control">
                            </div>
                            
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Application Type</span>
                                </div>
                                <input type="text" class="form-control">
                            </div>

                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Deployed Link</span>
                                </div>
                                <input type="text" class="form-control">
                            </div>

                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Description</span>
                                </div>
                                <input type="text" class="form-control">
                            </div>

                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Is Featured</span>
                                </div>
                                <input type="text" class="form-control">
                            </div>

                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Primary Language</span>
                                </div>
                                <input type="text" class="form-control">
                            </div>

                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Publish Date</span>
                                </div>
                                <input type="text" class="form-control">
                            </div>

                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Support Status</span>
                                </div>
                                <input type="text" class="form-control">
                            </div>

                        </section>
                    </div>

                    <div class="col-4 card p-3 shadow">
                        <!-- <section class="card p-3"> -->
                            <h5 class="p-1 pb-3 text-center border-bottom"><strong>Skills Employed</strong></h5>
                            <div v-for='(item, index) in skills.filter(item => 1 == 1)' :key='index'>
                                <div v-bind:class='index % 2 == 0 ? "row border-bottom p-1" : "row border-bottom p-1"'>
                                    <div class="col-2"><input type='checkbox'/></div>
                                    <div class="col-10">{{item.name}}</div>
                                </div>
                            </div>
                            <small class="p-1 pb-3 text-center border-top">Displaying {{skills.length}} skills</small>
                        <!-- </section> -->
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
            `
        }
    }
};
</script>