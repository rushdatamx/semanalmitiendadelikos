"use client";

import SlideWrapper from "./SlideWrapper";
import { Eye, ShieldAlert, XCircle } from "lucide-react";

interface TiendaRow {
  tienda: string;
  salDDI: number | null;
  salInv: number;
  fuegoDDI: number | null;
  fuegoInv: number;
  jalDDI: number | null;
  jalInv: number;
  status: "Agotado" | "Monitoreando" | "OK";
  sabor: string;
}

const tiendas: TiendaRow[] = [
  { tienda: "Valle Sta Maria", salDDI: null, salInv: 0, fuegoDDI: null, fuegoInv: 0, jalDDI: null, jalInv: 0, status: "Agotado", sabor: "Todos" },
  { tienda: "Aztlan", salDDI: null, salInv: 0, fuegoDDI: null, fuegoInv: 0, jalDDI: null, jalInv: 0, status: "Agotado", sabor: "Todos" },
  { tienda: "Reforma", salDDI: 6.8, salInv: 16, fuegoDDI: 24.8, fuegoInv: 39, jalDDI: 22.9, jalInv: 36, status: "Monitoreando", sabor: "Sal" },
  { tienda: "Fundadores", salDDI: 13.5, salInv: 44, fuegoDDI: 68.7, fuegoInv: 135, jalDDI: 23.5, jalInv: 62, status: "Monitoreando", sabor: "Sal" },
];

function ddiColor(ddi: number | null): string {
  if (ddi === null) return "bg-red-100 text-red-700";
  if (ddi < 15) return "bg-red-100 text-red-700";
  return "bg-green-100 text-green-700";
}

function statusBadge(status: TiendaRow["status"]) {
  if (status === "Agotado")
    return (
      <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-red-100 text-red-700 border border-red-200">
        Agotado
      </span>
    );
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

function DdiCell({ ddi, inv }: { ddi: number | null; inv: number }) {
  if (ddi === null) {
    return <span className="inline-block text-[11px] font-bold px-2 py-0.5 rounded-md bg-red-100 text-red-700">0 uds</span>;
  }
  return (
    <span className={`inline-block text-[11px] font-bold px-2 py-0.5 rounded-md ${ddiColor(ddi)}`}>
      {ddi.toFixed(1)}d
      {inv > 0 && <span className="font-normal ml-1">({inv} uds)</span>}
    </span>
  );
}

export default function SlideAlerta340() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <div className="flex items-center gap-3 mb-1">
        <XCircle className="w-7 h-7 text-red-500" />
        <h2 className="text-2xl font-bold text-gray-800">
          PDQ 340gr: Alerta — Sin OC en Sistema
        </h2>
      </div>
      <p className="text-sm text-gray-500 mb-5">
        2 tiendas agotadas + 2 con 1 sabor bajo umbral (DDI &lt; 15) · Sin OC activa · Inventario al 12-Abr-2026
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
                  t.status === "Agotado" ? "bg-red-50/50" : i % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                }`}
              >
                <td className="py-2.5 px-4">
                  <span className="text-sm font-semibold text-gray-800">{t.tienda}</span>
                </td>
                <td className="py-2.5 px-3 text-center"><DdiCell ddi={t.salDDI} inv={t.salInv} /></td>
                <td className="py-2.5 px-3 text-center"><DdiCell ddi={t.fuegoDDI} inv={t.fuegoInv} /></td>
                <td className="py-2.5 px-3 text-center"><DdiCell ddi={t.jalDDI} inv={t.jalInv} /></td>
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
        <div className="bg-red-50 rounded-lg p-3 text-center border border-red-200">
          <p className="text-red-600 text-xs font-bold">Agotadas</p>
          <p className="text-2xl font-bold text-gray-800">2</p>
          <p className="text-[10px] text-gray-500">Valle Sta Maria y Aztlan — envio manual</p>
        </div>
        <div className="bg-yellow-50 rounded-lg p-3 text-center border border-yellow-200">
          <p className="text-yellow-600 text-xs font-bold">Monitoreando</p>
          <p className="text-2xl font-bold text-gray-800">2</p>
          <p className="text-[10px] text-gray-500">Reforma (Sal 6.8d), Fundadores (Sal 13.5d)</p>
        </div>
        <div className="bg-green-50 rounded-lg p-3 text-center border border-green-200">
          <p className="text-green-600 text-xs font-bold">OK</p>
          <p className="text-2xl font-bold text-gray-800">21</p>
          <p className="text-[10px] text-gray-500">Tiendas con inventario saludable</p>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-purple-50 rounded-xl border border-purple-200 p-4 flex items-center gap-4">
        <ShieldAlert className="w-6 h-6 text-purple-600 flex-shrink-0" />
        <div>
          <p className="text-sm font-bold text-purple-800">
            Accion: Envio manual a Valle Sta Maria y Aztlan (240 pzs c/u) + Registrar 3 SKUs en sistema OC HEB
          </p>
          <p className="text-xs text-purple-600 mt-1">
            Papa Casera Sal 340gr · Papa Casera Fuego 340gr · Papa Casera Jalapeno 340gr
          </p>
        </div>
      </div>
    </SlideWrapper>
  );
}
