<script lang="ts">
	const skills = [
		{
			category: "Frontend",
			items: [
				{ name: "Svelte/SvelteKit", level: 95 },
				{ name: "Vue.js/Nuxt.js", level: 90 },
				{ name: "TypeScript", level: 88 },
				{ name: "TailwindCSS", level: 92 },
				{ name: "Vuetify/Bootstrap", level: 85 }
			]
		},
		{
			category: "Backend",
			items: [
				{ name: "Laravel/PHP", level: 90 },
				{ name: "OAuth2/Passport", level: 85 },
				{ name: "MySQL/PostgreSQL", level: 88 },
				{ name: "REST APIs", level: 92 },
				{ name: "Firebase", level: 75 }
			]
		},
		{
			category: "Testing & Tools",
			items: [
				{ name: "Playwright/Jest", level: 85 },
				{ name: "Git/GitHub", level: 95 },
				{ name: "Vite/Rollup", level: 88 },
				{ name: "ApexCharts", level: 80 },
				{ name: "RxJS", level: 78 }
			]
		}
	];
</script>

<section id="skills" class="section-container">
	<h2 class="text-3xl sm:text-4xl font-thin tracking-tight text-center mb-12">Habilidades</h2>

	<div class="grid md:grid-cols-3 gap-6">
		{#each skills as skillGroup}
			<div class="card p-6">
				<h3 class="text-lg font-semibold tracking-tight mb-6 text-primary-600">
					{skillGroup.category}
				</h3>

				<div class="space-y-4">
					{#each skillGroup.items as skill}
						<div>
							<div class="flex justify-between mb-1.5">
								<span class="text-sm text-ink-secondary">{skill.name}</span>
								<span class="text-xs text-ink-mute">{skill.level}%</span>
							</div>
							<div class="w-full bg-gray-100 rounded-full h-1.5">
								<div
									class="bg-primary-600 h-1.5 rounded-full transition-all duration-1000 ease-out"
									style="width: {skill.level}%"
								></div>
							</div>
						</div>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</section>
