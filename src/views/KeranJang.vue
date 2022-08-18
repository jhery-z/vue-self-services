<template>
    <div>
        <NavbarMenu :updateKeranjang="keranjangs"/>

        <div class="container">
        <div class="row">
            <div class="col-md-8 offset-md-2 text-center">
            <div>
                <b-alert v-model="showDismissibleAlert" variant="success" dismissible>
                <p>Apakah anda ingin pesan yang lain ?</p>
                    <button @click="goToAll()" class="btn btn-success">
                    <b-icon-cart></b-icon-cart>
                    Pesan lagi
                    </button>
                </b-alert>
            </div>
            </div>
        </div>
        </div>

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
                    </div>
                    <div class="col">
                    <b-button onclick="window.print()" variant="outline-success" class="btn float-right"><b-icon-printer></b-icon-printer> Print Bill</b-button>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="table-responsive mt-3">
                        <table class="table">
                            <thead>
                                <tr>
                                <th scope="col">#</th>
                                <th scope="col">Foto</th>
                                <th scope="col">Jenis Barang</th>
                                <th scope="col">Keterangan</th>
                                <th scope="col">Jumlah</th>
                                <th scope="col">Harga</th>
                                <th scope="col">Sub Total</th>
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
                                <td><b-button size="sm" variant="outline-danger" @click="hapusKeranjang(keranjang.id)"><b-icon-trash></b-icon-trash> Delete</b-button></td>
                                </tr>

                                <tr>
                                    <td colspan="6" align="right">
                                        <strong>Total Bayar:</strong>
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

                <div class="row justify-content-end">
                    <div class="col-md-4">
                        <form class="" v-on:submit.prevent>
                            <div class="form-group">
                                <label for="nama">Nama Pemesan</label>
                                <input type="text" class="form-control" v-model="pesan.nama">
                            </div>
                            <div class="form-group">
                                <label for="noMeja">Nomor Meja</label>
                                <input type="text" class="form-control" v-model="pesan.noMeja">
                            </div>
                            <button type="submit" class="btn btn-success float-right" @click="checkout"><b-icon-cart></b-icon-cart> Pesan</button>
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
      name: "KeranJang",
      components: {  
        NavbarMenu,
    },
    data() {
        return {
            keranjangs: [],
            pesan: {},
            dismissSecs: 10,
            dismissCountDown: 0,
            showDismissibleAlert: true,
        };
    },
    methods: {
        //Alert 
        goToAll(){
        this.$router.push('/FoodAll'); 
        //if the route accepts params, you can also use
        // this.$router.push({name:'FoodAll'}); 
      },
        showAlert() {
            this.dismissCountDown = this.dismissSecs
        },
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
        },
        checkout() {
            console.log("Pesan", this.pesan);
            if(this.pesan.nama && this.pesan.noMeja) {
                // console.log("cek");
                this.pesan.keranjangs = this.keranjangs;
                axios
                .post("http://localhost:3000/pesanans/", this.pesan)
                .then(() => {

                    // menghapus notif setelah berhasil pesan
                    this.keranjangs.map(function(item) {
                        return axios
                        .delete("http://localhost:3000/keranjangs/" + item.id)
                        .catch((error) => console.log(error));
                    });

                    this.$router.push({path: "/pesanan-sukses"})
                    this.$toast.success('Pesanan sudah di pesan', {
                        type: 'success', 
                        position: 'top-right', 
                        duration: 3000, 
                        dismissable: true,
                    });
                    })
                .catch((error) => console.log(error));
            }else {
                this.$toast.error('Nama dan No meja harus di isi', {
                    type: 'error', 
                    position: 'top-right', 
                    duration: 3000, 
                    dismissable: true, 
                });
            }
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
    },
    
};


</script>

<style>

</style>
