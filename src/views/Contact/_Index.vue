<template>
    <div>
        <NavbarContact/>
        <div class='text-left container p-3 animated fadeIn'>
            <div class="row">

            <ContactCard 
                :title='"GitHub"'
                :body='"View my source code and explore my repositories."'
                :linkRef='"https://github.com/mfarmer5102"'
                :linkIcon='"fab fa-github fa-2x"'
            />

            <ContactCard 
                :title='"LinkedIn"'
                :body='"Connect with me on LinkedIn."'
                :linkRef='"https://www.linkedin.com/in/matthew-farmer-204930182"'
                :linkIcon='"fab fa-linkedin fa-2x text-primary"'
            />

            </div>
        </div>
    </div>
</template>

<script>

import ContactCard from "@/components/Contact/ContactCard.vue";
import NavbarContact from "@/components/Contact/Navbar.vue";
import {config} from "@/config";
import common from "@/common";
import analytics from '@/analytics';

export default {
    name: 'Contact_Index',
    props: [],
    components: {
        ContactCard,
        NavbarContact
    },
    mounted: function() {
        analytics.recordAction({
            location: window.location.hostname,
            sublocation: "Contact Page", 
            description: "The user has landed on the Contact page.",
            details: {}
        });
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