
<script lang="ts">
import { goto } from "$app/navigation";
import Buttons from "$lib/components/buttons"
import { detail } from "$lib/stores/params";


    export let id
    export let name
    export let models: any[] = []


    $detail = name
</script>





<section class="p-12">
    <div class="table table-auto w-full">
        <div class="table-caption">Enventar</div>
        <div class="table-header-group">
            <div class="table-row">
                <div class="table-cell">#</div>
                <div class="table-cell">Makina adi</div>
                <div class="table-cell">##</div>
            </div>
        </div>
        <div class="table-row-group">
            {#each models as {id, name} (id) }
                <div class="table-row">
                    <div class="table-cell">{id}</div>
                    <div class="table-cell">{name}</div>
                    <div class="table-cell">
                        <Buttons.Flat  
                            on:click={()=> goto(`/dashboard/model/${id}`)}>
                            Detay
                        </Buttons.Flat>
                    </div>
                </div>
            {/each}
        </div>
    </div>
 
</section>