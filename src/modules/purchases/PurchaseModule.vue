<template>
    <div>
        <div class="d-flex align-items-center bg-dark text-white px-2">
            <RouterLink to="/" class="btn me-2">
                <i class="bi bi-house-door text-white"></i>
            </RouterLink>
            <span class="fw-bold mb-0">Purchase App</span>
        </div>
        <router-view />
    </div>
</template>
  
<script>
export default {};
</script>
  