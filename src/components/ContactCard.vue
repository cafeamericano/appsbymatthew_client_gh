<template>
    <main class="col-12 mb-3">
        <a :href='urlLink' target="_blank">
            <div class='card p-3 pt-4'>
                <div class="row">
                    <div class="col-1 text-center">
                        <i :class='linkIcon'></i>
                    </div>
                    <div class='col-3 text-left pt-1'>
                        <h5 v-html=title></h5>
                    </div>
                    <div class='col-7 text-left pt-1'>
                        <p v-html=body></p>
                    </div>
                </div>
            </div>
        </a>
    </main>
</template>

<script>

export default {
    name: 'ContactCard',
    data: function () {
        return {
            urlLink: this.linkRef || '#'
        }
    },
    props: ['title', 'body', 'linkRef', 'linkIcon']
}

</script>

<style scoped>
       a:link {color: black;}
       a:visited {color: black;}
       a:hover {color: black;}
       a:active {color: black;}
</style>