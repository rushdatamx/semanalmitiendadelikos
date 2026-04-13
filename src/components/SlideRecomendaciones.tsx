"use client";

import SlideWrapper from "./SlideWrapper";
import { ClipboardList } from "lucide-react";

const acciones = [
  {
    accion: "Envio Manual",
    pdq: "PDQ 340gr",
    tiendas: "Valle Sta Maria, Aztlan",
    nota: "2 tiendas agotadas — enviar 240 pzs (80/sabor) a cada una",
    color: "red",
  },
  {
    accion: "Registrar en OC",
    pdq: "PDQ 340gr",
    tiendas: "Todas",
    nota: "Dar de alta 3 SKUs de 340gr en sistema OC HEB",
    color: "purple",
  },
  {
    accion: "Solicitar OC",
    pdq: "PDQ 45gr",
    tiendas: "Reforma",
    nota: "3 sabores bajo umbral — sin OC, solicitar pedido adicional (1,260 pzs)",
    color: "red",
  },
  {
    accion: "Restock",
    pdq: "PDQ 45gr",
    tiendas: "Aztlan",
    nota: "3 sabores bajo umbral — OC CONFIRMADA (10-Abr)",
    color: "green",
  },
  {
    accion: "Monitoreando",
    pdq: "PDQ 340gr",
    tiendas: "Reforma (Sal 6.8d), Fundadores (Sal 13.5d)",
    nota: "1 sabor bajo umbral — proxima semana podrian necesitar restock",
    color: "yellow",
  },
];

const colorMap: Record<string, { bg: string; text: string; rowBg: string }> = {
  red: { bg: "bg-red-100", text: "text-red-700", rowBg: "bg-red-50/40" },
  orange: { bg: "bg-orange-100", text: "text-orange-700", rowBg: "bg-orange-50/40" },
  purple: { bg: "bg-purple-100", text: "text-purple-700", rowBg: "bg-purple-50/40" },
  yellow: { bg: "bg-yellow-100", text: "text-yellow-700", rowBg: "bg-yellow-50/40" },
  green: { bg: "bg-green-100", text: "text-green-700", rowBg: "bg-green-50/40" },
};

export default function SlideRecomendaciones() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10 justify-center">
      <div className="flex items-center gap-3 mb-2">
        <ClipboardList className="w-7 h-7 text-[#F5A623]" />
        <h2 className="text-2xl font-bold text-gray-800">Recomendaciones</h2>
      </div>
      <p className="text-sm text-gray-500 mb-6">
        Acciones basadas en analisis de inventario al 12-Abr-2026
      </p>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left px-5 py-3 text-sm text-gray-600 font-semibold border-b border-gray-200 w-[16%]">Accion</th>
              <th className="text-left px-5 py-3 text-sm text-gray-600 font-semibold border-b border-gray-200 w-[12%]">PDQ</th>
              <th className="text-left px-5 py-3 text-sm text-gray-600 font-semibold border-b border-gray-200 w-[34%]">Tiendas</th>
              <th className="text-left px-5 py-3 text-sm text-gray-600 font-semibold border-b border-gray-200 w-[38%]">Nota</th>
            </tr>
          </thead>
          <tbody>
            {acciones.map((a, i) => {
              const c = colorMap[a.color];
              return (
                <tr key={i} className={`border-b border-gray-100 last:border-0 ${c.rowBg}`}>
                  <td className="px-5 py-3">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${c.bg} ${c.text}`}>
                      {a.accion}
                    </span>
                  </td>
                  <td className="px-5 py-3 text-sm font-semibold text-gray-800">{a.pdq}</td>
                  <td className="px-5 py-3 text-sm text-gray-700">{a.tiendas}</td>
                  <td className="px-5 py-3 text-xs text-gray-500">{a.nota}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-4">
        <div className="bg-red-50 rounded-lg p-3 text-center border border-red-200">
          <p className="text-red-500 text-xs font-bold mb-1">Urgente</p>
          <p className="text-gray-800 font-bold text-lg">3 acciones</p>
          <p className="text-gray-400 text-[10px]">2 envios manual 340gr + 1 OC 45gr Reforma</p>
        </div>
        <div className="bg-green-50 rounded-lg p-3 text-center border border-green-200">
          <p className="text-green-500 text-xs font-bold mb-1">Confirmado</p>
          <p className="text-gray-800 font-bold text-lg">1 tienda</p>
          <p className="text-gray-400 text-[10px]">Aztlan 45gr — OC del 10-Abr</p>
        </div>
        <div className="bg-yellow-50 rounded-lg p-3 text-center border border-yellow-200">
          <p className="text-yellow-500 text-xs font-bold mb-1">Monitoreando</p>
          <p className="text-gray-800 font-bold text-lg">2 tiendas</p>
          <p className="text-gray-400 text-[10px]">Reforma y Fundadores (Sal 340gr bajando)</p>
        </div>
      </div>
    </SlideWrapper>
  );
}
