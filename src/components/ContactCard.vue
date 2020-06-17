<template>
    <main class="col-12 mb-3">
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
    </main>
</template>

<script>

export default {
    name: 'ContactCard',
    data: function () {
        return {
            // Properties go here
        }
    },
    props: ['title', 'body', 'linkRef', 'linkIcon']
}

</script>