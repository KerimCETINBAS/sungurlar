

<script lang="ts">
    export let disabled: boolean = false
    export let link: string = ""
</script>

<a
    href={link}
    {disabled}
    on:click
    class="inline-block px-4 py-2   bg-cool-gray-400 font-semibold text-cool-gray-900  hover:(bg-cool-gray-600 text-cool-gray-50) duration-300 animate-ease-[cubic-bezier(0.25,0.1,0.25,1)]">
    <slot>Click!</slot>
</a>