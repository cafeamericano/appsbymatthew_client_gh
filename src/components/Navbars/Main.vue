<template>
    <div id="nav" style="width: 100%; overflow-x: scroll;">
        <nav class="navbar navbar-expand navbar-light bg-light">
            <a class="navbar-brand" href="#" style=" font-family: 'MuseoModerno', cursive;">appsbymatthew.com</a>

            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link to="/">Welcome</router-link>
                </li>
                <li class='nav-item'>
                    <router-link :to="{name:'Applications-Featured'}">Applications</router-link>
                </li>
                <li class='nav-item'>
                    <router-link :to="{name:'Skills-Simple'}">Skills</router-link>
                </li>
                <li class='nav-item'>
                    <router-link :to="{name:'Contact'}">Contact</router-link>
                </li>
            </ul>

        </nav>
    </div>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh
}

#nav a {
    margin-right: 20px;
    font-weight: bold;
    color: #2c3e50;
    padding: 5px;
}

#nav a.router-link-exact-active {
    background-color: #42b983;
    border-radius: 10px;
    color: white;
    transition: background-color 0.5s, color 0.5s;
}

</style>