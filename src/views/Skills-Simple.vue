<template>
    <div>
        <NavbarSkills/>
        <section v-if="skillsLoaded" class='animated slideInUp container-fluid'>

            <!-- Language -->
            <h5 class="text-left mt-4">Languages</h5>
            <hr/>
            <div class="row">    
                <div class="col-2" v-for='item in allSkills.filter(item => item.type == "language")' :key='item.title'>
                    <div class='card p-2 mt-1 mb-1 border rounded-0'>{{item.name}}</div>
                </div>
            </div>

            <!-- Front End Frameworks  -->
            <h5 class="text-left mt-4">Front End Frameworks</h5>
            <hr/>
            <div class="row">
                <div class="col-2" v-for='item in allSkills.filter(item => item.type == "front-end-framework")' :key='item.title'>
                    <div class='card p-2 mt-1 mb-1 border rounded-0'>{{item.name}}</div>
                </div>
            </div>

            <!-- Back End Frameworks  -->
            <h5 class="text-left mt-4">Back End Frameworks</h5>
            <hr/>
            <div class="row">
                <div class="col-2" v-for='item in allSkills.filter(item => item.type == "back-end-framework")' :key='item.title'>
                    <div class='card p-2 mt-1 mb-1 border rounded-0'>{{item.name}}</div>
                </div>
            </div>

            <!-- Library  -->
            <h5 class="text-left mt-4">Library</h5>
            <hr/>
            <div class="row">
                <div class="col-2" v-for='item in allSkills.filter(item => item.type == "library")' :key='item.title'>
                    <div class='card p-2 mt-1 mb-1 border rounded-0'>{{item.name}}</div>
                </div>
            </div>

            <!-- Database  -->
            <h5 class="text-left mt-4">Database</h5>
            <hr/>
            <div class="row">
                <div class="col-2" v-for='item in allSkills.filter(item => item.type == "database")' :key='item.title'>
                    <div class='card p-2 mt-1 mb-1 border rounded-0'>{{item.name}}</div>
                </div>
            </div>

            <!-- ORM  -->
            <h5 class="text-left mt-4">ORMs</h5>
            <hr/>
            <div class="row">
                <div class="col-2" v-for='item in allSkills.filter(item => item.type == "orm")' :key='item.title'>
                    <div class='card p-2 mt-1 mb-1 border rounded-0'>{{item.name}}</div>
                </div>
            </div>

            <!-- Deployment -->
            <h5 class="text-left mt-4">Deployment Technologies</h5>
            <hr/>
            <div class="row">
                <div class="col-2" v-for='item in allSkills.filter(item => item.type == "deployment")' :key='item.title'>
                    <div class='card p-2 mt-1 mb-1 border rounded-0'>{{item.name}}</div>
                </div>
            </div>

            <!-- Other -->
            <h5 class="text-left mt-4">Other</h5>
            <hr/>
            <div class="row">
                <div class="col-2" v-for='item in allSkills.filter(item => item.type == "other")' :key='item.title'>
                    <div class='card p-2 mt-1 mb-1 border rounded-0'>{{item.name}}</div>
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

export default {
    name: "Skills",
    components: {
        SkillPreview,
        SkillRow,
        ScreenOverlay,
        NavbarSkills
    },
    mounted: function() {
        this.pullSkills();
        // this.pullKeywords();
    },
    data() {
        return {
            componentKey: 0,
            allSkills: [],
            skillsLoaded: false,
            loadingMessage: `
                <div>Loading list of skills...</div>
                <div class="spinner-grow text-success" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            `
        }
    },
    methods: {
        pullSkills() {
            var self = this;
            fetch("https://central-api-go.appspot.com/KeywordFactory/api/allkeywords").then(function (response) {
                return response.json();
            }).then(function (result) {
                self.allSkills = result;
                self.componentKey +=1;
                self.skillsLoaded = true;
            });
        }
    }
};
</script>