"use client";

import SlideWrapper from "./SlideWrapper";
import { AlertTriangle, ShieldAlert } from "lucide-react";

interface TiendaRow {
  tienda: string;
  salDDI: number;
  salInv: number;
  fuegoDDI: number;
  fuegoInv: number;
  jalDDI: number;
  jalInv: number;
  status: "Urgente" | "1 sabor bajo" | "OK";
}

const tiendas: TiendaRow[] = [
  { tienda: "Anzures", salDDI: 7.3, salInv: 13, fuegoDDI: 9.0, fuegoInv: 16, jalDDI: 1.4, jalInv: 3, status: "Urgente" },
  { tienda: "Reforma", salDDI: 4.3, salInv: 8, fuegoDDI: 18.0, fuegoInv: 29, jalDDI: 7.6, jalInv: 12, status: "Urgente" },
  { tienda: "Eloy Cavazos", salDDI: 4.0, salInv: 7, fuegoDDI: 30.2, fuegoInv: 42, jalDDI: 7.1, jalInv: 14, status: "Urgente" },
  { tienda: "Plaza del Bosque", salDDI: 9.0, salInv: 20, fuegoDDI: 59.8, fuegoInv: 62, jalDDI: 42.8, jalInv: 52, status: "1 sabor bajo" },
  { tienda: "San Fernando", salDDI: 28.0, salInv: 0, fuegoDDI: 25.7, fuegoInv: 0, jalDDI: 16.1, jalInv: 0, status: "OK" },
  { tienda: "Huinala", salDDI: 16.5, salInv: 0, fuegoDDI: 42.7, fuegoInv: 0, jalDDI: 16.2, jalInv: 0, status: "OK" },
];

function ddiColor(ddi: number): string {
  if (ddi < 15) return "bg-red-100 text-red-700";
  return "bg-green-100 text-green-700";
}

function statusBadge(status: TiendaRow["status"]) {
  if (status === "Urgente")
    return (
      <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-red-100 text-red-700 border border-red-200">
        Urgente
      </span>
    );
  if (status === "1 sabor bajo")
    return (
      <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-700 border border-yellow-200">
        1 sabor bajo
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
        <ShieldAlert className="w-7 h-7 text-red-500" />
        <h2 className="text-2xl font-bold text-gray-800">
          Alerta: PDQ 340gr sin Orden de Compra
        </h2>
      </div>
      <p className="text-sm text-gray-500 mb-5">
        Tiendas con DDI &lt; 15 en al menos 1 sabor · Sin OC activa para reorden automatico · Inventario al 08-Mar-2026
      </p>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden mb-5">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="text-left py-2.5 px-4 text-xs font-bold text-gray-600 w-[18%]">Tienda</th>
              <th className="text-center py-2.5 px-3 text-xs font-bold text-gray-600 w-[20%]">Sal 340gr</th>
              <th className="text-center py-2.5 px-3 text-xs font-bold text-gray-600 w-[20%]">Fuego 340gr</th>
              <th className="text-center py-2.5 px-3 text-xs font-bold text-gray-600 w-[20%]">Jalapeno 340gr</th>
              <th className="text-center py-2.5 px-3 text-xs font-bold text-gray-600 w-[12%]">Status</th>
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
                  {statusBadge(t.status)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Summary row */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="bg-red-50 rounded-lg p-3 text-center border border-red-200">
          <p className="text-red-600 text-xs font-bold">Urgentes</p>
          <p className="text-2xl font-bold text-gray-800">3</p>
          <p className="text-[10px] text-gray-500">Anzures, Reforma, Eloy Cavazos</p>
        </div>
        <div className="bg-yellow-50 rounded-lg p-3 text-center border border-yellow-200">
          <p className="text-yellow-600 text-xs font-bold">Monitoreando</p>
          <p className="text-2xl font-bold text-gray-800">1</p>
          <p className="text-[10px] text-gray-500">Plaza del Bosque (Sal bajo)</p>
        </div>
        <div className="bg-green-50 rounded-lg p-3 text-center border border-green-200">
          <p className="text-green-600 text-xs font-bold">Estables</p>
          <p className="text-2xl font-bold text-gray-800">2</p>
          <p className="text-[10px] text-gray-500">San Fernando, Huinala</p>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-purple-50 rounded-xl border border-purple-200 p-4 flex items-center gap-4">
        <AlertTriangle className="w-6 h-6 text-purple-600 flex-shrink-0" />
        <div>
          <p className="text-sm font-bold text-purple-800">
            Accion requerida: Registrar 3 SKUs de 340gr en sistema de OC HEB para activar reorden automatico
          </p>
          <p className="text-xs text-purple-600 mt-1">
            Papa Casera Sal 340gr · Papa Casera Fuego 340gr · Papa Casera Jalapeno 340gr
          </p>
        </div>
      </div>
    </SlideWrapper>
  );
}
