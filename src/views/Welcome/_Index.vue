<template>
    <div>
        <NavbarWelcome/>
        <div class="container text-left p-3">
            <div class='row'>
                <div class='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                    <div class="animated fadeInUp mt-4 p-3"><h1 id='welcome-sign'>welcome.</h1></div>
                </div>
                <div class='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 bg-glass p-3 animated fadeInUp'>
                    <p>
                        I'm a professional full-stack web developer with a keen eye for design and a passion for developing
                        applications to solve real-world problems. In addition to more than two years of experience
                        with programming on both the front and back ends, I possess more than seven years of 
                        professional experience with creative problem solving.
                    </p>
                    <p>
                        My higher education includes a Bachelor’s Degree in Business Management as well as a certification
                        in web development through the UNC Chapel Hill Coding Bootcamp. Certified by the American Society of
                        Quality in process improvement, I am highly skilled with process flowcharting (an invaluable
                        tool in application development). In a collaborative environment, I enjoy teaching others and
                        sharing my knowledge for the benefit of the team.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import NavbarWelcome from "@/components/Welcome/Navbar.vue";
import {config} from "@/config";
import common from "@/common";

export default {
    name: "Welcome_Index",
    components: {
        NavbarWelcome
    },
    mounted: function() {
        common.logClientAction({sublocation: "Welcome Page", description: "The user has landed on the Welcome page."});
    },  
    data: function() {
        return {
            message: null
        }
    }
}

</script>