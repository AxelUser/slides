<script>
	import Notes from '$lib/deck/notes.svelte';
	import Slide from '$lib/deck/slide.svelte';

	export let assetsDir = '';
	export let defaultBgOpacity = '0.5';
</script>

<Slide>
	<Slide bgImage="{assetsDir}/bg-message-structure.webp" bgImageOpacity={defaultBgOpacity}>
		<div class="flex h-full items-center justify-center">
			<div class="text-7xl font-bold">Форматы сообщений</div>
		</div>
		<Notes>
			Теперь поговорим о форматах сообщений в Kafka. Выбор формата критически влияет на
			производительность, гибкость и удобство работы с системой. Правильный формат поможет
			оптимизировать использование ресурсов и обеспечить эффективное взаимодействие между
			компонентами.
		</Notes>
	</Slide>

	<Slide bgImage="{assetsDir}/bg-message-structure.webp" bgImageOpacity={defaultBgOpacity}>
		<div class="flex flex-col items-center">
			<div class="mb-12 text-5xl font-semibold">JSON vs Бинарные форматы</div>
			<div class="grid w-4/5 grid-cols-2 gap-8">
				<div>
					<div class="mb-4 text-3xl"><strong>JSON</strong>:</div>
					<ul class="ml-8 space-y-2">
						<li class="text-2xl">✓ Читаемость</li>
						<li class="text-2xl">✓ Простая интеграция</li>
						<li class="text-2xl">✗ Больший размер</li>
						<li class="text-2xl">✗ Нет типизации</li>
					</ul>
				</div>
				<div>
					<div class="mb-4 text-3xl"><strong>Avro/Protobuf</strong>:</div>
					<ul class="ml-8 space-y-2">
						<li class="text-2xl">✓ Компактность</li>
						<li class="text-2xl">✓ Производительность</li>
						<li class="text-2xl">✓ Контроль версий</li>
						<li class="text-2xl">✗ Сложнее в отладке</li>
					</ul>
				</div>
			</div>
		</div>
		<Notes>
			При выборе формата сообщений нужно учитывать несколько факторов: JSON - текстовый формат с
			очевидными преимуществами: легко читается людьми, отлаживается и интегрируется практически с
			любой технологией. Однако у него есть существенные недостатки: значительно больший размер
			сообщений из-за текстового представления, отсутствие строгой типизации повышает риски
			несовместимости при изменениях, и относительно низкая производительность
			сериализации/десериализации. Бинарные форматы (Avro, Protobuf) предлагают противоположные
			характеристики: компактный размер данных экономит сетевой трафик и память, высокая
			производительность обработки, строгая типизация с контролем версий и поддержка эволюции схем.
			Но они сложнее в настройке, не читаемы человеком напрямую и требуют дополнительных
			инструментов для отладки. Выбор формата должен основываться на конкретных требованиях проекта:
			объемах данных, нагрузке, требованиях к совместимости и удобстве разработки.
		</Notes>
	</Slide>

	<Slide>
		<div class="flex flex-col items-center">
			<div class="mb-12 text-5xl font-semibold">Совместимость сообщений</div>
			<ul class="w-4/5 space-y-6">
				<li class="text-2xl">
					<strong>Совместимость</strong> — работа с разными версиями сообщений
				</li>
				<li class="text-2xl">
					<strong>Обратная</strong>: новый код → старые сообщения
				</li>
				<li class="text-2xl">
					<strong>Прямая</strong>: старый код → новые сообщения
				</li>
			</ul>
		</div>
		<Notes>
			Совместимость форматов сообщений — ключевой аспект проектирования систем на Kafka, особенно
			при длительном хранении данных и распределенной архитектуре. Обратная совместимость критична,
			когда в топиках остаются сообщения, созданные по старым схемам, или при обработке архивных
			данных. Она позволяет новым версиям приложений работать со старыми данными без необходимости
			их конвертации. Прямая совместимость особенно важна при поэтапном обновлении системы, когда
			некоторые компоненты уже генерируют сообщения по новой схеме, а другие еще используют старый
			код. Это обеспечивает плавную миграцию без простоев. Оба типа совместимости особенно хорошо
			поддерживаются бинарными форматами с системой схем, такими как Avro с Schema Registry. Эти
			инструменты позволяют автоматически проверять совместимость при обновлении схем.
		</Notes>
	</Slide>

	<Slide>
		<div class="flex flex-col items-center">
			<div class="mb-8 text-5xl font-semibold">Обратная совместимость</div>
			<div class="flex w-full justify-between px-8">
				<div class="w-[500px] rounded-lg border-2 border-gray-700 bg-gray-800 p-4">
					<div class="mb-2 text-xl font-semibold">Старое:</div>
					<pre class="text-lg text-green-300">{`{
  "user_id": 12345,
  "name": "Иван Петров"
}`}</pre>
				</div>
				<div class="flex w-[10%] items-center justify-center">
					<div class="text-4xl">→</div>
				</div>
				<div class="w-[500px] rounded-lg border-2 border-gray-700 bg-gray-800 p-4">
					<div class="mb-2 text-xl font-semibold">Новое:</div>
					<pre class="text-lg text-green-300">{`{
  "user_id": 12345,
  "name": "Иван Петров",
  "email": "ivan@example.com"
}`}</pre>
				</div>
			</div>
			<div class="mt-6 w-[90%] rounded-lg border-2 border-green-700 bg-green-900 p-3 text-white">
				<div class="text-xl">
					✅ <strong>Добавление</strong> нового поля сохраняет обратную совместимость
				</div>
			</div>
		</div>
		<Notes>
			Рассмотрим конкретный пример обратной совместимости. В старой версии сообщение содержит только
			идентификатор пользователя и имя. Когда мы обновляем формат и добавляем поле email, новый код
			должен корректно обрабатывать старые сообщения. Это работает, поскольку все обязательные поля
			из старой версии присутствуют, а отсутствующее новое поле email может быть обработано
			значением по умолчанию (null, пустая строка) или пропущено в логике. Такой подход особенно
			удобен при итеративной разработке, когда постепенно добавляются новые атрибуты к существующим
			сущностям. Добавление необязательных полей — один из самых безопасных паттернов изменения
			схемы данных с точки зрения совместимости.
		</Notes>
	</Slide>

	<Slide>
		<div class="flex flex-col items-center">
			<div class="mb-8 text-5xl font-semibold">Прямая совместимость</div>
			<div class="flex w-full justify-between px-8">
				<div class="w-[500px] rounded-lg border-2 border-gray-700 bg-gray-800 p-4">
					<div class="mb-2 text-xl font-semibold">Старое:</div>
					<pre class="text-lg text-green-300">{`{
  "user": {
    "id": 12345,
    "name": "Иван"
  },
  "status": "active"
}`}</pre>
				</div>
				<div class="flex w-[10%] items-center justify-center">
					<div class="text-4xl">→</div>
				</div>
				<div class="w-[500px] rounded-lg border-2 border-gray-700 bg-gray-800 p-4">
					<div class="mb-2 text-xl font-semibold">Новое:</div>
					<pre class="text-lg text-green-300">{`{
  "user": {
    "id": 12345,
    "name": "Иван"
  },
  "status": "active",
  "metadata": {
    "created_at": "2023-05-10"
  }
}`}</pre>
				</div>
			</div>
			<div class="mt-6 w-[90%] rounded-lg border-2 border-green-700 bg-green-900 p-3 text-white">
				<div class="text-xl">
					✅ <strong>Новые объекты</strong> игнорируются старым кодом
				</div>
			</div>
		</div>
		<Notes>
			Прямая совместимость обеспечивает работоспособность старого кода с новыми версиями сообщений.
			В нашем примере мы добавляем новый объект metadata с дополнительной информацией. Ключевой
			момент здесь в том, что старый код должен безопасно игнорировать неизвестные поля. Большинство
			современных парсеров JSON по умолчанию пропускают неизвестные поля при десериализации в
			объекты. В строго типизированных языках это обеспечивается маппингом только существующих
			свойств. В динамических языках дополнительные поля просто добавляются к объекту, не вызывая
			ошибок. Такой подход позволяет постепенно обогащать сообщения новыми метаданными и свойствами,
			не требуя одновременного обновления всех компонентов системы. Это особенно ценно в
			микросервисной архитектуре, где разные команды могут поддерживать различные сервисы.
		</Notes>
	</Slide>

	<Slide>
		<div class="flex flex-col items-center">
			<div class="mb-8 text-5xl font-semibold">Несовместимые изменения</div>
			<div class="flex w-full justify-between px-8">
				<div class="w-[500px] rounded-lg border-2 border-gray-700 bg-gray-800 p-4">
					<div class="mb-2 text-xl font-semibold">Старое:</div>
					<pre class="text-lg text-green-300">{`{
  "customer_id": 42,
  "phone": "79991234567"
}`}</pre>
				</div>
				<div class="flex w-[10%] items-center justify-center">
					<div class="text-4xl">→</div>
				</div>
				<div class="w-[500px] rounded-lg border-2 border-gray-700 bg-gray-800 p-4">
					<div class="mb-2 text-xl font-semibold">Новое:</div>
					<pre class="text-lg text-green-300">{`{
  "customer_id": 42,
  "contact": {
    "phone": "79991234567"
  }
}`}</pre>
				</div>
			</div>
			<div class="mt-6 w-[90%] rounded-lg border-2 border-red-700 bg-red-900 p-3 text-white">
				<div class="text-xl">
					❌ <strong>Перемещение полей</strong> нарушает совместимость
				</div>
			</div>
		</div>
		<Notes>
			Некоторые изменения в структуре сообщений нарушают и прямую, и обратную совместимость. В
			данном примере мы перенесли поле phone внутрь нового объекта contact. Это классический пример
			несовместимого изменения. Старый код ищет поле phone в корне объекта, но не найдет его в новой
			структуре. Аналогично, новый код будет искать объект contact в старых сообщениях, который там
			отсутствует. Подобные изменения требуют особого подхода: 1. Синхронное обновление всех
			компонентов системы (что часто невозможно в распределенных системах) 2. Использование системы
			версионирования сообщений (добавление поля version и обработка разных версий) 3. Промежуточный
			этап с поддержкой обоих форматов (дублирование данных в старом и новом расположении) 4.
			Использование миграционных скриптов для обновления хранящихся данных Лучше избегать таких
			структурных изменений, особенно в системах с долгосрочным хранением данных. Если они
			необходимы, следует тщательно планировать миграцию с учетом всех потребителей данных.
		</Notes>
	</Slide>
</Slide>
