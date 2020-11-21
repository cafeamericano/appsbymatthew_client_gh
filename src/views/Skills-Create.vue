<template>
    <div style='position: relative'>
        <NavbarSkills/>
        <SkillDetails :isEditing='false'/>
    </div>
</template>

<script>

import NavbarSkills from "@/components/Navbars/Skills.vue";
import SkillDetails from "@/components/SkillDetails.vue";
import {config} from "@/config";
import global from "@/global";

export default {
    name: "Skills-Create",
    components: {
        NavbarSkills,
        SkillDetails
    },
    mounted: function() {
        global.logClientAction({sublocation: "Skills - Create", description: "Visited the create new skill page."});
    }
}
</script>