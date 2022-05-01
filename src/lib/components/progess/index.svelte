
<script lang="ts">

    export let progress:number  = 0;
    export let color: number = 0;


   
</script>

<div class="w-full h-5 bg-cool-gray-300 p-1">
    <div id="indicator" class={`w-[${progress}%] bg-gradient-${color}  h-3 bg-red-500`}  >

    </div>
</div>


