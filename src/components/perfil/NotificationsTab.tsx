
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useNotifications } from "@/context/NotificationsContext";
import { NotificationsPopover } from "@/components/layout/NotificationsPopover";

interface NotificationsTabProps {
  userAvatar?: string;
  userName?: string;
}

export function NotificationsTab({ userAvatar, userName = "Usuario" }: NotificationsTabProps) {
  const { notifications, addNotification } = useNotifications();
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [type, setType] = useState<"alert" | "info" | "success">("info");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (title && message) {
      const timestamp = "Ahora mismo";
      
      addNotification({
        title,
        message,
        type,
        timestamp,
        avatar: userAvatar
      });
      
      // Reset form
      setTitle("");
      setMessage("");
      setType("info");
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center space-x-4">
            {userAvatar && (
              <Avatar>
                <AvatarImage src={userAvatar} alt={userName} />
                <AvatarFallback>{userName?.slice(0, 2)}</AvatarFallback>
              </Avatar>
            )}
            <div>
              <CardTitle>Centro de Notificaciones</CardTitle>
              <CardDescription>Administra y crea notificaciones para probar el sistema</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium">Notificaciones activas: {notifications.length}</h3>
            <NotificationsPopover />
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Título</Label>
              <Input 
                id="title" 
                placeholder="Título de la notificación" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message">Mensaje</Label>
              <Input 
                id="message" 
                placeholder="Contenido de la notificación" 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="type">Tipo</Label>
              <Select 
                value={type} 
                onValueChange={(value) => setType(value as "alert" | "info" | "success")}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona un tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="info">Información</SelectItem>
                  <SelectItem value="alert">Alerta</SelectItem>
                  <SelectItem value="success">Éxito</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <Button type="submit" className="w-full">Crear notificación</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
