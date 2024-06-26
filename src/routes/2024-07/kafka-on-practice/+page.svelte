<script lang="ts">
	import { base } from '$app/paths';
	import Slide from '$lib/deck/slide.svelte';
	import Slides from '$lib/deck/slides.svelte';
	import FragmentListItem from './FragmentListItem.svelte';
	import ListOfFragments from './ListOfFragments.svelte';

	const assetsDir = `${base}/slides/2024-07/kafka-on-practice`;
</script>

<Slides title="Apache Kafka на практике">
	<Slide bgImage="{assetsDir}/title-cover.webp" bgImageOpacity="0.1">
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
	<Slide bgImage="{assetsDir}/all-about-apache-kafka.webp" bgImageOpacity="0.1">
		<div class="text-8xl">Всё что нужно знать про Apache Kafka</div>
	</Slide>
	<Slide bgImage="{assetsDir}/roach-reading-messages.webp" bgImageOpacity="0.1">
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
	<Slide bgImage="{assetsDir}/kafka-cluster-bg.webp" bgImageOpacity="0.1">
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
		<Slide bgImage="{assetsDir}/topics-and-partitions-bg.webp" bgImageOpacity="0.1">
			<div class="text-8xl">Топики и Партиции</div>
			<div class="m-10">
				<ListOfFragments
					items={[
						'Очереди называются топиками (англ. topic)',
						'Партиции - кусочки топика',
						'Партиции и их копии распределены по кластеру ...',
						'... что увеличивает скорость работы с топиками и защищает от потери данных'
					]}
				/>
			</div>
		</Slide>
		<Slide animate bgImage="{assetsDir}/topics-and-partitions-bg.webp" bgImageOpacity="0.1">
			<div class="text-6xl">Топики и Партиции</div>
			<div class="mx-auto h-[66%] w-[66%]">
				<img
					class="h-full w-full object-contain"
					src="{assetsDir}/topics-and-partitions-scheme.webp"
					alt="topics and partitions scheme"
				/>
			</div>
		</Slide>
	</Slide>
	<Slide>
		<Slide>
			<div class="text-8xl">Куда записываются сообщения</div>
			<div class="m-10">
				<ListOfFragments
					items={['Сообщения хранятся в партициях топика', 'Упорядочены только в рамках партиции']}
				/>
			</div>
		</Slide>
		<Slide>
			<div class="text-4xl">Куда записываются сообщения</div>
			<div class="m-10 mx-auto flex flex-col items-center">
				<svg data-src="{assetsDir}/messages-in-partition-anim.svg"> </svg>
			</div>
		</Slide>
	</Slide>
	<Slide>
		<div class="text-8xl">Структура сообщения</div>
		<table class="!mt-10 table-fixed text-xl">
			<tbody>
				{#each [{ name: 'Контент', desc: 'Произвольное значение, например JSON, XML или Protobuf' }, { name: 'Заголовки', desc: 'Ключ - значение, содержат метаданные о сообщении' }, { name: 'Ключ сообщения', desc: 'Используется для определения партиции' }, { name: 'Offset', desc: 'Порядковый номер сообщения' }, { name: 'Время сообщения', desc: 'Задаётся на клиенте или самой Apache Kafka' }] as cell}
					<tr class="fragment bg-black bg-opacity-5 [&:not(.current-fragment)]:text-gray-400">
						<td class="!border-b-0">{cell.name}</td>
						<td class="!border-b-0 !pl-10">{cell.desc}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</Slide>
	<Slide>
		<Slide>
			<div class="text-8xl">Ключ сообщения и балансировка</div>
			<div class="mx-auto mt-10 h-[66%] w-[66%]">
				<img
					class="h-full w-full object-contain"
					src="{assetsDir}/consistent-partitioning-by-key.png"
					alt="example of how bad key can overflow partition"
				/>
			</div>
		</Slide>
		<Slide>
			<div class="text-8xl">Плохой ключ</div>
			<div class="mx-auto mt-10 h-[66%] w-[66%]">
				<img
					class="h-full w-full object-contain"
					src="{assetsDir}/bad-partition-ballancing.png"
					alt="example of how bad key can overflow partition"
				/>
			</div>
		</Slide>
		<Slide>
			<div class="text-8xl">Хороший ключ</div>
			<div class="mx-auto mt-10 h-[66%] w-[66%]">
				<img
					class="h-full w-full object-contain"
					src="{assetsDir}/good-partition-ballancing.png"
					alt="example of good message key and even distribution"
				/>
			</div>
		</Slide>
		<Slide>
			<div class="text-8xl">Кто находит партицию</div>
			<div class="m-10">
				<ListOfFragments
					items={[
						'Клиент считает хеш от ключа для выбора партиции',
						'Если ключа нет - по порядку перебирает партиции'
					]}
				/>
			</div>
		</Slide>
		<Slide>
			<div class="text-8xl">Отправка в несколько партиций</div>
			<div class="mx-auto mt-10 h-[66%] w-[66%]">
				<img
					class="h-full w-full object-contain"
					src="{assetsDir}/message-broadcasting.png"
					alt="sending all messages to all partitions"
				/>
			</div>
		</Slide>
	</Slide>
	<Slide>
		<div class="text-8xl">Offset сообщения</div>
		<div class="m-10">
			<ul>
				<FragmentListItem>Порядковый номер начиная с нуля и далее по возрастанию</FragmentListItem>
				<FragmentListItem
					><span class="text-red-500">Не уникален</span> в рамках одного и того же топика</FragmentListItem
				>
				<FragmentListItem
					>Партиция + Offset = <span class="wiggle-text text-yellow-400">Уникальность</span
					></FragmentListItem
				>
			</ul>
		</div>
	</Slide>
	<Slide>
		<Slide>
			<div class="text-6xl">
				Когда сообщения <span class="fadeout-text" data-text="исчезают">исчезают</span>
			</div>
			<div class="mt-10 flex flex-row justify-center space-x-10">
				<div class="fragment flex w-2/6 flex-col items-center">
					<img
						class="block h-full w-full object-contain"
						src="{assetsDir}/old-message.webp"
						alt="old message"
					/>
					<div class="text-3xl">Слишком старые</div>
				</div>
				<div class="fragment flex w-2/6 flex-col items-center">
					<img
						class="block h-full w-full object-contain"
						src="{assetsDir}/partition-overflowed-with-messages.webp"
						alt="partition full"
					/>
					<div class="text-3xl">Партиция заполнилась</div>
				</div>
			</div>
		</Slide>
		<Slide animate>
			<div class="text-6xl">
				Когда сообщения <span class="opacity-5" data-text="исчезают">исчезают</span>
			</div>
			<div class="mt-10 flex flex-row justify-center space-x-20">
				<img
					class="!mt-0 block w-2/6 object-contain"
					src="{assetsDir}/topic-partition-segment.webp"
					alt="three cats meme"
				/>
				<ul class="">
					<FragmentListItem>
						Партиция делится на один активный сегмент и ряд неактивных сегментов
					</FragmentListItem>
					<FragmentListItem>Аквивный открыт для записи</FragmentListItem>
					<FragmentListItem>Неактивный открыт только для чтения</FragmentListItem>
					<FragmentListItem
						>Apache Kafka удаляет релевантные <span class="text-red-500">неактивные</span> сегменты</FragmentListItem
					>
				</ul>
			</div>
		</Slide>
	</Slide>

	<Slide>
		<div class="text-8xl">Чтение сообщений</div>
	</Slide>
</Slides>

<style>
	.wiggle-text {
		display: inline-block;
		animation: wiggle 1s ease-in-out infinite;
	}

	@keyframes wiggle {
		0%,
		100% {
			transform: rotate(-3deg) translateX(-2px);
		}
		25% {
			transform: rotate(3deg) translateX(2px);
		}
		50% {
			transform: rotate(-3deg) translateX(-2px);
		}
		75% {
			transform: rotate(3deg) translateX(2px);
		}
	}

	@keyframes fade-out {
		0% {
			opacity: 1;
		}
		100% {
			opacity: 0.05;
		}
	}

	:global(.present) .fadeout-text {
		animation: fade-out 4s forwards;
	}
</style>
