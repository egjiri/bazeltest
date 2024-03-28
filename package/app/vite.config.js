import reactPlugin from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { join } from "path";

export default defineConfig({
	plugins: [reactPlugin()],
	resolve: {
		alias: {
			package: join(__dirname, ".."),
		},
	},
});
