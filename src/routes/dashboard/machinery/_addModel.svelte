<script lang="ts">
    import Inputs from "$lib/components/inputs"
    import Buttons from "$lib/components/buttons"
    let addMachine: boolean = false
    
    export let name = ""
    // add a machinery
    export let handler: (name:string) => (void | Promise<void>)

</script>

<div class="flex gap-2 mb-4 bg-cool-gray-600 p-6">
    {#if !addMachine}
        <Inputs.Text bind:value={name}> Makine adi </Inputs.Text>
        <Buttons.Primary on:click={()=>handler(name)}>Makine ekle</Buttons.Primary>
    {:else}
        <small>Ekleniyor lutfen bekleyiniz</small>
    {/if}
</div>