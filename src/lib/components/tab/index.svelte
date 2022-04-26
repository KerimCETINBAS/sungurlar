<script lang="ts">
    import Buttons from "$lib/components/buttons";
    
    export let tabs: {  
        tab:string,
        component: ConstructorOfATypedSvelteComponent
    }[] = []

    let activeTab = 0

</script>
<!-- hash tab -->
<div class="flex w-full border-dark-400">
    {#each tabs as {tab, component}, index (tab)}
        {#if index == activeTab}
            <Buttons.ActiveTab>
                {tab}
            </Buttons.ActiveTab>
        {:else}
            <Buttons.Primary on:click={()=> activeTab = index}>
                {tab}
            </Buttons.Primary>
        {/if}
    {/each}
</div>

<div class="h-102 bg-dark-200">
    <svelte:component this={tabs[activeTab] && tabs[activeTab].component || null} />
</div>


