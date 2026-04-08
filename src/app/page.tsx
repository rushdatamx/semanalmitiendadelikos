"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Slide1Portada from "@/components/Slide1Portada";
import Slide4DetalleRestock from "@/components/Slide4DetalleRestock";
import SlideOrdenesCompra from "@/components/SlideOrdenesCompra";
import SlideAlerta340 from "@/components/SlideAlerta340";
import Slide7Detalle340 from "@/components/Slide7Detalle340";
import Slide8Detalle45 from "@/components/Slide8Detalle45";
import Slide9VentaProducto from "@/components/Slide9VentaProducto";
import Slide10VentaTienda from "@/components/Slide10VentaTienda";
import SlideRecomendaciones from "@/components/SlideRecomendaciones";
import SlidePostRestockResumen from "@/components/SlidePostRestockResumen";
import SlidePostRestockConsumo from "@/components/SlidePostRestockConsumo";
import SlidePostRestockRanking from "@/components/SlidePostRestockRanking";
import SlidePostRestockTendencia from "@/components/SlidePostRestockTendencia";
import SlidePostRestockSellThrough from "@/components/SlidePostRestockSellThrough";

const tabs = [
  {
    label: "PDQ Semanal",
    slides: [
      Slide1Portada,
      Slide4DetalleRestock,
      SlideOrdenesCompra,
      SlideAlerta340,
      Slide7Detalle340,
      Slide8Detalle45,
      Slide9VentaProducto,
      Slide10VentaTienda,
      SlideRecomendaciones,
    ],
  },
  {
    label: "Post-Restock",
    slides: [
      SlidePostRestockResumen,
      SlidePostRestockConsumo,
      SlidePostRestockRanking,
      SlidePostRestockSellThrough,
      SlidePostRestockTendencia,
    ],
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const [current, setCurrent] = useState(0);

  const currentSlides = tabs[activeTab].slides;
  const Slide = currentSlides[current];

  const switchTab = (tabIdx: number) => {
    setActiveTab(tabIdx);
    setCurrent(0);
  };

  return (
    <div className="min-h-screen bg-[#E8E8E8] flex flex-col items-center justify-center py-8">
      <div className="relative">
        {/* Tab navigation */}
        <div className="flex items-center justify-center gap-2 mb-4">
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => switchTab(i)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                i === activeTab
                  ? "bg-[#F5A623] text-white shadow-md"
                  : "bg-white text-gray-500 hover:text-gray-700 hover:bg-gray-50 border border-gray-200"
              }`}
            >
              {tab.label}
              <span className={`ml-2 text-xs ${i === activeTab ? "text-white/70" : "text-gray-400"}`}>
                ({tab.slides.length})
              </span>
            </button>
          ))}
        </div>

        <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-300">
          <Slide />
        </div>

        <div className="flex items-center justify-center gap-6 mt-6">
          <button
            onClick={() => setCurrent((p) => Math.max(0, p - 1))}
            disabled={current === 0}
            className="p-2 rounded-full bg-white text-gray-600 disabled:opacity-30 hover:bg-gray-100 transition-colors shadow-sm border border-gray-200"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex gap-2">
            {currentSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  i === current
                    ? "bg-[#F5A623]"
                    : "bg-gray-400 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() =>
              setCurrent((p) => Math.min(currentSlides.length - 1, p + 1))
            }
            disabled={current === currentSlides.length - 1}
            className="p-2 rounded-full bg-white text-gray-600 disabled:opacity-30 hover:bg-gray-100 transition-colors shadow-sm border border-gray-200"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <p className="text-center text-gray-500 text-xs mt-3">
          {tabs[activeTab].label} · Slide {current + 1} / {currentSlides.length} · Usa las flechas para navegar
        </p>
      </div>
    </div>
  );
}
