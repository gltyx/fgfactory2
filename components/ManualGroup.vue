<template>
    <div class="col-auto">
        <button type="button" class="btn btn-dark" @click="click()">
            <div class="row align-items-center">
                <div class="col-auto">
                    <div class="row gx-1 align-items-center">
                        <div v-if="data.recipe.inputs" v-for="(count, id) in data.getInputs(data.recipe)" class="col-auto"><Item :id="id" :count="count" :class="{ 'text-danger':count > data.machine.game.bases[id].count }" /></div>
                        <div v-if="data.recipe.inputs" class="col-auto"><i class="fas fa-fw fa-long-arrow-alt-right"></i></div>
                        <div v-for="(count, id) in data.getOutputs(data.recipe)" class="col-auto"><Item :id="id" :count="count" /></div>
                    </div>
                </div>
                <div class="col-auto">
                    <div class="text-center small mb-1"><FormatTime :value="data.remainingTime" /></div>
                    <div class="progress" style="height:3px; width:55px;">
                        <div class="progress-bar" role="progressbar" :style="'width:' + percent + '%'" :aria-valuenow="percent" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div v-if="data.state == 'paused'" class="col-auto">
                    <i class="fas fa-fw fa-play small"></i>
                </div>
                <div v-if="data.state == 'running'" class="col-auto">
                    <i class="fas fa-fw fa-stop small"></i>
                </div>
                <div v-if="data.state == 'waiting'" class="col-auto">
                    <i class="text-danger fas fa-fw fa-stop small"></i>
                </div>
            </div>
        </button>
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
    
    methods: {
    
        click() {
        
            if (this.data.state == 'paused') this.data.startProducing()
            else if (this.data.state == 'running') this.data.pauseProducing()
            else if (this.data.state == 'waiting') this.data.pauseProducing()
        },
    },
}
</script>