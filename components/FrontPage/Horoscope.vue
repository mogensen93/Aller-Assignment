<template>
    <div class="bg-primary  py-6 shadow-lg md:shadow-none relative">
        <div class="md:flex md:w-4/6 md:ml-1/6 ">
            <h2 class="text-center font-heading text-3xl pb-2">Vælg dit stjernetegn </h2>
            <span class="border-b border-grey flex-grow mb-4"></span>
        </div>
        <CarrosuelContentArrowLeft />
        <div class="overflow-auto whitespace-nowrap md:text-center relative md:overflow-y-hidden inline-block md:w-4/6 md:ml-1/6">
            <CarrosuelContentZodiacSign /> 
            <CarrosuelContentZodiacSign /> 
            <CarrosuelContentZodiacSign /> 
            <CarrosuelContentZodiacSign /> 
        </div>
        <CarrosuelContentArrowRight />
    </div>
</template>