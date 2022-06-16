<template>
    <div v-if="$parent.currentMachineSubTabId == 'manual'" class="flex-grow-1 scrollbar">
        <div class="card" style="max-height: 100%;">
            <div class="card-header">
                <div class="row align-item-center">
                    <div class="col">
                        <div class="row gx-2 align-item-center">
                            <div class="col-auto">
                                <img :src="require(`~/assets/vignets/manual.png`)" width="18px" height="18px" :title="$t('name_manual')" :alt="$t('name_manual')" />
                            </div>
                            <div class="col-auto">
                                <span class="fw-bold">{{ $t('name_manual') }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-body scrollbar">
                <div class="row g-2 align-items-center">
                    <div class="col-12"><div class="subtitle">Extracted</div></div>
                    <div class="col-6"><ManualGroup :data="data.groups[0]" /></div>
                    <div class="col-6"><ManualGroup :data="data.groups[1]" /></div>
                    <div class="col-6"><ManualGroup :data="data.groups[2]" /></div>
                    <div class="col-6"><ManualGroup :data="data.groups[3]" /></div>
                    <div class="col-6"><ManualGroup :data="data.groups[4]" /></div>
                </div>
                <div class="row g-2 align-items-center">
                    <div class="col-12 pt-3"><div class="subtitle">Fabricated</div></div>
                    <div class="col-6"><ManualGroup :data="data.groups[5]" /></div>
                    <div class="col-6"><ManualGroup :data="data.groups[6]" /></div>
                    <div class="col-6"><ManualGroup :data="data.groups[7]" /></div>
                    <div class="col-6"><ManualGroup :data="data.groups[8]" /></div>
                </div>
                <div class="row g-2 align-items-center">
                    <div class="col-12 pt-3"><div class="subtitle">Machines</div></div>
                    <div class="col-6"><ManualGroup :data="data.groups[9]" /></div>
                    <div class="col-6"><ManualGroup :data="data.groups[10]" /></div>
                    <div class="col-6"><ManualGroup :data="data.groups[11]" /></div>
                    <div class="col-6"><ManualGroup :data="data.groups[12]" /></div>
                    <div class="col-6"><ManualGroup :data="data.groups[13]" /></div>
                    <div class="col-6"><ManualGroup :data="data.groups[14]" /></div>
                </div>
                <div class="row g-2 align-items-center">
                    <div class="col-12 pt-3"><div class="subtitle">Science</div></div>
                    <div class="col-6"><ManualGroup :data="data.groups[15]" /></div>
                    <div class="col-6"><ManualGroup :data="data.groups[16]" /></div>
                </div>
                <div class="row g-2 align-items-center">
                    <div class="col-12 pt-3"><div class="subtitle">Storages</div></div>
                    <div class="col-6"><ManualGroup :data="data.groups[17]" /></div>
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