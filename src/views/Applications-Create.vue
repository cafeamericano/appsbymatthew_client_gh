<template>
    <div>
        <NavbarApplications/>
        <AppDetails :isEditing='false'/>
    </div>
</template>

<script>

// @ is an alias to /src
import ScreenOverlay from "@/components/ScreenOverlay.vue";
import NavbarApplications from "@/components/Navbars/Applications.vue";
import AppDetails from "@/components/AppDetails.vue";
import global from "@/global.js";
import {config} from "@/config";
import _ from 'lodash';

export default {
    name: "Applications-Create",
    components: {
        ScreenOverlay,
        NavbarApplications,
        AppDetails
    },
    mounted: function() {
    },
    data() {
        return {
        }
    }
};
</script>