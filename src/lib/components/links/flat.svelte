

<script lang="ts">
    enum LinkType {
        primary,
        secondary,
        flat
    }
    export let disabled: boolean = false
    export let link: string = ""
</script>

<a
    href={link}
    {disabled}
    on:click
    class="inline-block px-4 py-2  text-cool-gray-600  font-semibold hover:(text-cool-gray-900 bg-cool-gray-300) duration-300 animate-ease-[cubic-bezier(0.25,0.1,0.25,1)]">
 
    <slot>Click!</slot>
  
</a>