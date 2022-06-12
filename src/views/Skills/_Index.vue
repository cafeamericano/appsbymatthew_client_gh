<template>
    <div>
        <NavbarSkills/>
        <router-view />
    </div>
</template>

<script>

// @ is an alias to /src
import ScreenOverlay from "@/components/_Shared/ScreenOverlay.vue";
import NavbarSkills from "@/components/Skills/Navbar.vue";
import {config} from "@/config";
import common from "@/common";
// import commonUtils from '@cafeamericano/common-js-utils';

export default {
    name: "Skills_Index",
    components: {
        ScreenOverlay,
        NavbarSkills
    },
    mounted: function() {
        // commonUtils.analyticsDashboard.recordAction({
        //     location: window.location.hostname,
        //     sublocation: "Skills Page", 
        //     description: "The user has landed on the Skills page.",
        //     details: {}
        // });
    },  
    data() {
        return {
            componentKey: 0,
            loadingMessage: `
                <div>Loading list of skills...</div>
                <div class="spinner-grow text-success" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            `
        }
    }
};
</script>