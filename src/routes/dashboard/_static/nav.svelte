<script>
    import { page } from '$app/stores';
import Backward from '$lib/components/utils/backward.svelte';

</script>

<header>
    
    <div class="h-42">
    <Backward/>
    </div>
    <nav class="w-full">
        <ul class="p-4 flex flex-col gap-1">
            <li><a href="/dashboard">Dashboard</a></li>
            <li><a href="/dashboard/machinery">Makina</a>  </li>
            <li><a href="/dashboard/manufacturer">Uretici</a></li>
            <li><a href="/dashboard/transactions">Faturalar</a></li>
            <li><a href="/dashboard/customers">Musteriler</a></li>
            <li><a href="/dashboard/invertory">Envanter</a></li>
            <li><a href="/dashboard">Site ayarlar</a></li>
        </ul>
    </nav>
</header>


<style lang="less">
    nav {
        ul {
            
            li {
                @apply inline-block text-white bg-dark-400 p-2 w-full;
                a {
                    
                 
                }
            }
        }
    }
</style>