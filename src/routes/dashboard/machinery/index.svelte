<script lang="ts">

    import Buttons from "$lib/components/buttons"
    import { goto } from "$app/navigation"
    import Inputs from "$lib/components/inputs";
    import Primary from "$lib/components/buttons/primary.svelte";
    export let machinery: any[] = [] //

    export let machineName = ""

    let addMachine: boolean = false
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

        machinery = await fetch("/api/machinery", { 
                method: "GET", 
                headers: {
                    "Content-Type": "application/json"
                }}).then(data => data.json()) 

        addMachine = false
    }


    const handleDeleteMachine = (id: number)=> {
        fetch(`/api/machinery/${id}`, {method:"delete"}).then(async ()=>{
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
            {#each machinery as {id, name, models} (id) }
                <div class="table-row">
                    <div class="table-cell">{id}</div>
                    <div class="table-cell">{name}</div>
                    <div class="table-cell">
                        <Buttons.Flat  
                            on:click={()=> goto(`/dashboard/machinery/${id}`)}>
                            Detay
                        </Buttons.Flat>


                        <Buttons.Flat  
                        on:click={()=>handleDeleteMachine(id)}>
                            sil
                        </Buttons.Flat>
                    </div>
                </div>
            {/each}
        </div>
    </div>
 
</section>