import "./assets/css/main.css";
import { Auth0Provider } from "@auth0/auth0-react";
import { App } from "./components";
import store from "./redux/store.js";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from "@stripe/stripe-js";

const domain = process.env.DOMAIN_AUTH;
const client_id = process.env.CLIENT_ID;
const redirect_uri = process.env.REDIRECT_URI;

localStorage.getItem("carritoInvitado")===null ?    //? ESTE CODIGO ES PARA PODER USAR EL LOCAL STORAGE
localStorage.setItem("carritoInvitado", "") : null; //? PARA EL CARRITO LA PRIMERA VEZ


const stripePromise = loadStripe(process.env.PUBLISHABLE_KEY);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain={domain}
    clientId={client_id}
    authorizationParams={{
      redirect_uri: redirect_uri,
    }}
  >
    <Provider store={store}>
      <BrowserRouter>
        <Elements stripe={stripePromise}>
          <App />
        </Elements>        
      </BrowserRouter>
    </Provider>
  </Auth0Provider>
);