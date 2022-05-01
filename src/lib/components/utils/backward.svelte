<script lang="ts">
import { goto } from "$app/navigation";
    import { writable } from 'svelte/store';
    import { history } from "$lib/stores/misc"
    import Buttons from "$lib/components/buttons"

    const handleBackward = () => {
        goto($history)
    }
</script>
<div class="m-6 ml-12">
    <Buttons.Secondary on:click={handleBackward}> 	&lt; Geri</Buttons.Secondary>
</div>