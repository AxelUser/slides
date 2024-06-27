<script lang="ts">
	import { base } from '$app/paths';
	import Notes from '$lib/deck/notes.svelte';
	import Slide from '$lib/deck/slide.svelte';
	import Slides from '$lib/deck/slides.svelte';
	import FragmentListItem from './FragmentListItem.svelte';
	import FragmentsList from './FragmentsList.svelte';
	import Social from './social.svelte';

	const assetsDir = `${base}/slides/2024-07/kafka-on-practice`;
	const defaultBgOpacity = '0.2';
</script>

<Slides title="Apache Kafka на практике">
	<Slide bgImage="{assetsDir}/title-cover.webp" bgImageOpacity={defaultBgOpacity}>
		<div class="text-8xl">Apache Kafka на практике</div>
		<Social />
	</Slide>
	<Slide bgImage="{assetsDir}/title-cover.webp" bgImageOpacity={defaultBgOpacity}>
		<div class="flex flex-col gap-16">
			<div class="text-8xl">Поговорим</div>
			<div>
				<FragmentsList
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
					<ul class="space-y-4">
						<FragmentListItem>Senior Software Engineer @ Infobip</FragmentListItem>
						<FragmentListItem>10 лет пишу софт</FragmentListItem>
						<FragmentListItem>4 года работаю с Apache Kafka</FragmentListItem>
						<FragmentListItem>Специализируюсь на распределённых системах</FragmentListItem>
					</ul>
				</div>
			</div>
		</div>
	</Slide>
	<Slide bgImage="{assetsDir}/all-about-apache-kafka.webp" bgImageOpacity={defaultBgOpacity}>
		<div class="text-8xl">Всё что нужно знать про Apache Kafka</div>
	</Slide>
	<Slide bgImage="{assetsDir}/bg-roach-reading-messages.webp" bgImageOpacity={defaultBgOpacity}>
		<div class="flex flex-col justify-center gap-16">
			<div class="text-8xl">Что оно такое?</div>
			<div>
				<FragmentsList
					items={[
						'Реплицированный распределённый лог сообщений',
						'Сообщения записываются в конец файла, а читаются с начала',
						'Время жизни каждого сообщения ограничено по времени и памяти'
					]}
				/>
			</div>
		</div>
		<Notes>
			Это достаточно нестандартный , но достаточно полноценный брокер сообщений, по сути он упрощён
			до append-only message log, то есть сообщения просто записываются в конец условного файла и
			удаляются если файл вырос за переделы максимального объема в байтах или за временные рамки.
		</Notes>
	</Slide>
	<Slide bgImage="{assetsDir}/kafka-cluster-bg.webp" bgImageOpacity={defaultBgOpacity}>
		<div class="flex flex-col justify-center gap-16">
			<div class="text-8xl">Кластер Apache Kafka</div>
			<div>
				<FragmentsList
					items={[
						'Apache Kafka - распределённое приложение',
						'Данные реплицируются и шардируются между узлами',
						'Работа с очередями распределена между узлами'
					]}
				/>
			</div>
		</div>
		<Notes>
			Apache Kafka - это очень упрощённо исполняемый файл, несколько таких исполняемых файлов можно
			объединить в кластер и в этом случае мы получим распределенное приложение, которое само
			балансирует нагрузку и данные между своими компонентами, то есть одни и те же сообщения могут
			храниться сразу на нескольких узлах и в случае потери одного узла мы не потеряем все данные и
			сможем продолжить работу.
		</Notes>
	</Slide>
	<Slide bgImage="{assetsDir}/bg-topics-and-partitions.webp" bgImageOpacity={defaultBgOpacity}>
		<Slide>
			<div class="text-8xl">Топики и Партиции</div>
			<div class="m-10">
				<FragmentsList
					items={['Очереди называются топиками (англ. topic)', 'Партиции - кусочки топика']}
				/>
			</div>
			<Notes>
				В Apache Kafka очереди называют топиками (англ. topic, я не буду переводить его дословно как
				тема чтобы лишний раз никого не путать). Топики в свою очередь разбиты на мини-очереди,
				которые называются партициями (англ. partition). У топика может быть больше одной партиции.
			</Notes>
		</Slide>
		<Slide>
			<div class="text-6xl">Топики и Партиции</div>
			<div class="mx-auto h-[66%] w-[66%]">
				<img
					class="h-full w-full object-contain"
					src="{assetsDir}/topics-and-partitions-scheme.webp"
					alt="topics and partitions scheme"
				/>
			</div>
			<Notes>
				Более того эти партиции могут реплицироваться сразу на нескольких узлах Kafka кластера, то
				есть условно на разных машинах может хранится по копии одной и той же партиции, таким
				образом когда один узел выйдет из строя - чтение и запись будет вестись на другом узле с
				такими же данными. Плюс поскольку партиции распределены по кластеру, клиенты будут работать
				сразу с несколькими узлами Apache Kafka, что улучшает производительность.
			</Notes>
		</Slide>
	</Slide>
	<Slide bgImage="{assetsDir}/bg-where-messages-are-written.webp" bgImageOpacity={defaultBgOpacity}>
		<Slide>
			<div class="text-8xl">Куда записываются сообщения</div>
			<div class="m-10">
				<FragmentsList
					items={['Сообщения хранятся в партициях топика', 'Упорядочены только в рамках партиции']}
				/>
			</div>
			<Notes>
				Сообщения по факту хранятся именно в партициях и упорядоченны только в рамках своей
				партиции. Очень важно про это помнить, когда ваше приложение отправляет связанные сообщение
				в топик - ваша задача сделать так, чтобы такая последовательность сообщений попала в одну и
				ту же партицию.
			</Notes>
		</Slide>
		<Slide>
			<div class="text-4xl">Куда записываются сообщения</div>
			<div class="m-10 mx-auto flex flex-col items-center">
				<svg data-src="{assetsDir}/messages-in-partition-anim.svg"> </svg>
			</div>
			<Notes>
				Если взять за пример обработку заказов в интернет-магазине, где разные системы отправляют
				сообщения об изменении статуса заказов, то если сообщения про один и тот же заказ попадут в
				разные партиции, есть вероятность что они будут прочитаны не в том порядке, в котором вы это
				ожидаете и например сервис обновляющий статус в базе может перетереть актуальное состояние
				более старым, или вообще сломаться с ошибкой.
			</Notes>
		</Slide>
	</Slide>
	<Slide bgImage="{assetsDir}/bg-message-structure.webp" bgImageOpacity={defaultBgOpacity}>
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

		<Notes>
			У каждого сообщения может быть контент произвольного формата, например JSON, XML, Protobuf, по
			факту всё это не так важно так как в Apache Kafka хранятся просто байты и ваша задача записать
			их в том формате, из которого этот контент можно будет прочитать в других приложениях.
			<br /><br />
			Так же сообщение может иметь заголовки в формате словаря, т.е. у каждого заголовка есть строковое
			имя и его значение в произвольном формате. Если с контентом всё более-менее очевидно, ведь там
			хранится самая мякотка вашего сообщения - данные, то заголовки могут использоваться для хранения
			произвольных метаданных, например идентификатор запроса который привёл к появлению сообщения, версия
			сообщения если вы когда-то меняли его формат или любая другая информация, которые поможет фильтровать
			сообщения или давать другую полезную информацию читателям ещё до того как они потратят дорогое
			процессорное время на трансформацию контента в модель в памяти приложения.
			<br /><br />
			Помимо заголовка ещё можно задать ключ сообщения чтобы контролировать в какую партицию запишется
			сообщение, но об этом поговорим отдельно.
			<br /><br />
			Ещё сообщению всегда присваивается offset, но и об этом чуть позже.
			<br /><br />
			Так же сообщение содержит время его создания в виде так называемого таймстемпа. Он может создаваться
			как на стороне клиента (то есть приложения которое отправило сообщение), так и на стороне брокера.
		</Notes>
	</Slide>
	<Slide bgImage="{assetsDir}/bg-message-key-and-ballancing.webp" bgImageOpacity={defaultBgOpacity}>
		<Slide>
			<div class="text-8xl">Ключ сообщения и балансировка</div>
			<div class="mx-auto mt-10 h-[66%] w-[66%]">
				<img
					class="h-full w-full object-contain"
					src="{assetsDir}/consistent-partitioning-by-key.png"
					alt="example of how bad key can overflow partition"
				/>
			</div>
			<Notes
				>Что же касается ключа сообщения, то у него тоже есть своя роль - его можно использовать
				чтобы автоматически определять в какую партицию нужно записать сообщения.
				<br />
				Если опять же взять в пример историю обработки заказа, то записав в ключ номер заказа вы поможете
				клиенту Apache Kafka отправлять сообщения по одному и тому же заказу в одну и ту же партицию.
				<br /><br />
			</Notes>
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
			<Notes>
				Но помимо такого роутинга вам желательно добиться равномерного распределения сообщений между
				всеми партициями у топика, иначе теряется часть смысла этих партиций, так как они перестают
				балансировать нагрузку при чтении из них.
				<br /><br />
				Например если вы строите систему для сбора кликов пользователей на сайтах ваших клиентов, то
				оставлять в ключе только идентификатор сайта будет плохой идеей, так как вероятнее всего вы столкнётесь
				с проблемой, что целая партиция забита сообщениями от какого-нибудь популярного веб-ресурса.
			</Notes>
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
			<Notes>
				А если вы добавите ещё например идентификатор пользовательской сессии на сайте, то вы всё
				так же добьётесь упорядоченности сообщений, но при этом улучшите распределение сообщений
				между партициями.
			</Notes>
		</Slide>
		<Slide>
			<div class="text-8xl">Кто находит партицию</div>
			<div class="m-10">
				<FragmentsList
					items={[
						'Клиент считает хеш от ключа для выбора партиции',
						'Если ключа нет - по порядку перебирает партиции'
					]}
				/>
			</div>
			<Notes>
				Важно добавить, что сама Apache Kafka не связывает ключ сообщения с номером партиции, это
				всё происходит на стороне клиентов которые используются в коде приложения. То есть по факту
				популярные клиенты берут хеш от ключа сообщения и по этому хешу вычисляют номер партиции, в
				которую оно будет отправлено.
				<br /><br />
				Если ключ не задан, то он будет выбирать в стиле round-robin, то есть перебирать партиции по
				порядку, например сначала одно сообщение улетит в нулевую партицию, следующее в первую и так
				далее.
			</Notes>
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
			<Notes>
				Но и от такой автоматики можно отказаться, явно указав номер партиции или даже несколько
				партиций, куда отправится сообщение. Полезным бывает подход, когда вы отправляете сообщение
				сразу во все партиции, например чтобы каждый потребитель вашего топика получал все изменения
				по какой-то сущности и кешировал актуальное значение в памяти и не ходил за ним по сети в
				другие сервисы.
			</Notes>
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
		<Notes>
			Когда сообщение записывается в партицию, ему присваивается уникальный порядковый номер -
			offset.
			<br /><br />
			По сути offset это номер сообщения в этой партиции начиная с нуля.
			<br /><br />
			Сам по себе offset не будет уникальным в рамках всего топика, ведь как я сказал ранее, это порядковый
			номер в определённой партиции.
			<br /><br />
			А вот уже номер партиции и порядковый номер сообщения является уникальной комбинацией, указывающий
			только на одно сообщение в топике.
		</Notes>
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
			<Notes>
				Apache Kafka удаляет сообщения в двух случаях - когда партиция вышла за максимально
				допустимый размер в байтах И/ИЛИ когда эти самые старые сообщения вышли за пределы
				временного окна хранения сообщений (например лежат дольше 3-х дней). Но удаляет она их не
				сразу.
			</Notes>
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
						>Apache Kafka удаляет релевантные <span class="text-red-500">неактивные</span> сегменты
					</FragmentListItem>
				</ul>
			</div>
			<Notes>
				Дело в том, что сами партиции тоже делятся на сегменты. Сегмент может быть активным и
				неактивным. Активный сегмент - это тот в который идёт запись новых сообщений.
				<br /><br />
				Когда он достигнет определенного размера (например 1Гб) или возраста (например 7 дней), то Apache
				Kafka перестаёт в него записывать, и переводит в неактивное состояние, то есть с него можно будет
				только читать. В то же время она создаёт новый активный сегмент, куда будут попадать новые сообщения.
				<br /><br />
				Apache Kafka удаляет не отдельные сообщения, а целые сегменты целиком, если они полностью подходят
				под условия про которые я сказал ранее. Причём под удаление попадают только неактивные сегменты,
				чтобы не замедлять запись в активном. Поэтому сообщения в Apache Kafka могут храниться дольше,
				чем вы этого ожидаете.
			</Notes>
		</Slide>
	</Slide>

	<Slide bgImage="{assetsDir}/bg-roach-reading-messages.webp" bgImageOpacity={defaultBgOpacity}>
		<Slide>
			<div class="text-8xl">Чтение сообщений</div>
			<Notes>
				В Apache Kafka потребители сообщений читают сообщения так же из партиций. Но не всё так
				просто, давайте для наглядности снова возьмём за пример заказы из интернет магазина.
			</Notes>
		</Slide>
		<Slide>
			<div class="text-start text-4xl">
				Пример: несколько разных сервисов читают один и тот же топик
			</div>
			<div class="mermaid mb-10 mt-10 flex flex-col items-center">
				{`
					%%{init: {'theme': 'dark', 'themeVariables': { 'darkMode': true }}}%%
					flowchart LR
						WebAPI[Web API] --> |"Publishes messages"| OrdersTopic[Kafka Topic: Orders]
						OrdersTopic -->|Receive| MetricsCollector[MetricsCollector Service]
						OrdersTopic -->|Receive| OrderProcessor[OrderProcessor Service]
				`}
			</div>
			<Notes>
				Предположим что у нас есть топик Orders и есть Web API, которое пишет сообщение для каждого
				нового заказа, созданного на сайте интернет магазина. Для упрощения предположим что слушают
				этот топик два сервиса - MetricsCollector и OrderProcessor. Первый считает какие-то
				продуктовые метрики и строит отчёты, а второй собственно занимается обработкой заказа,
				давайте будем считать что это жуткий монолит 10-ти летней давности, но свою работу делает.
			</Notes>
		</Slide>
		<Slide>
			<div class="text-start text-4xl">
				Пример: несколько разных сервисов читают один и тот же топик
			</div>
			<div class="mb-10 mt-10 flex flex-col gap-10">
				<ul>
					<FragmentListItem>Каждый сервис запущен на нескольких узлах</FragmentListItem>
					<FragmentListItem>Оба сервиса должны получить все сообщения</FragmentListItem>
					<FragmentListItem>
						Каждое сообщение должно быть обработано одним узлом каждого сервиса
					</FragmentListItem>
				</ul>
				<div class="m-10 flex flex-col">
					<svg data-src="{assetsDir}/event-flow-animation.svg"> </svg>
				</div>
			</div>
			<Notes>
				Как это обычно бывает, читают сообщения сразу несколько приложений MetricsCollector и
				несколько OrderProcessor, например по две машины на каждый вид сервиса, то есть два
				запущенных приложения MetricsCollector и два OrderProcessor.
				<br /><br />
				MetricsCollector и OrderProcessor занимаются разными вещами и каждое сообщение в топике Orders
				должно быть прочитано ими обоими.
				<br /><br />
				Но при этом оба приложения MetricsCollector не должны прочесть одно сообщение дважды, ведь метрику
				по заказу нужно посчитать единожды. То же самое справедливо и для двух приложений OrderProcessor.
				Как в Apache Kafka достичь того, чтобы с одной стороны оба сервиса получили все сообщения, но
				при этом каждым сервисом сообщение было обработано единожды? Для этого в Apache Kafka есть consumer
				groups.
			</Notes>
		</Slide>
		<Slide>
			<div class="text-8xl">Consumer Groups</div>
			<div class="mb-10 mt-10 flex flex-row items-center gap-10">
				<ul class="space-y-2">
					<FragmentListItem>Участники могут подписаться несколько топиков</FragmentListItem>
					<FragmentListItem>
						Партиции каждого топика распределяются между участниками одной и той же группы
					</FragmentListItem>
					<FragmentListItem>
						Если подписчики располагаются в разных группах, то они получат одни и те же партиции
					</FragmentListItem>
				</ul>
			</div>
			<Notes>
				Consumer group - это группа подписчиков на топики, между которыми партиции каждого топика
				делятся поровну или почти поровну.
				<br /><br />
				Разделение партиций каждого топика происходит только между участниками одной и той же группы,
				а не между вообще всеми подписчиками на этот топик.
				<br /><br />
				То есть разные группы получают все сообщения, но каждый участник группы получает только часть
				сообщений, так как Apache Kafka сама распределяет какие партиции читает каждый участник группы.
			</Notes>
		</Slide>
		<Slide>
			<div class="text-6xl">Назначим группы</div>
			<img
				class="!m-auto !mt-10 h-[66%] w-[66%]"
				src="{assetsDir}/consumer-groups.png"
				alt="how consumer groups share partitions"
			/>
			<Notes>
				То есть чтобы достичь желаемого, мы должны для MetricsCollector и OrderProcessor создать по
				отдельной consumer group, назовём их metrics-collector-group и order-processor-group. Когда
				Web API отправляет сообщение в топик Orders, оно попадает в одну единственную партицию этого
				топика, благодаря хорошо заданному ключу сообщения. Далее это сообщение читается одним
				участником metrics-collector-group и одним частником order-processor-group. В результате
				заказ будет обработан и учтён в метриках, но при этом не будет проделано дублирующей работы
				с этим сообщением.
			</Notes>
		</Slide>
		<Slide slideId="group-rebalancing-slide">
			<div class="text-6xl">
				Если участник выйдет <span class="animated-strikethrough">в окно</span>
			</div>
			<img
				class="!m-auto !mt-10 h-[66%] w-[66%]"
				src="{assetsDir}/consumer-group-rebalancing.png"
				alt="consumer group rebalanced"
			/>
			<Notes>
				Но что произойдёт, если вдруг участник группы будет отключен или сломается? Apache Kafka в
				этом случае определит что с этим участником что-то не так и выполнит перебалансировку
				партиций между остальными, в данном простом примере все партиции топика Orders уйдут
				последнему оставшемуся и работа продолжится. И если через какое-то время упавший участник
				очнётся от безмолвного сна или команда решит добавить ещё больше приложений, партиции будут
				снова перебалансированы с учётом новой топологии.
			</Notes>
		</Slide>
		<Slide>
			<div class="text-8xl">Коварство ребалансировки</div>
			<ul class="!mt-10 block space-y-4">
				<FragmentListItem>
					Кафка ожидает что потребитель будет часто забирать сообщения, иначе она выполнит
					ребалансировку
				</FragmentListItem>
				<FragmentListItem>Долгая обработка = постоянная ребалансировка</FragmentListItem>
				<FragmentListItem>
					Можно увеличить `max.poll.interval.ms` (по-умолчанию 5 минут)
				</FragmentListItem>
				<FragmentListItem>Можно уменьшить количество потребляемых сообщений</FragmentListItem>
				<FragmentListItem>Можно ускорить обработку одного сообщения</FragmentListItem>
			</ul>
			<Notes>
				Но будьте бдительны насчёт перебалансировки и механизма отслеживания подписчиков топиков.
				Apache Kafka определяет активен ли участник или нет исходя из того, успевает ли он забирать
				сообщения. Если обработка одного сообщения занимает очень продолжительное время, то брокер
				посчитает что подписчик перестал работать, хотя на самом деле это не так.
				<br /><br />
				В результате вы можете попасть в ситуацию, когда Apache Kafka очень часто или даже постоянное
				производит перебалансировку партиций, что часто крайне пагубно влияет на работу или может даже
				полностью остановить её.
				<br /><br />
				Решить эту проблему можно либо увеличив период за который брокер ожидает получить запрос на новые
				сообщения от участника или уменьшить сколько сообщений забираем за раз, или переписав приложение
				таким образом, чтобы обработка занимала гораздо меньше времени.
			</Notes>
		</Slide>
		<Slide>
			<div class="text-8xl">Offset commit</div>
			<ul class="!mt-10 block space-y-4">
				<FragmentListItem>
					Нужно отправлять оповещения об обработке сообщения, чтобы не читать одни и те же данные
				</FragmentListItem>
				<FragmentListItem>
					Лучше проставлять commit самостоятельно после обработки сообщения
				</FragmentListItem>
			</ul>
			<Notes>
				Ещё одной важной деталью является подтверждение об обработке сообщения участником группы. В
				терминах Apache Kafka это называет commit offset, то есть когда участник оповещает брокер
				что он обработал сообщение с определённым порядковым номером. Если не отправить
				подтверждение, при новом запросе от участника он снова прочитает незакомиченное сообщение.
				<br /><br />
				Обычно в коде клиентов это делается автоматически при прочтении сообщения, но иногда разработчики
				пишут подтверждения вручную уже после его обработки.
			</Notes>
		</Slide>
		<Slide>
			<div class="text-8xl">Apache Kafka не будет вас ждать</div>
			<ul class="!mt-10 block space-y-4">
				<FragmentListItem>
					Потребители должны успевать читать сообщения, чтобы не потерять данные
				</FragmentListItem>
				<FragmentListItem>Ускоряйте и оптимизируйте код</FragmentListItem>
				<FragmentListItem>Добавьте побольше нод сервиса</FragmentListItem>
			</ul>
			<Notes>
				Как я говорил ранее, Apache Kafka не даёт никаких гарантий того что сообщения будут
				обработаны, то есть если участник не успевает, то непрочитанные им сообщения могут быть
				автоматически удалены.
				<br /><br />
				Рецепт решения одновременно простой и сложный - нужно либо ускорять работу ваших сервисов, либо
				добавлять больше участников чтобы каждый из них был подписан на меньшее количество партиций и
				лучше справлялся с выделенной нагрузкой.
			</Notes>
		</Slide>
	</Slide>

	<Slide bgImage="{assetsDir}/bg-advanced-patterns.webp" bgImageOpacity={defaultBgOpacity}>
		<div class="text-8xl">Продвинутые паттерны</div>
		<Notes>
			В этом большом блоке я хочу поделиться некоторыми рецептами как решать основные по моему
			мнению проблемы, вызванными использованием промежуточного звена в виде брокера сообщений. Я
			буду опираться на примеры с Apache Kafka, но в целом решения эти самодостаточные и могут быть
			использованы вместе с другими брокерами.
		</Notes>
	</Slide>

	<Slide bgImage="{assetsDir}/bg-duplicates.webp" bgImageOpacity={defaultBgOpacity}>
		<Slide>
			<div class="text-8xl">Дедупликация сообщений</div>
			<ul class="!mt-10 block space-y-4">
				<FragmentListItem>
					Из коробки только at least once доставка и то с натяжкой
				</FragmentListItem>
				<FragmentListItem>
					Встроенный идемпотентный отправитель отсеивает только повторы самого клиента
				</FragmentListItem>
			</ul>
			<Notes>
				Как вы наверное заметили, Apache Kafka предоставляет достаточно слабые гарантии доставки и
				более того никак не гарантирует что сообщение в итоге будет кем-то обработано. Это всё в
				совокупности складывается из её дизайна и целей которым этот дизайн соответствует -
				скорость, масштабирование и надежность хранения данных.
				<br /><br />
				Упрощая можно сказать, что популярные клиенты кафки пытаются гарантировать at least once доставку
				сообщения, так как при возникновении сетевых ошибок пытаются повторить запрос. Но такое поведение
				приводит к одной неприятной проблеме - дублированию сообщений. Это можно решить двумя способами.
				<br /><br />
				Самый простой вариант это перевести продьюсера в режим идемпотентной отправки, когда повторы
				самого клиента Apache Kafka будут дедуплицироваться на стороне брокера. Но это вносит дополнительные
				издержки, да и полноценной защиты от дубликатов всё же нет, так например при перезагрузке всего
				приложения вы всё так же можете повторно отправить сообщения, которые брокер уже не распознает
				как дубликаты.
			</Notes>
		</Slide>
		<Slide>
			<div class="text-8xl">Идемпотентный потребитель</div>
			<ul class="!mt-10 block space-y-4">
				<FragmentListItem>Не надейтесь на exactly once delivery</FragmentListItem>
				<FragmentListItem>
					Уникальный и консистентный ключ сообщения позволит фильтровать уже обработанные сообщения
				</FragmentListItem>
			</ul>
			<Notes>
				Мы у себя в команде пробовали включать этот режим и даже экспериментировали с транзакциями,
				но остались недовольны упавшей пропускной способностью наших сервисов и в целом отсутствия
				полноценного решения проблемы.
				<br /><br />
				Поэтому решили проблему более надежным рабоче-крестьянским способом - создали уникальный и консистентный
				ключ идемпотентности, который по сути уникально идентифицировал контент нашего сообщения, а проверка
				такого ключа происходила на уровне базы, так как по факту нам в любом случае требовалось сохранять
				данные. Сразу хочу заметить что идемпотентные операции это задача посложнее чем идемпотентная
				отправка сообщения, но в нашем случае эти две задачи были эквивалентны.
			</Notes>
		</Slide>
	</Slide>

	<Slide bgImage="{assetsDir}/bg-delivery.webp" bgImageOpacity={defaultBgOpacity}>
		<Slide>
			<div class="text-8xl">Гарантированная доставка</div>
			<Notes>
				Другая проблема заключается в том факте, что в более-менее реальных условиях сложно
				удостовериться в том, что сообщение было отправлено.
			</Notes>
		</Slide>
		<Slide>
			<div class="mermaid">
				{`
					%%{init: {'theme': 'dark', 'themeVariables': { 'darkMode': true }}}%%
					sequenceDiagram
						actor User
						participant OrdersService as Orders Service
						participant OrdersDB as Orders Database
						participant ShippingService as Shipping Service

						User->>OrdersService: Создать заказ
						
						activate OrdersService
						
						OrdersService->>OrdersDB: Создать запись о заказе
						
						activate OrdersDB

						alt Заказ уже создан

						OrdersDB-->>OrdersService: Заказ не сохранён из-за конфликта

						OrdersService-->>User: Ошибка: Заказ уже существует

						else Заказа в базе нет
						
						OrdersDB-->>OrdersService: Заказ сохранён
						deactivate OrdersDB

						OrdersService->>ShippingService: Отправить заказ (async)

						OrdersService-->>User: Заказ создан
						deactivate OrdersService

						end

						activate ShippingService
						ShippingService-->>OrdersService: Заказ отправлен
						deactivate ShippingService

						activate OrdersService

						OrdersService->>OrdersDB: Обновить запись заказа

						activate OrdersDB
						OrdersDB-->>OrdersService: Заказ обновлён
						deactivate OrdersDB

						deactivate OrdersService
				`}
			</div>
			<Notes>
				Возьмём упрощённый пример: сервис заказов получает запрос от пользователя, сохраняет запись
				в свою базу, отправляет сообщение в топик для сервиса доставки и сообщает пользователю что
				заказ создан. Потом сервис так же асинхронно получает сообщение от сервиса доставки что
				товар был отправлен, что приводит к обновлению статуса заказа в его базе данных.
			</Notes>
		</Slide>
		<Slide>
			<div class="flex flex-row justify-start gap-10">
				<img
					class="!mt-0 w-[70%]"
					src="{assetsDir}/delivery-failure-errors.png"
					alt="3 points of failure in delivery use-case"
				/>
				<div class="flex flex-col">
					<div class="text-left text-2xl">Три плохих сценария:</div>
					<ul class="!mt-10 space-y-4">
						<FragmentListItem>Сохранение в БД завершилось с ошибкой</FragmentListItem>
						<FragmentListItem>
							Данные были сохранены, но отправка завершилась с ошибкой
						</FragmentListItem>
						<FragmentListItem>
							Сообщение было отправлено, но до пользователя ответ не дошёл
						</FragmentListItem>
					</ul>
				</div>
			</div>
			<Notes>
				На этом пути возникает сразу 3 возможные плохие ситуации:
				<ul>
					<li>Сохранение в БД завершилось с ошибкой</li>
					<li>Данные были сохранены, но сообщение не было отправлено</li>
					<li>Сообщение было отправлено, но до пользователя ответ не дошёл</li>
				</ul>
				<br /><br />
				Все 3 случая могут привести к тому, что сообщение будет прочитано ещё раз и в зависимости от
				реализации новое сообщение уже не будет отправлено. Например в случае повторного запроса сервис
				снова будет проводить запись в БД, но запрос завершится с конфликтом так как такие данные уже
				есть. И вот тут всё зависит от нашего решения, будем ли мы пытаться отправить такие сообщения
				или нет. Например для нашего случая повторная отправка исключена и нам нужно придумать способ,
				как не терять сообщения.
			</Notes>
		</Slide>
		<Slide>
			<div class="text-8xl">Транзакции на отправку в топик</div>

			<div class="mx-auto flex flex-row items-start justify-center text-2xl">
				<div class="w-1/3 text-green-400">
					<ul class="!mt-10 space-y-4">
						<li class="fragment">Можно объединить с транзакцией в БД</li>
					</ul>
				</div>
				<div class="w-1/3 text-red-500">
					<ul class="!ml-20 !mt-10 space-y-4">
						<li class="fragment">Дополнительные издержки</li>
						<li class="fragment">Всё ещё есть шанс потерять сообщение</li>
					</ul>
				</div>
			</div>
			<Notes>
				Решение которое предлагает сама Apache Kafka - это создание транзакции на отправку.
				<br /><br />
				Её можно объединить в транзакцией в БД и в случае поломки одной из них - обе они откатятся.
				<br /><br />
				Один из недостатков такого подхода в том, что он может значительно замедлить обработку.
				<br /><br />
				Второй - мы всё равно полностью не защитимся от потери сообщения если полностью положимся на
				транзакции, потому что даже не смотря на то что ваши коллеги-разработчики увидят связанные транзакции,
				по факту комитятся они по отдельности и если что-то произойдёт между этими двумя комитами - мы
				вернёмся к той же самой проблеме.
			</Notes>
		</Slide>
		<Slide>
			<div class="text-8xl">Transactional Outbox</div>
			<Notes>
				Конечно этот способ в целом проще и удобнее с точки зрения дизайна, но есть и другой вариант
				- применить так называемый паттерн Outbox (или Transactional Outbox).
			</Notes>
		</Slide>
		<Slide>
			<div class="mermaid mb-10 mt-10 flex flex-col items-center">
				{`
					%%{init: {'theme': 'dark', 'themeVariables': { 'darkMode': true }}}%%
					sequenceDiagram
						actor User
						participant OrdersService as Orders Service
						participant OrdersTable as Orders Table
						participant OutboxTable as Outbox Table
						participant EventsDispatcher as Events Dispatcher
						participant ShippingService as Shipping Service

						User->>OrdersService: Создать заказ
						
						activate OrdersService
						
						critical Транзакция в БД
						OrdersService->>OrdersTable: Вставить заказ
						OrdersService->>OutboxTable: Вставить сообщение
						end

						OrdersService-->>User: Заказ создан
						deactivate OrdersService

						activate EventsDispatcher

						EventsDispatcher->>OutboxTable: Запросить сообщения
						activate OutboxTable
						OutboxTable->>EventsDispatcher: Сообщения на отправку
						deactivate OutboxTable

						critical Транзакция в БД
						EventsDispatcher->>ShippingService: Отправить заказ (async)
						EventsDispatcher->>OutboxTable: Удалить сообщение
						EventsDispatcher->>OrdersTable: Обновить заказ
						end

						deactivate EventsDispatcher
				`}
			</div>
			<Notes>
				Его суть достаточно проста - вместо того чтобы одновременно сохранять данные и отправлять
				сообщение в топик, вы при обработке входящего запроса или сообщения только сохраняете запись
				в базу, оригинальная идея предлагает делать запись в два места - в саму таблицу с данными и
				в специальную таблицу Outbox с сообщениями подлежащими отправке.
				<br /><br />
				Если вы используете для этих целей одну и ту же базу с поддержкой транзакций, то и обе записи
				будут надёжно обёрнуты одной транзакцией. В то же время отдельный фоновый обработчик слушает
				изменения в таблице Outbox и делает попытки отправить сообщения в очередь.
				<br /><br />
				Если отправка удалась, то он удаляет из Outbox соответствующие записи. Тут вы можете так же открыть
				транзакцию на удаление записей, чтобы в случае неудачной отправки у него была возможность попробовать
				снова.
				<br /><br />
				В целом открывать транзакцию в Apache Kafka в этом случае не имеет смысла, поскольку это не даст
				никаких дополнительный гарантий, а только дополнительные издержки.
			</Notes>
		</Slide>
		<Slide>
			<div class="text-8xl">Вариативность Outbox</div>
			<ul class="!mt-10 space-y-4">
				<FragmentListItem>"Стриминг" данных из таблицы с данными</FragmentListItem>
				<FragmentListItem>
					Помечать сообщения отправленными, слушая топик в который сам пишешь
				</FragmentListItem>
			</ul>
			<Notes>
				С этим подходом можно поэкспериментировать.
				<br /><br />
				Например у многих баз данный есть возможность стримить изменения в определённой коллекции. Если
				например слушать оповещения о создании новых записей в таблице с данными, вы можете обойтись
				без дополнительной таблицы Outbox, правда хочу заметить что такой подход не во всех случаях может
				сработать, так как у истории изменений в таблице так же есть своё время жизни.
				<br /><br />
				Так же вы можете обойтись и без транзакций на пометку отправленных данных, например если сервис
				отправляющий сообщение в топик будет его же и слушать. Каждое сообщение уже будет приводить к
				разметке или удалению данных, так как вы точно знаете что сообщение было отправлено.
			</Notes>
		</Slide>
		<Slide>
			<div class="text-5xl">Таблица Outbox - по сути ещё одна очередь</div>
			<Notes>
				И не забывайте что при таком подходе вы по факту используете вашу базу данных как
				своеобразную очередь, поэтому задумайтесь о том сколько места будет занимать эта виртуальная
				очередь.
			</Notes>
		</Slide>
	</Slide>

	<Slide bgImage="{assetsDir}/bg-distributed-transactions.webp" bgImageOpacity={defaultBgOpacity}>
		<Slide>
			<div class="text-6xl">Распределённые транзакции в микросервисах</div>
			<ul class="!mt-10 space-y-4">
				<FragmentListItem>Синхронные алгоритмы</FragmentListItem>
				<FragmentListItem>
					Сложно объединить очень разные сервисы одной транзакцией
				</FragmentListItem>
			</ul>
			<Notes>
				Раз мы затронули тему транзакций, я не могу не упомянуть про распределённые транзакции.
				<br /><br />
				Реализаций их много и пишут их очень давно, но большинство из них страдает одной болезнью - их
				алгоритмы синхронные, оттого медленные, а некоторые, например двухфазный коммит, ещё и могут
				оставить систему в навечно повисшем состоянии.
				<br /><br />
				Плюс в микросервисной архитектуре транзакции происходят не просто между совместимыми базами данных,
				а между сервисами, и реализовывать что-то вроде eXtended Architecture transactions протокола
				на сервисах с разными технологическими стеками и разными базами - задача не самая простая.
			</Notes>
		</Slide>
		<Slide>
			<div class="text-6xl">Паттерн Saga</div>
			<div class="mermaid mb-10 mt-10 flex flex-col items-center">
				{`
					%%{init: {'theme': 'dark', 'themeVariables': { 'darkMode': true }}}%%
					graph LR
						A[Start Saga] --> B[Local Transaction 1]
						B --> C[Local Transaction 2]
						C --> D[Local Transaction 3]
						D --> E[Local Transaction N]
						E --> F[End Saga]

						subgraph Saga
							B
							C
							D
							E
						end
				`}
			</div>
			<Notes>
				Есть другой подход - Saga. Он очень похож на классические распределённые транзакции, но по
				факту делит одну большую транзакцию на несколько мелких, то есть каждый сервис транзакционно
				выполняет только свою часть.
				<br /><br />
				В целом асинхронное общение не обязательно, но часто при таком подходе участники распределённой
				транзакции читают и пишут через брокера сообщений. В принципе если вы уже и так что-то читаете
				и пишете, то вы можете переиспользовать уже имеющиеся очереди, если так будет удобно.
				<br /><br />
				Каждый участник на каждое сообщение с командой должен отправить ответ о результате её выполнения.
				Если одна локальная транзакция выполнилась успешно, то следующий участник выполняет свою, в противном
				случае все участники которые выполнили свою работу перед свалившимся должны совершить откатывающие
				изменения, которые по факту являются отменой проделанной работы.
				<br /><br />
				Основная задача такого подхода - это правильно организовать координацию в рамках Sagа. С точки
				зрения архитектуры есть два варианта как это предлагают делать - оркестрация и хореография, вот
				такая у нас высокопарная терминология в распределённых системах.
			</Notes>
		</Slide>
		<Slide>
			<div class="text-6xl">Оркестрация</div>
			<div class="mermaid mb-10 mt-10 flex flex-col items-center">
				{`
					%%{init: {'theme': 'dark', 'themeVariables': { 'darkMode': true }}}%%
					graph TB
						Start["Start Saga"] --> Saga

						subgraph Saga["Orchestration based saga"]

						SagaEventsTopic["Saga Events Topic"] -. consumed by .-> Orchestrator
						Orchestrator -- publish to --> Orders["Topic Orders"]
						Orders -. consumed by .-> OrdersService["Orders Service"]
						OrdersService -- publish to --> SagaEventsTopic["Topic SagaEvents"]
						
						
						Orchestrator -- publish to --> Shipping[Topic Shipping]
						Shipping -. consumed by .-> ShippingService["Shipping Service"]
						ShippingService -- publish to --> SagaEventsTopic

						end

						Saga --> Finish["Finish Saga"]
				`}
			</div>
			<Notes>
				Простыми словами оркестрация - это когда у вас есть отдельно выделенный обработчик Saga, по
				сути конечный автомат, который знает в каком порядке отправлять команды, как слушать
				результаты и в каком порядке откатывать изменения. Можно его назвать менеджером Saga.
				<br /><br />
				Такой подход хорош тем, что все остальные участники Saga мало что знают про саму Saga, они просто
				выполняют команду из одной очереди и пишут о результате в другую, по сути всё знание о транзакции
				лежит в оркестраторе и всё в одном месте.
				<br /><br />
				Плох же он тем, что оркестратор Saga - это отдельный сервис или класс со сложной логикой, ещё
				и состояние конечного автомата нужно где-то хранить.
			</Notes>
		</Slide>
		<Slide>
			<div class="text-6xl">Хореография</div>
			<div class="mermaid mb-10 mt-10 flex flex-col items-center">
				{`
					%%{init: {'theme': 'dark', 'themeVariables': { 'darkMode': true }}}%%
					graph LR
						Start[Start Saga] --> Saga
						subgraph Saga["Choreography based saga"]
							direction TB
							OrdersTopic[Topic Orders] -. consumed by .-> OrdersService[Order Service]
							OrdersService -- publish to --> OrdersEventsTopic[Topic OrdersEvents]
							OrdersEventsTopic -. consumed by .-> ShippingService[Shipping Service]
							ShippingService -- publish to --> ShippingEventsTopic[Topic ShippingEvents]
							ShippingEventsTopic -. consumed by .-> OrdersService
						end

						Saga --> End[Finish Saga]
				`}
			</div>
			<Notes>
				Хореография же подразумевает, что знание о Saga так или иначе размазано между разными
				сервисами, например сервисы связаны в цепочку, где каждое звено пишет в очередь, которое
				читает следующее, и наоборот.
				<br /><br />
				Например если у вас интернет-магазин, то сервису заказов приходит сообщение о новом заказе в
				топике Orders, он создаёт запись в своей базе и отправляет событие о том что заказ был создан
				в свой топик с результатами OrdersEvents. Сообщение из топика OrdersEvents читает сервис доставки,
				отправляет запрос на Web API транспортной компании и а затем отправляет событие о результате
				в топик ShippingEvents. Сервис заказов видит сообщение об успешной доставке и завершает Saga.
				Если доставка не удалась, то сервис заказов откатывает свои изменения.
				<br /><br />
				Если вы немного запутались в работе хореографии, то вы уже сами поняли её главный недостаток
				- такой способ подойдет для небольшого количество участников, но зато у вас по факту нет одного
				единственного менеджера Saga и меньше риск что всё сведётся к бутылочному горлышку. Хотя как
				по мне такая цель не оправдывает средства, но может быть у вас будет другой опыт.
				<br /><br />
				Мне лично как разработчику понятнее логика работы конечного автомата в виде оркестратора Saga,
				такой подход лучше масштабируется и подходит для реализации сложных сценариев, по сути кода так
				и так будет много, так хоть всё в одном месте.
			</Notes>
		</Slide>
	</Slide>

	<Slide>
		<div class="text-8xl">LIVE DEMO</div>
		<img
			class="!mx-auto w-1/3"
			src="{assetsDir}/live-demo-qr.png"
			alt="qr code for the live demo"
		/>
		<Notes></Notes>
	</Slide>

	<Slide bgImage="{assetsDir}/bg-thanks.webp" bgImageOpacity={defaultBgOpacity}>
		<div class="text-8xl">Спасибо за внимание</div>
		<Social />
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

	:global(.mermaid .nodeLabel) {
		line-height: 1;
		vertical-align: super;
	}

	:global(.mermaid .nodeLabel p) {
		margin: 0;
	}

	:global(.mermaid .edgeLabel) {
		line-height: 1 !important;
		vertical-align: super;
	}

	.animated-strikethrough {
		position: relative;
		display: inline-block;
	}

	.animated-strikethrough::after {
		content: '';
		position: absolute;
		top: 50%;
		left: 0;
		width: 0;
		height: 8px;
		background-color: aliceblue;
		transform: translateY(-50%);
	}

	:global(#group-rebalancing-slide.present) .animated-strikethrough::after {
		animation: draw-strikethrough 2s forwards;
	}

	@keyframes draw-strikethrough {
		to {
			width: 100%;
		}
	}
</style>
