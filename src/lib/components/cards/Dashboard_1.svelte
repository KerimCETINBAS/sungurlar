<script lang="ts">
    export let data : {
        header?: string,
        text?: string
    } = {
        header: "Header",
        text: "text"
    }
</script>
<div class="bg-white shadow shadow-lg shadow-lignt-500">
    <h1 class="font-extrabold text-2xl p-6">{data.header}</h1>

    <span class="block mx-6 mb-6 font-semibold text-lg">
        {data.text}
    </span>
</div>