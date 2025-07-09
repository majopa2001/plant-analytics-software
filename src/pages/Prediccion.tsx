import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  ResponsiveContainer 
} from "recharts";
import { Brain, BarChart4, LineChart as LineChartIcon, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Prediccion = () => {
  const [activeModel, setActiveModel] = useState("rendimiento");
  
  const rendimientoData = [
    { mes: 'Ene', prediccion: 68, real: 65 },
    { mes: 'Feb', prediccion: 72, real: 70 },
    { mes: 'Mar', prediccion: 75, real: 78 },
    { mes: 'Abr', prediccion: 80, real: 82 },
    { mes: 'May', prediccion: 85, real: 83 },
    { mes: 'Jun', prediccion: 78, real: 77 },
    { mes: 'Jul', prediccion: 74, real: null },
    { mes: 'Ago', prediccion: 82, real: null },
    { mes: 'Sep', prediccion: 85, real: null },
    { mes: 'Oct', prediccion: 89, real: null },
    { mes: 'Nov', prediccion: 92, real: null },
    { mes: 'Dic', prediccion: 84, real: null }
  ];
  
  const enfermedadesData = [
    { nombre: 'Roya', probabilidad: 78, impacto: 'Alto' },
    { nombre: 'Mildiu', probabilidad: 45, impacto: 'Medio' },
    { nombre: 'Tizón', probabilidad: 12, impacto: 'Bajo' },
    { nombre: 'Fusarium', probabilidad: 28, impacto: 'Medio' },
    { nombre: 'Alternaria', probabilidad: 18, impacto: 'Bajo' }
  ];
  
  const riesgosData = [
    { tipo: 'Sequía', probabilidad: 65 },
    { tipo: 'Inundación', probabilidad: 15 },
    { tipo: 'Helada', probabilidad: 32 },
    { tipo: 'Plagas', probabilidad: 48 },
    { tipo: 'Nutrientes', probabilidad: 25 }
  ];
  
  const optimizacionData = [
    { recurso: 'Agua', actual: 100, optimizado: 82 },
    { recurso: 'Fertilizantes', actual: 100, optimizado: 75 },
    { recurso: 'Pesticidas', actual: 100, optimizado: 68 },
    { recurso: 'Energía', actual: 100, optimizado: 88 },
    { recurso: 'Mano de obra', actual: 100, optimizado: 90 }
  ];

  return (
    <>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">IA Predictiva</h1>
        <p className="text-gray-500">Análisis y predicciones impulsados por inteligencia artificial</p>
      </div>
      
      <Card className="mb-6">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-full bg-blue-100">
              <Brain className="text-blue-600" size={24} />
            </div>
            <div>
              <CardTitle>Sistema de IA Predictiva</CardTitle>
              <CardDescription>Algoritmos avanzados de machine learning para optimizar tu cultivo</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="mb-4">
            <p className="text-gray-700">
              Nuestro sistema de inteligencia artificial analiza datos históricos y en tiempo real de tus cultivos para generar
              predicciones precisas sobre rendimiento, detección temprana de enfermedades, análisis de riesgos y optimización de recursos.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
              <div className="p-2 rounded-full bg-green-100">
                <BarChart4 size={18} className="text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold">Predicción de rendimiento</h3>
                <p className="text-sm text-gray-600">Proyecciones basadas en datos históricos y condiciones actuales</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
              <div className="p-2 rounded-full bg-amber-100">
                <AlertTriangle size={18} className="text-amber-600" />
              </div>
              <div>
                <h3 className="font-semibold">Detección temprana</h3>
                <p className="text-sm text-gray-600">Identificación proactiva de enfermedades y plagas</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
              <div className="p-2 rounded-full bg-red-100">
                <AlertTriangle size={18} className="text-red-600" />
              </div>
              <div>
                <h3 className="font-semibold">Análisis de riesgos</h3>
                <p className="text-sm text-gray-600">Evaluación de amenazas climáticas y medioambientales</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
              <div className="p-2 rounded-full bg-blue-100">
                <LineChartIcon size={18} className="text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold">Optimización de recursos</h3>
                <p className="text-sm text-gray-600">Recomendaciones para uso eficiente de agua y nutrientes</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Tabs defaultValue="rendimiento" className="w-full" onValueChange={setActiveModel}>
        <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-4">
          <TabsTrigger value="rendimiento">Rendimiento</TabsTrigger>
          <TabsTrigger value="enfermedades">Enfermedades</TabsTrigger>
          <TabsTrigger value="riesgos">Riesgos</TabsTrigger>
          <TabsTrigger value="optimizacion">Optimización</TabsTrigger>
        </TabsList>
        
        <TabsContent value="rendimiento">
          <Card>
            <CardHeader>
              <CardTitle>Predicción de Rendimiento</CardTitle>
              <CardDescription>Proyección para los próximos 6 meses basada en datos históricos y condiciones actuales</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <LineChart data={rendimientoData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="mes" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="real" stroke="#4ade80" name="Rendimiento real" strokeWidth={2} />
                  <Line type="monotone" dataKey="prediccion" stroke="#3b82f6" name="Predicción" strokeWidth={2} strokeDasharray="5 5" />
                </LineChart>
              </ResponsiveContainer>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h3 className="font-medium text-blue-800 mb-2">Análisis de IA</h3>
                <p className="text-sm text-gray-700">
                  Según nuestro modelo predictivo, se espera un incremento del 12% en el rendimiento para el último trimestre del año.
                  Factores clave: optimización del riego (+8%), mejora en nutrientes (+5%), control temprano de enfermedades (+4%).
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Descargar datos</Button>
              <Button>Ver detalles</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="enfermedades">
          <Card>
            <CardHeader>
              <CardTitle>Detección Temprana de Enfermedades</CardTitle>
              <CardDescription>Probabilidad de aparición de enfermedades en los próximos 30 días</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={enfermedadesData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="nombre" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="probabilidad" name="Probabilidad (%)" fill="#f59e0b" />
                </BarChart>
              </ResponsiveContainer>
              
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold text-red-600">Alerta: Roya</h3>
                  <p className="text-sm text-gray-700 mt-1">
                    Alta probabilidad de infección (78%). Se recomienda aplicación preventiva 
                    en los próximos 7 días. Monitorear condiciones de humedad.
                  </p>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold text-amber-600">Monitoreo: Mildiu</h3>
                  <p className="text-sm text-gray-700 mt-1">
                    Probabilidad media (45%). Mantener vigilancia en áreas de baja ventilación.
                    Aumentar el espaciamiento entre plantas si es posible.
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Ver historial</Button>
              <Button>Plan de prevención</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="riesgos">
          <Card>
            <CardHeader>
              <CardTitle>Análisis de Riesgos</CardTitle>
              <CardDescription>Evaluación de riesgos ambientales y climáticos para tu cultivo</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={riesgosData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="tipo" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="probabilidad" name="Probabilidad (%)" fill="#ef4444" />
                </BarChart>
              </ResponsiveContainer>
              
              <div className="mt-6 p-4 bg-red-50 rounded-lg">
                <h3 className="font-medium text-red-800 mb-2">Alerta de Riesgo</h3>
                <p className="text-sm text-gray-700">
                  Se detecta un riesgo elevado de sequía (65%) en las próximas 3 semanas según modelos meteorológicos.
                  Recomendamos preparar sistemas de riego suplementario y revisión de reservas de agua.
                </p>
                <div className="mt-3 flex gap-2">
                  <Button size="sm" variant="outline" className="text-xs">Ver pronóstico detallado</Button>
                  <Button size="sm" variant="destructive" className="text-xs">Plan de contingencia</Button>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Historial de riesgos</Button>
              <Button>Configurar alertas</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="optimizacion">
          <Card>
            <CardHeader>
              <CardTitle>Optimización de Recursos</CardTitle>
              <CardDescription>Recomendaciones para uso eficiente de recursos basadas en IA</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart 
                  data={optimizacionData} 
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  barGap={0}
                  barCategoryGap="20%"
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="recurso" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="actual" name="Uso actual (%)" fill="#94a3b8" />
                  <Bar dataKey="optimizado" name="Uso optimizado (%)" fill="#10b981" />
                </BarChart>
              </ResponsiveContainer>
              
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg bg-green-50">
                  <h3 className="font-semibold text-green-600">Ahorro de agua</h3>
                  <p className="text-3xl font-bold text-green-700">18%</p>
                  <p className="text-sm text-gray-700 mt-1">
                    Potencial de ahorro con sistema de riego por goteo y sensores de humedad.
                  </p>
                </div>
                
                <div className="p-4 border rounded-lg bg-green-50">
                  <h3 className="font-semibold text-green-600">Fertilizantes</h3>
                  <p className="text-3xl font-bold text-green-700">25%</p>
                  <p className="text-sm text-gray-700 mt-1">
                    Reducción posible mediante aplicación de precisión basada en mapas de suelo.
                  </p>
                </div>
                
                <div className="p-4 border rounded-lg bg-green-50">
                  <h3 className="font-semibold text-green-600">Retorno estimado</h3>
                  <p className="text-3xl font-bold text-green-700">+20%</p>
                  <p className="text-sm text-gray-700 mt-1">
                    Incremento en rentabilidad implementando todas las recomendaciones.
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Ver plan completo</Button>
              <Button>Implementar recomendaciones</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default Prediccion;
