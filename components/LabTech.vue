<template>
    <div v-if="data.isUnlocked() == true && data.isDone() == false" class="card card-body p-1">
        <div class="row align-items-center">
            <div class="col">
                <div class="row gx-2 align-items-center">
                    <div class="col-auto">
                        <img :src="require(`~/assets/vignets/${data.id}.png`)" width="18px" height="18px" :title="$t('name_' + data.id)" :alt="$t('name_' + data.id)" />
                    </div>
                    <div class="col">
                        <span>{{ $t('name_' + data.id) }}</span>
                    </div>
                </div>
            </div>
            <div class="col-auto">
                <div class="row gx-2 align-items-center">
                    <div class="col row gx-1 align-items-center justify-content-end me-2">
                        <div v-for="(count, id) in data.lab.getInputs(data)" class="col-auto"><RecipeItem :id="id" :count="count" :class="{ 'text-danger':count > data.lab.game.getAvailableCount(id) }" /></div>
                    </div>
                    <div class="col-auto">
                        <div v-if="data.lab.state == 'paused'" class="text-center small mb-1"><FormatTime :value="data.time" /></div>
                        <div v-if="data.lab.state != 'paused'" class="text-center small mb-1"><FormatTime :value="data.lab.remainingTime" /></div>
                        <div class="progress" style="height:3px; width:55px;">
                            <div class="progress-bar" role="progressbar" :style="'width:' + percent + '%'" :aria-valuenow="percent" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div class="col-auto">
                        <small class="text-muted">x</small>
                        <span><FormatNumber :value="data.cycleCount" /></span>
                    </div>
                    <div class="col-auto">
                        <button v-if="data.lab.state == 'paused'" type="button" class="btn btn-dark p-2 small" :class="{ 'disabled opacity-25':data.lab.canResearch(data) == false }" style="width:32px; height:32px;" @click="data.lab.assignTech(data); data.lab.startResearching();">
                            <i class="fas fa-fw fa-play small"></i>
                        </button>
                        <button v-if="data.lab.state == 'running'" type="button" class="btn btn-dark p-2 small" style="width:32px; height:32px;" @click="data.lab.pauseResearching();">
                            <i class="fas fa-fw fa-stop small"></i>
                        </button>
                        <button v-if="data.lab.state == 'waiting'" type="button" class="btn btn-dark p-2 small" style="width:32px; height:32px;" @click="data.lab.pauseResearching();">
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
        
            if (this.data.lab.remainingTime > 0) return 100 - 100 * (this.data.lab.remainingTime / this.data.lab.getTime(this.data))
            else return 0
        },
    },
}
</script>