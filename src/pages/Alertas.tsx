
import { AlertCard } from "@/components/dashboard/AlertCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";

interface Alert {
  id: string;
  title: string;
  message: string;
  timestamp: string;
  severity: 'low' | 'medium' | 'high';
  resolved: boolean;
  category: string;
  location: string;
}

const alertsData: Alert[] = [
  {
    id: "A001",
    title: "Humedad de suelo baja",
    message: "Sector A2 - Parcela de maíz presenta niveles críticos de humedad. Se recomienda riego inmediato.",
    timestamp: "Hoy, 10:23 AM",
    severity: "high",
    resolved: false,
    category: "Humedad",
    location: "Sector A2"
  },
  {
    id: "A002",
    title: "Posible plaga detectada",
    message: "La IA detectó posibles signos de roya en el sector B3. Se recomienda inspección visual para confirmar.",
    timestamp: "Hoy, 09:45 AM",
    severity: "medium",
    resolved: false,
    category: "Plagas",
    location: "Sector B3"
  },
  {
    id: "A003",
    title: "Temperatura elevada",
    message: "Temperatura por encima del rango óptimo en invernadero 2. Sistema de ventilación activado automáticamente.",
    timestamp: "Ayer, 03:12 PM",
    severity: "low",
    resolved: true,
    category: "Temperatura",
    location: "Invernadero 2"
  },
  {
    id: "A004",
    title: "Batería baja en sensor",
    message: "El sensor #14 (Humedad) necesita reemplazo de batería. Funcionará aproximadamente 3 días más.",
    timestamp: "Ayer, 09:30 AM",
    severity: "medium",
    resolved: false,
    category: "Mantenimiento",
    location: "Sector A1"
  },
  {
    id: "A005",
    title: "Pronóstico de heladas",
    message: "Se prevén heladas en las próximas 48 horas. Se sugiere implementar medidas de protección para cultivos sensibles.",
    timestamp: "12 May, 08:15 AM",
    severity: "high",
    resolved: true,
    category: "Clima",
    location: "Toda la finca"
  },
  {
    id: "A006",
    title: "Nivel de pH fuera de rango",
    message: "El pH del suelo en sector C1 está fuera del rango óptimo para el cultivo actual. Consulte recomendaciones.",
    timestamp: "10 May, 02:38 PM",
    severity: "medium",
    resolved: false,
    category: "Suelo",
    location: "Sector C1"
  },
  {
    id: "A007",
    title: "Fallo en sistema de riego",
    message: "La válvula #3 del sistema de riego no está respondiendo. Se requiere revisión técnica.",
    timestamp: "08 May, 11:20 AM",
    severity: "high",
    resolved: true,
    category: "Riego",
    location: "Sector B2"
  }
];

const Alertas = () => {
  return (
    <>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Sistema de Alertas</h1>
        <p className="text-gray-500">Monitorea y gestiona alertas de tu finca</p>
      </div>
      
      <Tabs defaultValue="activas" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="activas">Activas</TabsTrigger>
          <TabsTrigger value="resueltas">Resueltas</TabsTrigger>
          <TabsTrigger value="todas">Todas</TabsTrigger>
        </TabsList>
        
        <TabsContent value="activas" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Alertas activas</CardTitle>
              <CardDescription>Alertas que requieren atención</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1 relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                  <Input
                    type="search"
                    placeholder="Buscar alertas..."
                    className="pl-8"
                  />
                </div>
                <div className="flex gap-3">
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Severidad" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todas</SelectItem>
                      <SelectItem value="high">Alta</SelectItem>
                      <SelectItem value="medium">Media</SelectItem>
                      <SelectItem value="low">Baja</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline" className="flex gap-2">
                    <Filter className="h-4 w-4" />
                    <span>Filtros</span>
                  </Button>
                </div>
              </div>
              
              <div className="space-y-3">
                {alertsData
                  .filter(alert => !alert.resolved)
                  .map(alert => (
                    <AlertCard
                      key={alert.id}
                      title={alert.title}
                      message={alert.message}
                      timestamp={alert.timestamp}
                      severity={alert.severity}
                      resolved={alert.resolved}
                    />
                  ))
                }
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Configuración de notificaciones</CardTitle>
              <CardDescription>Personaliza cómo recibes alertas</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Configuración en desarrollo...</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="resueltas">
          <Card>
            <CardHeader>
              <CardTitle>Alertas resueltas</CardTitle>
              <CardDescription>Historial de alertas resueltas</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {alertsData
                  .filter(alert => alert.resolved)
                  .map(alert => (
                    <AlertCard
                      key={alert.id}
                      title={alert.title}
                      message={alert.message}
                      timestamp={alert.timestamp}
                      severity={alert.severity}
                      resolved={alert.resolved}
                    />
                  ))
                }
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="todas">
          <Card>
            <CardHeader>
              <CardTitle>Todas las alertas</CardTitle>
              <CardDescription>Historial completo de alertas</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {alertsData.map(alert => (
                  <AlertCard
                    key={alert.id}
                    title={alert.title}
                    message={alert.message}
                    timestamp={alert.timestamp}
                    severity={alert.severity}
                    resolved={alert.resolved}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default Alertas;
