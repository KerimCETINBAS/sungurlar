

    <script lang="ts">

        import type {   SvelteComponent } from "svelte/internal";
        import Paginated from "../misc/paginated.svelte";
        import Virtual from "../misc/virtual.svelte";
        import Button from "$lib/components/buttons"
        let paginated: boolean = true

        export let filter: string = ""

        export let headings: string[] | SvelteComponent[] = ["#", "makina adi", "#"]
    </script>
    <div class="w-full bg-cool-gray-700 px-6 py-4  flex flex-row">

        <label class="bg-white flex h-8 items-center px-2 w-101">

            <i class="fa fa-search bg-white"></i>
            <input class="flex-1 pl-4 h-7 outline-none" bind:value={filter} type="text">
            

        </label>
        
        <div class="flex self-end place-self-end w-full justify-end h-8  items-center">
        
            {#if paginated}
                <div>
                    <Button.Flat><i class="fa fa-chevron-left"></i> </Button.Flat>
                    <select name="" id="">
                        <option value="1">1</option>    
                        <option value="1">1</option>  
                        <option value="1">1</option>  
                        <option value="1">1</option>  
                    </select>
                    <Button.Flat><i class="fa fa-chevron-right"></i> </Button.Flat>
                </div>
            {/if}

            <div class="flex gap-2 ml-2  ">
                <Paginated 
                on:click={()=>paginated = true}
                selected={paginated? true: false} />
                <Virtual 
                on:click={()=>paginated = false}
                selected={paginated? false: true} />
            </div>
        </div>
    </div>

   <div class="bg-cool-gray-300 ">
    <div class="table  w-full bg-cool-gray-00   border-collapse ">
 
        <div class="table-header-group sticky top-0 bg-cool-gray-800 text-light-50">
            <div class="table-row ">

                {#each headings as heading, i (i) }
                    {@const isComponent = typeof heading !== "string"  }
                 
                    {#if !isComponent}
                       <div class="table-cell p-2   border-b-2 border-white"><span class="">{heading}</span></div> 
                    {/if}
                {/each}
            </div>
        </div>
    
        <div class="table-row-group">
            <slot  />
         
        </div>
    </div>
   </div>

