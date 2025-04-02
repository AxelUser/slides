<script>
	import Notes from '$lib/deck/notes.svelte';
	import Slide from '$lib/deck/slide.svelte';

	export let assetsDir = '';
	export let defaultBgOpacity = '0.5';
</script>

<Slide bgImage="{assetsDir}/intro_bg.jpg" bgImageOpacity={defaultBgOpacity}>
	<Slide>
		<div class="flex h-full items-center justify-center">
			<div class="text-7xl font-bold">Введение</div>
		</div>
		<Notes>
			Начнем с введения, в котором познакомимся с основными понятиями Apache Kafka и рассмотрим её
			роль в современных системах.
		</Notes>
	</Slide>

	<Slide>
		<div class="flex flex-col items-center">
			<div class="mb-12 text-5xl font-semibold">Что такое Apache Kafka</div>
			<ul class="w-4/5 space-y-6">
				<li class="text-2xl">Высокопроизводительная система очередей сообщений</li>
				<li class="text-2xl">Центральный узел обмена событиями между сервисами</li>
				<li class="text-2xl">Надёжное хранение и масштабируемость</li>
			</ul>
		</div>
		<Notes>
			Apache Kafka — это высокопроизводительная система очередей сообщений с упрощённой моделью
			хранения (append-only log). Она берёт на себя роль центрального «транзитного узла» для обмена
			событиями между сервисами. Как отмечалось в предыдущем вебинаре, Kafka обеспечивает
			гарантированное хранение (благодаря репликации) и гибко масштабируется, разбивая данные на
			партиции.
		</Notes>
	</Slide>

	<Slide>
		<div class="flex flex-col items-center">
			<div class="mb-12 text-5xl font-semibold">Роль в современных системах</div>
			<ul class="w-4/5 space-y-6">
				<li class="text-2xl"><strong>Платформа потоковой передачи</strong> для микросервисов</li>
				<li class="text-2xl"><strong>Высокая пропускная способность</strong></li>
				<li class="text-2xl"><strong>Отказоустойчивость</strong> через репликацию</li>
			</ul>
		</div>
		<Notes>
			Kafka - это не классическая шина событий, а платформа потоковой передачи данных (log-centric
			streaming platform). Kafka связывает микросервисы, отправляющие и получающие события, чтобы
			ускорить взаимодействие. Высокая пропускная способность: Позволяет справляться с большими
			объёмами данных без снижения производительности. Надёжное хранение: При правильной
			конфигурации Kafka способна переживать сбои узлов благодаря механизму репликации.
		</Notes>
	</Slide>

	<Slide>
		<div class="flex flex-col items-center">
			<div class="mb-12 text-5xl font-semibold">Почему это важно для аналитика</div>
			<ul class="w-4/5 space-y-6">
				<li class="text-2xl"><strong>Понимание нагрузки</strong> и объемов данных</li>
				<li class="text-2xl"><strong>Архитектура потоков данных</strong> между сервисами</li>
				<li class="text-2xl"><strong>Форматы сообщений</strong> и их совместимость</li>
			</ul>
		</div>
		<Notes>
			Понимание нагрузки: Аналитик должен оценивать частоту генерации событий и их структуру. От
			этого зависят настройки Kafka (партиции, ретеншн, репликация). Архитектура потоков данных:
			Описывая, какие сервисы и в каком порядке обмениваются сообщениями, аналитик учитывает логику
			интеграции и SLA, в том числе механизмы Kafka. Гибкость форматов: Kafka позволяет работать с
			JSON, Avro или Protobuf, что влияет на совместимость систем и удобство внедрения.
		</Notes>
	</Slide>

	<Slide>
		<div class="flex flex-col items-center">
			<div class="mb-12 text-5xl font-semibold">Как мы будем двигаться дальше</div>
			<ol class="w-4/5 space-y-6">
				<li class="text-2xl">
					<strong>Кратко вспомним</strong> ключевые понятия (партиции, группы потребителей, топики)
				</li>
				<li class="text-2xl">
					<strong>Расскажем о важных аспектах</strong> при планировании (объём диска, репликация, форматы
					сообщений и др.)
				</li>
			</ol>
		</div>
		<Notes>
			Кратко вспомним ключевые понятия (партиции, группы потребителей, топики). Расскажем о важных
			аспектах при планировании (объём диска, репликация, форматы сообщений и др.).
		</Notes>
	</Slide>
</Slide>
