import { createRouter as createTanStackRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

// TanStack Start's generated client/server entries import `createRouter` from
// this module (see `~start/default-client-entry.tsx`). This repo previously
// exported only `getRouter()`, so the generated entry could not resolve the
// `createRouter` symbol and the production build failed. We now expose
// `createRouter` (the factory the entries call) and keep `getRouter` as an
// alias for any in-app importers.
export function createRouter() {
  return createTanStackRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreload: "intent",
  });
}

export const getRouter = createRouter;

declare module "@tanstack/react-router" {
  interface Register {
    router: ReturnType<typeof createRouter>;
  }
}
