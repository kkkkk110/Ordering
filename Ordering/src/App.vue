<template>
  <div id="app">
    <router-view></router-view>
  
  </div>
</template>

<script>


import overBookingCom from "./components/OverBooking/overBookingCom.vue";

import serve from "./components/serve/serve.vue"
import cook from "./components/cookhouse/cook.vue"
import  backstageComponent from './components/backstage/backstage.vue';
  export default {
    components: {
     	serve,
     	backstageComponent,
     	cook,
      overBookingCom,
	}


  }
</script>

<style lang="scss">
 
</style>
