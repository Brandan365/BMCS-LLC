import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";
dotenv.config()

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/reviews": {
        target: "https://maps.googleapis.com",
        changeOrigin: true,
        rewrite: (path) =>
          path.replace(
            /^\/api\/reviews/,
            `/maps/api/place/details/json?place_id=ChIJPZHuJD7DyIkRRrLpTOzOnaM&fields=name,rating,reviews&key=${process.env.MAPKEY}`,
          ),
        secure: true,
      },
    },
  },
});
