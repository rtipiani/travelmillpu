// import nodemailer from 'nodemailer';

// export async function sendEmail(formData) {
//     const transporter = nodemailer.createTransport({
//         service: "Gmail",
//         auth: {
//             user: 'rtipiani@gmail.com',
//             pass: 'AlessiaTS0104'
//         },
//     });

//     const mailOptions = {
//         from: `"Formulario de Contacto" <rtipiani@gmail.com>`,
//         to: "rtipiani@gmail.com",
//         subject: "Nuevo mensaje del formulario de contacto",
//         text: `Nombre: ${formData.name}\nCorreo: ${formData.email}\nMensaje: ${formData.message}`,
//     };

//     try {
//         const info = await transporter.sendMail(mailOptions);
//         return { success: true, info };
//     } catch (error) {
//         return { success: false, error };
//     }
// }

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    secure: false,
    auth: {
        user: "608b530d14a90e",
        pass: "74d85fdb97e9d1",
    },
});

async function main() {
    const info = await transporter.sendMail({
        from: '"Formulario de Contacto" <rtipiani@gmail.com>',
        to: "rtipiani@gmail.com",
        subject: "Nuevo Mensaje del Formulario de Contacto.",
        text: `Nombre: ${formData.name}\nCorreo: ${formData.email}\nMensaje: ${formData.message}`,
    });

    console.log("Mensaje enviado: %s", info.messageId);
}

main().catch(console.error);