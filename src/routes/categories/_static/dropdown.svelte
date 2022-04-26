
<script lang="ts" >
    export let open= false

   
</script>


{#if open}
    <div class="dropdown" >
        <div class=" p-3 sticky top-0 z-10">
            <label class="flex items-center bg-white outline-transparent p-1" > 
                <i class="fa fa-search"></i> 
                <input type="text" class="w-full p-1 bg-white ">
            </label> 
        </div>
        <ul class="w-full relative  list-inside ">
        
            {#each Array(20) as _, i (i)}
                <li class="drop-item">
                    <small class="font-light text-xs">{i}</small>
                </li>
            {/each}
        </ul>
    </div>
{/if}
<style lang="less">
       .dropdown {
           @apply  absolute left-0  -bottom-34 w-full h-34 bg-[#E5E5E5] z-99 overflow-y-hidden;

           &:hover {
               @apply overflow-y-scroll;
           }
           &::-webkit-scrollbar {
            width: 10px;
            
          }

          &::-webkit-scrollbar-track {
            background: #dcdcdc;
            }

            &::-webkit-scrollbar-thumb {
            background: #888;
            }

            ul {
                .drop-item {
                    @apply list-square p-0.2 px-4;
                    &:hover {
                        color: #C19B1A;
                        background: #dcdcdc;
                    }
                }
            }
       }
</style>