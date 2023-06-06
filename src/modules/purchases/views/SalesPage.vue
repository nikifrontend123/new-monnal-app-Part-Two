<template>
    <div>
        <ManagerAppLayout></ManagerAppLayout>
        <div class="list-group" v-for="(sale, index) in sales" :key="index" @click="showSale(sale)">
            <div class="d-flex justify-content-between container py-2 list-group-item">
                <div class="d-flex">
                    <img :src="`${publicPath}${sale.img}`" class="border border2 border-dark"
                        style="width: 60px; height: 60px; border-radius: 50%;">
                    <div class="ms-2">
                        <p class="m-0 fw-bold">{{ sale.name }}</p>
                        <p class="m-0 fw-bold">OID: {{ sale.oid }}</p>
                    </div>
                </div>
                <div class="d-flex align-items-center">
                    <p class="m-0 btn btn-primary rounded-circle">5</p>
                </div>
            </div>
        </div>


        <div v-if="Object.keys(activeSale).length !== 0">
            <div class="offcanvas offcanvas-end show" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop"
                aria-labelledby="staticBackdropLabel">
                <div class="d-flex justify-content-center align-items-center">
                    <div class=" w-100 d-flex justify-content-center align-items-center">
                        <img :src="`${publicPath}${activeSale.img}`" class="border border2 border-dark"
                            style="width: 40px; height: 40px; border-radius: 50%;">
                        <p class="fw-bold text-center m-0 ms-3">{{ activeSale.name }}</p>
                    </div>
                    <div class="d-flex justify-content-end w-100">
                        <button type="button" class="btn" @click="hideSale()"><i class="bi bi-x fs-3"></i></button>
                    </div>
                </div>
                <div class="offcanvas-body">
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Sales Tracking Details
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <StageStepper :stage="2"></StageStepper>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Payment Tracking Details
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <StageStepper :stage="2"></StageStepper>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Invoice Details
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <div class="form container">
                                        <table class="table w-100">
                                            <tbody class="">
                                                <tr>
                                                    <th scope="row">Date</th>
                                                    <td>
                                                        <input v-model="activeSale.date" @input="updateStore" type="text" class="form-control" id="staticEmail" >
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Invoice No.</th>
                                                    <td>
                                                        <input v-model="activeSale.invoice" @input="updateStore" type="text" class="form-control" id="staticEmail" >
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Purchase Amt</th>
                                                    <td>
                                                        <input v-model="activeSale.amt" @input="updateStore" type="text" class="form-control" id="staticEmail" >
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Total Amt</th>
                                                    <td>
                                                        <input v-model="activeSale.totalamt" @input="updateStore" type="text" class="form-control" id="staticEmail" >
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">invoice</th>
                                                    <td>
                                                        <input type="file" class="form-control-plaintext" id="staticEmail">
                                                    </td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    Shipment Details
                                </button>
                            </h2>
                            <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <div class="form container">
                                        <table class="table w-100">
                                            <tbody class="">
                                                <tr>
                                                    <th scope="row">Packaging type</th>
                                                    <td>
                                                        <input v-model="activeSale.PackagingType" @input="updateStore" type="text" class="form-control" id="staticEmail" >
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">No. of Packages</th>
                                                    <td>
                                                        <input v-model="activeSale.package" @input="updateStore" type="text" class="form-control" id="staticEmail" >
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Weight in Kgs.</th>
                                                    <td>
                                                        <input v-model="activeSale.weight" @input="updateStore" type="text" class="form-control" id="staticEmail" >
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Bilty</th>
                                                    <td>
                                                        <input type="file" class="form-control-plaintext" id="staticEmail">
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <BottomNav></BottomNav>
    </div>
</template>

<script>
import BottomNav from '@/components/comman/BottomNav.vue';
import ManagerAppLayout from '../layouts/ManagerAppLayout.vue';
import { imagePath } from '@/mixins/imagePath';
import StageStepper from '@/components/comman/StageStepper.vue'
import { mapActions } from 'vuex';

export default {
    components: { ManagerAppLayout, BottomNav, StageStepper },
    mixins: [imagePath],
    computed: {
        sales() {
            return this.$store.getters['purchases/getSales'];
        },
        activeSale() {
            return this.$store.getters['purchases/getSale'];
        },
    },
    methods: {
        showSale(sale) {
            return this.$store.dispatch('purchases/selectSale', sale);
        },
        hideSale() {
            return this.$store.dispatch('purchases/hideSale');
        },
        ...mapActions(['setInputValue']),
        updateStore(event) {
            this.setInputValue(event.target.value)
        } 
    }
}
</script>

<style lang="scss" scoped></style>