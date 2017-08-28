<template>
  <div id="app">
    <router-view></router-view>
  
  </div>
</template>

<script>
// import light from "./components/light/light.vue";
import serve from "./components/serve/serve.vue";
import  backstageComponent from './components/backstage/backstage.vue';
  export default {
    components: {
     	serve,
     	backstageComponent
	}
  }
</script>

<style lang="scss">
 
</style>
