<template>
    <div>
        <div class=" d-flex  d-flex justify-content-evenly align-items-center w-100 py-3">
            <div class="d-flex">
                <button type="button" class="btn px-5  border" data-bs-toggle="collapse"
                    data-bs-target="#myCollapse1">Select
                </button>
            </div>
            <!-- <input type="search" placeholder="Search" class="w-50"> -->
            <div class="d-flex">
                <button class="btn  d-flex align-items-center">
                    <i class="bi bi-filter fs-4"></i>
                </button>
                <button data-bs-toggle="collapse" data-bs-target="#myCollapse2" class="btn  d-flex align-items-center">
                    <i class="bi bi-search fs-4"></i>
                </button>
                <button type="button" class="btn   d-flex align-items-center" data-bs-toggle="collapse"
                    data-bs-target="#myCollapse"><i class="bi bi-funnel fs-4"></i>
                </button>
                <div class="btn d-flex align-items-center">Reset</div>
            </div>
        </div>
        <div class="collapse  mt-2" id="myCollapse">
            <div class="card card-body">
                <div class="first d-flex ">
                    <TextInputs class="w-100 me-1" name="Start Date" type="date" design="floating"></TextInputs>
                    <TextInputs class="w-100 " name="End Date" type="date" design="floating"></TextInputs>
                </div>
                <TextInputs class="w-100" name="Filter By Colour" type="text" design="floating"></TextInputs>
                <TextInputs class="w-100" name="Filter By Fabric" type="text" design="floating"></TextInputs>
                <div class="first d-flex">
                    <TextInputs class="w-100 me-1" name="Per Meter/KG Price Starts" type="date" design="floating">
                    </TextInputs>
                    <TextInputs class="w-100 " name="Per Meter/KG Price End" type="date" design="floating"></TextInputs>
                </div>
                <TextInputs class="w-100" name="Filter By Processings" type="text" design="floating"></TextInputs>
                <TextInputs class="w-100" name="Sort Purchase By" type="text" design="floating"></TextInputs>
            </div>
        </div>
        <div class="collapse  mt-2" id="myCollapse1">
            <div class="card card-body">
                <p class="btn text-start m-0 fw-bold">New PO</p>
                <p class="btn text-start m-0 fw-bold">Pending Auto PO</p>
                <p class="btn text-start m-0 fw-bold">Pending PO</p>
                <p class="btn text-start m-0 fw-bold">Completed PO</p>
                <p class="btn text-start m-0 fw-bold">Rejected PO</p>
            </div>
        </div>
        <div class="collapse  mt-2" id="myCollapse2">
            <div class="card card-body">
                <div class="input-group d-flex justify-content-center">
                    <div class="form-outline">
                        <input type="search" id="form1" class="form-control" placeholder="Search"/>
                    </div>
                    <button type="button" class="btn btn-primary">
                        <i class="bi bi-search"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TextInputs from './TextInputs.vue';
export default {
    components: {  TextInputs }
}
</script>

<style lang="scss" scoped></style>