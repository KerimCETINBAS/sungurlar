<script lang="ts">
    import Inputs from "$lib/components/inputs";
    import Links from "$lib/components/links"
    
    let searchVal: string = ""
    
</script>
<div class="flex flex-col w-full h-full bg-cool-gray-800">

<section class="p-12 ">
    <!-- Musteri ekle -->
    <Links.Primary link="/dashboard/customers/add" > Musteri ekle </Links.Primary>
</section>

<section class="w-full  px-12 pt-4 pb-12 flex-1 text-white">
    <section class=" sticky top-4">
        <!-- Musteri ara -->
        <Inputs.Text > Ara </Inputs.Text>    
    </section>
    <div class="table table-auto w-full">
        <div class="table-caption">Enventar</div>
        <div class="table-header-group">
            <div class="table-row">
                <div class="table-cell">#</div>
                <div class="table-cell">no</div>
                <div class="table-cell">parca adi</div>
                <div class="table-cell">stok</div>
                <div class="table-cell">##</div>
            </div>
        </div>
        <div class="table-row-group">
            <div class="table-row">
                <div class="table-cell">12412</div>
                <div class="table-cell">00012</div>
                <div class="table-cell">Trigger</div>
                <div class="table-cell">10</div>
                <div class="table-cell">Duzenle</div>
            </div>
           
            
        </div>
       
    </div>
</section>
</div>