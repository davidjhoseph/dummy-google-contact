<template>
<router-view></router-view>
</template>
<script>
  import MainPage from './LandingPage';
  import Contacts from './Contacts';
  export default {
    name: 'app',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
   components: {
     landingPage: MainPage
   }
  }
</script>

<style lang="scss">

</style>
