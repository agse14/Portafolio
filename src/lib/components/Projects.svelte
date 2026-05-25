<script lang="ts">
	const projects = [
		{
			id: 1,
			title: "Laravel Vue Dashboard",
			description: "Dashboard SPA empresarial con autenticación OAuth2 usando Laravel Passport, gestión de usuarios, verificación de email y sistema de notificaciones.",
			image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
			tags: ["Laravel", "Vue.js", "OAuth2", "Bootstrap"],
			github: "https://github.com/agse14/mezclas-incmnsz",
			demo: "#"
		},
		{
			id: 2,
			title: "Administrador Web",
			description: "Sistema administrativo moderno con +200 controles personalizados, 160+ páginas administrativas, reportes y visualizaciones con ApexCharts.",
			image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
			tags: ["Svelte", "TailwindCSS", "ApexCharts", "Jest"],
			github: "https://github.com/mpn",
			demo: "https://sistema.losolivosestancias.com.mx/"
		},
		{
			id: 3,
			title: "MPN Nuxt Platform",
			description: "Plataforma web con arquitectura Nuxt.js, internacionalización i18n, editor TipTap, drag & drop y gestión reactiva de estados con RxJS.",
			image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
			tags: ["Nuxt.js", "Vuetify", "RxJS", "i18n"],
			github: "https://github.com/mpn",
			demo: "#"
		},
		{
			id: 4,
			title: "Supra & Teramago",
			description: "Aplicaciones web progresivas con SvelteKit y TypeScript, testing E2E con Playwright, DataTables y exportación de archivos.",
			image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
			tags: ["SvelteKit", "TypeScript", "Playwright", "Vite"],
			github: "https://github.com/mpn",
			demo: "https://supra-red.vercel.app/"
		},
		{
			id: 5,
			title: "Counduent Juarez",
			description: "Sistema web empresarial con SvelteKit, manejo de archivos con file-saver, visualización de datos temporales y suite completa de testing.",
			image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
			tags: ["SvelteKit", "TypeScript", "TailwindCSS", "Luxon"],
			github: "https://github.com/mpn",
			demo: "https://conduent-si.vercel.app/"
		},
		{
			id: 6,
			title: "Sistema Cotizador",
			description: "Aplicación SPA para generar y gestionar cotizaciones con interfaz reactiva, gráficos interactivos con ApexCharts y diseño responsive.",
			image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
			tags: ["Svelte", "TailwindCSS", "ApexCharts", "Rollup"],
			github: "https://github.com/mpn",
			demo: "https://cotizador.cuida24.com/"
		}
	];
</script>

<section id="projects" class="section-container bg-surface-soft">
	<h2 class="text-3xl sm:text-4xl font-thin tracking-tight text-center mb-12">Proyectos Destacados</h2>

	<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
		{#each projects as project}
			<div class="card overflow-hidden group">
				<div class="relative h-48 bg-gray-100 overflow-hidden">
					<img
						src={project.image}
						alt={project.title}
						class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
						loading="lazy"
					/>
				</div>

				<div class="p-6">
					<h3 class="text-lg font-semibold tracking-tight mb-2">{project.title}</h3>
					<p class="text-sm text-ink-secondary leading-relaxed mb-4">
						{project.description}
					</p>

					<div class="flex flex-wrap gap-1.5 mb-4">
						{#each project.tags as tag}
							<span class="tag">{tag}</span>
						{/each}
					</div>

					<div class="flex gap-3 pt-1">
						<a href={project.github} target="_blank" rel="noopener noreferrer" class="text-xs font-medium text-primary-600 hover:text-primary-700 flex items-center gap-1.5">
							<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
								<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
							</svg>
							Código
						</a>
						<a href={project.demo} target="_blank" rel="noopener noreferrer" class="text-xs font-medium text-primary-600 hover:text-primary-700 flex items-center gap-1.5">
							<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
							</svg>
							Demo
						</a>
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>
