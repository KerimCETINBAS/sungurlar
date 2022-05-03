<script lang="ts">
    import Inputs from "$lib/components/inputs"
    import Buttons from "$lib/components/buttons"
    let addMachine: boolean = false
    export let machineries: any[]  = []
    
    export let machineName = ""
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
</script>

<div class="flex gap-2 mb-4 bg-cool-gray-600 p-6">
    {#if !addMachine}
        <Inputs.Text bind:value={machineName}> Makine adi </Inputs.Text>
        <Buttons.Primary on:click={handleAddMachine}>Makine ekle</Buttons.Primary>
    {:else}
        <small>Ekleniyor lutfen bekleyiniz</small>
    {/if}
</div>