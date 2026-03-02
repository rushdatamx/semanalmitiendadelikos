"use client";

import SlideWrapper from "./SlideWrapper";
import { ShoppingCart, AlertTriangle } from "lucide-react";

const ocWeeks = [
  { week: "10-Feb", uds: 360 },
  { week: "17-Feb", uds: 640 },
  { week: "24-Feb", uds: 990 },
];

const maxUds = 990;

export default function SlideOrdenesCompra() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <div className="flex items-center gap-3 mb-1">
        <ShoppingCart className="w-7 h-7 text-[#F5A623]" />
        <h2 className="text-2xl font-bold text-gray-800">
          Órdenes de Compra — Análisis Semanal
        </h2>
      </div>
      <p className="text-sm text-gray-500 mb-5">
        Tendencia de OC del portal HEB para PDQs Delikos
      </p>

      <div className="flex gap-6 flex-1">
        {/* Left: Bar chart OC 45gr */}
        <div className="w-[60%] bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-800">
              PDQ 45gr — OC Semanal
            </h3>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700">
              +175% en 3 semanas
            </span>
          </div>

          <div className="flex items-end gap-8 justify-center h-[340px] pb-8">
            {ocWeeks.map((w, i) => {
              const pct = (w.uds / maxUds) * 100;
              return (
                <div key={i} className="flex flex-col items-center gap-2 w-32">
                  <span className="text-sm font-bold text-gray-800">
                    {w.uds.toLocaleString()} uds
                  </span>
                  <div className="w-20 bg-gray-100 rounded-t-lg relative" style={{ height: "260px" }}>
                    <div
                      className="absolute bottom-0 w-full rounded-t-lg bg-gradient-to-t from-blue-600 to-blue-400 transition-all"
                      style={{ height: `${pct}%` }}
                    />
                  </div>
                  <span className="text-xs text-gray-500 font-medium">
                    {w.week}
                  </span>
                </div>
              );
            })}
          </div>

          <p className="text-[10px] text-gray-400 text-center mt-2">
            Fuente: Portal OC HEB · 3 SKUs Papa 45gr (Natural, Fuego, Jalapeño)
          </p>
        </div>

        {/* Right: Alert 340gr */}
        <div className="w-[40%] flex flex-col gap-4">
          <div className="bg-red-50 rounded-xl border-2 border-red-200 p-6 flex-1 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-red-800">
                  PDQ 340gr — Sin OC
                </h3>
                <p className="text-xs text-red-600">Alerta crítica</p>
              </div>
            </div>

            <div className="space-y-4 flex-1">
              <p className="text-sm text-red-700 leading-relaxed">
                Los 3 SKUs de 340gr <strong>no están registrados</strong> en el
                sistema de Órdenes de Compra de HEB.
              </p>

              <div className="bg-white/60 rounded-lg p-3 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Única entrega:</span>
                  <span className="font-bold text-red-700">Feb 2-3, 2026</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Días sin surtido:</span>
                  <span className="font-bold text-red-700">~28 días</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Tiendas con DDI &lt; 15:</span>
                  <span className="font-bold text-red-700">3 tiendas</span>
                </div>
              </div>

              <div className="bg-white/60 rounded-lg p-3">
                <p className="text-xs text-gray-600 mb-1 font-semibold">
                  Tiendas en riesgo:
                </p>
                <ul className="text-xs text-red-700 space-y-0.5">
                  <li>• Anzures — 4.4 DDI (más crítico)</li>
                  <li>• Eloy Cavazos — 5.9 DDI</li>
                  <li>• Reforma — 6.9 DDI</li>
                </ul>
              </div>
            </div>

            <div className="mt-4 bg-red-100 rounded-lg p-3 text-center">
              <p className="text-xs font-bold text-red-800">
                Sin reorden automático — solo entrega manual
              </p>
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
