import nodemailer from 'nodemailer';
import { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_EMAIL } from '$env/static/private';

const transporter = nodemailer.createTransport({
	host: SMTP_HOST,
	port: Number(SMTP_PORT),
	secure: false,
	auth: { user: SMTP_USER, pass: SMTP_PASS }
});

export async function POST({ request }) {
	try {
		const { name, email, message } = await request.json();

		if (!name || !email || !message) {
			return new Response(JSON.stringify({ error: 'Todos los campos son obligatorios' }), { status: 400 });
		}

		await transporter.sendMail({
			from: `"${name}" <${SMTP_USER}>`,
			replyTo: email,
			to: CONTACT_EMAIL,
			subject: `Nuevo mensaje de ${name} - Hacktivarte`,
			html: `
				<h2>Nuevo mensaje desde el portafolio</h2>
				<p><strong>Nombre:</strong> ${name}</p>
				<p><strong>Email:</strong> ${email}</p>
				<p><strong>Mensaje:</strong></p>
				<p>${message}</p>
			`
		});

		return new Response(JSON.stringify({ success: true }), { status: 200 });
	} catch (error) {
		console.error('Error sending email:', error);
		return new Response(JSON.stringify({ error: 'Error al enviar el mensaje' }), { status: 500 });
	}
}
