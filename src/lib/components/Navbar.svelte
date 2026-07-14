<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { t } from '$lib/i18n';
	import LangSwitcher from './LangSwitcher.svelte';

	let scrolled = $state(false);
	let isHome = $derived($page.url.pathname === '/');
	let isDiseno = $derived($page.url.pathname === '/diseno');

	onMount(() => {
		const handleScroll = () => {
			scrolled = window.scrollY > 50;
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 {scrolled ? 'bg-white/90 backdrop-blur-md border-b border-hairline shadow-sm' : 'bg-transparent'}">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex justify-between items-center h-16">
			<a href="/" class="text-xl font-semibold tracking-tight text-primary-600">
				Hacktivarte
			</a>

			<div class="hidden md:flex items-center gap-1">
				{#if isHome}
					<a href="#home" class="nav-link">{$t('nav.home')}</a>
					<a href="#about" class="nav-link">{$t('nav.about')}</a>
					<a href="#projects" class="nav-link">{$t('nav.projects')}</a>
					<a href="#skills" class="nav-link">{$t('nav.skills')}</a>
					<a href="#contact" class="nav-link">{$t('nav.contact')}</a>
					<a href="/diseno" class="nav-link">{$t('nav.design')}</a>
				{:else if isDiseno}
					<a href="/" class="nav-link">{$t('nav.development')}</a>
					<a href="/#about" class="nav-link">{$t('nav.about')}</a>
					<a href="/#contact" class="nav-link">{$t('nav.contact')}</a>
				{/if}
				<LangSwitcher />
			</div>

			<div class="flex md:hidden items-center gap-2">
				<LangSwitcher />
				<button class="p-2 text-ink" aria-label={$t('nav.menu')}>
					<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
					</svg>
				</button>
			</div>
		</div>
	</div>
</nav>

<style>
	.nav-link {
		@apply px-3 py-1.5 text-sm font-medium text-ink-secondary hover:text-primary-600 rounded-full hover:bg-primary-50 transition-all duration-200;
	}
</style>
