"use client";

import SlideWrapper from "./SlideWrapper";
import { MapPin, TrendingUp } from "lucide-react";

const topTiendas = [
  { nombre: "MT Mat Las Brisas", venta: 314214, pct: 6.7, crec: "+204.0%" },
  { nombre: "MT Rey Bugambilias", venta: 303141, pct: 6.5, crec: "+117.0%" },
  { nombre: "MT Rey Periférico", venta: 281098, pct: 6.0, crec: "+201.0%" },
  { nombre: "MT Nvo Reforma", venta: 240563, pct: 5.1, crec: "+226.0%" },
  { nombre: "MT Rey San Fernando", venta: 233895, pct: 5.0, crec: "+132.0%" },
  { nombre: "MT Nvo Revolución", venta: 229679, pct: 4.9, crec: "+294.0%" },
  { nombre: "MT Mty Zuazua", venta: 211977, pct: 4.5, crec: "+159.0%" },
  { nombre: "MT Mty García", venta: 193020, pct: 4.1, crec: "+239.0%" },
  { nombre: "MT Mty Ciudadela", venta: 192379, pct: 4.1, crec: "+181.0%" },
  { nombre: "MT Rey Río Bravo", venta: 191654, pct: 4.1, crec: "+165.0%" },
];

const bottomTiendas = [
  { nombre: "MT Valle Sta. María", venta: 102056 },
  { nombre: "MT 9115 (nueva)", venta: 96860 },
  { nombre: "MT Margaritas", venta: 90797 },
  { nombre: "MT 2922 (nueva)", venta: 555 },
  { nombre: "MT 2907 (nueva)", venta: 55 },
];

const maxVenta = topTiendas[0].venta;

export default function VtaSlide7TopTiendas() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <div className="flex items-center gap-3 mb-1">
        <MapPin className="w-7 h-7 text-[#F5A623]" />
        <h2 className="text-3xl font-bold text-gray-800">Top 10 Tiendas</h2>
      </div>
      <p className="text-gray-500 text-sm mb-4">Ene-Jun 2026 · Top 10 concentra 51.2% de la venta</p>

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
                <p className="text-[#F5A623] text-2xl font-bold">51.2%</p>
              </div>
              <div className="text-center">
                <p className="text-gray-400 text-[9px]">Resto (18)</p>
                <p className="text-gray-600 text-2xl font-bold">48.8%</p>
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
            <p className="text-gray-400 text-[10px] mt-3">2 tiendas nuevas con venta mínima (&lt;$1K)</p>
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
