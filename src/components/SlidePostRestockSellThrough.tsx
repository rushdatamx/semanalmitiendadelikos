"use client";

import SlideWrapper from "./SlideWrapper";
import { ShoppingCart, ArrowRight } from "lucide-react";

const tiendas340 = [
  { tienda: "Fundadores", recibido: 239, vendido: 206, st: 86.2 },
  { tienda: "Garcia", recibido: 232, vendido: 192, st: 82.8 },
  { tienda: "Buena Vista", recibido: 239, vendido: 171, st: 71.5 },
  { tienda: "Anzures", recibido: 240, vendido: 150, st: 62.5 },
  { tienda: "Reforma", recibido: 240, vendido: 148, st: 61.7 },
  { tienda: "Revolucion", recibido: 235, vendido: 142, st: 60.4 },
  { tienda: "Ciudadela", recibido: 239, vendido: 135, st: 56.5 },
  { tienda: "Zuazua", recibido: 240, vendido: 125, st: 52.1 },
  { tienda: "Eloy Cavazos", recibido: 239, vendido: 108, st: 45.2 },
  { tienda: "Periferico", recibido: 232, vendido: 104, st: 44.8 },
  { tienda: "Cabezada", recibido: 234, vendido: 84, st: 35.9 },
  { tienda: "Margaritas", recibido: 239, vendido: 76, st: 31.8 },
  { tienda: "Huinala", recibido: 240, vendido: 68, st: 28.3 },
  { tienda: "Rio Bravo", recibido: 240, vendido: 60, st: 25.0 },
  { tienda: "San Fernando", recibido: 236, vendido: 55, st: 23.3 },
  { tienda: "Satelite", recibido: 238, vendido: 57, st: 23.9 },
  { tienda: "Lincoln", recibido: 238, vendido: 52, st: 21.8 },
  { tienda: "Las Brisas", recibido: 234, vendido: 46, st: 19.7 },
  { tienda: "San Roque", recibido: 236, vendido: 42, st: 17.8 },
  { tienda: "Plaza del Bosque", recibido: 237, vendido: 32, st: 13.5 },
  { tienda: "Metroplex", recibido: 240, vendido: 46, st: 19.2 },
  { tienda: "Bugambilias", recibido: 238, vendido: 33, st: 13.9 },
];

const tiendas45 = [
  { tienda: "Fundadores", recibido: 1219, vendido: 1261, st: 103.4 },
  { tienda: "Satelite", recibido: 1231, vendido: 1135, st: 92.2 },
  { tienda: "Margaritas", recibido: 1254, vendido: 1151, st: 91.8 },
  { tienda: "Cabezada", recibido: 1256, vendido: 1090, st: 86.8 },
  { tienda: "Zuazua", recibido: 1260, vendido: 1082, st: 85.9 },
  { tienda: "Ciudadela", recibido: 1257, vendido: 1059, st: 84.2 },
  { tienda: "Revolucion", recibido: 1252, vendido: 1015, st: 81.1 },
  { tienda: "Buena Vista", recibido: 1250, vendido: 963, st: 77.0 },
  { tienda: "Rio Bravo", recibido: 1256, vendido: 878, st: 69.9 },
  { tienda: "Periferico", recibido: 1242, vendido: 816, st: 65.7 },
  { tienda: "Huinala", recibido: 1247, vendido: 760, st: 60.9 },
  { tienda: "Anzures", recibido: 1242, vendido: 720, st: 58.0 },
  { tienda: "Garcia", recibido: 1253, vendido: 585, st: 46.7 },
  { tienda: "Reforma", recibido: 264, vendido: 200, st: 75.8 },
  { tienda: "Eloy Cavazos", recibido: 1247, vendido: 536, st: 43.0 },
  { tienda: "San Fernando", recibido: 1252, vendido: 434, st: 34.7 },
  { tienda: "Lincoln", recibido: 1250, vendido: 346, st: 27.7 },
  { tienda: "San Roque", recibido: 1258, vendido: 338, st: 26.9 },
  { tienda: "Bugambilias", recibido: 1247, vendido: 361, st: 28.9 },
  { tienda: "Metroplex", recibido: 1258, vendido: 378, st: 30.0 },
  { tienda: "Aeropuerto", recibido: 1257, vendido: 140, st: 11.1 },
  { tienda: "Plaza del Bosque", recibido: 1251, vendido: 109, st: 8.7 },
];

// Count tiers
const high340 = tiendas340.filter(t => t.st >= 50).length;
const mid340 = tiendas340.filter(t => t.st >= 25 && t.st < 50).length;
const low340 = tiendas340.filter(t => t.st < 25).length;

const high45 = tiendas45.filter(t => t.st >= 50).length;
const mid45 = tiendas45.filter(t => t.st >= 25 && t.st < 50).length;
const low45 = tiendas45.filter(t => t.st < 25).length;

function stColor(st: number) {
  if (st >= 70) return "text-green-600 bg-green-50";
  if (st >= 50) return "text-emerald-600 bg-emerald-50";
  if (st >= 25) return "text-yellow-600 bg-yellow-50";
  return "text-red-500 bg-red-50";
}

function StBar({ st }: { st: number }) {
  const width = Math.min(st, 100);
  const color = st >= 70 ? "#22c55e" : st >= 50 ? "#10b981" : st >= 25 ? "#eab308" : "#ef4444";
  return (
    <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
      <div className="h-full rounded-full" style={{ width: `${width}%`, backgroundColor: color }} />
    </div>
  );
}

export default function SlidePostRestockSellThrough() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <div className="flex items-center gap-3 mb-1">
        <ShoppingCart className="w-7 h-7 text-[#F5A623]" />
        <h2 className="text-2xl font-bold text-gray-800">
          Sell-Through: el producto rota
        </h2>
      </div>
      <p className="text-sm text-gray-500 mb-4">
        Unidades vendidas / unidades recibidas &middot; 12 dias post-restock (24-Mar al 6-Abr)
      </p>

      <div className="grid grid-cols-[1fr_1fr_280px] gap-4 flex-1">
        {/* 340gr top 10 */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 flex flex-col">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-3 h-3 rounded-full bg-[#F5A623]" />
            <span className="text-sm font-bold text-gray-700">340gr</span>
            <span className="ml-auto text-xs font-bold text-[#F5A623] bg-orange-50 px-2 py-0.5 rounded-full">48% ST</span>
          </div>
          <div className="space-y-1.5 flex-1 overflow-y-auto max-h-[370px]">
            {tiendas340.slice(0, 12).map((t) => (
              <div key={t.tienda} className="flex items-center gap-2">
                <span className="text-[11px] text-gray-700 w-[80px] truncate">{t.tienda}</span>
                <div className="flex-1"><StBar st={t.st} /></div>
                <span className={`text-[11px] font-bold px-1.5 py-0.5 rounded ${stColor(t.st)}`}>
                  {t.st.toFixed(0)}%
                </span>
              </div>
            ))}
          </div>
          <div className="mt-2 pt-2 border-t border-gray-100 flex justify-between text-[10px] text-gray-500">
            <span className="text-green-600 font-semibold">{high340} tiendas &gt;50%</span>
            <span>{mid340} entre 25-50%</span>
            <span className="text-red-500">{low340} &lt;25%</span>
          </div>
        </div>

        {/* 45gr top 10 */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 flex flex-col">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-3 h-3 rounded-full bg-[#3B82F6]" />
            <span className="text-sm font-bold text-gray-700">45gr</span>
            <span className="ml-auto text-xs font-bold text-[#3B82F6] bg-blue-50 px-2 py-0.5 rounded-full">58% ST</span>
          </div>
          <div className="space-y-1.5 flex-1 overflow-y-auto max-h-[370px]">
            {tiendas45.slice(0, 12).map((t) => (
              <div key={t.tienda} className="flex items-center gap-2">
                <span className="text-[11px] text-gray-700 w-[80px] truncate">{t.tienda}</span>
                <div className="flex-1"><StBar st={t.st} /></div>
                <span className={`text-[11px] font-bold px-1.5 py-0.5 rounded ${stColor(t.st)}`}>
                  {t.st > 100 ? ">100" : t.st.toFixed(0)}%
                </span>
              </div>
            ))}
          </div>
          <div className="mt-2 pt-2 border-t border-gray-100 flex justify-between text-[10px] text-gray-500">
            <span className="text-green-600 font-semibold">{high45} tiendas &gt;50%</span>
            <span>{mid45} entre 25-50%</span>
            <span className="text-red-500">{low45} &lt;25%</span>
          </div>
        </div>

        {/* Right: KPIs for buyer */}
        <div className="flex flex-col gap-3">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200 p-4 text-center flex-1 flex flex-col justify-center">
            <p className="text-[11px] text-green-500 mb-1">Sell-Through Combinado</p>
            <p className="text-4xl font-bold text-green-600">56%</p>
            <p className="text-xs text-green-500 mt-1">en solo 12 dias</p>
            <div className="flex items-center justify-center gap-1 mt-2 text-[10px] text-gray-400">
              <span>39,421 recibidas</span>
              <ArrowRight className="w-3 h-3" />
              <span className="font-bold text-green-600">22,224 vendidas</span>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 text-center">
            <p className="text-[10px] text-gray-400 mb-1">Proyeccion a 30 dias</p>
            <p className="text-2xl font-bold text-gray-800">~100%</p>
            <p className="text-[10px] text-gray-400 mt-0.5">
              Al ritmo actual, todo se vende en ~60 dias
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 text-center">
            <p className="text-[10px] text-gray-400 mb-1">Consumo diario</p>
            <p className="text-2xl font-bold text-[#F5A623]">766</p>
            <p className="text-[10px] text-gray-400 mt-0.5">uds/dia combinado</p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-3 text-center">
            <p className="text-[10px] text-gray-400 mb-1">Inventario muerto</p>
            <p className="text-xl font-bold text-green-600">0%</p>
            <p className="text-[10px] text-gray-400">Todas las tiendas con rotacion</p>
          </div>
        </div>
      </div>

      <p className="text-[10px] text-gray-400 mt-2 text-center">
        Sell-through = unidades vendidas al consumidor / unidades recibidas en tienda &middot; Datos de inventario diario MITIENDA
      </p>
    </SlideWrapper>
  );
}
