<template>
  <div class="bg-warning d-flex flex-column justify-content-center align-items-center"
      style="width: 100vw; height: 100vh;">
      <p class="fs-1 fw-bold">Monaal Creation</p>
      <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1"
              data-bs-toggle="dropdown" aria-expanded="false">
              Login As
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a class="dropdown-item" href="/purchase">Purchase</a></li>
               <li><a class="dropdown-item" href="/receipts">Store Manager</a></li>
              <!--<li><a class="dropdown-item" href="/store">Store Manager</a></li>
              <li><a class="dropdown-item" href="/store-keeper">QC Inspector</a></li>
              <li><a class="dropdown-item" href="/receipt-page">Gate Keeper</a></li>
              <li><a class="dropdown-item" href="/bills">Accounts Deptt</a></li> -->
          </ul>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped></style>