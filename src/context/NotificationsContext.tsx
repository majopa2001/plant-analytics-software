
import { createContext, useContext, useState, ReactNode } from "react";
import { toast } from "sonner";

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: "alert" | "info" | "success";
  timestamp: string;
  read: boolean;
}

interface NotificationsContextType {
  notifications: Notification[];
  unreadCount: number;
  addNotification: (notification: Omit<Notification, "id" | "read">) => void;
  markAsRead: (id: string) => void;
  markAllAsRead: () => void;
  deleteNotification: (id: string) => void;
  clearAllNotifications: () => void;
}

const NotificationsContext = createContext<NotificationsContextType | undefined>(undefined);

export function NotificationsProvider({ children }: { children: ReactNode }) {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: "1",
      title: "Alerta de humedad",
      message: "Nivel de humedad crítico detectado en Finca San Pedro, sector A3",
      type: "alert",
      timestamp: "Hace 5 minutos",
      read: false
    },
    {
      id: "2",
      title: "Mantenimiento programado",
      message: "Recordatorio: mantenimiento de sensores programado para mañana",
      type: "info",
      timestamp: "Hace 2 horas",
      read: false
    },
    {
      id: "3",
      title: "Reporte generado",
      message: "El reporte semanal de rendimiento ha sido generado",
      type: "success",
      timestamp: "Ayer",
      read: false
    },
    {
      id: "4",
      title: "Calibración completada",
      message: "Los sensores de temperatura han sido calibrados exitosamente",
      type: "success",
      timestamp: "Hace 2 días",
      read: true
    }
  ]);

  const unreadCount = notifications.filter(n => !n.read).length;

  const addNotification = (notification: Omit<Notification, "id" | "read">) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newNotification: Notification = {
      ...notification,
      id,
      read: false
    };
    
    setNotifications(prev => [newNotification, ...prev]);
    toast.info(`Nueva notificación: ${notification.title}`);
  };

  const markAsRead = (id: string) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    ));
    toast.success("Notificación marcada como leída");
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
    toast.success("Todas las notificaciones marcadas como leídas");
  };

  const deleteNotification = (id: string) => {
    setNotifications(notifications.filter(n => n.id !== id));
    toast.success("Notificación eliminada");
  };

  const clearAllNotifications = () => {
    setNotifications([]);
    toast.success("Todas las notificaciones han sido eliminadas");
  };

  return (
    <NotificationsContext.Provider value={{
      notifications,
      unreadCount,
      addNotification,
      markAsRead,
      markAllAsRead,
      deleteNotification,
      clearAllNotifications
    }}>
      {children}
    </NotificationsContext.Provider>
  );
}

export function useNotifications() {
  const context = useContext(NotificationsContext);
  if (context === undefined) {
    throw new Error("useNotifications must be used within a NotificationsProvider");
  }
  return context;
}
