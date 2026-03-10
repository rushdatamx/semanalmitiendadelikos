"use client";

import SlideWrapper from "./SlideWrapper";
import { Award, TrendingUp } from "lucide-react";

const productos = [
  { nombre: "Teja Durito 20PZ", venta26: 1369478, venta25: 278030, pct: 49.2, color: "#F5A623" },
  { nombre: "Papa Casera Natural 45gr", venta26: 339183, venta25: 167231, pct: 12.2, color: "#3B82F6" },
  { nombre: "Papa Casera Jalapeño 45gr", venta26: 271170, venta25: 122087, pct: 9.7, color: "#3B82F6" },
  { nombre: "Papa Casera Fuego 45gr", venta26: 263180, venta25: 95529, pct: 9.5, color: "#3B82F6" },
  { nombre: "Papa Casera Sal 340gr", venta26: 111743, venta25: 0, pct: 4.0, color: "#F5A623" },
  { nombre: "Cheeto 400gr", venta26: 108291, venta25: 54999, pct: 3.9, color: "#9CA3AF" },
  { nombre: "Papa Deshidratada 190gr", venta26: 101755, venta25: 44359, pct: 3.7, color: "#9CA3AF" },
  { nombre: "Papa Casera Jalapeño 340gr", venta26: 101087, venta25: 0, pct: 3.6, color: "#F5A623" },
  { nombre: "Papa Casera Fuego 340gr", venta26: 88020, venta25: 0, pct: 3.2, color: "#F5A623" },
];

const maxVenta = productos[0].venta26;
const total26 = 2784287;
const total25 = 1096374;
const totalVar = "+153.9%";

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
        P01 a P05 2026 · Venta sin IVA
      </p>

      {/* Comparativo general */}
      <div className="flex items-center gap-4 mb-3">
        <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-1.5 border border-gray-200 shadow-sm">
          <TrendingUp className="w-4 h-4 text-[#27AE60]" />
          <span className="text-xs text-gray-600">P01–P05 2026: <span className="font-bold text-gray-800">{fmt(total26)}</span></span>
          <span className="text-gray-300">|</span>
          <span className="text-xs text-gray-400">P01–P05 2025: {fmt(total25)}</span>
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
          <p className="text-xl font-bold text-[#F5A623]">49.2%</p>
          <p className="text-[10px] text-gray-500">$1.4M · +393% vs 2025</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-3 text-center">
          <p className="text-[10px] text-gray-400 mb-1">PDQ 45gr (3 sabores)</p>
          <p className="text-xl font-bold text-blue-600">31.4%</p>
          <p className="text-[10px] text-gray-500">$873K · +127% vs 2025</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-3 text-center">
          <p className="text-[10px] text-gray-400 mb-1">PDQ 340gr (3 sabores)</p>
          <p className="text-xl font-bold text-[#B8860B]">10.8%</p>
          <p className="text-[10px] text-gray-500">$301K · Nuevos en 2026</p>
        </div>
      </div>
    </SlideWrapper>
  );
}
