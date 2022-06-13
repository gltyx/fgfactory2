<template>
    <div class="col-auto nav-item">
        <button type="button" class="w-100 nav-link" :class="{ 'active':$parent.currentTabId == tabId }" @click="$parent.setCurrentTabId(tabId)">
            <div class="row gx-2 align-items-center">
                <span class="col-auto"><i :class="'fas fa-fw ' + icon"></i></span>
                <span class="col-auto">{{ $t('menuTab_' + tabId) }}</span>
            </div>
        </button>
    </div>
</template>

<script>
export default {

    props: [ 'tabId', 'icon' ],
}
</script>