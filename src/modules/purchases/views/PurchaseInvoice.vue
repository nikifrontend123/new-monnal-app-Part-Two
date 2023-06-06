<template>
    <div>
        <div class="" v-for="(supplierList, index) in supplierList" :key="index">
            <p>{{ supplierList.name }}</p>
        </div>
        <ManagerAppLayout></ManagerAppLayout>
        <div v-for="(invoice, index) in invoices" :key="index" class=" border-top w-100">
            <!-- <RouterLink :to="'/purchase-invoice/' + supplierList.id" class="text-decoration-none"> -->
                <div class="d-flex justify-content-between container">
                    <div class="d-flex my-2">
                        <div class="d-flex justify-content-center align-items-center border border-2 border-dark rounded-circle" style="width: 60px; height: 60px;">
                            <p class="text-center m-0" >{{ invoice.date }}</p>
                        </div>
                        <div class="">
                            <p class="m-0 ps-2 fs-5 fw-bold">{{ invoice.process }}</p>
                            <p class="m-0 ps-2">Invoice: {{ invoice.invoice }}</p>
                        </div>
                    </div>
                    <div class="d-flex align-items-start ">
                        <p class="m-0 fw-bold" :class="invoice.txtcolor">{{invoice.text}}</p>
                    </div>
                </div>
            <!-- </RouterLink> -->
        </div>
    </div>
</template>

<script>
 import ManagerAppLayout from '../layouts/ManagerAppLayout.vue';

export default {
    computed: {
        supplierLists() {
            // return this.$store.getters['purchases/getSupplierLists'](this.$route.params.supplierListId);
            return this.$store.getters["purchases/getSupplierLists"];
        },
        invoices() {
            return this.$store.getters["purchases/getInvoices"];
        },
    },
    components: {  ManagerAppLayout }
}
</script>

<style lang="scss" scoped></style>