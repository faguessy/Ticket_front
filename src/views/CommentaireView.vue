<template>
  <div class="home">
    <AddCommentaire/>
  </div>
</template>

<script>
// @ is an alias to /src
import AddCommentaire from '@/components/Ticket/AddCommentaire'

export default {
  name: 'CommentaireView',
  components: {
    AddCommentaire
  }
}
</script>
