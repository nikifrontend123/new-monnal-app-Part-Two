<template>
    <div>
        <ManagerAppLayout></ManagerAppLayout>
        <div class="list-group" v-for="(runningso, index) in runningsos" :key="index">
            <div class="d-flex justify-content-between container py-2 list-group-item">
                <div class="d-flex">
                    <img :src="`${publicPath}${runningso.img}`" class="border border2 border-dark"
                        style="width: 60px; height: 60px; border-radius: 50%;">
                    <div class="ms-2">
                        <p class="m-0 fw-bold">{{ runningso.fabid }}</p>
                        <p class="m-0 fw-bold">Qty: {{ runningso.qty }}</p>
                    </div>
                </div>
                <div class="d-flex align-items-center">
                    <!-- <RouterLink :to="{ name: runningso.route, params: {runningsoId: index} }"> -->
                    <RouterLink :to="'/purchase-so-detail/' + runningso.id" class="text-decoration-none">
                        <p class="m-0 text-success btn btn-warning">Accept</p>
                    </RouterLink>
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



export default {
    mixins: [imagePath],
    components: { ManagerAppLayout, BottomNav },
    computed: {
        runningsos() {
            return this.$store.getters['purchases/getRunningsos'];
        }
    }
}
</script>

<style lang="scss" scoped></style>