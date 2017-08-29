<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

import overBookingCom from "./components/OverBooking/overBookingCom.vue";

import listhome from "./components/home/listhome.vue"
import serve from "./components/serve/serve.vue"
import cook from "./components/cookhouse/cook.vue"
import  backstageComponent from './components/backstage/backstage.vue';
import mainpage from "./components/mainpage/mainpage.vue"
import ypstyle from "./components/home/list/ypstyle.vue"
import tlist from "./components/home/list/tlist.vue"
import mbstyle from "./components/home/list/mbstyle.vue"
import Wstyle from "./components/home/list/Wstyle.vue"
import Cstyle from "./components/home/list/Cstyle.vue"
import loginComponent from "./components/login/login.vue";

  export default {
    components: {
      serve,
      backstageComponent,
      cook,
      mainpage,
      overBookingCom,
      listhome,
      tlist,
      Wstyle,
      Cstyle,
      ypstyle,
      mbstyle,

      loginComponent,

    }
  }
</script>

<style lang="scss">
 
</style>
