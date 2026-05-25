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
	<title>Sistemas de Administración para Negocios | Hacktivarte - Desarrollo Web Monterrey</title>
	<meta name="description" content="Desarrollo de sistemas de administración y software de gestión empresarial a medida en Monterrey. Crea tu sistema de inventarios, facturación, CRM o página web para negocio. Contáctame." />
	<meta name="keywords" content="sistemas de administración, software de gestión empresarial, sistema para negocio, desarrollo web monterrey, página web para negocio, sistema de inventarios, CRM, facturación, software a medida, hacktivarte" />

	<meta property="og:title" content="Sistemas de Administración para Negocios | Hacktivarte" />
	<meta property="og:description" content="Desarrollo de sistemas de administración y software de gestión empresarial a medida en Monterrey. Sistemas de inventarios, CRM, facturación y más." />
	<meta property="og:url" content="https://hacktivarte.com" />

	<meta name="twitter:title" content="Sistemas de Administración para Negocios | Hacktivarte" />
	<meta name="twitter:description" content="Desarrollo de sistemas de administración y software de gestión empresarial a medida en Monterrey. Sistemas de inventarios, CRM, facturación y más." />

	<link rel="canonical" href="https://hacktivarte.com" />
</svelte:head>

<Navbar />
<Hero />
<About />
<Projects />
<Skills />
<Contact />
<Footer />
