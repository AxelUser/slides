<script>
	import Notes from '$lib/deck/notes.svelte';
	import Slide from '$lib/deck/slide.svelte';

	export let assetsDir = '';
	export let defaultBgOpacity = '0.5';
</script>

<Slide bgImage="{assetsDir}/kafka_topics_bg.jpg" bgImageOpacity={defaultBgOpacity}>
	<Slide>
		<div class="flex h-full items-center justify-center">
			<div class="text-7xl font-bold">Организация топиков</div>
		</div>
		<Notes>
			Теперь рассмотрим ключевые принципы организации топиков в Kafka, что критически важно для
			построения эффективной и масштабируемой системы обмена сообщениями.
		</Notes>
	</Slide>
	<Slide>
		<div class="flex flex-col items-center">
			<div class="mb-12 text-5xl font-semibold">Один топик vs. несколько</div>
			<div class="flex w-full justify-center gap-12">
				<div class="w-2/5">
					<div class="mb-4 text-3xl"><strong>Один топик подходит для:</strong></div>
					<ul class="ml-8 space-y-3">
						<li class="text-2xl">Однородных данных с общим жизненным циклом</li>
						<li class="text-2xl">Простых сценариев потребления</li>
						<li class="text-2xl">Логически связанных данных</li>
					</ul>
				</div>
				<div class="w-2/5">
					<div class="mb-4 text-3xl">
						<strong>Несколько топиков лучше при:</strong>
					</div>
					<ul class="ml-8 space-y-3">
						<li class="text-2xl">Разнородных данных</li>
						<li class="text-2xl">Различных шаблонах доступа</li>
						<li class="text-2xl">Разделении по доменам</li>
					</ul>
				</div>
			</div>
		</div>
		<Notes>
			Выбор между одним или несколькими топиками - фундаментальное архитектурное решение. Один топик
			эффективен когда: - Данные однородны и имеют общий жизненный цикл - Сценарии потребления
			просты (один тип консьюмеров) - Требуются одинаковые настройки хранения и партиционирования
			Данные логически связаны и обрабатываются вместе Несколько топиков предпочтительнее когда: -
			Данные имеют разную природу и жизненные циклы - Существуют разные паттерны доступа и группы
			потребителей - Требования к хранению и производительности различаются - Необходимо логическое
			разделение по бизнес-доменам Этот выбор значительно влияет на гибкость, масштабируемость и
			управляемость системы в долгосрочной перспективе.
		</Notes>
	</Slide>

	<Slide>
		<div class="flex flex-col items-center">
			<div class="mb-12 text-5xl font-semibold">Доменная организация топиков</div>
			<ul class="w-4/5 space-y-6">
				<li class="text-2xl">
					<strong>Примеры</strong>:
					<ul class="ml-8 mt-3 space-y-2">
						<li class="text-2xl">orders.created, orders.updated</li>
						<li class="text-2xl">payments.initiated, payments.completed</li>
						<li class="text-2xl">logistics.shipment.created</li>
					</ul>
				</li>
				<li class="mt-6 text-2xl">
					<strong>Плюсы</strong>: Независимость, наблюдаемость, гибкость
				</li>
				<li class="mt-6 text-2xl">
					<strong>Минусы</strong>: Управление количеством, сложность настройки
				</li>
			</ul>
		</div>
		<Notes>
			Доменная организация топиков основана на группировке по бизнес-областям, что отражает
			структуру вашей системы. Примеры именования в разных доменах: - Для заказов: orders.created,
			orders.updated, orders.cancelled - Для платежей: payments.initiated, payments.completed,
			payments.failed - Для логистики: logistics.shipment.created, logistics.delivery.completed
			Ключевые преимущества: - Доменная изоляция и независимость - Улучшенная наблюдаемость и
			мониторинг по бизнес-направлениям - Возможность настройки параметров под специфику каждого
			домена Основные сложности: - Увеличение количества топиков для управления и мониторинга -
			Расширение области конфигурирования и обслуживания - Потенциальные проблемы при кросс-доменных
			операциях
		</Notes>
	</Slide>

	<Slide>
		<div class="flex flex-col items-center">
			<div class="mb-12 text-5xl font-semibold">Практические советы</div>
			<ul class="w-4/5 space-y-6">
				<li class="text-2xl">
					<strong>Документация</strong>: Каталог топиков
				</li>
				<li class="text-2xl">
					<strong>Именование</strong>: domain.entity.action
				</li>
				<li class="text-2xl">
					<strong>Версионирование</strong>: _v1, _v2 или схемы
				</li>
				<li class="text-2xl">
					<strong>Планирование</strong>: Оценка объёмов и трафика
				</li>
				<li class="text-2xl">
					<strong>Миграция</strong>: Стратегия перехода
				</li>
			</ul>
		</div>
		<Notes>
			Практические рекомендации для эффективной организации топиков: Документация: - Создайте и
			поддерживайте централизованный каталог топиков - Документируйте назначение, схему данных,
			продюсеров и консьюмеров для каждого топика - Регулярно обновляйте документацию при изменениях
			Именование: - Следуйте единому стандарту - domain.entity.action (например,
			orders.item.created) - Используйте понятные и самодокументируемые имена - Избегайте
			сокращений, которые могут быть непонятны новым разработчикам Версионирование: - Планируйте
			изменения схем данных с самого начала - Используйте суффиксы (_v1, _v2) или встроенное
			версионирование схем (Avro/Protobuf) - Разработайте четкую стратегию совместимости (backward,
			forward, full) Планирование ресурсов: - Оценивайте ожидаемые объемы данных и пиковый трафик
			заранее - Правильно конфигурируйте партиционирование исходя из этих оценок - Учитывайте
			будущий рост при планировании Миграционная стратегия: - Разработайте план перехода при
			необходимости изменения топиков - Предусмотрите период параллельной записи в старые и новые
			топики - Минимизируйте влияние на работающие системы и пользователей
		</Notes>
	</Slide>
</Slide>
