<template>
    <div>
        <NavbarApplications/>
        <AppDetails :isEditing='false'/>
    </div>
</template>

<script>

// @ is an alias to /src
import ScreenOverlay from "@/components/_Shared/ScreenOverlay.vue";
import NavbarApplications from "@/components/Applications/Navbar.vue";
import AppDetails from "@/components/Applications/Details.vue";
import common from "@/common.js";
import {config} from "@/config";
import _ from 'lodash';
import commonUtils from '@cafeamericano/common-js-utils';

export default {
    name: "Applications_Create",
    components: {
        ScreenOverlay,
        NavbarApplications,
        AppDetails
    },
    mounted: function() {
        commonUtils.behaviorAnalyzer.recordAction({
            location: window.location.hostname,
            sublocation: "Applications - Create", 
            description: "Visited the create new app page.",
            details: {}
        });
    },
    data() {
        return {
        }
    }
};
</script>