
import { useState } from "react";
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
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const location = useLocation();
  
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

  return (
    <SidebarComponent className="border-r">
      <SidebarHeader className="flex items-center gap-2 px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-agro-green flex items-center justify-center">
            <Leaf size={18} className="text-white" />
          </div>
          <div className="font-montserrat font-bold text-lg tracking-tight text-white">
            Plant Analytics
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Principal</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton asChild className={isActive(item.path) ? "bg-sidebar-accent text-sidebar-accent-foreground" : ""}>
                    <Link to={item.path} className="flex items-center gap-3">
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
          <SidebarGroupLabel>Usuario</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {userNavigationItems.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton asChild className={isActive(item.path) ? "bg-sidebar-accent text-sidebar-accent-foreground" : ""}>
                    <Link to={item.path} className="flex items-center gap-3">
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
      
      <SidebarFooter>
        <div className="px-3 py-2">
          <button className="w-full flex items-center gap-2 px-3 py-2 text-gray-700 rounded-md hover:bg-gray-100 transition">
            <LogOut size={18} />
            <span>Cerrar sesión</span>
          </button>
        </div>
      </SidebarFooter>
    </SidebarComponent>
  );
};

export default Sidebar;
