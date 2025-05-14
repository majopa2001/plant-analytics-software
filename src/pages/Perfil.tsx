
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProfileCard } from "@/components/perfil/ProfileCard";
import { QuickAccessCard } from "@/components/perfil/QuickAccessCard";
import { FarmsTab } from "@/components/perfil/FarmsTab";
import { ActivityTab } from "@/components/perfil/ActivityTab";
import { AccountTab } from "@/components/perfil/AccountTab";
import { NotificationsTab } from "@/components/perfil/NotificationsTab";
import { Usuario, Finca, Actividad } from "@/types/usuario";

const Perfil = () => {
  const [isEditing, setIsEditing] = useState(false);
  
  const usuario: Usuario = {
    nombre: "Roberto Mendoza",
    correo: "roberto.mendoza@agricolasp.com",
    telefono: "+51 987 654 321",
    direccion: "Av. La Agricultura 123, San Isidro, Lima",
    empresa: "Cooperativa Agrícola San Pedro",
    rol: "Administrador",
    fechaRegistro: "15 de marzo, 2023",
    ultimoAcceso: "Hoy, 09:45 AM",
    plan: "Premium",
    avatar: "https://images.unsplash.com/photo-1520052203542-d3095f1b6cf0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=350&q=80"
  };
  
  const fincas: Finca[] = [
    {
      id: 1,
      nombre: "Finca San Pedro",
      ubicacion: "Valle de Chanchamayo, Junín",
      tamaño: "45 hectáreas",
      cultivos: ["Café", "Cacao"],
      sensores: 12,
      estado: "activa"
    },
    {
      id: 2,
      nombre: "Cooperativa Agrícola Lima",
      ubicacion: "Cañete, Lima",
      tamaño: "120 hectáreas",
      cultivos: ["Espárragos", "Palta"],
      sensores: 25,
      estado: "activa"
    }
  ];
  
  const actividad: Actividad[] = [
    {
      fecha: "Hoy, 09:45 AM",
      accion: "Inicio de sesión",
      detalles: "Acceso desde Lima, Perú"
    },
    {
      fecha: "Ayer, 16:30 PM",
      accion: "Configuración de alertas",
      detalles: "Modificación de umbrales para sensores de humedad"
    },
    {
      fecha: "23/04/2025, 10:15 AM",
      accion: "Descarga de reporte",
      detalles: "Reporte mensual de rendimiento de cultivos"
    },
    {
      fecha: "20/04/2025, 15:20 PM",
      accion: "Actualización de perfil",
      detalles: "Cambio de información de contacto"
    },
    {
      fecha: "15/04/2025, 08:50 AM",
      accion: "Registro de nueva finca",
      detalles: "Adición de Cooperativa Agrícola Lima"
    }
  ];

  return (
    <Layout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Mi Perfil</h1>
        <p className="text-gray-500">Administra tu información personal y preferencias</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Columna izquierda - Información del perfil */}
        <div className="lg:col-span-1">
          <ProfileCard 
            usuario={usuario} 
            isEditing={isEditing} 
            setIsEditing={setIsEditing} 
          />
          <QuickAccessCard />
        </div>
        
        {/* Columna derecha - Tabs con información */}
        <div className="lg:col-span-2">
          <Tabs defaultValue="fincas">
            <TabsList className="grid grid-cols-4 mb-4">
              <TabsTrigger value="fincas">Mis fincas</TabsTrigger>
              <TabsTrigger value="actividad">Actividad</TabsTrigger>
              <TabsTrigger value="notificaciones">Notificaciones</TabsTrigger>
              <TabsTrigger value="cuenta">Cuenta</TabsTrigger>
            </TabsList>
            
            <TabsContent value="fincas">
              <FarmsTab fincas={fincas} />
            </TabsContent>
            
            <TabsContent value="actividad">
              <ActivityTab actividad={actividad} />
            </TabsContent>

            <TabsContent value="notificaciones">
              <NotificationsTab />
            </TabsContent>
            
            <TabsContent value="cuenta">
              <AccountTab 
                usuario={usuario} 
                isEditing={isEditing} 
                setIsEditing={setIsEditing} 
              />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Perfil;
