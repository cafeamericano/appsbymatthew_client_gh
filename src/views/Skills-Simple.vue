<template>
    <div>
        <NavbarSkills/>
        <section v-if="skillsLoaded" class='animated fadeIn container pb-4'>

            <!-- Language -->
            <br/><h5 class="text-left">Languages</h5>
            <hr/>
            <div class="row p-2">    
                <div class="col-xl-4 col-lg-6 col-md-6 col-12 text-left" v-for='item in skills.filter(item => item.skill_type_code == "LANGUAGE")' :key='item.title'>
                    <div class='card mb-2 p-2'>
                        <span>{{item.name}}</span>
                        <span style="text-align: right; position: absolute; right: 10px; width: 100%">
                            <router-link :to="{name:'Skills-Edit', params: {code: item.code}}">
                                <small><i class="fas fa-wrench text-secondary"></i></small>
                            </router-link>
                        </span>
                    </div>                
                </div>
            </div>

            <!-- Front End Frameworks  -->
            <br/><h5 class="text-left">Front End Frameworks</h5>
            <hr/>
            <div class="row p-2">
                <div class="col-xl-4 col-lg-6 col-md-6 col-12 text-left" v-for='item in skills.filter(item => item.skill_type_code == "FRONTENDFRAMEWORK")' :key='item.title'>
                    <div class='card mb-2 p-2'>
                        <span>{{item.name}}</span>
                        <span style="text-align: right; position: absolute; right: 10px; width: 100%">
                            <router-link :to="{name:'Skills-Edit', params: {code: item.code}}">
                                <small><i class="fas fa-wrench text-secondary"></i></small>
                            </router-link>
                        </span>
                    </div>                
                </div>
            </div>

            <!-- Back End Frameworks  -->
            <br/><h5 class="text-left">Back End Frameworks</h5>
            <hr/>
            <div class="row p-2">
                <div class="col-xl-4 col-lg-6 col-md-6 col-12 text-left" v-for='item in skills.filter(item => item.skill_type_code == "BACKENDFRAMEWORK")' :key='item.title'>
                    <div class='card mb-2 p-2'>
                        <span>{{item.name}}</span>
                        <span style="text-align: right; position: absolute; right: 10px; width: 100%">
                            <router-link :to="{name:'Skills-Edit', params: {code: item.code}}">
                                <small><i class="fas fa-wrench text-secondary"></i></small>
                            </router-link>
                        </span>
                    </div>                
                </div>
            </div>

            <!-- Library  -->
            <br/><h5 class="text-left">Library</h5>
            <hr/>
            <div class="row p-2">
                <div class="col-xl-4 col-lg-6 col-md-6 col-12 text-left" v-for='item in skills.filter(item => item.skill_type_code == "LIBRARY")' :key='item.title'>
                    <div class='card mb-2 p-2'>
                        <span>{{item.name}}</span>
                        <span style="text-align: right; position: absolute; right: 10px; width: 100%">
                            <router-link :to="{name:'Skills-Edit', params: {code: item.code}}">
                                <small><i class="fas fa-wrench text-secondary"></i></small>
                            </router-link>
                        </span>
                    </div>                
                </div>
            </div>

            <!-- Database  -->
            <br/><h5 class="text-left">Database</h5>
            <hr/>
            <div class="row p-2">
                <div class="col-xl-4 col-lg-6 col-md-6 col-12 text-left" v-for='item in skills.filter(item => item.skill_type_code == "DATABASE")' :key='item.title'>
                    <div class='card mb-2 p-2'>
                        <span>{{item.name}}</span>
                        <span style="text-align: right; position: absolute; right: 10px; width: 100%">
                            <router-link :to="{name:'Skills-Edit', params: {code: item.code}}">
                                <small><i class="fas fa-wrench text-secondary"></i></small>
                            </router-link>
                        </span>
                    </div>                
                </div>
            </div>

            <!-- ORM  -->
            <br/><h5 class="text-left">ORMs</h5>
            <hr/>
            <div class="row p-2">
                <div class="col-xl-4 col-lg-6 col-md-6 col-12 text-left" v-for='item in skills.filter(item => item.skill_type_code == "ORM")' :key='item.title'>
                    <div class='card mb-2 p-2'>
                        <span>{{item.name}}</span>
                        <span style="text-align: right; position: absolute; right: 10px; width: 100%">
                            <router-link :to="{name:'Skills-Edit', params: {code: item.code}}">
                                <small><i class="fas fa-wrench text-secondary"></i></small>
                            </router-link>
                        </span>
                    </div>                
                </div>
            </div>

            <!-- Cloud Technology -->
            <br/><h5 class="text-left">Cloud Technologies</h5>
            <hr/>
            <div class="row p-2">
                <div class="col-xl-4 col-lg-6 col-md-6 col-12 text-left" v-for='item in skills.filter(item => item.skill_type_code == "CLOUD")' :key='item.title'>
                    <div class='card mb-2 p-2'>
                        <span>{{item.name}}</span>
                        <span style="text-align: right; position: absolute; right: 10px; width: 100%">
                            <router-link :to="{name:'Skills-Edit', params: {code: item.code}}">
                                <small><i class="fas fa-wrench text-secondary"></i></small>
                            </router-link>
                        </span>
                    </div>
                </div>
            </div>

            <!-- Deployment -->
            <br/><h5 class="text-left">Deployment Technologies</h5>
            <hr/>
            <div class="row p-2">
                <div class="col-xl-4 col-lg-6 col-md-6 col-12 text-left" v-for='item in skills.filter(item => item.skill_type_code == "DEPLOYMENT")' :key='item.title'>
                    <div class='card mb-2 p-2'>
                        <span>{{item.name}}</span>
                        <span style="text-align: right; position: absolute; right: 10px; width: 100%">
                            <router-link :to="{name:'Skills-Edit', params: {code: item.code}}">
                                <small><i class="fas fa-wrench text-secondary"></i></small>
                            </router-link>
                        </span>
                    </div>
                </div>
            </div>

            <!-- Operating Systems -->
            <br/><h5 class="text-left">Operating Systems</h5>
            <hr/>
            <div class="row p-2">
                <div class="col-xl-4 col-lg-6 col-md-6 col-12 text-left" v-for='item in skills.filter(item => item.skill_type_code == "OPERATINGSYSTEM")' :key='item.title'>
                    <div class='card mb-2 p-2'>
                        <span>{{item.name}}</span>
                        <span style="text-align: right; position: absolute; right: 10px; width: 100%">
                            <router-link :to="{name:'Skills-Edit', params: {code: item.code}}">
                                <small><i class="fas fa-wrench text-secondary"></i></small>
                            </router-link>
                        </span>
                    </div>
                </div>
            </div>

            <!-- Other -->
            <br/><h5 class="text-left">Other</h5>
            <hr/>
            <div class="row p-2">
                <div class="col-xl-4 col-lg-6 col-md-6 col-12 text-left" v-for='item in skills.filter(item => item.skill_type_code == "OTHER")' :key='item.title'>
                    <div class='card mb-2 p-2'>
                        <span>{{item.name}}</span>
                        <span style="text-align: right; position: absolute; right: 10px; width: 100%">
                            <router-link :to="{name:'Skills-Edit', params: {code: item.code}}">
                                <small><i class="fas fa-wrench text-secondary"></i></small>
                            </router-link>
                        </span>
                    </div>                
                </div>
            </div>

        </section>

        <section v-else>
            <ScreenOverlay :content='loadingMessage'/>
        </section>

    </div>
</template>

<script>

// @ is an alias to /src
import SkillPreview from "@/components/SkillPreview.vue";
import SkillRow from "@/components/SkillRow.vue";
import ScreenOverlay from "@/components/ScreenOverlay.vue";
import NavbarSkills from "@/components/Navbars/Skills.vue";
import common from '@/common';
import {config} from "@/config";

export default {
    name: "Skills",
    components: {
        SkillPreview,
        SkillRow,
        ScreenOverlay,
        NavbarSkills
    },
    mounted: function() {
        var self = this;
        common.logClientAction({sublocation: "Skills", description: "Visited the Skills page."});
        common.getSkills(function(result) {
            self.skills = result || [];
            self.skillsLoaded = true;
        });
    },
    data() {
        return {
            componentKey: 0,
            skills: [],
            skillsLoaded: false,
            loadingMessage: `
                <div>Loading list of skills...</div>
                <div class="spinner-grow text-success" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            `
        }
    }
};
</script>

<style scoped>
    .fa-wrench {
        opacity: 25%;
    }
</style>