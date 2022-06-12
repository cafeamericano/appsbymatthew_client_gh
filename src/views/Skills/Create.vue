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
import analytics from '@/analytics';

export default {
    name: "Skills_Create",
    components: {
        NavbarSkills,
        SkillDetails
    },
    mounted: function() {
        analytics.recordAction({
            location: window.location.hostname,
            sublocation: "Skills - Create", 
            description: "Visited the create new skill page.",
            details: {}
        });
    }
}
</script>