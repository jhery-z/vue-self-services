<template>
  <div class="container-card">
  <div class="cardid">
  <img class="img" :src=" 'assets/img/' + product.gambar " />
    <div class="card-body">
      <h5>{{ product.nama }}</h5>
      <p>price: {{ product.harga }}</p>
      <router-link class="btn btn-success float-right" :to=" '/foods/'+product.id ">Pesan</router-link>
    </div>
  </div>
</div>
</template>

<script>
export default {
    name : 'CardProduct',
    props : ["product"],
}
</script>
