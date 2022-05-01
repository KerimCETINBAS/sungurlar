
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
    export let machinery: IMachinery
    export let modelName = ""
    
    const handleAddNewModel = async () => {

         machinery.models = [...machinery.models, await fetch("/api/machinery/" + $page.params.id, {
            method: "put",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: modelName
            })
        }).then(data=>data.json()).then( data => data.model)]

    }

    const handleDeleteModel = async (id: number) => {
        machinery = await fetch("/api/machinery/" + $page.params.id,{
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

       

    }
</script>

<Backward/>

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
 
</section>

<section class="p-12">
    <div class="table table-auto w-full">
        <div class="table-caption">Modeller</div>
        <div class="table-header-group">
            <div class="table-row">
                <div class="table-cell">#</div>
                <div class="table-cell">Model</div>
                <div class="table-cell">##</div>
            </div>
        </div>
        <div class="table-row-group">
          
              {#each machinery?.models || []  as  model (model._id) }
                <div class="table-row">
                    <div class="table-cell">{model._id}</div>
                    <div class="table-cell">{model.name}</div>
                    <div class="table-cell flex">
                        <Buttons.Flat on:click={()=>goto("/dashboard/model/" + model._id)} >Detay</Buttons.Flat>
                        <Buttons.Flat on:click={()=>handleDeleteModel(model._id )}> Sil </Buttons.Flat>
                
                    </div>
                </div>
              {:else}
                no data
              {/each}
       
        </div>
    </div>
 
</section>