<template>
  <div class="home">
    <NavbarMenu/>
    <div class="container">
      <div class="row mt-5">
        <div class="col">
          <h2>Best <strong>Seller</strong></h2>
        </div>
        <div class="col">
          <router-link to="/about" class="btn btn-success float-right">Lihat Semua</router-link>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-3 col-6" v-for="product in products" :key="product.id">
           <CardProduct :product="product"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import Navbar from '@/components/Navbar.vue'
import NavbarMenu from '../components/NavbarMenu.vue'
import CardProduct from '../components/CardProduct.vue'
import axios from 'axios'

export default {
  name: 'HomeView',
  components: {
    NavbarMenu,
    CardProduct,
},
data() {
  return {
    products: [],
  };
},
methods: {
  setProducts(data) {
    this.products = data;
  },
},
mounted() {
    axios
    .get("http://localhost:3000/best-products/")
    .then((response) => this.setProducts(response.data))
    .catch((error) => console.log(error))
  },
};
</script>
