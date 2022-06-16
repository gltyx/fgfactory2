<template>
    <div v-if="data.item.isUnlocked() == true" class="col-4">
        <div class="card card-body p-1">
            <div class="row align-items-center">
                <div class="col-auto">
                    <img :src="require(`~/assets/vignets/${data.item.id}.png`)" width="18px" height="18px" :title="$t('name_' + data.item.id)" :alt="$t('name_' + data.item.id)" />
                </div>
                <div class="col">
                    <FormatNumber :value="data.item.getMax()" />
                </div>
                <div class="col-auto">
                    <div class="row gx-2 align-items-center">
                        <div class="col-auto text-muted" :class="{ 'opacity-25':data.count < 1 }">
                            <small class="text-muted">x</small>
                            <FormatNumber :value="data.count" />
                        </div>
                        <div class="col-auto">
                            <button type="button" class="btn btn-dark p-2 small" :class="{ 'disabled opacity-25':availableCount < 1 }" style="width:32px; height:32px;" @click="data.count += 1">
                                <i class="fas fa-fw fa-plus small"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    props: [ 'data' ],
    
    computed: {
    
        availableCount() {
            
            let totalCount = this.data.item.game.items[this.data.id].count
            let totalAssigned = this.data.item.game.getStorageAssignedCount(this.data.id)
            
            return totalCount - totalAssigned
        }
    
    },
}
</script>