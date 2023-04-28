<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <ListeTicket/>
  </div>
</template>

<script>
// @ is an alias to /src
import ListeTicket from '@/components/Ticket/ListeTicket.vue'

export default {
  name: 'HomeView',
  components: {
    ListeTicket
  }
}
</script>
