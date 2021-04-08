<template>
<!-- TODO: Lav seperat component, og loop igennem links-->
<!-- EXTRA: Indsæt den rigtige text -->
<!-- Fix nederste potion af grid -->
    <div class="md:absolute md:z-50 md:top-0 w-full ">
        <div class="w-full bg-primary md:top-0 flex md:justify-center">
            <img src="https://via.placeholder.com/85x125 " class="hidden md:flex h-3/6 md:mt-7" alt="">
            <div class="bg-primary w-full flex flex-wrap md:pt-10  md:max-w-5xl">
                <div class="leading-loose w-6/12  md:w-3/12 px-10 pb-10 ">
                    <h2 class="text-3xl  ">LIV</h2>
                    <nuxt-link to="/" class="block">Selvudvikling</nuxt-link>
                    <nuxt-link to="/" class="block">Kærlighed og sex</nuxt-link>
                    <nuxt-link to="/" class="block">Familieliv</nuxt-link>
                    <nuxt-link to="/" class="block">Brevkasse</nuxt-link>
                    <nuxt-link to="/" class="block">Sundhed</nuxt-link>
                    <nuxt-link to="/" class="block">Gravid</nuxt-link>
                </div>
                <div class="leading-loose  w-6/12  md:w-3/12 px-10 pb-10">
                    <h2 class="text-3xl ">KULTUR</h2>
                    <nuxt-link to="/" class="block">Selvudvikling</nuxt-link>
                    <nuxt-link to="/" class="block">Kærlighed og sex</nuxt-link>
                    <nuxt-link to="/" class="block">Familieliv</nuxt-link>
                    <nuxt-link to="/" class="block">Brevkasse</nuxt-link>
                    <nuxt-link to="/" class="block">Sundhed</nuxt-link>
                </div>
                <div class="leading-loose px-10 md:w-3/12  px-10 pb-10">
                    <h2 class="text-3xl ">STIL</h2>
                    <nuxt-link to="/" class="block">Selvudvikling</nuxt-link>
                    <nuxt-link to="/" class="block">Kærlighed og sex</nuxt-link>
                    <nuxt-link to="/" class="block">Familieliv</nuxt-link>
                </div>
                <div class="leading-loose px-10  md:w-3/12 px-10 pb-10">
                    <h2 class="text-3xl ">AGENDA</h2>
                    <nuxt-link to="/" class="block">Selvudvikling</nuxt-link>
                    <nuxt-link to="/" class="block">Kærlighed og sex</nuxt-link>
                    <nuxt-link to="/" class="block">Familieliv</nuxt-link>
                </div>
            </div>
            <div class="w-100 mt-5 ">
                <img src="~/assets/img/icons/close.png" class="hidden md:block h-12 w-auto object-contain" v-on:click="toggleNav"/>
            </div>
        </div>

        <div class="bg-secondary flex justify-center">
            <div class="leading-loose p-10 md:max-w-5xl md:flex" >
                <h2 class="text-3xl block">MERE</h2>
                <ul class="grid md:pl-10 grid-cols-2 md:grid-cols-4 gap-x-44">
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