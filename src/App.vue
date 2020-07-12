<template>
  <div id="app" class='bg bg-light'>

    <NavbarMain/>
    <router-view />
    
  </div>
</template>

<script>

import NavbarMain from "@/components/Navbars/Main.vue";
import global from "@/global";

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
  },
}

</script>

<style>
#app {
  text-align: center;
  min-height: 100vh;
  overflow-y: hidden;
  /* font-family: 'MuseoModerno', cursive; */
  font-family: 'Roboto', sans-serif;
}

nav {
  padding: 30px;
}

#nav a {
    margin-right: 20px;
    font-weight: bold;
}

</style>


