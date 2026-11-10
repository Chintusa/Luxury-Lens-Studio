import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "./pages/Home";

const queryClient = new QueryClient();

function getRouterBase(): string {
  // Support GitHub Pages subpath (e.g. username.github.io/Luxury-Lens-Studio/)
  if (typeof window !== "undefined" && window.location.hostname.endsWith("github.io")) {
    const firstSegment = window.location.pathname.split("/").filter(Boolean)[0];
    if (firstSegment) {
      return `/${firstSegment}`;
    }
  }
  const base = import.meta.env.BASE_URL;
  if (base && base.startsWith("/") && base !== "/") {
    return base.replace(/\/$/, "");
  }
  return "";
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={Home} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={getRouterBase()}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
