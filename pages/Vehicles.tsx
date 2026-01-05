
import React, { useState } from 'react';
import { VEHICLES } from '../constants';
import VehicleCard from '../components/VehicleCard';

const Vehicles: React.FC = () => {
  const [showFilters, setShowFilters] = useState(true);

  return (
    <div className="flex flex-col w-full min-h-screen">
      <div className="bg-charcoal-dark border-b border-charcoal-light py-12 px-4 md:px-10">
        <div className="max-w-[1280px] mx-auto">
          <h1 className="text-4xl font-black text-text-light tracking-tight">Nuestros Vehículos</h1>
          <p className="text-text-dark mt-3 text-lg">Explorá nuestra selección completa de autos usados y 0km.</p>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto w-full px-4 md:px-10 py-12 flex flex-col lg:flex-row gap-10">
        {/* Sidebar Filters */}
        <aside className={`${showFilters ? 'w-full lg:w-72' : 'hidden'} shrink-0 space-y-8`}>
          <div className="bg-charcoal-dark p-8 rounded-2xl border border-charcoal-light shadow-xl sticky top-24">
            <div className="flex items-center gap-2 mb-8 border-b border-charcoal-light pb-6">
              <span className="material-symbols-outlined text-primary">filter_list</span>
              <h3 className="text-xl font-bold">Filtrar por</h3>
            </div>
            
            <div className="space-y-8">
              <div>
                <p className="font-bold text-text-light mb-4 text-xs uppercase tracking-[0.2em]">Condición</p>
                <div className="space-y-3">
                  {['Usado', '0km'].map(cond => (
                    <label key={cond} className="flex items-center gap-3 text-text-medium hover:text-text-light cursor-pointer group">
                      <input type="checkbox" className="form-checkbox bg-charcoal-medium border-charcoal-light text-primary rounded focus:ring-primary w-5 h-5" />
                      <span className="group-hover:translate-x-1 transition-transform">{cond}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="border-t border-charcoal-light pt-8">
                <p className="font-bold text-text-light mb-4 text-xs uppercase tracking-[0.2em]">Marca</p>
                <select className="w-full bg-charcoal-medium border-none rounded-xl text-text-light p-3 focus:ring-1 focus:ring-primary text-sm">
                  <option>Todas las marcas</option>
                  <option>Toyota</option>
                  <option>Volkswagen</option>
                  <option>Ford</option>
                </select>
              </div>

              <div className="border-t border-charcoal-light pt-8">
                <p className="font-bold text-text-light mb-4 text-xs uppercase tracking-[0.2em]">Precio (USD)</p>
                <div className="flex items-center gap-2">
                  <input type="number" placeholder="Mín" className="w-full bg-charcoal-medium border-none rounded-xl text-text-light p-3 text-sm" />
                  <span className="text-text-dark">-</span>
                  <input type="number" placeholder="Máx" className="w-full bg-charcoal-medium border-none rounded-xl text-text-light p-3 text-sm" />
                </div>
              </div>

              <div className="border-t border-charcoal-light pt-8">
                <p className="font-bold text-text-light mb-4 text-xs uppercase tracking-[0.2em]">Transmisión</p>
                <div className="space-y-3">
                  {['Manual', 'Automática'].map(t => (
                    <label key={t} className="flex items-center gap-3 text-text-medium hover:text-text-light cursor-pointer">
                      <input type="checkbox" className="form-checkbox bg-charcoal-medium border-charcoal-light text-primary rounded focus:ring-primary w-5 h-5" />
                      <span className="text-sm">{t}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button className="w-full bg-primary hover:bg-red-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-primary/20 uppercase tracking-widest text-sm">
                Aplicar Filtros
              </button>
            </div>
          </div>
        </aside>

        {/* Vehicle Grid */}
        <main className="flex-1">
          <div className="flex justify-between items-center mb-10">
            <p className="text-text-dark font-medium">
              <span className="text-text-light font-black text-xl">{VEHICLES.length}</span> vehículos encontrados
            </p>
            <div className="flex items-center gap-4">
               <button 
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden flex items-center gap-2 bg-charcoal-dark border border-charcoal-light px-4 py-2 rounded-lg text-sm"
               >
                 <span className="material-symbols-outlined text-[20px]">tune</span>
                 Filtros
               </button>
               <div className="flex items-center gap-2">
                <span className="text-text-dark text-sm hidden sm:inline">Ordenar por:</span>
                <select className="bg-charcoal-dark border border-charcoal-light rounded-xl text-text-light py-2 px-4 focus:ring-1 focus:ring-primary text-sm">
                  <option>Más recientes</option>
                  <option>Menor precio</option>
                  <option>Mayor precio</option>
                </select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
            {VEHICLES.map(v => (
              <VehicleCard key={v.id} vehicle={v} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-20">
            <div className="flex items-center gap-3">
              <button className="size-12 rounded-xl bg-charcoal-medium flex items-center justify-center text-text-dark hover:bg-charcoal-light transition-colors">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="size-12 rounded-xl bg-primary text-white font-bold text-lg shadow-lg shadow-primary/20">1</button>
              <button className="size-12 rounded-xl bg-charcoal-medium text-text-medium hover:bg-charcoal-light transition-colors">2</button>
              <button className="size-12 rounded-xl bg-charcoal-medium text-text-medium hover:bg-charcoal-light transition-colors">3</button>
              <span className="text-text-dark font-bold px-2">...</span>
              <button className="size-12 rounded-xl bg-charcoal-medium flex items-center justify-center text-text-dark hover:bg-charcoal-light transition-colors">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
        </main>
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-charcoal-dark border-t border-charcoal-light mt-10">
        <div className="max-w-[1280px] mx-auto px-4 md:px-10 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-xl">
            <h2 className="text-3xl font-black mb-4">¿No encontrás lo que buscás?</h2>
            <p className="text-text-dark text-lg">Dejanos tus datos y te avisamos cuando ingrese un vehículo con tus preferencias.</p>
          </div>
          <div className="flex gap-4 w-full md:w-auto">
            <button className="flex-1 md:flex-none bg-charcoal-medium hover:bg-charcoal-light text-text-light font-bold py-4 px-8 rounded-xl border border-charcoal-light transition-colors">
              Contactar Asesor
            </button>
            <button className="flex-1 md:flex-none bg-primary hover:bg-red-700 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-xl shadow-primary/20">
              Crear Alerta
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vehicles;
