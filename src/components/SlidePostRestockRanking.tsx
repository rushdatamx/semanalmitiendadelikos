"use client";

import SlideWrapper from "./SlideWrapper";
import { Trophy } from "lucide-react";

const topTiendas = [
  { rank: 1, tienda: "Reforma", uds340: 116, uds45: 879, total: 995 },
  { rank: 2, tienda: "Fundadores", uds340: 127, uds45: 605, total: 732 },
  { rank: 3, tienda: "Cabezada", uds340: 58, uds45: 674, total: 732 },
  { rank: 4, tienda: "Garcia", uds340: 136, uds45: 582, total: 718 },
  { rank: 5, tienda: "Revolucion", uds340: 109, uds45: 552, total: 661 },
  { rank: 6, tienda: "Zuazua", uds340: 95, uds45: 542, total: 637 },
  { rank: 7, tienda: "Ciudadela", uds340: 112, uds45: 503, total: 615 },
  { rank: 8, tienda: "Satelite", uds340: 37, uds45: 493, total: 530 },
  { rank: 9, tienda: "Anzures", uds340: 98, uds45: 328, total: 426 },
  { rank: 10, tienda: "Buena Vista", uds340: 100, uds45: 394, total: 494 },
];

const total340 = 1468;
const total45 = 9977;
const totalCombined = total340 + total45;
const maxTotal = topTiendas[0].total;

const fmtN = (v: number) => v.toLocaleString("es-MX");

const medalColors = ["#F5A623", "#9CA3AF", "#CD7F32"];

export default function SlidePostRestockRanking() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <div className="flex items-center gap-3 mb-1">
        <Trophy className="w-7 h-7 text-[#F5A623]" />
        <h2 className="text-2xl font-bold text-gray-800">
          Top 10 Tiendas por Unidades Vendidas
        </h2>
      </div>
      <p className="text-sm text-gray-500 mb-4">
        Post-restock (25-Mar al 06-Abr) &middot; 12 dias &middot; Unidades consumidas
      </p>

      <div className="grid grid-cols-[1fr_320px] gap-5 flex-1">
        {/* Left: ranking bars */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 flex flex-col">
          <div className="space-y-2.5 flex-1">
            {topTiendas.map((t) => {
              const barPct = (t.total / maxTotal) * 100;
              const bar340Pct = (t.uds340 / t.total) * 100;
              const isTop3 = t.rank <= 3;

              return (
                <div key={t.rank} className="flex items-center gap-3">
                  <span className={`w-6 text-right text-sm font-bold ${isTop3 ? "text-[#F5A623]" : "text-gray-400"}`}>
                    {isTop3 ? (
                      <span style={{ color: medalColors[t.rank - 1] }}>#{t.rank}</span>
                    ) : (
                      `#${t.rank}`
                    )}
                  </span>
                  <span className="w-[100px] text-xs font-medium text-gray-800 truncate">
                    {t.tienda}
                  </span>
                  <div className="flex-1">
                    <div className="w-full bg-gray-100 rounded-full h-5 overflow-hidden relative" style={{ width: `${barPct}%`, minWidth: "60px" }}>
                      {/* 340gr portion */}
                      <div
                        className="absolute left-0 top-0 h-full rounded-l-full"
                        style={{ width: `${bar340Pct}%`, backgroundColor: "#F5A623" }}
                      />
                      {/* 45gr portion */}
                      <div
                        className="absolute top-0 h-full rounded-r-full"
                        style={{ left: `${bar340Pct}%`, width: `${100 - bar340Pct}%`, backgroundColor: "#3B82F6" }}
                      />
                    </div>
                  </div>
                  <span className="text-sm font-bold text-gray-800 w-[55px] text-right">
                    {fmtN(t.total)}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="flex items-center gap-4 mt-4 pt-3 border-t border-gray-100">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded bg-[#F5A623]" />
              <span className="text-[11px] text-gray-500">340gr</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded bg-[#3B82F6]" />
              <span className="text-[11px] text-gray-500">45gr</span>
            </div>
          </div>
        </div>

        {/* Right: summary cards */}
        <div className="flex flex-col gap-4">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 text-center flex-1 flex flex-col justify-center">
            <p className="text-[11px] text-gray-400 mb-1">Total vendido (todas las tiendas)</p>
            <p className="text-3xl font-bold text-gray-800">{fmtN(totalCombined)}</p>
            <p className="text-xs text-gray-400 mt-1">unidades en 12 dias</p>
          </div>

          <div className="bg-orange-50 rounded-xl border border-orange-200 p-4 text-center flex-1 flex flex-col justify-center">
            <div className="flex items-center justify-center gap-2 mb-1">
              <div className="w-3 h-3 rounded-full bg-[#F5A623]" />
              <p className="text-[11px] text-orange-500">PDQ 340gr</p>
            </div>
            <p className="text-2xl font-bold text-[#F5A623]">{fmtN(total340)}</p>
            <p className="text-xs text-orange-400 mt-0.5">uds · 22 tiendas</p>
          </div>

          <div className="bg-blue-50 rounded-xl border border-blue-200 p-4 text-center flex-1 flex flex-col justify-center">
            <div className="flex items-center justify-center gap-2 mb-1">
              <div className="w-3 h-3 rounded-full bg-[#3B82F6]" />
              <p className="text-[11px] text-blue-500">PDQ 45gr</p>
            </div>
            <p className="text-2xl font-bold text-[#3B82F6]">{fmtN(total45)}</p>
            <p className="text-xs text-blue-400 mt-0.5">uds · 24 tiendas</p>
          </div>

          <div className="bg-green-50 rounded-xl border border-green-200 p-4 text-center">
            <p className="text-[10px] text-green-500 mb-0.5">Cobertura</p>
            <p className="text-lg font-bold text-green-700">100%</p>
            <p className="text-[10px] text-green-500">Todas las tiendas con stock</p>
          </div>
        </div>
      </div>

      <p className="text-[10px] text-gray-400 mt-2 text-center">
        Unidades = consumo medido de inventario diario &middot; Excluye Cat Monterrey (CEDIS) y tienda 9115 (sin catalogo)
      </p>
    </SlideWrapper>
  );
}
