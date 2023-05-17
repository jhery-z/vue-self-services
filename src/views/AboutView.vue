<template>
  <div class="about">
    <NavbarMenu/>
    <div class="container">
      <h2>About</h2>
      <p>GoStore merupakan website aplikasi untuk pemesanan secara mudah tanpa perlu melakukan antrian pemesanan dan pembayaran di kasir. Proses ini bisa dilakukan secara mandiri oleh pembeli <i>(self-service)</i> </p>
      <div class="row mt-5 mb-5">
        <div class="col-lg-6 col-12 p-3">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2><strong>Find The Best Way,</strong> <br>Delivery and Get Your Products</h2>
              <p>Get in Touch for Best Price Products in Your Gadget Now</p>
              <router-link to="/FoodAll" class="btn btn-success">Order Now</router-link>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-12 p-3">
          <img src="../assets/img/order.jpg" width="100%" height="auto"/>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
// @ is an alias to /src
// import Navbar from '@/components/Navbar.vue'
import NavbarMenu from '../components/NavbarMenu.vue'

export default {
  name: 'AboutView',
  components: {
    NavbarMenu,
}
}
</script>
