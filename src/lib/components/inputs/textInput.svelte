
<script lang="ts">


    
   
    export let width: number = 190;
    export let value: string = ""
    export let id = Math.random().toString(26).slice(2)
    export let required: boolean = false
 
    let focused: boolean = false

    $: filled = value !== "" || focused
</script>

           
    <div    style="width:{width}px;" class="relative  ">
        <label for={id} class="{!filled? "natural" : "focused"} bg-transparent" > 
            <slot />
        </label>

        <input 
         style="width:{width}px;"
         class="bg-cool-gray-200 h-12  rounded-none outline-transparent  px-2 pt-2"
        
        
         {id} bind:value={value}  {required}
         on:focus={()=>focused = true}
         on:blur={()=> focused = false}
         type="text"  >
         
      
    </div>
 

<style>

    label.natural {
        @apply absolute bottom-0 text-gray-800 top-0 left-0 right-0 flex items-center pl-4 font-semibold;
    }

    label.focused {
        @apply absolute top-0 text-gray-600 left-3 text-xs ;
    }


</style>