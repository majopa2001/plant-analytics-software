
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Actividad } from "@/types/usuario";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ActivityTabProps {
  actividad: Actividad[];
}

export function ActivityTab({ actividad }: ActivityTabProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Actividad reciente</CardTitle>
        <CardDescription>Historial de acciones y eventos en tu cuenta</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {actividad.map((item, index) => (
            <div key={index} className="flex gap-4">
              <div className="min-w-[12px] flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                {index < actividad.length - 1 && (
                  <div className="h-full w-[2px] bg-gray-200 absolute mt-3"></div>
                )}
              </div>
              <div className="space-y-1 pb-2">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium">{item.accion}</p>
                  <span className="text-xs text-gray-500">{item.fecha}</span>
                </div>
                <p className="text-sm text-gray-600">{item.detalles}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full" onClick={() => toast.info("Historial completo no disponible en esta versión")}>
          Ver historial completo
        </Button>
      </CardFooter>
    </Card>
  );
}
