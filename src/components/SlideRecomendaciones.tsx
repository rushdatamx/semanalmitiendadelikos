"use client";

import SlideWrapper from "./SlideWrapper";
import { ClipboardList } from "lucide-react";

const acciones = [
  {
    accion: "Registrar en OC",
    pdq: "PDQ 340gr",
    tiendas: "Todas (22)",
    nota: "Dar de alta 3 SKUs en sistema OC HEB para reorden automático",
    color: "purple",
  },
  {
    accion: "Restock",
    pdq: "PDQ 340gr",
    tiendas: "Reforma, Eloy Cavazos, Anzures",
    nota: "2-3 sabores con DDI bajo 15 días — Anzures el más crítico",
    color: "red",
  },
  {
    accion: "Restock",
    pdq: "PDQ 45gr",
    tiendas: "Las Brisas, Reforma",
    nota: "3 sabores con DDI bajo 15 días — Las Brisas prioridad alta (3-5 DDI)",
    color: "red",
  },
  {
    accion: "Verificar anaquel",
    pdq: "PDQ 340gr",
    tiendas: "Satélite",
    nota: "Tiene inventario (160 uds c/sabor) pero DDI=0 — sin rotación",
    color: "orange",
  },
];

const colorMap: Record<string, { bg: string; text: string; rowBg: string }> = {
  purple: { bg: "bg-purple-100", text: "text-purple-700", rowBg: "bg-purple-50/40" },
  red: { bg: "bg-red-100", text: "text-red-700", rowBg: "bg-red-50/40" },
  orange: { bg: "bg-orange-100", text: "text-orange-700", rowBg: "bg-orange-50/40" },
};

export default function SlideRecomendaciones() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10 justify-center">
      <div className="flex items-center gap-3 mb-2">
        <ClipboardList className="w-7 h-7 text-[#F5A623]" />
        <h2 className="text-2xl font-bold text-gray-800">Recomendaciones</h2>
      </div>
      <p className="text-sm text-gray-500 mb-6">
        Acciones puntuales basadas en el análisis de inventario al 01-Mar-2026
      </p>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left px-5 py-3 text-sm text-gray-600 font-semibold border-b border-gray-200 w-[18%]">Acción</th>
              <th className="text-left px-5 py-3 text-sm text-gray-600 font-semibold border-b border-gray-200 w-[14%]">PDQ</th>
              <th className="text-left px-5 py-3 text-sm text-gray-600 font-semibold border-b border-gray-200 w-[34%]">Tiendas</th>
              <th className="text-left px-5 py-3 text-sm text-gray-600 font-semibold border-b border-gray-200 w-[34%]">Nota</th>
            </tr>
          </thead>
          <tbody>
            {acciones.map((a, i) => {
              const c = colorMap[a.color];
              return (
                <tr key={i} className={`border-b border-gray-100 last:border-0 ${c.rowBg}`}>
                  <td className="px-5 py-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${c.bg} ${c.text}`}>
                      {a.accion}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-sm font-semibold text-gray-800">{a.pdq}</td>
                  <td className="px-5 py-4 text-sm text-gray-700">{a.tiendas}</td>
                  <td className="px-5 py-4 text-xs text-gray-500">{a.nota}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-4">
        <div className="bg-purple-50 rounded-lg p-3 text-center border border-purple-200">
          <p className="text-purple-600 text-xs font-bold mb-1">Registrar en OC</p>
          <p className="text-gray-800 font-bold text-lg">3 SKUs</p>
          <p className="text-gray-400 text-[10px]">340gr sin OC en sistema HEB</p>
        </div>
        <div className="bg-red-50 rounded-lg p-3 text-center border border-red-200">
          <p className="text-red-500 text-xs font-bold mb-1">Restocks</p>
          <p className="text-gray-800 font-bold text-lg">5 tiendas</p>
          <p className="text-gray-400 text-[10px]">3 de 340gr + 2 de 45gr</p>
        </div>
        <div className="bg-orange-50 rounded-lg p-3 text-center border border-orange-200">
          <p className="text-orange-500 text-xs font-bold mb-1">Verificar anaquel</p>
          <p className="text-gray-800 font-bold text-lg">1 tienda</p>
          <p className="text-gray-400 text-[10px]">Satélite — inventario sin rotación</p>
        </div>
      </div>
    </SlideWrapper>
  );
}
