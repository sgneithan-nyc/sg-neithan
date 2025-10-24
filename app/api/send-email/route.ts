import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

// Configuración del transportador de correo
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  tls: {
    rejectUnauthorized: false // Solo para desarrollo
  },
  // Opciones adicionales para mejorar la confiabilidad
  pool: true,
  maxConnections: 1
})

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Faltan campos requeridos: nombre, correo y mensaje son obligatorios" }, { status: 400 })
    }

    // Validación básica de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Por favor, ingresa un correo electrónico válido" }, { status: 400 })
    }

    const emailBody = `
Nuevo mensaje de contacto desde el sitio web de N&C Servicios Generales

DATOS DEL REMITENTE:
Nombre: ${name}
Email: ${email}
Teléfono: ${phone || "No proporcionado"}

MENSAJE:
${message}

---
Este correo fue enviado desde el formulario de contacto de la página web.
    `.trim()

    // Configuración del correo
    const mailOptions = {
      from: `"SITIO WEB N&C" <no-reply@neithan.com>`,  // Correo genérico
      to: process.env.EMAIL_RECEIVER,
      replyTo: `"${name}" <${email}>`,
      subject: `Nuevo mensaje de ${name} <${email}>`,
      text: emailBody,
      headers: {
        'Reply-To': `"${name}" <${email}>`,
        'X-Entity-Ref-ID': new Date().getTime().toString()
      },
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a365d;">Nuevo mensaje de contacto</h2>
          <p><strong>De:</strong> ${name} &lt;${email}&gt;</p>
          ${phone ? `<p><strong>Teléfono:</strong> ${phone}</p>` : ''}
          <div style="background-color: #f8f9fa; padding: 15px; border-left: 4px solid #4f46e5; margin: 20px 0;">
            <p style="margin: 0; white-space: pre-line;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          <p style="font-size: 0.9em; color: #6b7280; margin-top: 30px;">
            Este mensaje fue enviado desde el formulario de contacto del sitio web.
          </p>
        </div>
      `,
    }

    // Envío del correo
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      {
        success: true,
        message: "¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Error al enviar correo:", error)
    return NextResponse.json(
      { 
        error: "Ocurrió un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde." 
      }, 
      { status: 500 }
    )
  }
}
