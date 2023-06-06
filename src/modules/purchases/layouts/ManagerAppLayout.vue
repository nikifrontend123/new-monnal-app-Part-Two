<template>
    <div>
        <div class="topnav d-flex justify-content-between container border-bottom py-2">
            <div class="d-flex">
                <RouterLink to="/purchase">
                    <i class="bi bi-arrow-left-short text-dark fs-3"></i>
                </RouterLink>
                <p class="bi bi-person-circle m-0 fw-bold fs-5 ms-2 text-dark"><span class="ms-2">Himanshu</span></p>
            </div>
            <div class="d-flex">
                <slot></slot>
            </div>
        </div> 
        <SearchBar></SearchBar>
    </div>
</template>

<script>
import SearchBar from '@/components/comman/SearchBar.vue';

    export default {
    components: {  SearchBar, }
}
</script>

<style lang="scss" scoped>

</style>