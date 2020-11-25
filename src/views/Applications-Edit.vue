<template>
    <div>
        <NavbarApplications/>
        <AppDetails :isEditing='true' :applicationId='$route.params.applicationId'/>
    </div>
</template>

<script>

// @ is an alias to /src
import ScreenOverlay from "@/components/ScreenOverlay.vue";
import NavbarApplications from "@/components/Navbars/Applications.vue";
import AppDetails from "@/components/AppDetails.vue";
import common from "@/common.js";
import {config} from "@/config";
import _ from 'lodash';

export default {
    name: "Applications-Edit",
    components: {
        ScreenOverlay,
        NavbarApplications,
        AppDetails
    },
    mounted: function() {
        console.log(this.$attrs.data._id.$oid)
    },
    data() {
        return {
        }
    }
};
</script>