<script lang="ts">
    import Breadcrump from "$lib/components/breadcrump/index.svelte"
    import { Splide, SplideSlide } from '@splidejs/svelte-splide';
    import Labels from "$lib/components/labels";
    import '@splidejs/svelte-splide/css';
    import Utils from "$lib/components/utils";
    import Buttons from "$lib/components/buttons"
    import Tab from "$lib/components/tab/index.svelte"
    import DetailTab from "./_detailTab/detail.svelte";
    import ApplicationTab from "./_detailTab/application.svelte";
    import Referance from "./_detailTab/referance.svelte";

    const tabs = [
        { tab: "Detay", component: DetailTab },
        { tab: "Aplikasyon", component: ApplicationTab},
        { tab: "Referans", component: Referance }
    ]
</script>


<Breadcrump />


<section class="w-full">
    <div class="container mx-auto flex gap-6 mt-6 bg-white p-4 ">
        <div class="w-1/4 border-r-2 ">
            <img src="/d.jpg" alt="ddd">
            <div class="h-26 my-[0.2rem]">
                <Splide  options={{ heightRatio:.5, height: "6.5rem", perPage:3, gap:"0.2rem"}} >
                    <SplideSlide>
                      <div class="w-full bg-[#2F3F6D]  flex gap-6">
                          <button>
                            <img 
                            src="/d.jpg" alt="paracaaa">
                          </button>
                          
                      </div>
                    </SplideSlide>
    
                    <SplideSlide>
                        <div class="w-full  bg-[#2F3F6D] flex gap-6">
                              <img 
                              src="/d.jpg" alt="paracaaa">
                              
                        </div>
                      </SplideSlide>
                      <SplideSlide>
                        <div class="w-full  bg-[#2F3F6D] flex gap-6">
                              <img 
                              src="/d.jpg" alt="paracaaa">
                              
                        </div>
                      </SplideSlide>
                  
                  </Splide>
            </div>
        </div>

        <div class="w-2/4">
            <section>
                <h2 class="text-2xl font-bold">000078 Knotter finger compression spring of Claas</h2>
            </section>

            <section class="flex flex-row justify-between w-full mt-4">
           
                    <span class="font-semibold">000078</span> 
                    <div class="flex gap-1">
                        {#each Array(4) as _, i }
                            <Labels.Light>
                                AD-8856{i}
                            </Labels.Light>
                        {/each}
                    </div>
               
            </section>

           <section>
                <Utils.InStock />
           </section>
            
           <section class="mt-4 text-sm">
                <caption class="hidden">
                    description
                </caption>
                <p>
                    Compression spring for knotter of Claas (Constant, Dominant, Markant, Quadrant) balers. Dimentions in MM: Inner diameter - 15. Outer diameter - 27 . Reference: #000078, #000078.1, #0000000781. Aftermarket spare parts.
                </p>

           </section>
            <section class="flex gap-4">
                <caption class="hidden">
                    Markalar
                </caption>
                {#each Array(3) as _ }
                    <img src="/class.webp" alt="">
                {/each}
            </section>


            <section>
                <caption class="hidden">
                    Markalar
                </caption>
            </section>

            <section class="flex gap-4">
                <a href="#123">
                    <span class="font-semibold">
                        <i class="fa fa-envelope"></i> soru sor
                    </span>
                </a>

                <a href="#123">
                    <span class="font-semibold">
                        <i class="fab fa-whatsapp"></i> soru sor
                    </span>
                </a>
            </section>

            
        </div>


       

    </div>
</section>

<section>
    <caption class="hidden">
        Teknik detaylar
    </caption>
    <div class="container mx-auto  min-h-116 mt-12">
      
            <Tab tabs={tabs} />
    </div>
</section>




