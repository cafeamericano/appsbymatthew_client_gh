<template>   
    <div class='container animated fadeInRight'>
        <div class='text-left'>

            <form>
                <div class='row'>

                    <div class='col border-right'>

                        <label>Image</label>
                        <br/>
                        <img id='imageThumbnailPreview' :src='app.imagePath' class='border'/>
                        <br/><br/>
                        <input 
                            id='imageThumbnailUpload' 
                            type='file' 
                            @change='encodeImageUpload'/>
                        <br/><br/>

                        <label>Title</label>
                        <input type='text'  v-model='app.title' class='form-control'/>
                        <br/>

                        <label>Publish Date</label>
                        <input type='date'  v-model='app.publishDate' class='form-control'/>
                        <br/>

                        <div class='row'>
                            <div class='col'>
                                <label class='checkbox-label'>Featured?</label>
                                <input type='checkbox' v-model='app.isFeatured' />
                            </div>
                            <div class='col'>
                                <label class='checkbox-label'>Collaboration?</label>
                                <input type='checkbox'  v-model='app.isCollaboration'/>
                            </div>
                            <div class='col'>
                                <label class='checkbox-label'>Private Repo?</label>
                                <input type='checkbox'  v-model='app.isPrivateRepo'/>
                            </div>
                        </div>
                        <br/>

                        <label>Language</label>
                        <input type='text'  v-model='app.language' class='form-control'/>
                        <br/>
                        

                        <label>Description</label>
                        <textarea  v-model='app.description' class='form-control'/>
                        <br/>

                        <label>Deployed Link</label>
                        <input type='text'  v-model='app.deployedLink' class='form-control'/>
                        <br/>

                        <label>GitHub Link</label>
                        <input type='text'  v-model='app.githubLink' class='form-control'/>
                        <br/>

                        <label>Support Status</label>
                        <select v-model='app.supportStatus' class='form-control'>
                            <option default disabled>Select support status</option>
                            <option value='active'>Active</option>
                            <option value='inactive'>Inactive</option>
                            <option value='discontinued'>Discontinued</option>
                        </select>
                        <br/>

                        <label>Application Type</label>
                        <select v-model='app.applicationType' class='form-control'>
                            <option default disabled>Select application type</option>
                            <option value='client-side'>Client Side</option>
                            <option value='server-side'>Server Side</option>
                            <option value='unified'>Unified</option>
                        </select>
                        <br/>
                    </div>

                    <div class='col'>

                        <label>Deployment</label>
                        <div class='p-3 bg-dark text-light'>
                            <label>Frontend Link</label>
                            <input type='text'  v-model='app.frontendLink' class='form-control'/>
                            <br/>

                            <label>Backend Link</label>
                            <input type='text'  v-model='app.backendLink' class='form-control'/>
                            <br/>
                        </div>
                        <br/>

                        <label>Repositories</label>
                        <div class='p-3 bg-primary text-light'>
                            <label>Frontend Repo Link</label>
                            <input type='text'  v-model='app.frontendRepoLink' class='form-control'/>
                            <br/>

                            <label>Backend Repo Link</label>
                            <input type='text'  v-model='app.backendRepoLink' class='form-control'/>
                            <br/>
                        </div>
                        <br/>

                        <label>Keywords</label>
                        <br/>
                        <span class='col-xl-3 col-lg-4' v-for='item in allKeywords' :key='item.name'>
                            <label class='checkbox-label'>{{item.name}}</label>
                            <input type='checkbox' :value='item.name' v-model='app.keywords'/>
                            <br/>
                        </span>
                    </div>

                </div>
                
                <br/>

                <div class='row'>
                    <div class='col text-left'>
                        <div v-if='editingRecord' class='btn btn-danger' @click='processDelete'>Delete</div>
                    </div>
                    <div class='text-right'>
                        <div class='btn btn-secondary ml-2' @click='$router.go(-1)'>Cancel</div>
                        <div v-if='editingRecord' class='btn btn-primary ml-2' @click='processEdit'>Submit</div>
                        <div v-else class='btn btn-primary ml-2' @click='processCreate'>Submit</div>
                    </div>
                </div>

            </form>

        </div>
    </div>
</template> 

<script>
    export default {
        name: 'AppDetails',
        props: [
            'isNewRecord'
        ],
        mounted: function() {
            var self = this;
            this.pullKeywords();
            if (self.editingRecord) {
                this.processGet();
            }
        },
        data: function () {
            return {
                editingRecord: !this.isNewRecord,
                allKeywords: [],
                app: {
                    title: '',
                    publishDate: '',
                    isFeatured: '',
                    isCollaboration: '',
                    imagePath: '',
                    language: '',
                    description: '',
                    deployedLink: '',
                    githubLink: '',
                    supportStatus: '',
                    applicationType: '',
                    frontendLink: '',
                    backendLink: '',
                    frontendRepoLink: '',
                    backendRepoLink: '',
                    keywords: []
                }
            }
        },
        methods: {
            
            encodeImageUpload: function() {
                var self = this;
                const preview = document.getElementById('imageThumbnailPreview');
                const file = document.getElementById('imageThumbnailUpload').files[0];
                const reader = new FileReader();
            
                reader.addEventListener("load", function () {
                    preview.src = reader.result;
                    self.app.imagePath = reader.result;
                }, false);

                if (file) {
                    reader.readAsDataURL(file);
                }

            },

            pullKeywords() {
                var self = this;
                fetch("https://central-api-flask-cm6ud432ka-uc.a.run.app/AppGalleryLite/api/keywords").then(function (response) {
                    return response.json();
                }).then(function (result) {
                    let unfilteredKeywords =  result.sort((a,b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : ((b.name.toLowerCase() > a.name.toLowerCase()) ? -1 : 0));
                    self.allKeywords = unfilteredKeywords.filter(item => item.showInGallery)
                });
            },

            processGet: function() {
                var self = this;
                var url = 'https://central-api-flask-cm6ud432ka-uc.a.run.app/AppGalleryLite/api/applications'
                fetch(url, {
                    method: "GET",
                    headers: { "Content-Type": "application/json" }
                }).then(function (response) {
                    return response.json();
                }).then(response => {
                    let litmus;
                    for (var i = 0; i < response.length; i++) {
                        if (response[i]._id.$oid === this.$route.params.id) {
                            litmus = response[i]
                        }
                    }
                    self.app = litmus;
                    self.app.publishDate = self.app.publishDate.substring(0,10)
                });
            },

            processCreate: function() {
                var self = this;
                var url = 'https://central-api-flask-cm6ud432ka-uc.a.run.app/AppGalleryLite/api/applications'
                fetch(url, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(this.app)
                }).then(response => {
                    self.$router.go(-1);
                });
            },
            
            processEdit: function() {
                var self = this;
                var url = 'https://central-api-flask-cm6ud432ka-uc.a.run.app/AppGalleryLite/api/applications'
                fetch(url, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        _id: this.$route.params.id,
                        title: this.app.title,
                        publishDate: this.app.publishDate,
                        isFeatured: this.app.isFeatured,
                        isCollaboration: this.app.isCollaboration,
                        imagePath: this.app.imagePath,
                        language: this.app.language,
                        description: this.app.description,
                        deployedLink: this.app.deployedLink,
                        githubLink: this.app.githubLink,
                        supportStatus: this.app.supportStatus,
                        applicationType: this.app.applicationType,
                        frontendLink: this.app.frontendLink,
                        backendLink: this.app.backendLink,
                        frontendRepoLink: this.app.frontendRepoLink,
                        backendRepoLink: this.app.backendRepoLink,
                        keywords: this.app.keywords
                    })
                }).then(response => {
                    self.$router.go(-1)
                });
            },

            processDelete: function() {
                var self = this;
                var url = 'https://central-api-flask-cm6ud432ka-uc.a.run.app/AppGalleryLite/api/applications'
                fetch(url, {
                    method: "DELETE",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        _id: this.$route.params.id
                    })
                }).then(response => {
                    self.$router.go(-1)
                });
            }

        }
    }
</script>

<style scoped>

img {
    max-width: 100%;
    min-width: 100%;
}

.checkbox-label {
    margin-right: 10px;
    font-weight: normal;
}

label{
    font-weight: bolder;
    margin-bottom: 0.2rem
}

</style>