
import { useState } from "react";
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
import { BookOpen, Pencil, GraduationCap, Play } from "lucide-react";
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
      imagen: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=2126&auto=format&fit=crop&ixlib=rb-4.0.3",
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
    <div className="animate-fade-in">
      <div className="mb-8">
        <h1 className="text-3xl font-montserrat font-bold mb-3 text-agro-gray-800">Centro de Capacitación</h1>
        <p className="text-agro-gray-600 text-lg">Recursos educativos para optimizar el uso de sIAmbra</p>
      </div>
      
      <Card className="mb-8 overflow-hidden border-0 shadow-xl bg-gradient-to-r from-agro-green/5 via-agro-green-bright/5 to-agro-green/5">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-agro-green/10 to-agro-green-bright/10"></div>
          <div 
            className="h-48 bg-cover bg-center relative"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=2126&auto=format&fit=crop')`
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-agro-green/80 to-agro-green-dark/80"></div>
            <div className="relative z-10 p-8 h-full flex items-center">
              <div className="text-white">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-4 rounded-2xl bg-white/20 backdrop-blur-sm">
                    <GraduationCap size={32} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-montserrat font-bold">Programa de Capacitación Continua</h2>
                    <p className="text-white/90">Aprende a maximizar los beneficios de la tecnología en tus cultivos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CardContent className="pt-6">
          <div className="mb-6">
            <p className="text-agro-gray-700 text-lg leading-relaxed">
              Nuestro programa de capacitación está diseñado para agricultores y técnicos de todos los niveles. 
              Aprenda a instalar, mantener y aprovechar al máximo los sensores y la plataforma Plant Analytics.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center p-6 bg-gradient-to-br from-agro-green/10 to-agro-green-bright/10 rounded-2xl text-center border border-agro-green/20">
              <div className="p-4 rounded-2xl bg-agro-green/10 mb-4">
                <BookOpen size={28} className="text-agro-green" />
              </div>
              <h3 className="text-2xl font-bold text-agro-gray-800 mb-1">12</h3>
              <p className="text-agro-gray-600 font-medium">Cursos disponibles</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-gradient-to-br from-agro-skyblue/10 to-agro-skyblue/20 rounded-2xl text-center border border-agro-skyblue/20">
              <div className="p-4 rounded-2xl bg-agro-skyblue/10 mb-4">
                <Pencil size={28} className="text-agro-skyblue" />
              </div>
              <h3 className="text-2xl font-bold text-agro-gray-800 mb-1">35</h3>
              <p className="text-agro-gray-600 font-medium">Horas de contenido</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-gradient-to-br from-agro-yellow/10 to-agro-yellow/20 rounded-2xl text-center border border-agro-yellow/20">
              <div className="p-4 rounded-2xl bg-agro-yellow/10 mb-4">
                <GraduationCap size={28} className="text-agro-yellow" />
              </div>
              <h3 className="text-2xl font-bold text-agro-gray-800 mb-1">3</h3>
              <p className="text-agro-gray-600 font-medium">Certificaciones</p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Tabs defaultValue="cursos" onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid grid-cols-1 sm:grid-cols-3 h-12 bg-agro-gray-100 rounded-xl p-1">
          <TabsTrigger value="cursos" className="rounded-lg font-medium">Mis cursos</TabsTrigger>
          <TabsTrigger value="proximos" className="rounded-lg font-medium">Próximos eventos</TabsTrigger>
          <TabsTrigger value="faq" className="rounded-lg font-medium">Preguntas frecuentes</TabsTrigger>
        </TabsList>
        
        <TabsContent value="cursos">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {cursos.map((curso) => (
              <Card key={curso.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={curso.imagen} 
                    alt={curso.titulo}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <Badge 
                    className="absolute top-4 right-4 shadow-lg"
                    variant={
                      curso.categoria === "Básico" ? "default" : 
                      curso.categoria === "Intermedio" ? "secondary" : 
                      "destructive"
                    }
                  >
                    {curso.categoria}
                  </Badge>
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg font-montserrat">{curso.titulo}</CardTitle>
                  <CardDescription className="text-agro-gray-600">{curso.descripcion}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm font-medium text-agro-gray-700">
                    <span>Progreso: {curso.progreso}%</span>
                    <span>{curso.completados}/{curso.modulos} módulos</span>
                  </div>
                  <Progress value={curso.progreso} className="h-2" />
                  
                  <div className="flex items-center justify-between text-sm text-agro-gray-500">
                    <span className="flex items-center gap-2">
                      <BookOpen size={16} />
                      {curso.modulos} módulos
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock size={16} />
                      {curso.duracion}
                    </span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full flex items-center justify-center gap-2 bg-agro-green hover:bg-agro-green-dark transition-colors">
                    <Play size={16} />
                    {curso.progreso > 0 ? "Continuar curso" : "Iniciar curso"}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="proximos">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="font-montserrat">Eventos y capacitaciones programados</CardTitle>
              <CardDescription>Mantente actualizado con nuestras próximas actividades de formación</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {proximosCursos.map((curso) => (
                  <div key={curso.id} className="border border-agro-gray-200 rounded-xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:shadow-md transition-shadow">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
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
                        <span className="text-sm text-agro-gray-500 font-medium">{curso.fecha}</span>
                      </div>
                      <h3 className="font-semibold text-agro-gray-800 mb-2">{curso.titulo}</h3>
                      <div className="flex items-center gap-4 text-sm text-agro-gray-600">
                        <span className="flex items-center gap-2">
                          <User size={16} />
                          {curso.instructor}
                        </span>
                        <span className="flex items-center gap-2">
                          <Clock size={16} />
                          {curso.duracion}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <Button variant="outline" size="sm">Más información</Button>
                      <Button size="sm" className="bg-agro-green hover:bg-agro-green-dark">Reservar plaza</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="faq">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="font-montserrat">Preguntas frecuentes</CardTitle>
              <CardDescription>Respuestas a las dudas más comunes sobre nuestra tecnología</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {preguntas.map((item, index) => (
                  <AccordionItem value={`item-${index}`} key={index} className="border-agro-gray-200">
                    <AccordionTrigger className="font-medium text-agro-gray-800 hover:text-agro-green">
                      {item.pregunta}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-agro-gray-700 leading-relaxed">{item.respuesta}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row justify-between gap-4 bg-agro-gray-50">
              <div className="text-sm text-agro-gray-600">
                ¿No encuentras respuesta a tu pregunta?
              </div>
              <div className="flex gap-3">
                <Button variant="outline">Ver base de conocimiento</Button>
                <Button className="bg-agro-green hover:bg-agro-green-dark">Contactar soporte</Button>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

// Custom Clock and User icons
function Clock(props: any) {
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

function User(props: any) {
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

export default Capacitacion;
