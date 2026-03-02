"use client";

import SlideWrapper from "./SlideWrapper";
import { AlertTriangle, Clock, ArrowRight } from "lucide-react";

const tiendasRiesgo = [
  { tienda: "MT MTY Anzures", sal: { ddi: 9.3, inv: 20 }, fuego: { ddi: 11.3, inv: 23 }, jal: { ddi: 5.0, inv: 12 }, diasRest: 4.4, status: "Urgente" },
  { tienda: "MT MTY Eloy Cavazos", sal: { ddi: 6.4, inv: 15 }, fuego: { ddi: 32.0, inv: 48 }, jal: { ddi: 13.5, inv: 26 }, diasRest: 5.9, status: "Urgente" },
  { tienda: "MT NVO Reforma", sal: { ddi: 7.4, inv: 17 }, fuego: { ddi: 26.0, inv: 40 }, jal: { ddi: 13.5, inv: 26 }, diasRest: 6.9, status: "Urgente" },
  { tienda: "MT MTY Huinala", sal: { ddi: 20.7, inv: 34 }, fuego: { ddi: 51.5, inv: 68 }, jal: { ddi: 15.6, inv: 34 }, diasRest: 15.2, status: "Bajo" },
];

function StatusBadge({ status }: { status: string }) {
  const cls =
    status === "Urgente"
      ? "bg-red-100 text-red-700"
      : "bg-yellow-100 text-yellow-700";
  return (
    <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold ${cls}`}>
      {status}
    </span>
  );
}

function DdiCell({ ddi, inv }: { ddi: number; inv: number }) {
  const low = ddi < 15;
  return (
    <span className={`text-xs font-semibold ${low ? "text-red-600" : "text-green-700"}`}>
      {ddi.toFixed(1)}d{" "}
      <span className="text-[10px] font-normal text-gray-400">({inv} uds)</span>
    </span>
  );
}

export default function SlideAlerta340() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <div className="flex items-center gap-3 mb-1">
        <AlertTriangle className="w-7 h-7 text-red-500" />
        <h2 className="text-2xl font-bold text-gray-800">
          Alerta: PDQ 340gr sin Orden de Compra
        </h2>
      </div>
      <p className="text-sm text-gray-500 mb-4">
        Los 3 SKUs de 340gr no están registrados en el sistema de OC de HEB
      </p>

      {/* Timeline */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 mb-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
              <Clock className="w-5 h-5 text-blue-600" />
            </div>
            <span className="text-xs font-bold text-blue-700 mt-1">
              Feb 2-3
            </span>
            <span className="text-[10px] text-gray-400">Entrega manual</span>
            <span className="text-[10px] text-gray-400">
              80 uds/sabor × 21 tiendas
            </span>
          </div>

          <div className="flex-1 mx-4 relative">
            <div className="h-1 bg-gradient-to-r from-blue-400 via-yellow-400 to-red-400 rounded-full" />
            <div className="absolute top-3 left-1/2 -translate-x-1/2">
              <span className="text-xs text-gray-500 font-medium">
                ~28 días sin reorden
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-red-600" />
            </div>
            <span className="text-xs font-bold text-red-700 mt-1">
              02-Mar
            </span>
            <span className="text-[10px] text-gray-400">Hoy</span>
            <span className="text-[10px] text-red-600 font-semibold">
              3 tiendas &lt;15 DDI
            </span>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-4">
        <table className="w-full text-xs">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left px-4 py-2.5 text-gray-600 font-semibold border-b border-gray-200 w-[28%]">
                Tienda
              </th>
              <th className="text-center px-3 py-2.5 text-gray-600 font-semibold border-b border-gray-200">
                Sal 340gr
              </th>
              <th className="text-center px-3 py-2.5 text-gray-600 font-semibold border-b border-gray-200">
                Fuego 340gr
              </th>
              <th className="text-center px-3 py-2.5 text-gray-600 font-semibold border-b border-gray-200">
                Jalapeño 340gr
              </th>
              <th className="text-center px-3 py-2.5 text-gray-600 font-semibold border-b border-gray-200 w-[12%]">
                Días Rest.
              </th>
              <th className="text-center px-3 py-2.5 text-gray-600 font-semibold border-b border-gray-200 w-[10%]">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {tiendasRiesgo.map((t, i) => {
              const rowBg =
                t.status === "Urgente" ? "bg-red-50/30" : "bg-yellow-50/30";
              return (
                <tr key={i} className={`border-b border-gray-100 last:border-0 ${rowBg}`}>
                  <td className="px-4 py-2.5 text-gray-800 font-medium">
                    {t.tienda}
                  </td>
                  <td className="text-center px-3 py-2.5">
                    <DdiCell ddi={t.sal.ddi} inv={t.sal.inv} />
                  </td>
                  <td className="text-center px-3 py-2.5">
                    <DdiCell ddi={t.fuego.ddi} inv={t.fuego.inv} />
                  </td>
                  <td className="text-center px-3 py-2.5">
                    <DdiCell ddi={t.jal.ddi} inv={t.jal.inv} />
                  </td>
                  <td className="text-center px-3 py-2.5">
                    <span className={`text-sm font-bold ${t.diasRest < 7 ? "text-red-600" : t.diasRest < 15 ? "text-yellow-600" : "text-green-700"}`}>
                      {t.diasRest.toFixed(1)}d
                    </span>
                  </td>
                  <td className="text-center px-3 py-2.5">
                    <StatusBadge status={t.status} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* CTA */}
      <div className="bg-purple-50 rounded-xl border-2 border-purple-200 p-4 flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
          <ArrowRight className="w-5 h-5 text-purple-600" />
        </div>
        <div>
          <p className="text-sm font-bold text-purple-800">
            Acción requerida: Registrar 3 SKUs de 340gr en sistema de OC HEB
          </p>
          <p className="text-xs text-purple-600 mt-0.5">
            Activar reorden automático para evitar agotamiento progresivo. Sin OC, cada tienda depende de entregas manuales.
          </p>
        </div>
      </div>
    </SlideWrapper>
  );
}
