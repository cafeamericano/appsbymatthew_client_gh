<template>
    <main class="">
        <div>
            <div v-if='isConfirmingDeletion'>
                <h5 class="text-light">Are you sure you want to delete {{recordName}}?</h5><br/>
                <div @click='processDelete' class='pt-3 pb-3 btn btn-danger text-light rounded-0 shadow' style="width: 250px"><strong>Delete</strong></div><br/><br/>
                <div @click='processCancel' class='pt-3 pb-3 btn text-light rounded-0 shadow' style="background-color: #42b983; width: 250px"><strong>Cancel</strong></div><br/><br/>
            </div>
            <div v-else>
                <h5 class="text-light">What would you like to do with {{recordName}}?</h5><br/>
                <div @click='processEdit' class='pt-3 pb-3 btn text-light rounded-0 shadow' style="background-color: #42b983; width: 250px"><strong>Edit</strong></div><br/><br/>
                <div @click='processDelete' class='pt-3 pb-3 btn text-light rounded-0 shadow' style="background-color: #42b983; width: 250px"><strong>Delete</strong></div><br/><br/>
                <div @click='processCancel' class='pt-3 pb-3 btn text-light rounded-0 shadow' style="background-color: #42b983; width: 250px"><strong>Cancel</strong></div><br/><br/>
            </div>

        </div>
    </main>
</template>

<script>

export default {
    name: 'FullScreenContextMenu',
    methods: {
        processEdit: function() {
            if (this.$attrs.processEdit) {
                return this.$attrs.processEdit();
            }
        },
        processDelete: function() {
            if (this.$attrs.processDelete) {
                this.isConfirmingDeletion = true;
            }
        },
        processCancel: function() {
            if (this.$attrs.processCancel) {
                this.isConfirmingDeletion = false;
                return this.$attrs.processCancel();
            }
        }
    },
    data: function() {
        return {
            recordName: this.$attrs.recordName,
            isConfirmingDeletion: this.$attrs.isConfirmingDeletion
        }
    }
}

</script>

<style scoped>
    main {
        position: fixed;
        top: 0px;
        left: 0px;
        height: 100%;
        width: 100%;
        color: white;
        background-color: rgba(0, 0, 0, 0.7);
        z-index: 3;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>