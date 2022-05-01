<script context="module" lang="ts">
    import type { Load} from "@sveltejs/kit";
    export const load: Load = async ({fetch}) => {
        const manufacturers: IManufacturer[] = await fetch("/api/manufacturer", { 
            method: "GET", 
            headers: {
                "Content-Type": "applicatin/json"
            }
        }).then(data=> data.json())
        return {
            props: {
                manufacturers
            }
        }
    }
</script>

<script lang="ts">
import Buttons from "$lib/components/buttons";
import Flat from "$lib/components/buttons/flat.svelte";
import Inputs from "$lib/components/inputs";
import type { IManufacturer } from "$lib/entities/manufacturer";
import { goto } from "$app/navigation";

export let manufacturers: IManufacturer[]
export let manufacturerName:string = ""

console.log(manufacturers)
const handleAddManufacturer = async () => {

        manufacturers = [...manufacturers, await fetch("/api/manufacturer", {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                name: manufacturerName
            })
        }).then(data => data.json())]
}

const handleDeleteManufactruer = async (id: number) => {
       console.log( await fetch("/api/manufacturer/" + id, {
            method: "DELETE"
        }).then(data=> data.json()))

        manufacturers = manufacturers.filter(m => m._id !== id)
}
</script>


<section class="p-12">
    
    <h2>Uretici ekle</h2>

    <div class="flex flex-row gap-4 mt-4">
        <Inputs.Text bind:value={manufacturerName}> Ekle </Inputs.Text>
        <Buttons.Primary on:click={handleAddManufacturer}>Ekle</Buttons.Primary>
    </div>


    <div>

        <div class="table table-auto w-full">
            <div class="table-caption">Ureticiler</div>
            <div class="table-header-group">
                <div class="table-row">
                    <div class="table-cell">#</div>
                    <div class="table-cell">uretici</div>
                    <div class="table-cell">##</div>
                </div>
            </div>
            <div class="table-row-group">
                {#each manufacturers || [] as {_id, name} (_id) }
                <div class="table-row">
                    <div class="table-cell">{_id}</div>
                    <div class="table-cell">{name}</div>
                    <div class="table-cell flex flex-row">
                        <Buttons.Flat on:click={() => goto("/dashboard/manufacturer/" + _id)}>Detay</Buttons.Flat>
                        <Buttons.Flat on:click={()=>handleDeleteManufactruer(_id)}>Sil</Buttons.Flat>
                    </div>
                </div>
                {/each}
           
            </div>
        </div>
    </div>
</section>


