
<script lang="ts">
    import 'virtual:windi.css'
    import 'virtual:windi-devtools'

    import  Input from '../lib/components/inputs/index';
    import Nav from "./_static/nav.svelte"
    import Buttons from '$lib/components/buttons';
    import Links from "$lib/components/links"
    import Footer from './_static/footer.svelte';
    import Drawer from './_static/drawer.svelte';
</script>
    
    <!-- 
    side draver -->
    <Drawer />
   
    <Nav />
  
    
    <main class="bg-[#E5E5E5]">
            <slot />
    </main>

    <Footer />


    <style>
        
    </style>