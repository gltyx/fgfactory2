<template>
    <div class="col-auto">
        <div class="position-relative p-2 small" :title="$t('itemName_' + id)" >
            <img :src="require(`~/assets/items/${id}.png`)" width="18px" height="18px" :alt="$t('itemName_' + id)" />
            <span class="position-absolute bottom-0 end-0 fw-bold text-shadow"><FormatNumber :value="count" /></span>
        </div>
    </div>
</template>

<script>
export default {

    props: [ 'id', 'count' ],    
}
</script>