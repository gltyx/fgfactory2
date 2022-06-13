<template>
    <div class="col-auto">
        <button type="button" class="btn btn-light border position-relative p-3" :title="$t('itemName_' + item.id)" @click="$parent.showModalItem(item)">
            <img :src="require(`~/assets/items/${item.id}.png`)" width="24px" height="24px" :alt="$t('itemName_' + item.id)" />
            <span class="position-absolute bottom-0 end-0 fw-bold p-1 text-shadow text-white small"><FormatNumber :value="item.count" /></span>
        </button>
    </div>
</template>

<script>
export default {

    props: [ 'item' ],
}
</script>