
import { useState } from "react";
import { Mail, Phone, MapPin, Building, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { toast } from "sonner";
import { Usuario } from "@/types/usuario";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

// Import icons as React components
import { Pencil } from "@/components/icons/Pencil";
import { Clock } from "@/components/icons/Clock";

interface ProfileCardProps {
  usuario: Usuario;
  isEditing: boolean;
  setIsEditing: (value: boolean) => void;
}

export function ProfileCard({ usuario, isEditing, setIsEditing }: ProfileCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-col items-center text-center pb-2">
        <div className="relative mb-2">
          <Avatar className="h-24 w-24">
            <AvatarImage src={usuario.avatar} alt={usuario.nombre} />
            <AvatarFallback>{usuario.nombre.slice(0, 2)}</AvatarFallback>
          </Avatar>
          <Button
            variant="outline"
            size="icon"
            className="absolute bottom-0 right-0 rounded-full h-8 w-8 bg-white"
            onClick={() => toast.info("Funcionalidad de cambio de foto en desarrollo")}
          >
            <Pencil className="h-4 w-4" />
          </Button>
        </div>
        <CardTitle className="text-xl">{usuario.nombre}</CardTitle>
        <div className="flex items-center gap-2 mt-1">
          <Badge>{usuario.rol}</Badge>
          <Badge variant="outline">{usuario.plan}</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4 text-sm pt-4">
        <div className="flex items-center gap-3">
          <Mail className="h-4 w-4 text-gray-500" />
          <span>{usuario.correo}</span>
        </div>
        <div className="flex items-center gap-3">
          <Phone className="h-4 w-4 text-gray-500" />
          <span>{usuario.telefono}</span>
        </div>
        <div className="flex items-start gap-3">
          <MapPin className="h-4 w-4 text-gray-500 mt-1" />
          <span>{usuario.direccion}</span>
        </div>
        <div className="flex items-center gap-3">
          <Building className="h-4 w-4 text-gray-500" />
          <span>{usuario.empresa}</span>
        </div>
        <Separator />
        <div className="flex items-center gap-3">
          <Calendar className="h-4 w-4 text-gray-500" />
          <div>
            <span className="block text-gray-600">Miembro desde:</span>
            <span>{usuario.fechaRegistro}</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Clock className="h-4 w-4 text-gray-500" />
          <div>
            <span className="block text-gray-600">Último acceso:</span>
            <span>{usuario.ultimoAcceso}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          variant="outline"
          className="w-full"
          onClick={() => setIsEditing(!isEditing)}
        >
          {isEditing ? "Cancelar edición" : "Editar perfil"}
        </Button>
      </CardFooter>
    </Card>
  );
}
