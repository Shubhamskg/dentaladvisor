import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import dotnet from 'dotenv'
dotnet.config()
// https://vitejs.dev/config/
let origin=process.env.SERVER_URL||"http://localhost:5000/"
console.log(origin)
export default defineConfig({
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'https://dentaladvisor-1.onrender.com',
  //       changeOrigin: true,
  //       secure: false,
  //     }
  //   },
  // },
  plugins: [
    react(),
    VitePWA({
      devOptions: {
        enabled: false,
      },
      manifest: {
        theme_color: "#fff",
        background_color: "#fff",
        display: "fullscreen",
        scope: "/",
        start_url: "/",
        name: "Dental Advisor",
        short_name: "Dental Advisor",
        description: "Dental Advisor",
        icons: [
          {
            src: "/manifest/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/manifest/icon-256x256.png",
            sizes: "256x256",
            type: "image/png",
          },
          {
            src: "/manifest/icon-384x384.png",
            sizes: "384x384",
            type: "image/png",
          },
          {
            src: "/manifest/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
