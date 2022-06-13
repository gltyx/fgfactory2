<template>
    <div class="row align-items-center" style="line-height:29px;">
        <div class="col">
            <div class="row gx-2 align-items-center">
                <div class="col-auto">
                    <img :src="require(`~/assets/items/${energy.id}.png`)" width="18px" height="18px" :alt="$t('itemName_' + energy.id)" />
                </div>
                <div class="col-auto">
                    <span>{{ $t('itemName_' + energy.id) }}</span>
                </div>
            </div>
        </div>
        <div class="col-auto">
            <span><FormatNumber :value="energy.count" /></span>
            <small class="text-muted">/s</small>
        </div>
    </div>
</template>

<script>
export default {

    props: [ 'machine', 'energy' ],    
}
</script>