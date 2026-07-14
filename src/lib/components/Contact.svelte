<script lang="ts">
	import { t, locale } from '$lib/i18n';
	import { reveal } from '$lib/actions';

	let formData = $state({
		name: '',
		email: '',
		message: ''
	});

	let status = $state<'idle' | 'sending' | 'success' | 'error'>('idle');

	async function handleSubmit(e: Event) {
		e.preventDefault();
		status = 'sending';

		try {
			const res = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(formData)
			});

			if (!res.ok) throw new Error('Error al enviar');

			status = 'success';
			formData = { name: '', email: '', message: '' };
		} catch {
			status = 'error';
		}

		setTimeout(() => { status = 'idle'; }, 3000);
	}
</script>

<section id="contact" class="section-container bg-surface-soft">
	<h2 class="text-3xl sm:text-4xl font-thin tracking-tight text-center mb-12 reveal">{$t('contact.title')}</h2>

	<div class="max-w-2xl mx-auto">
		<div use:reveal class="card p-8">
			<p class="text-center text-ink-secondary mb-8">
				{$t('contact.description')}
			</p>

			<form onsubmit={handleSubmit} class="space-y-5">
				<div>
					<label for="name" class="block text-sm font-medium text-ink mb-2">
						{$t('contact.name_label')}
					</label>
					<input
						type="text"
						id="name"
						bind:value={formData.name}
						required
						class="w-full px-3 py-2.5 rounded-md border border-hairline-input bg-white text-ink text-sm placeholder:text-ink-mute focus:ring-2 focus:ring-primary-600/20 focus:border-primary-600 outline-none transition-all duration-200"
						placeholder={$t('contact.name_placeholder')}
					/>
				</div>

				<div>
					<label for="email" class="block text-sm font-medium text-ink mb-2">
						{$t('contact.email_label')}
					</label>
					<input
						type="email"
						id="email"
						bind:value={formData.email}
						required
						class="w-full px-3 py-2.5 rounded-md border border-hairline-input bg-white text-ink text-sm placeholder:text-ink-mute focus:ring-2 focus:ring-primary-600/20 focus:border-primary-600 outline-none transition-all duration-200"
						placeholder={$t('contact.email_placeholder')}
					/>
				</div>

				<div>
					<label for="message" class="block text-sm font-medium text-ink mb-2">
						{$t('contact.message_label')}
					</label>
					<textarea
						id="message"
						bind:value={formData.message}
						required
						rows="5"
						class="w-full px-3 py-2.5 rounded-md border border-hairline-input bg-white text-ink text-sm placeholder:text-ink-mute focus:ring-2 focus:ring-primary-600/20 focus:border-primary-600 outline-none transition-all duration-200 resize-none"
						placeholder={$t('contact.message_placeholder')}
					></textarea>
				</div>

				<button
					type="submit"
					disabled={status === 'sending'}
					class="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
				>
					{#if status === 'sending'}
						<svg class="animate-spin h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24">
							<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
							<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
						</svg>
						{$t('contact.sending')}
					{:else if status === 'success'}
						<svg class="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
						</svg>
						{$t('contact.success')}
					{:else if status === 'error'}
						<svg class="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
						</svg>
						{$t('contact.error')}
					{:else}
						{$t('contact.send')}
					{/if}
				</button>
			</form>
		</div>

		<div class="mt-12 grid md:grid-cols-3 gap-6 text-center">
			<div use:reveal class="p-6">
				<div class="w-10 h-10 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
					<svg class="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
					</svg>
				</div>
				<h3 class="font-medium text-sm mb-1">{$t('contact.email_title')}</h3>
				<p class="text-xs text-ink-mute">hacktivartemexico@gmail.com</p>
			</div>

			<div use:reveal class="p-6">
				<div class="w-10 h-10 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-3">
					<svg class="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
					</svg>
				</div>
				<h3 class="font-medium text-sm mb-1">{$t('contact.location_title')}</h3>
				<p class="text-xs text-ink-mute">{$t('contact.location_value')}</p>
			</div>

			<div use:reveal class="p-6">
				<div class="w-10 h-10 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-3">
					<svg class="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
					</svg>
				</div>
				<h3 class="font-medium text-sm mb-1">{$t('contact.availability_title')}</h3>
				<p class="text-xs text-ink-mute">{$t('contact.availability_value')}</p>
			</div>
		</div>
	</div>
</section>
