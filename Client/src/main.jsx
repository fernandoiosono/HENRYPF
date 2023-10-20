import "./assets/css/main.css";

import { Auth0Provider } from "@auth0/auth0-react";

import { App } from "./components";
import store from "./redux/store.js";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

const domain = process.env.DOMAIN_AUTH;
const client_id = process.env.CLIENT_ID;

ReactDOM.createRoot(document.getElementById("root")).render(
  
  <Auth0Provider
  domain={domain}
  clientId={client_id}
  authorizationParams={{
    // redirect_uri: "http://1270.0.1:3000/acceso",
    redirect_uri: "https://henrypf-production-c75d.up.railway.app/acceso",
    
  }}
>

    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </Auth0Provider>
);
