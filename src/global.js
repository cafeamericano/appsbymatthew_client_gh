import {config} from "@/config";

const global = {

    logClientAction: function(data) {
        let logObject = {
            application: "AppsByMatthew.com",
            sublocation: data.sublocation,
            operation: "read",
            description: data.description
        }
        this.superFetch('https://traffic-analyzer-matthew.herokuapp.com/api/happier', 'POST', logObject, function() {
            console.log('Logged user action.');
        })
    },

    superFetch: function(url, method, reqBody, callback) {
        // Define the minimum object for Fetch's second argument
        let fetchObj = {
            method: method,
            mode: 'cors',
            headers: { 
                "Content-Type": "application/json"
            }
        }
        // Only attach a request body if it's not a GET request
        if (method != 'GET') {
            fetchObj = {
                ... fetchObj,
                ... {
                    body: JSON.stringify(reqBody)
                }
            }
        }
        // Make the fetch request, then return the callback with the response
        fetch(url, fetchObj)
            .then(response => response.json())
            .then(response => {
                return callback(response);
            });
    },

    getApplications: function(callback) {
        if (global.applications.length) {
            return callback(global.applications);
        }
        else {
            fetch(`${config.apiUrl}/applications`).then(function (response) {
                return response.json();
            }).then(function (result) {
                global.applicationsLoaded = true;
                global.applications = result;
                return callback(global.applications);
            });
        }

    },
    applicationsLoaded: false,
    applications: [],
    getSkills: function(callback) {
        if (global.skills.length) {
            console.log('here')
            return callback(global.skills);
        }
        else {
            fetch(`${config.apiUrl}/skills`).then(function (response) {
                return response.json();
            }).then(function (result) {
                console.log('*', result)
                global.skillsLoaded = true;
                global.skills = result;
                return callback(global.skills);
            });
        }

    },
    skillsLoaded: false,
    skills: []
}

export default global;