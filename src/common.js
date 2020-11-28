// import _ from 'lodash';
import {config} from "@/config";
const common = {

    logClientAction: function(data) {
        if (process.env.NODE_ENV == 'development') {
            return;
        } else {
            let logObject = {
                application: "AppsByMatthew.com",
                sublocation: data.sublocation,
                operation: "read",
                description: data.description
            }
            this.superFetch(config.loggerUrl, 'POST', logObject, function() {
                console.log('Logged user action.');
            })
        }
    },

    superFetch: function(url, method, reqBody, callback) {
        // Define the minimum object for Fetch's second argument
        let fetchObj = {
            method: method,
            mode: 'cors',
            headers: { 
                "Content-Type": "application/json",
                "user-token": url == config.loggerUrl ? null : localStorage.getItem('appsbymatthew-token')
            }
        }
        // For requests not made to the external logger API, add user-token to request header
        if (url === config.loggerUrl) { delete fetchObj.headers['user-token']}

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
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw response;
                }
            })
            .then(response => {
                console.log(response)
                return callback(response);
            })
            .catch( err => {
                if (err.status == 401) {
                    alert('You are not authorized to perform this action.')
                }
                if (err.status == 415) {
                    alert('Please provide information for all required fields.')
                }
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