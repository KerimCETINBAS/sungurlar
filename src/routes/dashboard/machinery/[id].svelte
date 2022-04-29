
<script lang="ts" context="module" >

    import type { Load } from "@sveltejs/kit";
    export const load: Load = async ({fetch, params}) => {
        const {_id, name , models } = await fetch("/api/machinery/" + params.id, { method: "get"}).then(data=> data.json())

        
        return {
           props: {
            _id, name, models
           }
        }
    }
</script>

<script lang="ts">
    import { goto } from "$app/navigation";
    import Buttons from "$lib/components/buttons"
    import Inputs from "$lib/components/inputs"

</script>



<section class="p-12">
    <h2 class="text-white mb-4">Yeni model ekle</h2>
    
 
</section>

<section class="p-12">
    <div class="table table-auto w-full">
        <div class="table-caption">Modeller</div>
        <div class="table-header-group">
            <div class="table-row">
                <div class="table-cell">#</div>
                <div class="table-cell">Model</div>
                <div class="table-cell">##</div>
            </div>
        </div>
        <div class="table-row-group">
          
                <div class="table-row">
                    <div class="table-cell">id</div>
                    <div class="table-cell">name</div>
                    <div class="table-cell">
                   
                   
                    </div>
                </div>
       
        </div>
    </div>
 
</section>