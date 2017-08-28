<template>
  <div id="app">
    <router-view></router-view>
  
  </div>
</template>

<script>
import light from "./components/light/light.vue";
import  backstageComponent from './components/backstage/backstage.vue';
  export default {
    components: {
     	light,
     	backstageComponent
    }
  }
</script>

<style lang="scss">
 
</style>
