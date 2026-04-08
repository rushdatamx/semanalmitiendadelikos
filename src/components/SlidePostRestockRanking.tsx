"use client";

import SlideWrapper from "./SlideWrapper";
import { BarChart3 } from "lucide-react";

const combined = [
  { tienda: "Reforma", pct340: 47.5, burn340: 8.9, days340: 14, pct45: 0.0, burn45: 0.0, days45: 999 },
  { tienda: "Anzures", pct340: 38.3, burn340: 7.5, days340: 21, pct45: 18.1, burn45: 25.2, days45: 59 },
  { tienda: "Revolucion", pct340: 35.5, burn340: 9.1, days340: 22, pct45: 23.5, burn45: 39.9, days45: 39 },
  { tienda: "Garcia", pct340: 35.3, burn340: 10.5, days340: 24, pct45: 14.2, burn45: 16.1, days45: 78 },
  { tienda: "Fundadores", pct340: 31.6, burn340: 10.6, days340: 26, pct45: 29.3, burn45: 46.5, days45: 31 },
  { tienda: "Ciudadela", pct340: 29.6, burn340: 8.6, days340: 31, pct45: 21.4, burn45: 38.7, days45: 48 },
  { tienda: "Eloy Cavazos", pct340: 26.0, burn340: 5.5, days340: 37, pct45: 6.6, burn45: 8.5, days45: 185 },
  { tienda: "Zuazua", pct340: 25.2, burn340: 7.3, days340: 39, pct45: 20.6, burn45: 32.5, days45: 50 },
  { tienda: "Periferico", pct340: 23.1, burn340: 6.8, days340: 40, pct45: 14.1, burn45: 25.2, days45: 73 },
  { tienda: "Aztlan", pct340: null, burn340: null, days340: null, pct45: 98.8, burn45: 43.0, days45: 0 },
  { tienda: "Cabezada", pct340: 17.5, burn340: 4.5, days340: 61, pct45: 32.2, burn45: 40.1, days45: 27 },
  { tienda: "Buena Vista", pct340: 16.5, burn340: 8.3, days340: 61, pct45: 22.2, burn45: 30.3, days45: 45 },
  { tienda: "Huinala", pct340: 16.1, burn340: 3.8, days340: 68, pct45: 12.2, burn45: 22.1, days45: 93 },
  { tienda: "Margaritas", pct340: 14.5, burn340: 4.3, days340: 76, pct45: 19.4, burn45: 24.2, days45: 54 },
  { tienda: "Aeropuerto", pct340: 12.9, burn340: 2.6, days340: 81, pct45: 1.3, burn45: 1.8, days45: 938 },
  { tienda: "Lincoln", pct340: 11.1, burn340: 2.4, days340: 104, pct45: 0.0, burn45: 0.0, days45: 999 },
  { tienda: "Rio Bravo", pct340: 10.6, burn340: 3.5, days340: 109, pct45: 19.0, burn45: 26.9, days45: 55 },
  { tienda: "San Fernando", pct340: 10.6, burn340: 2.5, days340: 101, pct45: 5.2, burn45: 7.3, days45: 218 },
  { tienda: "Las Brisas", pct340: 9.4, burn340: 2.2, days340: 116, pct45: 0.0, burn45: 0.0, days45: 999 },
  { tienda: "San Roque", pct340: 8.8, burn340: 2.3, days340: 134, pct45: 4.8, burn45: 7.9, days45: 257 },
  { tienda: "Valle Sta Maria", pct340: null, burn340: null, days340: null, pct45: 37.7, burn45: 8.2, days45: 46 },
  { tienda: "Plaza del Bosque", pct340: 6.6, burn340: 1.6, days340: 183, pct45: 0.2, burn45: 0.3, days45: 5242 },
  { tienda: "Satelite", pct340: 5.4, burn340: 2.8, days340: 226, pct45: 18.6, burn45: 37.9, days45: 57 },
  { tienda: "Bugambilias", pct340: 1.4, burn340: 0.6, days340: 908, pct45: 3.8, burn45: 8.8, days45: 328 },
  { tienda: "Metroplex", pct340: 0.0, burn340: 0.0, days340: 999, pct45: 7.2, burn45: 9.2, days45: 167 },
];

function pctBadge(pct: number | null, color: string) {
  if (pct === null) return <span className="text-gray-300 text-[11px]">&mdash;</span>;
  let bg = "bg-red-100 text-red-700";
  if (pct >= 25) bg = "bg-green-100 text-green-700";
  else if (pct >= 10) bg = "bg-yellow-100 text-yellow-700";
  else if (pct >= 5) bg = "bg-orange-100 text-orange-700";
  // Override with specific PDQ tint on the border
  return (
    <span
      className={`inline-block px-2 py-0.5 rounded-full text-[11px] font-semibold ${bg}`}
      style={{ borderLeft: `3px solid ${color}` }}
    >
      {pct.toFixed(1)}%
    </span>
  );
}

function burnCell(burn: number | null) {
  if (burn === null) return <span className="text-gray-300">&mdash;</span>;
  return <span className="text-gray-600">{burn.toFixed(1)}</span>;
}

function daysCell(days: number | null) {
  if (days === null) return <span className="text-gray-300">&mdash;</span>;
  if (days >= 999) return <span className="text-gray-300">&mdash;</span>;
  if (days <= 0) return <span className="text-red-600 font-bold">0</span>;
  if (days < 30) return <span className="text-red-600 font-semibold">{days}</span>;
  if (days <= 90) return <span className="text-gray-700">{days}</span>;
  return <span className="text-green-600 font-medium">{days}</span>;
}

export default function SlidePostRestockRanking() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <div className="flex items-center gap-3 mb-1">
        <BarChart3 className="w-6 h-6 text-gray-700" />
        <h2 className="text-2xl font-bold text-gray-800">
          Ranking de Tiendas &mdash; Velocidad de Consumo
        </h2>
      </div>
      <p className="text-sm text-gray-500 mb-4">
        Ordenadas por consumo total (340gr + 45gr combinado) &middot; 12 dias post-restock
      </p>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex-1 flex flex-col">
        {/* Header */}
        <div className="grid grid-cols-[32px_140px_1fr_1fr_1fr_1fr_1fr_1fr] gap-0 text-[10px] font-bold text-gray-500 uppercase tracking-wide border-b border-gray-200 bg-gray-50 px-3 py-2">
          <span>#</span>
          <span>Tienda</span>
          <span className="text-center" style={{ color: "#F5A623" }}>340 %</span>
          <span className="text-center" style={{ color: "#F5A623" }}>340 uds/d</span>
          <span className="text-center" style={{ color: "#3B82F6" }}>45 %</span>
          <span className="text-center" style={{ color: "#3B82F6" }}>45 uds/d</span>
          <span className="text-center" style={{ color: "#F5A623" }}>Dias 340</span>
          <span className="text-center" style={{ color: "#3B82F6" }}>Dias 45</span>
        </div>

        {/* Scrollable body */}
        <div className="overflow-y-auto max-h-[510px]">
          {combined.map((row, i) => (
            <div
              key={row.tienda}
              className={`grid grid-cols-[32px_140px_1fr_1fr_1fr_1fr_1fr_1fr] gap-0 items-center px-3 py-1.5 text-[12px] border-b border-gray-100 ${
                i % 2 === 0 ? "bg-white" : "bg-gray-50/50"
              }`}
            >
              <span className="text-gray-400 font-mono text-[11px]">{i + 1}</span>
              <span className="font-medium text-gray-800 truncate">{row.tienda}</span>
              <span className="text-center">{pctBadge(row.pct340, "#F5A623")}</span>
              <span className="text-center">{burnCell(row.burn340)}</span>
              <span className="text-center">{pctBadge(row.pct45, "#3B82F6")}</span>
              <span className="text-center">{burnCell(row.burn45)}</span>
              <span className="text-center">{daysCell(row.days340)}</span>
              <span className="text-center">{daysCell(row.days45)}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-5 mt-2 text-[10px] text-gray-500">
        <span className="flex items-center gap-1">
          <span className="inline-block w-2.5 h-2.5 rounded bg-green-100 border border-green-300" /> &ge;25%
        </span>
        <span className="flex items-center gap-1">
          <span className="inline-block w-2.5 h-2.5 rounded bg-yellow-100 border border-yellow-300" /> 10-25%
        </span>
        <span className="flex items-center gap-1">
          <span className="inline-block w-2.5 h-2.5 rounded bg-orange-100 border border-orange-300" /> 5-10%
        </span>
        <span className="flex items-center gap-1">
          <span className="inline-block w-2.5 h-2.5 rounded bg-red-100 border border-red-300" /> &lt;5%
        </span>
        <span className="ml-4 text-gray-400">
          Dias restantes: <span className="text-red-500">&lt;30 critico</span> · 30-90 normal · <span className="text-green-500">&gt;90 holgado</span> · &mdash; sin consumo
        </span>
      </div>
    </SlideWrapper>
  );
}
