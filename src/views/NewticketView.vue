<template>
  <div class="home">
    <TicketCreated/>
  </div>
</template>

<script>
// @ is an alias to /src
import TicketCreated from '@/components/Ticket/TicketCreated.vue'
export default {
  name: 'NewticketView',
  components: {
    TicketCreated
  }
}
</script>
