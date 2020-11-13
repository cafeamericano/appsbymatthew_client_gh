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

export default {
    name: "Skills-Create",
    components: {
        NavbarSkills,
        SkillDetails
    },
}
</script>