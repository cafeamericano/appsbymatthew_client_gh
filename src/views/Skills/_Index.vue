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

export default {
    name: "Skills",
    components: {
        ScreenOverlay,
        NavbarSkills
    },
    mounted: function() {
        common.logClientAction({sublocation: "Skills Page", description: "The user has landed on the Skills page."});
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