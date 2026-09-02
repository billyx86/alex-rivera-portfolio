import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

// NOTE: the standalone `nitro` (nitro-nightly@latest) vite plugin was removed.
// tanstackStart() bundles and manages the nitropack version that matches this
// pinned TanStack Start release (nitropack v2, vite 6). Loading a second,
// floating `nitro@latest` plugin pulled in nitro v3 nightly, whose plugin reads
// the vite-7/rolldown-only `this.meta.rolldownVersion` and crashed the build on
// vite 6 ("Cannot read properties of undefined (reading 'meta')"), while also
// pinning nothing to a deterministic version.

export default defineConfig(() => ({
  server: { host: "0.0.0.0", port: 8080, strictPort: true },
  plugins: [tsconfigPaths(), tailwindcss(), tanstackStart()],
}));
