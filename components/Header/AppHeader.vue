<template>
    <div>
        <div class="w-auto bg-gray-100 sm:mx-h-20 flex justify-between p-2 filter shadow-lg z-10">
            <img src="https://via.placeholder.com/40x50" alt="">
            <div class="sm:w-10" v-on:click="isNavOpen = !isNavOpen"> 
                <svg class="block h-auto w-10 pt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>
        </div>
        <div class="w-auto navWindowHeight" v-show="isNavOpen">
            <HeaderSearch />
            <HeaderNavigationLinks />
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return{
                isNavOpen: false
            }
        }
    }
</script>

<style>
    .background-color {
        background-color: #F2EEE4;
    }

    .navWindowHeight {
        height: 92vh;
    }
</style>