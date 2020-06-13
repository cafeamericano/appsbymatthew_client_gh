<template>
    <div>
        <NavbarApplications/>
        <section v-if="applicationsLoaded" class='animated slideInUp'>
            <div class='row'>

                <!-- Active -->
                <div class="col-12 text-left">
                    <h5>Active</h5>
                    <hr/>
                </div>
                <div class='col-xl-4 col-lg-6 col-md-6' v-for='item in allApplications.filter(item => item.supportStatus == "active")' :key='item.title'>
                    <AppPreview v-bind='item'/>
                </div>
                <div class="col-12 text-left mb-4"></div>

                <!-- Inactive -->
                <div class="col-12 text-left">
                    <h5>Inactive</h5>
                    <hr/>
                </div>
                <div class='col-xl-4 col-lg-6 col-md-6' v-for='item in allApplications.filter(item => item.supportStatus == "inactive")' :key='item.title'>
                    <AppPreview v-bind='item'/>
                </div>
                <div class="col-12 text-left mb-4"></div>

                <!-- Discontinued -->
                <div class="col-12 text-left">
                    <h5>Discontinued</h5>
                    <hr/>
                </div>
                <div class='col-xl-4 col-lg-6 col-md-6' v-for='item in allApplications.filter(item => item.supportStatus == "discontinued")' :key='item.title'>
                    <AppPreview style="opacity: 0.35" v-bind='item'/>
                </div>
                <div class="col-12 text-left mb-4"></div>


            </div>
        </section>

        <section v-else>
            <ScreenOverlay :content='loadingMessage'/>
        </section>

    </div>
</template>

<script>

// @ is an alias to /src
import AppPreview from "@/components/AppPreview.vue";
import ScreenOverlay from "@/components/ScreenOverlay.vue";
import NavbarApplications from "@/components/Navbars/Applications.vue";

export default {
    name: "AllApplications",
    components: {
        AppPreview,
        ScreenOverlay,
        NavbarApplications
    },
    mounted: function() {
        this.pullApplications();
        this.pullKeywords();
    },
    data() {
        return {
            componentKey: 0,
            allApplications: [],
            applicationsLoaded: false,
            loadingMessage: `
                <div>Loading list of applications...</div>
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
                self.applicationsLoaded = true;
            });
        },
        pullKeywords() {
            var self = this;
            fetch("https://central-api-flask-cm6ud432ka-uc.a.run.app/AppGalleryLite/api/keywords").then(function (response) {
                return response.json();
            }).then(function (result) {
                self.todos = result;
                self.componentKey +=1;
            });
        }
    }
};
</script>