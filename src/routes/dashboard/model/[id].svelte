


<script context="module" lang="ts">
    import type { Load} from "@sveltejs/kit";
    export const load: Load = async ({ fetch, params }) => {

        const {_id, name, units } = await fetch("/api/model/" + params.id, { method: "get"}).then(data=> data.json())
        return {
            props: {
                _id, name, units
            }
        }
    }
</script>

<script lang="ts">
    import Buttons from "$lib/components/buttons"
    import { Helper, HelperType, Text } from "$lib/components/inputs"
    import { page } from "$app/stores"
import Index from "$lib/components/breadcrump/index.svelte";
  
    export let  _id:number;
    export let name: string;
    export let  units: any[] = [];
  
    let newUnit: {
        name: string,
        description: string
    } = {
        name: "",
        description: ""
    }


    const handleAddUnit = async () => {
        await fetch("/api/model/" + $page.params.id, { 
            method: 'put',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                ...newUnit
            })
        }).then(async res => {

            if(res.status == 200) {
                units =  await fetch("/api/model/" + $page.params.id, { method: "get"}).then(data=> data.json()).then(data=> data.units)

            }
               
        })
    } 
</script>


<div class="m-6 ml-12">
    <Buttons.Secondary> 	&lt; Geri</Buttons.Secondary>
</div>
<section class="p-12 bg-white">

    <div class="flex flex-row justify-between">
        <Helper type={HelperType.Helper} text={String(_id)} />
        <Buttons.Primary> Kaydet </Buttons.Primary>
    </div>

  
    <div class="mt-4 flex flex-row gap-4">
        <Text bind:value={name}> model </Text>

    </div>

    <div class="mt-12">
        <Helper type={HelperType.Helper} text="Unite ekle"></Helper>
    </div>
    <div class="mt-2 flex gap-4">

        <Text bind:value={newUnit.name}> Unite adi </Text>
        <Buttons.Primary on:click={handleAddUnit}> Ekle </Buttons.Primary>
    </div>   

    <div class="table table-auto w-full mt-12">
        <div class="table-caption">Uniteler</div>
        <div class="table-header-group">
            <div class="table-row">
                <div class="table-cell">#</div>
                <div class="table-cell">unite</div>
                <div class="table-cell">##</div>
            </div>
        </div>
        <div class="table-row-group">
            {#each units as unit (_id) }
                <div class="table-row">
                    <div class="table-cell">{unit._id}</div>
                    <div class="table-cell">
                        <div>
                            {unit.name}
                        </div>
                    </div>
                    <div class="table-cell">
                       

                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>