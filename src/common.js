import {config} from "@/config";

const common = {

    logClientAction: function(data) {
        let logObject = {
            application: "AppsByMatthew.com",
            sublocation: data.sublocation,
            operation: "read",
            description: data.description
        }
        this.superFetch(config.loggerUrl, 'POST', logObject, function() {
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
    getSkills: function(callback) {
        this.superFetch(`${config.apiUrl}/skills`, 'GET', null, function(response) {
            return callback(response);
        })
    },
    getSkillTypes: function(callback) {
        this.superFetch(`${config.apiUrl}/skillTypes`, 'GET', null, function(response) {
            return callback(response);
        })
    },
    getStatusCodes: function(callback) {
        this.superFetch(`${config.apiUrl}/statusCodes`, 'GET', null, function(response) {
            return callback(response);
        })
    },
}

export default common;