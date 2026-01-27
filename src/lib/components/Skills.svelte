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
	<h2 class="text-4xl font-bold text-center mb-12">Habilidades</h2>
	
	<div class="grid md:grid-cols-3 gap-8">
		{#each skills as skillGroup}
			<div class="card p-6">
				<h3 class="text-2xl font-bold mb-6 text-primary-600 dark:text-primary-400">
					{skillGroup.category}
				</h3>
				
				<div class="space-y-4">
					{#each skillGroup.items as skill}
						<div>
							<div class="flex justify-between mb-1">
								<span class="text-sm font-medium">{skill.name}</span>
								<span class="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
							</div>
							<div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
								<div 
									class="bg-primary-600 h-2 rounded-full transition-all duration-1000 ease-out"
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
