<script lang="ts">
    import Cards from "$lib/components/cards";
import Category from "$lib/components/cards/category.svelte";
import Inputs from "$lib/components/inputs";
import Chexbox from "$lib/components/inputs/Chexbox.svelte";
import CategorySelector from "./_static/categorySelector.svelte";
import BreadCrumb from "$lib/components/breadcrump/index.svelte"


</script>

<BreadCrumb />


<div >
    
    <div class="container mx-auto flex flex-row gap-6 py-12">
        <aside class="w-102 ">
            Arama filtresi

            <div class="border-b-3 border-b-[#C19B1A] mt-6">
                <span>URUN</span>
            </div>
            <ul class="h-120 overflow-y-scroll">
               
                {#each Array(30) as _ }
                    <li>
                        
                        <Inputs.Chexbox>
                            Backing plate60
                        </Inputs.Chexbox>
                    </li>
                {/each}
              
            </ul>


            <div class="border-b-3 border-b-[#C19B1A] mt-6">
                <span>Parca</span>
            </div>
            <ul class="h-120 overflow-y-scroll">
               
                {#each Array(30) as _ }
                    <li>
                        
                        <Inputs.Chexbox>
                            Backing plate60
                        </Inputs.Chexbox>
                    </li>
                {/each}
              
            </ul>


            <div class="border-b-3 border-b-[#C19B1A] mt-6">
                <span>Parca</span>
            </div>
            <ul class="h-100 overflow-y-scroll">
               
                {#each Array(10) as _ }
                    <li>
                        
                        <Inputs.Chexbox>
                            Backing plate60
                        </Inputs.Chexbox>
                    </li>
                {/each}
              
            </ul>
        </aside>
        
         <div class="grid grid-cols-4 h-full w-full gap-6">
             
            <section class="col-span-4">
                <CategorySelector/>
            </section>

            <Cards.Catalog_1 />

            <Cards.Catalog_1 />

            <Cards.Catalog_1 />

            <Cards.Catalog_1 />

            <Cards.Catalog_1 />

            <Cards.Catalog_1 />

            <Cards.Catalog_1 />
         </div>
    </div>
</div>

<style lang="less">

        aside {
            ul li{
            
                @apply pl-4 py-1 text-lg font-mono text-cool-gray-500;
            }
        }

   
</style>