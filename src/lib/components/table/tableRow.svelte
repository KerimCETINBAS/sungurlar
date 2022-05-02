
<script lang="ts">
    import { createEventDispatcher } from "svelte"
    const dispatch = createEventDispatcher()
    export let cells: Array<string|number> = []
    export let index: number
    let edible: boolean = false


	

    
</script>

<div class="table-row key-table-row cursor-pointer hover:(bg-cool-gray-400 bg-opacity-30)"
    class:bg-pink-700={index % 2 == 0 ? true: false}   
    on:click={()=>dispatch("edit", cells)}>
    {#each cells as cell }
        <div class="table-cell p-2 border-b-{index % 2 == 0 ? "1"  : "2"}"
           
        >
            <span>{cell}</span>
        </div>
    {/each}
</div>



