<template>
    <div v-if="$parent.currentMachineSubTabId == 'manual'" class="col-12">
        <div class="card">
            <div class="card-header">
                <div class="row align-item-center">
                    <div class="col">
                        <div class="row gx-2 align-item-center">
                            <div class="col-auto">
                                <img :src="require(`~/assets/machines/manual.png`)" width="18px" height="18px" :title="$t('machineName_manual')" :alt="$t('machineName_manual')" />
                            </div>
                            <div class="col-auto">
                                <span class="fw-bold">{{ $t('machineName_manual') }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <div class="row gy-2 align-items-center">
                    <ManualGroup v-for="(group, index) in data.groups" :key="index" :data="group" />
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