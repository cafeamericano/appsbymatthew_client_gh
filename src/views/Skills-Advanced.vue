<template>
    <div>
        <NavbarSkills/>
        <section v-if="skillsLoaded" class='animated fadeIn'>
            <table class="table table-striped">
                <div v-for='(item, index) in allSkills.filter(item => 1 == 1)' :key='index'>
                    <SkillRow v-bind='item' :rownum='index'/>
                </div>
            </table>
        </section>

        <section v-else>
            <ScreenOverlay :content='loadingMessage'/>
        </section>

    </div>
</template>

<script>

// @ is an alias to /src
import SkillPreview from "@/components/SkillPreview.vue";
import SkillRow from "@/components/SkillRow.vue";
import ScreenOverlay from "@/components/ScreenOverlay.vue";
import NavbarSkills from "@/components/Navbars/Skills.vue";
import global from "@/global.js";

export default {
    name: "Skills",
    components: {
        SkillPreview,
        SkillRow,
        ScreenOverlay,
        NavbarSkills
    },
    data() {
        return {
            componentKey: 0,
            allSkills: global.skills,
            skillsLoaded: global.skillsLoaded,
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
    td {
        white-space: nowrap;
    }
    .table {
        margin-bottom: 0px;
    }
</style>