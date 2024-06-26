<script lang="ts">
	import { onMount } from 'svelte';

	import Reveal from 'reveal.js';
	import Markdown from 'reveal.js/plugin/markdown/markdown';
	import Highlight from 'reveal.js/plugin/highlight/highlight';
	import Notes from 'reveal.js/plugin/notes/notes';
	import Mermaid from 'reveal.js-mermaid-plugin/plugin/mermaid/mermaid';
	import { loadDataSrcSVG } from '../plugins/data-src-svg/data-src-svg';

	import 'reveal.js/dist/reveal.css';
	import 'reveal.js/dist/theme/black.css';
	import 'reveal.js/plugin/highlight/monokai.css';

	onMount(() => {
		const deck = new Reveal({
			autoAnimateEasing: 'ease',
			autoAnimateDuration: 1,
			hash: true,
			controls: true,
			progress: true,
			slideNumber: 'c/t',
			plugins: [Markdown, Highlight, Notes, Mermaid]
		});

		deck.initialize();

		deck.on('slidetransitionend', () => {
			// TODO: stop animation instead of reloading file
			loadDataSrcSVG();
		});
	});

	export let title = '';
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div class="reveal">
	<div class="slides">
		<slot />
	</div>
</div>
