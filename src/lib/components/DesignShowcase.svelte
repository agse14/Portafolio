<script lang="ts">
	import { t, locale } from '$lib/i18n';
	import en from '$lib/i18n/en';
	import es from '$lib/i18n/es';
	import type enType from '$lib/i18n/en';

	let activeCategory = $state('todas');
	let cardsVisible = $state<Set<number>>(new Set());

	let currentLocale = $state('en');
	locale.subscribe((l) => { currentLocale = l; })();

	const allTranslations: Record<string, typeof enType> = { en, es };

	const filterCategories = [
		{ id: 'todas', labelKey: 'design.filter_all' },
		{ id: 'ads', labelKey: 'design.filter_ads' },
		{ id: 'social', labelKey: 'design.filter_social' },
		{ id: 'branding', labelKey: 'design.filter_branding' },
		{ id: 'video', labelKey: 'design.filter_video' },
		{ id: 'campanas', labelKey: 'design.filter_campaigns' }
	];

	const projectMeta = [
		{ image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop' },
		{ image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop' },
		{ image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=400&fit=crop' },
		{ image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=600&h=400&fit=crop' },
		{ image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&h=400&fit=crop' },
		{ image: 'https://images.unsplash.com/photo-1504711434969-e33886168d6c?w=600&h=400&fit=crop' },
		{ image: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=600&h=400&fit=crop' },
		{ image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop' }
	];

	let projectItems = $derived(allTranslations[currentLocale].design.projects);

	let filtered = $derived(
		activeCategory === 'todas'
			? projectItems.map((p, i) => ({ ...p, index: i, meta: projectMeta[i] }))
			: projectItems
				.map((p, i) => ({ ...p, index: i, meta: projectMeta[i] }))
				.filter((p) => p.category === activeCategory)
	);

	function observeCard(node: HTMLElement) {
		const id = Number(node.dataset.cardId);
		if (!id) return { destroy() {} };

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					cardsVisible.add(id);
					cardsVisible = new Set(cardsVisible);
					observer.disconnect();
				}
			},
			{ threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
		);
		observer.observe(node);
		return { destroy: () => { observer.disconnect(); } };
	}
</script>

<section class="section-container" style="background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,241,242,0.4) 50%, rgba(255,255,255,1) 100%);">
	<div class="text-center mb-14">
		<h2 class="text-3xl sm:text-4xl lg:text-5xl font-thin tracking-tight mb-4">
			<span class="bg-gradient-to-r from-design-600 via-rose-500 to-amber-500 bg-clip-text text-transparent">
				{$t('design.showcase_title')}
			</span>
		</h2>
		<p class="text-ink-secondary text-lg max-w-2xl mx-auto">
			{$t('design.showcase_subtitle')}
		</p>
	</div>

	<div class="flex flex-wrap justify-center gap-2 mb-14">
		{#each filterCategories as cat}
			<button
				onclick={() => (activeCategory = cat.id)}
				class="relative px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300
					{activeCategory === cat.id
						? 'text-white'
						: 'text-ink-secondary bg-white hover:bg-design-50 border border-design-200/30 hover:border-design-300/50'}"
			>
				{#if activeCategory === cat.id}
					<span class="absolute inset-0 rounded-full bg-gradient-to-r from-design-600 to-rose-500 shadow-lg shadow-design-600/25 animate-scale-in"></span>
					<span class="relative z-10">{$t(cat.labelKey)}</span>
				{:else}
					{$t(cat.labelKey)}
				{/if}
			</button>
		{/each}
	</div>

	<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
		{#each filtered as project}
			<div
				use:observeCard
				data-card-id={project.index}
				class="card-design group cursor-default"
				style="opacity: {cardsVisible.has(project.index) ? 1 : 0}; transform: translateY({cardsVisible.has(project.index) ? 0 : 30}px); transition: opacity 0.5s ease-out {project.index * 0.08}s, transform 0.5s ease-out {project.index * 0.08}s, box-shadow 0.5s ease;"
			>
				<div class="relative h-52 overflow-hidden rounded-t-xl">
					<img
						src={project.meta.image}
						alt={project.title}
						class="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-[1deg]"
						loading="lazy"
					/>
					<div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
				</div>

				<div class="p-6">
					<h3 class="text-lg font-semibold tracking-tight mb-2 group-hover:text-design-700 transition-colors duration-300">{project.title}</h3>
					<p class="text-sm text-ink-secondary leading-relaxed mb-4">
						{project.description}
					</p>

					<div class="flex flex-wrap gap-1.5 mb-4">
						{#each project.tags as tag}
							<span class="tag-design">{tag}</span>
						{/each}
					</div>

					<div class="pt-1">
						<a
							href="#"
							class="inline-flex items-center text-sm font-medium text-design-600 hover:text-design-700 transition-all duration-300 gap-1.5 group/btn"
						>
							<svg class="w-4 h-4 transition-transform duration-300 group-hover/btn:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
							</svg>
							<span>{$t('design.view_project')}</span>
							<svg class="w-3.5 h-3.5 transition-all duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
							</svg>
						</a>
					</div>
				</div>
			</div>
		{/each}
	</div>

	{#if filtered.length === 0}
		<div class="text-center py-16">
			<p class="text-ink-mute text-lg">{$t('design.empty')}</p>
		</div>
	{/if}
</section>
