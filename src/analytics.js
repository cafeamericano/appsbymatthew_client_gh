import axios from 'axios';

const analyticsDashboardApiUrl = 'https://analytics-dashboard-api-bzqdzrhvba-uc.a.run.app';

const analytics = {

    recordAction: (reqBody) => {
        if (process.env.NODE_ENV === "development") return;
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