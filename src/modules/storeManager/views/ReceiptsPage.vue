<template>
    <div>
        <div class="accordion accordion-flush" id="accordionFlushAreas">
            <div class="accordion-item" v-for="(receipt, index) in receipts" :key="index">
                <h2 class="accordion-header">
                    <div class="accordion-button collapsed" data-bs-toggle="collapse"
                        :data-bs-target="'#flush-collapse' + index" aria-expanded="false"
                        :aria-controls="'flush-collapse' + index">
                        <div class="d-flex ">
                            <div class="border border-2 border-dark rounded-circle">
                                <b class="text-center d-flex justify-content-center align-items-center"
                                    style="width: 60px; height: 60px;">{{ receipt.txt }}</b>
                            </div>
                            <div class="d-flex flex-column justify-content-center ps-2">
                                <p class=" m-0  fs-5">{{ receipt.lr }}</p>
                                <p class=" m-0">{{ receipt.num }}</p>
                            </div>
                        </div>
                    </div>
                </h2>
                <div :id="'flush-collapse' + index" class="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushAreas">
                    <div class="accordion-body">
                        <div v-for="(color, key) in receipt.colors" :key="key">
                            <div class="d-flex justify-content-between container my-2">
                                <div class="d-flex">
                                    <img :src="`${publicPath}${color.img}`" class="border border2 border-dark"
                                        style="width: 60px; height: 60px; border-radius: 50%;">
                                    <div class="ms-2 w-100">
                                        <div class="d-flex flex-column justify-content-between ">
                                            <p class="m-0 fw-bold">{{ color.po }}</p>
                                            <p class="m-0">{{ color.bundle }}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="" style="font-size: 13px;">
                                    <button class="btn btn-primary">Received</button>
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
 
export default {
    mixins: [imagePath],
    components: {  },
    computed: {
        receipts() {
            return this.$store.getters["storeManager/getReceipts"];
        },

    },
}
</script>

<style lang="scss" scoped></style>