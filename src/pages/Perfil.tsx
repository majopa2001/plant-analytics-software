
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, Mail, Phone, MapPin, Building, Key, Shield, Bell, Settings, InfoIcon, Calendar } from "lucide-react";
import { Switch } from "@/components/ui/switch";

const Perfil = () => {
  const [isEditing, setIsEditing] = useState(false);
  
  const usuario = {
    nombre: "Roberto Mendoza",
    correo: "roberto.mendoza@agricolasp.com",
    telefono: "+51 987 654 321",
    direccion: "Av. La Agricultura 123, San Isidro, Lima",
    empresa: "Cooperativa Agrícola San Pedro",
    rol: "Administrador",
    fechaRegistro: "15 de marzo, 2023",
    ultimoAcceso: "Hoy, 09:45 AM",
    plan: "Premium",
    avatar: "https://i.pravatar.cc/150?img=8"
  };
  
  const fincas = [
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
  
  const actividad = [
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
          <Card>
            <CardHeader className="flex flex-col items-center text-center pb-2">
              <div className="relative mb-2">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={usuario.avatar} alt={usuario.nombre} />
                  <AvatarFallback>{usuario.nombre.slice(0, 2)}</AvatarFallback>
                </Avatar>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute bottom-0 right-0 rounded-full h-8 w-8 bg-white"
                  onClick={() => alert("Cambiar foto")}
                >
                  <Pencil size={14} />
                </Button>
              </div>
              <CardTitle className="text-xl">{usuario.nombre}</CardTitle>
              <div className="flex items-center gap-2 mt-1">
                <Badge>{usuario.rol}</Badge>
                <Badge variant="outline">{usuario.plan}</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-sm pt-4">
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-gray-500" />
                <span>{usuario.correo}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-gray-500" />
                <span>{usuario.telefono}</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-gray-500 mt-1" />
                <span>{usuario.direccion}</span>
              </div>
              <div className="flex items-center gap-3">
                <Building size={16} className="text-gray-500" />
                <span>{usuario.empresa}</span>
              </div>
              <Separator />
              <div className="flex items-center gap-3">
                <Calendar size={16} className="text-gray-500" />
                <div>
                  <span className="block text-gray-600">Miembro desde:</span>
                  <span>{usuario.fechaRegistro}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={16} className="text-gray-500" />
                <div>
                  <span className="block text-gray-600">Último acceso:</span>
                  <span>{usuario.ultimoAcceso}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => setIsEditing(!isEditing)}
              >
                {isEditing ? "Cancelar edición" : "Editar perfil"}
              </Button>
            </CardFooter>
          </Card>
          
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-base">Accesos rápidos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="ghost" className="w-full justify-start">
                <Settings size={16} className="mr-2" />
                Configuración de cuenta
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Bell size={16} className="mr-2" />
                Preferencias de notificación
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Shield size={16} className="mr-2" />
                Seguridad y acceso
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <InfoIcon size={16} className="mr-2" />
                Ayuda y soporte
              </Button>
            </CardContent>
          </Card>
        </div>
        
        {/* Columna derecha - Tabs con información */}
        <div className="lg:col-span-2">
          <Tabs defaultValue="fincas">
            <TabsList className="grid grid-cols-3 mb-4">
              <TabsTrigger value="fincas">Mis fincas</TabsTrigger>
              <TabsTrigger value="actividad">Actividad reciente</TabsTrigger>
              <TabsTrigger value="cuenta">Cuenta</TabsTrigger>
            </TabsList>
            
            <TabsContent value="fincas">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle>Fincas registradas</CardTitle>
                      <CardDescription>Administra tus fincas y cultivos en Plant Analytics</CardDescription>
                    </div>
                    <Button>Agregar finca</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {fincas.map((finca) => (
                      <Card key={finca.id}>
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start">
                            <div>
                              <CardTitle className="text-base">{finca.nombre}</CardTitle>
                              <CardDescription>{finca.ubicacion}</CardDescription>
                            </div>
                            <Badge
                              variant={finca.estado === "activa" ? "default" : "secondary"}
                            >
                              {finca.estado === "activa" ? "Activa" : "Inactiva"}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="pb-2 pt-0">
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="block text-gray-500">Tamaño:</span>
                              <span className="font-medium">{finca.tamaño}</span>
                            </div>
                            <div>
                              <span className="block text-gray-500">Sensores instalados:</span>
                              <span className="font-medium">{finca.sensores}</span>
                            </div>
                            <div className="col-span-2">
                              <span className="block text-gray-500">Cultivos principales:</span>
                              <div className="flex gap-2 mt-1">
                                {finca.cultivos.map((cultivo) => (
                                  <Badge key={cultivo} variant="outline">{cultivo}</Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="pt-0 flex justify-between">
                          <Button variant="outline" size="sm">Ver detalles</Button>
                          <Button size="sm">Ir al dashboard</Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="actividad">
              <Card>
                <CardHeader>
                  <CardTitle>Actividad reciente</CardTitle>
                  <CardDescription>Historial de acciones y eventos en tu cuenta</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {actividad.map((item, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="min-w-[12px] flex items-center justify-center">
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                          {index < actividad.length - 1 && (
                            <div className="h-full w-[2px] bg-gray-200 absolute mt-3"></div>
                          )}
                        </div>
                        <div className="space-y-1 pb-2">
                          <div className="flex items-center gap-2">
                            <p className="text-sm font-medium">{item.accion}</p>
                            <span className="text-xs text-gray-500">{item.fecha}</span>
                          </div>
                          <p className="text-sm text-gray-600">{item.detalles}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Ver historial completo</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="cuenta">
              <Card>
                <CardHeader>
                  <CardTitle>Información de cuenta</CardTitle>
                  <CardDescription>Actualiza tus datos personales y preferencias de privacidad</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="nombre">Nombre completo</Label>
                          <Input 
                            id="nombre" 
                            defaultValue={usuario.nombre} 
                            disabled={!isEditing}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="empresa">Empresa</Label>
                          <Input 
                            id="empresa" 
                            defaultValue={usuario.empresa}
                            disabled={!isEditing}
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="correo">Correo electrónico</Label>
                          <Input 
                            id="correo" 
                            type="email" 
                            defaultValue={usuario.correo}
                            disabled={!isEditing}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="telefono">Teléfono</Label>
                          <Input 
                            id="telefono" 
                            defaultValue={usuario.telefono}
                            disabled={!isEditing}
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="direccion">Dirección</Label>
                        <Input 
                          id="direccion" 
                          defaultValue={usuario.direccion}
                          disabled={!isEditing}
                        />
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h3 className="font-medium mb-3">Seguridad</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label>Cambiar contraseña</Label>
                            <p className="text-[0.8rem] text-gray-500">Actualiza tu contraseña periódicamente</p>
                          </div>
                          <Button variant="outline" disabled={!isEditing}>
                            <Key size={16} className="mr-2" />
                            Cambiar
                          </Button>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label>Verificación en dos pasos</Label>
                            <p className="text-[0.8rem] text-gray-500">Añade una capa extra de seguridad a tu cuenta</p>
                          </div>
                          <Switch disabled={!isEditing} />
                        </div>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h3 className="font-medium mb-3">Preferencias de notificación</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label>Correo electrónico</Label>
                            <p className="text-[0.8rem] text-gray-500">Recibir notificaciones por correo electrónico</p>
                          </div>
                          <Switch defaultChecked disabled={!isEditing} />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label>SMS</Label>
                            <p className="text-[0.8rem] text-gray-500">Recibir alertas importantes por SMS</p>
                          </div>
                          <Switch disabled={!isEditing} />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label>Aplicación móvil</Label>
                            <p className="text-[0.8rem] text-gray-500">Notificaciones push en la app móvil</p>
                          </div>
                          <Switch defaultChecked disabled={!isEditing} />
                        </div>
                      </div>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                  {isEditing ? (
                    <>
                      <Button variant="outline" onClick={() => setIsEditing(false)}>Cancelar</Button>
                      <Button>Guardar cambios</Button>
                    </>
                  ) : (
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => setIsEditing(true)}
                    >
                      Editar información
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Perfil;

// Missing icons import
function Pencil(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
    </svg>
  )
}

function Clock(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}
