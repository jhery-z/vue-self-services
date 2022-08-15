<template>
    <div>
        <NavbarMenu :updateKeranjang="keranjangs"/>
        <div class="container">
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
                                    Keranjang
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <h3>Pesanan Saya</h3>
                        <div class="table-responsive mt-3">
                        <table class="table">
                            <thead>
                                <tr>
                                <th scope="col">#</th>
                                <th scope="col">Foto</th>
                                <th scope="col">Makanan</th>
                                <th scope="col">Keterangan</th>
                                <th scope="col">Jumlah</th>
                                <th scope="col">Harga</th>
                                <th scope="col">Total harga</th>
                                <th scope="col">Hapus</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(keranjang, index) in keranjangs" :key="keranjang.id">
                                <th>{{index+1}}</th>
                                <td>
                                    <img :src=" '../assets/img/' + keranjang.products.gambar " class="img-fluid shadow" width="200"/>
                                </td>
                                <td>{{ keranjang.products.nama }}</td>
                                <td>{{ keranjang.keterangan ? keranjang.keterangan : "-" }}</td>
                                <td class="text-center">{{ keranjang.jumlah_pesanan }}</td>
                                <td>{{ keranjang.products.harga }}</td>
                                <td>Rp. {{ keranjang.products.harga*keranjang.jumlah_pesanan }}</td>
                                <td class="text-danger"><button class="btn btn-danger" @click="hapusKeranjang(keranjang.id)"><b-icon-trash></b-icon-trash> Delete</button></td>
                                </tr>

                                <tr>
                                    <td colspan="6" align="right">
                                        <strong>Total Harga:</strong>
                                    </td>
                                    <td>
                                        <strong>Rp. {{ totalHarga }}</strong>
                                    </td>
                                </tr>
                            </tbody>
                            </table>
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
      name: "KeranJang",
      components: {  
        NavbarMenu,
    },
    data() {
        return {
            keranjangs: []
        }
    },
    methods: {
        setKeranjangs(data) {
            this.keranjangs = data;
        },
    hapusKeranjang(id) {
        axios
        .delete("http://localhost:3000/keranjangs/"+id)
        .then((response) => {
            console.log("Hapus", response);
            this.$toast.error('Pesanan Berhasil di Hapus', {
                    type: 'error', 
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
        }
    },
    mounted() {
        axios
        .get("http://localhost:3000/keranjangs")
        .then((response) => this.setKeranjangs(response.data))
        .catch((error) => console.log(error));
    },
    computed: {
        totalHarga() {
            return this.keranjangs.reduce(function(items, data){
                return items+(data.products.harga*data.jumlah_pesanan)
            }, 0)
        }
    }
};
</script>

<style>

</style>
