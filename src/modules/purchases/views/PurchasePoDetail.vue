<template>
    <div>
        <div>
            <ManagerAppLayout></ManagerAppLayout>
             <div class="d-flex justify-content-evenly">
                <p class="mb-0 py-3 text-success">Locked <i class="bi bi-lock-fill fs-4"></i></p>
                <p class="mb-0 py-3 text-primary" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#purchaseOrderDetails" aria-controls="purchaseOrderDetails">Update <i
                        class="bi bi-pencil-square fs-4"></i></p>
            </div>
            <div v-for="(po, index) in pos" :key="index" class=" mt-2 border-bottom py-2">
                <div class="d-flex container">
                    <div class="img">
                        <img :src="`${publicPath}${po.img}`" class="border border2 border-dark"
                            style="width: 60px; height: 60px; border-radius: 50%;">
                    </div>
                    <div class="ms-2 w-100">
                        <div class="d-flex justify-content-between ">
                            <p class="m-0 fw-bold">{{ po.name }}</p>
                            <p class="m-0 text-success" :class="po.textcolor">{{ po.text }}</p>

                        </div>
                        <div class="d-flex  text-dark">
                            <div class="d-flex text-dark" style="font-size: 13px;">
                                <p class="m-0 fw-bold"> {{ po.qty }} mtr @ </p>
                                <p class="m-0 ms-2 fw-bold">Rs.{{ po.amt }}/m</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="offcanvas offcanvas-end" tabindex="-1" id="purchaseOrderDetails"
                    aria-labelledby="purchaseOrderDetailsLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="purchaseOrderDetailsLabel">{{ po.name }}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <div>
                            <div class="container">
                                <img :src="`${publicPath}${po.img}`" alt="" class="w-100">
                            </div>
                            <div class="text-center">
                                <p>Cotton Duck</p>
                                <p>SO/1008 {02042023 & 18:30}</p>
                            </div>
                            <div class="accordion" id="accordionPanelsStayOpenExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                                            aria-controls="panelsStayOpen-collapseOne">
                                            Order Items
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
                                        <div class="accordion-body">
                                            <table class="table table-striped">
                                                <thead>
                                                    <tr>
                                                        <!-- <th scope="col">#</th> -->
                                                        <th scope="col">Color</th>
                                                        <th scope="col">Rate</th>
                                                        <th scope="col">Quantity</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr v-for="(item, index) in items" :key="index" class="">
                                                        <!-- <th scope="row">1</th> -->
                                                        <td class="pt-2">
                                                            <div class=" rounded-circle" :class="item.color"
                                                                style="width: 50px; height: 50px;"></div>
                                                        </td>
                                                        <td class="">
                                                            <input class=" form-control " type="text" placeholder="rate"
                                                                v-model="values.rate[index]">
                                                        </td>
                                                        <td>
                                                            <input class=" form-control " type="text" placeholder="qty"
                                                                v-model="values.qty[index]">
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <div class="  w-100">
                                                <table class="table table-secondary">
                                                    <thead>
                                                        <tr>
                                                            <th>#</th>
                                                            <th>Sub Total</th>
                                                            <th>{{ getTotalQty }} mtrs</th>
                                                            <th>₹{{ getTotalAmnt }}</th>
                                                        </tr>
                                                    </thead>
                                                </table>
                                                <div class="text-end">
                                                    <p class="m-0 w-100 fw-bold">(+)GST @ 18% <span class="ms-5 fw-light">{{
                                                        Math.ceil(getTotalAmnt * gst) }}</span></p>
                                                    <p class="m-0 w-100 fw-bold"> Bill Amount <span class="ms-5 fw-light">{{
                                                        Math.ceil(getTotalAmnt +
                                                            (getTotalAmnt * gst)) }}</span></p>
                                                </div>

                                                <div class="d-flex justify-content-center ">
                                                    <button class="w-100 btn btn-light border-dark m-2">Reset</button>
                                                    <button class="w-100 btn btn-light border-dark m-2">Save Change</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
                                            aria-controls="panelsStayOpen-collapseTwo">
                                            Fabric Detail
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse show">
                                        <div class="accordion-body">
                                            <div class="form container">
                                                <table class="table w-100">
                                                    <tbody class="">
                                                        <tr>
                                                            <th scope="row">Name</th>
                                                            <td>
                                                                <input type="text" class="form-control-plaintext"
                                                                    id="staticEmail" :value="po.name">
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Price</th>
                                                            <td class="">
                                                                <input type="text" class="form-control-plaintext"
                                                                    id="staticEmail" :value="'₹ ' + po.price + '/mtr'">
                                                            </td>

                                                        </tr>
                                                        <tr>
                                                            <th scope="row">MOQ</th>
                                                            <td>
                                                                <input type="text" class="form-control-plaintext"
                                                                    id="staticEmail" :value="po.moq">
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Length</th>
                                                            <td>
                                                                <input type="text" class="form-control-plaintext"
                                                                    id="staticEmail" :value="po.length">
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Width</th>
                                                            <td>
                                                                <input type="text" class="form-control-plaintext"
                                                                    id="staticEmail" :value="po.width">
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">GSM</th>
                                                            <td>
                                                                <input type="text" class="form-control-plaintext"
                                                                    id="staticEmail" :value="po.gsm">
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Color</th>
                                                            <td>
                                                                <input type="text" class="form-control-plaintext"
                                                                    id="staticEmail" :value="po.color">
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Design</th>
                                                            <td>
                                                                <input type="text" class="form-control-plaintext"
                                                                    id="staticEmail" :value="po.design">
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Construction</th>
                                                            <td>
                                                                <input type="text" class="form-control-plaintext"
                                                                    id="staticEmail" :value="po.construction">
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Processes</th>
                                                            <td>
                                                                <input type="text" class="form-control-plaintext"
                                                                    id="staticEmail" :value="po.processes">
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Discription</th>
                                                            <td>
                                                                <input type="text" class="form-control-plaintext"
                                                                    id="staticEmail" :value="po.discription">
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <div class="d-flex justify-content-evenly w-100">
                                                    <div class="btn btn-success w-100 m-2">Accept</div>
                                                    <div class="btn btn-info w-100 m-2">Update</div>
                                                    <div class="btn btn-danger w-100 m-2">Reject</div>
                                                </div>
                                                <div class="d-flex w-100 mt-3">
                                                    <button class="w-100 btn btn-primary">Re-Order</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { imagePath } from '@/mixins/imagePath';
import ManagerAppLayout from '../layouts/ManagerAppLayout.vue';

export default {
    components: { ManagerAppLayout },
    mixins: [imagePath],
    data() {
        return {
            values: {
                rate: [],
                qty: [],
            },
            gst: .18
        }
    },
    computed: {
        pos() {
            return this.$store.getters['purchases/getPos']
        },
        items() {
            return this.$store.getters['purchases/getItems']
        },
        getTotalAmnt() {
            let x = 0;
            for (let index = 0; index < Object.keys(this.values.rate).length; index++) {
                const element = this.values.rate[index] * this.values.qty[index];
                x = x + element;
            }
            return x;
        },
        getTotalRate() {
            let x = 0;
            for (let index = 0; index < Object.keys(this.values.rate).length; index++) {
                x = x + parseInt(this.values.rate[index]);

            }
            return x.toLocaleString();
        },
        getTotalQty() {
            let x = 0;
            for (let index = 0; index < Object.keys(this.values.qty).length; index++) {
                x = x + parseInt(this.values.qty[index]);
            }
            return x.toLocaleString();
        },
    },

}
</script>

<style lang="scss" scoped></style>