<script lang="ts">

import Dropdown from "./dropdown.svelte";
import {clickOutside} from "$lib/helpers/clickOutside"

let lists = [
    false,
    false,
    false
]


</script>

<div class=" flex gap-0 flex-row  shadow-md shadow-dark-30  overflow-visible ">
    <div class="inner-container-left  ">
        <div class="pl-3  w-[90%] p-2 flex flex-row items-center justify-between z-1" >

            <div>
                <h2>Makina</h2>
                <small>Kombine bicerdover</small>
            </div>
         

            <div use:clickOutside={()=>lists[0] = false}>
                <span  
                class="collapser"
                    on:click={()=> lists[0] = !lists[0]} ><i class="fa-solid fa-chevron-down w-full h-full"></i></span>
                <Dropdown open={lists[0]}  />
            </div>

       </div>
    </div>



    <div class="inner-container-center shadow shadow-lg">
        <div class="ml-[5%]  w-[90%] p-2 flex flex-row items-center  justify-between">
            <div>
                <h2>Makina</h2>
                <small>Kombine bicerdover</small>
            </div>
            <div use:clickOutside={()=>lists[1]=false}>
                <span  
                class="collapser"
                    on:click={()=>lists[1]= !lists[1]} ><i class="fa-solid fa-chevron-down w-full h-full"></i></span>
                <Dropdown open={lists[1]}  />
            </div>
       </div>

    </div>



    <div class="inner-container-right">
        <div class="ml-[5%] w-[90%]  p-2 flex flex-row items-center  justify-between">
            <div>
                <h2>Makina</h2>
                <small>Kombine bicerdover</small>
            </div>
                 <div use:clickOutside={()=>lists[2]=false}>
                <span  
                class="collapser"
                    on:click={()=> lists[2] = !lists[2]} ><i class="fa-solid fa-chevron-down w-full h-full"></i></span>
                <Dropdown open={lists[2]}  />
            </div>
       </div>
    </div>


</div>


<style lang="less">
         .inner-container-left {
       
       @apply w-full  h-16    bg-light-50  relative shadow shadow-lg; 
            &::after {
                content: "";
                clip-path:polygon(0 0, 50% 0, 100% 100%, 50% 100%);
                @apply bg-[#E5E5E5] w-8 h-full -right-4 top-0 absolute;
            }
       }

       .inner-container-center {
       
       @apply p-0 m-0  w-full h-16 bg-light-50  relative shadow shadow-lg;
            &::before {
                content: "";
                @apply bg-[#E5E5E5] w-8 h-full -left-4 top-0 absolute;
                clip-path: polygon(0 0, 50% 0, 100% 100%, 50% 100%);
            }

            &::after {
                content: "";
                clip-path:polygon(0 0, 50% 0, 100% 100%, 50% 100%);
                @apply bg-[#E5E5E5] w-8 h-full -right-4 top-0 absolute;
            }
       }

       .inner-container-right {
       
        @apply w-full  h-16    bg-light-50  relative shadow shadow-lg; 
            &::before {
                    content: "";
                    @apply bg-[#E5E5E5] w-8 h-full -left-4 top-0 absolute;
                    clip-path: polygon(0 0, 50% 0, 100% 100%, 50% 100%);
                }
       }

    
</style>