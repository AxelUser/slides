<script lang="ts">
	import { base } from '$app/paths';
	import Slide from '$lib/deck/slide.svelte';
	import Slides from '$lib/deck/slides.svelte';
	import ListOfFragments from './listOfFragments.svelte';

	const assetsDir = `${base}/slides/2024-07/kafka-on-practice`;
</script>

<Slides title="Apache Kafka на практике">
	<Slide bgImage="{assetsDir}/title-cover.webp" bgImageOpacity="0.2">
		<div class="text-8xl">Apache Kafka на практике</div>
		<div class="mt-8 text-sm">Алексей Мальцев, @AxelUser</div>
	</Slide>
	<Slide>
		<div class="flex flex-col gap-16">
			<div class="text-8xl">Поговорим</div>
			<div>
				<ListOfFragments
					ordered
					items={[
						'Что такое Apache Kafka',
						'Как работают очереди изнутри и снаружи',
						'Как сервисы пишут и читают сообщения',
						'Какие популярные паттерны интеграции с Apache Kafka',
						'Live demo'
					]}
				/>
			</div>
		</div>
	</Slide>
	<Slide>
		<div>
			<div class="text-8xl">WHOAMI</div>
			<div class="flex gap-48">
				<img class="h-80 w-80 object-contain" src="{assetsDir}/ava-ai.jpg" alt="it's me" />
				<div class="self-center">
					<ListOfFragments
						items={[
							'Senior Software Engineer @ Infobip',
							'4 года работаю с Apache Kafka',
							'Специализируюсь на распределённых системах'
						]}
					/>
				</div>
			</div>
		</div>
	</Slide>
	<Slide bgImage="{assetsDir}/all-about-apache-kafka.webp" bgImageOpacity="0.2">
		<div class="text-8xl">Всё что нужно знать про Apache Kafka</div>
	</Slide>
	<Slide bgImage="{assetsDir}/roach-reading-messages.webp" bgImageOpacity="0.2">
		<div class="flex flex-col justify-center gap-16">
			<div class="text-8xl">Что оно такое?</div>
			<div>
				<ListOfFragments
					items={[
						'Реплицированный распределённый лог сообщений',
						'Сообщения записываются в конец файла, а читаются с начала',
						'Время жизни каждого сообщения ограничено по времени и памяти'
					]}
				/>
			</div>
		</div>
	</Slide>
	<Slide bgImage="{assetsDir}/kafka-cluster-bg.webp" bgImageOpacity="0.2">
		<div class="flex flex-col justify-center gap-16">
			<div class="text-8xl">Кластер Apache Kafka</div>
			<div>
				<ListOfFragments
					items={[
						'Apache Kafka - распределённое приложение',
						'Данные реплицируются и шардируются между узлами',
						'Работа с очередями распределена между узлами'
					]}
				/>
			</div>
		</div>
	</Slide>
	<Slide>
		<Slide bgImage="{assetsDir}/topics-and-partitions-bg.webp" bgImageOpacity="0.2">
			<div class="flex flex-col justify-center gap-16">
				<div class="text-8xl">Топики и Партиции</div>
				<div>
					<ListOfFragments
						items={[
							'Очереди называются топиками (англ. topic)',
							'Партиции - кусочки топика',
							'Партиции и их копии распределены по кластеру ...',
							'... что увеличивает скорость работы с топиками и защищает от потери данных'
						]}
					/>
				</div>
			</div>
		</Slide>
		<Slide bgImage="{assetsDir}/topics-and-partitions-bg.webp" bgImageOpacity="0.2">
			<div class="flex flex-col items-center gap-8">
				<div class="text-8xl">Топики и Партиции</div>
				<div class="h-[66%] w-[66%]">
					<img
						class="h-full w-full object-contain"
						src="{assetsDir}/topics-and-partitions-scheme.webp"
					/>
				</div>
			</div>
		</Slide>
	</Slide>
	<Slide>
		<div class="flex flex-col items-center gap-8">
			<div class="text-8xl">Куда записываются сообщения</div>
		</div>
	</Slide>
</Slides>
