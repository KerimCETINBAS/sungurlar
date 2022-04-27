
<script lang="ts">
import { goto } from "$app/navigation";
import Buttons from "$lib/components/buttons"
import { detail } from "$lib/stores/params";
import Input from "$lib/components/inputs"

    export let id: number
    export let name
    export let models: any[] = []


    $detail = name

    let addModel: boolean = false
    export let modelName: string = ""

    const handleAddNewModel = async () => {
        addModel = true
        await fetch("/api/machinery/" + id , {
            method: "Put",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                models: [{
                    name: modelName
                }]
            })
        })

        models = await fetch(`/api/machinery/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(data=> data.json()).then(data=>data.models)

        addModel = false
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
        <div class="table-caption">Enventar</div>
        <div class="table-header-group">
            <div class="table-row">
                <div class="table-cell">#</div>
                <div class="table-cell">Makina adi</div>
                <div class="table-cell">##</div>
            </div>
        </div>
        <div class="table-row-group">
            {#each models as {id, name} (id) }
                <div class="table-row">
                    <div class="table-cell">{id}</div>
                    <div class="table-cell">{name}</div>
                    <div class="table-cell">
                        <Buttons.Flat  
                            on:click={()=> goto(`/dashboard/model/${id}`)}>
                            Detay
                        </Buttons.Flat>
                    </div>
                </div>
            {/each}
        </div>
    </div>
 
</section>