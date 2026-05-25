import nodemailer from 'nodemailer';
import { env } from '$env/dynamic/private';

function createTransporter() {
	const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_EMAIL } = env;
	if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) return null;
	return {
		transporter: nodemailer.createTransport({
			host: SMTP_HOST,
			port: Number(SMTP_PORT) || 587,
			secure: false,
			auth: { user: SMTP_USER, pass: SMTP_PASS }
		}),
		from: SMTP_USER,
		to: (CONTACT_EMAIL || SMTP_USER).split(',').map(e => e.trim())
	};
}

export async function POST({ request }) {
	try {
		const { name, email, message } = await request.json();

		if (!name || !email || !message) {
			return new Response(JSON.stringify({ error: 'Todos los campos son obligatorios' }), { status: 400 });
		}

		const mail = createTransporter();
		if (!mail) {
			return new Response(JSON.stringify({ error: 'Servicio de correo no disponible' }), { status: 500 });
		}

		await mail.transporter.sendMail({
			from: `"${name}" <${mail.from}>`,
			replyTo: email,
			to: mail.to,
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
