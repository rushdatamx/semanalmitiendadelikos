"use client";

import SlideWrapper from "./SlideWrapper";
import { TrendingUp, Store, Package, Hash, DollarSign, BarChart3 } from "lucide-react";

const kpis = [
  { label: "Venta YTD 2026", value: "$3.04M", sub: "Ene-Abr", icon: DollarSign, color: "#F5A623" },
  { label: "Crecimiento YoY", value: "+198.5%", sub: "vs Ene-Abr 2025", icon: TrendingUp, color: "#27AE60" },
  { label: "Tiendas activas", value: "28", sub: "de 26 catálogo", icon: Store, color: "#F5A623" },
  { label: "SKUs activos", value: "10", sub: "de 15 catálogo", icon: Package, color: "#F5A623" },
  { label: "Unidades vendidas", value: "120.7K", sub: "Ene-Abr 2026", icon: Hash, color: "#F5A623" },
  { label: "Precio promedio", value: "$25.18", sub: "por unidad", icon: BarChart3, color: "#F5A623" },
];

const months = [
  { mes: "Ene", v25: 215574, v26: 803262, crec: "+272.6%" },
  { mes: "Feb", v25: 256537, v26: 636954, crec: "+148.3%" },
  { mes: "Mar", v25: 268241, v26: 739722, crec: "+175.8%" },
  { mes: "Abr", v25: 278131, v26: 859801, crec: "+209.1%" },
];

export default function VtaSlide2KPIs() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <div className="flex items-center gap-3 mb-1">
        <BarChart3 className="w-7 h-7 text-[#F5A623]" />
        <h2 className="text-3xl font-bold text-gray-800">KPIs Generales</h2>
      </div>
      <p className="text-gray-500 text-sm mb-5">Ene-Abr 2026 vs mismo periodo 2025</p>

      <div className="grid grid-cols-3 gap-4 mb-5">
        {kpis.map((k, i) => {
          const Icon = k.icon;
          return (
            <div key={i} className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 flex items-center gap-4 animate-count-up" style={{ animationDelay: `${i * 80}ms` }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${k.color}15` }}>
                <Icon className="w-6 h-6" style={{ color: k.color }} />
              </div>
              <div>
                <p className="text-gray-400 text-xs">{k.label}</p>
                <p className="text-2xl font-bold" style={{ color: k.color }}>{k.value}</p>
                <p className="text-gray-400 text-[10px]">{k.sub}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 flex-1">
        <p className="text-gray-500 text-xs mb-3">Resumen mensual</p>
        <div className="grid grid-cols-4 gap-4">
          {months.map((m, i) => (
            <div key={i} className="text-center">
              <p className="text-gray-500 text-sm font-semibold mb-2">{m.mes}</p>
              <p className="text-gray-400 text-[10px]">2025: ${(m.v25 / 1000).toFixed(0)}K</p>
              <p className="text-[#F5A623] text-xl font-bold">${(m.v26 / 1000).toFixed(0)}K</p>
              <p className="text-[#27AE60] text-xs font-bold mt-1">{m.crec}</p>
            </div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}
