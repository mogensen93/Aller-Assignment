<template>
    <div>
        <div class="w-auto bg-primary sm:mx-h-20 md:-h-16 flex justify-between md:justify-around p-1 shadow-lg z-10">
            <img src="https://via.placeholder.com/40x50" alt="">
            <div class="w-auto flex"> 
                <HeaderSearchDesktop v-show="!isMobile" />
                <svg class="block h-auto w-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" v-on:click="isNavOpen = !isNavOpen">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>
        </div>
        <div class="w-auto" v-show="isNavOpen">
            <HeaderSearchMobile v-show="isMobile" />
            <HeaderNavigationLinks @toggleNavigation="toggleNavigation"/>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return{
                isNavOpen: false,
                isMobile: false
            }
        },
        mounted () {
            this.onResize()
            window.addEventListener('resize', this.onResize)
        },
        methods: {
            onResize () {
                if(this.isMobile = window.innerWidth < 768){
                    this.isMobile = true;
                }
                console.log(this.isMobile);
            },
            toggleNavigation(){
                this.isNavOpen = !this.isNavOpen
                console.log(this.isNavOpen);
            }

        },
    }
</script>

<style>                    

</style>