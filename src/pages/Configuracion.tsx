
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { 
  Bell, 
  Mail, 
  MessageSquare, 
  Shield, 
  Globe, 
  Database, 
  Smartphone,
  Save,
  RefreshCw,
  Trash2,
  User,
  Building,
  Settings
} from "lucide-react";

const Configuracion = () => {
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false,
    desktop: true
  });

  const [alertSettings, setAlertSettings] = useState({
    highPriority: true,
    mediumPriority: true,
    lowPriority: false,
    realTime: true
  });

  return (
    <>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Configuración</h1>
        <p className="text-gray-500">Personaliza tu experiencia en Plant Analytics</p>
      </div>

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="grid grid-cols-5 mb-6">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="notificaciones">Notificaciones</TabsTrigger>
          <TabsTrigger value="alertas">Alertas</TabsTrigger>
          <TabsTrigger value="integraciones">Integraciones</TabsTrigger>
          <TabsTrigger value="avanzado">Avanzado</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center gap-2">
              <User className="h-5 w-5" />
              <div>
                <CardTitle>Información personal</CardTitle>
                <CardDescription>Actualiza tu información básica</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="nombre">Nombre completo</Label>
                  <Input id="nombre" defaultValue="Roberto Mendoza" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Correo electrónico</Label>
                  <Input id="email" defaultValue="roberto.mendoza@agricolasp.com" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="telefono">Teléfono</Label>
                  <Input id="telefono" defaultValue="+51 987 654 321" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="idioma">Idioma</Label>
                  <Select defaultValue="es">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="es">Español</SelectItem>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="pt">Português</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="direccion">Dirección</Label>
                <Input id="direccion" defaultValue="Av. La Agricultura 123, San Isidro, Lima" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center gap-2">
              <Building className="h-5 w-5" />
              <div>
                <CardTitle>Información de empresa</CardTitle>
                <CardDescription>Detalles de tu organización</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="empresa">Empresa</Label>
                  <Input id="empresa" defaultValue="Cooperativa Agrícola San Pedro" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="rol">Rol</Label>
                  <Select defaultValue="admin">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="admin">Administrador</SelectItem>
                      <SelectItem value="manager">Gerente</SelectItem>
                      <SelectItem value="technician">Técnico</SelectItem>
                      <SelectItem value="operator">Operador</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end">
            <Button className="flex items-center gap-2">
              <Save className="h-4 w-4" />
              Guardar cambios
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="notificaciones" className="space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center gap-2">
              <Bell className="h-5 w-5" />
              <div>
                <CardTitle>Preferencias de notificaciones</CardTitle>
                <CardDescription>Configura cómo y cuándo recibir notificaciones</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-blue-600" />
                    <div>
                      <Label>Notificaciones por email</Label>
                      <p className="text-sm text-gray-500">Recibe alertas importantes por correo</p>
                    </div>
                  </div>
                  <Switch 
                    checked={notifications.email}
                    onCheckedChange={(checked) => setNotifications({...notifications, email: checked})}
                  />
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Smartphone className="h-4 w-4 text-green-600" />
                    <div>
                      <Label>Notificaciones push</Label>
                      <p className="text-sm text-gray-500">Alertas instantáneas en tu dispositivo</p>
                    </div>
                  </div>
                  <Switch 
                    checked={notifications.push}
                    onCheckedChange={(checked) => setNotifications({...notifications, push: checked})}
                  />
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <MessageSquare className="h-4 w-4 text-purple-600" />
                    <div>
                      <Label>Mensajes SMS</Label>
                      <p className="text-sm text-gray-500">Alertas críticas por mensaje de texto</p>
                    </div>
                  </div>
                  <Switch 
                    checked={notifications.sms}
                    onCheckedChange={(checked) => setNotifications({...notifications, sms: checked})}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Horarios de notificaciones</CardTitle>
              <CardDescription>Define cuándo recibir notificaciones no críticas</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Hora de inicio</Label>
                  <Input type="time" defaultValue="08:00" />
                </div>
                <div className="space-y-2">
                  <Label>Hora de fin</Label>
                  <Input type="time" defaultValue="20:00" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Días de la semana</Label>
                <div className="flex gap-2 flex-wrap">
                  {['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'].map((dia) => (
                    <Badge key={dia} variant="outline" className="cursor-pointer hover:bg-agro-green/10">
                      {dia}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="alertas" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Configuración de alertas</CardTitle>
              <CardDescription>Personaliza qué alertas recibir y su frecuencia</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Alertas de alta prioridad</Label>
                    <p className="text-sm text-gray-500">Situaciones críticas que requieren atención inmediata</p>
                  </div>
                  <Switch 
                    checked={alertSettings.highPriority}
                    onCheckedChange={(checked) => setAlertSettings({...alertSettings, highPriority: checked})}
                  />
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Alertas de prioridad media</Label>
                    <p className="text-sm text-gray-500">Situaciones importantes pero no críticas</p>
                  </div>
                  <Switch 
                    checked={alertSettings.mediumPriority}
                    onCheckedChange={(checked) => setAlertSettings({...alertSettings, mediumPriority: checked})}
                  />
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Alertas de baja prioridad</Label>
                    <p className="text-sm text-gray-500">Información general y actualizaciones</p>
                  </div>
                  <Switch 
                    checked={alertSettings.lowPriority}
                    onCheckedChange={(checked) => setAlertSettings({...alertSettings, lowPriority: checked})}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Umbrales de sensores</CardTitle>
              <CardDescription>Define los valores que activarán alertas automáticas</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-medium">Temperatura</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="space-y-1">
                      <Label className="text-xs">Mínima (°C)</Label>
                      <Input type="number" defaultValue="10" />
                    </div>
                    <div className="space-y-1">
                      <Label className="text-xs">Máxima (°C)</Label>
                      <Input type="number" defaultValue="35" />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-medium">Humedad de suelo</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="space-y-1">
                      <Label className="text-xs">Mínima (%)</Label>
                      <Input type="number" defaultValue="30" />
                    </div>
                    <div className="space-y-1">
                      <Label className="text-xs">Máxima (%)</Label>
                      <Input type="number" defaultValue="80" />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="integraciones" className="space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center gap-2">
              <Globe className="h-5 w-5" />
              <div>
                <CardTitle>Integraciones disponibles</CardTitle>
                <CardDescription>Conecta Plant Analytics con otras herramientas</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Mail className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium">Microsoft Outlook</h4>
                      <p className="text-sm text-gray-500">Sincroniza alertas con tu calendario</p>
                    </div>
                  </div>
                  <Button variant="outline">Conectar</Button>
                </div>
                
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <MessageSquare className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium">WhatsApp Business</h4>
                      <p className="text-sm text-gray-500">Recibe alertas por WhatsApp</p>
                    </div>
                  </div>
                  <Badge variant="secondary">Próximamente</Badge>
                </div>
                
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Database className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-medium">API Meteorológica</h4>
                      <p className="text-sm text-gray-500">Datos climáticos en tiempo real</p>
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Conectado</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="avanzado" className="space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center gap-2">
              <Settings className="h-5 w-5" />
              <div>
                <CardTitle>Configuración avanzada</CardTitle>
                <CardDescription>Opciones para usuarios expertos</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label>Frecuencia de actualización de datos</Label>
                  <Select defaultValue="5min">
                    <SelectTrigger className="mt-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1min">Cada minuto</SelectItem>
                      <SelectItem value="5min">Cada 5 minutos</SelectItem>
                      <SelectItem value="15min">Cada 15 minutos</SelectItem>
                      <SelectItem value="30min">Cada 30 minutos</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label>Retención de datos históricos</Label>
                  <Select defaultValue="1year">
                    <SelectTrigger className="mt-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="3months">3 meses</SelectItem>
                      <SelectItem value="6months">6 meses</SelectItem>
                      <SelectItem value="1year">1 año</SelectItem>
                      <SelectItem value="2years">2 años</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center gap-2">
              <Shield className="h-5 w-5" />
              <div>
                <CardTitle>Seguridad y privacidad</CardTitle>
                <CardDescription>Gestiona tu seguridad y privacidad</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label>Autenticación de dos factores</Label>
                  <p className="text-sm text-gray-500">Añade una capa extra de seguridad</p>
                </div>
                <Button variant="outline">Configurar</Button>
              </div>
              
              <Separator />
              
              <div className="space-y-2">
                <Label>Cambiar contraseña</Label>
                <div className="grid grid-cols-2 gap-4">
                  <Input type="password" placeholder="Contraseña actual" />
                  <Input type="password" placeholder="Nueva contraseña" />
                </div>
                <Button size="sm">Actualizar contraseña</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-red-200">
            <CardHeader>
              <CardTitle className="text-red-600">Zona de peligro</CardTitle>
              <CardDescription>Acciones irreversibles</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-red-600">Eliminar cuenta</Label>
                  <p className="text-sm text-gray-500">Elimina permanentemente tu cuenta y todos los datos</p>
                </div>
                <Button variant="destructive" size="sm" className="flex items-center gap-2">
                  <Trash2 className="h-4 w-4" />
                  Eliminar
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default Configuracion;
