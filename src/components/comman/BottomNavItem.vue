<template>
    <RouterLink :to="{ name: menuItem.route }" 
    class="text-dark " 
    style="text-decoration: none;">
        <div class="d-flex flex-column justify-content-center align-items-center">
            <i class="fs-4" :class=" menuItem.icon"></i>
            <small class="mt-1 text-uppercase">{{ menuItem.name }}</small>
        </div>
    </RouterLink>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
    name: "BottomNavItem",
    props: ["menuItem"],
    components: { RouterLink }
}
</script>

