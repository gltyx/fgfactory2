<template>
    <div class="col-12">
        <div class="rounded border px-3 py-2">
            <div class="row align-items-center">
                <div class="col-auto">
                    <div class="row gx-2 align-items-center">
                        <div class="col-auto">
                            <img :src="require(`~/assets/items/lab.png`)" width="18px" height="18px" :alt="$t('itemName_lab')" />
                        </div>
                        <div class="col-auto">
                            <span>{{ $t('itemName_lab') }}</span>
                        </div>
                    </div>
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