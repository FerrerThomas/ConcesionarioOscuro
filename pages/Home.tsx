
import React from 'react';
import { Link } from 'react-router-dom';
import { VEHICLES, REVIEWS } from '../constants';
import VehicleCard from '../components/VehicleCard';

const Home: React.FC = () => {
  const featuredUsados = VEHICLES.filter(v => v.condition === 'Usado').slice(0, 3);
  const lanzamientos = VEHICLES.filter(v => v.condition === '0km').slice(0, 3);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section - Estilo Mustang Original */}
      <section className="relative w-full min-h-[550px] flex flex-col items-center justify-center text-center px-4 overflow-hidden rounded-b-[40px] md:rounded-b-[80px]">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.8) 100%), url("https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&q=80&w=2000")`
          }}
        />
        <div className="relative z-10 max-w-4xl flex flex-col gap-8 items-center mt-12">
          <div className="flex flex-col gap-4">
            <h1 className="text-text-light text-4xl sm:text-5xl md:text-7xl font-black leading-[1.1] tracking-tighter drop-shadow-2xl px-2">
              Encontrá tu próximo auto hoy
            </h1>
            <p className="text-text-medium text-lg md:text-xl max-w-2xl mx-auto font-medium opacity-90">
              La mejor selección de 0km y usados seleccionados con garantía de confianza.
            </p>
          </div>

          <div className="flex flex-wrap gap-5 justify-center mt-4">
            <Link to="/vehiculos" className="bg-primary hover:bg-red-700 text-white font-bold py-4 px-10 rounded-xl transition-all hover:scale-105 shadow-2xl shadow-primary/40 text-sm uppercase tracking-widest">
              Ver Stock Usados
            </Link>
            <Link to="/vehiculos" className="bg-[#2a2a2a] hover:bg-[#3a3a3a] text-text-light font-bold py-4 px-10 rounded-xl transition-all hover:scale-105 shadow-2xl text-sm uppercase tracking-widest border border-white/5">
              Ver Catálogo 0km
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Usados */}
      <section className="py-24 px-4 md:px-10 max-w-[1280px] mx-auto w-full">
        <div className="flex flex-col gap-2 pb-12">
          <h2 className="text-3xl font-black tracking-tight text-white">Oportunidades Usados Seleccionados</h2>
          <div className="h-1.5 w-24 bg-primary rounded-full mb-2"></div>
          <p className="text-text-dark text-lg">Vehículos inspeccionados y listos para transferir.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {featuredUsados.map(v => (
            <VehicleCard key={v.id} vehicle={v} />
          ))}
        </div>
        <div className="flex justify-center mt-16">
          <Link to="/vehiculos" className="bg-charcoal-medium hover:bg-charcoal-light text-text-light font-bold py-4 px-12 rounded-xl transition-all border border-charcoal-light hover:border-primary/50 shadow-lg">
            Ver stock completo de usados
          </Link>
        </div>
      </section>

      {/* New Releases */}
      <section className="py-24 px-4 md:px-10 bg-charcoal-dark w-full">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col gap-2 pb-12">
            <div className="flex items-center gap-3 text-primary mb-2">
              <span className="material-symbols-outlined font-black text-3xl">new_releases</span>
              <h2 className="text-3xl font-black tracking-tight text-text-light">Lanzamientos 0km</h2>
            </div>
            <p className="text-text-dark text-lg">La última tecnología en movilidad está acá.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {lanzamientos.map(v => (
              <VehicleCard key={v.id} vehicle={v} />
            ))}
          </div>
          <div className="flex justify-center mt-16">
            <Link to="/vehiculos" className="bg-transparent hover:border-primary border border-charcoal-light text-text-light hover:text-primary font-bold py-4 px-12 rounded-xl transition-all">
              Ver catálogo de nuevos
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 px-4 md:px-10 max-w-[1280px] mx-auto w-full">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-black mb-4">Lo que dicen nuestros clientes</h2>
          <p className="text-text-dark text-lg max-w-xl mx-auto">Más de 500 familias ya encontraron su auto con nosotros.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {REVIEWS.map(r => (
            <div key={r.id} className="bg-charcoal-dark p-8 rounded-2xl border border-charcoal-light shadow-xl relative overflow-hidden group hover:border-primary/30 transition-colors">
              <span className="material-symbols-outlined absolute top-4 right-4 text-charcoal-light text-6xl opacity-20 pointer-events-none group-hover:text-primary group-hover:opacity-10 transition-all">format_quote</span>
              <div className="flex items-center gap-4 mb-6">
                <div className="size-14 rounded-full bg-gradient-to-br from-charcoal-medium to-charcoal-dark flex items-center justify-center text-text-light font-bold text-xl border border-charcoal-light">
                  {r.initials}
                </div>
                <div>
                  <p className="font-bold text-lg">{r.author}</p>
                  <div className="flex text-primary gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`material-symbols-outlined !text-[16px] ${i < r.rating ? 'fill-1' : 'opacity-30'}`}>star</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-text-medium leading-relaxed italic z-10 relative">"{r.comment}"</p>
              <p className="text-text-dark text-xs mt-6 uppercase tracking-widest font-bold">{r.date}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact & Map Real */}
      <section className="py-24 px-4 md:px-10 max-w-[1280px] mx-auto w-full">
        <div className="flex flex-col lg:flex-row bg-charcoal-dark rounded-[32px] overflow-hidden shadow-2xl border border-charcoal-light">
          <div className="flex-1 p-8 md:p-16">
            <h2 className="text-4xl font-black mb-2">Hablemos</h2>
            <p className="text-text-dark mb-12 text-lg">¿Tenés dudas? Envianos un mensaje y te contactamos en minutos.</p>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-black text-text-dark uppercase tracking-[0.2em]">Nombre completo</label>
                <input type="text" placeholder="Tu nombre" className="bg-charcoal-medium border border-transparent focus:border-primary/50 rounded-2xl p-5 text-text-light focus:ring-0 w-full transition-all" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-black text-text-dark uppercase tracking-[0.2em]">Email</label>
                  <input type="email" placeholder="email@ejemplo.com" className="bg-charcoal-medium border border-transparent focus:border-primary/50 rounded-2xl p-5 text-text-light focus:ring-0 w-full transition-all" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-black text-text-dark uppercase tracking-[0.2em]">Teléfono</label>
                  <input type="tel" placeholder="+54 9 11 ..." className="bg-charcoal-medium border border-transparent focus:border-primary/50 rounded-2xl p-5 text-text-light focus:ring-0 w-full transition-all" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-black text-text-dark uppercase tracking-[0.2em]">Mensaje</label>
                <textarea rows={4} placeholder="¿En qué podemos ayudarte?" className="bg-charcoal-medium border border-transparent focus:border-primary/50 rounded-2xl p-5 text-text-light focus:ring-0 w-full resize-none transition-all" />
              </div>
              <button className="bg-primary hover:bg-red-700 text-white font-black py-5 px-12 rounded-2xl transition-all shadow-xl shadow-primary/30 w-full md:w-auto uppercase tracking-widest text-sm">
                Enviar mensaje ahora
              </button>
            </form>
          </div>

          <div className="lg:w-[400px] bg-charcoal-light relative min-h-[450px] flex flex-col">
            <div className="flex-1 w-full overflow-hidden">
              <iframe
                title="Ubicación Concesionaria"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13149.337449553743!2d-58.5030612!3d-34.4601445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb0492576b251%3A0x8e83161099e285a8!2sAv.%20del%20Libertador%2014500%2C%20B1640%20Mart%C3%ADnez%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1710000000000!5m2!1ses-419!2sar"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(1) contrast(1.2) invert(0.9)' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="p-10 bg-charcoal-dark/95 backdrop-blur-md border-t border-charcoal-medium">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary text-2xl">location_on</span>
                  <div>
                    <p className="font-black text-lg">Casa Central</p>
                    <p className="text-text-dark text-sm leading-relaxed">Av. del Libertador 14500, San Isidro, Buenos Aires</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary text-2xl">call</span>
                  <div>
                    <p className="text-text-dark text-xs font-bold uppercase tracking-widest">Llamanos gratis</p>
                    <p className="font-black text-lg">0800-555-AUTO</p>
                  </div>
                </div>
                <div className="pt-2">
                  <button className="w-full bg-white/5 hover:bg-white/10 text-white font-bold py-3 rounded-xl border border-white/10 transition-colors text-sm">
                    Ver todas las sucursales
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
