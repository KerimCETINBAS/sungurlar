
<script lang="ts" context="module" >
    
    import type { Load } from "@sveltejs/kit";
    import type { IMachinery } from "$lib/entities/machinery"; 
    export const load: Load = async ({fetch, params}) => {
        const { machinery }: { machinery: IMachinery} = await fetch("/api/machinery/" + params.id, { method: "GET"}).then(data=> data.json())
        return {
           props: {
                machinery 
           }
        }
    }
</script> 

<script lang="ts">
    import Backward from "$lib/components/utils/backward.svelte";
    import { goto } from "$app/navigation";
    import Buttons from "$lib/components/buttons"
    import Inputs from "$lib/components/inputs"
    import { page } from "$app/stores";
    import Table, {TableRow} from "$lib/components/table";
    import EditModel from "./_editModel.svelte";
    import Add from "./_addModel.svelte";
    export let machinery: IMachinery

    let edible: Array<string> | undefined 
    let filter: string = ""
    const handleAddNewModel = async (name:string) => {

         machinery.models = [...machinery.models, await fetch("/api/machinery/" + $page.params.id, {
            method: "put",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name
            })
        }).then(data=>data.json()).then( data => data.model)]

    }

    const handleDeleteModel =  (id: string) => {
         fetch("/api/machinery/" + $page.params.id,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                $pull: {
                    models:id
                    
                },
            
            })
        }).then(data => data.json()).then(data=> data.machinery)
        .then(data=> {
            machinery = data
        })

    }

    const handleEditModel = () => {}
</script>


<!-- 
<section class="p-12">
    <h2 class="text-white mb-4">Yeni model ekle</h2>
   
    <div class="flex flex-row gap-4">
        <Inputs.Text 
        bind:value={modelName}
        >Model adi</Inputs.Text>
        <Buttons.Primary
        on:click={handleAddNewModel}
        >Ekle</Buttons.Primary>
    </div> 
 
</section> -->

<section class="p-12 h-full" style="contain: content;">

  

        
        <!--  add component -->
         <Add handler={handleAddNewModel} />
        
         <Table 
             bind:filter
             search={false}
             headings={['#',"ID","ADI"]} >
             {#each machinery.models as model, index (model._id) }
                 <TableRow   on:edit={({detail})=>edible = detail}
                 index={model._id} cells={[index + 1, model._id, model.name]} />
             {/each}
         </Table>
     
     
         <EditModel
            id={edible && edible[1] || ""}
            name={edible && edible[2] || ""}
            isEditing={!!edible}
            handleEdit={handleEditModel}
            handleDelete={handleDeleteModel}
         />
</section>