<template>
    <div class="col-12">
        <div class="subtitle">Electricity</div>
        <div class="card card-body py-1 pe-1 ps-2">
            <div class="row align-items-center">
                <div class="col">
                    <div class="row gx-2 align-items-center">
                        <div class="col-auto">
                            <button type="button" class="btn btn-sm btn-dark p-1" :class="{ 'disabled opacity-25':machineAvailableCount < 1 }" @click="assign();">
                                <i class="fas fa-fw fa-plus"></i>
                            </button>
                        </div>
                        <div class="col-auto">
                            <button type="button" class="btn btn-sm btn-dark p-1" :class="{ 'disabled opacity-25':generator.used < 1 }" @click="unassign();">
                                <i class="fas fa-fw fa-minus"></i>
                            </button>
                        </div>
                        <div class="col-auto">
                            <span :class="{ 'text-muted opacity-25':generator.used < 1 }"><small>x</small> <FormatNumber :value="generator.used" /></span>
                        </div>
                    </div>
                </div>
                <div v-if="consum" class="col-auto">
                    <div class="row gx-2 align-items-center">
                        <div class="col-auto"><RecipeInput :id="consum.id" :count="consum.count" :game="game" /></div>
                    </div>
                </div>
                <div v-if="consum" class="col-auto small">
                    <i class="fas fa-fw fa-long-arrow-alt-right"></i>
                </div>
                <div class="col-auto">
                    <div class="row gx-2 align-items-center">
                        <div class="col-auto"><RecipeOutput :id="'electricity'" :count="output" :game="game" /></div>
                    </div>
                </div>
                <div class="col-auto">
                    <div class="text-center small mb-1"><FormatTime :value="time" /></div>
                    <div class="progress" style="height:3px; width:55px;">
                        <div class="progress-bar" role="progressbar" :style="'width:' + percent + '%'" :aria-valuenow="percent" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div class="col-auto">
                    <button v-if="generator.state == 'paused'" type="button" class="btn btn-dark p-2 small" :class="{ 'disabled opacity-25':generator.used < 1 }" style="width:32px; height:32px;" @click="generator.startGenerating();">
                        <i class="fas fa-fw fa-play small"></i>
                    </button>
                    <button v-if="generator.state == 'running'" type="button" class="btn btn-dark p-2 small" style="width:32px; height:32px;" @click="generator.pauseGenerating();">
                        <i class="fas fa-fw fa-stop small"></i>
                    </button>
                    <button v-if="generator.state == 'waiting'" type="button" class="btn btn-dark p-2 small" style="width:32px; height:32px;" @click="generator.pauseGenerating();">
                        <i class="text-danger fas fa-fw fa-stop small"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    props: [ 'generator', 'game' ],
    
    computed: {
        
        machineAvailableCount() { return this.generator.count - this.generator.used },
        
        consum() { return this.generator.getConsum() },
        
        output() { return this.generator.getElecProd() },
        
        time() { return this.generator.remainingTime },
        
        percent() {
        
            if (this.generator.remainingTime > 0) return 100 - 100 * (this.generator.remainingTime / this.generator.getTime())
            else return 0
        },
    },
    
    methods: {
    
        assign() {
            
            if (machineAvailableCount >= 1) {
            
                this.generator.used += 1
            }
        },
        
        unassign() {
            
            if (this.generator.used >= 1) {
            
                this.generator.used -= 1
                
                if (this.generator.used <= 0) {
                
                    this.generator.used = 0
                    this.generator.pauseGenerating()
                }
            }
        },
    },
}
</script>