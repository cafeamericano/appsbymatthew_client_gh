<template>
    <div style='position: relative'>
        <NavbarSkills/>
        <SkillDetails :isEditing='true' :skillCode='$route.params.code'/>
    </div>
</template>

<script>

import NavbarSkills from "@/components/Navbars/Skills.vue";
import SkillDetails from "@/components/SkillDetails.vue";
import {config} from "@/config";

export default {
    name: "Skills-Edit",
    components: {
        NavbarSkills,
        SkillDetails
    },
}
</script>