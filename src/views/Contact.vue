<template>
    <div>
        <NavbarContact/>
        <div class='text-left container p-3 animated fadeInUp'>
            <div class="row">
            <ContactCard 
                :title='"GitHub"'
                :body='"View my source code and explore my repositories"'
                :linkRef='"https://github.com/cafeamericano"'
                :linkIcon='"fas fa-external-link-alt"'
            />

            <ContactCard 
                :title='"LinkedIn"'
                :body='"Connect with me on LinkedIn."'
                :linkRef='"https://www.linkedin.com/in/matthew-farmer-204930182"'
                :linkIcon='"fas fa-external-link-alt"'
            />

            <ContactCard 
                :title='"Email"'
                :body='"Email me directly at mfarmer5102@gmail.com"'
            />
            </div>
        </div>
    </div>
</template>

<script>

import ContactCard from "@/components/ContactCard.vue";
import NavbarContact from "@/components/Navbars/Contact.vue";

export default {
    name: 'AddRecord',
    props: [],
    components: {
        ContactCard,
        NavbarContact
    },
    data: function () {
        return {
            isNewRecord: true
        }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>