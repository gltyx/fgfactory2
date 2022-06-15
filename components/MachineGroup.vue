<template>
    <div v-if="data.recipe.isUnlocked() == true" class="py-2">
        <div class="row align-items-center">
            <div class="col-auto">
                <div class="row gx-2 align-items-center">
                    <div class="col-auto">
                        <button type="button" class="btn btn-dark p-2 small" :class="{ 'disabled opacity-25':data.state != 'paused' || data.machine.getAssignedCount() >= data.machine.count }" style="width:32px; height:32px;" @click="data.count += 1">
                            <i class="fas fa-fw fa-plus small"></i>
                        </button>
                    </div>
                    <div class="col-auto">
                        <button type="button" class="btn btn-dark p-2 small" :class="{ 'disabled opacity-25':data.state != 'paused' || data.count <= 0 }" style="width:32px; height:32px;" @click="data.count -= 1">
                            <i class="fas fa-fw fa-minus small"></i>
                        </button>
                    </div>
                    <div class="col-auto" style="width:65px;">
                        <small class="text-muted">x</small>
                        <FormatNumber :value="data.count" />
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="row gx-2 align-items-center">
                    <div class="col">
                        <div class="card card-body border py-1">
                            <div v-if="data.recipe != null" class="col row gx-1 align-items-center justify-content-end me-2">
                                <div v-if="data.recipe.inputs" v-for="(count, id) in data.getInputs(data.recipe)" class="col-auto"><RecipeItem :id="id" :count="count" :class="{ 'text-danger':count > data.machine.game.getAvailableCount(id) }" /></div>
                                <div v-if="data.recipe.inputs" class="col-auto"><i class="text-muted fas fa-fw fa-long-arrow-alt-right"></i></div>
                                <div v-for="(count, id) in data.getOutputs(data.recipe)" class="col-auto"><RecipeItem :id="id" :count="count" :class="{ 'text-danger':data.machine.game.checkMax(id) == false }" /></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-auto">
                        <div class="text-center small mb-1"><FormatTime :value="data.remainingTime" /></div>
                        <div class="progress" style="height:3px; width:55px;">
                            <div class="progress-bar" role="progressbar" :style="'width:' + percent + '%'" :aria-valuenow="percent" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div class="col-auto">
                        <button v-if="data.state == 'paused'" type="button" class="btn btn-dark p-2 small" :class="{ 'disabled opacity-25':data.canProduce() == false }" style="width:32px; height:32px;" @click="data.startProducing();">
                            <i class="fas fa-fw fa-play small"></i>
                        </button>
                        <button v-if="data.state == 'running'" type="button" class="btn btn-dark p-2 small" style="width:32px; height:32px;" @click="data.pauseProducing();">
                            <i class="fas fa-fw fa-stop small"></i>
                        </button>
                        <button v-if="data.state == 'waiting'" type="button" class="btn btn-dark p-2 small" style="width:32px; height:32px;" @click="data.pauseProducing();">
                            <i class="text-danger fas fa-fw fa-stop small"></i>
                        </button>
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
        
        percent() {
        
            if (this.data.remainingTime > 0) return 100 - 100 * (this.data.remainingTime / this.data.getTime(this.data.recipe))
            else return 0
        },
    },
}
</script>