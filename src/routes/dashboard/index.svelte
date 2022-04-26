
<script>
    import Cards from "$lib/components/cards"
</script>


<section class="flex flex-col w-full  p-12">
    <caption class="w-full text-left mb-4 text-3xl font-bold text-light-400">varliklar</caption>
   <!-- site istatistikleri-->

   <div  class="grid grid-cols-4 gap-12">
        <Cards.Dashboard_1 data={{header: "Servet", text: "31242"}} />
        <Cards.Dashboard_1 data={{header: "Kasa", text: "21242"}} />
        <Cards.Dashboard_1 data={{header: "Alacak", text: "11242"}} />
   </div>
</section>



<section class="flex flex-col w-full p-12">
    <caption class="w-full text-left mb-4 text-3xl font-bold text-light-400">Envanter</caption>
   <!-- site istatistikleri-->

   <div  class="grid grid-cols-4 gap-12 ">
        <Cards.Dashboard_1 data={{header: "Toplam girdi", text: "31242"}} />
        <Cards.Dashboard_1 data={{header: "Marka", text: "21242"}} />
        <Cards.Dashboard_1 data={{header: "Katagori", text: "11242"}} />
    </div>
 </section>



 <section class="flex flex-col w-full p-12">
     <caption class="w-full text-left mb-4 text-3xl font-bold text-light-400">site istatistikleri</caption>
    <!-- site istatistikleri-->
 
    <div  class="grid grid-cols-4 gap-12 ">
        <Cards.Dashboard_1 data={{header: "Toplam ziyaretci", text: "31242"}} />
        <Cards.Dashboard_1 data={{header: "Bu ay", text: "21242"}} />
        <Cards.Dashboard_1 data={{header: "Bu hafta", text: "11242"}} />
        <Cards.Dashboard_1 data={{header: "Bu gun", text: "11242"}} />
    </div>
 </section>