<template>
  <div class="overflow-x-hidden">
    <HeaderAppHeader />
    <nuxt-link to="/article">
    <div class="h-3/5 relative" >
    
      <img src="https://via.placeholder.com/125x125" alt="" srcset="" class="w-full h-auto md:h-700 relative">
      <div class="absolute bottom-0 inner-shadow h-1/5 w-full"/>
        <p class="absolute left-0 md:left-1/4 bottom-28 md:bottom-48 border-pink border-l-2 text-white mx-8 px-1 font-body font-semibold text-xs">SOFIE LINDE</p>
        <h2 class="absolute left-0 md:left-1/4 bottom-6 md:bottom-12 md:w-1/2 mx-6 px-1 text-3xl md:text-6xl font-heading text-white">Jeg er ikke blevet gift for at blive skilt igen</h2>
    </div>
        </nuxt-link>
    <div class="grid grid-cols-1 md:grid-cols-3 p-6 md:gap-x-6 md:px-48">
      <div class="pb-10">
        <div class="relative w-full">
            <img src="https://via.placeholder.com/125x125" alt="" srcset="" class="w-full h-auto relative">
            <div class="flex py-2 absolute px-4 bottom-0 bg-true-white w-11/12">
              <img src="~/assets/img/icons/play-button.png" alt="" class="w-4 h-4 mt-1 mr-1 "> 
              <p class="border-pink border-l-2 p-1 font-body font-semibold text-xs"> SIGNE LINDKVIST</p>
            </div>
        </div>
        <h2 class="px-4 py-2 text-3xl font-heading w-11/12">"Jeg blev tit valgt fra, fordi jeg ikke var lækker nok"</h2>
      </div>
      <div class="pb-10">
      <div class="relative w-full">
          <img src="https://via.placeholder.com/125x125" alt="" srcset="" class="w-full h-auto relative">
          <div class="flex py-2 absolute px-4 bottom-0 bg-true-white w-11/12">              
            <p class="border-pink border-l-2 p-1 font-body font-semibold text-xs"> SIGNE LINDKVIST</p>
          </div>
        </div>
        <h2 class="px-4 py-2 text-3xl font-heading w-11/12">"Jeg blev tit valgt fra, fordi jeg ikke var lækker nok"</h2>
      </div>
      <div class="pb-10">
        <div class="relative w-full">
            <img src="https://via.placeholder.com/125x125" alt="" srcset="" class="w-full h-auto relative">
            <div class="flex py-2 absolute px-4 bottom-0 bg-true-white w-11/12">
              <p class="border-pink border-l-2 p-1 font-body font-semibold text-xs"> SIGNE LINDKVIST</p>
            </div>
        </div>
        <h2 class="px-4 py-2 text-3xl font-heading w-11/12">"Jeg blev tit valgt fra, fordi jeg ikke var lækker nok"</h2>
      </div>
    </div>
    <FrontPageHoroscope />

    <div class="h-3/5 relative pt-12">
      <img src="https://via.placeholder.com/125x125" alt="" srcset="" class="w-full h-auto md:h-700 relative">
      <div class="absolute bottom-0 inner-shadow h-1/5 w-full text-right "/>
      <p class="absolute right-0 bottom-32 mx-6 px-1 border-pink border-l-2 text-white font-body font-semibold text-xs md:mr-1/5 ">TESSA KÆMPER SIG UD AF FORTIDEN</p>
      <h2 class="absolute left-0 md:right-0 bottom-10 mx-6 px-1 text-3xl md:text-5xl font-heading text-white text-right md:mr-1/5 md">"Min mor kaldte mig for luder"</h2>
    </div>

    <FrontPageNewestVideos/>

    <div class="grid grid-cols-12 md:px-48 md:gap-4">
        <div class="pb-10 col-span-12 md:col-span-6">
        <div class="relative w-full">
            <img src="https://via.placeholder.com/125x125" alt="" srcset="" class="w-full h-auto relative">
            <div class="flex py-2 absolute px-4 bottom-0 bg-true-white w-11/12">
              <p class="border-pink border-l-2 p-1 font-body font-semibold text-xs">ANNIKA AAKJÆR</p>
            </div>
        </div>
        <h2 class="px-4 py-2 text-3xl font-heading w-11/12">“Jeg er ikke cool og ikke smart, og jeg danser ikke. Men jeg er sjov”</h2>
      </div>


      <div class="pb-10 col-span-6 px-1">
        <div class="relative">
            <img src="https://via.placeholder.com/125x125" alt="" srcset="" class="w-full h-auto relative">
            <div class="flex py-2 md:absolute px-4 bottom-0 bg-true-white w-11/12 justify-center">
              <p class="border-pink border-l-2 p-1 font-body font-semibold text-xs text-center"> SOFIE LINDE</p>
            </div>
        </div>
        <h2 class="px-4 py-2 md:text-3xl text-lg font-heading text-center md:text-left">"Jeg blev tit valgt fra, fordi jeg ikke var lækker nok"</h2>
      </div>

            <div class="pb-10 col-span-6 md:col-span-4 px-1">
        <div class="relative">
            <img src="https://via.placeholder.com/125x125" alt="" srcset="" class="w-full h-auto relative">
            <div class="flex py-2 md:absolute px-4 bottom-0 bg-true-white w-11/12 justify-center md:justify-start">
              <p class="border-pink border-l-2 p-1 font-body font-semibold text-xs text-center"> SOFIE LINDE</p>
            </div>
        </div>
        <h2 class="px-4 py-2 md:text-3xl text-lg font-heading text-center md:text-left">"Jeg blev tit valgt fra, fordi jeg ikke var lækker nok"</h2>
      </div>
      <div class="pb-10 col-span-12 md:col-span-4">
        <div class="relative w-full">
            <img src="https://via.placeholder.com/125x125" alt="" srcset="" class="w-full h-auto relative">
            <div class="flex py-2 absolute px-4 bottom-0 bg-true-white w-11/12">
              <p class="border-pink border-l-2 p-1 font-body font-semibold text-xs">ANNIKA AAKJÆR</p>
            </div>
        </div>
        <h2 class="px-4 py-2 text-3xl font-heading w-11/12">“Jeg er ikke cool og ikke smart, og jeg danser ikke. Men jeg er sjov”</h2>
      </div>

      <div class="pb-10 col-span-6 md:col-span-6 px-1">
        <div class="relative">
            <img src="https://via.placeholder.com/125x125" alt="" srcset="" class="w-full h-auto relative ">
            <div class="flex py-2 md:absolute px-4 bottom-0 bg-true-white w-11/12 justify-center md:justify-start">
              <p class="border-pink border-l-2 p-1 font-body font-semibold text-xs"> SOFIE LINDE</p>
            </div>
        </div>
        <h2 class="px-4 py-2 md:text-3xl text-lg font-heading text-center md:text-left">"Jeg blev tit valgt fra, fordi jeg ikke var lækker nok"</h2>
      </div>
      <div class="pb-10 col-span-6 px-1">
        <div class="relative">
            <img src="https://via.placeholder.com/125x125" alt="" srcset="" class="w-full h-auto relative">
            <div class="flex py-2 md:absolute px-4 bottom-0 bg-true-white w-11/12 justify-center">
              <p class="border-pink border-l-2 p-1 font-body font-semibold text-xs text-center"> SOFIE LINDE</p>
            </div>
        </div>
        <h2 class="px-4 py-2 md:text-3xl text-lg font-heading text-center md:text-left">"Jeg blev tit valgt fra, fordi jeg ikke var lækker nok"</h2>
      </div>

      <div class="pb-10 col-span-12 md:col-span-3">
          <div class=" relative inline-block">
              <div class="inline-block relative">
                  <img src="https://via.placeholder.com/400x400" alt="" class="align-bottom md:align-middle w-screen">
                  <div class="absolute top-0 left-0 bg-true-white w-90-p  h-90-p ml-5-p mt-5-p">
                    <p class=" text-center w-full mt-1/4 font-body text-2x"><span class="border-l-2 border-pink pr-1"/>SEX & EROTIK</p>
                    <p class=" text-center ml-half translate-middle-x font-heading text-3xl md:text-lg w-2/3">Beate var jomfru, til hun var 41: “Jeg følte mig kikset”</p>
                  </div>
              </div>
        </div>
      </div>
  </div>
        <div class="bg-white grid grid-cols-12 p-4 gap-4  md:px-48" >
          <div class="pb-4 col-span-6 md:col-span-3 bg-true-white">
            <div class="relative">
                <img src="https://via.placeholder.com/125x125" alt="" srcset="" class="w-full h-auto relative">
                <div class="flex pt-4  px-4 bottom-0  w-11/12 justify-center">
                  <p class="border-black border-2 p-1 font-body font-semibold text-xs text-center "> ANNONCE</p>
                </div>
            </div>
            <h2 class="px-4 py-2 text-lg font-heading text-center">5 myter om hudpleje, vi også er hoppet på</h2>
          </div>
                    <div class="pb-4 col-span-6  md:col-span-3 bg-true-white">
            <div class="relative">
                <img src="https://via.placeholder.com/125x125" alt="" srcset="" class="w-full h-auto relative">
                <div class="flex pt-4 px-4 bottom-0  w-11/12 justify-center">
                  <p class="border-black border-2 p-1 font-body font-semibold text-xs text-center"> ANNONCE</p>
                </div>
            </div>
            <h2 class="px-4 py-2 text-lg font-heading text-center">5 myter om hudpleje, vi også er hoppet på</h2>
          </div>
                    <div class="pb-4 col-span-6  md:col-span-3 bg-true-white">
            <div class="relative">
                <img src="https://via.placeholder.com/125x125" alt="" srcset="" class="w-full h-auto relative">
                <div class="flex pt-4  px-4 bottom-0  w-11/12 justify-center">
                  <p class="border-black border-2 p-1 font-body font-semibold text-xs text-center"> ANNONCE</p>
                </div>
            </div>
            <h2 class="px-4 py-2 text-lg font-heading text-center">5 myter om hudpleje, vi også er hoppet på</h2>
          </div>
                    <div class="pb-4 col-span-6  md:col-span-3 bg-true-white">
            <div class="relative">
                <img src="https://via.placeholder.com/125x125" alt="" srcset="" class="w-full h-auto relative">
                <div class="flex pt-4  px-4 bottom-0  w-11/12 justify-center">
                  <p class="border-black border-2 p-1 font-body font-semibold text-xs text-center"> ANNONCE</p>
                </div>
            </div>
            <h2 class="px-4 py-2 text-lg font-heading text-center">5 myter om hudpleje, vi også er hoppet på</h2>
          </div>
      </div>

      <div class="hidden md:block">
        <BannerReklame />
      </div>
    <div class="bg-primary md:py-12  py-6 my-6 shadow-lg md:shadow-none overflow-x-hidden relative">
                    <div class="md:flex md:w-4/6 md:ml-1/6 ">
            <h2 class="text-center font-heading text-3xl pb-2">Hverdags yoga</h2>
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
        <div class="md:flex md:w-4/6 md:ml-1/6 ">
            <h2 class="text-center font-heading text-3xl pb-2"><i>Mest læste </i></h2>
            <span class="border-b border-grey flex-grow mb-4"></span>
        </div>
      <div class="p-5 shadow-lg md:shadow-none md:grid md:grid-cols-3 md:gap-8 md:w-4/6 md:ml-1/6">
        <MostRead />
        <MostRead />
        <MostRead />
        <MostRead />
        <MostRead />
        <MostRead />
      </div>

            <div class="hidden md:block">
        <BannerReklame />
      </div>

    <div class="h-3/5 relative">
      <img src="https://via.placeholder.com/125x125" alt="" srcset="" class="w-full h-auto md:h-700 relative">
      <div class="absolute bottom-0 inner-shadow h-1/5 w-full"/>
        <p class="absolute left-0 md:left-1/4 md:w-1/2 bottom-28 md:bottom-48 border-pink border-l-2 text-white mx-8 px-1 font-body font-semibold text-xs">LASSE RIMMER</p>
        <h2 class="absolute left-0 md:left-1/4 bottom-6 md:bottom-12 md:w-1/2 mx-6 px-1 text-3xl md:text-6xl font-heading text-white">Jeg er ikke blevet gift for at blive skilt igen</h2>
    </div>

      <div class="bg-primary md:py-12  py-6 my-6 shadow-lg md:shadow-none overflow-x-hidden relative">
        <h2 class="text-center md:hidden font-heading text-4xl pb-4">Vi anbefaler</h2>
        <p class="text-center md:hidden font-body text-md pb-4">Sponserert af H&M</p>
          <div class="hidden md:block md:absolute  bg-primary md:w-10-p md:pt-12 z-20">
          <img src="~/assets/img/icons/double-arrow-left.png" alt="" class="">
        </div>

        <div class="overflow-auto whitespace-nowrap md:text-center relative md:overflow-y-hidden inline-block text-center md:mx-1/6 md:w-4/6" >
          <CarrosuelContentDress />
          <CarrosuelContentDress />
          <CarrosuelContentDress />
          <CarrosuelContentDress />
          <CarrosuelContentDress />
        </div>
                 
        <div class="hidden md:block md:absolute right-0 top-16 bg-primary md:w-10-p md:pt-12 z-20">
          <img src="~/assets/img/icons/double-arrow-right.png" alt="" class="">
        </div>
      </div>
      
      <div class="hidden md:block">
        <BannerReklame />
      </div>

  </div>
</template>

<script>
  export default {}
</script>

<style>

</style>
