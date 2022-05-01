
<script lang="ts">
     export let orientation: "vertical" | "horizontal" = "horizontal"
</script>

<li class="flex w-full key-list "
    class:flex-col={orientation == "vertical"}
    class:flex-row={orientation == "horizontal"}
>
    <slot />
</li>


<style lang="less">
    :global(.key-list ){
        @apply border-2 border-gray-400;
        & + .key-list {
            @apply border-t-transparent;
        }
    }
</style>