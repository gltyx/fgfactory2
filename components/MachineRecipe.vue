<template>
    <div class="row gx-1 align-items-center">
        <div class="col-auto">
            <div class="row gx-1 align-items-center">
                <div class="col-auto">
                    <div class="row gx-1 align-items-center">
                        <Item id="time" :count="machine.getTime(recipe)" class="text-white" />
                    </div>
                </div>
                <div v-if="inputs" class="col-auto">
                    <div class="row gx-1 align-items-center">
                        <Item v-for="(count, id) in inputs" :key="id" :id="id" :count="count" :class="{ 'text-white':count <= machine.game.items[id].count, 'text-danger':count > machine.game.items[id].count }" />
                    </div>
                </div>
            </div>
        </div>
        <div class="col-auto">
            <i class="text-muted fas fa-fw fa-long-arrow-alt-right"></i>
        </div>
        <div class="col-auto">
            <div class="row gx-1 align-items-center">
                <Item v-for="(count, id) in outputs" :key="id" :id="id" :count="count" class="text-white" />
            </div>
        </div>
    </div>
</template>

<script>
export default {

    props: [ 'machine', 'recipe' ],
    
    computed: {
    
        inputs() { return this.machine.getInputs(this.recipe) },
        
        outputs() { return this.machine.getOutputs(this.recipe) },
    },
}
</script>