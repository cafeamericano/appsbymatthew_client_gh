import axios from 'axios';

const analyticsDashboardApiUrl = 'https://analytics-dashboard-api-bzqdzrhvba-uc.a.run.app';
const hostnameSubjectToRecording = "appsbymatthew.com";

const analytics = {

    recordAction: (reqBody) => {
        if (!window.location.hostname.includes(hostnameSubjectToRecording));
        axios.post(analyticsDashboardApiUrl + "/api/action/record", reqBody)
            .then(response => {
                if (response.ok) {
                    console.log(`Captured successfully - ${response.statusText}`)
                } else {
                    console.log(`Unable to capture - ${response.statusText}`)
                }
            })
            .catch(err => {
                console.log(err)
            });
    }
}

export default analytics;