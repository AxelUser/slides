<script lang="ts">
	const pageModules = import.meta.glob('./**/*+page.svelte');
	const urls = Object.keys(pageModules).map((item) => item.replace('/+page.svelte', ''));
	console.log(urls);
</script>

{#each urls as url}
	<a href={url}> {url} </a>
{/each}
