<script lang="ts">
	export let id: string | null = null;
	export let animate = false;
	export let restart = false;
	export let bgImage: string | null = null;
	export let bgImageSize: string | null = null;
	export let bgImagePos: string | null = null;
	export let bgImageOpacity: string | null = null;
</script>

<section
	data-auto-animate-id={id}
	data-auto-animate={animate || null}
	data-auto-animate-restart={restart || null}
	data-background-image={bgImage}
	data-background-size={bgImageSize}
	data-background-position={bgImagePos}
	data-background-opacity={bgImageOpacity}
>
	<slot />
</section>
