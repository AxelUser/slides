<script lang="ts">
	const presentations = [
		{
			title: 'Кафка на практике',
			url: './2024-07/kafka-on-practice'
		}
	];
</script>

<div class="mx-auto my-10 grid size-2/3 grid-cols-3 space-x-10">
	{#each presentations as p}
		<div class="flex h-[200px] w-[300px] flex-col bg-gray-400">
			<a class="m-auto block text-2xl" href={p.url}> {p.title} </a>
		</div>
	{/each}
</div>
