

<script lang="ts">
    import type { HelperType } from "./index";


    
    
    export let type: HelperType =  0
    export let text: string = ""
</script>



{#if text !== ""}
    <span   class="{type ==  0 ? "helper" : "error"}">
        {text}
    </span>
{/if}


<style>
    span.error {
        @apply border-l-4 mt-1 border-red-600 text-red-600  px-2;
    }

    span.helper {
        @apply border-l-4 mt-1 border-gray-900  px-2;
    }
</style>