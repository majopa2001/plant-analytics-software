import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Battery, Signal, ThermometerSnowflake, Droplets, Wheat, Wind, Sun, CloudRain } from "lucide-react";
import { cn } from "@/lib/utils";
import SensoresMap from "@/components/sensores/SensoresMap";

interface SensorData {
  id: string;
  name: string;
  type: string;
  typeIcon: React.ReactNode;
  lastReading: string | number;
  unit: string;
  location: string;
  status: 'online' | 'offline' | 'warning';
  battery: number;
  signal: number;
}

const sensorsData: SensorData[] = [
  {
    id: "S-001",
    name: "Sensor Temperatura 1",
    type: "Temperatura",
    typeIcon: <ThermometerSnowflake className="h-4 w-4" />,
    lastReading: 24.5,
    unit: "°C",
    location: "Sector A1",
    status: 'online',
    battery: 85,
    signal: 90
  },
  {
    id: "S-002",
    name: "Sensor Humedad Suelo 1",
    type: "Humedad de suelo",
    typeIcon: <Wheat className="h-4 w-4" />,
    lastReading: 28,
    unit: "%",
    location: "Sector A2",
    status: 'warning',
    battery: 30,
    signal: 85
  },
  {
    id: "S-003",
    name: "Sensor Humedad Aire 1",
    type: "Humedad ambiental",
    typeIcon: <CloudRain className="h-4 w-4" />,
    lastReading: 58,
    unit: "%",
    location: "Sector A1",
    status: 'online',
    battery: 90,
    signal: 95
  },
  {
    id: "S-004",
    name: "Sensor Velocidad Viento",
    type: "Viento",
    typeIcon: <Wind className="h-4 w-4" />,
    lastReading: 12.3,
    unit: "km/h",
    location: "Estación central",
    status: 'online',
    battery: 78,
    signal: 88
  },
  {
    id: "S-005",
    name: "Sensor Radiación Solar",
    type: "Radiación",
    typeIcon: <Sun className="h-4 w-4" />,
    lastReading: 820,
    unit: "W/m²",
    location: "Sector B1",
    status: 'online',
    battery: 65,
    signal: 75
  },
  {
    id: "S-006",
    name: "Sensor Precipitación",
    type: "Lluvia",
    typeIcon: <Droplets className="h-4 w-4" />,
    lastReading: 0,
    unit: "mm",
    location: "Estación central",
    status: 'offline',
    battery: 0,
    signal: 0
  }
];

const Sensores = () => {
  return (
    <Layout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Monitoreo de Sensores</h1>
        <p className="text-gray-500">Administra y visualiza los datos de tus sensores IoT</p>
      </div>

      <Tabs defaultValue="todos" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="todos">Todos</TabsTrigger>
          <TabsTrigger value="sector-a">Sector A</TabsTrigger>
          <TabsTrigger value="sector-b">Sector B</TabsTrigger>
          <TabsTrigger value="estacion-central">Estación Central</TabsTrigger>
        </TabsList>
        
        <TabsContent value="todos" className="space-y-4">
          <Card className="mb-4">
            <CardHeader>
              <CardTitle>Mapa de sensores</CardTitle>
              <CardDescription>
                Ubicación geográfica de los sensores en la finca
              </CardDescription>
            </CardHeader>
            <CardContent>
              <SensoresMap />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Todos los sensores</CardTitle>
              <CardDescription>
                Vista general de todos los sensores instalados
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Nombre</TableHead>
                    <TableHead>Tipo</TableHead>
                    <TableHead>Última lectura</TableHead>
                    <TableHead>Ubicación</TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead>Batería</TableHead>
                    <TableHead>Señal</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sensorsData.map((sensor) => (
                    <TableRow key={sensor.id}>
                      <TableCell className="font-medium">{sensor.id}</TableCell>
                      <TableCell>{sensor.name}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1.5">
                          {sensor.typeIcon}
                          {sensor.type}
                        </div>
                      </TableCell>
                      <TableCell>{sensor.lastReading} {sensor.unit}</TableCell>
                      <TableCell>{sensor.location}</TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={cn(
                            "text-xs font-normal",
                            sensor.status === 'online' ? "border-green-500 text-green-600 bg-green-50" :
                            sensor.status === 'warning' ? "border-yellow-500 text-yellow-600 bg-yellow-50" :
                            "border-gray-500 text-gray-600 bg-gray-50"
                          )}
                        >
                          <span className={cn(
                            "mr-1 inline-block w-1.5 h-1.5 rounded-full",
                            sensor.status === 'online' ? "bg-green-500" :
                            sensor.status === 'warning' ? "bg-yellow-500" :
                            "bg-gray-500"
                          )}></span>
                          {sensor.status === 'online' ? 'En línea' : 
                           sensor.status === 'warning' ? 'Alerta' : 
                           'Desconectado'}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1.5">
                          <Battery className={cn(
                            "h-4 w-4",
                            sensor.battery > 60 ? "text-green-500" :
                            sensor.battery > 20 ? "text-yellow-500" :
                            "text-red-500"
                          )} />
                          <span>{sensor.battery}%</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1.5">
                          <Signal className={cn(
                            "h-4 w-4",
                            sensor.signal > 70 ? "text-green-500" :
                            sensor.signal > 30 ? "text-yellow-500" :
                            "text-red-500"
                          )} />
                          <span>{sensor.signal}%</span>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="sector-a">
          <Card>
            <CardHeader>
              <CardTitle>Sensores del Sector A</CardTitle>
              <CardDescription>
                Sensores instalados en el Sector A
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Vista en desarrollo...</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="sector-b">
          <Card>
            <CardHeader>
              <CardTitle>Sensores del Sector B</CardTitle>
              <CardDescription>
                Sensores instalados en el Sector B
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Vista en desarrollo...</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="estacion-central">
          <Card>
            <CardHeader>
              <CardTitle>Sensores de la Estación Central</CardTitle>
              <CardDescription>
                Sensores instalados en la Estación Central
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Vista en desarrollo...</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </Layout>
  );
};

export default Sensores;
