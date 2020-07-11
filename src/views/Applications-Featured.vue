<template>
    <div>
        <NavbarApplications/>
        <section v-if="applicationsLoaded" class='animated fadeIn container pb-4'>

            <div class="row">
                <div class="col-6" v-for='item in applications.filter(item => item.isFeatured)' :key='item.title'>
                    <div class='card mt-3 mb-1 border rounded-0'>
                        <h5 class='text-left pl-2 pr-2 pt-2'>{{item.title}}</h5>
                        <div class="text-left pl-2 pr-2 pb-1">
                            <i v-if="item.keywords.includes('React')" title='React' class="fab fa-react fa-lg text-primary p-1"></i>
                            <i v-if="item.keywords.includes('Vue')" title='Vue' class="fab fa-vuejs fa-lg text-success p-1"></i>
                            <i v-if="item.keywords.includes('Angular')" title='Angular' class="fab fa-angular fa-lg text-danger p-1"></i>
                            <i v-if="item.keywords.includes('Node')" title='Node' class="fab fa-node fa-lg text-secondary p-1"></i>
                            <i v-if="item.keywords.includes('JavaScript')" title='JavaScript' class="fab fa-js fa-lg text-warning p-1"></i>
                            <i v-if="item.keywords.includes('Python')" title='Python' class="fab fa-python fa-lg text-info p-1"></i>
                            <i v-if="item.keywords.includes('Go')" title='Go' class="fa-lg text-primary p-1"><strong>GO</strong></i>
                        </div>
                        <img :src='item.imagePath' style="width: 100%"/>
                        <div class="text-right p-2">
                            <small v-if="item.deployedLink"><a :href='item.deployedLink' :target='"_blank"' class="p-2">Experience</a></small>
                            <small v-if="item.frontendRepoLink">|<a :href='item.frontendRepoLink' :target='"_blank"' class="p-2">Client Source</a></small>
                            <small v-if="item.backendRepoLink">|<a :href='item.backendRepoLink' :target='"_blank"' class="p-2">API Source</a></small>
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
import global from "@/global";

export default {
    name: "Applications",
    components: {
        ScreenOverlay,
        NavbarApplications
    },
    mounted: function() {
        var self = this;
        console.log('prepping')
        fetch("http://localhost:5000/api/applications/filter?featured=true").then(function (response) {
            return response.json();
        }).then(function (result) {
            self.applicationsLoaded = true;
            self.applications = result;
        });
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