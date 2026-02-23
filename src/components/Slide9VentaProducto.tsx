"use client";

import SlideWrapper from "./SlideWrapper";
import { Award, TrendingUp } from "lucide-react";

const productos = [
  { nombre: "Teja Durito 20PZ", venta26: 1221256, venta25: 146874, pct: 50.4, color: "#F5A623" },
  { nombre: "Papa Casera Natural 45gr", venta26: 307954, venta25: 0, pct: 12.7, color: "#3B82F6" },
  { nombre: "Papa Casera Jalapeño 45gr", venta26: 243009, venta25: 0, pct: 10.0, color: "#3B82F6" },
  { nombre: "Papa Casera Fuego 45gr", venta26: 237499, venta25: 0, pct: 9.8, color: "#3B82F6" },
  { nombre: "Cheeto 400gr", venta26: 95257, venta25: 36422, pct: 3.9, color: "#9CA3AF" },
  { nombre: "Papa Deshidratada 170gr", venta26: 87612, venta25: 30726, pct: 3.6, color: "#9CA3AF" },
  { nombre: "Papa Casera Sal 340gr", venta26: 85563, venta25: 0, pct: 3.5, color: "#F5A623" },
  { nombre: "Papa Casera Jalapeño 340gr", venta26: 77745, venta25: 0, pct: 3.2, color: "#F5A623" },
  { nombre: "Papa Casera Fuego 340gr", venta26: 67241, venta25: 0, pct: 2.8, color: "#F5A623" },
];

const maxVenta = productos[0].venta26;
const total26 = 2423136;
const total25 = 933008;
const totalVar = "+159.7%";

const fmt = (v: number) => {
  if (v >= 1_000_000) return `$${(v / 1_000_000).toFixed(1)}M`;
  if (v >= 1_000) return `$${(v / 1_000).toFixed(0)}K`;
  return `$${v}`;
};

const fmtVar = (v26: number, v25: number) => {
  if (v25 === 0) return "Nuevo";
  const pct = ((v26 - v25) / v25) * 100;
  return `+${pct.toFixed(0)}%`;
};

const tagMap: Record<string, { label: string; bg: string; text: string }> = {
  "#F5A623": { label: "PDQ 340", bg: "#F5A62320", text: "#B8860B" },
  "#3B82F6": { label: "PDQ 45", bg: "#3B82F620", text: "#2563EB" },
  "#9CA3AF": { label: "Otros", bg: "#9CA3AF20", text: "#6B7280" },
};

export default function Slide9VentaProducto() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <div className="flex items-center gap-3 mb-1">
        <Award className="w-7 h-7 text-[#F5A623]" />
        <h2 className="text-2xl font-bold text-gray-800">Venta por Producto</h2>
      </div>
      <p className="text-sm text-gray-500 mb-1">
        P01 a P04 2026 (3 Nov 2025 – 22 Feb 2026) · Venta sin IVA
      </p>

      {/* Comparativo general */}
      <div className="flex items-center gap-4 mb-3">
        <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-1.5 border border-gray-200 shadow-sm">
          <TrendingUp className="w-4 h-4 text-[#27AE60]" />
          <span className="text-xs text-gray-600">P01–P04 2026: <span className="font-bold text-gray-800">{fmt(total26)}</span></span>
          <span className="text-gray-300">|</span>
          <span className="text-xs text-gray-400">P01–P04 2025: {fmt(total25)}</span>
          <span className="text-xs font-bold text-[#27AE60]">{totalVar}</span>
        </div>
      </div>

      <div className="flex-1 space-y-1.5">
        {productos.map((p, i) => {
          const barPct = (p.venta26 / maxVenta) * 100;
          const isFirst = i === 0;
          const tag = tagMap[p.color];
          const varLabel = fmtVar(p.venta26, p.venta25);
          const isNew = p.venta25 === 0;

          return (
            <div key={i} className="flex items-center gap-3">
              <span className={`w-5 text-right text-sm font-bold ${isFirst ? "text-[#F5A623]" : "text-gray-400"}`}>
                {i + 1}
              </span>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-0.5">
                  <div className="flex items-center gap-2">
                    <span className={`text-xs ${isFirst ? "text-gray-800 font-bold" : "text-gray-700"}`}>
                      {p.nombre}
                    </span>
                    <span
                      className="text-[9px] px-1.5 py-0.5 rounded font-semibold"
                      style={{ backgroundColor: tag.bg, color: tag.text }}
                    >
                      {tag.label}
                    </span>
                    <span className={`text-[9px] px-1.5 py-0.5 rounded font-semibold ${isNew ? "bg-blue-100 text-blue-600" : "bg-green-100 text-green-700"}`}>
                      {varLabel}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-gray-800 font-bold text-xs">{fmt(p.venta26)}</span>
                    <span className="text-gray-400 text-[11px] w-12 text-right">{p.pct}%</span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="h-2 rounded-full"
                    style={{ width: `${barPct}%`, backgroundColor: p.color }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-3 grid grid-cols-3 gap-4">
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-3 text-center">
          <p className="text-[10px] text-gray-400 mb-1">Durito 20PZ</p>
          <p className="text-xl font-bold text-[#F5A623]">50.4%</p>
          <p className="text-[10px] text-gray-500">$1.2M · +731% vs 2025</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-3 text-center">
          <p className="text-[10px] text-gray-400 mb-1">PDQ 45gr (3 sabores)</p>
          <p className="text-xl font-bold text-blue-600">32.5%</p>
          <p className="text-[10px] text-gray-500">$788K · Nuevos en 2026</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-3 text-center">
          <p className="text-[10px] text-gray-400 mb-1">PDQ 340gr (3 sabores)</p>
          <p className="text-xl font-bold text-[#B8860B]">9.5%</p>
          <p className="text-[10px] text-gray-500">$231K · Nuevos en 2026</p>
        </div>
      </div>
    </SlideWrapper>
  );
}
