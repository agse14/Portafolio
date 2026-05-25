export async function GET() {
	const site = 'https://hacktivarte.com';
	const sections = ['', '#about', '#projects', '#skills', '#contact'];

	const urls = sections.map(
		(section) => `
	<url>
		<loc>${site}/${section}</loc>
		<changefreq>monthly</changefreq>
		<priority>${section === '' ? '1.0' : '0.8'}</priority>
	</url>`
	).join('');

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}
</urlset>`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml'
		}
	});
}
