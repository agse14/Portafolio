<script lang="ts">
	import { onMount } from 'svelte';
	
	let scrolled = $state(false);
	
	onMount(() => {
		const handleScroll = () => {
			scrolled = window.scrollY > 50;
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 {scrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg' : 'bg-transparent'}">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex justify-between items-center h-16">
			<a href="/" class="text-2xl font-bold text-primary-600 dark:text-primary-400">
				Portfolio
			</a>
			
			<div class="hidden md:flex space-x-8">
				<a href="#home" class="nav-link">Inicio</a>
				<a href="#about" class="nav-link">Sobre mí</a>
				<a href="#projects" class="nav-link">Proyectos</a>
				<a href="#skills" class="nav-link">Habilidades</a>
				<a href="#contact" class="nav-link">Contacto</a>
			</div>
			
			<button class="md:hidden p-2">
				<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
				</svg>
			</button>
		</div>
	</div>
</nav>

<style>
	.nav-link {
		@apply text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-200;
	}
</style>
