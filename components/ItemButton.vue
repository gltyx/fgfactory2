<template>
    <div v-if="unlocked" class="col-auto">
        <button type="button" class="position-relative btn btn-dark" :class="{ 'active border-primary':$parent.$parent.currentProductionSelection == id }" style="width:60px" @click="$parent.$parent.setCurrentProductionSelection(id)">
            <img :src="require(`~/assets/items/${id}.png`)" width="24px" height="24px" :title="$t('name_' + id)" :alt="$t('name_' + id)" />
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
        
        unlocked() {
        
            let item = this.game.bases[this.id]
            if (item) return item.isUnlocked()
        },
        
        count() {
            
            let item = this.game.bases[this.id]
            if (item) return item.count
        },
        
        max() {
            
            let item = this.game.bases[this.id]
            if (item) return item.getMax()
        },
        
        prod() {
        
            let item = this.game.bases[this.id]
            if (item) return item.getProd()
        },        
    },
}
</script>