import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import EnvironmentPlugin from "vite-plugin-environment";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    EnvironmentPlugin([
      "API_KEY",
      "UPLOAD_PRESET",
      "URL_CLOUDINARY",
      "DOMAIN_AUTH",
      "CLIENT_ID",
      "PUBLISHABLE_KEY",
      "REDIRECT_URI",
      "LOGOUT_URI",
      "URL_BASE",
    ]),
  ],
});
