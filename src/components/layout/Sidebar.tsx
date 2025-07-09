
import { Link, useLocation } from "react-router-dom";
import { 
  Home, 
  LineChart, 
  Bell, 
  Thermometer, 
  BookOpen, 
  User, 
  Settings, 
  LogOut,
  BarChart4,
  Leaf,
} from "lucide-react";
import { 
  Sidebar as SidebarComponent, 
  SidebarContent, 
  SidebarHeader, 
  SidebarFooter, 
  SidebarGroup, 
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton
} from "@/components/ui/sidebar";
import { useAuth } from "@/context/AuthContext";

const Sidebar = () => {
  const location = useLocation();
  const { logout } = useAuth();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  // Main navigation items
  const navigationItems = [
    { name: "Dashboard", icon: Home, path: "/" },
    { name: "Monitoreo", icon: LineChart, path: "/monitoreo" },
    { name: "Alertas", icon: Bell, path: "/alertas" },
    { name: "Sensores", icon: Thermometer, path: "/sensores" },
    { name: "IA Predictiva", icon: BarChart4, path: "/prediccion" },
    { name: "Capacitación", icon: BookOpen, path: "/capacitacion" },
  ];
  
  // User navigation items
  const userNavigationItems = [
    { name: "Mi Perfil", icon: User, path: "/perfil" },
    { name: "Configuración", icon: Settings, path: "/configuracion" },
  ];

  const handleLogout = () => {
    logout();
  };

  return (
    <SidebarComponent className="border-r border-agro-gray-200">
      <SidebarHeader className="flex items-center gap-2 px-4 py-3 gradient-bg">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
            <Leaf size={18} className="text-white" />
          </div>
          <div className="font-montserrat font-bold text-lg tracking-tight text-white">
            sIAmbra
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent className="bg-white">
        <SidebarGroup>
          <SidebarGroupLabel className="text-agro-gray-600 font-montserrat">Principal</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton 
                    asChild 
                    className={`${isActive(item.path) 
                      ? "bg-agro-green/10 text-agro-green border-r-2 border-agro-green font-medium" 
                      : "text-agro-gray-700 hover:bg-agro-gray-50 hover:text-agro-green"
                    } transition-all duration-200`}
                  >
                    <Link to={item.path} className="flex items-center gap-3 px-3 py-2.5">
                      <item.icon size={18} />
                      <span>{item.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        <SidebarGroup>
          <SidebarGroupLabel className="text-agro-gray-600 font-montserrat">Usuario</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {userNavigationItems.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton 
                    asChild 
                    className={`${isActive(item.path) 
                      ? "bg-agro-green/10 text-agro-green border-r-2 border-agro-green font-medium" 
                      : "text-agro-gray-700 hover:bg-agro-gray-50 hover:text-agro-green"
                    } transition-all duration-200`}
                  >
                    <Link to={item.path} className="flex items-center gap-3 px-3 py-2.5">
                      <item.icon size={18} />
                      <span>{item.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="border-t border-agro-gray-200 bg-agro-gray-50">
        <div className="px-3 py-2">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-2 px-3 py-2.5 text-agro-gray-700 rounded-lg hover:bg-agro-alert/10 hover:text-agro-alert transition-all duration-200"
          >
            <LogOut size={18} />
            <span>Cerrar sesión</span>
          </button>
        </div>
      </SidebarFooter>
    </SidebarComponent>
  );
};

export default Sidebar;
