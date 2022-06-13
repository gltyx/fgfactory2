<template>
    <div>
        <div class="modal fade show d-block">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header bg-light align-items-center">
                        <div class="col">
                            <div class="row gx-1 align-items-center">
                                <div class="col-auto">
                                    <img :src="require(`~/assets/items/${machine.id}.png`)" width="18px" height="18px" :alt="$t('itemName_' + machine.id)" />
                                </div>
                                <div class="col">
                                    <span class="modal-title h5">{{ $t('itemName_' + machine.id) }}</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-auto">
                            <button type="button" class="btn btn-light border" @click="$parent.modalMachine = null;">
                                <span><i class="fas fa-fw fa-times"></i></span>
                            </button>
                        </div>
                    </div>
                    <div class="modal-body">
                        <div class="row g-3">
                            <div class="col-12">
                                <div class="mb-1 small">
                                    <span class="text-muted text-uppercase">Recipe</span>                        
                                </div>
                                <div class="row gx-1 align-items-center">
                                    <div class="col">
                                        <div class="dropdown">
                                            <button class="w-100 btn btn-light border py-1 ps-1 dropdown-toggle text-start d-flex align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <div class="col">
                                                    <span v-if="machine.recipe == null" class="text-muted" style="line-height:30px;">Select a recipe</span>
                                                    <MachineRecipe v-if="machine.recipe != null" :machine="machine" :recipe="machine.recipe" />
                                                </div>
                                            </button>
                                            <div class="w-100 dropdown-menu">
                                                <button v-if="machine.recipe != null" class="dropdown-item" @click="machine.assignRecipe()">
                                                    <span class="text-muted" style="line-height:30px;">Empty recipe</span>
                                                </button>
                                                <button v-for="recipe in availableRecipes()" :key="recipe.id" class="dropdown-item px-1" @click="machine.assignRecipe(recipe)">
                                                    <MachineRecipe :machine="machine" :recipe="recipe" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <div class="text-center">
                                            <span><FormatTime :value="machine.remainingSeconds" /></span>
                                        </div>
                                        <div class="progress" style="width:70px; height:3px;">
                                            <div class="progress-bar" role="progressbar" :style="'width:' + percent() + '%;'" :aria-valuenow="percent()" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <button v-if="machine.state == 'paused'" type="button" class="btn btn-light border" :class="{ 'disabled opacity-25':machine.recipe == null }" @click="run()">
                                            <span style="line-height:24px;"><i class="fas fa-fw fa-play"></i></span>
                                        </button>
                                        <button v-if="machine.state == 'running'" type="button" class="btn btn-light border" @click="pause()">
                                            <span style="line-height:24px;"><i class="fas fa-fw fa-stop"></i></span>
                                        </button>
                                        <button v-if="machine.state == 'waiting'" type="button" class="btn btn-light border" @click="pause()">
                                            <span style="line-height:24px;" class="text-danger"><i class="fas fa-fw fa-exclamation-triangle"></i></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div v-if="machine.energyConsumed > 0" class="col-6">
                                <div class="mb-1 small">
                                    <span class="text-muted text-uppercase">Energy</span>                        
                                </div>
                                <div class="dropdown">
                                    <button class="w-100 btn btn-light border py-1 dropdown-toggle text-start d-flex align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <div class="col">
                                            <span v-if="machine.energy == null" class="text-muted" style="line-height:29px;">Select a fuel</span>
                                            <MachineEnergy v-if="machine.energy != null" :machine="machine" :energy="machine.energy" />
                                        </div>
                                    </button>
                                    <div class="w-100 dropdown-menu">
                                        <button v-for="energy in availableEnergies()" :key="energy.id" class="dropdown-item" @click="machine.assignEnergy(energy)">
                                            <MachineEnergy :machine="machine" :energy="energy" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div v-if="machine.upgrade" class="col-12">
                                <div class="mb-1 small">
                                    <span class="text-muted text-uppercase">Upgrade</span>                        
                                </div>
                                <div class="row gx-1 align-items-center">
                                    <div class="col">
                                        <div class="w-100 p-1 rounded border p-1">
                                            <div class="row gx-1 align-items-center">
                                                <div class="col-auto">
                                                    <div class="row gx-1 align-items-center">
                                                        <div class="col-auto">
                                                            <div class="row gx-1 align-items-center">
                                                                <Item id="time" :count="machine.upgrade.time" class="text-white" />
                                                            </div>
                                                        </div>
                                                        <div class="col-auto">
                                                            <div class="row gx-1 align-items-center">
                                                                <Item v-for="(count, id) in machine.upgrade.inputs" :key="id" :id="id" :count="count" :class="{ 'text-white':count <= machine.game.items[id].count, 'text-danger':count > machine.game.items[id].count }" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-auto">
                                                    <i class="text-muted fas fa-fw fa-long-arrow-alt-right"></i>
                                                </div>
                                                <div class="col-auto">
                                                    <div class="row gx-1 align-items-center">
                                                        <Item v-for="(count, id) in machine.upgrade.outputs" :key="id" :id="id" :count="count" class="text-white" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <div class="text-center">
                                            <span><FormatTime :value="machine.upgradeRemainingSeconds" /></span>
                                        </div>
                                        <div class="progress" style="width:70px; height:3px;">
                                            <div class="progress-bar" role="progressbar" :style="'width:' + upgradePercent() + '%;'" :aria-valuenow="upgradePercent()" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <button v-if="machine.upgradeState == 'paused'" type="button" class="btn btn-light border" :class="{ 'disabled opacity-25':machine.canUpgrade() == false }" @click="machine.startUpgrading()">
                                            <span style="line-height:24px;"><i class="fas fa-fw fa-play"></i></span>
                                        </button>
                                        <button v-if="machine.upgradeState == 'running'" type="button" class="btn btn-light border" @click="machine.stopUpgrading()()">
                                            <span style="line-height:24px;"><i class="fas fa-fw fa-stop"></i></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div v-if="machine.modulesSlots > 0" class="col-12">
                                <div class="mb-1 small">
                                    <span class="text-muted text-uppercase">Modules</span>                        
                                </div>
                                <div class="row g-1">
                                    <div v-for="(module, index) in machine.modules" :key="index" class="col-6">
                                        <div class="dropdown">
                                            <button class="w-100 btn btn-light py-1 border dropdown-toggle text-start d-flex align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <div class="col">
                                                    <span v-if="module == null" class="text-muted" style="line-height:30px;">Empty</span>
                                                    <MachineModule v-if="module != null" :module="module" />
                                                </div>
                                            </button>
                                            <div class="w-100 dropdown-menu">
                                                <button v-if="module != null" class="dropdown-item" @click="machine.assignModule(index, null)">
                                                    <span class="text-muted" style="line-height:30px;">Empty</span>
                                                </button>
                                                <div v-if="availableModules().length < 1" class="dropdown-item">
                                                    <span class="text-muted" style="line-height:30px;">No module available</span>
                                                </div>
                                                <button v-for="itemId in availableModules()" :key="itemId" class="dropdown-item" @click="machine.assignModule(index, itemId)">
                                                    <MachineModule :module="itemId" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal-backdrop fade show"></div>
    </div>
</template>

<script>
export default {

    props: [ 'machine' ],
    
    methods: {
    
        availableRecipes() {
        
            let ret = []
            
            for (let id in this.machine.game.recipes) {
                let recipe = this.machine.game.recipes[id]
                
                if (recipe.machines.includes(this.machine.id) && recipe.isUnlocked() == true) {
                    ret.push(recipe)
                }
            }
            
            return ret
        },

        availableEnergies() {
            
            let ret = []
            
            this.machine.energies.forEach(energyId => {
                
                let item = this.machine.game.items[energyId]
                
                let energy = {}
                energy.id = energyId
                energy.count = (item.value * this.machine.coeffEnergy / this.machine.energyConsumed)
                
                ret.push(energy)
            })
            
            return ret
        },
        
        availableModules() {
            
            let modulesIds = [ 'speedModule1' ]
            
            let ret = []
            
            modulesIds.forEach(moduleId => {
                if (this.machine.game.items[moduleId].used < this.machine.game.items[moduleId].count) {
                    ret.push(moduleId)
                }
            })
            
            return ret
        },
        
        percent() {
            
            if (this.machine.remainingSeconds > 0) return 100 - 100 * (this.machine.remainingSeconds / this.machine.getTime(this.machine.recipe))
            else return 0
        },
        
        upgradePercent() {
            
            if (this.machine.upgradeRemainingSeconds > 0) return 100 - 100 * (this.machine.upgradeRemainingSeconds / this.machine.upgrade.time)
            else return 0
        },
        
        run() { this.machine.startProducing() },
        
        pause() { this.machine.pauseProducing() },
    },
}
</script>