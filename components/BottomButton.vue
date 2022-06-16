<template>
    <div class="col-auto">
        <button type="button" class="w-100 btn btn-dark" @click="click()">
            <div class="row gx-1 align-items-center">
                <div class="col-auto">
                    <span class="h5"><i :class="'fas fa-fw ' + icon"></i></span>
                </div>
                <div class="d-none d-sm-block col-auto">
                    <span>{{ label }}</span>
                </div>
            </div>
        </button>
    </div>
</template>

<script>
export default {

    props: [ 'label', 'icon', 'click' ],
}
</script>