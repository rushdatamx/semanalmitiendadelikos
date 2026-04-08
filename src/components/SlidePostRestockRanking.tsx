"use client";

import SlideWrapper from "./SlideWrapper";
import { Store, ArrowUpRight } from "lucide-react";

// Tiendas grouped by how much they consumed post-restock (combined 340+45)
// >25% consumed = high demand, 10-25% = moderate, <10% = low (need promotoria)
const highDemand = [
  { tienda: "Reforma", pct: 47.5, note: "Top en 340gr" },
  { tienda: "Anzures", pct: 38.3, note: "" },
  { tienda: "Revolucion", pct: 35.5, note: "" },
  { tienda: "Garcia", pct: 35.3, note: "" },
  { tienda: "Fundadores", pct: 31.6, note: "" },
  { tienda: "Ciudadela", pct: 29.6, note: "" },
  { tienda: "Eloy Cavazos", pct: 26.0, note: "" },
  { tienda: "Zuazua", pct: 25.2, note: "" },
];

const moderate = [
  { tienda: "Cabezada", pct: 17.5 },
  { tienda: "Buena Vista", pct: 16.5 },
  { tienda: "Huinala", pct: 16.1 },
  { tienda: "Margaritas", pct: 14.5 },
  { tienda: "Periferico", pct: 14.1 },
  { tienda: "Aeropuerto", pct: 12.9 },
  { tienda: "Lincoln", pct: 11.1 },
  { tienda: "Rio Bravo", pct: 10.6 },
  { tienda: "San Fernando", pct: 10.6 },
];

const low = [
  { tienda: "Las Brisas", pct: 9.4 },
  { tienda: "San Roque", pct: 8.8 },
  { tienda: "Plaza del Bosque", pct: 6.6 },
  { tienda: "Satelite", pct: 5.4 },
  { tienda: "Bugambilias", pct: 1.4 },
  { tienda: "Metroplex", pct: 0.0 },
];

export default function SlidePostRestockRanking() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <div className="flex items-center gap-3 mb-1">
        <Store className="w-7 h-7 text-gray-700" />
        <h2 className="text-2xl font-bold text-gray-800">
          La demanda existe en la mayoria de tiendas
        </h2>
      </div>
      <p className="text-sm text-gray-500 mb-5">
        % de inventario 340gr consumido en 12 dias post-restock &middot; Con mas stock, estas tiendas venden mas
      </p>

      <div className="grid grid-cols-3 gap-4 flex-1">
        {/* HIGH DEMAND */}
        <div className="flex flex-col">
          <div className="bg-green-600 text-white rounded-t-xl px-4 py-3 text-center">
            <p className="text-2xl font-bold">{highDemand.length}</p>
            <p className="text-xs font-medium opacity-90">tiendas vendiendo fuerte</p>
            <p className="text-[10px] opacity-70 mt-0.5">&gt;25% consumido en 12 dias</p>
          </div>
          <div className="bg-white rounded-b-xl border border-gray-200 border-t-0 flex-1 p-3">
            <div className="space-y-1.5">
              {highDemand.map((t) => (
                <div key={t.tienda} className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <ArrowUpRight className="w-3 h-3 text-green-500" />
                    <span className="text-xs text-gray-700">{t.tienda}</span>
                  </div>
                  <span className="text-xs font-bold text-green-600">{t.pct}%</span>
                </div>
              ))}
            </div>
            <div className="mt-3 pt-3 border-t border-gray-100 text-center">
              <p className="text-[10px] text-green-600 font-semibold">
                Estas tiendas necesitaran restock pronto
              </p>
            </div>
          </div>
        </div>

        {/* MODERATE */}
        <div className="flex flex-col">
          <div className="bg-yellow-500 text-white rounded-t-xl px-4 py-3 text-center">
            <p className="text-2xl font-bold">{moderate.length}</p>
            <p className="text-xs font-medium opacity-90">tiendas con venta estable</p>
            <p className="text-[10px] opacity-70 mt-0.5">10-25% consumido</p>
          </div>
          <div className="bg-white rounded-b-xl border border-gray-200 border-t-0 flex-1 p-3">
            <div className="space-y-1.5">
              {moderate.map((t) => (
                <div key={t.tienda} className="flex items-center justify-between">
                  <span className="text-xs text-gray-700">{t.tienda}</span>
                  <span className="text-xs font-semibold text-yellow-600">{t.pct}%</span>
                </div>
              ))}
            </div>
            <div className="mt-3 pt-3 border-t border-gray-100 text-center">
              <p className="text-[10px] text-yellow-600 font-semibold">
                Buen ritmo — stock para 2-3 meses
              </p>
            </div>
          </div>
        </div>

        {/* LOW / NEEDS ATTENTION */}
        <div className="flex flex-col">
          <div className="bg-red-500 text-white rounded-t-xl px-4 py-3 text-center">
            <p className="text-2xl font-bold">{low.length}</p>
            <p className="text-xs font-medium opacity-90">tiendas con baja rotacion</p>
            <p className="text-[10px] opacity-70 mt-0.5">&lt;10% consumido</p>
          </div>
          <div className="bg-white rounded-b-xl border border-gray-200 border-t-0 flex-1 p-3">
            <div className="space-y-1.5">
              {low.map((t) => (
                <div key={t.tienda} className="flex items-center justify-between">
                  <span className="text-xs text-gray-700">{t.tienda}</span>
                  <span className="text-xs font-semibold text-red-500">{t.pct}%</span>
                </div>
              ))}
            </div>
            <div className="mt-3 pt-3 border-t border-gray-100 text-center">
              <p className="text-[10px] text-red-500 font-semibold">
                Revisar exhibicion con promotoria
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom insight */}
      <div className="mt-4 bg-white rounded-xl border border-gray-200 shadow-sm px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-green-100 rounded-full p-2">
            <ArrowUpRight className="w-5 h-5 text-green-600" />
          </div>
          <div>
            <p className="text-sm font-bold text-gray-800">
              17 de 23 tiendas (74%) vendiendo a buen ritmo
            </p>
            <p className="text-xs text-gray-500">
              La demanda esta confirmada — con mas producto, mas venta
            </p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-green-600">74%</p>
          <p className="text-[10px] text-gray-400">tiendas activas</p>
        </div>
      </div>
    </SlideWrapper>
  );
}
