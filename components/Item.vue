<template>
    <div v-if="data.isUnlocked() == true" class="col-auto">
        <div class="position-relative card card-body">
            <img :src="require(`~/assets/vignets/${data.id}.png`)" width="24px" height="24px" :title="$t('name_' + data.id)" :alt="$t('name_' + data.id)" />
            <div class="position-absolute start-0 top-0 small ps-1">
                <FormatNumber class="text-shadow fw-bold" :class="{ 'text-muted':data.count == 0, 'text-danger':data.count >= data.getMax() }" :value="data.count" />
            </div>
            <div class="position-absolute end-0 bottom-0 small pe-1">
                <span class="text-shadow fw-bold" :class="{ 'text-muted':prod == 0, 'text-danger':prod < 0, 'text-success':prod > 0 }"><FormatNumber :value="prod" /> <small>/s</small></span>                
            </div>
        </div>
    </div>
</template>

<script>
export default {

    props: [ 'data' ],
    
    computed: {
    
        prod() { return this.data.game.getItemProd(this.data.id) },
    }
}
</script>