"use client";

import SlideWrapper from "./SlideWrapper";
import { AlertTriangle, EyeOff, Info } from "lucide-react";

export default function Slide4DetalleRestock() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-1">Detalle de Restocks e Inventario sin Venta</h2>
      <p className="text-sm text-gray-500 mb-5">DDI=0 con inventario = Sin Venta (tiene producto pero no vende) · DDI &gt; 0 y &lt; 15 días = Restock si 2+ sabores</p>

      {/* Restock real */}
      <div className="bg-white rounded-xl border border-red-200 shadow-sm p-5 mb-4">
        <div className="flex items-center gap-3 mb-3">
          <AlertTriangle className="w-6 h-6 text-red-500" />
          <div>
            <h3 className="text-lg font-bold text-gray-800">MT MAT Las Brisas</h3>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-red-100 text-red-600">Restock PDQ 45gr</span>
          </div>
        </div>
        <div className="flex items-start gap-2 mb-3">
          <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded mt-0.5">45gr</span>
          <span className="text-xs text-gray-600">Natural=8.7 DDI, Fuego=8.8 DDI, Jalapeño=12.0 DDI — 3 sabores con venta activa pero bajo umbral de 15 días</span>
        </div>
        <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2">
          <Info className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
          <span className="text-[11px] text-gray-500">Tienda con mayor venta — prioridad alta de restock</span>
        </div>
      </div>

      {/* Problemas de anaquel */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 mb-1">
          <EyeOff className="w-5 h-5 text-orange-500" />
          <h3 className="text-base font-bold text-gray-800">Inventario sin Venta — PDQ 340gr</h3>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white rounded-xl border border-orange-200 shadow-sm p-4">
            <h4 className="text-sm font-bold text-gray-800 mb-1">Las Brisas</h4>
            <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded-full bg-orange-100 text-orange-600">Sin Venta 340gr</span>
            <p className="text-[11px] text-gray-500 mt-2">Sal=0 DDI (81 uds), Fuego=0 DDI (80 uds)</p>
            <p className="text-[11px] text-gray-400">Jalapeño sí vende (1,141 DDI)</p>
          </div>
          <div className="bg-white rounded-xl border border-orange-200 shadow-sm p-4">
            <h4 className="text-sm font-bold text-gray-800 mb-1">Satélite</h4>
            <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded-full bg-orange-100 text-orange-600">Sin Venta 340gr</span>
            <p className="text-[11px] text-gray-500 mt-2">3 sabores con DDI=0 (160 uds c/u)</p>
            <p className="text-[11px] text-gray-400">Nunca han vendido — PDQ sin exhibir</p>
          </div>
          <div className="bg-white rounded-xl border border-orange-200 shadow-sm p-4">
            <h4 className="text-sm font-bold text-gray-800 mb-1">Buena Vista</h4>
            <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded-full bg-orange-100 text-orange-600">Sin Venta 340gr</span>
            <p className="text-[11px] text-gray-500 mt-2">3 sabores con DDI=0 (160 uds c/u)</p>
            <p className="text-[11px] text-gray-400">Nunca han vendido — PDQ sin exhibir</p>
          </div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="bg-red-50 rounded-lg p-3 text-center">
          <p className="text-red-500 text-xs font-bold mb-1">Restocks</p>
          <p className="text-gray-800 font-bold text-lg">1 restock PDQ 45gr</p>
          <p className="text-gray-400 text-xs">Las Brisas — 3 sabores bajo 15 días</p>
        </div>
        <div className="bg-orange-50 rounded-lg p-3 text-center">
          <p className="text-orange-500 text-xs font-bold mb-1">Inventario sin Venta</p>
          <p className="text-gray-800 font-bold text-lg">3 tiendas PDQ 340gr</p>
          <p className="text-gray-400 text-xs">Tienen inventario pero DDI=0 — verificar exhibición</p>
        </div>
      </div>
    </SlideWrapper>
  );
}
