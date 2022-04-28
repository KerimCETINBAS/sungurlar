
<script context="module" lang="ts">

    import type { Load } from "@sveltejs/kit";
    export const load: Load = async ({ fetch }) => {
        const machinery = await fetch("/api/machinery", { 
                method: "GET", 
                headers: {
                    "Content-Type": "application/json"
                }}).then(data => data.json()) 

        return {
            props: {
                machinery
            }
        }
    }
</script>

<script lang="ts">

    import Buttons from "$lib/components/buttons"
    import { goto } from "$app/navigation"
    import Inputs from "$lib/components/inputs";
    import Primary from "$lib/components/buttons/primary.svelte";


    export let machinery: any[] = [] //
    export let machineName = ""




    // loading indicator purpose
    let addMachine: boolean = false


    // add a machinery
    const handleAddMachine: ()=>Promise<void> = async () => {
        addMachine = true
        await fetch("/api/machinery", {
            method:"post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: machineName
            })

        })

        // refetch after add
        machinery = await fetch("/api/machinery", { 
                method: "GET", 
                headers: {
                    "Content-Type": "application/json"
                }}).then(data => data.json()) 

        addMachine = false
    }

    // delete
    const handleDeleteMachine = (id: number)=> {
        fetch(`/api/machinery/${id}`, {method:"delete"}).then(async data=>{
                    
                              machinery = await fetch("/api/machinery", { 
                                method: "GET", 
                                headers: {
                                    "Content-Type": "application/json"
                                }}).then(data => data.json()) 
                        })
    }
</script>



<section class="p-12">
    
    
    <div class="flex gap-2">
        {#if !addMachine}
            <Inputs.Text bind:value={machineName}> Makine adi </Inputs.Text>
            <Buttons.Primary on:click={handleAddMachine}>Makine ekle</Buttons.Primary>
        {:else}
            <small>Ekleniyor lutfen bekleyiniz</small>
        {/if}
    </div>
    <div>
       
    </div>
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
            {#each machinery as machine (machine._id) }
                <div class="table-row">
                    <div class="table-cell">{machine._id}</div>
                    <div class="table-cell">{machine.name}</div>
                    <div class="table-cell">
                        <Buttons.Flat  
                            on:click={()=> goto(`/dashboard/machinery/${machine._id}`)}>
                            Detay
                        </Buttons.Flat>


                        <Buttons.Flat  
                        on:click={()=>handleDeleteMachine(machine._id)}>
                            sil
                        </Buttons.Flat>
                    </div>
                </div>
            {/each}
        </div>
    </div>
 
</section>