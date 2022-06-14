<template>
    <div class="py-3 border-top">
        <div class="row align-items-center">
            <div class="col-auto">
                <div class="row gx-2 align-items-center">
                    <div class="col-auto">
                        <button type="button" class="btn p-2 small" style="width:32px; height:32px;" @click="data.machine.deleteGroup(index)">
                            <i class="fas fa-fw fa-trash small"></i>
                        </button>
                    </div>
                    <div class="col-auto">
                        <button type="button" class="btn btn-dark p-2 small" :class="{ 'disabled opacity-25':data.machine.getAssignedCount() >= data.machine.count }" style="width:32px; height:32px;" @click="data.count += 1">
                            <i class="fas fa-fw fa-plus small"></i>
                        </button>
                    </div>
                    <div class="col-auto">
                        <button type="button" class="btn btn-dark p-2 small" :class="{ 'disabled opacity-25':data.count <= 0 }" style="width:32px; height:32px;" @click="data.count -= 1">
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
                        <div class="dropdown">
                            <button type="button" class="w-100 btn btn-dark py-1 px-2 d-flex align-items-center dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                <div v-if="data.recipe == null" class="col row align-items-center me-2">
                                    <div class="col-auto"><div class="small" style="line-height:24px;">Empty</div></div>
                                </div>
                                <div v-if="data.recipe != null" class="col row gx-1 align-items-center me-2">
                                    <div v-if="data.recipe.inputs" v-for="(count, id) in data.getInputs(data.recipe)" class="col-auto"><Item :id="id" :count="count" :class="{ 'text-danger':count > data.machine.game.bases[id].count }" /></div>
                                    <div class="col-auto"><i class="fas fa-fw fa-long-arrow-alt-right"></i></div>
                                    <div v-for="(count, id) in data.getOutputs(data.recipe)" class="col-auto"><Item :id="id" :count="count" /></div>
                                </div>
                            </button>
                            <div class="w-100 dropdown-menu">
                                <button v-for="recipe in data.machine.availableRecipes" type="button" class="dropdown-item py-1 px-2" @click="data.assignRecipe(recipe)">
                                    <div class="row gx-1 align-items-center">
                                        <div v-if="recipe.inputs" v-for="(count, id) in data.getInputs(recipe)" class="col-auto"><Item :id="id" :count="count" /></div>
                                        <div class="col-auto"><i class="fas fa-fw fa-long-arrow-alt-right"></i></div>
                                        <div v-for="(count, id) in data.getOutputs(recipe)" class="col-auto"><Item :id="id" :count="count" /></div>
                                        <div class="col text-end small"><FormatTime :value="data.getTime(recipe)" /></div>
                                    </div>
                                </button>
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

    props: [ 'data', 'index' ],
    
    computed: {
        
        percent() {
        
            if (this.data.remainingTime > 0) return 100 - 100 * (this.data.remainingTime / this.data.getTime(this.data.recipe))
            else return 0
        },
    },
}
</script>