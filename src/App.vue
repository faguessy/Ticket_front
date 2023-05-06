<template>
  <div id="app">
    <div>
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">

          <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" v-bind:class="{ 'is-active': isActive }" v-on:click="toggleActive" ref="burger">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu navbar-end" :class="{ 'is-active': isActive }">
          <div class="navbar-end has-background-violet-foncer">
            <router-link class="navbar-item is-uppercase" to="/">Home</router-link>
            <router-link class="navbar-item is-uppercase" to="/Newticket">New Ticket</router-link>
            <router-link class="navbar-item is-uppercase" to="/Commentaire">Commentaire</router-link>
            <router-link class="navbar-item is-uppercase" to="/Signup">Signup</router-link>
          </div>
        </div>
      </nav>
    </div>
    <router-view style="margin-bottom:5%"/>
    <footer class="footer" >
      <div class="content has-text-centered">
        <p>
          Copyright © 2023 <strong>Petanque</strong> - Tous droits réservés by <a href="https://jgthms.com">Istic</a>.
        </p>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isActive: false
    }
  },
  methods: {
    toggleActive: function () {
      this.isActive = !this.isActive
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
