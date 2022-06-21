<template>
    <div v-if="unlocked" class="col-auto">
        <button type="button" class="position-relative btn btn-dark" :class="{ 'active border-primary':$parent.$parent.currentResearchSelection == id, 'disabled':done }" style="width:60px" @click="$parent.$parent.setCurrentResearchSelection(id)">
            <img :src="require(`~/assets/techs/${id}.png`)" width="24px" height="24px" :title="$t('name_' + id)" :alt="$t('name_' + id)" />
            <div v-if="done" class="position-absolute end-0 bottom-0 small pe-1">
                <span class="text-shadow fw-bold text-success"><i class="fas fa-fw fa-check"></i></span>                
            </div>
        </button>
    </div>
</template>

<script>
export default {

    props: [ 'id', 'game' ],
    
    computed: {
        
        unlocked() {
        
            let item = this.game.bases[this.id]
            if (item) return item.isUnlocked()
        },
        
        done() {
            
            let item = this.game.bases[this.id]
            if (item) return item.isDone()
        },
    },
}
</script>