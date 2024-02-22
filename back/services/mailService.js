const nodemailer = require("nodemailer")
const User = require('../model/User')

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: 'stayeasynorespond@gmail.com',
        pass:process.env.GMAIL_PASS
    }
})

class Mail {

    static sendMailConfirm = async (email, requestId) => {
        try {
            const info = await transporter.sendMail({
                from: '"Stay Easy Bot" stayeasynorespond@gmail.com',
                to: email,
                subject: 'Confirm Your Email Address',
                text: '',
                html: `<h1>Stay Easy</h1><p>Thank you for signing up with Stay Easy. Please confirm your email address by clicking the link below.</p><a href="http://localhost:8080/mail/confirm-email/${requestId}">Confirm Email</a>`
            })

            console.log('Message sent: %s', info.messageId)
            return {
                message : 'Ok'
            }
        } catch(e) {
            console.log(e)
        }
    }

    static async confirmMail(userId) {
        try {
            const user = await User.findById(userId)
            user.verified = true
            await user.save()
            
            return user
        } catch(e) {
            console.log(e)

        }
    }
}
module.exports = Mail