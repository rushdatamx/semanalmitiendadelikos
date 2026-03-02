"use client";

import SlideWrapper from "./SlideWrapper";
import { ShoppingCart, AlertTriangle, TrendingUp } from "lucide-react";

const ocSemanal = [
  { semana: "Feb 13", uds: 1837 },
  { semana: "Feb 20", uds: 1537 },
  { semana: "Feb 27", uds: 2501 },
];

const maxUds = Math.max(...ocSemanal.map((s) => s.uds));
const tendencia = "+63%";

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
        OC del portal HEB · 6 SKUs de PDQ 45gr activos · PDQ 340gr sin OC
        registrada
      </p>

      <div className="flex gap-6 flex-1">
        {/* Left: OC 45gr trend */}
        <div className="flex-[3] bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-bold text-gray-800">
              Tendencia OC — PDQ 45gr
            </h3>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold">
              <TrendingUp className="w-3.5 h-3.5" />
              {tendencia} última semana
            </span>
          </div>

          <div className="flex items-end gap-8 justify-center h-[280px] pb-8">
            {ocSemanal.map((s, i) => {
              const heightPct = (s.uds / maxUds) * 100;
              return (
                <div key={i} className="flex flex-col items-center gap-2">
                  <span className="text-sm font-bold text-gray-800">
                    {s.uds.toLocaleString()}
                  </span>
                  <div className="w-24 relative" style={{ height: "220px" }}>
                    <div
                      className="absolute bottom-0 w-full rounded-t-lg bg-blue-500"
                      style={{ height: `${heightPct}%` }}
                    />
                  </div>
                  <span className="text-xs text-gray-500 font-medium">
                    {s.semana}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="mt-2 flex justify-center gap-6">
            <div className="text-center">
              <p className="text-[10px] text-gray-400">Ratio OC / Sell-out</p>
              <p className="text-sm font-bold text-gray-700">~30%</p>
              <p className="text-[10px] text-gray-400">
                OC cubre 30% de la demanda semanal
              </p>
            </div>
            <div className="text-center">
              <p className="text-[10px] text-gray-400">SKUs en OC</p>
              <p className="text-sm font-bold text-gray-700">6 de 6</p>
              <p className="text-[10px] text-gray-400">45gr: 100% cobertura</p>
            </div>
          </div>
        </div>

        {/* Right: Alerta 340gr */}
        <div className="flex-[2] flex flex-col gap-4">
          <div className="bg-red-50 rounded-xl border border-red-200 shadow-sm p-6 flex-1">
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="w-6 h-6 text-red-500" />
              <h3 className="text-base font-bold text-red-700">
                PDQ 340gr — Sin OC
              </h3>
            </div>
            <p className="text-sm text-gray-700 mb-4">
              Los 3 SKUs de 340gr no están registrados en el sistema de OC de
              HEB.
            </p>

            <div className="space-y-3">
              <div className="bg-white rounded-lg p-3 border border-red-100">
                <p className="text-[10px] text-gray-400 mb-1">
                  Única entrega
                </p>
                <p className="text-sm font-bold text-gray-800">
                  ~Feb 2-3, 2026
                </p>
                <p className="text-[10px] text-gray-500">
                  Entrega manual, sin reorden automático
                </p>
              </div>
              <div className="bg-white rounded-lg p-3 border border-red-100">
                <p className="text-[10px] text-gray-400 mb-1">
                  Tiendas con DDI &lt; 15
                </p>
                <p className="text-sm font-bold text-red-600">3 tiendas</p>
                <p className="text-[10px] text-gray-500">
                  Reforma, Eloy Cavazos, Anzures
                </p>
              </div>
              <div className="bg-white rounded-lg p-3 border border-red-100">
                <p className="text-[10px] text-gray-400 mb-1">SKUs afectados</p>
                <p className="text-sm font-bold text-gray-800">3 SKUs</p>
                <p className="text-[10px] text-gray-500">
                  Sal, Fuego, Jalapeño 340gr
                </p>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 rounded-xl border border-purple-200 shadow-sm p-4">
            <p className="text-xs font-bold text-purple-700 mb-1">
              Acción requerida
            </p>
            <p className="text-[11px] text-purple-600">
              Registrar 3 SKUs de 340gr en sistema de OC HEB para activar
              reorden automático
            </p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
