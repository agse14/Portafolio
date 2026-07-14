<script lang="ts">
	import { onMount } from 'svelte';
	import { t } from '$lib/i18n';

	let heroMounted = $state(false);

	onMount(() => {
		requestAnimationFrame(() => { heroMounted = true; });
	});
</script>

<section id="home" class="relative min-h-screen flex items-center justify-center overflow-hidden">
	<!-- Animated gradient bg -->
	<div class="absolute inset-0 bg-gradient-to-br from-primary-50 via-indigo-50 to-surface-soft bg-[length:200%_200%] animate-gradient opacity-80"></div>

	<!-- Floating elements -->
	<div class="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
		<div class="absolute top-20 left-[5%] w-80 h-80 rounded-full bg-gradient-to-br from-primary-300/20 to-primary-500/10 blur-3xl animate-float"></div>
		<div class="absolute top-1/3 right-[10%] w-64 h-64 rounded-full bg-gradient-to-br from-indigo-300/20 to-primary-400/10 blur-3xl animate-float-slow"></div>
		<div class="absolute bottom-1/4 left-[15%] w-72 h-72 rounded-full bg-gradient-to-br from-primary-200/15 to-indigo-300/10 blur-3xl animate-float-delayed"></div>
		<div class="absolute top-1/4 left-[30%] w-6 h-6 border-2 border-primary-300/40 rotate-45 animate-float" style="animation-delay: 1s"></div>
		<div class="absolute top-[60%] right-[20%] w-4 h-4 bg-primary-400/30 rounded-full animate-float" style="animation-delay: 0.5s"></div>
		<div class="absolute top-[20%] right-[30%] w-5 h-5 border-2 border-indigo-300/40 rotate-12 animate-float-slow" style="animation-delay: 1.5s"></div>
	</div>

	<!-- Radial gradient overlay -->
	<div class="absolute inset-0 opacity-30" style="background: radial-gradient(ellipse 80% 60% at 50% -10%, #a5b4fc 0%, #818cf8 30%, #533afd 60%, transparent 70%), radial-gradient(ellipse 60% 50% at 80% 20%, #f5e9d4 0%, transparent 50%), radial-gradient(ellipse 50% 40% at 20% 30%, #e0e7ff 0%, transparent 50%);"></div>

	<div class="section-container text-center relative z-10">
		<div class="opacity-0 {heroMounted ? 'animate-slide-up' : ''}" style="animation-delay: 0.1s; animation-fill-mode: forwards;">
			<span class="inline-flex px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-xs font-medium tracking-wide uppercase mb-6 border border-primary-200/50">
				{$t('hero.badge')}
			</span>
		</div>

		<h1 class="opacity-0 {heroMounted ? 'animate-slide-up' : ''} text-5xl sm:text-6xl lg:text-7xl font-thin tracking-tightest leading-tight mb-6 text-ink" style="animation-delay: 0.2s; animation-fill-mode: forwards;">
			{$t('hero.title1')} <span class="text-primary-600 font-normal">{$t('hero.title2')}</span><br />
			{$t('hero.title3')}
		</h1>

		<p class="opacity-0 {heroMounted ? 'animate-slide-up' : ''} text-lg sm:text-xl text-ink-secondary font-thin max-w-2xl mx-auto mb-10 leading-relaxed" style="animation-delay: 0.35s; animation-fill-mode: forwards;">
			{$t('hero.description')}
		</p>

		<div class="opacity-0 {heroMounted ? 'animate-slide-up' : ''} flex flex-col sm:flex-row gap-3 justify-center" style="animation-delay: 0.5s; animation-fill-mode: forwards;">
			<a href="#projects" class="btn-primary text-base px-6 py-3">
				{$t('hero.cta_projects')}
			</a>
			<a href="#contact" class="btn-secondary text-base px-6 py-3">
				{$t('hero.cta_contact')}
			</a>
		</div>

		<div class="opacity-0 {heroMounted ? 'animate-slide-up' : ''} mt-16 flex justify-center gap-5" style="animation-delay: 0.6s; animation-fill-mode: forwards;">
			<a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" class="social-icon">
				<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
					<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
				</svg>
			</a>
			<a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="social-icon">
				<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
					<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
				</svg>
			</a>
			<a href="mailto:hacktivartemexico@gmail.com" aria-label="Email" class="social-icon">
				<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
				</svg>
			</a>
		</div>

		<div class="opacity-0 {heroMounted ? 'animate-slide-up' : ''} mt-12 flex flex-col items-center gap-2 text-primary-400" style="animation-delay: 0.75s; animation-fill-mode: forwards;">
			<svg class="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
			</svg>
		</div>
	</div>
</section>

<style>
	.social-icon {
		@apply p-2.5 rounded-full bg-white/80 backdrop-blur-sm border border-hairline text-ink-secondary hover:text-primary-600 hover:border-primary-200 hover:shadow-sm transition-all duration-200;
	}
</style>
