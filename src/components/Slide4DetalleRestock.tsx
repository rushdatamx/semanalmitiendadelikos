"use client";

import SlideWrapper from "./SlideWrapper";
import { AlertTriangle, Info } from "lucide-react";

const restocks = [
  {
    tienda: "MT MAT Las Brisas",
    pdq: "PDQ 340gr + PDQ 45gr",
    detalle340: "Sal=0 días, Fuego=0 días (2/3 bajo)",
    detalle45: "Natural=8.7, Fuego=8.8, Jalapeño=12.0 (3/3 bajo)",
    color: "#E74C3C",
    nota: "Tienda con mayor venta — prioridad alta",
  },
  {
    tienda: "MT SAL Satelite",
    pdq: "PDQ 340gr",
    detalle340: "Sal=0 días, Fuego=0 días, Jalapeño=0 días (3/3 bajo)",
    detalle45: null,
    color: "#F5A623",
    nota: "Inv=160 pzs/sabor con DOS=0 — PDQ recién colocado sin venta registrada",
  },
  {
    tienda: "MT MTY Buena Vista",
    pdq: "PDQ 340gr",
    detalle340: "Sal=0 días, Fuego=0 días, Jalapeño=0 días (3/3 bajo)",
    detalle45: null,
    color: "#F5A623",
    nota: "Inv=160 pzs/sabor con DOS=0 — PDQ recién colocado sin venta registrada",
  },
];

export default function Slide4DetalleRestock() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-1">Detalle de Restocks</h2>
      <p className="text-sm text-gray-500 mb-6">Regla: si 2+ sabores del PDQ tienen DOS Unidades &lt; 15 días → restock del PDQ completo</p>

      <div className="flex-1 space-y-4">
        {restocks.map((r, i) => (
          <div key={i} className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-6 h-6" style={{ color: r.color }} />
                <div>
                  <h3 className="text-lg font-bold text-gray-800">{r.tienda}</h3>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-orange-100 text-orange-700">{r.pdq}</span>
                </div>
              </div>
            </div>

            <div className="space-y-2 mb-3">
              <div className="flex items-start gap-2">
                <span className="text-[10px] font-bold text-[#F5A623] bg-[#F5A623]/10 px-2 py-0.5 rounded mt-0.5">340gr</span>
                <span className="text-xs text-gray-600">{r.detalle340}</span>
              </div>
              {r.detalle45 && (
                <div className="flex items-start gap-2">
                  <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded mt-0.5">45gr</span>
                  <span className="text-xs text-gray-600">{r.detalle45}</span>
                </div>
              )}
            </div>

            <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2">
              <Info className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
              <span className="text-[11px] text-gray-500">{r.nota}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="bg-[#F5A623]/10 rounded-lg p-3 text-center">
          <p className="text-[#F5A623] text-xs font-bold mb-1">PDQ 340gr</p>
          <p className="text-gray-800 font-bold text-lg">3 restocks</p>
          <p className="text-gray-400 text-xs">19 tiendas OK · 3 sin producto</p>
        </div>
        <div className="bg-blue-50 rounded-lg p-3 text-center">
          <p className="text-blue-500 text-xs font-bold mb-1">PDQ 45gr</p>
          <p className="text-gray-800 font-bold text-lg">1 restock</p>
          <p className="text-gray-400 text-xs">24 tiendas OK · 0 sin producto</p>
        </div>
      </div>
    </SlideWrapper>
  );
}
