
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface SensorCardProps {
  title: string;
  value: string | number;
  unit?: string;
  status: 'normal' | 'warning' | 'critical';
  icon: LucideIcon;
  lastUpdated?: string;
  range?: {
    min: number;
    max: number;
  };
  className?: string;
}

export function SensorCard({ 
  title, 
  value, 
  unit, 
  status, 
  icon: Icon, 
  lastUpdated, 
  range,
  className
}: SensorCardProps) {
  return (
    <div className={cn(
      "sensor-card dashboard-card", 
      status === 'warning' && "warning",
      status === 'critical' && "critical",
      className
    )}>
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <Icon 
          size={20} 
          className={cn(
            status === 'normal' ? "text-agro-green" : 
            status === 'warning' ? "text-agro-yellow" : 
            "text-agro-alert"
          )} 
        />
      </div>
      
      <div className="flex items-end gap-1 mb-3">
        <h3 className="text-2xl font-bold">{value}</h3>
        {unit && <span className="text-sm text-gray-500 mb-0.5">{unit}</span>}
      </div>

      {range && (
        <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden mb-3">
          <div 
            className={cn(
              "h-full rounded-full",
              status === 'normal' ? "bg-agro-green" : 
              status === 'warning' ? "bg-agro-yellow" : 
              "bg-agro-alert"
            )}
            style={{ 
              width: `${Math.min(Math.max(((Number(value) - range.min) / (range.max - range.min)) * 100, 0), 100)}%`
            }}
          />
        </div>
      )}

      {range && (
        <div className="flex justify-between text-xs text-gray-400">
          <span>{range.min}</span>
          <span>{range.max}</span>
        </div>
      )}

      {lastUpdated && (
        <p className="text-xs text-gray-400 mt-3">
          Actualizado: {lastUpdated}
        </p>
      )}
    </div>
  );
}
