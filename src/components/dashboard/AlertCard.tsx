
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AlertTriangle, CheckCircle } from "lucide-react";

type AlertSeverity = 'low' | 'medium' | 'high';

interface AlertCardProps {
  title: string;
  message: string;
  timestamp: string;
  severity: AlertSeverity;
  resolved?: boolean;
  className?: string;
}

export function AlertCard({ 
  title, 
  message, 
  timestamp, 
  severity,
  resolved = false,
  className 
}: AlertCardProps) {
  const severityStyles = {
    low: "border-l-yellow-400",
    medium: "border-l-orange-500",
    high: "border-l-red-600",
  };

  return (
    <div className={cn(
      "flex p-4 bg-white rounded-lg shadow border-l-4 mb-3", 
      resolved ? "border-l-green-500" : severityStyles[severity],
      className
    )}>
      <div className="mr-4">
        {resolved ? (
          <CheckCircle className="h-6 w-6 text-green-500" />
        ) : (
          <AlertTriangle className={cn(
            "h-6 w-6",
            severity === 'low' ? "text-yellow-400" : 
            severity === 'medium' ? "text-orange-500" : 
            "text-red-600"
          )} />
        )}
      </div>
      
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <h4 className="font-semibold">{title}</h4>
          <span className="text-xs text-gray-500">{timestamp}</span>
        </div>
        
        <p className="text-sm text-gray-600 mt-1">{message}</p>
        
        {!resolved && (
          <div className="flex gap-2 mt-2">
            <Button size="sm" variant="outline">Ignorar</Button>
            <Button size="sm" variant="default">Resolver</Button>
          </div>
        )}
      </div>
    </div>
  );
}
