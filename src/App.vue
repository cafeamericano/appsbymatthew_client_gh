<template>
  <div id="app" class='bg bg-light'>

    <NavbarMain/>
    <router-view />
    
  </div>
</template>

<script>

import NavbarMain from "@/components/Navbars/Main.vue";
import global from "@/global.js";

export default {
    name: "App",
    components: {
        NavbarMain
    },
    data: function() {
        return {
            copyrightMessage: '©2020 Matthew Farmer'
        }
	},
	mounted: function() {
		this.pullApplications();
		this.pullSkills();
    },
    methods: {
        pullApplications() {
            var self = this;
            fetch("https://central-api-flask-cm6ud432ka-uc.a.run.app/AppGalleryLite/api/applications").then(function (response) {
                return response.json();
            }).then(function (result) {
              global.applicationsLoaded = true;
              global.applications = result;
              console.log(result)
            });
		},
		pullSkills() {
            var self = this;
            fetch("https://central-api-go.appspot.com/KeywordFactory/api/allkeywords").then(function (response) {
                return response.json();
            }).then(function (result) {
              global.skillsLoaded = true;
              global.skills = result;
              console.log(result)
            });
        }
    }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  min-height: 100vh;
  overflow-y: hidden;
}

nav {
  padding: 30px;
}

#nav a {
    margin-right: 20px;
    font-weight: bold;
}

</style>


