<template>
    <div>
        <NavbarSkills/>
        <section v-if="skillsLoaded" class='animated slideInUp container-fluid'>
            <!-- <div class='row'> -->

                <!-- Active -->
                                    <table class="table">

                <div v-for='item in allSkills.filter(item => 1 == 1)' :key='item.title'>
                    <!-- <SkillPreview v-bind='item'/> -->
                        <SkillRow v-bind='item'/>
                </div>
                                    </table>


            <!-- </div> -->
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