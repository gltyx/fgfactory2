<template>
    <div class="col-auto">
        <div class="position-relative card card-body">
            <img :src="require(`~/assets/items/${data.id}.png`)" width="24px" height="24px" :title="$t('itemName_' + data.id)" :alt="$t('itemName_' + data.id)" />
            <div class="position-absolute end-0 bottom-0 small pe-1">
                <FormatNumber class="text-shadow" :value="data.count" />
            </div>
        </div>
    </div>
</template>

<script>
export default {

    props: [ 'data' ],
}
</script>