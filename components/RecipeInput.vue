<template>
    <div class="position-relative p-1 d-flex">
        <img :src="require(`~/assets/items/${id}.png`)" width="18px" height="18px" :title="$t('name_' + id)" :alt="$t('name_' + id)" />
        <div class="position-absolute end-0 bottom-0 small">
            <FormatNumber class="text-shadow" :class="{ 'text-danger':hasEnough == false }" :value="count" />
        </div>
    </div>
</template>

<script>
export default {

    props: [ 'id', 'count', 'game' ],
    
    computed: {
    
        hasEnough() {
            
            let ret = false
            
            let base = this.game.bases[this.id]
            if (base) {
                ret = base.getAvailableCount() >= this.count
            }
            
            return ret
        }
    },
}
</script>