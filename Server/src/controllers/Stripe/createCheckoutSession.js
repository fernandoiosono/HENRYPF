const stripeAPI = require ('../../../stripe');
require('dotenv').config();
const { WEB_APP_URL } = process.env;



const createCheckoutSession = async (data)=>{
    const { line_items, customer_email } = data;

    //check line_items and customer_email
    if(!line_items || !customer_email){
        throw new Error('missing required session parameters');
    };

    const session = await stripeAPI.checkout.sessions.create({
        payment_method_types: ['card'],
        mode: 'payment',
        line_items,
        customer_email,
        success_url: `${WEB_APP_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${WEB_APP_URL}/carrito`,
        shipping_address_collection: { allowed_countries:
            ['US', 'AR', 'AW', 'BO', 'BR', 'CA', 'CL', 'CO', 'CR', 'DO', 'EC', 'GT', 'HN', 'MX','NI', 'PA', 'PE', 'PY', 'SV', 'UY', 'VE']
        },
        phone_number_collection: { enabled: true }
    });

    return ({sessionId: session.id});
};

module.exports= createCheckoutSession;