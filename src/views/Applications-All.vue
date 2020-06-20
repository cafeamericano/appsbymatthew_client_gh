<template>
    <div>
        <NavbarApplications/>
        <section v-if="applicationsLoaded" class='animated fadeIn'>
            <StandardTable
                :columns='tableColumns'
                :rows='formattedApplications'
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
import StandardTable from "@/components/StandardTable.vue";
import ApplicationRow from "@/components/ApplicationRow.vue";
import ScreenOverlay from "@/components/ScreenOverlay.vue";
import NavbarApplications from "@/components/Navbars/Applications.vue";
import global from "@/global";

export default {
    name: "Applications",
    components: {
        ApplicationRow,
        ScreenOverlay,
        NavbarApplications,
        StandardTable
    },
    mounted: function() {
        this.formatApplicationsForTable();
    },
    methods: {
        formatApplicationsForTable() {
            var self = this;
            self.allApplications.forEach(application => {
                var formattedApplication = {};

                application.title ? formattedApplication.title = application.title : formattedApplication.title = '';
                application.imagePath ? formattedApplication.imagePath = '<img src="' + application.imagePath + '" style="height: 25px"/>' : formattedApplication.imagePath = '';
                application.isFeatured ? formattedApplication.isFeatured = '<i class="fas fa-check fa-lg"></i>' : formattedApplication.isFeatured = '';
                application.publishDate ? formattedApplication.publishDate = application.publishDate : formattedApplication.publishDate = '';
                application.deployedLink ? formattedApplication.deployedLink = application.deployedLink : formattedApplication.deployedLink = '';
                application.frontendRepoLink ? formattedApplication.frontendRepoLink = application.frontendRepoLink : formattedApplication.frontendRepoLink = '';
                application.backendRepoLink ? formattedApplication.backendRepoLink = application.backendRepoLink : formattedApplication.backendRepoLink = '';
                application.supportStatus ? formattedApplication.supportStatus = application.supportStatus : formattedApplication.supportStatus = '';
                application.keywords ? formattedApplication.keywords = application.keywords.join(", ") : formattedApplication.keywords = [];

self.formattedApplications.push(formattedApplication)
            })
        }
    },
    data() {
        return {
            componentKey: 0,
            applicationsLoaded: global.applicationsLoaded,
            loadingMessage: `
                <div>Loading list of applications...</div>
                <div class="spinner-grow text-success" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            `,
            allApplications: global.applications,
            formattedApplications: [],
            tableColumns: tableColumns,
            filterBar: filterBar
        }
    }
};

var tableColumns = [
    {
        header: 'Application Name',
        width: '200px',
        textAlignment: 'Left',
        associatedDataField: 'title'
    },
                    {
        header: 'Thumbnail',
        width: '200px',
        textAlignment: 'Left',
        associatedDataField: 'imagePath'
    },
    {
        header: 'Featured',
        width: '150px',
        textAlignment: 'Left',
        associatedDataField: 'isFeatured'
    },
    {
        header: 'Publish Date',
        width: '150px',
        textAlignment: 'Left',
        associatedDataField: 'publishDate'
    },
    {
        header: 'Deployed Link',
        width: '150px',
        textAlignment: 'Left',
        associatedDataField: 'deployedLink'
    },
    {
        header: 'Frontend Repo',
        width: '150px',
        textAlignment: 'Left',
        associatedDataField: 'frontendRepoLink'
    },
        {
        header: 'Backend Repo',
        width: '150px',
        textAlignment: 'Left',
        associatedDataField: 'backendRepoLink'
    },
    {
        header: 'Support Status',
        width: '150px',
        textAlignment: 'Left',
        associatedDataField: 'supportStatus'
    },
    {
        header: 'Skills Employed',
        width: '150px',
        textAlignment: 'Left',
        associatedDataField: 'keywords'
    }
]

var filterBar = [
    {
        type: 'text',
        associatedDataField: 'title'
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {
        type: 'text',
        associatedDataField: 'keywords'
    },
]

</script>

<style scoped>
    td {
        white-space: nowrap;
    }
    th {
        text-align: left;
        padding-left: 12px;
    }
    .table {
        margin-bottom: 0px;
    }
</style>