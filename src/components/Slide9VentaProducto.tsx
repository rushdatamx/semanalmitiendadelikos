"use client";

import SlideWrapper from "./SlideWrapper";
import { Award } from "lucide-react";

const productos = [
  { nombre: "Teja Durito 20PZ", venta: 1221256, pct: 50.4, color: "#F5A623" },
  { nombre: "Papa Casera Natural 45gr", venta: 307954, pct: 12.7, color: "#3B82F6" },
  { nombre: "Papa Casera Jalapeño 45gr", venta: 243009, pct: 10.0, color: "#3B82F6" },
  { nombre: "Papa Casera Fuego 45gr", venta: 237499, pct: 9.8, color: "#3B82F6" },
  { nombre: "Cheeto 400gr", venta: 95257, pct: 3.9, color: "#9CA3AF" },
  { nombre: "Papa Deshidratada 190gr", venta: 87612, pct: 3.6, color: "#9CA3AF" },
  { nombre: "Papa Casera Sal 340gr", venta: 85563, pct: 3.5, color: "#F5A623" },
  { nombre: "Papa Casera Jalapeño 340gr", venta: 77745, pct: 3.2, color: "#F5A623" },
  { nombre: "Papa Casera Fuego 340gr", venta: 67241, pct: 2.8, color: "#F5A623" },
];

const maxVenta = productos[0].venta;

const fmt = (v: number) => {
  if (v >= 1_000_000) return `$${(v / 1_000_000).toFixed(1)}M`;
  return `$${(v / 1_000).toFixed(0)}K`;
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
      <p className="text-sm text-gray-500 mb-4">
        Últimos 4 periodos fiscales (P01 a P04 2026) · Venta sin IVA · Total: $2.4M · Crecimiento +31.1% vs 4 periodos anteriores
      </p>

      <div className="flex-1 space-y-2">
        {productos.map((p, i) => {
          const barPct = (p.venta / maxVenta) * 100;
          const isFirst = i === 0;
          const tag = tagMap[p.color];

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
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-gray-800 font-bold text-xs">{fmt(p.venta)}</span>
                    <span className="text-gray-400 text-[11px] w-12 text-right">{p.pct}%</span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="h-2.5 rounded-full"
                    style={{ width: `${barPct}%`, backgroundColor: p.color }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-4 grid grid-cols-3 gap-4">
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-3 text-center">
          <p className="text-[10px] text-gray-400 mb-1">Durito 20PZ</p>
          <p className="text-xl font-bold text-[#F5A623]">50.4%</p>
          <p className="text-[10px] text-gray-500">de la venta total</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-3 text-center">
          <p className="text-[10px] text-gray-400 mb-1">PDQ 45gr (3 sabores)</p>
          <p className="text-xl font-bold text-blue-600">32.5%</p>
          <p className="text-[10px] text-gray-500">$788K</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-3 text-center">
          <p className="text-[10px] text-gray-400 mb-1">PDQ 340gr (3 sabores)</p>
          <p className="text-xl font-bold text-[#B8860B]">9.5%</p>
          <p className="text-[10px] text-gray-500">$231K</p>
        </div>
      </div>
    </SlideWrapper>
  );
}
