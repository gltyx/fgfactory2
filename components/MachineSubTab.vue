<template>
    <div class="nav-item me-2">
        <button type="button" class="nav-link btn-dark" :class="{ 'active':$parent.currentMachineSubTabId == data.id }" @click="$parent.setCurrentMachineSubtabId(data.id)">
            <img :src="require(`~/assets/vignets/${data.id}.png`)" width="24px" height="24px" :title="$t('name_' + data.id)" :alt="$t('name_' + data.id)" />
        </button>
    </div>
</template>

<script>
export default {

    props: [ 'data' ],
}
</script>