<template>
  <div id="app">
    <router-view></router-view>
  
  </div>
</template>

<script>
import light from "./components/light/light.vue";
<<<<<<< HEAD
import  backstageComponent from './components/backstage/backstage.vue';
  export default {
    components: {
     	light,
     	backstageComponent
=======
import serve from "./components/serve/serve.vue"
  export default {
    components: {
     	light,
     	serve
>>>>>>> 97f91143802fe1424885748ac9b29e8854c006a8
    }
  }
</script>

<style lang="scss">
 
</style>
