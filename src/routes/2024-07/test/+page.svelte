<script lang="ts">
	import Markdown from '$lib/deck/markdown.svelte';
	import Notes from '$lib/deck/notes.svelte';
	import Slide from '$lib/deck/slide.svelte';
	import Slides from '$lib/deck/slides.svelte';
</script>

<Slides>
	<Slide>Slide 1</Slide>
	<Slide>
		<Slide animate>
			<h1>Vertical slide 1</h1>
			<Notes>Some notes about vertical slide</Notes>
		</Slide>
		<Slide animate>Vertical slide 2</Slide>
	</Slide>
	<Markdown name="/markdown/2024-07/test.md" />
</Slides>
