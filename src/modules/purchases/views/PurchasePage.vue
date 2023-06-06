<template>
    <div>
        <SearchBar></SearchBar>
        <div v-for="(supplierList, index) in supplierLists" :key="index" class=" border-top w-100">
            <RouterLink :to="'/purchase-invoice/' + supplierList.id" class="text-decoration-none">
            <!-- <RouterLink :to="{ name: purchaseInvoice, params: { supplierListId: index } }" class="text-decoration-none"> -->
                <div class="d-flex justify-content-between container">
                    <div class="d-flex my-2">
                        <div class="border border-2 border-dark rounded-circle">
                            <img :src="`${publicPath}${supplierList.imgDp}`"
                                style="width: 60px; height: 60px; border-radius: 50px;">
                        </div>
                        <div class="d-flex align-items-center text-dark ">
                            <p class=" m-0 ps-2 fs-5">{{ supplierList.name }}</p>
                        </div>
                    </div>
                    <div class="d-flex align-items-center ">
                        <p class="badge bg-secondary">4</p>
                    </div>
                </div>
            </RouterLink>
        </div>
        <BottomNav></BottomNav>
    </div>
</template>

<script>
import SearchBar from '@/components/comman/SearchBar.vue';
import { imagePath } from '@/mixins/imagePath';
import BottomNav from '@/components/comman/BottomNav.vue';

export default {
    mixins: [imagePath],
    components: { SearchBar, BottomNav },
    computed: {
        supplierLists() {
            return this.$store.getters['purchases/getSupplierLists'];
        }
    },
}
</script>

<style lang="scss" scoped></style>