<template>
  <div class="card">
  <img :src=" 'assets/img/' + product.gambar " class="card-img-top"/>
    <div class="card-body">
      <h5>{{ product.nama }}</h5>
      <p>{{ product.harga }}</p>
      <router-link class="btn btn-success" :to=" '/foods/'+product.id ">Pesan</router-link>
    </div>
  </div>
</template>

<script>
export default {
    name : 'CardProduct',
    props : ["product"],
}
</script>

<style>

</style>