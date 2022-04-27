<script>
    import { page } from '$app/stores';
    import { detail } from '$lib/stores/params';

</script>

<header>
    
    <div class="h-42">

    </div>
    <nav class="w-full">
        <ul class="p-4 flex flex-col gap-1">
            <li><a href="/dashboard">Dashboard</a></li>
            <li><a href="/dashboard/machinery">Makina</a>
                <ul class="pl-4">
                    {#if /\/dashboard\/machinery\/\d/.test($page.url.pathname)}
                         <li ><a href="/dashboard/machinery/{$page.params.id}">{$detail}</a></li>
                    {/if}
                </ul>
            </li>
            <li><a href="/dashboard">Gider</a></li>
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