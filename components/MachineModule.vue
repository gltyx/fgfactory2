<template>
    <div class="row align-items-center" style="line-height:29px;">
        <div class="col">
            <div class="row gx-2 align-items-center">
                <div class="col-auto">
                    <img :src="require(`~/assets/items/${module}.png`)" width="18px" height="18px" :alt="$t('itemName_' + module)" />
                </div>
                <div class="col-auto">
                    <span>{{ $t('itemName_' + module) }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    props: [ 'module' ],    
}
</script>