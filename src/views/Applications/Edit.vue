<template>
    <div>
        <NavbarApplications/>
        <AppDetails :isEditing='true' :applicationId='$route.params.applicationId'/>
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

export default {
    name: "Edit",
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