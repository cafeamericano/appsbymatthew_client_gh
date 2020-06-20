const global = {
    getApplications: function(callback) {
        if (global.applications.length) {
            return callback(global.applications);
        }
        else {
            fetch("https://central-api-flask-cm6ud432ka-uc.a.run.app/AppGalleryLite/api/applications").then(function (response) {
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
            fetch("https://central-api-go.appspot.com/KeywordFactory/api/allkeywords").then(function (response) {
                console.log('hmm')
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