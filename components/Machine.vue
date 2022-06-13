<template>
    <div class="col-3">
        <div class="card card-body">
            <div class="row align-item-center">
                <div class="col">
                    <div class="row gx-2 align-item-center">
                        <div class="col-auto">
                            <img :src="require(`~/assets/machines/${id}.png`)" width="24px" height="24px" :title="$t('machineName_' + id)" :alt="$t('machineName_' + id)" />
                        </div>
                    </div>
                </div>
                <div class="col-auto">
                    <span><FormatNumber :value="assignedCount" /></span>
                    <span class="text-muted">/<FormatNumber :value="totalCount" /></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    props: [ 'id', 'totalCount', 'assignedCount' ],
}
</script>