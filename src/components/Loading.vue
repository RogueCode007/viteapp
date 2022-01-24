<template>
    <div class="mt-10 px-4 md:grid md:grid-cols-2 gap-x-4 lg:grid-cols-3">
        <div v-for="(bus, index) in buses" :key="index" class="shadow mb-4 p-8 rounded" >
            <p class="skeleton-text1"></p>
            <p class="text-base mt-4 skeleton-text2"></p>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            buses: [{}, {}, {}, {}, {}, {}]
        }
    }
}
</script>

<style scoped>
.skeleton-text1{
    border-radius: 5px;
    width: 150px;
    height: 10px
}
.skeleton-text2{
    border-radius: 5px;
    width: 100px;
    height: 10px
}
.skeleton-text2, .skeleton-text1{
  /* opacity: .7; */
  animation: skeleton-loading 1s linear infinite alternate;
}
@keyframes skeleton-loading {
  0% {
    background-color: hsl(200, 20%, 70%);
  }
  100% {
    background-color: hsl(200, 20%, 95%);
  }
}
@media only screen and (min-width: 768px){
    .skeleton-text1{
        width: 70%
    }
    .skeleton-text2{
        width: 30%
    }
}
</style>