<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import FloatingWhatsApp from '$lib/components/FloatingWhatsApp.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Fira+Code&display=swap" rel="stylesheet" />

	<meta name="author" content="Andrés Sánchez" />
	<meta name="robots" content="index, follow" />
	<meta name="theme-color" content="#0ea5e9" />

	<meta property="og:site_name" content="Hacktivarte | Sistemas de Administración para Negocios" />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="es_MX" />

	<meta name="twitter:card" content="summary_large_image" />

	<script type="application/ld+json">
		{JSON.stringify({
			"@context": "https://schema.org",
			"@type": "Person",
			"name": "Andrés Sánchez",
			"givenName": "Andrés",
			"familyName": "Sánchez",
			"jobTitle": "Desarrollador de Sistemas de Administración",
			"email": "hacktivartemexico@gmail.com",
			"address": {
				"@type": "PostalAddress",
				"addressLocality": "Monterrey",
				"addressRegion": "Nuevo León",
				"addressCountry": "MX"
			},
			"url": "https://hacktivarte.com",
			"sameAs": [
				"https://github.com",
				"https://linkedin.com"
			]
		}, null, 2)}
	</script>

	<script type="application/ld+json">
		{JSON.stringify({
			"@context": "https://schema.org",
			"@type": "WebSite",
			"name": "Hacktivarte | Sistemas de Administración para Negocios",
			"url": "https://hacktivarte.com",
			"description": "Desarrollo de sistemas de administración y software de gestión empresarial a medida. Sistemas de inventarios, CRM, facturación y páginas web para negocios en Monterrey.",
			"author": {
				"@type": "Person",
				"name": "Andrés Sánchez"
			}
		}, null, 2)}
	</script>
</svelte:head>

{@render children()}
<FloatingWhatsApp />
