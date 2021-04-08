<template>
<!-- TODO: Lav seperat component, og loop igennem links-->
<!-- EXTRA: Indsæt den rigtige text -->
    <div>
        <div class="grid grid-cols-2 gap-2 bg-gray-100 pl-10 pr-10">
            <div class="leading-loose m-2">
                <h2 class="text-3xl md:text-4xl ">LIV</h2>
                <nuxt-link to="/" class="block">Selvudvikling</nuxt-link>
                <nuxt-link to="/" class="block">Kærlighed og sex</nuxt-link>
                <nuxt-link to="/" class="block">Familieliv</nuxt-link>
                <nuxt-link to="/" class="block">Brevkasse</nuxt-link>
                <nuxt-link to="/" class="block">Sundhed</nuxt-link>
                <nuxt-link to="/" class="block">Gravid</nuxt-link>
            </div>
            <div class="leading-loose m-2">
                <h2 class="text-3xl md:text-4xl">KULTUR</h2>
                <nuxt-link to="/" class="block">Selvudvikling</nuxt-link>
                <nuxt-link to="/" class="block">Kærlighed og sex</nuxt-link>
                <nuxt-link to="/" class="block">Familieliv</nuxt-link>
                <nuxt-link to="/" class="block">Brevkasse</nuxt-link>
                <nuxt-link to="/" class="block">Sundhed</nuxt-link>
            </div>
            <div class="leading-loose m-2">
                <h2 class="text-3xl md:text-4xl">STIL</h2>
                <nuxt-link to="/" class="block">Selvudvikling</nuxt-link>
                <nuxt-link to="/" class="block">Kærlighed og sex</nuxt-link>
                <nuxt-link to="/" class="block">Familieliv</nuxt-link>
            </div>
            <div class="leading-loose m-2">
                <h2 class="text-3xl md:text-4xl">AGENDA</h2>
                <nuxt-link to="/" class="block">Selvudvikling</nuxt-link>
                <nuxt-link to="/" class="block">Kærlighed og sex</nuxt-link>
                <nuxt-link to="/" class="block">Familieliv</nuxt-link>
            </div>
        </div>
        <div class="leading-loose m-2 pl-10 pr-10">
             <h2 class="text-3xl md:text-4xl">MERE</h2>
            <div class="grid grid-cols-2 gap-2">
                <div>
                    <nuxt-link to="/" class="block">Video</nuxt-link>
                    <nuxt-link to="/" class="block">Podcast</nuxt-link>
                    <nuxt-link to="/" class="block">Pling</nuxt-link>
                    <nuxt-link to="/" class="block">Krydsord</nuxt-link>
                </div>
                <div>
                    <nuxt-link to="/" class="block">Abonnement</nuxt-link>
                    <nuxt-link to="/" class="block">Kontakt</nuxt-link>
                    <nuxt-link to="/" class="block">Nyhedsbrev</nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>