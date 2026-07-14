<script lang="ts">
	import { t } from '$lib/i18n';
	import { reveal } from '$lib/actions';
</script>

<section id="about" class="section-container">
	<h2 class="text-3xl sm:text-4xl font-thin tracking-tight text-center mb-12 reveal">{$t('about.title')}</h2>

	<div class="grid md:grid-cols-2 gap-12 items-center">
		<div use:reveal class="space-y-4">
			<p class="text-base sm:text-lg text-ink-secondary font-thin leading-relaxed">
				{$t('about.p1')}
			</p>
			<p class="text-base sm:text-lg text-ink-secondary font-thin leading-relaxed">
				{$t('about.p2')}
			</p>
			<div class="flex flex-wrap gap-2 mt-6">
				<span class="tag">SvelteKit</span>
				<span class="tag">Vue.js</span>
				<span class="tag">Laravel</span>
				<span class="tag">TypeScript</span>
				<span class="tag">TailwindCSS</span>
			</div>
		</div>

		<div use:reveal class="card p-8">
			<h3 class="text-xl font-semibold tracking-tight mb-6">{$t('about.experience_title')}</h3>
			<div class="space-y-6">
				<div class="border-l-2 border-primary-600 pl-4">
					<h4 class="font-medium text-base">{$t('about.exp1_title')}</h4>
					<p class="text-sm text-ink-mute">{$t('about.exp1_period')}</p>
					<p class="mt-1.5 text-sm text-ink-secondary">
						{$t('about.exp1_desc')}
					</p>
				</div>
				<div class="border-l-2 border-primary-600 pl-4">
					<h4 class="font-medium text-base">{$t('about.exp2_title')}</h4>
					<p class="text-sm text-ink-mute">{$t('about.exp2_period')}</p>
					<p class="mt-1.5 text-sm text-ink-secondary">
						{$t('about.exp2_desc')}
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
