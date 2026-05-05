"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { ChevronLeft, ChevronRight, Download } from "lucide-react";
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
import VtaSlide1Portada from "@/components/VtaSlide1Portada";
import VtaSlide2KPIs from "@/components/VtaSlide2KPIs";
import VtaSlide3Tendencia from "@/components/VtaSlide3Tendencia";
import VtaSlide4Categorias from "@/components/VtaSlide4Categorias";
import VtaSlide5TopProductos from "@/components/VtaSlide5TopProductos";
import VtaSlide6Penetracion from "@/components/VtaSlide6Penetracion";
import VtaSlide7TopTiendas from "@/components/VtaSlide7TopTiendas";

const tabs = [
  {
    id: "pdq-semanal",
    label: "PDQ Semanal",
    color: "#F5A623",
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
    id: "post-restock",
    label: "Post-Restock",
    color: "#3B82F6",
    slides: [
      SlidePostRestockResumen,
      SlidePostRestockConsumo,
      SlidePostRestockRanking,
      SlidePostRestockSellThrough,
      SlidePostRestockTendencia,
    ],
  },
  {
    id: "reporte-venta",
    label: "Reporte Venta",
    color: "#F5A623",
    slides: [
      VtaSlide1Portada,
      VtaSlide2KPIs,
      VtaSlide3Tendencia,
      VtaSlide4Categorias,
      VtaSlide5TopProductos,
      VtaSlide6Penetracion,
      VtaSlide7TopTiendas,
    ],
  },
];

function HomeInner() {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab");
  const initialTab = tabParam ? tabs.findIndex((t) => t.id === tabParam) : 0;

  const [activeTab, setActiveTab] = useState(initialTab >= 0 ? initialTab : 0);
  const [current, setCurrent] = useState(0);
  const [exporting, setExporting] = useState(false);

  useEffect(() => {
    if (tabParam) {
      const idx = tabs.findIndex((t) => t.id === tabParam);
      if (idx >= 0) {
        setActiveTab(idx);
        setCurrent(0);
      }
    }
  }, [tabParam]);

  const tab = tabs[activeTab];
  const currentSlides = tab.slides;
  const Slide = currentSlides[current];

  const switchTab = (tabIdx: number) => {
    setActiveTab(tabIdx);
    setCurrent(0);
  };

  const exportPDF = async () => {
    setExporting(true);
    try {
      const html2canvas = (await import("html2canvas-pro")).default;
      const { jsPDF } = await import("jspdf");

      const pdf = new jsPDF({ orientation: "landscape", unit: "px", format: [1280, 720] });

      const container = document.createElement("div");
      container.style.position = "fixed";
      container.style.left = "-9999px";
      container.style.top = "0";
      document.body.appendChild(container);

      for (let i = 0; i < currentSlides.length; i++) {
        const wrapper = document.createElement("div");
        container.appendChild(wrapper);

        const { createRoot } = await import("react-dom/client");
        const SlideComp = currentSlides[i];
        const root = createRoot(wrapper);
        root.render(<SlideComp />);

        await new Promise((r) => setTimeout(r, 300));

        const slideEl = wrapper.querySelector("div");
        if (!slideEl) continue;

        const canvas = await html2canvas(slideEl, {
          width: 1280,
          height: 720,
          scale: 2,
          useCORS: true,
          backgroundColor: "#F5F5F5",
        });

        if (i > 0) pdf.addPage();
        pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0, 1280, 720);
        root.unmount();
      }

      document.body.removeChild(container);
      pdf.save(`${tab.label}_MITIENDA_2026.pdf`);
    } catch (err) {
      console.error("Error exporting PDF:", err);
    } finally {
      setExporting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#E8E8E8] flex flex-col items-center justify-center py-8">
      <div className="relative">
        {/* Tab navigation */}
        <div className="flex items-center justify-center gap-2 mb-4">
          {tabs.map((t, i) => (
            <button
              key={t.id}
              onClick={() => switchTab(i)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                i === activeTab
                  ? "text-white shadow-md"
                  : "bg-white text-gray-500 hover:text-gray-700 hover:bg-gray-50 border border-gray-200"
              }`}
              style={i === activeTab ? { backgroundColor: t.color } : undefined}
            >
              {t.label}
              <span className={`ml-2 text-xs ${i === activeTab ? "text-white/70" : "text-gray-400"}`}>
                ({t.slides.length})
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
                className="w-2.5 h-2.5 rounded-full transition-colors"
                style={{
                  backgroundColor: i === current ? tab.color : "#9CA3AF",
                }}
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

        <div className="flex items-center justify-center gap-3 mt-3">
          <p className="text-gray-500 text-xs">
            {tab.label} · Slide {current + 1} / {currentSlides.length}
          </p>
          <button
            onClick={exportPDF}
            disabled={exporting}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white text-gray-600 hover:bg-gray-100 border border-gray-200 shadow-sm transition-colors disabled:opacity-50"
          >
            <Download className="w-3.5 h-3.5" />
            {exporting ? "Exportando..." : `PDF ${tab.label}`}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Suspense>
      <HomeInner />
    </Suspense>
  );
}
