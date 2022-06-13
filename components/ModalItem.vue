<template>
    <div>
        <div class="modal fade show d-block">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header bg-light align-items-center">
                        <div class="col">
                            <div class="row gx-1 align-items-center">
                                <div class="col-auto">
                                    <img :src="require(`~/assets/items/${item.id}.png`)" width="18px" height="18px" :alt="$t('itemName_' + item.id)" />
                                </div>
                                <div class="col">
                                    <span class="modal-title h5">{{ $t('itemName_' + item.id) }}</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-auto">
                            <button type="button" class="btn btn-light border" @click="$parent.modalItem = null;">
                                <span><i class="fas fa-fw fa-times"></i></span>
                            </button>
                        </div>
                    </div>
                    <div class="modal-body">
                    </div>
                </div>
            </div>
        </div>
        <div class="modal-backdrop fade show"></div>
    </div>
</template>

<script>
export default {

    props: [ 'item' ],
}
</script>