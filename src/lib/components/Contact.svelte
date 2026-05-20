<script lang="ts">
	let formData = $state({
		name: '',
		email: '',
		message: ''
	});
	
	let status = $state<'idle' | 'sending' | 'success' | 'error'>('idle');
	
	async function handleSubmit(e: Event) {
		e.preventDefault();
		status = 'sending';
		
		// Simular envío de formulario
		await new Promise(resolve => setTimeout(resolve, 1500));
		
		// Aquí podrías agregar lógica real de envío
		console.log('Form data:', formData);
		
		status = 'success';
		setTimeout(() => {
			status = 'idle';
			formData = { name: '', email: '', message: '' };
		}, 3000);
	}
</script>

<section id="contact" class="section-container bg-white dark:bg-gray-800">
	<h2 class="text-4xl font-bold text-center mb-12">Contáctame</h2>
	
	<div class="max-w-2xl mx-auto">
		<div class="card p-8">
			<p class="text-center text-gray-600 dark:text-gray-300 mb-8">
				¿Tienes un proyecto en mente? ¡Me encantaría saber más! Envíame un mensaje y te responderé lo antes posible.
			</p>
			
			<form onsubmit={handleSubmit} class="space-y-6">
				<div>
					<label for="name" class="block text-sm font-medium mb-2">
						Nombre
					</label>
					<input
						type="text"
						id="name"
						bind:value={formData.name}
						required
						class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
						placeholder="Tu nombre"
					/>
				</div>
				
				<div>
					<label for="email" class="block text-sm font-medium mb-2">
						Email
					</label>
					<input
						type="email"
						id="email"
						bind:value={formData.email}
						required
						class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
						placeholder="hacktivartemexico@gmail.com"
					/>
				</div>
				
				<div>
					<label for="message" class="block text-sm font-medium mb-2">
						Mensaje
					</label>
					<textarea
						id="message"
						bind:value={formData.message}
						required
						rows="5"
						class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition resize-none"
						placeholder="Cuéntame sobre tu proyecto..."
					></textarea>
				</div>
				
				<button
					type="submit"
					disabled={status === 'sending'}
					class="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
				>
					{#if status === 'sending'}
						<svg class="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
							<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
							<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
						</svg>
						Enviando...
					{:else if status === 'success'}
						<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
						</svg>
						¡Mensaje Enviado!
					{:else}
						Enviar Mensaje
					{/if}
				</button>
			</form>
		</div>
		
		<div class="mt-12 grid md:grid-cols-3 gap-6 text-center">
			<div class="p-6">
				<div class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
					<svg class="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
					</svg>
				</div>
				<h3 class="font-semibold mb-1">Email</h3>
				<p class="text-sm text-gray-600 dark:text-gray-300">hacktivartemexico@gmail.com</p>
			</div>
			
			<div class="p-6">
				<div class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
					<svg class="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
					</svg>
				</div>
				<h3 class="font-semibold mb-1">Ubicación</h3>
				<p class="text-sm text-gray-600 dark:text-gray-300">Monterrey, Nuevo León, México</p>
			</div>
			
			<div class="p-6">
				<div class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
					<svg class="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
					</svg>
				</div>
				<h3 class="font-semibold mb-1">Disponibilidad</h3>
				<p class="text-sm text-gray-600 dark:text-gray-300">Lun - Vie, 9am - 6pm</p>
			</div>
		</div>
	</div>
</section>
