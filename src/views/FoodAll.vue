<template>
  <div class="food">
    <NavbarMenu/>
    <div class="container">
      <div class="row mt-5">
        <div class="col">
          <h2>Daftar <strong> Barang</strong></h2>
        </div>

        <div class="row mt-3">
            <div class="col">
                <div class="input-group mb-3">
                    <input 
                    v-model="search"
                    type="text"
                    class="form-control"
                    placeholder="Cari Barang Kesukaan Anda .."
                    aria-label="cari"
                    ria-describedby="basic-addon1"
                    @keyup="searchFood"
                    />
                    <div class="input-group-prepen">
                        <span class="input-group-text">
                            <b-icon-search></b-icon-search>
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <div class="col">
          <router-link to="/about" class="btn btn-success float-right">Lihat Semua</router-link>
        </div>
      </div>
      <div class="row">
        <div class="col mb-4" v-for="product in products" :key="product.id">
           <CardProduct :product="product"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import Navbar from '@/components/Navbar.vue'
import NavbarMenu from '@/components/NavbarMenu.vue'
import CardProduct from '@/components/CardProduct.vue'
import axios from 'axios'

export default {
  name: 'FoodAll',
  components: {
    NavbarMenu,
    CardProduct,
},
data() {
  return {
    products: [],
    search: '',
  };
},
methods: {
  setProducts(data) {
    this.products = data;
  },
  searchFood() {
    axios
    .get("http://localhost:3000/products?q="+this.search)
    .then((response) => this.setProducts(response.data))
    .catch((error) => console.log(error))
  }
},
mounted() {
    axios
    .get("http://localhost:3000/products")
    .then((response) => this.setProducts(response.data))
    .catch((error) => console.log(error))
  },
};
</script>
