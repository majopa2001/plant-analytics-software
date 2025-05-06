
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { BookOpen, Pencil, GraduationCap, Lock, Check, Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Capacitacion = () => {
  const [activeTab, setActiveTab] = useState("cursos");
  
  const cursos = [
    {
      id: 1,
      titulo: "Fundamentos de agricultura de precisión",
      descripcion: "Introducción a conceptos básicos y tecnologías para optimizar cultivos",
      progreso: 80,
      modulos: 8,
      completados: 6,
      duracion: "6 horas",
      imagen: "https://images.unsplash.com/photo-1626908013351-800ddd7b196c?q=80&w=2942&auto=format&fit=crop",
      categoria: "Básico"
    },
    {
      id: 2,
      titulo: "Monitoreo avanzado con sensores IoT",
      descripcion: "Aprende a instalar, calibrar y mantener sensores para cultivos",
      progreso: 45,
      modulos: 10,
      completados: 4,
      duracion: "8 horas",
      imagen: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2940&auto=format&fit=crop",
      categoria: "Intermedio"
    },
    {
      id: 3,
      titulo: "Interpretación de datos para toma de decisiones",
      descripcion: "Cómo utilizar datos de sensores para mejorar la productividad",
      progreso: 0,
      modulos: 6,
      completados: 0,
      duracion: "5 horas",
      imagen: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop",
      categoria: "Avanzado"
    },
  ];
  
  const proximosCursos = [
    {
      id: 4,
      titulo: "Manejo integrado de plagas con IA",
      fecha: "15 de agosto, 2025",
      instructor: "Dr. Carlos Mendoza",
      duracion: "4 horas",
      categoria: "Intermedio"
    },
    {
      id: 5,
      titulo: "Certificación en agricultura sostenible",
      fecha: "3 de septiembre, 2025",
      instructor: "Ing. Laura Ramírez",
      duracion: "12 horas",
      categoria: "Avanzado"
    }
  ];
  
  const preguntas = [
    {
      pregunta: "¿Qué tipos de sensores son recomendables para mi cultivo?",
      respuesta: "La selección de sensores depende del tipo de cultivo y variables a monitorear. Para la mayoría de los cultivos, recomendamos comenzar con sensores de humedad del suelo, temperatura ambiental y radiación solar. Para cultivos específicos como café o cacao, sensores de pH del suelo y humedad foliar también son importantes."
    },
    {
      pregunta: "¿Con qué frecuencia debo calibrar los sensores?",
      respuesta: "Se recomienda calibrar los sensores al menos una vez cada 3 meses para sensores de suelo, y cada 6 meses para sensores ambientales. Sin embargo, después de eventos climáticos extremos como lluvias intensas o períodos de sequía, es recomendable verificar la calibración."
    },
    {
      pregunta: "¿Cómo interpreto los datos de los sensores en mi dashboard?",
      respuesta: "El dashboard muestra tendencias y valores en tiempo real. Los colores verde, amarillo y rojo indican niveles óptimos, de precaución y críticos respectivamente. Las gráficas muestran tendencias a lo largo del tiempo. Recomendamos completar el curso 'Interpretación de datos para toma de decisiones' para un entendimiento completo."
    },
    {
      pregunta: "¿Puedo acceder a las capacitaciones sin conexión a internet?",
      respuesta: "Sí, ofrecemos la opción de descargar los cursos para visualización offline. Sin embargo, algunas funciones interactivas y evaluaciones requieren conexión a internet. Los cursos descargados se sincronizan automáticamente cuando recupera la conexión."
    },
    {
      pregunta: "¿Cómo obtengo soporte técnico para problemas con los sensores?",
      respuesta: "Puede contactar a nuestro equipo de soporte técnico a través de la sección de 'Ayuda' en la plataforma o directamente al correo soporte@plantanalytics.com. También ofrecemos asistencia telefónica en horario de oficina al +51-1-234-5678."
    }
  ];

  return (
    <Layout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Centro de Capacitación</h1>
        <p className="text-gray-500">Recursos educativos para optimizar el uso de Plant Analytics</p>
      </div>
      
      <Card className="mb-6">
        <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-full bg-green-100">
              <GraduationCap className="text-green-600" size={24} />
            </div>
            <div>
              <CardTitle>Programa de Capacitación Continua</CardTitle>
              <CardDescription>Aprende a maximizar los beneficios de la tecnología en tus cultivos</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="mb-4">
            <p className="text-gray-700">
              Nuestro programa de capacitación está diseñado para agricultores y técnicos de todos los niveles. 
              Aprenda a instalar, mantener y aprovechar al máximo los sensores y la plataforma Plant Analytics.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg text-center">
              <div className="p-3 rounded-full bg-green-100 mb-3">
                <BookOpen size={22} className="text-green-600" />
              </div>
              <h3 className="font-semibold mb-1">12</h3>
              <p className="text-sm text-gray-600">Cursos disponibles</p>
            </div>
            
            <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg text-center">
              <div className="p-3 rounded-full bg-blue-100 mb-3">
                <Pencil size={22} className="text-blue-600" />
              </div>
              <h3 className="font-semibold mb-1">35</h3>
              <p className="text-sm text-gray-600">Horas de contenido</p>
            </div>
            
            <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg text-center">
              <div className="p-3 rounded-full bg-amber-100 mb-3">
                <GraduationCap size={22} className="text-amber-600" />
              </div>
              <h3 className="font-semibold mb-1">3</h3>
              <p className="text-sm text-gray-600">Certificaciones</p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Tabs defaultValue="cursos" onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-1 sm:grid-cols-3 mb-4">
          <TabsTrigger value="cursos">Mis cursos</TabsTrigger>
          <TabsTrigger value="proximos">Próximos eventos</TabsTrigger>
          <TabsTrigger value="faq">Preguntas frecuentes</TabsTrigger>
        </TabsList>
        
        <TabsContent value="cursos">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {cursos.map((curso) => (
              <Card key={curso.id} className="overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={curso.imagen} 
                    alt={curso.titulo}
                    className="w-full h-full object-cover"
                  />
                  <Badge 
                    className="absolute top-3 right-3"
                    variant={
                      curso.categoria === "Básico" ? "default" : 
                      curso.categoria === "Intermedio" ? "secondary" : 
                      "destructive"
                    }
                  >
                    {curso.categoria}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{curso.titulo}</CardTitle>
                  <CardDescription>{curso.descripcion}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-2 text-sm">
                    <span>Progreso: {curso.progreso}%</span>
                    <span>{curso.completados}/{curso.modulos} módulos</span>
                  </div>
                  <Progress value={curso.progreso} className="h-2" />
                  
                  <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <BookOpen size={14} />
                      {curso.modulos} módulos
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {curso.duracion}
                    </span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full flex items-center justify-center gap-2">
                    {curso.progreso > 0 ? (
                      <>
                        <Play size={16} />
                        Continuar curso
                      </>
                    ) : (
                      <>
                        <Play size={16} />
                        Iniciar curso
                      </>
                    )}
                  </Button>
                </CardFooter>
              </Card>
            ))}
            
            <Card className="overflow-hidden border-dashed">
              <CardHeader>
                <CardTitle className="text-lg">Explorar más cursos</CardTitle>
                <CardDescription>Descubre contenido educativo adaptado a tus necesidades</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center py-8">
                <div className="p-4 rounded-full bg-gray-100 mb-4">
                  <BookOpen size={32} className="text-gray-500" />
                </div>
                <p className="text-center text-gray-500 mb-4">
                  Tenemos cursos para todos los niveles de experiencia
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Ver catálogo completo</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="proximos">
          <Card>
            <CardHeader>
              <CardTitle>Eventos y capacitaciones programados</CardTitle>
              <CardDescription>Mantente actualizado con nuestras próximas actividades de formación</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {proximosCursos.map((curso) => (
                  <div key={curso.id} className="border rounded-lg p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge 
                          variant={
                            curso.categoria === "Básico" ? "default" : 
                            curso.categoria === "Intermedio" ? "secondary" : 
                            "destructive"
                          }
                          className="font-normal"
                        >
                          {curso.categoria}
                        </Badge>
                        <span className="text-sm text-gray-500">{curso.fecha}</span>
                      </div>
                      <h3 className="font-medium mb-1">{curso.titulo}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <User size={14} />
                          {curso.instructor}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={14} />
                          {curso.duracion}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <Button variant="outline" size="sm">Más información</Button>
                      <Button size="sm">Reservar plaza</Button>
                    </div>
                  </div>
                ))}
                
                <div className="border border-dashed rounded-lg p-6 text-center">
                  <h3 className="font-medium mb-2">¿Necesitas capacitación personalizada?</h3>
                  <p className="text-gray-600 mb-4">
                    Podemos diseñar un programa de formación específico para las necesidades de tu equipo
                  </p>
                  <Button variant="outline">Solicitar programa personalizado</Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Webinars grabados</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">
                  Accede a nuestra biblioteca de webinars sobre tecnología agrícola
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full">Ver biblioteca</Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Comunidad de usuarios</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">
                  Únete a otros agricultores y comparte experiencias y aprendizajes
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full">Unirse al foro</Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Material descargable</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">
                  Guías, manuales y recursos para consulta offline
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full">Ver recursos</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="faq">
          <Card>
            <CardHeader>
              <CardTitle>Preguntas frecuentes</CardTitle>
              <CardDescription>Respuestas a las dudas más comunes sobre nuestra tecnología</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {preguntas.map((item, index) => (
                  <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger>
                      {item.pregunta}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-700">{item.respuesta}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row justify-between gap-4">
              <div className="text-sm text-gray-500">
                ¿No encuentras respuesta a tu pregunta?
              </div>
              <div className="flex gap-3">
                <Button variant="outline">Ver base de conocimiento</Button>
                <Button>Contactar soporte</Button>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </Layout>
  );
};

export default Capacitacion;

// Missing icons import
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

function User(props) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}
