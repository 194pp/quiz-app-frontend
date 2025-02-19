import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

export default ({ mode }: { mode: string }) => {
  // const env = loadEnv(mode, process.cwd(), "VITE");

  // const apiEndpoint = env?.VITE_BACKEND_URL ?? "";

  return defineConfig({
    plugins: [TanStackRouterVite({}), react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    // define: {
    //   __VITE_BACKEND_URL__: JSON.stringify(process.env.VITE_BACKEND_URL),
    // },
    server: {
      proxy: {
        "/api": {
          target: "https://zilkan.click",
          changeOrigin: true,
          secure: false,
          ws: true,
          configure: (proxy, _options) => {
            proxy.on("error", (err, _req, _res) => {
              console.log("proxy error", err);
            });
            proxy.on("proxyReq", (proxyReq, req, _res) => {
              console.log(
                "Sending Request to the Target:",
                req.method,
                req.url
              );
            });
            proxy.on("proxyRes", (proxyRes, req, _res) => {
              console.log(
                "Received Response from the Target:",
                proxyRes.statusCode,
                req.url
              );
            });
          },
        },
      },
    },
  });
};
