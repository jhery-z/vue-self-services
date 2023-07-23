<template>
  <div class="produk-container">
    <div class="produk-card">
        <div class="img-product">
        <img :src="product.attributes.images" :alt="product.attributes.name">
        </div>
              <h3 class="title-products">{{ product.attributes.name }}</h3>
              <div class="d-flex">
                <span class="icon-point float-left pr-3"></span>
                <p class="number-point">
                  {{ product.attributes.points }} points</p>
              </div>
              <span class="float-left pr-2"> 
                <b-icon-star-fill variant = "warning"> </b-icon-star-fill>
                <b-icon-star-fill variant = "warning"> </b-icon-star-fill> 
                <b-icon-star-fill variant = "warning"> </b-icon-star-fill> 
                <b-icon-star-fill variant = "warning"> </b-icon-star-fill> 
                {{ product.attributes.rating }}
              </span>
              <span class="reviews">{{ product.attributes.numOfReviews }} reviews</span>
              <router-link class="btn-heart float-right" :to=" '/detail/'+product.id "><i class="bi bi-heart"></i></router-link>
    </div>
  </div>
</template>

<script>
export default {
    name : 'CardProduct',
    props : ["product"],
}
</script>
