<template>
  <v-app >
    <Navbar />

    <v-content class="fondo">
      <router-view></router-view> 
    </v-content>
  </v-app>
</template>

<script>

import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  components: { Navbar },
  data () {
    return {
      //
    }
  }
}
</script>

<style>
  .fondo{
    background-color: #EEEEEE;
  }
</style>