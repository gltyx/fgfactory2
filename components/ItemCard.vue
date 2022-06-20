<template>
    <div v-if="$parent.currentProductionSelection == id" class="flex-grow-1 scrollbar">
        <div class="card" style="max-height: 100%;">
            <div class="card-header">
                <div class="row align-item-center">
                    <div class="col">
                        <div class="row gx-2 align-item-center">
                            <div class="col-auto">
                                <img :src="require(`~/assets/items/${id}.png`)" width="18px" height="18px" :title="$t('name_' + id)" :alt="$t('name_' + id)" />
                            </div>
                            <div class="col-auto">
                                <span class="fw-bold">{{ $t('name_' + id) }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-body scrollbar">
                <div class="row g-3">
                    <div class="col-12">
                        <div class="row gx-4 align-items-end">
                            <div class="col-auto">
                                <div class="subtitle">Count</div>
                                <span :class="{ 'text-muted opacity-25':count == 0, 'text-danger':count >= max }"><FormatNumber :value="count" /></span>
                            </div>
                            <div v-if="max" class="col-auto">
                                <div class="subtitle">Storage</div>
                                <span><FormatNumber :value="max" /></span>
                            </div>
                            <div v-if="used != null" class="col-auto">
                                <div class="subtitle">Used</div>
                                <span :class="{ 'text-muted opacity-25':used == 0 }"><FormatNumber :value="used" /></span>
                            </div>
                            <div v-if="unused != null" class="col-auto">
                                <div class="subtitle">Unused</div>
                                <span :class="{ 'text-muted opacity-25':unused == 0, 'text-success':unused > 0 }"><FormatNumber :value="unused" /></span>
                            </div>
                            <div v-if="storages" class="col">
                                <div class="row align-items-center justify-content-end">
                                    <ItemCardStorage v-for="storage in storages" :key="storage.id" :storage="storage" :game="game" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <ItemManualProduction v-if="manualProduction" :production="manualProduction" :game="game" />
                    <div v-if="machineProductions.length > 0" class="col-12">
                        <div class="subtitle">Production</div>
                        <div class="row align-items-center">
                            <div class="col">
                                <div class="btn-group btn-group-sm" role="group">
                                    <button type="button" class="btn btn-dark py-1" :class="{ 'active':isBuildCountActive(1) }" @click="changeBuildCount(1)">1</button>
                                    <button type="button" class="btn btn-dark py-1" :class="{ 'active':isBuildCountActive(10) }" @click="changeBuildCount(10)">10</button>
                                    <button type="button" class="btn btn-dark py-1" :class="{ 'active':isBuildCountActive(100) }" @click="changeBuildCount(100)">100</button>
                                </div>
                            </div>
                            <div class="col-auto">
                                <button type="button" class="btn btn-sm btn-dark py-1" @click="stopAll()">
                                    <i class="fas fa-fw fa-stop"></i>
                                    <span>Stop all</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div v-if="machineProductions.length > 0" class="col-12">
                        <div class="row g-2">
                            <ItemMachineProduction v-for="production in machineProductions" :key="production.id" :production="production" :item="item" :game="game" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    props: [ 'id', 'game' ],
    
    computed: {
    
        item() {
            
            let item = this.game.bases[this.id]
            if (item) return item
        },
        
        count() {
            
            let item = this.game.bases[this.id]
            if (item) return item.count
        },
        
        max() {
            
            let item = this.game.bases[this.id]
            if (item) return item.getMax()
        },
        
        used() {
            
            let item = this.game.bases[this.id]
            if (item && item.type != 'item') return item.getUsedCount()
        },
        
        unused() {
            
            let item = this.game.bases[this.id]
            if (item && item.type != 'item') return item.getAvailableCount()
        },
        
        storages() {
        
            let item = this.game.bases[this.id]
            if (item) return item.storages
        },
        
        manualProduction() {
            
            let ret = null
            
            let item = this.game.bases[this.id]
            if (item) {
                item.productions.forEach(production => {
                    if (production.machineId == 'manual') {
                        ret = production
                    }
                })
            }
            
            return ret
        },
        
        machineProductions() {
        
            let ret = []
            
            let item = this.game.bases[this.id]
            if (item) {
                item.productions.forEach(production => {
                    if (production.machineId != 'manual' && production.isUnlocked() == true) {
                        ret.push(production)
                    }
                })
            }
            
            return ret
        },
    },

    methods: {
        
        isBuildCountActive(count) {
        
            let item = this.game.bases[this.id]
            if (item &&  item.buildCount == count) return true
            
            return false
        },
        
        changeBuildCount(newBuildCount) {
        
            let item = this.game.bases[this.id]
            if (item) item.buildCount = newBuildCount
        },
        
        stopAll() {
        
            this.machineProductions.forEach(production => { production.pauseProducing() })
        },
    },
}
</script>