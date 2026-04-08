"use client";

import SlideWrapper from "./SlideWrapper";
import { TrendingUp, ArrowRight } from "lucide-react";

export default function SlidePostRestockResumen() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] justify-center items-center text-center relative" hideFooter>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#27AE60]/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#F5A623]/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-white/60 blur-3xl" />
      </div>

      <div className="relative z-10 space-y-7 max-w-[900px]">
        <div className="flex justify-center">
          <div className="bg-green-100 border border-green-300 rounded-full p-4">
            <TrendingUp className="w-10 h-10 text-green-600" />
          </div>
        </div>

        <h1 className="text-4xl font-bold text-gray-800 tracking-tight leading-tight">
          El restock se vendio.
          <br />
          <span className="text-[#27AE60]">La demanda esta.</span>
        </h1>

        <p className="text-lg text-gray-500 max-w-[700px] mx-auto leading-relaxed">
          Restock masivo del 24 de marzo en MITIENDA
          <br />
          12 dias de datos &middot; Resultados al 6 de abril 2026
        </p>

        {/* Headline KPIs */}
        <div className="grid grid-cols-3 gap-5 mt-2">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
            <p className="text-sm text-gray-400 mb-2">PDQ 340gr</p>
            <p className="text-4xl font-bold text-[#F5A623]">+92%</p>
            <p className="text-sm text-gray-500 mt-1">mas venta post-restock</p>
            <div className="flex items-center justify-center gap-2 mt-3 text-xs text-gray-400">
              <span>501 uds/sem</span>
              <ArrowRight className="w-3 h-3" />
              <span className="font-bold text-[#F5A623]">963 uds/sem</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
            <p className="text-sm text-gray-400 mb-2">PDQ 45gr</p>
            <p className="text-4xl font-bold text-[#3B82F6]">+10%</p>
            <p className="text-sm text-gray-500 mt-1">mas venta post-restock</p>
            <div className="flex items-center justify-center gap-2 mt-3 text-xs text-gray-400">
              <span>3,910 uds/sem</span>
              <ArrowRight className="w-3 h-3" />
              <span className="font-bold text-[#3B82F6]">4,297 uds/sem</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
            <p className="text-sm text-gray-400 mb-2">Combinado</p>
            <p className="text-4xl font-bold text-gray-800">11,445</p>
            <p className="text-sm text-gray-500 mt-1">uds vendidas en 12 dias</p>
            <div className="flex items-center justify-center gap-2 mt-3 text-xs text-gray-400">
              <span>26 tiendas</span>
              <span>&middot;</span>
              <span className="font-bold text-green-600">100% cobertura</span>
            </div>
          </div>
        </div>

        <div className="inline-block px-6 py-2 rounded-full bg-green-50 border border-green-300 text-green-700 text-sm font-semibold">
          Conclusion: el inventario bajo limitaba la venta — con stock suficiente, la demanda responde
        </div>
      </div>
    </SlideWrapper>
  );
}
