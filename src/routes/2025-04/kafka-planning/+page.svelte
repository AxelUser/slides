<script lang="ts">
	import { base } from '$app/paths';
	import Notes from '$lib/deck/notes.svelte';
	import Slide from '$lib/deck/slide.svelte';
	import Slides from '$lib/deck/slides.svelte';
	import KafkaArchitectureSection from './section-kafka-architecture.svelte';
	import IntroductionSection from './section-introduction.svelte';
	import DiskSpaceSection from './section-disk-space.svelte';
	import TopicsSection from './section-topics.svelte';
	import SettingsSection from './section-settings.svelte';
	import MessageFormatsSection from './section-message-formats.svelte';
	import Social from './social.svelte';

	const assetsDir = `${base}/slides/2025-04/kafka-planning`;
	const defaultBgOpacity = '0.2';
</script>

<Slides title="Проектируем Apache Kafka с умом">
	<!-- SECTION: ВСТУПЛЕНИЕ -->
	<Slide bgImage="{assetsDir}/title_bg.jpg" bgImageOpacity={defaultBgOpacity}>
		<div class="flex h-full flex-col items-center justify-center">
			<div class="mb-16 text-7xl font-bold">Проектируем Apache Kafka с умом</div>
			<div class="mb-10">
				<ol class="space-y-5">
					<li class="text-2xl">Архитектура и основные компоненты</li>
					<li class="text-2xl">Расчёт объёма хранилища и производительности</li>
					<li class="text-2xl">Организация топиков и партиционирование</li>
					<li class="text-2xl">Форматы сообщений и совместимость</li>
					<li class="text-2xl">Настройки надёжности и производительности</li>
				</ol>
			</div>
		</div>
		<Notes>
			Всем привет! Рад вас видеть на вебинаре «Проектируем Apache Kafka с умом». Сегодня мы
			рассмотрим пять ключевых аспектов проектирования систем на базе Apache Kafka: архитектуру и
			основные компоненты, методы расчета объёма хранилища и оценки производительности, подходы к
			организации топиков и стратегии партиционирования, форматы сообщений и принципы совместимости,
			а также настройки, влияющие на надёжность и производительность системы. Весь материал
			ориентирован на практическое применение и сопровождается конкретными рекомендациями.
		</Notes>
	</Slide>

	<!-- SECTION: ВВЕДЕНИЕ -->
	<IntroductionSection {assetsDir} {defaultBgOpacity} />

	<!-- SECTION: АРХИТЕКТУРА -->
	<KafkaArchitectureSection {assetsDir} {defaultBgOpacity} />

	<!-- SECTION: ОБЪЁМ ХРАНИЛИЩА -->
	<DiskSpaceSection {assetsDir} {defaultBgOpacity} />

	<!-- SECTION: ОРГАНИЗАЦИЯ ТОПИКОВ -->
	<TopicsSection {assetsDir} {defaultBgOpacity} />

	<!-- SECTION: ФОРМАТЫ СООБЩЕНИЙ -->
	<MessageFormatsSection {assetsDir} {defaultBgOpacity} />

	<!-- SECTION: НАСТРОЙКИ -->
	<SettingsSection {assetsDir} {defaultBgOpacity} />

	<!-- SECTION: ЗАКЛЮЧЕНИЕ -->
	<Slide bgImage="{assetsDir}/title_bg.jpg" bgImageOpacity={defaultBgOpacity}>
		<Slide>
			<div class="flex h-full items-center justify-center">
				<div class="text-7xl font-bold">Заключение</div>
			</div>
			<Notes>Подведем итоги и обобщим ключевые моменты проектирования Apache Kafka.</Notes>
		</Slide>
		<Slide>
			<div class="flex flex-col items-center">
				<div class="mb-12 text-5xl font-semibold">Ключевые принципы проектирования Kafka</div>
				<ul class="w-4/5 space-y-6">
					<li class="text-2xl">
						<strong>Архитектура</strong>: Оптимизируйте брокеры, их количество и ресурсы с учётом
						отказоустойчивости
					</li>
					<li class="text-2xl">
						<strong>Объём хранилища</strong>: Рассчитывайте по формуле EPS × размер сообщения ×
						retention × RF
					</li>
					<li class="text-2xl">
						<strong>Организация топиков</strong>: Структурируйте по бизнес-доменам с понятной схемой
						именования
					</li>
					<li class="text-2xl">
						<strong>Форматы сообщений</strong>: Обеспечивайте совместимость при эволюции схем данных
					</li>
					<li class="text-2xl">
						<strong>Настройки</strong>: Балансируйте надёжность (acks, RF) и производительность
						(партиции, batch size)
					</li>
				</ul>
			</div>
			<Notes>
				Подводя итоги, хочу выделить пять ключевых принципов проектирования Kafka. Во-первых, всегда
				тщательно оценивайте объём хранилища на основе количества сообщений, их размера, времени
				хранения и репликации. Во-вторых, грамотно организуйте топики, разделяя их по
				бизнес-доменам. В-третьих, выбирайте подходящий формат данных – JSON для простоты или
				бинарные форматы для производительности. В-четвёртых, правильно настраивайте
				партиционирование, учитывая порядок сообщений и требования к параллельной обработке. И
				наконец, настраивайте уровень надёжности в соответствии с критичностью данных в вашей
				системе. Все эти аспекты взаимосвязаны, и их баланс определяет успешность вашего решения на
				базе Kafka.
			</Notes>
		</Slide>
	</Slide>
	<Slide>
		<div class="flex h-full flex-col items-center justify-center">
			<div class="mb-16 text-7xl font-bold">Спасибо за внимание!</div>
			<div class="mb-12 text-3xl">Буду рад ответить на ваши вопросы!</div>
			<Social />
		</div>
		<Notes>
			Спасибо за внимание! Надеюсь, что информация была полезной и поможет вам в проектировании
			систем на базе Apache Kafka. Сейчас я готов ответить на ваши вопросы. Если у вас появятся
			вопросы позже, вы можете связаться со мной по указанным контактам. Также на моем сайте вы
			найдете дополнительные материалы по Kafka, включая примеры конфигураций и шаблоны
			проектирования.
		</Notes>
	</Slide>
</Slides>
