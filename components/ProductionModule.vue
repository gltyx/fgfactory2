<template>
    <div class="col-12">
        <div class="row gx-2 align-items-center">
            <div class="col-auto">
                <button type="button" class="btn btn-sm btn-dark p-1" :class="{ 'disabled opacity-25':!module.id || availableCount < 1 }" @click="module.count += 1">
                    <i class="fas fa-fw fa-plus"></i>
                </button>
            </div>
            <div class="col-auto">
                <button type="button" class="btn btn-sm btn-dark p-1" :class="{ 'disabled opacity-25':module.count < 1 }" @click="module.count -= 1">
                    <i class="fas fa-fw fa-minus"></i>
                </button>
            </div>
            <div class="col dropdown">
                <button type="button" class="w-100 btn btn-dark p-1 d-flex align-items-center dropdown-toggle active" data-bs-toggle="dropdown" aria-expanded="false">
                    <div v-if="module.id" class="col row gx-2 align-items-center">
                        <div class="col-auto">
                            <img :src="require(`~/assets/items/${module.id}.png`)" width="18px" height="18px" :title="$t('name_' + module.id)" :alt="$t('name_' + module.id)" />
                        </div>
                        <div class="col-auto">
                            <span><small>x</small> <FormatNumber :value="count" /></span>
                        </div>
                    </div>
                    <div v-if="!module.id" class="col row gx-2 align-items-center">
                        <div class="col-auto">
                            <small class="ms-1 text-muted">Empty</small>
                        </div>
                    </div>
                </button>
                <div class="dropdown-menu">
                    <div v-if="availableModuleIds.length < 1" class="dropdown-item">
                        <span class="text-muted">No module available</span>
                    </div>
                    <button v-if="module.id" type="button" class="dropdown-item" @click="module.id = null; module.count = 0;">
                        <span class="text-muted">Empty</span>
                    </button>
                    <button v-for="moduleId in availableModuleIds" type="button" class="dropdown-item" @click="module.id = moduleId; module.count = 0;">
                        <div class="row gx-2 align-items-center">
                            <div class="col-auto">
                                <span class="text-muted me-2">Switch to</span>
                                <img :src="require(`~/assets/items/${moduleId}.png`)" width="18px" height="18px" :title="$t('name_' + moduleId)" :alt="$t('name_' + moduleId)" />
                            </div>
                        </div>
                    </button>
                </div>
            </div>
            <div class="col-6">
                <div class="card card-body p-1">
                    <div class="row align-items-center">
                        <div class="col-4 text-center">
                            <span v-if="speedBonus == null" class="text-muted opacity-0">N/A</span>
                            <span v-if="speedBonus != null" :class="{ 'text-success':speedBonus > 0, 'text-danger':speedBonus < 0, 'text-muted':speedBonus == 0 }"><span v-if="speedBonus > 0">+</span>{{ speedBonus }}%</span>
                        </div>
                        <div class="col-4 text-center">
                            <span v-if="energyBonus == null" class="text-muted opacity-0">N/A</span>
                            <span v-if="energyBonus != null" :class="{ 'text-success':energyBonus > 0, 'text-danger':energyBonus < 0, 'text-muted':energyBonus == 0 }"><span v-if="energyBonus > 0">+</span>{{ energyBonus }}%</span>
                        </div>
                        <div class="col-4 text-center">
                            <span v-if="outputsBonus == null" class="text-muted opacity-0">N/A</span>
                            <span v-if="outputsBonus != null" :class="{ 'text-success':outputsBonus > 0, 'text-danger':outputsBonus < 0, 'text-muted':outputsBonus == 0 }"><span v-if="outputsBonus > 0">+</span>{{ outputsBonus }}%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    props: [ 'module', 'game' ],
    
    computed: {
    
        availableCount() {
            
            if (module.id == null) return 0
            
            let base = this.game.bases[this.module.id]
            return base.getAvailableCount()
        },
        
        availableModuleIds() {
            
            let list = [ 'speedModule1', 'speedModule2', 'speedModule3', 'productivityModule1', 'productivityModule2', 'productivityModule3', 'efficiencyModule1', 'efficiencyModule2', 'efficiencyModule3' ]
            
            let ret = []
            list.forEach(moduleId => {
            
                let base = this.game.bases[moduleId]
                if (base.isUnlocked() && moduleId != this.module.id && base.getAvailableCount() > 0) ret.push(moduleId)
            })
            
            return ret
        },
        
        speedBonus() {
        
            let ret = null
            
            if (this.module.id) {
            
                let data = this.game.bases[this.module.id]
                if (data.coeffSpeed) ret = module.count * data.coeffSpeed
            }
            
            if (ret) ret = Math.floor((ret - 1) * 100)
            
            return ret
        },

        energyBonus() {
        
            let ret = null
            
            if (this.module.id) {
            
                let data = this.game.bases[this.module.id]
                if (data.coeffEnergy) ret = module.count * data.coeffEnergy
            }
            
            if (ret) ret = Math.floor((ret - 1) * 100)
            
            return ret
        },

        outputsBonus() {
        
            let ret = null
            
            if (this.module.id) {
            
                let data = this.game.bases[this.module.id]
                if (data.coeffOutputs) ret = module.count * data.coeffOutputs
            }
            
            if (ret) ret = Math.floor((ret - 1) * 100)
            
            return ret
        },
    }
}
</script>