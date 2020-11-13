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

export default {
    name: "Applications",
    components: {
        ApplicationRow,
        ScreenOverlay,
        NavbarApplications
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