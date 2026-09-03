"use client";

import SlideWrapper from "./SlideWrapper";
import { Award } from "lucide-react";

const productos = [
  { nombre: "Durito Teja 20PZ", venta: 2670425, pct: 43.6, crec: "+56.3%", pos: true },
  { nombre: "Papa Natural 45g", venta: 711145, pct: 11.6, crec: "+1,040.3%", pos: true },
  { nombre: "Papa Jalapeño 45g", venta: 587724, pct: 9.6, crec: "+756.4%", pos: true },
  { nombre: "Papa Fuego 45g", venta: 572248, pct: 9.3, crec: "+874.4%", pos: true },
  { nombre: "Papa Sal 340g", venta: 401627, pct: 6.6, crec: "NUEVO", pos: true },
  { nombre: "Papa Jalapeño 340g", venta: 375584, pct: 6.1, crec: "NUEVO", pos: true },
  { nombre: "Papa Fuego 340g", venta: 356798, pct: 5.8, crec: "NUEVO", pos: true },
  { nombre: "Papa Deshidratada 190g", venta: 231446, pct: 3.8, crec: "+34.2%", pos: true },
  { nombre: "Cheeto 400g", venta: 213462, pct: 3.5, crec: "+15.9%", pos: true },
];

const maxVenta = productos[0].venta;
const topConcentra = productos.reduce((s, p) => s + p.pct, 0);

const formatPesos = (v: number) => {
  if (v >= 1_000_000) return `$${(v / 1_000_000).toFixed(1)}M`;
  return `$${(v / 1_000).toFixed(0)}K`;
};

export default function VtaSlide5TopProductos() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <div className="flex items-center gap-3 mb-1">
        <Award className="w-7 h-7 text-[#F5A623]" />
        <h2 className="text-3xl font-bold text-gray-800">Top Productos</h2>
      </div>
      <p className="text-gray-500 text-sm mb-4">Ene-Ago 2026 · Top 9 concentra {topConcentra.toFixed(0)}% del sell-out</p>

      <div className="flex-1 space-y-2">
        {productos.map((p, i) => {
          const barPct = (p.venta / maxVenta) * 100;
          const isFirst = i === 0;
          const isNew = p.crec === "NUEVO";
          const crecColor = isNew ? "#2E75B6" : p.pos ? "#27AE60" : "#E31837";

          return (
            <div key={i} className="flex items-center gap-3 animate-count-up" style={{ animationDelay: `${i * 60}ms` }}>
              <span className={`w-6 text-right text-sm font-bold ${isFirst ? "text-[#F5A623]" : "text-gray-400"}`}>
                {i + 1}
              </span>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-0.5">
                  <div className="flex items-center gap-2">
                    <span className={`text-sm ${isFirst ? "text-gray-800 font-bold" : "text-gray-700"}`}>
                      {p.nombre}
                    </span>
                    {isNew && (
                      <span className="text-[9px] px-1.5 py-0.5 rounded font-semibold bg-[#2E75B6]/15 text-[#2E75B6]">
                        NUEVO
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold" style={{ color: crecColor }}>{p.crec}</span>
                    <span className="text-gray-800 font-bold text-sm">{formatPesos(p.venta)}</span>
                    <span className="text-gray-400 text-xs w-12 text-right">{p.pct}%</span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="h-2.5 rounded-full animate-bar-grow"
                    style={{
                      width: `${barPct}%`,
                      backgroundColor: isFirst ? "#F5A623" : "#F7B500",
                      animationDelay: `${i * 60}ms`,
                    }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-3 flex justify-between items-center bg-[#FDF8F0] rounded-lg px-5 py-3 border border-[#E8DCC8]">
        <span className="text-gray-500 text-sm">Durito Teja = 43.6% de toda la venta · 3 de 9 productos son NUEVOS (Papas 340g)</span>
        <span className="text-[#F5A623] font-bold text-lg">$6.12M</span>
      </div>
    </SlideWrapper>
  );
}
