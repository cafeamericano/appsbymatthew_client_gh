<template>
    <div>
        <NavbarContact/>
        <div class='text-left container p-3 animated fadeIn'>
            <div class="row">
            <ContactCard 
                :title='"GitHub"'
                :body='"View my source code and explore my repositories"'
                :linkRef='"https://github.com/cafeamericano"'
                :linkIcon='"fab fa-github fa-2x"'
            />

            <ContactCard 
                :title='"Bitbucket"'
                :body='"Connect with me on LinkedIn."'
                :linkRef='"https://www.linkedin.com/in/matthew-farmer-204930182"'
                :linkIcon='"fab fa-bitbucket fa-2x text-primary"'
            />

            <ContactCard 
                :title='"LinkedIn"'
                :body='"Connect with me on LinkedIn."'
                :linkRef='"https://www.linkedin.com/in/matthew-farmer-204930182"'
                :linkIcon='"fab fa-linkedin fa-2x text-primary"'
            />

            <ContactCard 
                :title='"Email"'
                :body='"Connect with me on LinkedIn."'
                :linkRef='"https://www.linkedin.com/in/matthew-farmer-204930182"'
                :linkIcon='"far fa-envelope fa-2x text-danger"'
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