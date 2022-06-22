<template>
    <div class="col-12">
        <div class="card card-body py-1 pe-1 ps-2">
            <div class="row align-items-center">
                <div class="col">
                    <div class="row gx-2 align-items-center">
                        <div class="col-auto">
                            <button type="button" class="btn btn-sm btn-dark p-1" :class="{ 'disabled opacity-25':machineAvailableCount < item.buildCount }" @click="assign();">
                                <i class="fas fa-fw fa-plus"></i>
                            </button>
                        </div>
                        <div class="col-auto">
                            <button type="button" class="btn btn-sm btn-dark p-1" :class="{ 'disabled opacity-25':production.count < item.buildCount }" @click="unassign();">
                                <i class="fas fa-fw fa-minus"></i>
                            </button>
                        </div>
                        <div class="col-auto">
                            <img :src="require(`~/assets/items/${production.machineId}.png`)" width="18px" height="18px" :title="$t('name_' + production.machineId)" :alt="$t('name_' + production.machineId)" />
                        </div>
                        <div class="col-auto">
                            <span :class="{ 'text-muted opacity-25':production.count < 1 }"><small>x</small> <FormatNumber :value="production.count" /></span>
                        </div>
                    </div>
                </div>
                <div v-if="energy" class="col-auto">
                    <div class="row gx-2 align-items-center">
                        <div class="col-auto"><RecipeInput :id="energy.id" :count="energy.count" :game="game" /></div>
                    </div>
                </div>
                <div v-if="elecConsum > 0" class="col-auto">
                    <div class="row gx-2 align-items-center">
                        <div class="col-auto"><RecipeOutput :id="'electricity'" :count="elecConsum" :game="game" /></div>
                    </div>
                </div>
                <div v-if="inputs" class="col-auto">
                    <div class="row gx-2 align-items-center">
                        <div v-for="(count, id) in inputs" :key="id" class="col-auto"><RecipeInput :id="id" :count="count" :game="game" /></div>
                    </div>
                </div>
                <div v-if="energy || elecConsum > 0 || inputs" class="col-auto small">
                    <i class="fas fa-fw fa-long-arrow-alt-right"></i>
                </div>
                <div v-if="outputs" class="col-auto">
                    <div class="row gx-2 align-items-center">
                        <div v-for="(count, id) in outputs" :key="id" class="col-auto"><RecipeOutput :id="id" :count="count" :game="game" /></div>
                    </div>
                </div>
                <div class="col-auto">
                    <div class="text-center small mb-1"><FormatTime :value="time" /></div>
                    <div class="progress" style="height:3px; width:55px;">
                        <div class="progress-bar" role="progressbar" :style="'width:' + percent + '%'" :aria-valuenow="percent" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div class="col-auto">
                    <button v-if="production.state == 'paused'" type="button" class="btn btn-dark p-2 small" :class="{ 'disabled opacity-25':production.count < 1 }" style="width:32px; height:32px;" @click="production.startProducing();">
                        <i class="fas fa-fw fa-play small"></i>
                    </button>
                    <button v-if="production.state == 'running'" type="button" class="btn btn-dark p-2 small" style="width:32px; height:32px;" @click="production.pauseProducing();">
                        <i class="fas fa-fw fa-stop small"></i>
                    </button>
                    <button v-if="production.state == 'waiting'" type="button" class="btn btn-dark p-2 small" style="width:32px; height:32px;" @click="production.pauseProducing();">
                        <i class="text-danger fas fa-fw fa-stop small"></i>
                    </button>
                </div>
            </div>
            <div v-if="modulesUnlocked && production.moduleSlots > 0" class="small mt-2 mb-1">
                <div class="row align-items-center">
                    <div class="col-6">
                        <span class="text-muted">Modules</span> <span>{{ production.getModuleCount() }}</span> <span class="text-muted">/{{ production.getModuleMax() }}</span>
                    </div>
                    <div class="col-6">
                        <div class="row align-items-center">
                            <div class="col-4 text-center">
                                <span class="text-muted">Speed</span>
                            </div>
                            <div class="col-4 text-center">
                                <span class="text-muted">Energy</span>
                            </div>
                            <div class="col-4 text-center">
                                <span class="text-muted">Outputs</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="modulesUnlocked && production.moduleSlots > 0" class="row g-2 align-items-center">
                <ProductionModule v-for="(module, index) in production.modules" :key="index" :module="module" :game="game" />
            </div>
        </div>
    </div>
</template>

<script>
export default {

    props: [ 'production', 'item', 'game' ],
    
    computed: {
        
        machineAvailableCount() { return this.game.bases[this.production.machineId].getAvailableCount() },
        
        energy() { return this.production.getEnergy() },
        
        elecConsum() { return this.production.getElecConsum() },
        
        inputs() { return this.production.getInputs() },
        
        outputs() { return this.production.getOutputs() },
        
        time() { return this.production.remainingTime },
        
        percent() {
        
            if (this.production.remainingTime > 0) return 100 - 100 * (this.production.remainingTime / this.production.getTime())
            else return 0
        },
        
        modulesUnlocked() { return this.game.bases['modules'].isDone() },
    },
    
    methods: {
    
        assign() {
            
            if (this.machineAvailableCount >= this.item.buildCount) {
            
                this.production.count += this.item.buildCount
            }
        },
        
        unassign() {
            
            if (this.production.count >= this.item.buildCount) {
            
                this.production.count -= this.item.buildCount
                
                if (this.production.count <= 0) {
                
                    this.production.count = 0
                    this.production.pauseProducing()
                }
            }
        },
    },
}
</script>