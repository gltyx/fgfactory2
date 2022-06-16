<template>
    <div v-if="$parent.currentStorageSubTabId == data.id" class="col-12">
        <div class="card">
            <div class="card-header">
                <div class="row align-item-center">
                    <div class="col">
                        <div class="row gx-2 align-item-center">
                            <div class="col-auto">
                                <img :src="require(`~/assets/vignets/${data.id}.png`)" width="18px" height="18px" :title="$t('name_' + data.id)" :alt="$t('name_' + data.id)" />
                            </div>
                            <div class="col-auto">
                                <span class="fw-bold">{{ $t('name_' + data.id) }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <div class="row gx-4 align-item-center mb-2">
                    <div class="col-auto">
                        <div class="small fw-bold text-muted mb-1">Total</div>
                        <span style="line-height:25px;"><FormatNumber :value="data.getCount()" /></span>
                    </div>
                    <div class="col-auto">
                        <div class="small fw-bold text-muted mb-1">Assigned</div>
                        <span style="line-height:25px;"><FormatNumber :value="assignedCount" /></span>
                    </div>
                </div>
                <div class="row gx-2 gy-2 align-item-center">
                    <StorageItem v-for="(itemStorage, index) in getItemStorages()" :key="index" :data="itemStorage" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    props: [ 'data' ],
    
    computed: {
    
        assignedCount() { return this.data.game.getStorageAssignedCount(this.data.id) },
    },
    
    methods: {
        
        getItemStorages() {
        
            let ret = []            
            for (let id in this.data.game.items) {
                let item = this.data.game.items[id]
                item.storages.forEach(storage => {
                    if (storage.id == this.data.id) {
                        ret.push(storage)
                    }
                })
            }
            
            return ret
        },
    },
}
</script>