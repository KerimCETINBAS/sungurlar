<script>


</script>

<nav class="flex flex-col w-full bg-dark-800 ">
    
    <div class="container mx-auto my-2">
        <ul class="flex gap-4">
            <li class="menu-item">
                <i class="fa-solid fa-sitemap"></i>
                <span class="tooltip w-30">Site haritasi</span>
            </li>

            <li class="menu-item">
                <i class="fa-brands fa-facebook-f"></i>
                <span class="tooltip w-45">Facebookta biz</span>
            </li>
           

            <li class="menu-item">
                <i class="fa-solid fa-box"></i>
                <span class="tooltip w-45">Urunler</span>
            </li>

            <li class="menu-item">
                <i class="fa-solid fa-book"></i>
                <span class="tooltip w-45">Dokumanlar</span>
            </li>

            
            <li class="flex-1"></li>
            <li class="w-9 ">
                <img src="/tr.png"  alt="">
            </li>
            <li class="w-9 ">
                <img src="/usa.png"  alt="">
            </li>
            <li class="w-9 ">
                <img src="/bul.png"  alt="">
            </li>

            <li>
                <select class="bg-transparent text-lg mt-.5 font-bold text-cool-gray-300" name="" id="">
                    <option value="">
                        <span>  &#8378; </span>TL
                    </option>
                    <option value="">
                    
                        <span>  € EUR</span>
                    </option>
                    <option value="">
                        <span>  $ USD</span>
                    
                    </option>
                </select>
            </li>
        
            <li class="menu-item">
                <i class="fa-solid fa-user"></i>
                <span class="text-semibold text-cool-gray-300">Muşteri</span>
            </li>


            
        </ul>
    </div>
</nav>
<header class=" bg-[#E5E5E5] py-4  w-full ">
    <div class="container mx-auto flex flex-row justify-between">
        <div >
         <a href="/">
            <img src="/logov3.svg" class="h-14" alt=""></a>
        </div>
        <div class="flex-1"></div>
        <div>
            <label  class="flex" >
                <i class="fa fa-search bg-white h-10 flex items-center justify-center px-2"></i>
                <input type="text" class="w-102 h-10 px-4 font-semibold outline-transparent">
            </label>
     
        </div>

    </div>
    
   
</header>



<style lang="less">

    .menu-item {
        @apply  relative;
         
        span.tooltip {
            @apply invisible absolute -bottom-10  text-cool-gray-300 bg-cool-gray-700 delay-200  ease-out p-2;
        }
        i {
            @apply   cursor-pointer text-cool-gray-300 text-2xl;
            &:hover + span.tooltip{
                @apply inline-block bg-opacity-70 visible ;
            }
        }
       
    }
</style>