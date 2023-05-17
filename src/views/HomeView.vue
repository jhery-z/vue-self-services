<template>
  <div class="home">
    <NavbarMenu/>
    <div class="container">
      <div class="row mt-5 mb-5">
        <div class="col-lg-6 col-12 p-3">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2><strong>Find The Best Way,</strong> <br><span style="color:green;">Delivery and Get Your Products</span></h2>
              <p>Get in Touch for Best Price Products in Your Gadget Now</p>
              <router-link to="/about" class="btn btn-success">Detail More</router-link>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-12 p-3">
          <img src="../assets/img/logo.jpg" width="100%" height="auto"/>
        </div>
      </div>

      <div class="row mt-5">
        <div class="col" v-for="product in products" :key="product.id">
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
