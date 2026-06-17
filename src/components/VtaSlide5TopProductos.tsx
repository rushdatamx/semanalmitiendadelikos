"use client";

import SlideWrapper from "./SlideWrapper";
import { Award } from "lucide-react";

const productos = [
  { nombre: "Durito Teja 20PZ", venta: 1842601, pct: 43.1, crec: "+80.5%", pos: true },
  { nombre: "Papa Natural 45g", venta: 511282, pct: 12.0, crec: "NUEVO", pos: true },
  { nombre: "Papa Jalapeño 45g", venta: 425510, pct: 9.9, crec: "NUEVO", pos: true },
  { nombre: "Papa Fuego 45g", venta: 406478, pct: 9.5, crec: "NUEVO", pos: true },
  { nombre: "Papa Sal 340g", venta: 287416, pct: 6.7, crec: "NUEVO", pos: true },
  { nombre: "Papa Jalapeño 340g", venta: 264288, pct: 6.2, crec: "NUEVO", pos: true },
  { nombre: "Papa Fuego 340g", venta: 242978, pct: 5.7, crec: "NUEVO", pos: true },
  { nombre: "Papa Deshidratada 190g", venta: 150554, pct: 3.5, crec: "+35.2%", pos: true },
  { nombre: "Cheeto 400g", venta: 145742, pct: 3.4, crec: "+24.6%", pos: true },
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
      <p className="text-gray-500 text-sm mb-4">Ene-16jun 2026 · Top 9 concentra {topConcentra.toFixed(0)}% del sell-out</p>

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
        <span className="text-gray-500 text-sm">Durito Teja = 43.1% de toda la venta · 6 de 9 productos son NUEVOS (Papas)</span>
        <span className="text-[#F5A623] font-bold text-lg">$4.28M</span>
      </div>
    </SlideWrapper>
  );
}
