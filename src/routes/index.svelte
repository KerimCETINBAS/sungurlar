<script>

import Cards from "$lib/components/cards";
import Category from "$lib/components/cards/category.svelte";
import {onMount } from "svelte"
import { Splide, SplideSlide } from '@splidejs/svelte-splide';

import '@splidejs/svelte-splide/css';

    const mainCats = [
        {
            img: {
                url:"/harvester.svg",
                alt:"bicerdover"
            },
            header: "Biçer döver yedek parçaları",
            description:"Spare parts for repair and maintenance of combine harvesters."
        },
        {
            img: {
                url:"/baller.svg",
                alt:"balya makinasi"
            },
            header: "Balya makinasi yedek parçaları",
            description: "Spare parts for popular round and square balers for hay, straw and forage."
        },
        {
            img: {
                url:"/engine.svg",
                alt:"motor"
            },
            header: "Motor yedek parçaları",
            description: "Spare parts and components for diesel engines used in agricultural machinery."
        }
    ]

</script>

<section class=" h-102  relative bg-[#2F3F6D] w-full">
  
        <div class="w-302 h-102 absolute left-0 top-0 z-0">
            <img src="/banner.png" class=" w-full h-full " alt="">
        </div>
        
    <div class="absolute z-1 w-full h-full ">
        <div class="container mx-auto  flex flex-row  justify-end  h-full pt-22 gap-22   ">
            <div>
                <h1 class="text-5xl font-extrabold text-cool-gray-900">SUNGURLAR</h1>
                <ul class="text-3xl font-semibold text-cool-gray-900">
                    <li>Biçerdöver satış</li>
                    <li>Biçerdöver bakım/onarım</li>
                    <li>Biçerdöver yedek parça</li>
                </ul>
            </div>
            <div>
                <ul class="">
                    <li class="text-lg font-semibold"><i class="fa-solid fa-mobile-screen"></i> +90 (544) 444 44 44</li>
                    <li class="text-lg font-semibold"><i class="fa-solid fa-phone"></i> +90 (282) 444 44 44</li>
                    <li class="text-lg font-semibold h-12 block py-2">
                        <a href="/" class="bg-cool-gray-900 text-cool-gray-300 p-2">
                          
                                Beni arayın
                        
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>


<section>
    <div class="container mx-auto flex flex-row gap-6 mt-6">
        <div class="flex-1 grid grid-cols-2 gap-6">
            {#each mainCats as mcat }
            <Cards.Category {...mcat} />
            {/each}
          
            <div class="flex justify-center items-center">
                <img src="/logov3.svg" alt="">
            </div>
        </div>
        <div class=" w-102 flex items-center justify-center">
            <img src="/standwuk.webp" class="pl-[10%] w-[90%]" alt="">
        </div>
    </div>
</section>
<!-- 
[#2F3F6D] -->
<section class=" bg-cool-gray-200 py-6 mt-6" >
    <div class="container mx-auto flex flex-row gap-6 ">
        <div class="flex-1 ">
            <Splide  options={{arrows: false, waitForTransition:true}} aria-label="My Favorite Images">
                <SplideSlide>
                  <div class="w-full h-102 flex gap-6">
                        <img 
                        class="w-1/2"
                        src="/d.jpg" alt="paracaaa">
                        <div>
                            <h2 class="text-[#C19B1A] text-2xl font-bold">Clutch plate AH65440 John Deere</h2>
                            <p class="text-dark-500">
                                Clutch basket for transmission of 925/930/932/942; 1032/1042/1052/1133 combine harvesters and 8100/8200 series tractors John Deere . Dimention in MM: Inner diameter - 70 Outer diameter - 260 . 
                            </p>
                            <div>
                                markalar
                            </div>
                            <div class="flex flex-row items-center align-middle h-8">
                                <span class="w-4 h-4 rounded-full bg-green-400 inline-block"></span> <span class="p-1 text-dark-500 font-semibold"> Stokta Var</span>
                            </div>
                        </div>
                  </div>
                </SplideSlide>
              
              </Splide>
        </div>
  

    <div class=" w-102 ">
        <div class="w-full h-full">
            <Splide  options={{ waitForTransition:true, direction:"ttb",  heightRatio:.5, height: " 25.5rem", perPage:2, gap:"2rem"}} aria-label="My Favorite Images">
                <SplideSlide>
                  <div class="w-full bg-[#2F3F6D]  flex gap-6">
                        <img 
                        class="w-1/2"
                        src="/d.jpg" alt="paracaaa">
                        <div>
                            <h2 class="text-[#C19B1A]  p-1 text-lg font-bold">Clutch plate AH65440 John Deere</h2>
                            
                            <div class="flex flex-row items-center align-middle h-8">
                                <span class="w-4 h-4 rounded-full bg-green-400 inline-block"></span> <span class="p-1 text-light-500"> Stokta Var</span>
                            </div>
                        </div>
                  </div>
                </SplideSlide>

                <SplideSlide>
                    <div class="w-full  bg-[#2F3F6D] flex gap-6">
                          <img 
                          class="w-1/2"
                          src="/d.jpg" alt="paracaaa">
                          <div>
                              <h2 class="text-[#C19B1A] p-1 text-lg font-bold">Clutch plate AH65440 John Deere</h2>
                              
                              <div class="flex flex-row items-center align-middle h-8">
                                  <span class="w-4 h-4 rounded-full bg-green-400 inline-block"></span> <span class="p-1 text-light-500"> Stokta Var</span>
                              </div>
                          </div>
                    </div>
                  </SplideSlide>
                  <SplideSlide>
                    <div class="w-full  bg-[#2F3F6D] flex gap-6">
                          <img 
                          class="w-1/2"
                          src="/d.jpg" alt="paracaaa">
                          <div>
                              <h2 class="text-[#C19B1A] text-lg font-bold">Clutch plate AH65440 John Deere</h2>
                              
                              <div class="flex flex-row items-center align-middle h-8">
                                  <span class="w-4 h-4 rounded-full bg-green-400 inline-block"></span> <span class="p-1 text-light-500"> Stokta Var</span>
                              </div>
                          </div>
                    </div>
                  </SplideSlide>
              
              </Splide>
        </div>
    </div>
</section>