<template>
    <div>
        <StoreManagerLayout></StoreManagerLayout>
        <div v-for="(storegrn , index) in storegrns" :key="index" class="container d-flex border py-2">
            <div class="">
                <img :src="`${publicPath}${storegrn.img}`" width="60" class="rounded-circle border" alt="">
            </div>
            <div class="ms-2">
                <div class="fw-bold">PO-{{storegrn.po}}</div>
                <div style="font-size: 12px;" class="text-success">Bundles: {{storegrn.bundle}} | Qty: {{storegrn.qty}} mtr</div>
            </div>
        </div>
    </div>
</template>

<script>
import { imagePath } from '@/mixins/imagePath';
import StoreManagerLayout from '../Layouts/StoreManagerLayout.vue';

export default {
    name: "NewPage",
    components: { StoreManagerLayout },
    mixins: [ imagePath ],
    computed: {
        storegrns(){
            return this.$store.getters['storeManager/getStoregrn']
        }
    }
}
</script>

<style lang="scss" scoped></style>