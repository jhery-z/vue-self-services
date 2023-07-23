<template>
    <div>
        <NavbarMenu/>
            <div class="container">
                <div class="row mt-3">
                    <div class="col">
                        <nav aria-label="breadcrumb" class="nav-breadcrumb"> 
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item">
                                    <router-link to="/" class="text-dark">Home</router-link>
                                </li>
                                <li class="breadcrumb-item active" aria-current="page">
                                    <router-link to="/" class="text-dark">{{ product.attributes.name }}</router-link>
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6 mb-5">
                        <div class="card p-5">
                          <img :src="product.attributes.images" :alt="product.attributes.name">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <h3>{{ product.attributes.name }}</h3>
                        <span class="float-left pr-2"> 
                            <b-icon-star-fill variant = "warning"> </b-icon-star-fill>
                            <b-icon-star-fill variant = "warning"> </b-icon-star-fill> 
                            <b-icon-star-fill variant = "warning"> </b-icon-star-fill> 
                            <b-icon-star-fill variant = "warning"> </b-icon-star-fill> 
                            {{ product.attributes.rating }}
                        </span>
                        <span>{{ product.attributes.numOfReviews }} reviews</span>
                        <div class="d-flex align-items-center">
                            <span class="icon-point-detail float-left p-2 align-self-center"></span>
                            <p class="number-point-detail align-self-center px-1">
                            {{ product.attributes.points }} points</p>
                        </div>
                        <p>{{ product.attributes.info }}</p>
                        
                        <div class="float-left mt-5">
                            <span>
                                <router-link class="btn-heart-active" :to=" '/detail/'+product.id "><i class="bi bi-heart-fill"></i></router-link>
                            </span>
                            <span>
                                <router-link :style="{backgroundColor:'#065d06', color:'#fff', borderRadius:'50px', padding:'12px 50px', margin:'12px'}" :to=" '/detail/'+product.id ">Redeem</router-link>
                            </span>
                            <span>
                                <router-link :style="{backgroundColor:'#fff', border:'1px solid #065d06', color:'#065d06', borderRadius:'50px', padding:'12px 50px'}" :to=" '/detail/'+product.id ">Add to Card</router-link>
                            </span>
                        </div>
                    </div>
                </div>
                

            </div>
    </div>
</template>

<script>
import NavbarMenu from "@/components/NavbarMenu.vue";
import axios from "axios";

export default {
    name: "DetailProduct",
    components: {
        NavbarMenu,
    },
    data() {
    return {
      product: {}
    };
  },
  mounted() {
    this.fetchProductDetail();
  },
  methods: {
    fetchProductDetail() {
      const productId = this.$route.params.id;
      const apiUrl = `https://recruitment.dev.rollingglory.com/api/v2/gifts/${productId}`;

      axios.get(apiUrl)
        .then(response => {
          // Simpan data produk detail dari response ke dalam variabel product
          this.product = response.data.data;
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
  }
};

</script>

<style>
 .nav-breadcrumb {
    padding: 40px 0;
 }
</style>
