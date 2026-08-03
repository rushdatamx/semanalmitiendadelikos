"use client";

import SlideWrapper from "./SlideWrapper";

export default function VtaSlide1Portada() {
  return (
    <SlideWrapper className="bg-gradient-to-br from-[#F5A623] via-[#F7B500] to-[#F5A623]" hideFooter>
      <div className="flex-1 flex flex-col items-center justify-center text-center px-16">
        <div className="flex items-center gap-8 mb-10">
          <img src="/delikos-logo.jpeg" alt="Delikos" className="h-20 object-contain" />
          <div className="w-px h-16 bg-white/40" />
          <img src="/mitienda-logo.png" alt="MITIENDA" className="h-16 object-contain" />
        </div>

        <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">
          Reporte de Venta Sell-Out
        </h1>
        <p className="text-white/80 text-xl mb-10">
          Enero — Julio 2026 · Mi Tienda del Ahorro
        </p>

        <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-10 py-6 border border-white/30">
          <p className="text-white/70 text-sm mb-1">Venta acumulada YTD (Ene–Jul)</p>
          <p className="text-white text-6xl font-bold">$5.43M</p>
          <p className="text-white/90 text-xl mt-2 font-semibold">+177.7% vs 2025 · +57.2% base madura</p>
        </div>

        <p className="text-white/60 text-sm mt-10">
          Delikos · KAM Sell-Out Report · Corte al 31 de Julio 2026
        </p>
      </div>
    </SlideWrapper>
  );
}
