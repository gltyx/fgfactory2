<template>
    <div class="col-auto">
        <button type="button" class="position-relative btn btn-dark" :class="{ 'active':$parent.currentProductionSelection == id }" style="width:60px" @click="$parent.setCurrentProductionSelection(id)">
            <img :src="require(`~/assets/vignets/${id}.png`)" width="24px" height="24px" :title="$t('name_' + id)" :alt="$t('name_' + id)" />
            <div class="position-absolute start-0 top-0 small ps-1">
                <FormatNumber class="text-shadow fw-bold" :class="{ 'text-muted':count == 0, 'text-danger':count >= max }" :value="count" />
            </div>
            <div class="position-absolute end-0 bottom-0 small pe-1">
                <span class="text-shadow fw-bold" :class="{ 'text-muted':prod == 0, 'text-danger':prod < 0, 'text-success':prod > 0 }"><FormatNumber :value="prod" /> <small>/s</small></span>                
            </div>
        </button>
    </div>
</template>

<script>
export default {

    props: [ 'id', 'game' ],
    
    computed: {
    
        max() { return 50 },
        prod() { return 0 },
        count() { return 0 },
    },
}
</script>