<template>
    <div style='position: relative'>
        <NavbarSkills/>
        <SkillDetails :isEditing='false'/>
    </div>
</template>

<script>

import NavbarSkills from "@/components/Skills/Navbar.vue";
import SkillDetails from "@/components/Skills/Details.vue";
import {config} from "@/config";
import common from "@/common";
// import commonUtils from '@cafeamericano/common-js-utils';

export default {
    name: "Skills_Create",
    components: {
        NavbarSkills,
        SkillDetails
    },
    mounted: function() {
        // commonUtils.analyticsDashboard.recordAction({
        //     location: window.location.hostname,
        //     sublocation: "Skills - Create", 
        //     description: "Visited the create new skill page.",
        //     details: {}
        // });
    }
}
</script>