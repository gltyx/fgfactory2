<template>
    <div class="col-auto">
        <button type="button" class="btn btn-light border position-relative p-3 small" :title="$t('itemName_' + machine.id)" @click="$parent.showModalMachine(machine)">
            <img :src="require(`~/assets/items/${machine.id}.png`)" width="24px" height="24px" :alt="$t('itemName_' + machine.id)" />
            <div class="w-100 progress position-absolute start-0 bottom-0" style="height:3px;">
                <div class="progress-bar" role="progressbar" :style="'width:' + percent + '%;'" :aria-valuenow="percent" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div v-if="machine.state == 'paused'" class="position-absolute end-0 top-0 p-1 small" :class="{ 'opacity-25':machine.recipe == null }">
                <span><i class="fas fa-fw fa-play"></i></span>
            </div>
            <div v-if="machine.state == 'running'" class="position-absolute end-0 top-0 p-1 small">
                <span><i class="fas fa-fw fa-stop"></i></span>
            </div>
            <div v-if="machine.state == 'waiting'" class="position-absolute end-0 top-0 p-1 small">
                <span class="text-danger"><i class="fas fa-fw fa-exclamation-triangle"></i></span>
            </div>
        </button>
    </div>
</template>

<script>
export default {

    props: [ 'machine' ],
    
    computed: {
    
        percent() {
            
            if (this.machine.remainingSeconds > 0) return 100 - 100 * (this.machine.remainingSeconds / this.machine.getTime(this.machine.recipe))
            else return 0
        },
    },
}
</script>