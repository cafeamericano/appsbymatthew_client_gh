<template>
    <div>
        <NavbarSkills/>
        <section v-if="skillsLoaded" class='animated fadeIn container pb-4'>

            <!-- Language -->
            <br/><h5 class="text-left">Languages</h5>
            <hr/>
            <div class="row p-2">    
                <div class="col-4 text-left" v-for='item in skills.filter(item => item.type == "language")' :key='item.title'>
                    <div class='card mb-2 p-2'>
                        <span>{{item.name}}</span>
                        <span style="text-align: right; position: absolute; right: 10px; width: 100%">
                            <router-link :to="{name:'Skills-Edit', params: {id: item._id.$oid || item._id}}">
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
                <div class="col-4 text-left" v-for='item in skills.filter(item => item.type == "front-end-framework")' :key='item.title'>
                    <div class='card mb-2 p-2'>
                        <span>{{item.name}}</span>
                        <span style="text-align: right; position: absolute; right: 10px; width: 100%">
                            <router-link :to="{name:'Skills-Edit', params: {id: item._id.$oid || item._id}}">
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
                <div class="col-4 text-left" v-for='item in skills.filter(item => item.type == "back-end-framework")' :key='item.title'>
                    <div class='card mb-2 p-2'>
                        <span>{{item.name}}</span>
                        <span style="text-align: right; position: absolute; right: 10px; width: 100%">
                            <router-link :to="{name:'Skills-Edit', params: {id: item._id.$oid || item._id}}">
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
                <div class="col-4 text-left" v-for='item in skills.filter(item => item.type == "library")' :key='item.title'>
                    <div class='card mb-2 p-2'>
                        <span>{{item.name}}</span>
                        <span style="text-align: right; position: absolute; right: 10px; width: 100%">
                            <router-link :to="{name:'Skills-Edit', params: {id: item._id.$oid || item._id}}">
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
                <div class="col-4 text-left" v-for='item in skills.filter(item => item.type == "database")' :key='item.title'>
                    <div class='card mb-2 p-2'>
                        <span>{{item.name}}</span>
                        <span style="text-align: right; position: absolute; right: 10px; width: 100%">
                            <router-link :to="{name:'Skills-Edit', params: {id: item._id.$oid || item._id}}">
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
                <div class="col-4 text-left" v-for='item in skills.filter(item => item.type == "orm")' :key='item.title'>
                    <div class='card mb-2 p-2'>
                        <span>{{item.name}}</span>
                        <span style="text-align: right; position: absolute; right: 10px; width: 100%">
                            <router-link :to="{name:'Skills-Edit', params: {id: item._id.$oid || item._id}}">
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
                <div class="col-4 text-left" v-for='item in skills.filter(item => item.type == "deployment")' :key='item.title'>
                    <div class='card mb-2 p-2'>
                        <span>{{item.name}}</span>
                        <span style="text-align: right; position: absolute; right: 10px; width: 100%">
                            <router-link :to="{name:'Skills-Edit', params: {id: item._id.$oid || item._id}}">
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
                <div class="col-4 text-left" v-for='item in skills.filter(item => item.type == "other")' :key='item.title'>
                    <div class='card mb-2 p-2'>
                        <span>{{item.name}}</span>
                        <span style="text-align: right; position: absolute; right: 10px; width: 100%">
                            <router-link :to="{name:'Skills-Edit', params: {id: item._id.$oid || item._id}}">
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
import global from '@/global';

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
        global.getSkills(function(result) {
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