
<script>
import Nav from "./_static/nav.svelte";

    
</script>

<div class="flex  w-full h-screen">
    <aside class="overflow-y-auto w-64 bg-dark-900">
        <Nav />
    </aside>
    <main  class="overflow-y-scroll flex-1 bg-cool-gray-800">
        <slot />
    </main>
</div>

           