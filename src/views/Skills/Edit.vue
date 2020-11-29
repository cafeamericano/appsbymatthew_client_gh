<template>
    <div style='position: relative'>
        <NavbarSkills/>
        <SkillDetails :isEditing='true' :skillCode='$route.params.code'/>
    </div>
</template>

<script>

import NavbarSkills from "@/components/Skills/Navbar.vue";
import SkillDetails from "@/components/Skills/Details.vue";
import {config} from "@/config";

export default {
    name: "Edit",
    components: {
        NavbarSkills,
        SkillDetails
    },
}
</script>