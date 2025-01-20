import { sendEmail } from "../server/sendEmail";

export async function post({ request }) {
    const formData = await request.json();
    if (!formData.name || !formData.email || formData.message) {
        return new Response(JSON.stringify({ success:false, error: "Todos los campos son requeridos." }), { status:400 });
    }

    const result = await sendEmail(formData);

    if (result.success) {
        return new Response(JSON.stringify({ success: true, message: "Correo enviado correctamente." }), { status:200 });
    } else {
        return new Response(JSON.stringify({ success:false, error: result.error.message }), { status:500 })
    }
}