<script lang="ts">
	import { t } from '$lib/i18n';
	import { reveal } from '$lib/actions';

	let barsAnimated = $state(false);
</script>

<section id="skills" class="section-container">
	<h2 class="text-3xl sm:text-4xl font-thin tracking-tight text-center mb-12 reveal">{$t('skills.title')}</h2>

	<div class="grid md:grid-cols-3 gap-6">
		<div use:reveal class="card p-6">
			<h3 class="text-lg font-semibold tracking-tight mb-6 text-primary-600">
				{$t('skills.categories.0')}
			</h3>
			<div class="space-y-4">
				{#each [['Svelte/SvelteKit', 95], ['Vue.js/Nuxt.js', 90], ['TypeScript', 88], ['TailwindCSS', 92], ['Vuetify/Bootstrap', 85]] as [name, level]}
					<div>
						<div class="flex justify-between mb-1.5">
							<span class="text-sm text-ink-secondary">{name}</span>
							<span class="text-xs text-ink-mute">{level}%</span>
						</div>
						<div class="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
							<div
								class="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full transition-all duration-1000 ease-out"
								style="width: {level}%"
							></div>
						</div>
					</div>
				{/each}
			</div>
		</div>

		<div use:reveal class="card p-6">
			<h3 class="text-lg font-semibold tracking-tight mb-6 text-primary-600">
				{$t('skills.categories.1')}
			</h3>
			<div class="space-y-4">
				{#each [['Laravel/PHP', 90], ['OAuth2/Passport', 85], ['MySQL/PostgreSQL', 88], ['REST APIs', 92], ['Firebase', 75]] as [name, level]}
					<div>
						<div class="flex justify-between mb-1.5">
							<span class="text-sm text-ink-secondary">{name}</span>
							<span class="text-xs text-ink-mute">{level}%</span>
						</div>
						<div class="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
							<div
								class="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full transition-all duration-1000 ease-out"
								style="width: {level}%"
							></div>
						</div>
					</div>
				{/each}
			</div>
		</div>

		<div use:reveal class="card p-6">
			<h3 class="text-lg font-semibold tracking-tight mb-6 text-primary-600">
				{$t('skills.categories.2')}
			</h3>
			<div class="space-y-4">
				{#each [['Playwright/Jest', 85], ['Git/GitHub', 95], ['Vite/Rollup', 88], ['ApexCharts', 80], ['RxJS', 78]] as [name, level]}
					<div>
						<div class="flex justify-between mb-1.5">
							<span class="text-sm text-ink-secondary">{name}</span>
							<span class="text-xs text-ink-mute">{level}%</span>
						</div>
						<div class="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
							<div
								class="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full transition-all duration-1000 ease-out"
								style="width: {level}%"
							></div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
