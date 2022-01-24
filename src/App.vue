<template>
  <div class="py-12 bg-emerald-300 md:py-24">
    <h1 class="text-center font-bold text-3xl md:text-6xl text-white">My Awesome Bus App</h1>
  </div>
  <div class="page md:mx-auto">
    <router-view />
  </div>
  
</template>

<script setup>
</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
@media only screen and (min-width: 768px){
  .page{
    max-width: 600px;

  }
}
</style>
