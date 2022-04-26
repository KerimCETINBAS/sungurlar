
<script lang="ts">
    export let img : { url: string, alt: string} = {url: "", alt: ""}
    export let description = ""
    export let header = "Biçer döver yedek parçaları"
    export let manufacturers = ["CLAAS", "JHON DEERE", "NEW HOLLAND"]
</script>
<div class="w-full h-50 bg-[#2F3F6D]">
    <h2 class="p-4 text-2xl font-bold items-center text-light-700">{header}</h2>
    <div class="flex flex-row m-4">
        <img src={img.url} class="w-20" alt={img.alt}>
        <p class="ml-4 text-light-700">
            {description}
        </p>
    </div>
    <div class="flex flex-row gap-4 mx-4">
        {#each manufacturers as manufacturer}
            <span class="bg-[#C19B1A] p-1">{manufacturer}</span>
        {/each}

        <div class="flex-1 "></div>
        <a href="/" class="text-light-900">Daha fazla</a>
    </div>
</div>