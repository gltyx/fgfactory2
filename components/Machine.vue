<template>
    <div v-if="$parent.currentMachineSubTabId == data.id" class="col-12">
        <div class="card">
            <div class="card-header">
                <div class="row align-item-center">
                    <div class="col">
                        <div class="row gx-2 align-item-center">
                            <div class="col-auto">
                                <img :src="require(`~/assets/vignets/${data.id}.png`)" width="18px" height="18px" :title="$t('name_' + data.id)" :alt="$t('name_' + data.id)" />
                            </div>
                            <div class="col-auto">
                                <span class="fw-bold">{{ $t('name_' + data.id) }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <div class="row gx-4 align-item-center mb-2">
                    <div class="col-auto">
                        <div class="small fw-bold text-muted mb-1">Total</div>
                        <span style="line-height:24px;"><FormatNumber :value="data.getCount()" /></span>
                    </div>
                    <div class="col-auto">
                        <div class="small fw-bold text-muted mb-1">Assigned</div>
                        <span style="line-height:24px;"><FormatNumber :value="data.getAssignedCount()" /></span>
                    </div>
                    <div v-if="data.energy" class="col-auto">
                        <div class="small fw-bold text-muted mb-1">Energy</div>
                        <div class="row gx-2 align-items-center">
                            <div class="col-auto">
                                <img :src="require(`~/assets/vignets/${data.energy.id}.png`)" width="18px" height="18px" :title="$t('name_' + data.energy.id)" :alt="$t('name_' + data.energy.id)" />
                            </div>
                            <div class="col-auto" style="line-height:24px;">
                                <span :class="{ 'text-normal':data.getEnergyConsumed() == 0, 'text-danger':data.getEnergyConsumed() < 0 }"><span v-if="data.getEnergyConsumed() < 0">-</span><FormatNumber :value="data.getEnergyConsumed()" /> <small>/s</small></span>                                
                            </div>
                        </div>
                    </div>
                </div>
                <MachineGroup v-for="(group, index) in data.groups" :key="index" :data="group" />
            </div>
        </div>
    </div>
</template>

<script>
export default {

    props: [ 'data' ],
}
</script>