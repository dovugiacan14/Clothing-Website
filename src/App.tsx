import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import PageLayout from "./components/PageLayout.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import CapabilitiesPage from "./pages/CapabilitiesPage.tsx";
import BrandsPage from "./pages/BrandsPage.tsx";
import GalleryPage from "./pages/GalleryPage.tsx";
import CareersPage from "./pages/CareersPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route element={<PageLayout />}>
            <Route path="/about" element={<AboutPage />} />
            <Route path="/capabilities" element={<CapabilitiesPage />} />
            {/* <Route path="/brands" element={<BrandsPage />} /> */}
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
