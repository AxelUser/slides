<script lang="ts">
	import SocialIcons from '@rodneylab/svelte-social-icons';

	const links = [
		{
			network: 'github',
			title: 'github.com/AxelUser'
		},
		{
			network: 'telegram',
			title: 't.me/AxelUser'
		}
	];
</script>

<div class="flex flex-col items-center">
	<div class="mt-10 text-lg">
		Алексей Мальцев, <a class="!text-orange-400" href="https://www.maltsev.space/" target="_blank">
			maltsev.space
		</a>
	</div>
	<div class="mt-4 flex flex-col items-start gap-6">
		{#each links as link}
			<a class="flex items-start gap-4" href="https://github.com/AxelUser" target="_blank">
				<SocialIcons
					network={link.network}
					fgColor="#111111"
					bgColor="#eeeeee"
					width="32"
					height="32"
				/>
				<span class="!my-auto text-base">{link.title}</span>
			</a>
		{/each}
	</div>
</div>
