// import _ from 'lodash';
import {config} from "@/config";
const common = {

    superFetch: function(url, method, reqBody, callback) {
        // Define the minimum object for Fetch's second argument
        let fetchObj = {
            method: method,
            mode: 'cors',
            headers: { 
                "Content-Type": "application/json",
                "user-token": localStorage.getItem('appsbymatthew-token')
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
            .catch(err => {
                if (err.status == 401 && url.includes("/trafficReports")) {
                    alert('Only administrators may view portfolio metrics.');
                    window.history.back();
                }
                else if (err.status == 401) {
                    alert('You are not authorized to perform this action.');
                }
                else if (err.status == 415) {
                    alert('Please provide information for all required fields.');
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