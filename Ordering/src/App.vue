<template>
  <div id="app">
    <router-view></router-view>
  
  </div>
</template>

<script>
import light from "./components/light/light.vue";
import overBookingCom from "./components/OverBooking/overBookingCom.vue";
  export default {
    components: {
     	light,
     	overBookingCom
    }
  }
</script>

<style lang="scss">
 
</style>
