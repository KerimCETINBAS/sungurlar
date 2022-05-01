

    <script lang="ts">

        import type {   SvelteComponent } from "svelte/internal";




        export let headings: string[] | SvelteComponent[] = ["#", "makina adi", "#"]
    </script>
    <div class="w-full bg-cool-gray-200 p-6 ">

        <label class="bg-white flex items-center p-2 w-101">

            <i class="fa fa-search bg-white"></i>
            <input class="flex-1 p-1 outline-transparent" type="text">


        </label>

    </div>

   <div class="bg-cool-gray-300 ">
    <div class="table  w-full bg-cool-gray-00   border-collapse ">
 
        <div class="table-header-group sticky top-0 bg-cool-gray-200">
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

