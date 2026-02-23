"use client";

import SlideWrapper from "./SlideWrapper";
import { TrendingUp, Package } from "lucide-react";

export default function Slide6VentaPerdida() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10" hideFooter>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Crecimiento y Oportunidades</h2>

      <div className="bg-gradient-to-br from-[#27AE60] to-[#1E8E4E] rounded-2xl p-8 text-white text-center mb-6 shadow-lg">
        <p className="text-sm opacity-90 mb-2">PDQ 340gr — Crecimiento desde lanzamiento</p>
        <p className="text-6xl font-black tracking-tight">+161%</p>
        <p className="text-lg mt-2 opacity-90">De $37,833 (P02) a $98,740 (P04) en 2 periodos</p>
      </div>

      <div className="grid grid-cols-2 gap-6 flex-1">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <TrendingUp className="w-8 h-8 text-green-500 mb-3" />
          <p className="text-4xl font-bold text-[#F5A623]">$99K</p>
          <p className="text-sm text-gray-500 mt-1">PDQ 340gr · P04-2026</p>
          <p className="text-xs text-gray-400 mt-4">22 tiendas activas</p>
          <p className="text-xs text-gray-400 mt-1">3 restocks pendientes</p>
          <p className="text-xs text-green-600 mt-1 font-semibold">Crecimiento sostenido</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <Package className="w-8 h-8 text-blue-500 mb-3" />
          <p className="text-4xl font-bold text-blue-600">100%</p>
          <p className="text-sm text-gray-500 mt-1">Cobertura PDQ 45gr</p>
          <p className="text-xs text-gray-400 mt-4">Presente en las 25 tiendas</p>
          <p className="text-xs text-gray-400 mt-1">Mejor periodo: P03 $249K</p>
          <p className="text-xs text-gray-400 mt-1">1 restock pendiente</p>
        </div>
      </div>

      <div className="mt-4 text-center">
        <p className="text-sm text-gray-500 font-semibold">
          4 restocks totales · 8 problemas de anaquel detectados en PDQ 340gr
        </p>
      </div>
    </SlideWrapper>
  );
}
