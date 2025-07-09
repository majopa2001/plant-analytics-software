import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer, 
  AreaChart, 
  Area
} from "recharts";
import { SensorCard } from "@/components/dashboard/SensorCard";
import { Thermometer, Droplets, CloudRain, Sun } from "lucide-react";

const tempHumidityData = [
  { hora: '00:00', temperatura: 18, humedad: 72 },
  { hora: '03:00', temperatura: 16, humedad: 78 },
  { hora: '06:00', temperatura: 15, humedad: 80 },
  { hora: '09:00', temperatura: 19, humedad: 75 },
  { hora: '12:00', temperatura: 24, humedad: 60 },
  { hora: '15:00', temperatura: 27, humedad: 55 },
  { hora: '18:00', temperatura: 23, humedad: 65 },
  { hora: '21:00', temperatura: 20, humedad: 70 },
];

const suelos24hData = [
  { hora: '00:00', sectorA: 42, sectorB: 38, sectorC: 45 },
  { hora: '03:00', sectorA: 41, sectorB: 38, sectorC: 44 },
  { hora: '06:00', sectorA: 40, sectorB: 37, sectorC: 43 },
  { hora: '09:00', sectorA: 38, sectorB: 35, sectorC: 41 },
  { hora: '12:00', sectorA: 37, sectorB: 33, sectorC: 40 },
  { hora: '15:00', sectorA: 35, sectorB: 32, sectorC: 38 },
  { hora: '18:00', sectorA: 33, sectorB: 30, sectorC: 37 },
  { hora: '21:00', sectorA: 32, sectorB: 28, sectorC: 36 },
];

const radiacionData = [
  { hora: '06:00', radiacion: 50 },
  { hora: '07:00', radiacion: 150 },
  { hora: '08:00', radiacion: 320 },
  { hora: '09:00', radiacion: 520 },
  { hora: '10:00', radiacion: 750 },
  { hora: '11:00', radiacion: 870 },
  { hora: '12:00', radiacion: 920 },
  { hora: '13:00', radiacion: 890 },
  { hora: '14:00', radiacion: 820 },
  { hora: '15:00', radiacion: 720 },
  { hora: '16:00', radiacion: 580 },
  { hora: '17:00', radiacion: 350 },
  { hora: '18:00', radiacion: 180 },
  { hora: '19:00', radiacion: 50 },
];

const precipitacionMensualData = [
  { mes: 'Ene', precipitacion: 45 },
  { mes: 'Feb', precipitacion: 38 },
  { mes: 'Mar', precipitacion: 65 },
  { mes: 'Abr', precipitacion: 58 },
  { mes: 'May', precipitacion: 25 },
  { mes: 'Jun', precipitacion: 12 },
  { mes: 'Jul', precipitacion: 5 },
  { mes: 'Ago', precipitacion: 3 },
  { mes: 'Sep', precipitacion: 18 },
  { mes: 'Oct', precipitacion: 30 },
  { mes: 'Nov', precipitacion: 42 },
  { mes: 'Dic', precipitacion: 50 },
];

const Monitoreo = () => {
  return (
    <>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Monitoreo en Tiempo Real</h1>
        <p className="text-gray-500">Visualiza datos de tus sensores en gráficas detalladas</p>
      </div>
      
      <div className="flex items-center justify-between mb-6">
        <Tabs defaultValue="24h" className="w-auto">
          <TabsList>
            <TabsTrigger value="24h">24h</TabsTrigger>
            <TabsTrigger value="7d">7 días</TabsTrigger>
            <TabsTrigger value="30d">30 días</TabsTrigger>
            <TabsTrigger value="custom">Personalizado</TabsTrigger>
          </TabsList>
        </Tabs>
        
        <div className="flex items-center gap-3">
          <Select defaultValue="sector-a">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Seleccionar sector" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todos">Todos los sectores</SelectItem>
              <SelectItem value="sector-a">Sector A</SelectItem>
              <SelectItem value="sector-b">Sector B</SelectItem>
              <SelectItem value="sector-c">Sector C</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <SensorCard
          title="Temperatura actual"
          value={24.5}
          unit="°C"
          status="normal"
          icon={Thermometer}
          lastUpdated="Hace 5 min"
          range={{ min: 15, max: 30 }}
        />
        <SensorCard
          title="Humedad del suelo"
          value={28}
          unit="%"
          status="critical"
          icon={Droplets}
          lastUpdated="Hace 5 min"
          range={{ min: 25, max: 60 }}
        />
        <SensorCard
          title="Humedad del aire"
          value={58}
          unit="%"
          status="normal"
          icon={CloudRain}
          lastUpdated="Hace 5 min"
          range={{ min: 40, max: 80 }}
        />
        <SensorCard
          title="Radiación solar"
          value={820}
          unit="W/m²"
          status="warning"
          icon={Sun}
          lastUpdated="Hace 5 min"
          range={{ min: 0, max: 1000 }}
        />
      </div>
      
      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Temperatura y Humedad</CardTitle>
            <CardDescription>Últimas 24 horas</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={tempHumidityData}
                  margin={{
                    top: 5,
                    right: 20,
                    left: 0,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="hora" />
                  <YAxis yAxisId="left" orientation="left" stroke="#CC5500" domain={[10, 40]} />
                  <YAxis yAxisId="right" orientation="right" stroke="#4DAEDB" domain={[0, 100]} />
                  <Tooltip />
                  <Legend />
                  <Line
                    yAxisId="left"
                    type="monotone"
                    dataKey="temperatura"
                    stroke="#CC5500"
                    name="Temperatura (°C)"
                    strokeWidth={2}
                    dot={{ r: 3 }}
                    activeDot={{ r: 5 }}
                  />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="humedad"
                    stroke="#4DAEDB"
                    name="Humedad aire (%)"
                    strokeWidth={2}
                    dot={{ r: 3 }}
                    activeDot={{ r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Humedad del suelo</CardTitle>
            <CardDescription>Por sector, últimas 24 horas</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={suelos24hData}
                  margin={{
                    top: 5,
                    right: 20,
                    left: 0,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="hora" />
                  <YAxis domain={[20, 60]} />
                  <Tooltip />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="sectorA"
                    name="Sector A (%)"
                    stroke="#2D8E57"
                    fill="#2D8E5720"
                    strokeWidth={2}
                    activeDot={{ r: 5 }}
                  />
                  <Area
                    type="monotone"
                    dataKey="sectorB"
                    name="Sector B (%)"
                    stroke="#4CAF50"
                    fill="#4CAF5020"
                    strokeWidth={2}
                    activeDot={{ r: 5 }}
                  />
                  <Area
                    type="monotone"
                    dataKey="sectorC"
                    name="Sector C (%)"
                    stroke="#8B4513"
                    fill="#8B451320"
                    strokeWidth={2}
                    activeDot={{ r: 5 }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Radiación Solar</CardTitle>
            <CardDescription>Día actual</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={radiacionData}
                  margin={{
                    top: 5,
                    right: 20,
                    left: 0,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="hora" />
                  <YAxis domain={[0, 1000]} />
                  <Tooltip />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="radiacion"
                    name="Radiación (W/m²)"
                    stroke="#FFD700"
                    fill="url(#colorRadiacion)"
                    strokeWidth={2}
                  />
                  <defs>
                    <linearGradient id="colorRadiacion" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#FFD700" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#FFD700" stopOpacity={0.1} />
                    </linearGradient>
                  </defs>
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Precipitación</CardTitle>
            <CardDescription>Acumulado mensual (mm)</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={precipitacionMensualData}
                  margin={{
                    top: 5,
                    right: 20,
                    left: 0,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="mes" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar
                    dataKey="precipitacion"
                    name="Precipitación (mm)"
                    fill="#4DAEDB"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Monitoreo;
