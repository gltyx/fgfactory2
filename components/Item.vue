<template>
    <div class="position-relative p-1 d-flex">
        <img :src="require(`~/assets/items/${id}.png`)" width="18px" height="18px" :title="$t('itemName_' + id)" :alt="$t('itemName_' + id)" />
        <div class="position-absolute end-0 bottom-0 small">
            <FormatNumber class="text-shadow" :value="count" />
        </div>
    </div>
</template>

<script>
export default {

    props: [ 'id', 'count' ],
}
</script>