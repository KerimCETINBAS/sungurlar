<script lang="ts">
import { goto } from "$app/navigation";

    import Buttons from "$lib/components/buttons";
    import Inputs from "$lib/components/inputs";
    export let isEditing: boolean = false
    export let id: string
    export let name: string 
    export let handleEdit : (id: string, name: string) => void
    export let handleDelete: (id: string) => void
</script>

{#if isEditing} 
    <div class="fixed w-full  h-full  top-0  left-0 " >
        <div  class="sticky flex top-0 left-0 w-full h-screen bg-dark-50 bg-opacity-59">
            <div 
            on:click|self={()=>isEditing = false}
            class="w-full h-full flex items-start justify-center">
                <div class="w-full bg-cool-gray-900 m-12 flex flex-col ">
                    <div class="flex flex-row gap-6 p-6">
                        <Inputs.Text bind:value={name} />
                        <Buttons.Primary on:click={()=>handleEdit(id, name)}>Kaydet</Buttons.Primary>
                        <Buttons.Primary on:click={()=>{
                            goto("/dashboard/model/" + id)
                            isEditing=false
                        }}>Detay</Buttons.Primary>
                        <Buttons.Secondary on:click={()=> {
                            handleDelete(String(id))
                            isEditing= false
                        }}>Sil</Buttons.Secondary>
                    </div>
                    

                <div>
                
                </div>
                </div>
            </div>
        </div>
    </div>
{/if}