const Mail = require('../services/MailService');
const User = require('../model/User');


class MailController {
    static async  sendMail(req, res) {
        console.info("MailController Send Mail");
        try {
            const email = req.params.email;
            const user = await User.findOne({email : email});
            console.log(user)

            if (user == null) {
                return res.status(404).send("User not found");
            }

            const requestId = user.id;

            const result = await Mail.sendMailConfirm(email, requestId);
            
            res.status(200).send(result);
        } catch (error) {
            console.log("MailController.sendMail error", error);
            res.status(500).send(error);
        }
    }

    static async confirmMail(req, res) {
        console.info("MailController Confirm Mail");
        try {
            const requestId = req.params.requestId;

            const result = await Mail.confirmMail(requestId);
            return res.status(200).send(result);
        } catch (error) {
            console.log("MailController.confirmMail error", error);
            return res.status(500).send(error);
        }
    }


}

module.exports = MailController;