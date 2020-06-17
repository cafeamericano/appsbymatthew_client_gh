<template>
    <div>
        <NavbarApplications/>
        <div class="pt-2 pb-4 pl-4 pr-4">
            <section class='animated fadeIn container-fluid pt-2 pb-4 pl-4 pr-4'>

                <div class="row mb-3">
                    <div class="col pr-0 text-right">
                        <span class="btn btn-secondary rounded-0">Cancel</span>
                        <span class="btn btn-primary rounded-0">Save</span>
                    </div>
                </div>

                <div class="row text-left">
                    <div class="col-8">
                        <section class="card p-3 mb-3">
                            <div class="row">
                                <div class="col-4"><label class="text-left pt-1">Title</label></div>
                                <div class="col-8"><input type="text" class="form-control mb-3" placeholder="Title"></div>
                            </div>
                            <div class="row">
                                <div class="col-4"><label class="text-left pt-1">Image Path</label></div>
                                <div class="col-8"><input type="text" class="form-control mb-3" placeholder="Image Path"></div>
                            </div>
                        </section>
                        <section class="card p-3">
                            <div class="row">
                                <div class="col-4"><label class="text-left pt-1">Application Type</label></div>
                                <div class="col-8"><input type="text" class="form-control mb-3" placeholder="Application Type"></div>
                            </div>
                            <div class="row">
                                <div class="col-4"><label class="text-left pt-1">Deployed Link</label></div>
                                <div class="col-8"><input type="text" class="form-control mb-3" placeholder="Deployed Link"></div>
                            </div>
                            <div class="row">
                                <div class="col-4"><label class="text-left pt-1">Description</label></div>
                                <div class="col-8"><input type="text" class="form-control mb-3" placeholder="Description"></div>
                            </div>
                            <div class="row">
                                <div class="col-4"><label class="text-left pt-1">Is Featured</label></div>
                                <div class="col-8"><input type="text" class="form-control mb-3" placeholder="Is Featured"></div>
                            </div>
                            <div class="row">
                                <div class="col-4"><label class="text-left pt-1">Keywords</label></div>
                                <div class="col-8"><input type="text" class="form-control mb-3" placeholder="Keywords"></div>
                            </div>
                            <div class="row">
                                <div class="col-4"><label class="text-left pt-1">Primary Language</label></div>
                                <div class="col-8"><input type="text" class="form-control mb-3" placeholder="Primary Language"></div>
                            </div>
                            <div class="row">
                                <div class="col-4"><label class="text-left pt-1">Publish Date</label></div>
                                <div class="col-8"><input type="text" class="form-control mb-3" placeholder="Publish Date"></div>
                            </div>
                            <div class="row">
                                <div class="col-4"><label class="text-left pt-1">Support Status</label></div>
                                <div class="col-8"><input type="text" class="form-control mb-3" placeholder="Support Status"></div>
                            </div>
                        </section>
                    </div>
                    <div class="col-4 card p-3">
                        <!-- <section class="card p-3"> -->
                            <h5 class="p-1 pb-3 text-center border-bottom"><strong>Skills Employed</strong></h5>
                            <div v-for='(item, index) in skills.filter(item => 1 == 1)' :key='index'>
                                <div v-bind:class='index % 2 == 0 ? "row bg-light p-1" : "row bg-gray p-1"'>
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

export default {
    name: "Applications",
    components: {
        ScreenOverlay,
        NavbarApplications
    },
    mounted: {
        doStuff: function() {
            console.log(global.skills)
        }
    },
    data() {
        console.log('***', global.skills)
        return {
            componentKey: 0,
            skills: global.skills,
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