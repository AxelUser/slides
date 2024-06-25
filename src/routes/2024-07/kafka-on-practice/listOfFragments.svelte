<script lang="ts">
	export let items: string[] = [];
	export let ordered = false;
</script>

{#if ordered}
	<ol>
		{#each items as item}
			<li class="fragment text-2xl [&:not(.current-fragment)]:text-gray-300">
				{item}
			</li>
		{/each}
	</ol>
{:else}
	<ul>
		{#each items as item}
			<li class="fragment text-2xl [&:not(.current-fragment)]:text-gray-300">
				{item}
			</li>
		{/each}
	</ul>
{/if}
