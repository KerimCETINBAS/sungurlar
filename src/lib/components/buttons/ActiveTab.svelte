

<script lang="ts">
    export let disabled: boolean = false
</script>

<button {disabled} 
    class="inline-block px-4 py-2 bg-dark-200 text-cool-gray-300  font-semibold ">
    <slot>Click!</slot>
</button>