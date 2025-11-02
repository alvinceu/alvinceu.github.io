import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import tailwindcss from '@tailwindcss/vite';


const __dirname = dirname(fileURLToPath(import.meta.url));
export default defineConfig({
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, "index.html"),
        lab1: resolve(__dirname, "lab1/index.html"),
        lab2: resolve(__dirname, "lab2/index.html"),
        lab3: resolve(__dirname, "lab3/index.html"),
        lab3about: resolve(__dirname, "lab3/about/index.html"),
        lab3blog: resolve(__dirname, "lab3/blog/index.html"),
        lab3catalog: resolve(__dirname, "lab3/catalog/index.html"),
			},
		},
	},
  plugins: [
    tailwindcss(),
  ],
})
