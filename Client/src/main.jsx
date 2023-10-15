import "./assets/css/main.css";

import { Auth0Provider } from "@auth0/auth0-react";

import { App } from "./components";
import store from "./redux/store.js";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import axios from "axios";
<<<<<<< HEAD
// axios.defaults.baseURL="http://localhost:3001";
axios.defaults.baseURL="henrypf-production-fae5.up.railway.app";
=======
// axios.defaults.baseURL= "http://localhost:3001";
axios.defaults.baseURL="https://henrypf-production-fae5.up.railway.app";
>>>>>>> 474f32fd739f4cfa93a20d3214322c015cd4399e

const domain = process.env.DOMAIN_AUTH;
const client_id = process.env.CLIENT_ID;

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
