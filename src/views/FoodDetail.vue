<template>
    <div>
        <NavbarMenu :updateKeranjang="keranjangs"/>
            <div class="container">
                <h1 class="text-center mt-5">Products Detail </h1>
                <div class="row mt-3">
                    <div class="col">
                        <nav aria-label="breadcrumb" class="nav-breadcrumb"> 
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item">
                                    <router-link to="/" class="text-dark">Home</router-link>
                                </li>
                                <li class="breadcrumb-item">
                                    <router-link to="/FoodAll" class="text-dark">Product All</router-link>
                                </li>
                                <li class="breadcrumb-item active" aria-current="page">
                                    Detail Product
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6">
                        <div class="card">
                            <img :src=" '../assets/img/' + product.gambar " class="img-fluid shadow"/>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <h2>{{ product.nama }}</h2>
                        <h5>Harga: Rp. {{ product.harga }}</h5>
                        <br/>
                        <form v-on:submit.prevent>
                            <div class="form-group">
                                <label for="jumlah_pesanan">Jumlah Pesan</label>
                                <input type="number" class="form-control" v-model="pesan.jumlah_pesanan">
                            </div>
                            <div class="form-group">
                                <label for="keterangan">Keterangan</label>
                                <textarea 
                                v-model="pesan.keterangan"
                                class="form-control"
                                placeholder="isi keterangan produk yang dipesan..">
                                </textarea>
                            </div>
                            <button type="submit" class="btn btn-success" @click="pesanan"><b-icon-cart></b-icon-cart> Pesan</button>
                        </form>
                    </div>
                </div>
                

            </div>
    </div>
</template>

<script>
import NavbarMenu from "@/components/NavbarMenu.vue";
import axios from "axios";

export default {
    name: "FoodDetail",
    components: {
        NavbarMenu,
    },
    data() {
        return {
            product:{},
            pesan: {}
        };
    },
    methods: {
        setProduct(data) {
            this.product = data;
        },
        pesanan() {
            // console.log(this.pesan);
        if(this.pesan.jumlah_pesanan) {
            this.pesan.products = this.product;
            axios
            .post("http://localhost:3000/keranjangs/", this.pesan)
            .then(() => {
                this.$router.push({path: "/keranjang"})
                this.$toast.success('Pesanan Berhasil di pesan', {
                    type: 'success', 
                    position: 'top-right', 
                    duration: 3000, 
                    dismissable: true, 
                });
            // undate data kerajang
                axios
                .get("http://localhost:3000/keranjangs")
                .then((response) => this.setKeranjangs(response.data))
                .catch((error) => console.log(error));
            })
            .catch((error) => console.log(error));
        }else {
            this.$toast.error('Jumlah Pesanan harus di isi', {
                    type: 'error', 
                    position: 'top-right', 
                    duration: 3000, 
                    dismissable: true, 
                });
            }
        },
    },
    mounted() {
    axios
    .get("http://localhost:3000/products/"+this.$route.params.id)
    .then((response) => this.setProduct(response.data))
    .catch((error) => console.log(error))
  },
};
</script>

<style>
 .nav-breadcrumb {
    padding: 40px 0;
 }
</style>
