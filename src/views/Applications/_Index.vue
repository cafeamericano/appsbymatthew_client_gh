<template>
    <div>
        <NavbarApplications/>
        <router-view />

    </div>
</template>

<script>

// @ is an alias to /src
import ScreenOverlay from "@/components/_Shared/ScreenOverlay.vue";
import NavbarApplications from "@/components/Applications/Navbar.vue";
import {config} from "@/config";
import common from "@/common";
import analytics from '@/analytics';

export default {
    name: "Applications_Index",
    components: {
        ScreenOverlay,
        NavbarApplications
    },
    mounted: function() {
        analytics.recordAction({
            location: window.location.hostname,
            sublocation: "Applications Page", 
            description: "The user has landed on the Applications page.",
            details: {}
        });
    },  
    data() {
        return {
            message: null
        }
    },
    methods: {
    }
};
</script>