<script lang="ts">
	import { onMount } from 'svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import DesignShowcase from '$lib/components/DesignShowcase.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { t } from '$lib/i18n';

	let heroMounted = $state(false);

	onMount(() => {
		requestAnimationFrame(() => { heroMounted = true; });
	});
</script>

<svelte:head>
	<title>Diseño Gráfico & Publicidad | Hacktivarte - Ads, Banners y Multimedia</title>
	<meta name="description" content="Portafolio de diseño gráfico y publicidad digital. Ads, banners, contenido para redes sociales, branding y campañas multimedia para web y aplicaciones." />
	<meta name="keywords" content="diseño gráfico, publicidad digital, ads, banners, redes sociales, branding, motion graphics, campañas publicitarias, multimedia" />
	<meta property="og:title" content="Diseño Gráfico & Publicidad Digital | Hacktivarte" />
	<meta property="og:description" content="Ads, banners, branding y campañas publicitarias para web y aplicaciones. Diseño gráfico comercial y multimedia." />
	<meta property="og:url" content="https://hacktivarte.com/diseno" />
	<meta name="twitter:title" content="Diseño Gráfico & Publicidad Digital | Hacktivarte" />
	<meta name="twitter:description" content="Ads, banners, branding y campañas publicitarias para web y aplicaciones." />
	<link rel="canonical" href="https://hacktivarte.com/diseno" />
</svelte:head>

<Navbar />

<section class="relative min-h-screen flex items-center pt-16 overflow-hidden">
	<div class="absolute inset-0 bg-gradient-to-br from-design-100 via-white via-30% to-amber-50 animate-gradient bg-[length:200%_200%] opacity-80"></div>

	<div class="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
		<div class="absolute top-20 left-[10%] w-72 h-72 rounded-full bg-gradient-to-br from-design-300/20 to-design-500/10 blur-3xl animate-float"></div>
		<div class="absolute top-40 right-[15%] w-96 h-96 rounded-full bg-gradient-to-br from-amber-300/20 to-orange-400/10 blur-3xl animate-float-slow"></div>
		<div class="absolute bottom-40 left-[20%] w-64 h-64 rounded-full bg-gradient-to-br from-design-400/15 to-purple-400/10 blur-3xl animate-float-delayed"></div>
		<div class="absolute top-1/4 left-[5%] w-8 h-8 border-2 border-design-300/40 rotate-45 animate-float" style="animation-delay: 1s"></div>
		<div class="absolute top-1/3 right-[8%] w-5 h-5 bg-design-400/30 rounded-full animate-float" style="animation-delay: 0.5s"></div>
		<div class="absolute bottom-1/3 left-[12%] w-6 h-6 border-2 border-amber-300/40 rotate-12 animate-float-slow" style="animation-delay: 1.5s"></div>
		<div class="absolute top-[60%] right-[5%] w-4 h-4 bg-amber-400/30 rotate-45 animate-float-delayed"></div>
		<div class="absolute top-[15%] left-[45%] w-3 h-3 bg-design-500/40 rounded-full animate-pulse" style="animation-delay: 2s"></div>
	</div>

	<div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
		<div class="max-w-3xl mx-auto text-center">
			<div class="opacity-0 {heroMounted ? 'animate-slide-up' : ''}" style="animation-delay: 0.1s">
				<span class="inline-flex px-4 py-1.5 bg-design-100 text-design-700 rounded-full text-xs font-medium mb-6 border border-design-200/50">
					{$t('design.hero_badge')}
				</span>
			</div>

			<h1 class="opacity-0 {heroMounted ? 'animate-slide-up' : ''} text-4xl sm:text-5xl lg:text-7xl font-thin tracking-tight text-ink mb-6 leading-[1.1]" style="animation-delay: 0.2s">
				{$t('design.hero_title1')}<br />
				<span class="bg-gradient-to-r from-design-600 via-rose-500 to-amber-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
					{$t('design.hero_title2')}
				</span>
			</h1>

			<p class="opacity-0 {heroMounted ? 'animate-slide-up' : ''} text-lg sm:text-xl text-ink-secondary leading-relaxed max-w-2xl mx-auto" style="animation-delay: 0.35s">
				{$t('design.hero_description')}
			</p>

			<div class="opacity-0 {heroMounted ? 'animate-slide-up' : ''} flex flex-wrap justify-center gap-4 mt-10" style="animation-delay: 0.5s">
				<a href="#design-work" class="inline-flex items-center justify-center px-6 py-3 bg-design-600 hover:bg-design-700 text-white rounded-full text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-design-600/30 hover:scale-105 active:scale-95">
					{$t('design.hero_cta_work')}
				</a>
				<a href="/#contact" class="inline-flex items-center justify-center px-6 py-3 bg-white text-design-600 border-2 border-design-600/30 rounded-full text-sm font-medium hover:bg-design-50 hover:border-design-600 transition-all duration-300 hover:scale-105 active:scale-95">
					{$t('design.hero_cta_order')}
				</a>
			</div>

			<div class="opacity-0 {heroMounted ? 'animate-slide-up' : ''} mt-16 flex flex-col items-center gap-2 text-design-400" style="animation-delay: 0.7s">
				<span class="text-xs font-medium tracking-wider uppercase">{$t('design.hero_scroll')}</span>
				<svg class="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
				</svg>
			</div>
		</div>
	</div>
</section>

<div id="design-work">
	<DesignShowcase />
</div>

<section class="relative overflow-hidden bg-gradient-to-br from-design-100 via-white to-amber-50 border-t border-design-200/30">
	<div class="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-design-300/20 to-design-500/10 blur-3xl animate-float-slow" aria-hidden="true"></div>
	<div class="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-br from-amber-300/20 to-design-400/10 blur-3xl animate-float-delayed" aria-hidden="true"></div>

	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
		<h2 class="text-3xl sm:text-4xl lg:text-5xl font-thin tracking-tight mb-6">
			{$t('design.cta_title')}
		</h2>
		<p class="text-ink-secondary text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
			{$t('design.cta_description')}
		</p>
		<a href="/#contact" class="inline-flex items-center justify-center px-8 py-3.5 bg-design-600 hover:bg-design-700 text-white rounded-full text-base font-medium transition-all duration-300 hover:shadow-lg hover:shadow-design-600/30 hover:scale-105 active:scale-95 animate-pulse-glow">
			<svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
			</svg>
			{$t('design.cta_button')}
		</a>
	</div>
</section>

<Footer />
