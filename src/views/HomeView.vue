<template>
  <div class="home">
    <NavbarMenu/>
    <h1>Company Logo</h1>
    
    <div class="container mt-5">
      <div class="row">
        <div class="col-lg-3 col-xs">
          <p><strong>Filter</strong></p>
          <hr>
          <FilterProduct/>
        </div>
        <div class="col-lg-9 col-xs">
          <p><strong>Products List</strong></p>
        <hr>
        <div class="produk-container">
          <div v-for="product in products" :key="product.id">
           <CardProduct :product="product"/>
        </div>
        </div>
        <!-- Pagination -->
          <div class="pagination justify-content-center align-self-center mt-4">
            <button class="btn-prev" @click="prevPage" :disabled="currentPage === 1">Previous</button>
            <span class="pages-of mt-3">Page {{ currentPage }} of {{ totalPages }}</span>
            <button class="btn-next" @click="nextPage" :disabled="currentPage === totalPages">Next</button>
          </div>
        </div>
      </div>


    </div>
  </div>
  
</template>

<script>
import NavbarMenu from '../components/NavbarMenu.vue'
import FilterProduct from '../components/FilterProduct.vue'
import CardProduct from '../components/CardProduct.vue'
import axios from 'axios'

export default {
  name: 'HomeView',
  components: {
    NavbarMenu,
    CardProduct,
    FilterProduct,
},

data() {
  return {
        products: [],
        currentPage: 1,
        totalPages: 4,
        itemsPerPage: 6,
      }
    },
      mounted() {
        this.fetchData();
      },
      methods: {
        fetchData() {
          const apiUrl = `https://recruitment.dev.rollingglory.com/api/v2/gifts?page[number]=${this.currentPage}&page[size]=${this.itemsPerPage}`;

          axios.get(apiUrl)
            .then(response => {
              this.products = response.data.data;
              this.totalPages = response.data.meta.totalPages;
            })
            .catch(error => {
              console.error('Error:', error);
            });
        },
        nextPage() {
          if (this.currentPage < this.totalPages) {
            this.currentPage++;
            this.fetchData();
          }
        },
        prevPage() {
          if (this.currentPage > 1) {
            this.currentPage--;
            this.fetchData();
          }
        }
      }
    }
</script>