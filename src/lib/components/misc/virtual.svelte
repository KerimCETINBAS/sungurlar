<script lang="ts">
    export let selected: boolean = false
</script>

<svg width="18" 
    on:click
    class:selected={selected}
    height="25"  viewBox="0 0 18 41" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.697937 0.247086H17.2297V16.7788H0.697937V0.247086Z" fill="#ECEFF7"/>
    <path d="M17.2297 26.577C17.2297 31.1421 13.5289 34.8428 8.96381 34.8428C4.39869 34.8428 0.697937 31.1421 0.697937 26.577C0.697937 22.0118 4.39869 18.3111 8.96381 18.3111C13.5289 18.3111 17.2297 22.0118 17.2297 26.577Z" fill="#ECEFF7"/>
    <path d="M0.697937 36.3751H17.2297V40.9524H0.697937V36.3751Z" fill="#ECEFF7"/>
    </svg>
    

<style lang="less">
    SVG:hover {
        path {
            @apply fill-pink-200;
        } 
    }


    .selected {
        
        path {
            @apply fill-pink-600;
        }
    }
</style>    