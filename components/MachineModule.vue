<template>
    <div class="col-auto">
        <div class="dropdown">
            <button type="button" class="btn btn-dark p-1">
                <div v-if="data == null" style="width:24px; height:24px;"></div>
                <Item v-if="data != null" :id="data.id" :count="data.count" />
            </button>
            <div class="dropdown-menu">
                <button type="button" class="dropdown-item py-1 px-2" @click="data.assignModule(recipe)">
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    props: [ 'data' ],
}
</script>