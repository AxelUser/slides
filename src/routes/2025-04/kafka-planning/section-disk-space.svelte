<script>
	import Notes from '$lib/deck/notes.svelte';
	import Slide from '$lib/deck/slide.svelte';

	export let assetsDir = '';
	export let defaultBgOpacity = '0.5';
</script>

<Slide bgImage="{assetsDir}/disk_space_bg.jpg" bgImageOpacity={defaultBgOpacity}>
	<Slide>
		<div class="flex h-full items-center justify-center">
			<div class="text-7xl font-bold">Расчёт объёма хранилища</div>
		</div>
		<Notes>
			В этом разделе мы рассмотрим методику расчёта необходимого объёма хранилища для Kafka
			кластера, учитывая интенсивность сообщений, их размер и требования к хранению.
		</Notes>
	</Slide>
	<Slide>
		<div class="flex flex-col items-center">
			<div class="mb-12 text-5xl font-semibold">Ключевые факторы</div>
			<ul class="w-4/5 space-y-6">
				<li class="text-3xl">
					<strong>EPS</strong>: События в секунду
				</li>
				<li class="text-3xl">
					<strong>Размер сообщения</strong>: Средний объём в KB
				</li>
				<li class="text-3xl">
					<strong>Retention Period</strong>: Время хранения
				</li>
			</ul>
		</div>
		<Notes>
			При проектировании Kafka-кластера важно правильно оценить объём данных, которые будут
			храниться. Для этого учитываем три ключевых параметра: 1. Частота поступления сообщений (EPS)
			- сколько событий генерируется в секунду 2. Средний размер одного сообщения - зависит от
			формата и структуры данных 3. Время хранения (Retention Period) - сколько дней или часов
			сообщения будут доступны в Kafka. Все эти факторы напрямую влияют на требуемый объём дискового
			пространства.
		</Notes>
	</Slide>

	<Slide>
		<div class="flex flex-col items-center">
			<div class="mb-12 text-5xl font-semibold">Формула расчёта</div>
			<div class="mb-8 rounded-lg bg-black/20 p-4 font-mono text-3xl">
				Объём = Размер × EPS × Retention × RF
			</div>
			<ul class="w-4/5 space-y-4">
				<li class="text-2xl">
					<strong>+20-30%</strong> запаса на рост трафика
				</li>
				<li class="text-2xl">
					<strong>RF</strong> (Replication Factor) - умножает итоговый объём
				</li>
			</ul>
		</div>
		<Notes>
			Формула для расчёта необходимого дискового пространства: Объём = (Средний размер сообщения) ×
			(EPS) × (Retention в секундах) × (Replication Factor) После базового расчёта необходимо: 1.
			Добавить запас 20-30% на потенциальный рост трафика 2. Учесть фактор репликации (RF) - если
			RF=3, то итоговый объём умножается на 3, поскольку каждое сообщение хранится на трёх разных
			брокерах Важно переводить единицы измерения правильно: Retention в секунды (дни × 86400),
			размеры в согласованные единицы (байты или килобайты).
		</Notes>
	</Slide>

	<Slide>
		<div class="flex flex-col items-center">
			<div class="mb-12 text-5xl font-semibold">Примеры</div>
			<div class="grid w-4/5 grid-cols-2 gap-8">
				<div class="rounded-lg bg-black/20 p-4">
					<div class="mb-2 text-3xl"><strong>Случай 1</strong></div>
					<ul class="space-y-2">
						<li class="text-2xl">1000 EPS, 1 KB</li>
						<li class="text-2xl">7 дней, RF=3</li>
						<li class="mt-3 rounded bg-black/30 p-2 font-mono text-xl">
							1000 × 1 KB × 7 × 86400 × 3 ≈ 1.69 ТБ
						</li>
					</ul>
				</div>
				<div class="rounded-lg bg-black/20 p-4">
					<div class="mb-2 text-3xl"><strong>Случай 2</strong></div>
					<ul class="space-y-2">
						<li class="text-2xl">5000 EPS, 2 KB</li>
						<li class="text-2xl">3 дня, RF=2</li>
						<li class="mt-3 rounded bg-black/30 p-2 font-mono text-xl">
							5000 × 2 KB × 3 × 86400 × 2 ≈ 4.83 ТБ
						</li>
					</ul>
				</div>
			</div>
		</div>
		<Notes>
			Рассмотрим два примера расчёта дискового пространства: Пример 1: - 1000 сообщений в секунду
			(EPS) - Размер сообщения: 1 KB - Retention: 7 дней - Replication Factor: 3 - Расчёт: 1000 × 1
			KB × (7 дней × 86400 сек/день) × 3 = 1,814,400,000 KB = 1,730.3 GB ≈ 1.69 ТБ (делим на 1024²
			для перевода из KB в TB) Пример 2: - 5000 сообщений в секунду - Размер сообщения: 2 KB -
			Retention: 3 дня - Replication Factor: 2 - Расчёт: 5000 × 2 KB × (3 дня × 86400 сек/день) × 2
			= 5,184,000,000 KB = 4,943.8 GB ≈ 4.83 ТБ (делим на 1024² для перевода из KB в TB) Эти примеры
			наглядно показывают, как различные параметры влияют на итоговый объём хранилища. Обратите
			внимание, что более интенсивный поток и больший размер сообщений могут значительно увеличить
			требуемое пространство даже при меньшем retention периоде.
		</Notes>
	</Slide>
</Slide>
