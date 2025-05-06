
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  description?: string;
  change?: number;
  className?: string;
  iconColor?: string;
}

export function StatCard({ 
  title, 
  value, 
  icon: Icon, 
  description, 
  change, 
  className,
  iconColor = "text-agro-green"
}: StatCardProps) {
  return (
    <div className={cn("dashboard-card flex flex-col", className)}>
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <div className={cn("p-2 rounded-full bg-opacity-10", iconColor.replace('text-', 'bg-'))}>
          <Icon size={20} className={cn("", iconColor)} />
        </div>
      </div>
      
      <div className="mb-auto">
        <h3 className="text-2xl font-bold">{value}</h3>
        {description && <p className="text-sm text-gray-500 mt-1">{description}</p>}
      </div>
      
      {typeof change !== 'undefined' && (
        <div className={cn(
          "flex items-center mt-4 text-xs font-medium", 
          change >= 0 ? "text-green-600" : "text-red-600"
        )}>
          <span className={cn(
            "inline-flex items-center mr-1",
            change >= 0 ? "text-green-600" : "text-red-600"
          )}>
            {change >= 0 ? '↑' : '↓'} {Math.abs(change)}%
          </span>
          <span className="text-gray-400">vs periodo anterior</span>
        </div>
      )}
    </div>
  );
}
