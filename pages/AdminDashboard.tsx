

import React, { useState } from 'react';
import { VEHICLES } from '../constants';

const AdminDashboard: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="flex h-screen bg-background-dark overflow-hidden">
      {/* Sidebar Nav */}
      {/* Sidebar Nav - Desktop & Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-50 w-64 bg-charcoal-dark border-r border-charcoal-light flex flex-col shrink-0 transition-transform duration-300
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="h-20 flex items-center px-8 border-b border-charcoal-light">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-3xl">directions_car</span>
            <span className="font-black text-lg tracking-tighter">AdminPanel</span>
          </div>
        </div>
        <nav className="flex-1 py-8 px-4 space-y-2">
          {[
            { icon: 'dashboard', label: 'Dashboard', active: false },
            { icon: 'inventory_2', label: 'Vehículos', active: true },
            { icon: 'attach_money', label: 'Ventas', active: false },
            { icon: 'people', label: 'Clientes', active: false },
            { icon: 'settings', label: 'Configuración', active: false }
          ].map(item => (
            <button key={item.label} className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-colors ${item.active ? 'bg-primary/10 text-primary font-bold' : 'text-text-dark hover:bg-charcoal-medium hover:text-text-light'}`}>
              <span className={`material-symbols-outlined ${item.active ? 'fill-1' : ''}`}>{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-charcoal-light">
          <button className="w-full flex items-center gap-4 px-4 py-3 rounded-xl text-text-dark hover:text-red-500 hover:bg-red-500/5 transition-all">
            <span className="material-symbols-outlined">logout</span>
            <span className="font-bold">Cerrar Sesión</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="h-20 bg-charcoal-dark border-b border-charcoal-light flex items-center justify-between px-4 md:px-10 shrink-0">
          <div className="flex items-center gap-4">
            <button
              className="lg:hidden p-2 -ml-2 text-text-light hover:bg-charcoal-medium rounded-lg"
              onClick={() => setIsSidebarOpen(true)}
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
            <h1 className="text-xl font-black truncate">Inventario</h1>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative hidden sm:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-dark text-[20px]">search</span>
              <input type="text" placeholder="Buscar ID, Modelo..." className="bg-charcoal-medium border-none text-sm rounded-full pl-10 pr-6 py-2.5 w-72 focus:ring-1 focus:ring-primary" />
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2.5 text-text-dark hover:text-text-light rounded-full hover:bg-charcoal-medium relative">
                <span className="material-symbols-outlined">notifications</span>
                <span className="absolute top-2.5 right-2.5 size-2 bg-primary rounded-full border-2 border-charcoal-dark"></span>
              </button>
              <div className="size-10 rounded-full bg-gradient-to-br from-primary to-red-900 flex items-center justify-center text-white font-black text-sm border-2 border-charcoal-medium cursor-pointer">
                AD
              </div>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-10 space-y-8">
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'directions_car', label: 'Total Vehículos', val: 45, color: 'blue' },
              { icon: 'check_circle', label: 'Disponibles', val: 32, color: 'emerald' },
              { icon: 'new_releases', label: 'Nuevos Ingresos', val: 8, color: 'purple' },
              { icon: 'pending', label: 'Reservados', val: 5, color: 'orange' }
            ].map(stat => (
              <div key={stat.label} className="bg-charcoal-dark border border-charcoal-light p-6 rounded-2xl flex items-center gap-5 shadow-lg">
                <div className={`p-4 bg-${stat.color}-500/10 text-${stat.color}-500 rounded-2xl`}>
                  <span className="material-symbols-outlined text-3xl">{stat.icon}</span>
                </div>
                <div>
                  <p className="text-text-dark text-xs font-bold uppercase tracking-widest">{stat.label}</p>
                  <p className="text-3xl font-black text-text-light mt-1">{stat.val}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center bg-charcoal-dark p-2 rounded-2xl border border-charcoal-light w-fit">
            <button className="px-6 py-2.5 rounded-xl bg-charcoal-medium text-white font-bold shadow-xl">Todos</button>
            <button className="px-6 py-2.5 rounded-xl text-text-dark hover:text-text-light transition-colors">Activos</button>
            <button className="px-6 py-2.5 rounded-xl text-text-dark hover:text-text-light transition-colors">Vendidos</button>
          </div>

          {/* Table */}
          <div className="bg-charcoal-dark border border-charcoal-light rounded-2xl overflow-hidden shadow-2xl">
            <div className="p-6 border-b border-charcoal-light flex justify-between items-center bg-charcoal-medium/20">
              <h3 className="font-bold">Listado de Stock</h3>
              <button className="bg-primary hover:bg-red-700 text-white px-6 py-2.5 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-primary/20">
                <span className="material-symbols-outlined text-[20px]">add</span>
                Agregar Nuevo Vehículo
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-charcoal-medium/40 text-text-dark text-xs uppercase tracking-widest font-bold">
                    <th className="px-8 py-5">Vehículo</th>
                    <th className="px-6 py-5">Tipo</th>
                    <th className="px-6 py-5">Precio</th>
                    <th className="px-6 py-5">Estado</th>
                    <th className="px-6 py-5">Publicado</th>
                    <th className="px-8 py-5 text-right">Acciones</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-charcoal-light">
                  {VEHICLES.map(v => (
                    <tr key={v.id} className="hover:bg-charcoal-medium/20 transition-colors group">
                      <td className="px-8 py-4">
                        <div className="flex items-center gap-4">
                          <img src={v.image} className="h-12 w-16 object-cover rounded-lg border border-charcoal-light" alt="" />
                          <div>
                            <p className="font-bold text-base">{v.brand} {v.model}</p>
                            <p className="text-text-dark text-xs">{v.fuel} • {v.transmission}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-2.5 py-1 rounded text-[10px] font-black uppercase tracking-widest ${v.condition === '0km' ? 'bg-blue-900/30 text-blue-400 border border-blue-900/50' : 'bg-charcoal-light text-text-medium border border-charcoal-medium'}`}>
                          {v.condition}
                        </span>
                      </td>
                      <td className="px-6 py-4 font-black">
                        {typeof v.price === 'number' ? `$${v.price.toLocaleString('es-AR')}` : 'Consultar'}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <span className={`size-2 rounded-full ${v.status === 'Activo' ? 'bg-emerald-500' : 'bg-orange-500'}`}></span>
                          <span className={v.status === 'Activo' ? 'text-emerald-400' : 'text-orange-400'}>{v.status}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-text-dark text-sm">Hace 2 días</td>
                      <td className="px-8 py-4 text-right">
                        <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="p-2 hover:bg-charcoal-light rounded-lg text-text-dark hover:text-text-light"><span className="material-symbols-outlined text-[20px]">visibility</span></button>
                          <button className="p-2 hover:bg-charcoal-light rounded-lg text-text-dark hover:text-blue-400"><span className="material-symbols-outlined text-[20px]">edit</span></button>
                          <button className="p-2 hover:bg-charcoal-light rounded-lg text-text-dark hover:text-danger"><span className="material-symbols-outlined text-[20px]">delete</span></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-6 bg-charcoal-medium/20 border-t border-charcoal-light flex items-center justify-between">
              <p className="text-sm text-text-dark">Mostrando <span className="font-bold text-text-light">1-10</span> de <span className="font-bold text-text-light">45</span> vehículos</p>
              <div className="flex gap-2">
                {[1, 2, 3].map(p => (
                  <button key={p} className={`size-9 rounded-lg flex items-center justify-center font-bold text-sm transition-all ${p === 1 ? 'bg-primary text-white' : 'bg-charcoal-medium text-text-medium hover:bg-charcoal-light'}`}>
                    {p}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
