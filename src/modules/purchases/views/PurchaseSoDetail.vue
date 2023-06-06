<template>
    <div>
        <div class="d-flex justify-content-between p-2 border">
            <div class="d-flex ">
                <!-- <img :src="`${publicPath}${runningso.img}`" class="border border2 border-dark"
                    style="width: 60px; height: 60px; border-radius: 50%;"> -->
                <div class="">
                    <p class="m-0">Pride Apparels</p>
                    <p class="m-0">so: 45259865</p>
                </div>
            </div>
            <div class="d-flex align-items-center">
                <i class="bi bi-telephone"></i>
                <i class="bi bi-whatsapp ms-2"></i>
            </div>
        </div>
        <div class="accordion" id="accordionExample">
            <div class="accordion-item mt-3">
                <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                        aria-expanded="true" aria-controls="collapseOne">
                        Accordion Item  
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <div class="d-flex">
                            <!-- <img :src="`${publicPath}${runningso.img}`" class="border border2 border-dark"
                style="width: 60px; height: 60px; border-radius: 50%;"> -->
                            <div class="">
                                <p class="m-0">SO: 45259865-1</p>
                                <p class="m-0">Qty: 250</p>
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
    runningsos() {
        // return this.$store.getters["purchases/getRunningsos"](this.$route.params.runningsoId);
        return this.$store.getters["purchases/getRunningsos"];
    },
}
</script>

<style lang="scss" scoped></style>