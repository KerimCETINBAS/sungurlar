<script context="module" lang="ts">
    import type { Load } from "@sveltejs/kit";
    export const load: Load = async () => {
   

        return {
            props: {
              
            }
        }
    }
</script>

<script lang="ts">
    import Cards from "$lib/components/cards"
    import Dashboard_1 from "$lib/components/cards/Dashboard_1.svelte"
    import Progress from "$lib/components/progess/index.svelte"
    import List,{ FlexItem } from "$lib/components/lists"


   

</script>


<section class="p-12 grid grid-cols-3 gap-12">
  <div>
    <h2 class="mb-6 text-2xl font-normal text-cool-gray-50">1 Mayıs 2022 Pazar</h2>
    <div class=" gap-4 flex flex-row">
        <span class="bg-cool-gray-50 p-2"> $ 14,1234 / 15,4121 </span>
        <span class="bg-cool-gray-50 p-2"> &#8364; 14,1234 / 15,4121 </span>
     </div>
  </div>

  <div class="col-start-3 flex gap-4">
      <div class="w-1/2 bg-white flex flex-col justify-center p-4">
            <h2 class="text-lg font-semibold">Bugunku satis</h2>
            <span>TL 0.00</span>
      </div>
      <div class="w-1/2 bg-white flex flex-col justify-center p-4">
        <h2  class="text-lg font-semibold">Bugunku Tahsilat</h2>
        <span>TL 0.00</span>
      </div>
  </div>
</section>


<section class="grid grid-cols-3 gap-12 w-full  px-12 mb-6">
  
        <div class="bg-blue-400 w-full h-22"></div>
 

        <div class="bg-yellow-600 w-full h-22"></div>
        <div class="bg-sky-600 w-full h-22"></div>
</section>

<section class="flex flex-col w-full  px-12">
   <!-- site istatistikleri-->

   <div  class="grid grid-cols-3 gap-12">
        <Cards.Dashboard_1>
            <div slot="header" class="p-4 flex justify-between border-b-1 border-slate-300">
                <h1 class="font-bold text-slate-700">Genel bilanco</h1>

                <small>1242 TL</small>
            </div>
            <div slot="content" class="p-4 flex flex-col gap-1">
                
                <div class="flex flex-col">
                   
                        <h3 class="flex  flex-row text-slate-600">
                            <strong class="flex-1 ">
                                Kasa   
                            </strong>
                            <small class="font-semibold  ">
                                21321TL
                            </small>
                        </h3>
                        <Progress progress={83} color={1} />
                  
                    
                  
                </div>
                 <div class="flex flex-col">
                    
                        <h3 class="flex  flex-row text-slate-600">
                            <strong class="flex-1">
                                Kasa   
                            </strong>
                            <small class="font-semibold  ">
                                21321TL
                            </small>
                        </h3>
                        <Progress progress={63} color={2} />
                
                </div>
                <div class="flex flex-col">
                    
                    <h3 class="flex  flex-row text-slate-600">
                        <strong class="flex-1">
                            Kasa   
                        </strong>
                        <small class="font-semibold  ">
                            21321TL
                        </small>
                    </h3>
                    <Progress progress={63} color={3} />
            
                </div>
            </div>
        </Cards.Dashboard_1>

        <Cards.Dashboard_1> 
            <div slot="header" class="p-4 flex justify-between border-b-1 border-slate-300">
                <h1 class="font-bold text-slate-700">Borclar</h1>

                <small>1242 TL</small>
            </div>

            <div slot="content" class="p-4 flex flex-col gap-1">
                <div class="flex flex-col">
                    
                    <h3 class="flex  flex-row text-slate-600">
                        <strong class="flex-1">
                            Acik Hesap  
                        </strong>
                        <small class="font-semibold  ">
                            21321TL
                        </small>
                    </h3>
                    <Progress progress={63} color={3} />
            
                </div>
            </div>
        </Cards.Dashboard_1>



        <Cards.Dashboard_1> 
            <div slot="header" class="p-4 flex justify-between border-b-1 border-slate-300">
                <h1 class="font-bold text-slate-700">Istatistikler</h1>

            </div>

            <div slot="content" class="p-4 flex flex-col gap-1">
                <div class="flex flex-col">
                    
                    <h3 class="flex  flex-row text-slate-600">
                        <strong class="flex-1">
                            Satis
                        </strong>
                        <small class="font-semibold  ">
                            21
                        </small>
                    </h3>

                    <h3 class="flex  flex-row text-slate-600">
                        <strong class="flex-1">
                            Ziyartci
                        </strong>
                        <small class="font-semibold  ">
                            21
                        </small>
                    </h3>

                    <h3 class="flex  flex-row text-slate-600">
                        <strong class="flex-1">
                            Ziyartci
                        </strong>
                        <small class="font-semibold  ">
                            21
                        </small>
                    </h3>
            
                </div>
            </div>
        </Cards.Dashboard_1>


        <section class="mt-6 w-full">
         
                <List caption="VADESİ GEÇEN AÇIK HESAP ALACAKLAR" border-collapse={true}>
                    <FlexItem>
                        <div >
                            <div>
                                DENEME
                            </div>
                            <div>
                                DENEME
                            </div>
                        </div>

                        <div >
                            DS
                        </div>
                       
                    </FlexItem>
                    <FlexItem>
                        <div >
                            <div>
                                DENEME
                            </div>
                            <div>
                                DENEME
                            </div>
                        </div>

                        <div >
                            DS
                        </div>
                       
                    </FlexItem>
                    <FlexItem>
                        <div >
                            <div>
                                DENEME
                            </div>
                            <div>
                                DENEME
                            </div>
                        </div>

                        <div >
                            DS
                        </div>
                       
                    </FlexItem>
                  
                </List>
            
        </section>



        <section class="mt-6 w-full">
         
            <List caption="VADESİ GEÇEN AÇIK HESAP ALACAKLAR" border-collapse={true}>
                <FlexItem>
                    <div >
                        <div>
                            DENEME
                        </div>
                        <div>
                            DENEME
                        </div>
                    </div>

                    <div >
                        DS
                    </div>
                   
                </FlexItem>
                <FlexItem>
                    <div >
                        <div>
                            DENEME
                        </div>
                        <div>
                            DENEME
                        </div>
                    </div>

                    <div >
                        DS
                    </div>
                   
                </FlexItem>
                <FlexItem>
                    <div >
                        <div>
                            DENEME
                        </div>
                        <div>
                            DENEME
                        </div>
                    </div>

                    <div >
                        DS
                    </div>
                   
                </FlexItem>
              
            </List>
        
    </section>
   </div>
</section>




<style lang="less">

</style>