<script lang="ts">
    import Inputs from "$lib/components/inputs"
    import Buttons from "$lib/components/buttons"
    import Primary from  "$lib/components/buttons/primary.svelte"
    import { Helper, HelperType } from "$lib/components/inputs";
    const HandleAddCustomer: ()=> void = () => {

    }
</script>
<section class="p-12 bg-cool-gray-50 h-full">

        
    <div>
           
        <div class="flex flex-row gap-6">
           <div>
            <Inputs.Text>Adi</Inputs.Text>
           </div>
           <div>
            <Inputs.Text>Soyadi</Inputs.Text>
           </div>
        </div>
    </div>

    <div>
           
        <div class="flex flex-row gap-6">
           <div>
            <Inputs.Text>Telefon</Inputs.Text>
           </div>
           <div>
            <Inputs.Text>Eposta</Inputs.Text>
           </div>
        </div>
    </div>
        
    <div>
        
        <div class="flex flex-row gap-6">
            <div>
                <Inputs.Text>Sehir</Inputs.Text>
            </div>
            <div>
                <Inputs.Text>Mahalle</Inputs.Text>
            </div>
            <div>
                <Inputs.Text>Cadde/sok</Inputs.Text>
            </div>
            <div>
                <Inputs.Text>no</Inputs.Text>
            </div>
            <div>
                <Inputs.Text>apt/daire</Inputs.Text>
            </div>
        </div>
    </div>
    

    <div class="mt-6">
        <Buttons.Primary> Kaydet </Buttons.Primary>
    </div>


    <div class="mt-6">
        <Helper text="Kaydediliyor lutfen bekleyiniz" type={HelperType.Helper}></Helper>
    </div>
</section>