<template>
    <div v-if="$parent.currentMachineSubTabId == data.id" class="col-12">
        <div class="card">
            <div class="card-header">
                <div class="row align-item-center">
                    <div class="col">
                        <div class="row gx-2 align-item-center">
                            <div class="col-auto">
                                <img :src="require(`~/assets/machines/${data.id}.png`)" width="18px" height="18px" :title="$t('machineName_' + data.id)" :alt="$t('machineName_' + data.id)" />
                            </div>
                            <div class="col-auto">
                                <span class="fw-bold">{{ $t('machineName_' + data.id) }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <div class="row gx-4 align-item-center mb-3">
                    <div class="col-auto">
                        <div class="small text-muted mb-1">Total Count</div>
                        <span style="line-height:24px;"><FormatNumber :value="data.getCount()" /></span>
                    </div>
                    <div class="col-auto">
                        <div class="small text-muted mb-1">Assigned</div>
                        <span style="line-height:24px;"><FormatNumber :value="data.getAssignedCount()" /></span>
                    </div>
                    <div class="col-auto">
                        <div class="small text-muted mb-1">Energy Consumed</div>
                        <div class="row gx-2 align-items-center">
                            <div class="col-auto">
                                <img :src="require(`~/assets/items/${data.energy.id}.png`)" width="18px" height="18px" :title="$t('itemName_' + data.energy.id)" :alt="$t('itemName_' + data.energy.id)" />
                            </div>
                            <div class="col-auto" style="line-height:24px;">
                                <span><FormatNumber :value="data.getEnergyConsumed()" /></span>
                                <small class="text-muted">/s</small>
                            </div>
                        </div>
                    </div>
                </div>
                <MachineGroup v-for="(group, index) in data.groups" :key="index" :data="group" />
                <div class="pt-3 border-top">
                    <button type="button" class="btn btn-sm btn-dark" @click="data.createGroup()">
                        <i class="fas fa-fw fa-plus-circle"></i>
                        <span>Create a new group</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    props: [ 'data' ],
}
</script>