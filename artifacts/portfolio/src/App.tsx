import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AnimatePresence } from "framer-motion";

// Layout
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

// Pages
import Home from "@/pages/Home";
import Work from "@/pages/Work";
import CaseStudy from "@/pages/CaseStudy";
import About from "@/pages/About";
import Resume from "@/pages/Resume";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

// Hooks
import { useScrollToTop } from "@/hooks/use-scroll-to-top";

const queryClient = new QueryClient();

// Wrapper to handle scroll restoration and animation presence
function RouterContent() {
  useScrollToTop();
  const [location] = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* key={location} ensures AnimatePresence correctly triggers on back/forward navigation */}
        <AnimatePresence mode="wait">
          <Switch key={location}>
            <Route path="/" component={Home} />
            <Route path="/work" component={Work} />
            <Route path="/work/:slug" component={CaseStudy} />
            <Route path="/about" component={About} />
            <Route path="/resume" component={Resume} />
            <Route path="/contact" component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <RouterContent />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
