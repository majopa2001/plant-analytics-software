
import { Button } from "@/components/ui/button";
import { Settings, Bell, Shield, InfoIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function QuickAccessCard() {
  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle className="text-base">Accesos rápidos</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <Button variant="ghost" className="w-full justify-start">
          <Settings size={16} className="mr-2" />
          Configuración de cuenta
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <Bell size={16} className="mr-2" />
          Preferencias de notificación
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <Shield size={16} className="mr-2" />
          Seguridad y acceso
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <InfoIcon size={16} className="mr-2" />
          Ayuda y soporte
        </Button>
      </CardContent>
    </Card>
  );
}
