<script lang="ts">
	export let name: string | null = null;
</script>

{#if name != null}
	<section data-markdown={name} />
{:else}
	<section data-markdown>
		<div data-template>
			<slot />
		</div>
	</section>
{/if}
