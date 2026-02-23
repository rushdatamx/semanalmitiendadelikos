"use client";

import SlideWrapper from "./SlideWrapper";
import { Store } from "lucide-react";

const tiendas = [
  { nombre: "MT MAT Las Brisas", venta: 175174, pct: 7.2 },
  { nombre: "MT MAT Bugambilias", venta: 174847, pct: 7.2 },
  { nombre: "MT MAT Periferico", venta: 148345, pct: 6.1 },
  { nombre: "MT MTY Contry", venta: 140920, pct: 5.8 },
  { nombre: "MT MAT San Roque", venta: 139736, pct: 5.8 },
  { nombre: "MT MTY Centrika", venta: 131485, pct: 5.4 },
  { nombre: "MT MTY Del Valle", venta: 128133, pct: 5.3 },
  { nombre: "MT MAT Heroico", venta: 121785, pct: 5.0 },
  { nombre: "MT MAT Cumbres", venta: 120498, pct: 5.0 },
  { nombre: "MT MTY Las Torres", venta: 117100, pct: 4.8 },
  { nombre: "MT MTY Sendero", venta: 110367, pct: 4.6 },
  { nombre: "MT MTY Lincoln", venta: 108974, pct: 4.5 },
  { nombre: "MT MAT Gonzalitos", venta: 101879, pct: 4.2 },
];

const maxVenta = tiendas[0].venta;

const fmt = (v: number) => {
  if (v >= 1_000_000) return `$${(v / 1_000_000).toFixed(1)}M`;
  return `$${(v / 1_000).toFixed(0)}K`;
};

export default function Slide10VentaTienda() {
  const top5Total = tiendas.slice(0, 5).reduce((s, t) => s + t.venta, 0);
  const top5Pct = tiendas.slice(0, 5).reduce((s, t) => s + t.pct, 0);

  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <div className="flex items-center gap-3 mb-1">
        <Store className="w-7 h-7 text-[#F5A623]" />
        <h2 className="text-2xl font-bold text-gray-800">Venta por Tienda</h2>
      </div>
      <p className="text-sm text-gray-500 mb-4">
        Top 13 tiendas · Últimos 4 periodos fiscales (P01 a P04 2026) · Venta sin IVA · 25 tiendas activas
      </p>

      <div className="flex gap-6 flex-1">
        {/* Left column: ranks 1-7 */}
        <div className="flex-1 space-y-1.5">
          {tiendas.slice(0, 7).map((t, i) => {
            const barPct = (t.venta / maxVenta) * 100;
            const isTop3 = i < 3;
            return (
              <div key={i} className="flex items-center gap-3">
                <span className={`w-5 text-right text-sm font-bold ${isTop3 ? "text-[#F5A623]" : "text-gray-400"}`}>
                  {i + 1}
                </span>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-0.5">
                    <span className={`text-xs ${isTop3 ? "text-gray-800 font-bold" : "text-gray-700"}`}>
                      {t.nombre}
                    </span>
                    <div className="flex items-center gap-3">
                      <span className="text-gray-800 font-bold text-xs">{fmt(t.venta)}</span>
                      <span className="text-gray-400 text-[11px] w-12 text-right">{t.pct}%</span>
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
            const barPct = (t.venta / maxVenta) * 100;
            const rank = i + 8;
            return (
              <div key={rank} className="flex items-center gap-3">
                <span className="w-5 text-right text-sm font-bold text-gray-400">
                  {rank}
                </span>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="text-xs text-gray-700">{t.nombre}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-gray-800 font-bold text-xs">{fmt(t.venta)}</span>
                      <span className="text-gray-400 text-[11px] w-12 text-right">{t.pct}%</span>
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

      <div className="mt-4 grid grid-cols-3 gap-4">
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-3 text-center">
          <p className="text-[10px] text-gray-400 mb-1">Top 5 tiendas</p>
          <p className="text-xl font-bold text-[#F5A623]">{top5Pct.toFixed(1)}%</p>
          <p className="text-[10px] text-gray-500">{fmt(top5Total)} de la venta</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-3 text-center">
          <p className="text-[10px] text-gray-400 mb-1">Tienda #1</p>
          <p className="text-lg font-bold text-gray-800">Las Brisas</p>
          <p className="text-[10px] text-gray-500">{fmt(tiendas[0].venta)} · {tiendas[0].pct}%</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-3 text-center">
          <p className="text-[10px] text-gray-400 mb-1">Concentración</p>
          <p className="text-xl font-bold text-gray-600">Baja</p>
          <p className="text-[10px] text-gray-500">Top 5 = {top5Pct.toFixed(0)}%, bien distribuida</p>
        </div>
      </div>
    </SlideWrapper>
  );
}
