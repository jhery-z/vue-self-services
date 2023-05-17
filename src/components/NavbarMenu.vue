<template>
<div id="app">
  <div class="container">
  <b-navbar toggleable="lg" type="dark" variant="success" class="fixed-top mb-5">
    <b-navbar-brand href="/">Go Store</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <router-link class="b-nav-item" to="/">Home</router-link>
        <router-link class="b-nav-item" to="/about">About</router-link>
        <router-link class="b-nav-item" to="/FoodAll">Product All</router-link>
      </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link class="nav-link active" to="/keranjang"> Keranjang
              <b-icon-bag></b-icon-bag>
              <span class="badge badge-success ml-2">{{ updateKeranjang ? updateKeranjang.length : jumlah_pesanans.length }}</span>
            </router-link>
          </li>
        </ul>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  </div>
</div>
</template>

<script>
import axios from "axios";

export default {
  name: 'NavbarMenu',
  data() {
    return {
      jumlah_pesanans: []
    }
  },
  props: ['updateKeranjang'],
  methods: {
    setJumlah(data) {
      this.jumlah_pesanans = data
    }
  },
  mounted() {
    axios
    .get("http://localhost:3000/keranjangs/")
    .then((response) => this.setJumlah(response.data))
    .catch((error) => console.log(error))
  }
}
</script>

