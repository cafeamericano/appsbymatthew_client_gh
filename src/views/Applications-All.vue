<template>
    <div>
        <NavbarApplications/>
        <section v-if="applicationsLoaded" class='animated fadeIn'>
            <table class="table table-striped">
                <div v-for='(item, index) in allApplications.filter(item => 1 == 1)' :key='index'>
                    <ApplicationRow v-bind='item' :rownum='index'/>
                </div>
            </table>
        </section>

        <section v-else>
            <ScreenOverlay :content='loadingMessage'/>
        </section>

    </div>
</template>

<script>

// @ is an alias to /src
// import ApplicationPreview from "@/components/ApplicationPreview.vue";
import ApplicationRow from "@/components/ApplicationRow.vue";
import ScreenOverlay from "@/components/ScreenOverlay.vue";
import NavbarApplications from "@/components/Navbars/Applications.vue";

export default {
    name: "Applications",
    components: {
        // ApplicationPreview,
        ApplicationRow,
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
        }
    }
};
</script>

<style>
    td {
        white-space: nowrap;
    }
</style>