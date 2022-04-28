
<script lang="ts" context="module" >

    import type { Load } from "@sveltejs/kit";
    export const load: Load = async ({fetch, params}) => {
        const {_id, name , models } = await fetch("/api/machinery/" + params.id, { method: "get"}).then(data=> data.json())

        
        return {
           props: {
            _id, name, models
           }
        }
    }
</script>

<script lang="ts">
    import { goto } from "$app/navigation";
    import Buttons from "$lib/components/buttons"
    import { detail } from "$lib/stores/params";
    import Input from "$lib/components/inputs"

    export let _id: number
    export let name
    export let models: any[] = []

    let addModel: boolean = false
    export let modelName: string = ""

    const handleAddNewModel = async () => {
        addModel = true
         await fetch("/api/machinery/" + _id , {
            method: "Put",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name: modelName  })
        })
        models = await fetch(`/api/machinery/${_id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "accept": "application/json"
            }
        }).then(data=> data.json()).then(data=>data.models)
        addModel = false
    }


    const handleDeleteModel = async (id: number) => {

        await fetch(`/dashboard/model/${id}`, { method: "DELETE"})

        models = await fetch(`/dashboard/machinery/${_id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "accept": "application/json"
            }
        }).then(data=> data.json()).then(data=>data.models)
    }
</script>



<section class="p-12">
    <h2 class="text-white mb-4">Yeni model ekle</h2>
    
    {#if !addModel }
        <div class="flex gap-4">
            <Input.Text bind:value={modelName}>
                model adi
            </Input.Text>
            <Buttons.Primary 
                on:click={handleAddNewModel}
            >
                Ekle
            </Buttons.Primary>
        </div>
    {:else}
        <small>Ekleniyor lütfen bekleyiniz</small>
    {/if}
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
            {#each models as {_id, name, units} (_id) }
                <div class="table-row">
                    <div class="table-cell">{_id}</div>
                    <div class="table-cell">{name}</div>
                    <div class="table-cell">
                        <Buttons.Flat  
                            on:click={()=> goto(`/dashboard/model/${_id}`)}>
                            Detay
                        </Buttons.Flat>

                        <Buttons.Flat  
                        on:click={()=> handleDeleteModel(_id)}>
                             sil
                       </Buttons.Flat>
                    </div>
                </div>
            {/each}
        </div>
    </div>
 
</section>