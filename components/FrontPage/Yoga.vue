<template>
    <div class="bg-primary md:py-12  py-6 my-6 shadow-lg md:shadow-none overflow-x-hidden relative">
      <div class="md:flex md:w-4/6 md:ml-1/6 ">
        <h2 class="text-center font-heading text-3xl pb-2 pr-2">Hverdags yoga</h2>
        <span class="border-b border-grey flex-grow mb-4"></span>
      </div>
      <div class="hidden md:block md:absolute top-16 bg-primary md:w-10-p md:pt-12 z-20">
        <img src="~/assets/img/icons/double-arrow-left.png" alt="" class="">
      </div>
      <div class="overflow-auto whitespace-nowrap md:text-center relative md:overflow-y-hidden inline-block md:mx-1/6" >
        <CarrosuelContentYoga />
        <CarrosuelContentYoga />
        <CarrosuelContentYoga />
        <CarrosuelContentYoga />
      </div>
      <div class="hidden md:block md:absolute right-0 top-16 bg-primary md:w-10-p md:pt-12 z-20">
        <img src="~/assets/img/icons/double-arrow-right.png" alt="" class="">
      </div>
    </div>
</template>