/* eslint-disable promise/always-return */
// With Capacitor, it will not run for browser client , unless CORS module is used
// For device, the function should work, if ionic-native/http OR capacitor/Http is used in app
const functions = require('firebase-functions');
// Set your secret key: remember to change this to your live secret key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys
const stripe = require('stripe')('YOUR_STRIPE_SECRET_KEY');
const cors = require('cors')({ origin: true });


/*
** Function for Stripe implementation via JS file in index.html
*/
exports.payWithStripe = functions.https.onRequest((request, response) => {
    cors(request, response, () => {
        // eslint-disable-next-line promise/catch-or-return
        stripe.charges.create({
            amount: request.body.amount,
            currency: request.body.currency,
            source: request.body.token,
        }).then((charge) => {
            // asynchronously called
            response.send(charge);
        })
            .catch(err => {
                console.log(err);
            });
    })
});

/*
** Function for Capacitor Stripe implementation via community plugin
*/
exports.paymentsheet = functions.https.onRequest( (request, response) => {
    // eslint-disable-next-line
    cors(request, response, async () => {
        // eslint-disable-next-line promise/catch-or-return
        // Use an existing Customer ID if this is a returning customer.
        const customer = await stripe.customers.create();
        const ephemeralKey = await stripe.ephemeralKeys.create(
            { customer: customer.id },
            { apiVersion: '2020-08-27' }
        );
        const paymentIntent = await stripe.paymentIntents.create({
            amount: request.body.amount,
            currency: request.body.currency,
            customer: customer.id,
        });
        response.json({
            paymentIntent: paymentIntent.client_secret,
            ephemeralKey: ephemeralKey.secret,
            customer: customer.id
        })
    })
});