
import React, { useEffect, useRef } from 'react';
import { MapPin } from 'lucide-react';

interface SensorLocation {
  id: string;
  name: string;
  lat: number;
  lng: number;
  type: string;
}

const sensorLocations: SensorLocation[] = [
  { id: "S-001", name: "Sensor Temperatura 1", lat: 40.712, lng: -74.006, type: "Temperatura" },
  { id: "S-002", name: "Sensor Humedad Suelo 1", lat: 40.714, lng: -74.012, type: "Humedad de suelo" },
  { id: "S-003", name: "Sensor Humedad Aire 1", lat: 40.718, lng: -74.008, type: "Humedad ambiental" },
  { id: "S-004", name: "Sensor Velocidad Viento", lat: 40.711, lng: -74.003, type: "Viento" },
  { id: "S-005", name: "Sensor Radiación Solar", lat: 40.716, lng: -74.015, type: "Radiación" },
  { id: "S-006", name: "Sensor Precipitación", lat: 40.709, lng: -74.009, type: "Lluvia" },
];

const SensoresMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // This is a placeholder for a real map integration
    // In a real application, we would initialize a map library here
    console.log('Map component mounted');
    
    return () => {
      console.log('Map component unmounted');
    };
  }, []);

  return (
    <div className="relative w-full h-[400px] bg-gray-200 rounded-lg overflow-hidden">
      <div ref={mapRef} className="absolute inset-0">
        {/* Mock map background with a grid pattern */}
        <div className="w-full h-full bg-[#E8F4F8] relative">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, #DDE8EC 1px, transparent 1px), 
                              linear-gradient(to bottom, #DDE8EC 1px, transparent 1px)`,
            backgroundSize: '20px 20px'
          }}></div>
          
          {/* Sample sensor locations */}
          {sensorLocations.map((sensor) => (
            <div 
              key={sensor.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
              style={{ 
                left: `${((sensor.lng + 74) * 80) % 100}%`, 
                top: `${((sensor.lat - 40) * 120) % 100}%` 
              }}
            >
              <div className="flex flex-col items-center">
                <div className={`
                  w-6 h-6 rounded-full bg-white shadow-md flex items-center justify-center
                  ${sensor.type === 'Temperatura' ? 'text-red-500' : 
                    sensor.type === 'Humedad de suelo' ? 'text-green-500' : 
                    sensor.type === 'Humedad ambiental' ? 'text-blue-500' : 
                    sensor.type === 'Viento' ? 'text-gray-500' : 
                    sensor.type === 'Radiación' ? 'text-yellow-500' : 'text-cyan-500'
                  }
                `}>
                  <MapPin size={16} />
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-75 text-white text-xs rounded py-1 px-2 absolute -top-8 whitespace-nowrap">
                  {sensor.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Map controls mock */}
      <div className="absolute top-3 right-3 bg-white rounded shadow-md flex flex-col">
        <button className="p-2 hover:bg-gray-100">+</button>
        <div className="w-full h-px bg-gray-200"></div>
        <button className="p-2 hover:bg-gray-100">-</button>
      </div>

      {/* Map legend */}
      <div className="absolute bottom-3 left-3 bg-white bg-opacity-90 rounded shadow-md p-2">
        <div className="text-xs font-medium mb-1">Leyenda</div>
        <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-xs">
          <div className="flex items-center">
            <span className="w-3 h-3 bg-red-500 rounded-full mr-1"></span>
            <span>Temperatura</span>
          </div>
          <div className="flex items-center">
            <span className="w-3 h-3 bg-green-500 rounded-full mr-1"></span>
            <span>Humedad suelo</span>
          </div>
          <div className="flex items-center">
            <span className="w-3 h-3 bg-blue-500 rounded-full mr-1"></span>
            <span>Humedad aire</span>
          </div>
          <div className="flex items-center">
            <span className="w-3 h-3 bg-gray-500 rounded-full mr-1"></span>
            <span>Viento</span>
          </div>
          <div className="flex items-center">
            <span className="w-3 h-3 bg-yellow-500 rounded-full mr-1"></span>
            <span>Radiación</span>
          </div>
          <div className="flex items-center">
            <span className="w-3 h-3 bg-cyan-500 rounded-full mr-1"></span>
            <span>Lluvia</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SensoresMap;
