"use client";

import SlideWrapper from "./SlideWrapper";
import { Store, TrendingUp } from "lucide-react";

const tiendas = [
  { nombre: "MT MAT Las Brisas", venta26: 175428, venta25: 49855, pct: 7.2 },
  { nombre: "MT REY Bugambilias", venta26: 174773, venta25: 38605, pct: 7.2 },
  { nombre: "MT REY Periferico", venta26: 148405, venta25: 52800, pct: 6.1 },
  { nombre: "MT MTY Zuazua", venta26: 145024, venta25: 58235, pct: 6.0 },
  { nombre: "MT REY San Fernando", venta26: 138259, venta25: 50726, pct: 5.7 },
  { nombre: "MT NVO Reforma", venta26: 131759, venta25: 50750, pct: 5.4 },
  { nombre: "MT NVO Revolucion", venta26: 127349, venta25: 49892, pct: 5.3 },
  { nombre: "MT REY Rio Bravo", venta26: 115917, venta25: 40805, pct: 4.8 },
  { nombre: "MT MTY Garcia", venta26: 104388, venta25: 43936, pct: 4.3 },
  { nombre: "MT MTY Ciudadela", venta26: 104095, venta25: 43442, pct: 4.3 },
  { nombre: "MT MTY Huinala", venta26: 102052, venta25: 56606, pct: 4.2 },
  { nombre: "MT MTY Eloy Cavazos", venta26: 98107, venta25: 22484, pct: 4.0 },
  { nombre: "MT MTY Anzures", venta26: 87870, venta25: 0, pct: 3.6 },
];

const maxVenta = tiendas[0].venta26;
const total26 = 2423136;
const total25 = 933008;

const fmt = (v: number) => {
  if (v >= 1_000_000) return `$${(v / 1_000_000).toFixed(1)}M`;
  if (v >= 1_000) return `$${(v / 1_000).toFixed(0)}K`;
  return `$${v}`;
};

const fmtVar = (v26: number, v25: number) => {
  if (v25 === 0) return "Nueva";
  const pct = ((v26 - v25) / v25) * 100;
  return `+${pct.toFixed(0)}%`;
};

export default function Slide10VentaTienda() {
  const top5Total = tiendas.slice(0, 5).reduce((s, t) => s + t.venta26, 0);
  const top5Pct = tiendas.slice(0, 5).reduce((s, t) => s + t.pct, 0);

  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <div className="flex items-center gap-3 mb-1">
        <Store className="w-7 h-7 text-[#F5A623]" />
        <h2 className="text-2xl font-bold text-gray-800">Venta por Tienda</h2>
      </div>
      <p className="text-sm text-gray-500 mb-1">
        Top 13 de 25 tiendas · P01 a P04 2026 (3 Nov 2025 – 22 Feb 2026) · Venta sin IVA
      </p>

      {/* Comparativo general */}
      <div className="flex items-center gap-4 mb-3">
        <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-1.5 border border-gray-200 shadow-sm">
          <TrendingUp className="w-4 h-4 text-[#27AE60]" />
          <span className="text-xs text-gray-600">P01–P04 2026: <span className="font-bold text-gray-800">{fmt(total26)}</span></span>
          <span className="text-gray-300">|</span>
          <span className="text-xs text-gray-400">P01–P04 2025: {fmt(total25)}</span>
          <span className="text-xs font-bold text-[#27AE60]">+159.7%</span>
        </div>
      </div>

      <div className="flex gap-6 flex-1">
        {/* Left column: ranks 1-7 */}
        <div className="flex-1 space-y-1.5">
          {tiendas.slice(0, 7).map((t, i) => {
            const barPct = (t.venta26 / maxVenta) * 100;
            const isTop3 = i < 3;
            const varLabel = fmtVar(t.venta26, t.venta25);
            return (
              <div key={i} className="flex items-center gap-2">
                <span className={`w-5 text-right text-sm font-bold ${isTop3 ? "text-[#F5A623]" : "text-gray-400"}`}>
                  {i + 1}
                </span>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-0.5">
                    <div className="flex items-center gap-1.5">
                      <span className={`text-[11px] ${isTop3 ? "text-gray-800 font-bold" : "text-gray-700"}`}>
                        {t.nombre}
                      </span>
                      <span className="text-[9px] px-1 py-0.5 rounded font-semibold bg-green-100 text-green-700">
                        {varLabel}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-800 font-bold text-xs">{fmt(t.venta26)}</span>
                      <span className="text-gray-400 text-[10px] w-10 text-right">{t.pct}%</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="h-2 rounded-full"
                      style={{ width: `${barPct}%`, backgroundColor: isTop3 ? "#F5A623" : "#9CA3AF" }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right column: ranks 8-13 */}
        <div className="flex-1 space-y-1.5">
          {tiendas.slice(7).map((t, i) => {
            const barPct = (t.venta26 / maxVenta) * 100;
            const rank = i + 8;
            const varLabel = fmtVar(t.venta26, t.venta25);
            const isNew = t.venta25 === 0;
            return (
              <div key={rank} className="flex items-center gap-2">
                <span className="w-5 text-right text-sm font-bold text-gray-400">
                  {rank}
                </span>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-0.5">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[11px] text-gray-700">{t.nombre}</span>
                      <span className={`text-[9px] px-1 py-0.5 rounded font-semibold ${isNew ? "bg-blue-100 text-blue-600" : "bg-green-100 text-green-700"}`}>
                        {varLabel}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-800 font-bold text-xs">{fmt(t.venta26)}</span>
                      <span className="text-gray-400 text-[10px] w-10 text-right">{t.pct}%</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="h-2 rounded-full bg-gray-400"
                      style={{ width: `${barPct}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-3 grid grid-cols-3 gap-4">
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-3 text-center">
          <p className="text-[10px] text-gray-400 mb-1">Top 5 tiendas</p>
          <p className="text-xl font-bold text-[#F5A623]">{top5Pct.toFixed(1)}%</p>
          <p className="text-[10px] text-gray-500">{fmt(top5Total)} de $2.4M</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-3 text-center">
          <p className="text-[10px] text-gray-400 mb-1">Crecimiento total</p>
          <p className="text-xl font-bold text-[#27AE60]">+159.7%</p>
          <p className="text-[10px] text-gray-500">{fmt(total25)} → {fmt(total26)}</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-3 text-center">
          <p className="text-[10px] text-gray-400 mb-1">Todas crecen</p>
          <p className="text-xl font-bold text-[#27AE60]">25 / 25</p>
          <p className="text-[10px] text-gray-500">100% de tiendas con crecimiento</p>
        </div>
      </div>
    </SlideWrapper>
  );
}
