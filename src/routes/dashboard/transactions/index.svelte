<script lang="ts">
    import Inputs from "$lib/components/inputs";
    import Links from "$lib/components/links"
    
    let searchVal: string = ""
    
</script>
<div class="flex flex-col w-full h-full bg-cool-gray-800">



<section class="w-full  px-12 pt-4 mt-12 pb-12 flex-1 text-white">
    <section class=" sticky top-4">
        <!-- Musteri ara -->
        <Inputs.Text > Ara </Inputs.Text>    
    </section>
    <div class="table table-auto w-full">
        <div class="table-caption">Musteriler</div>
        <div class="table-header-group">
            <div class="table-row">
                <div class="table-cell">#</div>
                <div class="table-cell">Adi</div>
                <div class="table-cell">Soyadi</div>
                <div class="table-cell">Telefon</div>
                <div class="table-cell">Adres</div>
                <div class="table-cell">##</div>
            </div>
        </div>
        <div class="table-row-group">
            <div class="table-row">
                <div class="table-cell">12412</div>
                <div class="table-cell">Kerim</div>
                <div class="table-cell">Cetinbas</div>
                <div class="table-cell">0555 555 55 55</div>
                <div class="table-cell">Alipasa mah</div>
                <div class="table-cell">Duzenle</div>
            </div>
            <div class="table-row">
                <div class="table-cell">12412</div>
                <div class="table-cell">Kerim</div>
                <div class="table-cell">Cetinbas</div>
                <div class="table-cell">0555 555 55 55</div>
                <div class="table-cell">Alipasa mah</div>
                <div class="table-cell">Duzenle</div>
            </div>
            <div class="table-row">
                <div class="table-cell">12412</div>
                <div class="table-cell">Kerim</div>
                <div class="table-cell">Cetinbas</div>
                <div class="table-cell">0555 555 55 55</div>
                <div class="table-cell">Alipasa mah</div>
                <div class="table-cell">Duzenle</div>
            </div>
            <div class="table-row">
                <div class="table-cell">12412</div>
                <div class="table-cell">Kerim</div>
                <div class="table-cell">Cetinbas</div>
                <div class="table-cell">0555 555 55 55</div>
                <div class="table-cell">Alipasa mah</div>
                <div class="table-cell">Duzenle</div>
            </div>
            
        </div>
       
    </div>
</section>
</div>