
<script context="module" lang="ts">

    import type { IModel } from "$lib/entities/model";
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
    import Add from "./_addMachinery.svelte";
    
    import EditMachine from "./_editMachinery.svelte"
    export let machineries: any[] = [] //
    let filter = ""
    let edible: [number,string, string] | undefined
    // loading indicator purpose
   
    // delete
    const handleDelete = (id: string)=> {
        fetch(`/api/machinery/${id}`, {method:"delete"}).then(async data=>{
                    
            machineries = await fetch("/api/machinery", { 
                method: "GET", 
                headers: {
                    "Content-Type": "application/json"
            }}).then(data => data.json()).then(data=> data.machineries)
        })
    }

    const handleEdit = (id: string, name: string) => {
        fetch("/api/machinery/" +  id , {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify({
                name
            })
        }).then(data=> data.json()).then(data=> {
            machineries[ machineries.findIndex(x => x._id ==  id || null)] = data.machinery
            machineries = machineries
            edible = undefined
        })
    } 
    $: filterPrediction = (x: { name: string; _id: string; models: IModel[]; }) => 
            [x.name, x._id, ...x.models.map(d=>d.name)]
                .some(y =>  new RegExp(filter, "i").test(y))
    

</script>



<section class="p-12 select-none h-full " style="contain: content;">
    
    <!--  add component -->
    <Add bind:machineries={machineries} />
    <Table 
        bind:filter
        headings={['#',"ID","ADI"]} >
        {#each machineries.filter( (x)=>filterPrediction(x), machineries) as machine, index (machine._id) }
            <TableRow   on:edit={({detail})=>edible=detail}
            index={machine._id} cells={[index + 1, machine._id, machine.name]} />
        {/each}
    </Table>


    <EditMachine
        id={edible && edible[1] || ""}
        name={edible && edible[2] || ""}
        isEditing={!!edible}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
    />
    
</section>
<svelte:window use:disableWheel={{scrollable: !edible}} />