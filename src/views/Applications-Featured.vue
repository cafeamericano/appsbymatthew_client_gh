<template>
    <div>
        <NavbarApplications/>
        <section v-if="ApplicationsLoaded" class='animated slideInUp container-fluid'>

            <div class="row">    
                <div class="col-4" v-for='item in allApplications.filter(item => item.isFeatured)' :key='item.title'>
                    <div class='card p-2 mt-3 mb-1 border rounded-0'>
                        <h5 class='text-left'>{{item.title}}</h5>
                        <div class="text-left">
                            <i v-if="item.keywords.includes('React')" title='React' class="fab fa-react fa-lg text-primary p-1"></i>
                            <i v-if="item.keywords.includes('Vue')" title='Vue' class="fab fa-vuejs fa-lg text-success p-1"></i>
                            <i v-if="item.keywords.includes('Angular')" title='Angular' class="fab fa-angular fa-lg text-danger p-1"></i>
                            <i v-if="item.keywords.includes('Node')" title='Node' class="fab fa-node fa-lg text-secondary p-1"></i>
                            <i v-if="item.keywords.includes('JavaScript')" title='JavaScript' class="fab fa-js fa-lg text-warning p-1"></i>
                            <i v-if="item.keywords.includes('Python')" title='Python' class="fab fa-python fa-lg text-info p-1"></i>
                            <i v-if="item.keywords.includes('Go')" title='Go' class="fa-lg text-primary p-1"><strong>GO</strong></i>
                        </div>
                        <hr/>
                        <img :src='item.imagePath' style="width: 100%"/>
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
// import ApplicationPreview from "@/components/ApplicationPreview.vue";
// import ApplicationRow from "@/components/ApplicationRow.vue";
import ScreenOverlay from "@/components/ScreenOverlay.vue";
import NavbarApplications from "@/components/Navbars/Applications.vue";

export default {
    name: "Applications",
    components: {
        // ApplicationPreview,
        // ApplicationRow,
        ScreenOverlay,
        NavbarApplications
    },
    mounted: function() {
        this.pullApplications();
        // this.pullKeywords();
    },
    data() {
        return {
            componentKey: 0,
            allApplications: [],
            ApplicationsLoaded: false,
            loadingMessage: `
                <div>Loading list of Applications...</div>
                <div class="spinner-grow text-success" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            `
        }
    },
    methods: {
        pullApplications() {
            var self = this;
            fetch("https://central-api-flask-cm6ud432ka-uc.a.run.app/AppGalleryLite/api/applications").then(function (response) {
                return response.json();
            }).then(function (result) {
                self.allApplications = result;
                self.componentKey +=1;
                self.ApplicationsLoaded = true;
            });
        }
    }
};
</script>