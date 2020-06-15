<template>
    <div>
        <NavbarApplications/>
        <section v-if="applicationsLoaded" class='animated fadeIn'>
            <thead>
                <th style="width: 50px" class="border-left">#</th>
                <th style="width: 70px" class="border-left"></th>
                <th style="width: 50px" class="border-left"></th>
                <th style="width: 200px" class="border-left">App Name</th>
                <th style="width: 150px" class="border-left">Commands</th>
                <th style="width: 150px" class="border-left">Publish Date</th>
                <th style="width: 250px" class="border-left">Primary Language</th>
                <th style="width: 100px" class="border-left">Featured</th>
                <th style="width: 80px" class="border-left"></th>
            </thead>
            <table class="table table-striped">
                <div v-for='(item, index) in allApplications.filter(item => 1 == 1)' :key='index'>
                    <ApplicationRow v-bind='item' :rownum='index'/>
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
import ApplicationRow from "@/components/ApplicationRow.vue";
import ScreenOverlay from "@/components/ScreenOverlay.vue";
import NavbarApplications from "@/components/Navbars/Applications.vue";
import global from "@/global.js";

export default {
    name: "Applications",
    components: {
        ApplicationRow,
        ScreenOverlay,
        NavbarApplications
    },
    data() {
        return {
            componentKey: 0,
            allApplications: global.applications,
            applicationsLoaded: global.applicationsLoaded,
            loadingMessage: `
                <div>Loading list of applications...</div>
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
    th {
        text-align: left;
        padding-left: 12px;
    }
    .table {
        margin-bottom: 0px;
    }
</style>