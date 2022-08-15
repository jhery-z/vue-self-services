<template>
  <div class="about">
    <NavbarMenu/>
    <h2>Belanja Menyenangkan dengan Harga Murah, Bersama Kami</h2>
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-4 col-6">
          <div class="card shadow-md rounded-5">
            <img src="../assets/img/logo.jpg" alt="" width="auto" height="160">
            <p>Judul Produk</p>
            <p>Harga Produk</p>
            <button class="btn btn-success mb-4"> Beli</button>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-6">
          <div class="card shadow-md rounded-5">
            <img src="../assets/img/p1.jpg" alt="" width="auto" height="160">
            <p>Judul Produk</p>
            <p>Harga Produk</p>
            <button class="btn btn-md btn-success mb-4"> Beli</button>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-6">
          <div class="card shadow-md rounded-5">
            <img src="../assets/img/logo.jpg" alt="" width="auto" height="160">
            <p>Judul Produk</p>
            <p>Harga Produk</p>
            <button class="btn btn-success mb-4"> Beli</button>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-6">
          <div class="card shadow-md rounded-5">
            <img src="../assets/img/p2.jpg" alt="" width="auto" height="160">
            <p>Judul Produk</p>
            <p>Harga Produk</p>
            <button class="btn btn-success mb-4"> Beli</button>
          </div>
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
