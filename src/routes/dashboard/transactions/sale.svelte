
<script>
    import Input from "$lib/components/inputs"
    import Buttons from "$lib/components/buttons"
import Primary from "$lib/components/buttons/primary.svelte"
</script>
<section class="p-12">
    <div>
       <div class="flex gap-6">
        <Input.Text > Musteri  </Input.Text>
        <Input.Text > Alinan ucret  </Input.Text>
       </div>

        <div id="customers">
            <ul>
                <li> <button>Kerim cetinbas</button> </li>
                <li> <button>Berkay sungur</button></li>
                <li> <button>Emrah ipek</button></li>
            </ul>
        </div>
    </div>

    <div class="flex flex-row gap-6 mt-6 ">
       <div> <Input.Text> Parca </Input.Text></div> 
       <div class="h-full border-b-4 border-cool-gray-900">
           <input type="number" class="h-11 pl-2  w-11" value="1">
       </div>
       <Buttons.Primary> Ekle </Buttons.Primary>
       
      
    </div>
    <div id="parts">
        <ul>
            <li> <button>Kerim cetinbas</button> </li>
            <li> <button>Berkay sungur</button></li>
            <li> <button>Emrah ipek</button></li>
        </ul>
    </div>
</section>

<section class="m-12 p-4  bg-white">
    <div class="table table-auto w-full">
        <div class="table-caption">Urunler</div>
        <div class="table-header-group">
            <div class="table-row">
                <div class="table-cell">Parca</div>
                <div class="table-cell">No</div>
                <div class="table-cell">adet</div>
                <div class="table-cell">#</div>
            </div>
        </div>
        <div class="table-row-group">
            <div class="table-row">
                <div class="table-cell">Balata</div>
                <div class="table-cell">-1</div>
                <div class="table-cell">1</div>
                <div class="table-cell"><button>cikar</button> <button>guncelle</button></div>
            </div>
            <div class="table-row">
                <div class="table-cell">Balata</div>
                <div class="table-cell">-1</div>
                <div class="table-cell">1</div>
                <div class="table-cell"><button>cikar</button> <button>guncelle</button></div>
            </div>
          
   
            
        </div>
       
    </div>

   
</section>

<section class="p-12 pt-4">
    <Buttons.Primary>Satis yap</Buttons.Primary>
</section>

<style lang="less">
    #customers, #parts {
        ul {
            li button {
                @apply p-1 bg-white w-52 text-left mt-2;
            }
        }
    }
</style>