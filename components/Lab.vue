<template>
    <div class="col-auto">
        <div class="position-relative card card-body">
            <img :src="require(`~/assets/vignets/${data.id}.png`)" width="24px" height="24px" :title="$t('name_' + data.id)" :alt="$t('name_' + data.id)" />
            <div class="position-absolute start-0 top-0 small ps-1">
                <FormatNumber class="text-shadow fw-bold" :class="{ 'text-muted':data.count == 0 }" :value="data.count" />
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