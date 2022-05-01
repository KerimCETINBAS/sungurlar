
<script context="module" lang="ts">

    import type { Load } from "@sveltejs/kit";
    export const load: Load = async ({ fetch }) => {
        const {machineries} = await fetch("/api/machinery", { 
                method: "GET", 
                headers: {
                    "Content-Type": "application/json"
                }}).then(data => data.json()) 

        return {
            props: {
                machineries
            }
        }
    }
</script>

<script lang="ts">

    import Buttons from "$lib/components/buttons"
    import { goto } from "$app/navigation"
    import Inputs from "$lib/components/inputs";
    import Table , { TableRow } from "$lib/components/table"
    import disableWheel from "$lib/helpers/disableWheel";
    export let machineries: any[] = [] //
    export let machineName = ""

    let edible: boolean = false 
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
        machineries = await fetch("/api/machinery", { 
                method: "GET", 
                headers: {
                    "Content-Type": "application/json"
                }}).then(data => data.json()).then(data=> data.machineries)

        addMachine = false
    }
    // delete
    const handleDeleteMachine = (id: number)=> {
        fetch(`/api/machinery/${id}`, {method:"delete"}).then(async data=>{
                    
            machineries = await fetch("/api/machinery", { 
                method: "GET", 
                headers: {
                    "Content-Type": "application/json"
            }}).then(data => data.json()).then(data=> data.machineries)
        })
    }
</script>

<section class="p-12 select-none relative" style="contain: content;">
    <div class="flex gap-2 mb-4">
        {#if !addMachine}
            <Inputs.Text bind:value={machineName}> Makine adi </Inputs.Text>
            <Buttons.Primary on:click={handleAddMachine}>Makine ekle</Buttons.Primary>
        {:else}
            <small>Ekleniyor lutfen bekleyiniz</small>
        {/if}
    </div>
    
    <Table headings={['#',"ID","ADI"]} >
        {#each machineries as machine, index (machine._id) }
            <TableRow   on:edit={({detail})=>edible=true}
            index={machine._id} cells={[index + 1, machine._id, machine.name]} />

           
        {/each}

      
    </Table>
    {edible}
    {#if edible} 

        <div class="fixed w-full  h-full  top-0  left-0 " >
            <div on:click|self={()=>edible = false} class="sticky flex top-0 left-0 w-full h-screen bg-dark-50 bg-opacity-59">
                    <div>
                        sdfsdf
                    </div>
            </div>
        </div>
    
    {/if}

</section>
<svelte:window use:disableWheel={{scrollable: !edible}} />