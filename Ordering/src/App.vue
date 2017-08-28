<template>
  <div id="app">
    <router-view></router-view>
  
  </div>
</template>

<script>
import light from "./components/light/light.vue";
import serve from "./components/serve/serve.vue"
import cook from "./components/cookhouse/cook.vue"
  export default {
    components: {
     	light,
     	serve,
     	cook
    }
  }
</script>

<style lang="scss">
 
</style>
