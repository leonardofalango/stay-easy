const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

class stripeService {
    static createPayment = async (email, amount) => {
        let ret = {}
        
        await stripe.customers
        .create({
            email: email,
        })
        .then((customer) => {
            // have access to the customer object
            return stripe.invoiceItems
            .create({
                customer: customer.id, // set the customer id
                amount: amount, // 25
                currency: 'usd',
                description: 'One-time setup fee',
            })
            .then((invoiceItem) => {
                // console.log("invoiceItem", invoiceItem)
                return stripe.invoices.create({
                collection_method: 'send_invoice',
                customer: invoiceItem.customer,
                days_until_due: 2,
                });
            })
            .then((invoice) => {
                // New invoice created on a new customer
                // console.log("invoice ", invoice)
                ret = invoice
            })
            .catch((err) => {
                // Deal with an error
                // console.log("err", err)
            });
        });
        return ret
    }

}

module.exports = stripeService;