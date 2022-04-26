

<script lang="ts">
    export let disabled: boolean = false
</script>

<button {disabled}
    on:click
    class="inline-block px-4 py-2   bg-cool-gray-700 text-cool-gray-300  hover:(bg-cool-gray-900) duration-300 animate-ease-[cubic-bezier(0.25,0.1,0.25,1)]">
    <slot>Click!</slot>
</button>