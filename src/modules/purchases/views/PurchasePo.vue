<template>
    <div>
        <div>
            <ManagerAppLayout></ManagerAppLayout>
            <div v-for="(po, index) in pos" :key="index" class=" mt-2 border-bottom py-2">
                <RouterLink to="/purchase-po-detail" style="text-decoration: none;">
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
                                <p class="m-0 fw-bold">{{ po.qty }} mtr @</p>
                                <p class="m-0 ms-2 fw-bold">Rs.{{ po.amt }}/m</p>
                            </div>
                        </div>
                    </div>
                </div>
                </RouterLink>
            </div>
            <BottomNav></BottomNav>
        </div>
    </div>
</template>

<script>
import { imagePath } from '@/mixins/imagePath';
import ManagerAppLayout from '../layouts/ManagerAppLayout.vue';
import BottomNav from '@/components/comman/BottomNav.vue';
 
export default {
    components: { ManagerAppLayout, BottomNav },
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

    },

}
</script>

<style lang="scss" scoped></style>