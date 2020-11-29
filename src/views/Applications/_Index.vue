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

export default {
    name: "Applications",
    components: {
        ScreenOverlay,
        NavbarApplications
    },
    mounted: function() {
        common.logClientAction({sublocation: "Applications Page", description: "The user has landed on the Applications page."});
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