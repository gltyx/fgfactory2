<template>
    <div class="nav-item">
        <button type="button" class="nav-link btn-dark" :class="{ 'active':$parent.currentMachineSubTabId == data.id }" @click="$parent.setCurrentMachineSubtabId(data.id)">
            <img :src="require(`~/assets/machines/${data.id}.png`)" width="24px" height="24px" :title="$t('machineName_' + data.id)" :alt="$t('machineName_' + data.id)" />
        </button>
    </div>
</template>

<script>
export default {

    props: [ 'data' ],
}
</script>