<template>
    <div style="position: relative">
        <NavbarSkills/>

        <section v-if='isOpenContextMenu'>
            <FullScreenContextMenu
                :recordId='recordBeingEditedId'
                :recordName='recordBeingEditedName'
                :processEdit='processClickEdit'
                :processDelete='processClickDelete'
                :processCancel='processClickCancel'
                :isConfirmingDeletion='isConfirmingDeletion'
            />
        </section>

        <section v-if="skillsLoaded" class='animated fadeIn'>
            <StandardTable
                :columns='tableColumns'
                :rows='allSkills'
                :hiddenFields='["_id"]'
                :filterBar='filterBar'
                :processRowClick='processRowClick'
                :processRowRightClick='processRowRightClick'
            />
        </section>

        <section v-else>
            <ScreenOverlay :content='loadingMessage'/>
        </section>

    </div>
</template>

<script>

// @ is an alias to /src

var tableColumns = [
    {
        header: 'Skill Name',
        width: '200px',
        textAlignment: 'Left',
        associatedDataField: 'name'
    },
                    {
        header: 'Type',
        width: '200px',
        textAlignment: 'Left',
        associatedDataField: 'type'
    },
    {
        header: 'Demonstrable',
        width: '150px',
        textAlignment: 'Left',
        associatedDataField: 'showInGallery'
    },
    {
        header: 'Proficient',
        width: '150px',
        textAlignment: 'Left',
        associatedDataField: 'showOnPortfolio'
    }
]

var filterBar = [
    {
        type: 'text',
        associatedDataField: 'name'
    },
    {
        type: 'select',
        options: [
            {label: 'Language', value: 'language'},
            {label: 'Front-End Framework', value: 'front-end-framework'},
            {label: 'Back-End Framework', value: 'back-end-framework'},
            {label: 'Library', value: 'library'},
            {label: 'Database', value: 'database'},
            {label: 'Deployment Technology', value: 'deployment'},
            {label: 'ORM', value: 'orm'},
            {label: 'Operating System', value: 'operating-system'},
            {label: 'Other', value: 'other'},
        ],
        associatedDataField: 'type'
    },
    {},
    {}
]

import SkillPreview from "@/components/SkillPreview.vue";
import SkillRow from "@/components/SkillRow.vue";
import ScreenOverlay from "@/components/ScreenOverlay.vue";
import NavbarSkills from "@/components/Navbars/Skills.vue";
import StandardTable from "@/components/StandardTable.vue";
import FullScreenContextMenu from "@/components/FullScreenContextMenu.vue"
import global from "@/global.js";
import router from "@/router";

export default {
    name: "Skills",
    components: {
        SkillPreview,
        SkillRow,
        ScreenOverlay,
        NavbarSkills,
        StandardTable,
        FullScreenContextMenu
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
        },
        processRowClick: function(data) {
            confirm('Would you like to edit ' + data + '?')
        },
        processRowRightClick: function(id, name, e) {
            console.log(name)
            var self = this;
            self.isOpenContextMenu = true;
            self.recordBeingEditedId = id;
            self.recordBeingEditedName = name;
        },
        processClickEdit: function() {
            this.isOpenContextMenu = false;
            router.push({ name: 'Skills-Edit', params: { record_id: this.recordBeingEditedId } })
            // alert(this.recordBeingEdited)
        },
        processClickDelete: function() {
            this.isConfirmingDeletion = true;
            // this.isOpenContextMenu = false;
            // alert(this.recordBeingEdited)
            // confirm('are you sure you would like to delete?')
        },
        processClickCancel: function() {
            this.isConfirmingDeletion = false;
            this.isOpenContextMenu = false;
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
            tableColumns: tableColumns,
            filterBar: filterBar,
            isOpenContextMenu: false,
            recordBeingEditedId: null,
            recordBeingEditedName: null,
            isConfirmingDeletion: false

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