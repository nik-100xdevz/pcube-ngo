// vite.config.ts
import { defineConfig } from "file:///C:/Users/Ram/Desktop/pcube/P-cube/latest/project%20(1)/pcube-foundation/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/Ram/Desktop/pcube/P-cube/latest/project%20(1)/pcube-foundation/node_modules/@vitejs/plugin-react/dist/index.js";
import tailwindcss from "file:///C:/Users/Ram/Desktop/pcube/P-cube/latest/project%20(1)/pcube-foundation/node_modules/@tailwindcss/vite/dist/index.mjs";
import path from "path";
var __vite_injected_original_dirname = "C:\\Users\\Ram\\Desktop\\pcube\\P-cube\\latest\\project (1)\\pcube-foundation";
var port = 5173;
var vite_config_default = defineConfig({
  base: "/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "src"),
      "@assets": path.resolve(
        __vite_injected_original_dirname,
        "..",
        "..",
        "attached_assets"
      )
    },
    dedupe: ["react", "react-dom"]
  },
  root: path.resolve(__vite_injected_original_dirname),
  build: {
    outDir: path.resolve(__vite_injected_original_dirname, "dist/public"),
    emptyOutDir: true
  },
  server: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
    fs: {
      strict: true,
      deny: ["**/.*"]
    }
  },
  preview: {
    port,
    host: "0.0.0.0",
    allowedHosts: true
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxSYW1cXFxcRGVza3RvcFxcXFxwY3ViZVxcXFxQLWN1YmVcXFxcbGF0ZXN0XFxcXHByb2plY3QgKDEpXFxcXHBjdWJlLWZvdW5kYXRpb25cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFJhbVxcXFxEZXNrdG9wXFxcXHBjdWJlXFxcXFAtY3ViZVxcXFxsYXRlc3RcXFxccHJvamVjdCAoMSlcXFxccGN1YmUtZm91bmRhdGlvblxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvUmFtL0Rlc2t0b3AvcGN1YmUvUC1jdWJlL2xhdGVzdC9wcm9qZWN0JTIwKDEpL3BjdWJlLWZvdW5kYXRpb24vdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xuaW1wb3J0IHRhaWx3aW5kY3NzIGZyb20gXCJAdGFpbHdpbmRjc3Mvdml0ZVwiO1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcblxuY29uc3QgcG9ydCA9IDUxNzM7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIGJhc2U6IFwiL1wiLFxuICBwbHVnaW5zOiBbcmVhY3QoKSwgdGFpbHdpbmRjc3MoKV0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgXCJAXCI6IHBhdGgucmVzb2x2ZShpbXBvcnQubWV0YS5kaXJuYW1lLCBcInNyY1wiKSxcbiAgICAgIFwiQGFzc2V0c1wiOiBwYXRoLnJlc29sdmUoXG4gICAgICAgIGltcG9ydC5tZXRhLmRpcm5hbWUsXG4gICAgICAgIFwiLi5cIixcbiAgICAgICAgXCIuLlwiLFxuICAgICAgICBcImF0dGFjaGVkX2Fzc2V0c1wiLFxuICAgICAgKSxcbiAgICB9LFxuICAgIGRlZHVwZTogW1wicmVhY3RcIiwgXCJyZWFjdC1kb21cIl0sXG4gIH0sXG4gIHJvb3Q6IHBhdGgucmVzb2x2ZShpbXBvcnQubWV0YS5kaXJuYW1lKSxcbiAgYnVpbGQ6IHtcbiAgICBvdXREaXI6IHBhdGgucmVzb2x2ZShpbXBvcnQubWV0YS5kaXJuYW1lLCBcImRpc3QvcHVibGljXCIpLFxuICAgIGVtcHR5T3V0RGlyOiB0cnVlLFxuICB9LFxuICBzZXJ2ZXI6IHtcbiAgICBwb3J0LFxuICAgIGhvc3Q6IFwiMC4wLjAuMFwiLFxuICAgIGFsbG93ZWRIb3N0czogdHJ1ZSxcbiAgICBmczoge1xuICAgICAgc3RyaWN0OiB0cnVlLFxuICAgICAgZGVueTogW1wiKiovLipcIl0sXG4gICAgfSxcbiAgfSxcbiAgcHJldmlldzoge1xuICAgIHBvcnQsXG4gICAgaG9zdDogXCIwLjAuMC4wXCIsXG4gICAgYWxsb3dlZEhvc3RzOiB0cnVlLFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXFaLFNBQVMsb0JBQW9CO0FBQ2xiLE9BQU8sV0FBVztBQUNsQixPQUFPLGlCQUFpQjtBQUN4QixPQUFPLFVBQVU7QUFIakIsSUFBTSxtQ0FBbUM7QUFLekMsSUFBTSxPQUFPO0FBRWIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsTUFBTTtBQUFBLEVBQ04sU0FBUyxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUM7QUFBQSxFQUNoQyxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLEtBQUssUUFBUSxrQ0FBcUIsS0FBSztBQUFBLE1BQzVDLFdBQVcsS0FBSztBQUFBLFFBQ2Q7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsUUFBUSxDQUFDLFNBQVMsV0FBVztBQUFBLEVBQy9CO0FBQUEsRUFDQSxNQUFNLEtBQUssUUFBUSxnQ0FBbUI7QUFBQSxFQUN0QyxPQUFPO0FBQUEsSUFDTCxRQUFRLEtBQUssUUFBUSxrQ0FBcUIsYUFBYTtBQUFBLElBQ3ZELGFBQWE7QUFBQSxFQUNmO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTjtBQUFBLElBQ0EsTUFBTTtBQUFBLElBQ04sY0FBYztBQUFBLElBQ2QsSUFBSTtBQUFBLE1BQ0YsUUFBUTtBQUFBLE1BQ1IsTUFBTSxDQUFDLE9BQU87QUFBQSxJQUNoQjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQO0FBQUEsSUFDQSxNQUFNO0FBQUEsSUFDTixjQUFjO0FBQUEsRUFDaEI7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
