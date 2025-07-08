
import { useState } from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Bell, ChevronDown, Search, User, BellDot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { useNotifications } from "@/context/NotificationsContext";
import { NotificationsPopover } from "@/components/layout/NotificationsPopover";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [farmName, setFarmName] = useState("Finca San Pedro");
  const { unreadCount } = useNotifications();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    // No necesitamos navigate porque App.tsx manejará la redirección automáticamente
  };

  const handleProfileClick = () => {
    navigate('/perfil');
  };

  const handleConfigClick = () => {
    navigate('/configuracion');
  };

  return (
    <header className="border-b bg-white shadow-sm">
      <div className="flex h-16 items-center px-4 gap-4">
        <SidebarTrigger />
        
        <div className="flex-1 flex justify-between md:justify-end gap-4">
          <div className="md:flex-1 hidden md:block">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-agro-gray-500" />
              <input
                type="search"
                placeholder="Buscar sensores, alertas..."
                className="w-full bg-agro-gray-50 border border-agro-gray-200 rounded-lg py-2 pl-8 pr-4 focus:outline-none focus:ring-2 focus:ring-agro-green focus:border-transparent transition-all"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="hidden md:flex gap-2 items-center border-agro-gray-200 hover:bg-agro-gray-50">
                  <span className="text-agro-gray-700">{farmName}</span>
                  <ChevronDown size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem>
                  Finca San Pedro
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Cooperativa Agrícola Lima
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Hacienda Verde
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  Administrar fincas
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <NotificationsPopover />
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <div className="h-9 w-9 rounded-full bg-gradient-to-r from-agro-green to-agro-green-light flex items-center justify-center shadow-md">
                    <User size={18} className="text-white" />
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <div className="px-2 py-1.5">
                  <p className="text-sm font-medium text-agro-gray-900">{user?.name || 'Usuario'}</p>
                  <p className="text-xs text-agro-gray-500">{user?.email || 'usuario@plantanalytics.com'}</p>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleProfileClick}>
                  Mi Perfil
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleConfigClick}>
                  Configuración
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-agro-alert" onClick={handleLogout}>
                  Cerrar sesión
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
