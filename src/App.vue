<template>
  <div id="app" class='bg bg-light pb-3'>

    <NavbarMain/>
    <router-view />
    
  </div>
</template>

<script>

import NavbarMain from "@/components/Navbars/Main.vue";

export default {
    name: "App",
    components: {
        NavbarMain
    },
    data: function() {
        return {
            copyrightMessage: '©2020 Matthew Farmer'
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


