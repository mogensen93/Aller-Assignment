<template>
<!-- TODO: Lav seperat component, og loop igennem links-->
<!-- EXTRA: Indsæt den rigtige text -->
<!-- Fix nederste potion af grid -->
    <div class="md:absolute md:z-50 md:top-0 w-full ">
        <div class="grid grid-cols-2 gap-2 md:grid-cols-6 md:gap-6 bg-gray-100 px-64 md:pt-9">
            <img src="https://via.placeholder.com/80x125" class="hidden md:block " alt="">
            <div class="leading-loose m-2 md:m-0">
                <h2 class="text-3xl  ">LIV</h2>
                <nuxt-link to="/" class="block">Selvudvikling</nuxt-link>
                <nuxt-link to="/" class="block">Kærlighed og sex</nuxt-link>
                <nuxt-link to="/" class="block">Familieliv</nuxt-link>
                <nuxt-link to="/" class="block">Brevkasse</nuxt-link>
                <nuxt-link to="/" class="block">Sundhed</nuxt-link>
                <nuxt-link to="/" class="block">Gravid</nuxt-link>
            </div>
            <div class="leading-loose m-2 md:m-0">
                <h2 class="text-3xl ">KULTUR</h2>
                <nuxt-link to="/" class="block">Selvudvikling</nuxt-link>
                <nuxt-link to="/" class="block">Kærlighed og sex</nuxt-link>
                <nuxt-link to="/" class="block">Familieliv</nuxt-link>
                <nuxt-link to="/" class="block">Brevkasse</nuxt-link>
                <nuxt-link to="/" class="block">Sundhed</nuxt-link>
            </div>
            <div class="leading-loose m-2 md:m-0">
                <h2 class="text-3xl ">STIL</h2>
                <nuxt-link to="/" class="block">Selvudvikling</nuxt-link>
                <nuxt-link to="/" class="block">Kærlighed og sex</nuxt-link>
                <nuxt-link to="/" class="block">Familieliv</nuxt-link>
            </div>
            <div class="leading-loose m-2 md:m-0 ">
                <h2 class="text-3xl ">AGENDA</h2>
                <nuxt-link to="/" class="block">Selvudvikling</nuxt-link>
                <nuxt-link to="/" class="block">Kærlighed og sex</nuxt-link>
                <nuxt-link to="/" class="block">Familieliv</nuxt-link>
            </div>
            <div class="w-100 ">
                <img src="~/assets/img/icons/close.png" class="hidden md:block h-12 w-auto object-contain" v-on:click="toggleNav"/>
            </div>
        </div>
        <div class="leading-loose m-2 px-64 pr-10 flex">
            <h2 class="text-3xl">MERE</h2>
            <ul class="grid grid-cols-4">
                <nuxt-link to="/" class="block">Video</nuxt-link>
                <nuxt-link to="/" class="block">Podcast</nuxt-link>
                <nuxt-link to="/" class="block">Pling</nuxt-link>
                <nuxt-link to="/" class="block">Krydsord</nuxt-link>
                <nuxt-link to="/" class="block">Abonnement</nuxt-link>
                <nuxt-link to="/" class="block">Kontakt</nuxt-link>
                <nuxt-link to="/" class="block">Nyhedsbrev</nuxt-link>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            toggleNav(){
                this.$emit('toggleNavigation');
            }
        }
    }
</script>