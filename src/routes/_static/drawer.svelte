<script>
    import {page } from "$app/stores"

  
</script>

{#if !$page.url.pathname.startsWith("/dashboard")}
    <div id="drawer" class=" top-[calc(50%-208px)]">
            
        <span class="bg-green-500 w-8 h-8 flex rounded-1 justify-center items-center">
            <i class="fab fa-whatsapp text-white text-xl"></i>
        </span>
        <span class="w-8 h-8">
            <i class="fa-solid fa-diagram-project text-white text-xl"></i>
        </span>
    </div>
{/if}



<style lang="less">
    #drawer {
        @apply fixed w-12 h-32 flex flex-col items-center justify-evenly  right-0 z-100 rounded-tl-2xl rounded-bl-2xl bg-dark-400 bg-opacity-80;
     
    }
</style>