<template>
    <div>
        <StoreManagerLayout></StoreManagerLayout>
        <div v-for="(storegdn, index) in storegdns" :key="index" class="container d-flex justify-content-between border py-2">
            <div class="d-flex">
                <img :src="`${publicPath}${storegdn.img}`" width="60" class="rounded-circle border" alt="">
                <div class="ms-2">
                    <div class="fw-bold">SO-{{ storegdn.so }}</div>
                    <div style="font-size: 12px;">Bundles: {{ storegdn.bundle }} | Qty: {{ storegdn.qty }} mtr</div>
                </div>
            </div>
            <div class="">
                <button :class="storegdn.color">{{storegdn.btn}}</button>
            </div>
        </div>
    </div>
</template>

<script> 
import { imagePath } from '@/mixins/imagePath';
import StoreManagerLayout from '../Layouts/StoreManagerLayout.vue';
 
export default {
    components: { StoreManagerLayout   },
    mixins: [imagePath],
    computed: {
        storegdns() {
            return this.$store.getters['storeManager/getStoregdn']
        }
    }
}
</script>

<style lang="scss" scoped></style>