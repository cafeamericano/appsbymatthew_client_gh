<template>
    <div>
        <NavbarSkills/>
        <section v-if="skillsLoaded" class='animated fadeIn'>
            <StandardTable
                :columns='tableColumns'
                :rows='allSkills'
                :hiddenFields='["_id"]'
            />
            <!-- <table class="table table-striped">
                <div v-for='(item, index) in allSkills.filter(item => 1 == 1)' :key='index'>
                    <SkillRow v-bind='item' :rownum='index'/>
                </div>
            </table> -->
        </section>

        <section v-else>
            <ScreenOverlay :content='loadingMessage'/>
        </section>

    </div>
</template>

<script>

// @ is an alias to /src

var z = [
    {
        header: 'Skill Name',
        width: '200px',
        textAlignment: 'Left'
    },
                    {
        header: 'Type',
        width: '200px',
        textAlignment: 'Left'
    },
    {
        header: 'Utilized by App',
        width: '150px',
        textAlignment: 'Left'
    },
    {
        header: 'Display on Portfolio',
        width: '150px',
        textAlignment: 'Left'
    }
]

import SkillPreview from "@/components/SkillPreview.vue";
import SkillRow from "@/components/SkillRow.vue";
import ScreenOverlay from "@/components/ScreenOverlay.vue";
import NavbarSkills from "@/components/Navbars/Skills.vue";
import StandardTable from "@/components/StandardTable.vue"
import global from "@/global.js";

export default {
    name: "Skills",
    components: {
        SkillPreview,
        SkillRow,
        ScreenOverlay,
        NavbarSkills,
        StandardTable
    },
    mounted: function() {
        this.formatSkillsForTable();
    },
    methods: {
        formatSkillsForTable() {
            var self = this;
            self.allSkills.forEach(skill => {
                console.log('running')
                var formattedSkill = skill;
                skill.showInGallery ? formattedSkill.showInGallery = '<i class="fas fa-check fa-lg"></i>' : formattedSkill.showInGallery = '';
                skill.showOnPortfolio ? formattedSkill.showOnPortfolio = '<i class="fas fa-check fa-lg"></i>' : formattedSkill.showOnPortfolio = '';
                self.formattedSkills.push(formattedSkill)
            })
        }
    },
    data() {
        return {
            componentKey: 0,
            allSkills: global.skills,
            formattedSkills: [],
            skillsLoaded: global.skillsLoaded,
            loadingMessage: `
                <div>Loading list of skills...</div>
                <div class="spinner-grow text-success" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            `,
            tableColumns: z
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