<template>
    <main class="container p-3">

        <div class="row mb-3">
            <div class="col pr-0 text-right">
                <span class="btn btn-secondary rounded-0">Cancel</span>
                <span class="btn btn-primary rounded-0">Save</span>
            </div>
        </div>

        <div class="text-left card p-3 rounded-0 shadow">

            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text">Name</span>
                </div>
                <input type="text" class="form-control">
            </div>

            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text">Type</span>
                </div>
                <input type="text" class="form-control">
            </div>

            <div class="input-group mb-3">
            <div class="input-group-prepend">
                <label class="input-group-text" for="inputGroupSelect01">Demonstrable</label>
            </div>
            <select class="custom-select" id="inputGroupSelect01">
                <option selected>Choose...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
            </div>

            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01">Proficient</label>
                </div>
                <select class="custom-select" id="inputGroupSelect01">
                    <option selected>Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>

        </div>
    </main>
</template>

<script>

export default {
    name: "Skill-Details",
    components: {
    },
}

</script>

<style scoped>
    /* main {
        position: absolute;
        top: 250px;
        left: 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
    } */
</style>