import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import ScrollToTop from "@/components/layout/ScrollToTop";
import Index from "./pages/Index";
import Solutions from "./pages/Solutions";
import Security from "./pages/Security";
import Integrations from "./pages/Integrations";
import Pricing from "./pages/Pricing";
import Resources from "./pages/Resources";
import BlogPost from "./pages/BlogPost";
import GuideView from "./pages/GuideView";
import Company from "./pages/Company";
import Contact from "./pages/Contact";
import KnowMore from "./pages/KnowMore";
import NotFound from "./pages/NotFound";
import Demo from "./pages/Demo";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/security" element={<Security />} />
            <Route path="/integrations" element={<Integrations />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/resources/blog/:slug" element={<BlogPost />} />
            <Route path="/resources/guide/:slug" element={<GuideView />} />
            <Route path="/company" element={<Company />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/know-more" element={<KnowMore />} />
            <Route path="/demo" element={<Demo />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
