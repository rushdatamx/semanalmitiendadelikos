"use client";

import SlideWrapper from "./SlideWrapper";
import { CheckCircle, TrendingUp } from "lucide-react";

export default function Slide4DetalleRestock() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-1">Estado de Restock</h2>
      <p className="text-sm text-gray-500 mb-6">Regla: si cualquier sabor tiene inv &lt; 30% de venta promedio por periodo → surtir PDQ completo</p>

      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-10 text-center max-w-[600px]">
          <CheckCircle className="w-16 h-16 text-[#27AE60] mx-auto mb-4" />
          <h3 className="text-3xl font-bold text-[#27AE60] mb-2">Todos los PDQs OK</h3>
          <p className="text-gray-500 text-lg mb-6">
            Ninguna tienda necesita restock esta semana. Todos los inventarios están por encima del umbral del 30%.
          </p>

          <div className="grid grid-cols-2 gap-4 text-left">
            <div className="bg-[#F5A623]/10 rounded-lg p-4">
              <p className="text-[#F5A623] text-xs font-bold mb-1">PDQ 340gr</p>
              <p className="text-gray-800 font-bold text-lg">22 tiendas OK</p>
              <p className="text-gray-400 text-xs">0 restocks pendientes</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
              <p className="text-blue-500 text-xs font-bold mb-1">PDQ 45gr</p>
              <p className="text-gray-800 font-bold text-lg">26 tiendas OK</p>
              <p className="text-gray-400 text-xs">0 restocks pendientes</p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
          <TrendingUp className="w-4 h-4 text-[#27AE60]" />
          <span>Última evaluación: 4 periodos fiscales (P01 a P04 2026)</span>
        </div>
      </div>
    </SlideWrapper>
  );
}
