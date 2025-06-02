import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'jsebastianlc@gmail.com',
        pass: process.env.GMAIL_APP_PASSWORD
    }
})

export async function emailProcessor (formInfo) {
    const {name, email, phone, address, message} = formInfo
    const mailOptions = {
        from: 'jsebastianlc@gmail.com',
        to: 'jsebastianlc@gmail.com',
        subject: name,
        html: `
            <h2>${name} ( ${email} )</h2>
            <p><strong style ="color: #0055df">TELEFONO:</strong> ${phone}</p>
            <p><strong style ="color: #0055df">DIRECCIÓN:</strong> ${address}</p>
            <p><strong style ="color: #0055df">MENSAJE:</strong> ${message}</p>
        `
    }

    try {
        const info = await transporter.sendMail(mailOptions)
        console.log('Correo enviado con exito', info.messageId)

    } catch(error) { console.log('Envío de correo fallido', error) }
}