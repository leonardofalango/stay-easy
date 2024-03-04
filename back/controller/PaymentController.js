const paymentService = require('../services/stripeService');

class PaymentController {
    static async createPaymentIntent(req, res) {
        const { email, amount } = req.body;
        
        const paymentIntent = await paymentService.createPayment(email, amount);
        
        return res.status(200).send({
            clientSecret: paymentIntent
        });
    }
}

module.exports = PaymentController