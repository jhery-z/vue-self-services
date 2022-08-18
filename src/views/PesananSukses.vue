<template>
    <div class="pesanan-sukses">
    <NavbarMenu/>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col text-center">
                    <h2>Mohon ditunggu untuk orderan anda akan segera diantar<br/><br/> Terima kasih. </h2>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import NavbarMenu from "@/components/NavbarMenu.vue";
    
    export default {
        name: 'PesananSukses',
        components: {
            NavbarMenu,
        },
    }

</script>

<style>

</style>