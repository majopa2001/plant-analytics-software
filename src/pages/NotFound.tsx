
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: Usuario intentó acceder a una ruta que no existe:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-6 max-w-lg">
        <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl text-gray-500">404</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 text-agro-green">Página no encontrada</h1>
        <p className="text-lg text-gray-600 mb-8">
          Lo sentimos, pero la página que estás buscando no existe o ha sido movida.
        </p>
        <Button asChild size="lg">
          <Link to="/">
            Volver al Dashboard
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
