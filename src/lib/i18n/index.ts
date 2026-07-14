import { writable, derived, get } from 'svelte/store';
import en from './en';
import es from './es';

export type Locale = 'en' | 'es';

const translations: Record<Locale, typeof en> = { en, es };

function createLocale() {
	const { subscribe, set, update } = writable<Locale>('en');

	function detect(): Locale {
		if (typeof navigator === 'undefined') return 'en';
		const lang = navigator.language;
		if (lang.startsWith('es')) return 'es';
		return 'en';
	}

	function init() {
		set(detect());
	}

	function toggle() {
		update(current => current === 'en' ? 'es' : 'en');
	}

	return { subscribe, set, update, init, detect, toggle };
}

export const locale = createLocale();

function resolve(locale: Locale, path: string): unknown {
	const keys = path.split('.');
	let result: unknown = translations[locale];
	for (const key of keys) {
		if (result && typeof result === 'object' && key in (result as Record<string, unknown>)) {
			result = (result as Record<string, unknown>)[key];
		} else {
			return undefined;
		}
	}
	return result;
}

export const t = derived(locale, ($locale) => {
	return (path: string): string => {
		const result = resolve($locale, path);
		if (typeof result === 'string') return result;
		return path;
	};
});
