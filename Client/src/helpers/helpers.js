import axios from 'axios';

export const createSessionStripe = async (order) => {
  try {
    console.log(order);
    // const prueba = {
    //     line_items:[
    //         {
    //             quantity:1,
    //             price_data:{
    //                 currency:"usd",
    //                 product_data:{
    //                     name:"spatula",
    //                     description:"Espatula para cocina",
    //                     images:["https://i.ibb.com.png"]
    //                 },
    //                 unit_amount:6000
    //             }
    //         }
    //     ],
    //     customer_email:"apamanuel@gmail.com"
    // };

    const response = await axios.post('http://localhost:3001/moveon/stripe/create-checkout-session', order);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error al crear la sesión de Stripe:', error);
    throw error;
  }
};
