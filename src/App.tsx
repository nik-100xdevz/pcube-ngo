import { useEffect } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AnimatePresence } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Programs from "@/pages/Programs";
import Impact from "@/pages/Impact";
import Donate from "@/pages/Donate";
import Sponsors from "@/pages/Sponsors";
import GetInvolved from "@/pages/GetInvolved";
import Media from "@/pages/Media";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function AppRoutes() {
  return (
    <AnimatePresence mode="wait">
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/programs" component={Programs} />
        <Route path="/impact" component={Impact} />
        <Route path="/donate" component={Donate} />
        <Route path="/sponsors" component={Sponsors} />
        <Route path="/get-involved" component={GetInvolved} /> 
        <Route path="/media" component={Media} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </AnimatePresence>
  );
}

function AppInner() {
  useEffect(() => {
    const initLenis = async () => {
      try {
        const Lenis = (await import("lenis")).default;
        const lenis = new Lenis({ lerp: 0.1, duration: 1.2, smoothWheel: true });
        const raf = (time: number) => {
          lenis.raf(time);
          requestAnimationFrame(raf);
        };
        requestAnimationFrame(raf);
      } catch (e) {
        // Lenis not critical, continue
      }
    };
    initLenis();
  }, []);

  return (
    <div className="min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
      <Navbar />
      <AppRoutes />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <AppInner />
      </WouterRouter>
    </QueryClientProvider>
  );
}

export default App;
