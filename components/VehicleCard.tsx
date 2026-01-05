
import React from 'react';
import { Vehicle } from '../types';

interface VehicleCardProps {
  vehicle: Vehicle;
  viewType?: 'grid' | 'admin';
}

const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle, viewType = 'grid' }) => {
  const isUsed = vehicle.condition === 'Usado';
  const priceDisplay = typeof vehicle.price === 'number' 
    ? `$${vehicle.price.toLocaleString('es-AR')}${vehicle.currency === 'USD' ? ' USD' : ''}`
    : 'Consultar Precio';

  return (
    <div className="flex flex-col bg-charcoal-dark rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-charcoal-medium hover:border-charcoal-light h-full">
      <div className="relative w-full aspect-video overflow-hidden">
        <img 
          src={vehicle.image} 
          alt={`${vehicle.brand} ${vehicle.model}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-0.5 rounded border border-white/10 tracking-widest uppercase">
          {vehicle.condition}
        </div>
        {vehicle.isFeatured && (
          <div className="absolute top-3 left-3 bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm tracking-widest uppercase">
            DESTACADO
          </div>
        )}
      </div>
      
      <div className="p-4 flex flex-col gap-3 flex-1">
        <div>
          <h3 className="text-text-light text-lg font-bold leading-tight group-hover:text-primary transition-colors">
            {vehicle.brand} {vehicle.model} {vehicle.version}
          </h3>
          <p className="text-text-dark text-sm mt-1">
            {vehicle.year} • {vehicle.kilometers.toLocaleString('es-AR')} km
          </p>
        </div>

        <div className="flex items-center gap-4 py-3 border-y border-dashed border-charcoal-light my-1">
          <div className="flex items-center gap-1.5 text-text-medium text-xs font-medium">
            <span className="material-symbols-outlined text-[18px] text-primary">
              {vehicle.fuel === 'Híbrido' ? 'electric_bolt' : 'local_gas_station'}
            </span> 
            {vehicle.fuel}
          </div>
          <div className="flex items-center gap-1.5 text-text-medium text-xs font-medium">
            <span className="material-symbols-outlined text-[18px] text-primary">settings</span> 
            {vehicle.transmission}
          </div>
        </div>

        <div className="flex justify-between items-end mt-auto pt-2">
          <p className="text-primary text-xl font-bold tracking-tight">
            {priceDisplay}
          </p>
          <button className="text-xs font-bold text-text-light bg-charcoal-light hover:bg-charcoal-medium px-3 py-1.5 rounded transition-colors uppercase tracking-wider">
            Ver detalle
          </button>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
