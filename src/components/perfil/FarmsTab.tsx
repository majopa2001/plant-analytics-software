
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Finca } from "@/types/usuario";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface FarmsTabProps {
  fincas: Finca[];
}

export function FarmsTab({ fincas }: FarmsTabProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>Fincas registradas</CardTitle>
            <CardDescription>Administra tus fincas y cultivos en Plant Analytics</CardDescription>
          </div>
          <Button onClick={() => toast.info("Funcionalidad en desarrollo")}>Agregar finca</Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {fincas.map((finca) => (
            <Card key={finca.id}>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-base">{finca.nombre}</CardTitle>
                    <CardDescription>{finca.ubicacion}</CardDescription>
                  </div>
                  <Badge
                    variant={finca.estado === "activa" ? "default" : "secondary"}
                  >
                    {finca.estado === "activa" ? "Activa" : "Inactiva"}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pb-2 pt-0">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="block text-gray-500">Tamaño:</span>
                    <span className="font-medium">{finca.tamaño}</span>
                  </div>
                  <div>
                    <span className="block text-gray-500">Sensores instalados:</span>
                    <span className="font-medium">{finca.sensores}</span>
                  </div>
                  <div className="col-span-2">
                    <span className="block text-gray-500">Cultivos principales:</span>
                    <div className="flex gap-2 mt-1">
                      {finca.cultivos.map((cultivo) => (
                        <Badge key={cultivo} variant="outline">{cultivo}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-0 flex justify-between">
                <Button variant="outline" size="sm">Ver detalles</Button>
                <Button size="sm">Ir al dashboard</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
