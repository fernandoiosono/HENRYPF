import "./assets/css/main.css";
import { Auth0Provider } from "@auth0/auth0-react";
import { App } from "./components";
import store from "./redux/store.js";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

const domain = process.env.DOMAIN_AUTH;
const client_id = process.env.CLIENT_ID;
localStorage.getItem("carritoInvitado")===null ?    //? ESTE CODIGO ES PARA PODER USAR EL LOCAL STORAGE
localStorage.setItem("carritoInvitado", "") : null; //? PARA EL CARRITO LA PRIMERA VEZ


ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain={domain}
    clientId={client_id}
    authorizationParams={{
      redirect_uri: "http://localhost:5173/acceso",
    }}
  >
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </Auth0Provider>
);
