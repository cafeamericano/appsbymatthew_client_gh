<template>
    <div id="nav" style="width: 100%; overflow-x: scroll">
        <nav class="navbar navbar-expand text-light">

            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link :to="{name:'Applications-Featured'}">Featured Apps</router-link>
                </li>
                <li class='nav-item'>
                    <router-link :to="{name:'Applications-All'}">All Applications</router-link>
                </li>
                <li class='nav-item'>
                    <router-link :to="{name:'Applications-Create'}">Add New</router-link>
                </li>
            </ul>

        </nav>
    </div>
</template>

<style scoped>
    .navbar {
        background-color: #42b983;
    }

    #nav a {
        margin-right: 20px;
        font-weight: bold;
        color: white
    }

    #nav a.router-link-exact-active {
        color: #2c3e50;
    }

</style>