const Mail = require('../controller/MailController')
const router = require('express').Router()

// Adding cors so only back-end can access this route
router
    .get("/send-email/:email/", Mail.sendMail)
    .get("/confirm-email/:requestId/", Mail.confirmMail)



module.exports = router