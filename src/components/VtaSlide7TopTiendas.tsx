"use client";

import SlideWrapper from "./SlideWrapper";
import { MapPin, TrendingUp } from "lucide-react";

const topTiendas = [
  { nombre: "MT Las Brisas", venta: 216948, pct: 7.1, crec: "+234.1%" },
  { nombre: "MT Bugambilias", venta: 202782, pct: 6.7, crec: "+194.8%" },
  { nombre: "MT Periférico", venta: 184541, pct: 6.1, crec: "+189.9%" },
  { nombre: "MT Nvo Reforma", venta: 164325, pct: 5.4, crec: "+237.3%" },
  { nombre: "MT Revolución", venta: 155017, pct: 5.1, crec: "+365.6%" },
  { nombre: "MT Zuazua", venta: 149001, pct: 4.9, crec: "+160.3%" },
  { nombre: "MT San Fernando", venta: 148346, pct: 4.9, crec: "+150.4%" },
  { nombre: "MT Río Bravo", venta: 130645, pct: 4.3, crec: "+158.6%" },
  { nombre: "MT García", venta: 129200, pct: 4.3, crec: "+227.5%" },
  { nombre: "MT Ciudadela", venta: 123526, pct: 4.1, crec: "+193.2%" },
];

const bottomTiendas = [
  { nombre: "MT Valle Sta. María", venta: 66769 },
  { nombre: "MT Margaritas", venta: 60249 },
  { nombre: "MT 9115", venta: 36373 },
  { nombre: "MT 2922", venta: 555 },
  { nombre: "MT 2907", venta: 55 },
];

const maxVenta = topTiendas[0].venta;

export default function VtaSlide7TopTiendas() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <div className="flex items-center gap-3 mb-1">
        <MapPin className="w-7 h-7 text-[#F5A623]" />
        <h2 className="text-3xl font-bold text-gray-800">Top 10 Tiendas</h2>
      </div>
      <p className="text-gray-500 text-sm mb-4">Ene-Abr 2026 · Top 10 concentra 52.8% de la venta</p>

      <div className="flex gap-5 flex-1">
        <div className="flex-1 space-y-1.5">
          {topTiendas.map((t, i) => {
            const barPct = (t.venta / maxVenta) * 100;
            return (
              <div key={i} className="flex items-center gap-3 animate-count-up" style={{ animationDelay: `${i * 50}ms` }}>
                <span className={`w-6 text-right text-sm font-bold ${i === 0 ? "text-[#F5A623]" : "text-gray-400"}`}>
                  {i + 1}
                </span>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="text-sm text-gray-700">{t.nombre}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-[#27AE60] text-xs font-bold flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        {t.crec}
                      </span>
                      <span className="text-gray-800 font-bold text-sm">${(t.venta / 1000).toFixed(0)}K</span>
                      <span className="text-gray-400 text-xs w-10 text-right">{t.pct}%</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="h-2 rounded-full animate-bar-grow bg-[#F5A623]"
                      style={{ width: `${barPct}%`, animationDelay: `${i * 50}ms` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="w-[300px] flex flex-col gap-3">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4">
            <p className="text-gray-500 text-xs mb-3">Distribución de venta</p>
            <div className="grid grid-cols-2 gap-3">
              <div className="text-center">
                <p className="text-gray-400 text-[9px]">Top 10</p>
                <p className="text-[#F5A623] text-2xl font-bold">52.8%</p>
              </div>
              <div className="text-center">
                <p className="text-gray-400 text-[9px]">Resto (18)</p>
                <p className="text-gray-600 text-2xl font-bold">47.2%</p>
              </div>
            </div>
            <p className="text-gray-400 text-[10px] mt-2 text-center">Concentración moderada en Top 10</p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 flex-1">
            <p className="text-gray-500 text-xs mb-2">Bottom 5</p>
            <div className="space-y-2">
              {bottomTiendas.map((t, i) => (
                <div key={i} className="flex justify-between items-center">
                  <span className="text-gray-600 text-xs">{t.nombre}</span>
                  <span className="text-[#E31837] text-xs font-bold">${(t.venta / 1000).toFixed(0)}K</span>
                </div>
              ))}
            </div>
            <p className="text-gray-400 text-[10px] mt-3">3 tiendas con venta mínima (&lt;$1K)</p>
          </div>

          <div className="bg-[#27AE60]/5 border border-[#27AE60]/20 rounded-xl px-3 py-2">
            <p className="text-[#27AE60] text-[10px] font-semibold">
              24/24 tiendas existentes crecen + 4 nuevas
            </p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
