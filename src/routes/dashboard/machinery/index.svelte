<script lang="ts">

    import Buttons from "$lib/components/buttons"
    import Flat from "$lib/components/buttons/flat.svelte"
    import { goto } from "$app/navigation"
    export let machinery: any[] = [] //
    
</script>



<section class="p-12">
    <div class="table table-auto w-full">
        <div class="table-caption">Enventar</div>
        <div class="table-header-group">
            <div class="table-row">
                <div class="table-cell">#</div>
                <div class="table-cell">Makina adi</div>
                <div class="table-cell">##</div>
            </div>
        </div>
        <div class="table-row-group">
            {#each machinery as {id, name, models} (id) }
                <div class="table-row">
                    <div class="table-cell">{id}</div>
                    <div class="table-cell">{name}</div>
                    <div class="table-cell">
                        <Buttons.Flat  
                            on:click={()=> goto(`/dashboard/machinery/${id}`)}>
                            Detay
                        </Buttons.Flat>


                        <Buttons.Flat  
                        on:click={()=> fetch(`/dashboard/machinery/${id}`, {method:"delete"})}>
                            sil
                        </Buttons.Flat>
                    </div>
                </div>
            {/each}
        </div>
    </div>
 
</section>