
<script lang="ts">
    export let orientation: "vertical" | "horizontal" = "horizontal"
    export let fallout: string = "nothing to show"
    export let background: string= "#ddd"
    export let caption: string="Baslik buraya gelecek"
</script>


<div   style:background  class="w-full shadow shadow-lg p-4">
    <h4 class="py-2 font-semibold text-lg">
        {caption}
    </h4>
    <ul 
    class="flex table border-collapse w-full"
    class:flex-col={orientation == "vertical"}
    class:flex-row={orientation == "horizontal"}
 
    >
        
        <slot>
            {fallout}
        </slot>
    </ul>
</div>


