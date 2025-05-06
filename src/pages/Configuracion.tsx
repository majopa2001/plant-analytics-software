
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
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  AlertTriangle,
  Info,
  Layers,
  Bell,
  Settings,
  User,
  Shield,
  HelpCircle,
  ExternalLink,
  Trash2,
  Save,
  SlidersHorizontal,
  Globe,
  Database,
  CloudOff
} from "lucide-react";

const Configuracion = () => {
  const [unidadesImperiales, setUnidadesImperiales] = useState(false);
  const [alertasActivas, setAlertasActivas] = useState({
    humedad: true,
    temperatura: true,
    nutrientes: false,
    plagas: true
  });
  
  const handleSaveGenerales = () => {
    // Simular guardado
    alert("Configuración general guardada");
  };
  
  return (
    <Layout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Configuración</h1>
        <p className="text-gray-500">Personaliza tu experiencia con Plant Analytics</p>
      </div>
      
      <Card className="mb-6">
        <CardHeader className="bg-gradient-to-r from-slate-50 to-gray-50">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-full bg-slate-100">
              <SlidersHorizontal className="text-slate-600" size={24} />
            </div>
            <div>
              <CardTitle>Centro de configuración</CardTitle>
              <CardDescription>Ajusta la plataforma a tus necesidades específicas</CardDescription>
            </div>
          </div>
        </CardHeader>
      </Card>
      
      <Tabs defaultValue="general">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-56 lg:w-64">
            <div className="sticky top-4">
              <TabsList className="flex flex-col h-auto w-full bg-transparent p-0 rounded-none">
                <div className="text-xs font-medium text-gray-500 mb-2 pl-2">CONFIGURACIÓN GENERAL</div>
                <TabsTrigger 
                  value="general" 
                  className="justify-start mb-1 data-[state=active]:bg-secondary/50"
                >
                  <Settings size={16} className="mr-2" />
                  General
                </TabsTrigger>
                <TabsTrigger 
                  value="notificaciones" 
                  className="justify-start mb-1 data-[state=active]:bg-secondary/50"
                >
                  <Bell size={16} className="mr-2" />
                  Notificaciones
                </TabsTrigger>
                <TabsTrigger 
                  value="usuarios" 
                  className="justify-start mb-1 data-[state=active]:bg-secondary/50"
                >
                  <User size={16} className="mr-2" />
                  Usuarios y Permisos
                </TabsTrigger>
                
                <Separator className="my-4" />
                
                <div className="text-xs font-medium text-gray-500 mb-2 pl-2">SISTEMA</div>
                <TabsTrigger 
                  value="integracion" 
                  className="justify-start mb-1 data-[state=active]:bg-secondary/50"
                >
                  <Layers size={16} className="mr-2" />
                  Integración
                </TabsTrigger>
                <TabsTrigger 
                  value="sensores" 
                  className="justify-start mb-1 data-[state=active]:bg-secondary/50"
                >
                  <SlidersHorizontal size={16} className="mr-2" />
                  Sensores
                </TabsTrigger>
                <TabsTrigger 
                  value="avanzada" 
                  className="justify-start mb-1 data-[state=active]:bg-secondary/50"
                >
                  <Shield size={16} className="mr-2" />
                  Configuración Avanzada
                </TabsTrigger>
                
                <Separator className="my-4" />
                
                <div className="text-xs font-medium text-gray-500 mb-2 pl-2">AYUDA</div>
                <Button variant="ghost" className="justify-start h-9 px-3">
                  <HelpCircle size={16} className="mr-2" />
                  Centro de ayuda
                </Button>
                <Button variant="ghost" className="justify-start h-9 px-3">
                  <Info size={16} className="mr-2" />
                  Acerca de
                </Button>
              </TabsList>
            </div>
          </div>
          
          <div className="flex-1">
            <TabsContent value="general" className="m-0">
              <Card>
                <CardHeader>
                  <CardTitle>Configuración General</CardTitle>
                  <CardDescription>Ajustes básicos de la plataforma</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium">Preferencias de visualización</h3>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="tema">Tema de la aplicación</Label>
                        <p className="text-[0.8rem] text-gray-500">Cambia la apariencia de la plataforma</p>
                      </div>
                      <Select defaultValue="claro">
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Seleccionar tema" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="claro">Claro</SelectItem>
                          <SelectItem value="oscuro">Oscuro</SelectItem>
                          <SelectItem value="sistema">Usar preferencia del sistema</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="unidades">Unidades de medida</Label>
                        <p className="text-[0.8rem] text-gray-500">Cambiar entre sistema métrico e imperial</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch 
                          id="unidades" 
                          checked={unidadesImperiales}
                          onCheckedChange={setUnidadesImperiales}
                        />
                        <Label htmlFor="unidades">
                          {unidadesImperiales ? "Imperiales" : "Métricas"}
                        </Label>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="idioma">Idioma</Label>
                        <p className="text-[0.8rem] text-gray-500">Seleccionar el idioma de la plataforma</p>
                      </div>
                      <Select defaultValue="es">
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Seleccionar idioma" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="es">Español</SelectItem>
                          <SelectItem value="en">English</SelectItem>
                          <SelectItem value="pt">Português</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium">Zona horaria y ubicación</h3>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="zonahoraria">Zona horaria</Label>
                        <p className="text-[0.8rem] text-gray-500">Ajusta la zona horaria para datos y reportes</p>
                      </div>
                      <Select defaultValue="america_lima">
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Seleccionar zona" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="america_lima">América/Lima (GMT-5)</SelectItem>
                          <SelectItem value="america_bogota">América/Bogotá (GMT-5)</SelectItem>
                          <SelectItem value="america_santiago">América/Santiago (GMT-4)</SelectItem>
                          <SelectItem value="america_buenos_aires">América/Buenos Aires (GMT-3)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="formatofecha">Formato de fecha</Label>
                        <p className="text-[0.8rem] text-gray-500">Define cómo se muestran las fechas</p>
                      </div>
                      <Select defaultValue="dd_mm_yyyy">
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Seleccionar formato" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="dd_mm_yyyy">DD/MM/YYYY</SelectItem>
                          <SelectItem value="mm_dd_yyyy">MM/DD/YYYY</SelectItem>
                          <SelectItem value="yyyy_mm_dd">YYYY/MM/DD</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="ubicacion_default">Ubicación por defecto</Label>
                      <Input id="ubicacion_default" value="Lima, Perú" />
                      <p className="text-[0.8rem] text-gray-500">Centro del mapa al iniciar la aplicación</p>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium">Exportación de datos</h3>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="formatoExportacion">Formato predeterminado</Label>
                        <p className="text-[0.8rem] text-gray-500">Formato para exportar informes y datos</p>
                      </div>
                      <Select defaultValue="excel">
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Seleccionar formato" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="excel">Excel (.xlsx)</SelectItem>
                          <SelectItem value="csv">CSV (.csv)</SelectItem>
                          <SelectItem value="pdf">PDF (.pdf)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="autoguardar">Autoguardado de informes</Label>
                        <p className="text-[0.8rem] text-gray-500">Guardar automáticamente informes mensuales</p>
                      </div>
                      <Switch id="autoguardar" />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t p-6">
                  <Button variant="outline">Restaurar valores por defecto</Button>
                  <Button onClick={handleSaveGenerales}>
                    <Save size={16} className="mr-2" />
                    Guardar cambios
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="notificaciones" className="m-0">
              <Card>
                <CardHeader>
                  <CardTitle>Configuración de Notificaciones</CardTitle>
                  <CardDescription>Gestiona cómo y cuándo recibes alertas</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium">Canales de notificación</h3>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="email_notif">Correo electrónico</Label>
                        <p className="text-[0.8rem] text-gray-500">Enviar notificaciones a tu correo electrónico</p>
                      </div>
                      <Switch id="email_notif" defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="sms_notif">SMS</Label>
                        <p className="text-[0.8rem] text-gray-500">Alertas críticas vía mensaje de texto</p>
                      </div>
                      <div className="flex items-center">
                        <Switch id="sms_notif" />
                        <Badge variant="outline" className="ml-2">Premium</Badge>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="app_notif">Aplicación móvil</Label>
                        <p className="text-[0.8rem] text-gray-500">Notificaciones push en la app</p>
                      </div>
                      <Switch id="app_notif" defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="whatsapp_notif">WhatsApp</Label>
                        <p className="text-[0.8rem] text-gray-500">Alertas críticas vía WhatsApp</p>
                      </div>
                      <div className="flex items-center">
                        <Switch id="whatsapp_notif" />
                        <Badge variant="outline" className="ml-2">Premium</Badge>
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-sm font-medium">Tipos de alertas</h3>
                      <Button variant="outline" size="sm">Configurar umbrales</Button>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                          <Label htmlFor="humedad_alert">Humedad del suelo</Label>
                        </div>
                        <Switch 
                          id="humedad_alert" 
                          checked={alertasActivas.humedad}
                          onCheckedChange={(checked) => setAlertasActivas({...alertasActivas, humedad: checked})}
                        />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-red-500"></div>
                          <Label htmlFor="temperatura_alert">Temperatura</Label>
                        </div>
                        <Switch 
                          id="temperatura_alert" 
                          checked={alertasActivas.temperatura}
                          onCheckedChange={(checked) => setAlertasActivas({...alertasActivas, temperatura: checked})}
                        />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-green-500"></div>
                          <Label htmlFor="nutrientes_alert">Nivel de nutrientes</Label>
                        </div>
                        <Switch 
                          id="nutrientes_alert" 
                          checked={alertasActivas.nutrientes}
                          onCheckedChange={(checked) => setAlertasActivas({...alertasActivas, nutrientes: checked})}
                        />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-amber-500"></div>
                          <Label htmlFor="plagas_alert">Detección de plagas</Label>
                        </div>
                        <Switch 
                          id="plagas_alert" 
                          checked={alertasActivas.plagas}
                          onCheckedChange={(checked) => setAlertasActivas({...alertasActivas, plagas: checked})}
                        />
                      </div>
                    </div>
                    
                    <div className="rounded-lg border p-4 mt-4">
                      <div className="flex gap-2 items-start">
                        <AlertTriangle size={18} className="text-yellow-500 mt-0.5" />
                        <div>
                          <h4 className="text-sm font-medium">Configuración de prioridad</h4>
                          <p className="text-xs text-gray-500 mt-1">
                            Las notificaciones críticas siempre se enviarán por todos los canales habilitados, 
                            independientemente de la configuración de tipos de alerta.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium">Horario de notificaciones</h3>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="horario_quieto">Modo silencioso</Label>
                        <p className="text-[0.8rem] text-gray-500">Silenciar notificaciones no críticas</p>
                      </div>
                      <Switch id="horario_quieto" defaultChecked />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="hora_inicio">Desde</Label>
                        <Select defaultValue="22">
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccionar hora" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="20">20:00</SelectItem>
                            <SelectItem value="21">21:00</SelectItem>
                            <SelectItem value="22">22:00</SelectItem>
                            <SelectItem value="23">23:00</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="hora_fin">Hasta</Label>
                        <Select defaultValue="7">
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccionar hora" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="6">06:00</SelectItem>
                            <SelectItem value="7">07:00</SelectItem>
                            <SelectItem value="8">08:00</SelectItem>
                            <SelectItem value="9">09:00</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="dias_semana">Días de la semana</Label>
                        <p className="text-[0.8rem] text-gray-500">Seleccionar días para el modo silencioso</p>
                      </div>
                      <Select defaultValue="todos">
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Seleccionar días" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="todos">Todos los días</SelectItem>
                          <SelectItem value="laborables">Lunes a viernes</SelectItem>
                          <SelectItem value="finsemana">Fin de semana</SelectItem>
                          <SelectItem value="personalizado">Personalizado</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t p-6">
                  <Button variant="outline">Restaurar valores por defecto</Button>
                  <Button>
                    <Save size={16} className="mr-2" />
                    Guardar cambios
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="usuarios" className="m-0">
              <Card>
                <CardHeader className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                  <div>
                    <CardTitle>Usuarios y Permisos</CardTitle>
                    <CardDescription>Administra el acceso a tu cuenta de Plant Analytics</CardDescription>
                  </div>
                  <Button>Añadir usuario</Button>
                </CardHeader>
                <CardContent>
                  <div className="rounded-lg border overflow-hidden">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-muted/50">
                          <th className="text-left p-3 text-xs font-medium text-gray-500">USUARIO</th>
                          <th className="text-left p-3 text-xs font-medium text-gray-500">CORREO</th>
                          <th className="text-left p-3 text-xs font-medium text-gray-500">ROL</th>
                          <th className="text-left p-3 text-xs font-medium text-gray-500">ESTADO</th>
                          <th className="text-right p-3 text-xs font-medium text-gray-500">ACCIONES</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-t">
                          <td className="p-3">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center text-sky-700 font-medium">RM</div>
                              <span className="font-medium">Roberto Mendoza</span>
                            </div>
                          </td>
                          <td className="p-3 text-gray-600">roberto.mendoza@agricolasp.com</td>
                          <td className="p-3">
                            <Badge>Administrador</Badge>
                          </td>
                          <td className="p-3">
                            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Activo</Badge>
                          </td>
                          <td className="p-3 text-right">
                            <Button variant="ghost" size="sm">Editar</Button>
                          </td>
                        </tr>
                        
                        <tr className="border-t">
                          <td className="p-3">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 font-medium">MG</div>
                              <span className="font-medium">María García</span>
                            </div>
                          </td>
                          <td className="p-3 text-gray-600">maria.garcia@agricolasp.com</td>
                          <td className="p-3">
                            <Badge variant="secondary">Técnico</Badge>
                          </td>
                          <td className="p-3">
                            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Activo</Badge>
                          </td>
                          <td className="p-3 text-right">
                            <Button variant="ghost" size="sm">Editar</Button>
                          </td>
                        </tr>
                        
                        <tr className="border-t">
                          <td className="p-3">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-medium">JL</div>
                              <span className="font-medium">Juan López</span>
                            </div>
                          </td>
                          <td className="p-3 text-gray-600">juan.lopez@agricolasp.com</td>
                          <td className="p-3">
                            <Badge variant="outline">Visualizador</Badge>
                          </td>
                          <td className="p-3">
                            <Badge variant="outline" className="bg-gray-50 text-gray-700 border-gray-200">Inactivo</Badge>
                          </td>
                          <td className="p-3 text-right">
                            <Button variant="ghost" size="sm">Editar</Button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="mt-6 space-y-4">
                    <h3 className="text-sm font-medium">Roles y permisos</h3>
                    
                    <div className="space-y-4">
                      <div className="border rounded-lg p-4">
                        <div className="flex justify-between items-center mb-3">
                          <h4 className="font-medium">Administrador</h4>
                          <Badge>1 usuario</Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">
                          Acceso completo a todas las funciones, incluyendo gestión de usuarios y configuración.
                        </p>
                        <Button variant="outline" size="sm">Editar permisos</Button>
                      </div>
                      
                      <div className="border rounded-lg p-4">
                        <div className="flex justify-between items-center mb-3">
                          <h4 className="font-medium">Técnico</h4>
                          <Badge>1 usuario</Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">
                          Puede gestionar sensores, configurar alertas y administrar fincas.
                        </p>
                        <Button variant="outline" size="sm">Editar permisos</Button>
                      </div>
                      
                      <div className="border rounded-lg p-4">
                        <div className="flex justify-between items-center mb-3">
                          <h4 className="font-medium">Visualizador</h4>
                          <Badge>1 usuario</Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">
                          Solo puede ver dashboards e informes. Sin permisos de configuración.
                        </p>
                        <Button variant="outline" size="sm">Editar permisos</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="integracion" className="m-0">
              <Card>
                <CardHeader>
                  <CardTitle>Integración de sistemas</CardTitle>
                  <CardDescription>Conecta Plant Analytics con otras plataformas y servicios</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium">APIs y servicios conectados</h3>
                    
                    <div className="border rounded-lg p-4 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-md bg-gray-100 flex items-center justify-center">
                          <Globe size={24} className="text-gray-500" />
                        </div>
                        <div>
                          <h4 className="font-medium">Servicio meteorológico</h4>
                          <p className="text-sm text-gray-600">Datos de clima en tiempo real</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          Conectado
                        </Badge>
                        <Button variant="ghost" size="sm">
                          Configurar
                        </Button>
                      </div>
                    </div>
                    
                    <div className="border rounded-lg p-4 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-md bg-gray-100 flex items-center justify-center">
                          <Database size={24} className="text-gray-500" />
                        </div>
                        <div>
                          <h4 className="font-medium">Almacenamiento en la nube</h4>
                          <p className="text-sm text-gray-600">Respaldo automático de datos</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          Conectado
                        </Badge>
                        <Button variant="ghost" size="sm">
                          Configurar
                        </Button>
                      </div>
                    </div>
                    
                    <div className="border rounded-lg p-4 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-md bg-gray-100 flex items-center justify-center">
                          <CloudOff size={24} className="text-gray-500" />
                        </div>
                        <div>
                          <h4 className="font-medium">Sistema ERP</h4>
                          <p className="text-sm text-gray-600">Integración con sistema de gestión</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="bg-gray-100 text-gray-700">
                          No conectado
                        </Badge>
                        <Button variant="outline" size="sm">
                          Conectar
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-sm font-medium">API Keys</h3>
                      <Button variant="outline" size="sm">
                        Generar nueva key
                      </Button>
                    </div>
                    
                    <div className="border rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-medium">Key de desarrollo</h4>
                        <Badge>Activa</Badge>
                      </div>
                      <div className="flex items-center gap-2 mb-3">
                        <Input value="pa_dev_key_*****************************" readOnly className="font-mono" />
                        <Button variant="outline" size="sm">
                          Mostrar
                        </Button>
                      </div>
                      <div className="flex justify-between items-center text-sm text-gray-600">
                        <span>Creada: 12/03/2025</span>
                        <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-600">
                          Revocar
                        </Button>
                      </div>
                    </div>
                    
                    <div className="border rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-medium">Key de producción</h4>
                        <Badge>Activa</Badge>
                      </div>
                      <div className="flex items-center gap-2 mb-3">
                        <Input value="pa_prod_key_****************************" readOnly className="font-mono" />
                        <Button variant="outline" size="sm">
                          Mostrar
                        </Button>
                      </div>
                      <div className="flex justify-between items-center text-sm text-gray-600">
                        <span>Creada: 15/04/2025</span>
                        <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-600">
                          Revocar
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="rounded-lg border p-4 bg-muted">
                    <div className="flex gap-2 items-start">
                      <Info size={18} className="text-blue-500 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-medium">Documentación de API</h4>
                        <p className="text-xs text-gray-600 mt-1">
                          Consulta nuestra documentación completa para integrar Plant Analytics con tus sistemas.
                        </p>
                        <Button variant="link" size="sm" className="p-0 h-auto mt-2">
                          Ver documentación <ExternalLink size={14} className="ml-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="sensores" className="m-0">
              <Card>
                <CardHeader>
                  <CardTitle>Configuración de Sensores</CardTitle>
                  <CardDescription>Ajusta parámetros de conexión y calibración de dispositivos</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-sm font-medium">Dispositivos activos</h3>
                      <Badge>37 sensores</Badge>
                    </div>
                    
                    <div className="rounded-lg border overflow-hidden">
                      <table className="w-full">
                        <thead>
                          <tr className="bg-muted/50">
                            <th className="text-left p-3 text-xs font-medium text-gray-500">ID</th>
                            <th className="text-left p-3 text-xs font-medium text-gray-500">SENSOR</th>
                            <th className="text-left p-3 text-xs font-medium text-gray-500">UBICACIÓN</th>
                            <th className="text-left p-3 text-xs font-medium text-gray-500">ESTADO</th>
                            <th className="text-right p-3 text-xs font-medium text-gray-500">ACCIONES</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-t">
                            <td className="p-3 font-mono text-xs">SN-001245</td>
                            <td className="p-3">Sensor de humedad</td>
                            <td className="p-3 text-gray-600">Sector A - Bloque 3</td>
                            <td className="p-3">
                              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Activo</Badge>
                            </td>
                            <td className="p-3 text-right">
                              <Button variant="ghost" size="sm">Configurar</Button>
                            </td>
                          </tr>
                          
                          <tr className="border-t">
                            <td className="p-3 font-mono text-xs">SN-001246</td>
                            <td className="p-3">Sensor de temperatura</td>
                            <td className="p-3 text-gray-600">Sector A - Bloque 3</td>
                            <td className="p-3">
                              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Activo</Badge>
                            </td>
                            <td className="p-3 text-right">
                              <Button variant="ghost" size="sm">Configurar</Button>
                            </td>
                          </tr>
                          
                          <tr className="border-t">
                            <td className="p-3 font-mono text-xs">SN-001352</td>
                            <td className="p-3">Sensor multiespectral</td>
                            <td className="p-3 text-gray-600">Sector B - Bloque 1</td>
                            <td className="p-3">
                              <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">Requiere calibración</Badge>
                            </td>
                            <td className="p-3 text-right">
                              <Button variant="ghost" size="sm">Configurar</Button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    
                    <div className="flex justify-center">
                      <Button variant="outline" size="sm">Ver todos los dispositivos</Button>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium">Ajustes de conectividad</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="frecuencia">Frecuencia de lectura</Label>
                        <Select defaultValue="15">
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccionar frecuencia" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="5">Cada 5 minutos</SelectItem>
                            <SelectItem value="15">Cada 15 minutos</SelectItem>
                            <SelectItem value="30">Cada 30 minutos</SelectItem>
                            <SelectItem value="60">Cada hora</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="protocolo">Protocolo de comunicación</Label>
                        <Select defaultValue="mqtt">
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccionar protocolo" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="mqtt">MQTT</SelectItem>
                            <SelectItem value="http">HTTP REST</SelectItem>
                            <SelectItem value="coap">CoAP</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="mqtt_broker">Dirección del broker MQTT</Label>
                      <Input id="mqtt_broker" value="broker.plantanalytics.com" />
                      <p className="text-[0.8rem] text-gray-500">Dirección del servidor para conexión de sensores</p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="modo_energia">Modo de ahorro de energía</Label>
                        <p className="text-[0.8rem] text-gray-500">Optimiza el consumo de batería en sensores</p>
                      </div>
                      <Switch id="modo_energia" defaultChecked />
                    </div>
                    
                    <div className="rounded-lg border p-4 bg-muted">
                      <div className="flex gap-2 items-start">
                        <AlertTriangle size={18} className="text-amber-500 mt-0.5" />
                        <div>
                          <h4 className="text-sm font-medium">Importantes cambios en la red</h4>
                          <p className="text-xs text-gray-600 mt-1">
                            Cambiar la configuración de conectividad puede causar desconexiones temporales
                            en tus sensores. Se recomienda realizar estos cambios durante períodos de mantenimiento.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t p-6">
                  <Button variant="outline">Restaurar valores por defecto</Button>
                  <Button>
                    <Save size={16} className="mr-2" />
                    Guardar cambios
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="avanzada" className="m-0">
              <Card>
                <CardHeader>
                  <CardTitle>Configuración Avanzada</CardTitle>
                  <CardDescription>Ajustes avanzados del sistema y seguridad</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium">Almacenamiento de datos</h3>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="compresion">Compresión de datos históricos</Label>
                        <p className="text-[0.8rem] text-gray-500">Reduce el espacio de almacenamiento</p>
                      </div>
                      <Switch id="compresion" defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="retencion">Período de retención</Label>
                        <p className="text-[0.8rem] text-gray-500">Tiempo que se mantienen los datos históricos</p>
                      </div>
                      <Select defaultValue="12">
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Seleccionar período" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="6">6 meses</SelectItem>
                          <SelectItem value="12">12 meses</SelectItem>
                          <SelectItem value="24">24 meses</SelectItem>
                          <SelectItem value="0">Indefinido</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="backup">Respaldo automático</Label>
                        <p className="text-[0.8rem] text-gray-500">Genera copias de seguridad periódicas</p>
                      </div>
                      <Switch id="backup" defaultChecked />
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium">Seguridad</h3>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="sesion">Tiempo máximo de sesión</Label>
                        <p className="text-[0.8rem] text-gray-500">Minutos de inactividad antes de cerrar sesión</p>
                      </div>
                      <Select defaultValue="30">
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Seleccionar tiempo" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="15">15 minutos</SelectItem>
                          <SelectItem value="30">30 minutos</SelectItem>
                          <SelectItem value="60">60 minutos</SelectItem>
                          <SelectItem value="120">2 horas</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="auth2fa">Autenticación de dos factores</Label>
                        <p className="text-[0.8rem] text-gray-500">Requerir 2FA para todos los usuarios</p>
                      </div>
                      <Switch id="auth2fa" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="ips">Restricción de IPs</Label>
                        <p className="text-[0.8rem] text-gray-500">Limitar acceso a IPs autorizadas</p>
                      </div>
                      <Switch id="ips" />
                    </div>
                    
                    <div className="rounded-lg border p-4 bg-red-50">
                      <div className="flex gap-2 items-start">
                        <AlertTriangle size={18} className="text-red-500 mt-0.5" />
                        <div>
                          <h4 className="text-sm font-medium">Zona de peligro</h4>
                          <p className="text-xs text-gray-600 mt-1">
                            Las siguientes acciones son permanentes y no se pueden deshacer.
                          </p>
                          <div className="mt-4 space-y-2">
                            <Button variant="outline" size="sm" className="border-red-300 text-red-600">
                              Reiniciar configuración
                            </Button>
                            <Button variant="outline" size="sm" className="border-red-300 text-red-600 ml-2">
                              <Trash2 size={14} className="mr-1" /> Eliminar cuenta
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t p-6">
                  <Button variant="outline">Cancelar</Button>
                  <Button>
                    <Save size={16} className="mr-2" />
                    Guardar cambios
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </div>
        </div>
      </Tabs>
    </Layout>
  );
};

export default Configuracion;
