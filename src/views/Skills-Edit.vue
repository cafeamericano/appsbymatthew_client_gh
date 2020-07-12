<template>
    <div style='position: relative'>
        <NavbarSkills/>
        <SkillDetails :isEditing='true'/>
    </div>
</template>

<script>

import NavbarSkills from "@/components/Navbars/Skills.vue";
import SkillDetails from "@/components/SkillDetails.vue";

export default {
    name: "Skills-Edit",
    components: {
        NavbarSkills,
        SkillDetails
    },
}
</script>