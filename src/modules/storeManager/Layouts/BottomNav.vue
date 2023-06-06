<template>
    <div class="position-fixed bottom-0 start-0 end-0 bg-light shadow" style="height: fit-content">
        <div class="d-flex justify-content-around py-1">
            <BottomNavItem v-for="(storeMenuItem, index) in storeMenuItems" :key="index" :storeMenuItem="storeMenuItem">
            </BottomNavItem>
        </div>
    </div>
</template>

<script>
import BottomNavItem from './BottomNavItem.vue';


export default {
    components: {
        BottomNavItem
    },
    computed: {
        storeMenuItems() {
            return this.$store.getters['storeManager/getBottomNavMenuItems']
        },
    }
}
</script>

<style lang="scss" scoped></style>