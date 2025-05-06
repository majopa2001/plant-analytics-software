
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Monitoreo from "./pages/Monitoreo";
import Alertas from "./pages/Alertas";
import Sensores from "./pages/Sensores";
import Prediccion from "./pages/Prediccion";
import Capacitacion from "./pages/Capacitacion";
import Perfil from "./pages/Perfil";
import Configuracion from "./pages/Configuracion";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/monitoreo" element={<Monitoreo />} />
          <Route path="/alertas" element={<Alertas />} />
          <Route path="/sensores" element={<Sensores />} />
          <Route path="/prediccion" element={<Prediccion />} />
          <Route path="/capacitacion" element={<Capacitacion />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/configuracion" element={<Configuracion />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
