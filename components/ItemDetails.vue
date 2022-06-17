<template>
    <div v-if="$parent.currentProductionSelection == id" class="flex-grow-1 scrollbar">
        <div class="card" style="max-height: 100%;">
            <div class="card-header">
                <div class="row align-item-center">
                    <div class="col">
                        <div class="row gx-2 align-item-center">
                            <div class="col-auto">
                                <img :src="require(`~/assets/vignets/${id}.png`)" width="18px" height="18px" :title="$t('name_' + id)" :alt="$t('name_' + id)" />
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
                        <div class="row gx-4 align-items-center mb-2">
                            <div class="col-auto">
                                <div class="subtitle">Count</div>
                                <span><FormatNumber :value="count" /></span>
                            </div>
                            <div class="col">
                                <div class="subtitle">Storage</div>
                                <div class="row align-items-center">
                                    <div class="col-auto">
                                        <span><FormatNumber :value="max" /></span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-auto">
                                <div class="row align-items-center">
                                    <div class="col-auto">
                                        <div class="card card-body py-1 pe-2 ps-1">
                                            <div class="row gx-2 align-items-center">
                                                <div class="col-auto">
                                                    <button type="button" class="btn btn-sm btn-dark p-1">
                                                        <i class="fas fa-fw fa-plus"></i>
                                                    </button>
                                                </div>
                                                <div class="col-auto">
                                                    <img :src="require(`~/assets/vignets/woodChest.png`)" width="18px" height="18px" :title="$t('name_woodChest')" :alt="$t('name_woodChest')" />
                                                </div>
                                                <div class="col-auto">
                                                    <span><small>x</small> 0</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <div class="card card-body py-1 pe-2 ps-1">
                                            <div class="row gx-2 align-items-center">
                                                <div class="col-auto">
                                                    <button type="button" class="btn btn-sm btn-dark p-1">
                                                        <i class="fas fa-fw fa-plus"></i>
                                                    </button>
                                                </div>
                                                <div class="col-auto">
                                                    <img :src="require(`~/assets/vignets/ironChest.png`)" width="18px" height="18px" :title="$t('name_ironChest')" :alt="$t('name_ironChest')" />
                                                </div>
                                                <div class="col-auto">
                                                    <span><small>x</small> 0</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <div class="card card-body py-1 pe-2 ps-1">
                                            <div class="row gx-2 align-items-center">
                                                <div class="col-auto">
                                                    <button type="button" class="btn btn-sm btn-dark p-1">
                                                        <i class="fas fa-fw fa-plus"></i>
                                                    </button>
                                                </div>
                                                <div class="col-auto">
                                                    <img :src="require(`~/assets/vignets/steelChest.png`)" width="18px" height="18px" :title="$t('name_steelChest')" :alt="$t('name_steelChest')" />
                                                </div>
                                                <div class="col-auto">
                                                    <span><small>x</small> 0</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="row align-items-center">
                            <div class="col">
                                <div class="btn-group btn-group-sm" role="group">
                                    <button type="button" class="btn btn-dark py-1 active">1</button>
                                    <button type="button" class="btn btn-dark py-1">10</button>
                                    <button type="button" class="btn btn-dark py-1">100</button>
                                </div>
                            </div>
                            <div class="col-auto">
                                <button type="button" class="btn btn-sm btn-dark py-1">
                                    <i class="fas fa-fw fa-stop"></i>
                                    <span>Stop all</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="row g-2">
                            <div class="col-12">
                                <div class="card card-body py-1 pe-1 ps-2">
                                    <div class="row align-items-center">
                                        <div class="col">
                                            <div class="row gx-2 align-items-center">
                                                <div class="col-auto">
                                                    <button type="button" class="btn btn-sm btn-dark p-1 disabled opacity-25">
                                                        <i class="fas fa-fw fa-plus"></i>
                                                    </button>
                                                </div>
                                                <div class="col-auto">
                                                    <button type="button" class="btn btn-sm btn-dark p-1 disabled opacity-25">
                                                        <i class="fas fa-fw fa-minus"></i>
                                                    </button>
                                                </div>
                                                <div class="col-auto">
                                                    <img :src="require(`~/assets/vignets/manual.png`)" width="18px" height="18px" :title="$t('name_manual')" :alt="$t('name_manual')" />
                                                </div>
                                                <div class="col-auto">
                                                    <span><small>x</small> 1</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-auto">
                                            <RecipeItem id="coal" count="1" />
                                        </div>
                                        <div class="col-auto">
                                            <div class="text-center small mb-1"><FormatTime :value="4" /></div>
                                            <div class="progress" style="height:3px; width:55px;">
                                                <div class="progress-bar" role="progressbar" :style="'width:' + percent + '%'" :aria-valuenow="percent" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                        <div class="col-auto">
                                            <button type="button" class="btn btn-dark p-2 small" style="width:32px; height:32px;">
                                                <i class="fas fa-fw fa-play small"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="card card-body py-1 pe-1 ps-2">
                                    <div class="row align-items-center">
                                        <div class="col">
                                            <div class="row gx-2 align-items-center">
                                                <div class="col-auto">
                                                    <button type="button" class="btn btn-sm btn-dark p-1">
                                                        <i class="fas fa-fw fa-plus"></i>
                                                    </button>
                                                </div>
                                                <div class="col-auto">
                                                    <button type="button" class="btn btn-sm btn-dark p-1">
                                                        <i class="fas fa-fw fa-minus"></i>
                                                    </button>
                                                </div>
                                                <div class="col-auto">
                                                    <img :src="require(`~/assets/vignets/drill1.png`)" width="18px" height="18px" :title="$t('name_drill1')" :alt="$t('name_drill1')" />
                                                </div>
                                                <div class="col-auto">
                                                    <span><small>x</small> 0</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-auto">
                                            <RecipeItem id="coal" count="1" />
                                        </div>
                                        <div class="col-auto">
                                            <div class="text-center small mb-1"><FormatTime :value="4" /></div>
                                            <div class="progress" style="height:3px; width:55px;">
                                                <div class="progress-bar" role="progressbar" :style="'width:' + percent + '%'" :aria-valuenow="percent" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                        <div class="col-auto">
                                            <button type="button" class="btn btn-dark p-2 small" style="width:32px; height:32px;">
                                                <i class="fas fa-fw fa-play small"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="card card-body py-1 pe-1 ps-2">
                                    <div class="row align-items-center">
                                        <div class="col">
                                            <div class="row gx-2 align-items-center">
                                                <div class="col-auto">
                                                    <button type="button" class="btn btn-sm btn-dark p-1">
                                                        <i class="fas fa-fw fa-plus"></i>
                                                    </button>
                                                </div>
                                                <div class="col-auto">
                                                    <button type="button" class="btn btn-sm btn-dark p-1">
                                                        <i class="fas fa-fw fa-minus"></i>
                                                    </button>
                                                </div>
                                                <div class="col-auto">
                                                    <img :src="require(`~/assets/vignets/drill2.png`)" width="18px" height="18px" :title="$t('name_drill2')" :alt="$t('name_drill2')" />
                                                </div>
                                                <div class="col-auto">
                                                    <span><small>x</small> 0</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-auto">
                                            <div class="row gx-2 align-items-center">
                                                <div class="col-auto"><RecipeItem id="electricity" count="180" /></div>
                                                <div class="col-auto"><RecipeItem id="coal" count="1" /></div>
                                            </div>
                                        </div>
                                        <div class="col-auto">
                                            <div class="text-center small mb-1"><FormatTime :value="2" /></div>
                                            <div class="progress" style="height:3px; width:55px;">
                                                <div class="progress-bar" role="progressbar" :style="'width:' + percent + '%'" :aria-valuenow="percent" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                        <div class="col-auto">
                                            <button type="button" class="btn btn-dark p-2 small" style="width:32px; height:32px;">
                                                <i class="fas fa-fw fa-play small"></i>
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
</template>

<script>
export default {

    props: [ 'id', 'game' ],
    
    computed: {
    
        count() { return 0 },
        max() { return 50 },
        percent() { return 0 },
    },
}
</script>