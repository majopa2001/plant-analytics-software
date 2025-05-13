
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Key } from "lucide-react";
import { Usuario } from "@/types/usuario";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface AccountTabProps {
  usuario: Usuario;
  isEditing: boolean;
  setIsEditing: (value: boolean) => void;
}

export function AccountTab({ usuario, isEditing, setIsEditing }: AccountTabProps) {
  const handleSaveChanges = () => {
    toast.success("Cambios guardados correctamente");
    setIsEditing(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Información de cuenta</CardTitle>
        <CardDescription>Actualiza tus datos personales y preferencias de privacidad</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-6">
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="nombre">Nombre completo</Label>
                <Input 
                  id="nombre" 
                  defaultValue={usuario.nombre} 
                  disabled={!isEditing}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="empresa">Empresa</Label>
                <Input 
                  id="empresa" 
                  defaultValue={usuario.empresa}
                  disabled={!isEditing}
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="correo">Correo electrónico</Label>
                <Input 
                  id="correo" 
                  type="email" 
                  defaultValue={usuario.correo}
                  disabled={!isEditing}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="telefono">Teléfono</Label>
                <Input 
                  id="telefono" 
                  defaultValue={usuario.telefono}
                  disabled={!isEditing}
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="direccion">Dirección</Label>
              <Input 
                id="direccion" 
                defaultValue={usuario.direccion}
                disabled={!isEditing}
              />
            </div>
          </div>
          
          <Separator />
          
          <div>
            <h3 className="font-medium mb-3">Seguridad</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Cambiar contraseña</Label>
                  <p className="text-[0.8rem] text-gray-500">Actualiza tu contraseña periódicamente</p>
                </div>
                <Button variant="outline" disabled={!isEditing}>
                  <Key size={16} className="mr-2" />
                  Cambiar
                </Button>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Verificación en dos pasos</Label>
                  <p className="text-[0.8rem] text-gray-500">Añade una capa extra de seguridad a tu cuenta</p>
                </div>
                <Switch disabled={!isEditing} />
              </div>
            </div>
          </div>
          
          <Separator />
          
          <div>
            <h3 className="font-medium mb-3">Preferencias de notificación</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Correo electrónico</Label>
                  <p className="text-[0.8rem] text-gray-500">Recibir notificaciones por correo electrónico</p>
                </div>
                <Switch defaultChecked disabled={!isEditing} />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>SMS</Label>
                  <p className="text-[0.8rem] text-gray-500">Recibir alertas importantes por SMS</p>
                </div>
                <Switch disabled={!isEditing} />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Aplicación móvil</Label>
                  <p className="text-[0.8rem] text-gray-500">Notificaciones push en la app móvil</p>
                </div>
                <Switch defaultChecked disabled={!isEditing} />
              </div>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        {isEditing ? (
          <>
            <Button variant="outline" onClick={() => setIsEditing(false)}>Cancelar</Button>
            <Button onClick={handleSaveChanges}>Guardar cambios</Button>
          </>
        ) : (
          <Button 
            variant="outline" 
            className="w-full"
            onClick={() => setIsEditing(true)}
          >
            Editar información
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
