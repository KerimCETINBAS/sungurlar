
<script>
import Nav from "./_static/nav.svelte";

import { history } from "$lib/stores/misc"; 
import { beforeNavigate } from "$app/navigation";
    beforeNavigate(({ from, to }) => {
        $history = from.pathname;
    });
</script>

<div class="flex  w-full h-screen">
    <aside class="overflow-y-auto w-64 bg-dark-900">
        <Nav />
    </aside>
    <main  class="overflow-y-scroll flex-1 bg-cool-gray-300">
        <slot />
    </main>
</div>

           