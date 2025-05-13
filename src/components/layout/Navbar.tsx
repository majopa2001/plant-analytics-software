
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

const Navbar = () => {
  const [farmName, setFarmName] = useState("Finca San Pedro");
  const { unreadCount } = useNotifications();

  return (
    <header className="border-b bg-white">
      <div className="flex h-16 items-center px-4 gap-4">
        <SidebarTrigger />
        
        <div className="flex-1 flex justify-between md:justify-end gap-4">
          <div className="md:flex-1 hidden md:block">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <input
                type="search"
                placeholder="Buscar..."
                className="w-full bg-gray-50 border border-gray-200 rounded-md py-2 pl-8 pr-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="hidden md:flex gap-2 items-center">
                  <span>{farmName}</span>
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
                  <div className="h-9 w-9 rounded-full bg-agro-green flex items-center justify-center">
                    <User size={18} className="text-white" />
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  Mi Perfil
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Configuración
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-500">
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
