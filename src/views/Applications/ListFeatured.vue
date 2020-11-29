<template>
    <div>
        <NavbarApplications/>
        <section v-if="applicationsLoaded" class='animated fadeIn container-fluid pb-4 pl-5 pr-5'>
            <div class="row">    
                <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12" v-for='item in applications' :key='item.title'>
                    <AppPreviewMini :data='item'/>
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
import ScreenOverlay from "@/components/_Shared/ScreenOverlay.vue";
import NavbarApplications from "@/components/Applications/Navbar.vue";
import AppPreviewMini from "@/components/Applications/AppCard.vue";

import common from "@/common";
import {config} from "@/config";

export default {
    name: "Applications",
    components: {
        ScreenOverlay,
        NavbarApplications,
        AppPreviewMini
    },
    mounted: function() {
        var self = this;
        common.logClientAction({sublocation: "Applications - Featured", description: "Visited the Featured Apps page."});
        common.superFetch(`${config.apiUrl}/applications?featured=true`, 'GET', null, function (response) {
            self.applicationsLoaded = true;
            self.applications = response;
        });
    },
    methods: {
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