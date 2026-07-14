<script lang="ts">
	import { locale } from '$lib/i18n';

	let current = $state<'en' | 'es'>('en');

	locale.subscribe((l) => (current = l))();

	function toggle() {
		locale.toggle();
	}
</script>

<button
	onclick={toggle}
	class="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full border transition-all duration-200
		{current === 'en'
			? 'border-primary-200 text-primary-600 hover:bg-primary-50'
			: 'border-design-200 text-design-600 hover:bg-design-50'}"
	aria-label="Switch language"
>
	<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
		<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
	</svg>
	<span>{current === 'en' ? 'EN' : 'ES'}</span>
</button>
