<script lang="ts">
	import FragmentListItem from './FragmentListItem.svelte';

	export let items: string[] = [];
	export let ordered = false;
</script>

{#if ordered}
	<ol>
		{#each items as item}
			<FragmentListItem>
				{item}
			</FragmentListItem>
		{/each}
	</ol>
{:else}
	<ul>
		{#each items as item}
			<FragmentListItem>
				{item}
			</FragmentListItem>
		{/each}
	</ul>
{/if}
