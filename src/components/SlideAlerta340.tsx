"use client";

import SlideWrapper from "./SlideWrapper";
import { Eye, ShieldAlert } from "lucide-react";

interface TiendaRow {
  tienda: string;
  salDDI: number;
  salInv: number;
  fuegoDDI: number;
  fuegoInv: number;
  jalDDI: number;
  jalInv: number;
  status: "Monitoreando" | "OK";
  sabor: string;
}

const tiendas: TiendaRow[] = [
  { tienda: "Reforma", salDDI: 7.6, salInv: 30, fuegoDDI: 18.7, fuegoInv: 49, jalDDI: 20.5, jalInv: 49, status: "Monitoreando", sabor: "Sal" },
  { tienda: "Anzures", salDDI: 16.9, salInv: 52, fuegoDDI: 51.2, fuegoInv: 67, jalDDI: 12.4, jalInv: 39, status: "Monitoreando", sabor: "Jalapeno" },
  { tienda: "Fundadores", salDDI: 14.4, salInv: 59, fuegoDDI: 52.4, fuegoInv: 144, jalDDI: 19.2, jalInv: 72, status: "Monitoreando", sabor: "Sal" },
];

function ddiColor(ddi: number): string {
  if (ddi < 15) return "bg-red-100 text-red-700";
  return "bg-green-100 text-green-700";
}

function statusBadge(status: TiendaRow["status"]) {
  if (status === "Monitoreando")
    return (
      <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-700 border border-yellow-200">
        Monitoreando
      </span>
    );
  return (
    <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-green-100 text-green-700 border border-green-200">
      OK
    </span>
  );
}

export default function SlideAlerta340() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <div className="flex items-center gap-3 mb-1">
        <Eye className="w-7 h-7 text-yellow-500" />
        <h2 className="text-2xl font-bold text-gray-800">
          PDQ 340gr: Monitoreo — Sin OC en Sistema
        </h2>
      </div>
      <p className="text-sm text-gray-500 mb-5">
        Tiendas con 1 sabor bajo umbral (DDI &lt; 15) · Sin OC activa para reorden automatico · Inventario al 06-Abr-2026
      </p>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden mb-5">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="text-left py-2.5 px-4 text-xs font-bold text-gray-600 w-[18%]">Tienda</th>
              <th className="text-center py-2.5 px-3 text-xs font-bold text-gray-600 w-[18%]">Sal 340gr</th>
              <th className="text-center py-2.5 px-3 text-xs font-bold text-gray-600 w-[18%]">Fuego 340gr</th>
              <th className="text-center py-2.5 px-3 text-xs font-bold text-gray-600 w-[18%]">Jalapeno 340gr</th>
              <th className="text-center py-2.5 px-3 text-xs font-bold text-gray-600 w-[14%]">Sabor bajo</th>
              <th className="text-center py-2.5 px-3 text-xs font-bold text-gray-600 w-[14%]">Status</th>
            </tr>
          </thead>
          <tbody>
            {tiendas.map((t, i) => (
              <tr
                key={t.tienda}
                className={`border-b border-gray-100 ${
                  i % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                }`}
              >
                <td className="py-2.5 px-4">
                  <span className="text-sm font-semibold text-gray-800">{t.tienda}</span>
                </td>
                <td className="py-2.5 px-3 text-center">
                  <span className={`inline-block text-[11px] font-bold px-2 py-0.5 rounded-md ${ddiColor(t.salDDI)}`}>
                    {t.salDDI.toFixed(1)}d
                    {t.salInv > 0 && <span className="font-normal ml-1">({t.salInv} uds)</span>}
                  </span>
                </td>
                <td className="py-2.5 px-3 text-center">
                  <span className={`inline-block text-[11px] font-bold px-2 py-0.5 rounded-md ${ddiColor(t.fuegoDDI)}`}>
                    {t.fuegoDDI.toFixed(1)}d
                    {t.fuegoInv > 0 && <span className="font-normal ml-1">({t.fuegoInv} uds)</span>}
                  </span>
                </td>
                <td className="py-2.5 px-3 text-center">
                  <span className={`inline-block text-[11px] font-bold px-2 py-0.5 rounded-md ${ddiColor(t.jalDDI)}`}>
                    {t.jalDDI.toFixed(1)}d
                    {t.jalInv > 0 && <span className="font-normal ml-1">({t.jalInv} uds)</span>}
                  </span>
                </td>
                <td className="py-2.5 px-3 text-center">
                  <span className="text-[11px] font-semibold text-yellow-700">{t.sabor}</span>
                </td>
                <td className="py-2.5 px-3 text-center">
                  {statusBadge(t.status)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Summary row */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="bg-green-50 rounded-lg p-3 text-center border border-green-200">
          <p className="text-green-600 text-xs font-bold">Urgentes</p>
          <p className="text-2xl font-bold text-gray-800">0</p>
          <p className="text-[10px] text-gray-500">Ninguna tienda con 2+ sabores bajo umbral</p>
        </div>
        <div className="bg-yellow-50 rounded-lg p-3 text-center border border-yellow-200">
          <p className="text-yellow-600 text-xs font-bold">Monitoreando</p>
          <p className="text-2xl font-bold text-gray-800">3</p>
          <p className="text-[10px] text-gray-500">Reforma (Sal), Anzures (Jal), Fundadores (Sal)</p>
        </div>
        <div className="bg-green-50 rounded-lg p-3 text-center border border-green-200">
          <p className="text-green-600 text-xs font-bold">Entregas detectadas</p>
          <p className="text-2xl font-bold text-gray-800">Mar 24-27</p>
          <p className="text-[10px] text-gray-500">Ultima entrega registrada</p>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-purple-50 rounded-xl border border-purple-200 p-4 flex items-center gap-4">
        <ShieldAlert className="w-6 h-6 text-purple-600 flex-shrink-0" />
        <div>
          <p className="text-sm font-bold text-purple-800">
            Accion pendiente: Registrar 3 SKUs de 340gr en sistema de OC HEB para activar reorden automatico
          </p>
          <p className="text-xs text-purple-600 mt-1">
            Papa Casera Sal 340gr · Papa Casera Fuego 340gr · Papa Casera Jalapeno 340gr
          </p>
        </div>
      </div>
    </SlideWrapper>
  );
}
