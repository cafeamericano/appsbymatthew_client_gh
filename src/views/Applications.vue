<template>
    <div>
        <NavbarApplications/>
        <router-view />

    </div>
</template>

<script>

// @ is an alias to /src
import ApplicationRow from "@/components/ApplicationRow.vue";
import ScreenOverlay from "@/components/ScreenOverlay.vue";
import NavbarApplications from "@/components/Navbars/Applications.vue";
import {config} from "@/config";
import global from "@/global";

export default {
    name: "Applications",
    components: {
        ApplicationRow,
        ScreenOverlay,
        NavbarApplications
    },
    mounted: function() {
        global.logClientAction({sublocation: "Applications Page", description: "The user has landed on the Applications page."});
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