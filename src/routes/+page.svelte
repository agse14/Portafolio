<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Portfolio - Andrés | Full Stack Developer</title>
	<meta name="description" content="Desarrollador Full Stack especializado en SvelteKit, Vue.js/Nuxt.js y Laravel" />
</svelte:head>

<Navbar />
<Hero />
<About />
<Projects />
<Skills />
<Contact />
<Footer />

