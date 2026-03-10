"use client";

import SlideWrapper from "./SlideWrapper";
import { AlertTriangle, TrendingUp } from "lucide-react";

const ocData = [
  { week: "09-Ene", uds: 135 },
  { week: "16-Ene", uds: 315 },
  { week: "23-Ene", uds: 1530 },
  { week: "30-Ene", uds: 2295 },
  { week: "06-Feb", uds: 945 },
  { week: "13-Feb", uds: 360 },
  { week: "20-Feb", uds: 315 },
  { week: "27-Feb", uds: 990 },
  { week: "06-Mar", uds: 1035 },
];

const maxUds = Math.max(...ocData.map((d) => d.uds));

export default function SlideOrdenesCompra() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-1">
        Ordenes de Compra — Analisis Semanal
      </h2>
      <p className="text-sm text-gray-500 mb-6">
        Tendencia de OC registradas en sistema HEB · PDQ 45gr y alerta PDQ 340gr
      </p>

      <div className="flex gap-6 flex-1 min-h-0">
        {/* Left: Bar chart PDQ 45gr */}
        <div className="w-[58%] bg-white rounded-xl border border-gray-200 shadow-sm p-5 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-green-600" />
              <h3 className="text-sm font-bold text-gray-800">
                OC Semanal — PDQ 45gr
              </h3>
            </div>
            <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-green-100 text-green-700">
              +5% vs anterior
            </span>
          </div>

          <div className="flex items-end gap-2 flex-1 min-h-0 pb-1">
            {ocData.map((d, i) => {
              const heightPct = (d.uds / maxUds) * 100;
              const isLast = i === ocData.length - 1;
              return (
                <div
                  key={d.week}
                  className="flex-1 flex flex-col items-center justify-end h-full"
                >
                  <span
                    className={`text-[9px] font-bold mb-1 ${
                      isLast ? "text-green-700" : "text-gray-500"
                    }`}
                  >
                    {d.uds.toLocaleString()}
                  </span>
                  <div
                    className={`w-full rounded-t-md transition-all ${
                      isLast
                        ? "bg-gradient-to-t from-green-500 to-green-400"
                        : "bg-gradient-to-t from-[#F5A623] to-[#F5C563]"
                    }`}
                    style={{ height: `${Math.max(heightPct, 3)}%` }}
                  />
                  <span className="text-[8px] text-gray-400 mt-1 leading-tight text-center">
                    {d.week}
                  </span>
                </div>
              );
            })}
          </div>

          <p className="text-[10px] text-gray-400 mt-2 text-center">
            Unidades solicitadas por semana en OC HEB · PDQ 45gr (3 sabores)
          </p>
        </div>

        {/* Right: Alert card PDQ 340gr */}
        <div className="w-[42%] flex flex-col gap-4">
          <div className="bg-red-50 rounded-xl border border-red-200 shadow-sm p-5 flex-1 flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="w-6 h-6 text-red-500" />
              <h3 className="text-base font-bold text-red-700">
                PDQ 340gr — Sin OC
              </h3>
            </div>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">
              Los 3 SKUs de 340gr no estan registrados en el sistema de OC de
              HEB. Sin orden de compra activa, no hay reorden automatico.
            </p>

            <div className="space-y-3 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-red-500" />
                <p className="text-sm text-gray-700">
                  <span className="font-bold">3 tiendas</span> con &lt;15 DDI
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-red-500" />
                <p className="text-sm text-gray-700">
                  <span className="font-bold">3 SKUs</span> sin registro OC
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-red-500" />
                <p className="text-sm text-gray-700">
                  Riesgo de <span className="font-bold">quiebre de stock</span>
                </p>
              </div>
            </div>

            <div className="mt-auto bg-red-100 rounded-lg p-3 border border-red-200">
              <p className="text-xs font-bold text-red-700 text-center">
                Accion: Registrar en OC HEB
              </p>
              <p className="text-[10px] text-red-600 text-center mt-1">
                Sal 340gr · Fuego 340gr · Jalapeno 340gr
              </p>
            </div>
          </div>

          <div className="bg-green-50 rounded-xl border border-green-200 shadow-sm p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-green-700">PDQ 45gr en OC</p>
                <p className="text-[10px] text-green-600 mt-0.5">
                  Ultima semana: 1,035 uds
                </p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-green-700">9 semanas</p>
                <p className="text-[10px] text-green-600">con OC activa</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
