<script lang="ts">
	export let code: string;
</script>

<div class="mermaid flex flex-col items-center">
	{`
        %%{init: {'theme': 'dark', 'themeVariables': { 'darkMode': true }}}%%
    `}
	{code}
</div>
