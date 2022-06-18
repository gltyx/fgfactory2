<template>
    <div v-if="unlocked" class="col-4">
        <div class="card card-body py-1 px-1">
            <div class="row gx-2 align-items-center">
                <div class="col-auto">
                    <img :src="require(`~/assets/items/${storage.id}.png`)" width="18px" height="18px" :title="$t('name_' + storage.id)" :alt="$t('name_' + storage.id)" />
                </div>
                <div class="col">
                    <span :class="{ 'text-muted opacity-25':storage.count < 1 }"><small>x</small> <FormatNumber :value="storage.count" /></span>
                </div>
                <div class="col-auto">
                    <button type="button" class="btn btn-sm btn-dark p-1" :class="{ 'disabled opacity-25':availableCount < 1 }" @click="storage.count += 1">
                        <i class="fas fa-fw fa-plus"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    props: [ 'storage', 'game' ],
    
    computed: {
        
        unlocked() {
        
            let base = this.game.bases[this.storage.id]
            return base.isUnlocked()
        },
    
        availableCount() {
        
            let base = this.game.bases[this.storage.id]
            return base.getAvailableCount()
        },
    }
}
</script>