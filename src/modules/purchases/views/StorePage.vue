<template>
    <div>
        <ManagerAppLayout></ManagerAppLayout>
        Store Page
        <BottomNav></BottomNav>
    </div>
</template>

<script>
import BottomNav from '@/components/comman/BottomNav.vue';
import ManagerAppLayout from '../layouts/ManagerAppLayout.vue';

export default {
    components: { ManagerAppLayout, BottomNav }
}
</script>

<style lang="scss" scoped></style>