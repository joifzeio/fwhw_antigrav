import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Products from "./pages/Products";
import ProductCategory from "./pages/ProductCategory";
import ProductDetail from "./pages/ProductDetail";
import Mirrors from "./pages/Mirrors";
import Application from "./pages/Application";
import ApplicationDetail from "./pages/ApplicationDetail";
import About from "./pages/About";
import Services from "./pages/Services";
import News from "./pages/News";
import NotFound from "./pages/NotFound";
import OwnerProfile from "./pages/OwnerProfile";
import Certifications from "./pages/Certifications";
import Admin from "./pages/Admin";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:category" element={<ProductCategory />} />
          <Route path="/products/:category/:product" element={<ProductDetail />} />
          <Route path="/mirrors" element={<Mirrors />} />
          <Route path="/application" element={<Application />} />
          <Route path="/application/:category" element={<ApplicationDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/owner-profile" element={<OwnerProfile />} />
          <Route path="/services" element={<Services />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/news" element={<News />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
