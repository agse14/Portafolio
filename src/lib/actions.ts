export function reveal(node: HTMLElement) {
	const observer = new IntersectionObserver(
		([entry]) => {
			if (entry.isIntersecting) {
				node.classList.add('visible');
				observer.disconnect();
			}
		},
		{ threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
	);
	observer.observe(node);
	return { destroy: () => observer.disconnect() };
}

export function revealStagger(node: HTMLElement) {
	const children = Array.from(node.children) as HTMLElement[];
	const observer = new IntersectionObserver(
		([entry]) => {
			if (entry.isIntersecting) {
				children.forEach((child, i) => {
					child.style.setProperty('--reveal-delay', `${i * 0.08}s`);
					child.classList.add('reveal-child', 'visible');
				});
				observer.disconnect();
			}
		},
		{ threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
	);
	if (children.length > 0) observer.observe(node);
	return { destroy: () => observer.disconnect() };
}

export function countUp(node: HTMLElement, target: number) {
	const observer = new IntersectionObserver(
		([entry]) => {
			if (entry.isIntersecting) {
				let current = 0;
				const duration = 1000;
				const step = Math.ceil(target / (duration / 16));
				const timer = setInterval(() => {
					current += step;
					if (current >= target) {
						current = target;
						clearInterval(timer);
					}
					node.textContent = `${current}%`;
				}, 16);
				observer.disconnect();
			}
		},
		{ threshold: 0.3 }
	);
	observer.observe(node);
	return { destroy: () => observer.disconnect() };
}
