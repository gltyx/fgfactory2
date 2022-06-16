<template>
    <div v-if="data.isUnlocked() == true" class="col-auto nav-item">
        <button type="button" class="position-relative nav-link btn-dark" :class="{ 'active':$parent.currentMachineSubTabId == data.id }" @click="$parent.setCurrentMachineSubtabId(data.id)">
            <img :src="require(`~/assets/vignets/${data.id}.png`)" width="24px" height="24px" :title="$t('name_' + data.id)" :alt="$t('name_' + data.id)" />
            <div v-if="available > 0" class="position-absolute end-0 bottom-0 small pe-1">
                <span class="text-shadow fw-bold"><FormatNumber :value="available" /></span>                
            </div>
        </button>
    </div>
</template>

<script>
export default {

    props: [ 'data' ],
    
    computed: {
    
        available() {
            
            if (this.data.id == 'lab') return 0
            return this.data.count - this.data.getAssignedCount()
        },
    },
}
</script>