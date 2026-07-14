<script lang="ts">
	import { locale } from '$lib/i18n';
	import { t } from '$lib/i18n';
	import en from '$lib/i18n/en';
	import es from '$lib/i18n/es';
	import type enType from '$lib/i18n/en';

	const meta = [
		{
			image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
			github: "https://github.com/agse14/mezclas-incmnsz",
			demo: "#"
		},
		{
			image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
			github: "https://github.com/mpn",
			demo: "https://sistema.losolivosestancias.com.mx/"
		},
		{
			image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
			github: "https://github.com/mpn",
			demo: "#"
		},
		{
			image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
			github: "https://github.com/mpn",
			demo: "https://supra-red.vercel.app/"
		},
		{
			image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
			github: "https://github.com/mpn",
			demo: "https://conduent-si.vercel.app/"
		},
		{
			image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
			github: "https://github.com/mpn",
			demo: "https://cotizador.cuida24.com/"
		}
	];

	const allTranslations: Record<string, typeof enType> = { en, es };

	let currentLocale = $state('en');
	locale.subscribe((l) => { currentLocale = l; })();

	let items = $derived(allTranslations[currentLocale].projects.items);
</script>

<section id="projects" class="section-container bg-surface-soft">
	<h2 class="text-3xl sm:text-4xl font-thin tracking-tight text-center mb-12">{$t('projects.title')}</h2>

	<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
		{#each items as item, i}
			<div class="card overflow-hidden group">
				<div class="relative h-48 bg-gray-100 overflow-hidden">
					<img
						src={meta[i].image}
						alt={item.title}
						class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
						loading="lazy"
					/>
				</div>

				<div class="p-6">
					<h3 class="text-lg font-semibold tracking-tight mb-2">{item.title}</h3>
					<p class="text-sm text-ink-secondary leading-relaxed mb-4">
						{item.description}
					</p>

					<div class="flex flex-wrap gap-1.5 mb-4">
						{#each item.tags as tag}
							<span class="tag">{tag}</span>
						{/each}
					</div>

					<div class="flex gap-3 pt-1">
						<a href={meta[i].github} target="_blank" rel="noopener noreferrer" class="text-xs font-medium text-primary-600 hover:text-primary-700 flex items-center gap-1.5">
							<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
								<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
							</svg>
							{$t('projects.code')}
						</a>
						<a href={meta[i].demo} target="_blank" rel="noopener noreferrer" class="text-xs font-medium text-primary-600 hover:text-primary-700 flex items-center gap-1.5">
							<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
							</svg>
							{$t('projects.demo')}
						</a>
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>
