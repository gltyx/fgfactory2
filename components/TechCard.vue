<template>
    <div v-if="$parent.currentResearchSelection == id && done == false" class="flex-grow-1 scrollbar">
        <div class="card" style="max-height: 100%;">
            <div class="card-header">
                <div class="row align-item-center">
                    <div class="col">
                        <div class="row gx-2 align-item-center">
                            <div class="col-auto">
                                <img :src="require(`~/assets/techs/${id}.png`)" width="18px" height="18px" :title="$t('name_' + id)" :alt="$t('name_' + id)" />
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
                        <div class="subtitle">Research</div>
                        <div class="card card-body py-1 pe-1 ps-2">
                            <div class="row align-items-center">
                                <div class="col">
                                    <div class="row gx-2 align-items-center">
                                        <div class="col-auto">
                                            <button type="button" class="btn btn-sm btn-dark p-1" :class="{ 'disabled opacity-25':labAvailableCount < 1 }" @click="assign();">
                                                <i class="fas fa-fw fa-plus"></i>
                                            </button>
                                        </div>
                                        <div class="col-auto">
                                            <button type="button" class="btn btn-sm btn-dark p-1" :class="{ 'disabled opacity-25':research.count < 1 }" @click="unassign();">
                                                <i class="fas fa-fw fa-minus"></i>
                                            </button>
                                        </div>
                                        <div class="col-auto">
                                            <img :src="require(`~/assets/items/lab.png`)" width="18px" height="18px" :title="$t('name_lab')" :alt="$t('name_lab')" />
                                        </div>
                                        <div class="col-auto">
                                            <span :class="{ 'text-muted opacity-25':research.count < 1 }"><small>x</small> <FormatNumber :value="research.count" /></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <div class="row gx-2 align-items-center">
                                        <div class="col-auto"><RecipeOutput :id="'electricity'" :count="elecConsum" :game="game" /></div>
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <div class="row gx-2 align-items-center">
                                        <div v-for="(count, id) in costs" :key="id" class="col-auto"><RecipeInput :id="id" :count="count" :game="game" /></div>
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <small>x</small>
                                    <span>{{ cycleCount }}</span>
                                </div>
                                <div class="col-auto">
                                    <div class="text-center small mb-1"><FormatTime :value="time" /></div>
                                    <div class="progress" style="height:3px; width:55px;">
                                        <div class="progress-bar" role="progressbar" :style="'width:' + percent + '%'" :aria-valuenow="percent" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <button v-if="research.state == 'paused'" type="button" class="btn btn-dark p-2 small" :class="{ 'disabled opacity-25':research.count < 1 }" style="width:32px; height:32px;" @click="research.startResearching();">
                                        <i class="fas fa-fw fa-play small"></i>
                                    </button>
                                    <button v-if="research.state == 'running'" type="button" class="btn btn-dark p-2 small" style="width:32px; height:32px;" @click="research.pauseResearching();">
                                        <i class="fas fa-fw fa-stop small"></i>
                                    </button>
                                    <button v-if="research.state == 'waiting'" type="button" class="btn btn-dark p-2 small" style="width:32px; height:32px;" @click="research.pauseResearching();">
                                        <i class="text-danger fas fa-fw fa-stop small"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-if="allows.length > 0" class="col-6">
                        <div class="subtitle">Allows</div>
                        <div class="row g-2">
                            <div v-for="(techId, index) in allows" class="col-auto">
                                <div class="card card-body p-2">
                                    <img :src="require(`~/assets/techs/${techId}.png`)" width="24px" height="24px" :title="$t('name_' + techId)" :alt="$t('name_' + techId)" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-if="effects.length > 0" class="col-6">
                        <div class="subtitle">Effects</div>
                        <div class="row g-2">
                            <div v-for="(itemId, index) in effects" class="col-auto">
                                <div class="card card-body p-2">
                                    <img :src="require(`~/assets/items/${itemId}.png`)" width="24px" height="24px" :title="$t('name_' + itemId)" :alt="$t('name_' + itemId)" />
                                </div>
                            </div>
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
        
        research() { return this.game.bases[this.id] },
        
        elecConsum() { return this.research.getElecConsum() },
        
        labAvailableCount() { return this.game.bases['lab'].getAvailableCount() },
        
        done() { return this.research.isDone() },
        
        costs() { return this.research.getCosts() },
        
        cycleCount() { return this.research.cycleCount },
        
        time() { return this.research.remainingTime },
        
        percent() {
        
            if (this.research.remainingTime > 0) return 100 - 100 * (this.research.remainingTime / this.research.getTime())
            else return 0
        },
        
        allows() {
        
            let ret = []
            for (let id in this.game.bases) {
                let base = this.game.bases[id]
                if (base.type == 'research' && base.reqs && base.reqs.includes(this.research.id)) {
                    ret.push(base.id)
                }
            }
            
            return ret
        },
        
        effects() {
        
            let ret = []
            for (let id in this.game.bases) {
                let base = this.game.bases[id]
                if (base.type != 'research' && base.type != 'production' && base.reqs && base.reqs.includes(this.research.id)) {
                    ret.push(base.id)
                }
            }
            
            return ret
        },
    },
    
    methods: {
    
        assign() {
            
            if (this.labAvailableCount >= 1) {
                this.research.count += 1
            }
        },
        
        unassign() {
            
            if (this.research.count >= 1) {
                this.research.count -= 1
            }
        },
    },
}
</script>