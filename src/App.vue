<template>
  <div id="main">
    <router-view/>
    <FooterSide />
  </div>
</template>

<style>
#main {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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

<script>
import FooterSide from "@/components/FooterSide.vue"

export default {
  components: {
    FooterSide
  }
}
</script>