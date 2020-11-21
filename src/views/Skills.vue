<template>
    <div>
        <NavbarSkills/>
        <router-view />
    </div>
</template>

<script>

// @ is an alias to /src
import SkillRow from "@/components/SkillRow.vue";
import ScreenOverlay from "@/components/ScreenOverlay.vue";
import NavbarSkills from "@/components/Navbars/Skills.vue";
import {config} from "@/config";
import global from "@/global";

export default {
    name: "Skills",
    components: {
        SkillRow,
        ScreenOverlay,
        NavbarSkills
    },
    mounted: function() {
        global.logClientAction({sublocation: "Skills Page", description: "The user has landed on the Skills page."});
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