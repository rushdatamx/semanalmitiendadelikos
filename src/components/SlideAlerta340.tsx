"use client";

import SlideWrapper from "./SlideWrapper";
import { AlertTriangle, Clock, ShieldAlert } from "lucide-react";

const tiendasRiesgo = [
  {
    tienda: "Anzures",
    sal: { ddi: 9.3, inv: 20 },
    fuego: { ddi: 11.3, inv: 23 },
    jal: { ddi: 5.0, inv: 12 },
    diasRestantes: 5,
    status: "Urgente",
  },
  {
    tienda: "Eloy Cavazos",
    sal: { ddi: 6.4, inv: 15 },
    fuego: { ddi: 32.0, inv: 48 },
    jal: { ddi: 13.5, inv: 26 },
    diasRestantes: 6,
    status: "Urgente",
  },
  {
    tienda: "Reforma",
    sal: { ddi: 7.4, inv: 17 },
    fuego: { ddi: 26.0, inv: 40 },
    jal: { ddi: 13.5, inv: 26 },
    diasRestantes: 7,
    status: "Bajo",
  },
];

const tiendasOK = [
  { tienda: "Huinala", ddiMin: 15.6 },
  { tienda: "Plaza del Bosque", ddiMin: 26.7 },
  { tienda: "Revolución", ddiMin: 27.3 },
  { tienda: "San Fernando", ddiMin: 25.3 },
  { tienda: "San Roque", ddiMin: 28.7 },
  { tienda: "Lincoln", ddiMin: 28.7 },
  { tienda: "Cabezada", ddiMin: 30.1 },
  { tienda: "García", ddiMin: 32.9 },
  { tienda: "Zuazua", ddiMin: 34.1 },
  { tienda: "Margaritas", ddiMin: 36.5 },
];

function DDICell({ ddi, inv }: { ddi: number; inv: number }) {
  const low = ddi < 15;
  return (
    <span
      className={`text-xs font-semibold ${low ? "text-red-600" : "text-green-700"}`}
    >
      {ddi.toFixed(1)}d{" "}
      <span className="text-[10px] font-normal text-gray-400">
        ({inv} uds)
      </span>
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
      <p className="text-sm text-gray-500 mb-4">
        Los 3 SKUs de 340gr no tienen OC en el sistema HEB · Entrega única
        manual (~Feb 2-3) · Sin reorden automático
      </p>

      {/* Timeline visual */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-4">
        <div className="flex items-center gap-3 mb-3">
          <Clock className="w-4 h-4 text-gray-400" />
          <span className="text-xs font-bold text-gray-600">
            Timeline desde entrega única
          </span>
        </div>
        <div className="relative h-8">
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-1 bg-gray-200 rounded-full" />
          {/* Delivery point */}
          <div className="absolute top-1/2 -translate-y-1/2 left-[5%]">
            <div className="w-4 h-4 rounded-full bg-green-500 border-2 border-white shadow -translate-y-0" />
            <span className="absolute top-5 left-1/2 -translate-x-1/2 text-[9px] text-gray-500 whitespace-nowrap">
              Feb 2-3
            </span>
          </div>
          {/* Umbral line */}
          <div className="absolute top-0 bottom-0 left-[75%] border-l-2 border-dashed border-red-400">
            <span className="absolute -top-1 left-2 text-[9px] text-red-500 font-semibold whitespace-nowrap">
              Umbral 15 DDI
            </span>
          </div>
          {/* Today */}
          <div className="absolute top-1/2 -translate-y-1/2 left-[85%]">
            <div className="w-4 h-4 rounded-full bg-blue-500 border-2 border-white shadow" />
            <span className="absolute top-5 left-1/2 -translate-x-1/2 text-[9px] text-blue-600 font-bold whitespace-nowrap">
              Hoy (Mar 1)
            </span>
          </div>
          {/* Progress bar */}
          <div className="absolute top-1/2 -translate-y-1/2 left-[5%] h-1 bg-gradient-to-r from-green-400 to-red-400 rounded-full" style={{ width: "80%" }} />
        </div>
      </div>

      {/* Tiendas en riesgo */}
      <div className="bg-white rounded-xl shadow-sm border border-red-200 overflow-hidden mb-4">
        <div className="flex items-center gap-2 px-5 py-2 bg-red-50 border-b border-red-100">
          <AlertTriangle className="w-4 h-4 text-red-500" />
          <span className="text-sm font-bold text-red-700">
            Tiendas en Riesgo — DDI &lt; 15 días
          </span>
        </div>
        <table className="w-full text-xs">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left px-4 py-2 text-gray-600 font-semibold border-b border-gray-200">
                Tienda
              </th>
              <th className="text-center px-3 py-2 text-gray-600 font-semibold border-b border-gray-200">
                Sal 340gr
              </th>
              <th className="text-center px-3 py-2 text-gray-600 font-semibold border-b border-gray-200">
                Fuego 340gr
              </th>
              <th className="text-center px-3 py-2 text-gray-600 font-semibold border-b border-gray-200">
                Jalapeño 340gr
              </th>
              <th className="text-center px-3 py-2 text-gray-600 font-semibold border-b border-gray-200">
                Días Restantes
              </th>
              <th className="text-center px-3 py-2 text-gray-600 font-semibold border-b border-gray-200">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {tiendasRiesgo.map((t, i) => (
              <tr
                key={i}
                className="border-b border-gray-100 last:border-0 bg-red-50/30"
              >
                <td className="px-4 py-2 text-gray-800 font-medium">
                  {t.tienda}
                </td>
                <td className="text-center px-3 py-2">
                  <DDICell ddi={t.sal.ddi} inv={t.sal.inv} />
                </td>
                <td className="text-center px-3 py-2">
                  <DDICell ddi={t.fuego.ddi} inv={t.fuego.inv} />
                </td>
                <td className="text-center px-3 py-2">
                  <DDICell ddi={t.jal.ddi} inv={t.jal.inv} />
                </td>
                <td className="text-center px-3 py-2">
                  <span className="text-sm font-bold text-red-600">
                    {t.diasRestantes}d
                  </span>
                </td>
                <td className="text-center px-3 py-2">
                  <span
                    className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                      t.status === "Urgente"
                        ? "bg-red-100 text-red-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {t.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Tiendas OK resumen */}
      <div className="flex gap-4">
        <div className="flex-1 bg-green-50 rounded-xl border border-green-200 p-3">
          <p className="text-xs font-bold text-green-700 mb-1">
            19 tiendas con DDI &gt; 15 — OK
          </p>
          <p className="text-[10px] text-green-600 leading-relaxed">
            {tiendasOK.map((t) => t.tienda).join(", ")} y 9 más con inventario
            saludable
          </p>
        </div>

        <div className="flex-1 bg-purple-50 rounded-xl border border-purple-200 p-3">
          <p className="text-xs font-bold text-purple-700 mb-1">
            Acción requerida
          </p>
          <p className="text-[10px] text-purple-600">
            Registrar 3 SKUs de 340gr en sistema de OC HEB para activar reorden
            automático. Sin OC, el inventario se agota sin reposición.
          </p>
        </div>
      </div>
    </SlideWrapper>
  );
}
