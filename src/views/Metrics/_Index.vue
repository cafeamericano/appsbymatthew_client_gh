<template>
    <div>
        <NavbarMetrics/>
        <section v-if="metricsLoaded" class='animated fadeIn container-fluid pb-4 pl-5 pr-5'>
            <div class="row p-3 text-left">
                <table class="table">
                    <thead class="thead-light">
                        <th>Attribute</th>
                        <th>Value</th>
                    </thead>
                    <tr>
                        <td>Report Run Date</td>
                        <td>{{metrics.run_date}} ({{metrics.days_since_last_ran}} days ago)</td>
                    </tr>
                    <tr>
                        <td>Unique Visitor Count</td>
                        <td>{{metrics.unique_visitor_count}}</td>
                    </tr>
                    <tr>
                        <td>All Interactions Count</td>
                        <td>{{metrics.all_interactions_count}}</td>
                    </tr>
                    <tr>
                        <td>Report Range</td>
                        <td>{{metrics.report_start_date}} through {{metrics.report_end_date}}</td>
                    </tr>
                    <tr>
                        <td>Unique Browsers</td>
                        <td>{{metrics.unique_browsers.join(", ")}}</td>
                    </tr>
                </table>
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
import NavbarMetrics from "@/components/Metrics/Navbar.vue";

import common from "@/common";
import {config} from "@/config";
import moment from "moment";

export default {
    name: "Metrics_Index",
    components: {
        ScreenOverlay,
        NavbarMetrics
    },
    mounted: function() {
        var self = this;
        common.superFetch(`${config.apiUrl}/trafficReports`, 'GET', null, function (response) {
            self.metricsLoaded = true;
            self.metrics = response[0]; // We only need the first ie most recent report
            self.metrics.run_date = moment(self.metrics.run_date.$date).format('L');
            self.metrics.days_since_last_ran = Math.abs(moment(self.metrics.run_date).diff(moment.now(), 'd'));
            self.metrics.report_start_date = moment(self.metrics.report_start_date.$date).format('L');
            self.metrics.report_end_date = moment(self.metrics.report_end_date.$date).format('L');
        });
    },
    methods: {
    },
    data() {
        return {
            componentKey: 0,
            metrics: [],
            metricsLoaded: false,
            loadingMessage: `
                <div>Loading metrics...</div>
                <div class="spinner-grow text-success" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            `
        }
    }
};
</script>