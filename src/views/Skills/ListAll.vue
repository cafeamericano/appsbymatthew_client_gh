<template>
    <div>
        <NavbarSkills/>
        <section v-if="skillsLoaded && skillTypesLoaded" class='animated fadeIn container pb-4'>
            <div v-for='type in skillTypes' :key='type.code'>
                <SkillCategory :categoryName='type.label' :items="skills.filter(item => item.skill_type_code == type.code)"/>
            </div>
        </section>

        <section v-else>
            <ScreenOverlay :content='loadingMessage'/>
        </section>

    </div>
</template>

<script>

// @ is an alias to /src
import ScreenOverlay from "@/components/_Shared/ScreenOverlay.vue";
import NavbarSkills from "@/components/Skills/Navbar.vue";
import SkillCategory from "@/components/Skills/SkillCategory.vue"
import common from '@/common';
import {config} from "@/config";

export default {
    name: "Skills_ListAll",
    components: {
        ScreenOverlay,
        NavbarSkills,
        SkillCategory
    },
    mounted: function() {
        var self = this;
        common.logClientAction({sublocation: "Skills", description: "Visited the Skills page."});
        common.getSkills(function(result) {
            self.skills = result || [];
            self.skillsLoaded = true;
        });
        common.getSkillTypes(function(result) {
            self.skillTypes = result || [];
            self.skillTypesLoaded = true;
        });
    },
    data() {
        return {
            componentKey: 0,
            skills: [],
            skillTypes: [],
            skillsLoaded: false,
            skillTypesLoaded: false,
            loadingMessage: `
                <div>Loading list of skills...</div>
                <div class="spinner-grow text-success" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            `
        }
    }
};
</script>

<style scoped>
    .fa-wrench {
        opacity: 25%;
    }
</style>