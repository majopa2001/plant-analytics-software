
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Activity, 
  Droplets, 
  Thermometer, 
  Sun, 
  TrendingUp, 
  AlertTriangle,
  Leaf,
  BarChart3,
  Clock,
  MapPin
} from "lucide-react";

const Index = () => {
  const sensorData = [
    { id: 1, name: "Sector A - Tomates", temperature: 24, humidity: 68, status: "optimal" },
    { id: 2, name: "Sector B - Lechugas", temperature: 22, humidity: 75, status: "warning" },
    { id: 3, name: "Sector C - Zanahorias", temperature: 26, humidity: 45, status: "critical" },
    { id: 4, name: "Invernadero 1", temperature: 28, humidity: 80, status: "optimal" },
  ];

  const alerts = [
    { id: 1, type: "warning", message: "Humedad baja en Sector C", time: "hace 15 min" },
    { id: 2, type: "info", message: "Riego automático completado", time: "hace 1 hora" },
    { id: 3, type: "critical", message: "Sensor desconectado en Zona 4", time: "hace 2 horas" },
  ];

  const stats = [
    { title: "Sensores Activos", value: "24", change: "+2", icon: Activity, color: "text-agro-green" },
    { title: "Temperatura Promedio", value: "25°C", change: "+1.2°C", icon: Thermometer, color: "text-agro-terracota" },
    { title: "Humedad del Suelo", value: "67%", change: "-3%", icon: Droplets, color: "text-agro-skyblue" },
    { title: "Eficiencia Hídrica", value: "89%", change: "+5%", icon: TrendingUp, color: "text-agro-yellow" },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-montserrat font-bold text-agro-gray-800">Dashboard Principal</h1>
          <p className="text-agro-gray-600 mt-1">Monitoreo en tiempo real de tus cultivos</p>
        </div>
        <div className="flex items-center gap-3">
          <Badge variant="outline" className="border-agro-green text-agro-green">
            <Activity size={14} className="mr-1" />
            Sistema Activo
          </Badge>
          <Button className="bg-agro-green hover:bg-agro-green-dark">
            <BarChart3 size={16} className="mr-2" />
            Ver Reportes
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-agro-gray-50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-agro-gray-600 mb-1">{stat.title}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-agro-gray-800">{stat.value}</span>
                    <Badge variant="secondary" className="text-xs">
                      {stat.change}
                    </Badge>
                  </div>
                </div>
                <div className={`p-3 rounded-2xl bg-gradient-to-br from-agro-gray-100 to-agro-gray-200 ${stat.color}`}>
                  <stat.icon size={24} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Sensor Status */}
        <div className="lg:col-span-2">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-montserrat">
                <Leaf className="text-agro-green" size={20} />
                Estado de Sensores
              </CardTitle>
              <CardDescription>Monitoreo en tiempo real de todas las zonas</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {sensorData.map((sensor) => (
                <div key={sensor.id} className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-agro-gray-50 to-transparent border border-agro-gray-200">
                  <div className="flex items-center gap-4">
                    <div className={`w-3 h-3 rounded-full ${
                      sensor.status === 'optimal' ? 'bg-agro-green animate-pulse-soft' :
                      sensor.status === 'warning' ? 'bg-agro-yellow animate-pulse-soft' :
                      'bg-agro-alert animate-pulse-soft'
                    }`}></div>
                    <div>
                      <h4 className="font-medium text-agro-gray-800">{sensor.name}</h4>
                      <div className="flex items-center gap-4 text-sm text-agro-gray-600">
                        <span className="flex items-center gap-1">
                          <Thermometer size={14} />
                          {sensor.temperature}°C
                        </span>
                        <span className="flex items-center gap-1">
                          <Droplets size={14} />
                          {sensor.humidity}%
                        </span>
                      </div>
                    </div>
                  </div>
                  <Badge variant={sensor.status === 'optimal' ? 'default' : sensor.status === 'warning' ? 'secondary' : 'destructive'}>
                    {sensor.status === 'optimal' ? 'Óptimo' : sensor.status === 'warning' ? 'Atención' : 'Crítico'}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Recent Alerts */}
        <div>
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-montserrat">
                <AlertTriangle className="text-agro-yellow" size={20} />
                Alertas Recientes
              </CardTitle>
              <CardDescription>Últimas notificaciones del sistema</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {alerts.map((alert) => (
                <div key={alert.id} className="flex gap-3 p-3 rounded-lg bg-agro-gray-50 border border-agro-gray-200">
                  <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                    alert.type === 'critical' ? 'bg-agro-alert' :
                    alert.type === 'warning' ? 'bg-agro-yellow' :
                    'bg-agro-skyblue'
                  }`}></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-agro-gray-800 font-medium">{alert.message}</p>
                    <p className="text-xs text-agro-gray-500 flex items-center gap-1 mt-1">
                      <Clock size={12} />
                      {alert.time}
                    </p>
                  </div>
                </div>
              ))}
              <Button variant="ghost" className="w-full mt-4 text-agro-green hover:bg-agro-green/10">
                Ver todas las alertas
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Quick Actions */}
      <Card className="border-0 shadow-lg bg-gradient-to-r from-agro-green/5 via-white to-agro-green-bright/5">
        <CardHeader>
          <CardTitle className="font-montserrat">Acciones Rápidas</CardTitle>
          <CardDescription>Gestiona tu sistema de manera eficiente</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button variant="outline" className="h-16 flex-col gap-2 border-agro-green/20 hover:bg-agro-green/10">
              <MapPin size={20} className="text-agro-green" />
              <span>Ver Mapa</span>
            </Button>
            <Button variant="outline" className="h-16 flex-col gap-2 border-agro-skyblue/20 hover:bg-agro-skyblue/10">
              <Droplets size={20} className="text-agro-skyblue" />
              <span>Control Riego</span>
            </Button>
            <Button variant="outline" className="h-16 flex-col gap-2 border-agro-yellow/20 hover:bg-agro-yellow/10">
              <Sun size={20} className="text-agro-yellow" />
              <span>Clima</span>
            </Button>
            <Button variant="outline" className="h-16 flex-col gap-2 border-agro-terracota/20 hover:bg-agro-terracota/10">
              <BarChart3 size={20} className="text-agro-terracota" />
              <span>Análisis</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;
