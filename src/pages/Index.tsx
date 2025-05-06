
import Layout from "@/components/layout/Layout";
import { StatCard } from "@/components/dashboard/StatCard";
import { SensorCard } from "@/components/dashboard/SensorCard";
import { AlertCard } from "@/components/dashboard/AlertCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Plant, CloudRain, Thermometer, Droplets, Wind, Sun, Soil, CircleAlert } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: 'Ene', humedad: 65, temperatura: 22, lluvia: 40 },
  { name: 'Feb', humedad: 60, temperatura: 24, lluvia: 30 },
  { name: 'Mar', humedad: 70, temperatura: 23, lluvia: 45 },
  { name: 'Abr', humedad: 75, temperatura: 21, lluvia: 55 },
  { name: 'May', humedad: 68, temperatura: 19, lluvia: 35 },
  { name: 'Jun', humedad: 65, temperatura: 18, lluvia: 25 },
];

const Index = () => {
  return (
    <Layout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Dashboard Principal</h1>
        <p className="text-gray-500">Monitoreo de finca en tiempo real</p>
      </div>
      
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard 
          title="Hectáreas monitoreadas" 
          value="32.5" 
          icon={Plant} 
          change={4.5} 
        />
        <StatCard 
          title="Sensores activos" 
          value="24" 
          icon={Thermometer} 
          change={0} 
        />
        <StatCard 
          title="Alertas activas" 
          value="3" 
          icon={CircleAlert} 
          change={-2} 
          iconColor="text-agro-terracota"
        />
        <StatCard 
          title="Eficiencia hídrica" 
          value="92%" 
          icon={Droplets} 
          change={5.2} 
          iconColor="text-agro-skyblue"
        />
      </div>
      
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left column: Chart */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Tendencias del cultivo</CardTitle>
            <CardDescription>
              Humedad, temperatura y precipitaciones de los últimos 6 meses
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={data}
                  margin={{
                    top: 5,
                    right: 10,
                    left: 0,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="humedad" 
                    stroke="#4DAEDB" 
                    strokeWidth={2} 
                    name="Humedad (%)"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="temperatura" 
                    stroke="#CC5500" 
                    strokeWidth={2} 
                    name="Temperatura (°C)" 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="lluvia" 
                    stroke="#2D8E57" 
                    strokeWidth={2} 
                    name="Lluvia (mm)"  
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        {/* Right column: Alerts */}
        <Card>
          <CardHeader>
            <CardTitle>Alertas recientes</CardTitle>
            <CardDescription>
              Notificaciones importantes sobre tus cultivos
            </CardDescription>
          </CardHeader>
          <CardContent className="max-h-[370px] overflow-auto">
            <AlertCard
              title="Humedad de suelo baja"
              message="Sector A2 - Parcela de maíz presenta niveles críticos de humedad."
              timestamp="Hoy, 10:23 AM"
              severity="high"
            />
            <AlertCard
              title="Posible plaga detectada"
              message="La IA detectó posibles signos de roya en el sector B3."
              timestamp="Hoy, 09:45 AM"
              severity="medium"
            />
            <AlertCard
              title="Temperatura elevada"
              message="Temperatura por encima del rango óptimo en invernadero 2."
              timestamp="Ayer, 03:12 PM"
              severity="low"
              resolved={true}
            />
            <AlertCard
              title="Batería baja en sensor"
              message="El sensor #14 (Humedad) necesita reemplazo de batería."
              timestamp="Ayer, 09:30 AM"
              severity="medium"
            />
          </CardContent>
        </Card>
      </div>
      
      {/* Sensor readings */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-4">Lecturas de sensores en tiempo real</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <SensorCard
            title="Humedad del suelo"
            value={28}
            unit="%"
            status="critical"
            icon={Soil}
            lastUpdated="Hace 5 min"
            range={{ min: 25, max: 60 }}
          />
          <SensorCard
            title="Temperatura"
            value={24.5}
            unit="°C"
            status="normal"
            icon={Thermometer}
            lastUpdated="Hace 5 min"
            range={{ min: 15, max: 30 }}
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
      </div>
    </Layout>
  );
};

export default Index;
