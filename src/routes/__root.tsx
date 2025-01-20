import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Navigation } from "@/navigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { store } from "@/store";
import { Provider as ReduxProvider } from "react-redux";

export const Route = createRootRoute({
  component: RootComponent,
});

const queryClient = new QueryClient();

function RootComponent() {
  return (
    <ReduxProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <Navigation />
        <Outlet />
        <TanStackRouterDevtools position="bottom-right" />
      </QueryClientProvider>
    </ReduxProvider>
  );
}
