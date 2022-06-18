<template>
    <div class="col-12">
        <div class="subtitle">Manual</div>
        <div class="card card-body py-1 pe-1 ps-2">
            <div class="row align-items-center">
                <div class="col">
                    <img :src="require(`~/assets/items/manual.png`)" width="18px" height="18px" :title="$t('name_manual')" :alt="$t('name_manual')" />
                </div>
                <div v-if="energy" class="col-auto">
                    <div class="row gx-2 align-items-center">
                        <div class="col-auto"><RecipeInput :id="energy.id" :count="energy.count" :game="game" /></div>
                    </div>
                </div>
                <div v-if="inputs" class="col-auto">
                    <div class="row gx-2 align-items-center">
                        <div v-for="(count, id) in inputs" :key="id" class="col-auto"><RecipeInput :id="id" :count="count" :game="game" /></div>
                    </div>
                </div>
                <div v-if="energy || inputs" class="col-auto small">
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
                    <button v-if="production.state == 'paused'" type="button" class="btn btn-dark p-2 small" style="width:32px; height:32px;" @click="production.startProducing();">
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
        </div>
    </div>
</template>

<script>
export default {

    props: [ 'production', 'game' ],
    
    computed: {
        
        energy() { return this.production.getEnergy() },
        
        inputs() { return this.production.getInputs() },
        
        outputs() { return this.production.getOutputs() },
        
        time() { return this.production.remainingTime },
        
        percent() {
        
            if (this.production.remainingTime > 0) return 100 - 100 * (this.production.remainingTime / this.production.getTime())
            else return 0
        },
    },
}
</script>