"use client";

import SlideWrapper from "./SlideWrapper";
import { Target } from "lucide-react";

const skuPenetracion = [
  { nombre: "Papa Deshidratada 190g", tiendas: 29, pct: 100, venta: 199389 },
  { nombre: "Durito Teja 20PZ", tiendas: 26, pct: 90, venta: 2322506 },
  { nombre: "Papa Natural 45g", tiendas: 26, pct: 90, venta: 642881 },
  { nombre: "Papa Jalapeño 45g", tiendas: 26, pct: 90, venta: 535168 },
  { nombre: "Papa Fuego 45g", tiendas: 26, pct: 90, venta: 517899 },
  { nombre: "Cheeto 400g", tiendas: 26, pct: 90, venta: 185675 },
  { nombre: "Papa Sal 340g", tiendas: 24, pct: 83, venta: 366413 },
  { nombre: "Papa Jalapeño 340g", tiendas: 24, pct: 83, venta: 338943 },
  { nombre: "Papa Fuego 340g", tiendas: 24, pct: 83, venta: 318892 },
];

const totalTiendas = 29;

export default function VtaSlide6Penetracion() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <div className="flex items-center gap-3 mb-1">
        <Target className="w-7 h-7 text-[#F5A623]" />
        <h2 className="text-3xl font-bold text-gray-800">Penetración de SKUs</h2>
      </div>
      <p className="text-gray-500 text-sm mb-4">Ene-Jul 2026 · Fill rate: 80.3% (233 de 290 combinaciones)</p>

      <div className="flex gap-5 flex-1">
        <div className="flex-1 bg-white rounded-xl border border-gray-200 shadow-sm p-4 overflow-hidden">
          <p className="text-gray-500 text-xs mb-2">SKUs por penetración (9 activos)</p>
          <div className="overflow-auto max-h-[420px]">
            <table className="w-full text-[12px]">
              <thead className="sticky top-0 bg-gray-50">
                <tr className="text-gray-500 text-left">
                  <th className="py-2 px-3 font-semibold">Producto</th>
                  <th className="py-2 px-3 font-semibold text-center">Tiendas</th>
                  <th className="py-2 px-3 font-semibold w-40">Penetración</th>
                  <th className="py-2 px-3 font-semibold text-right">Venta</th>
                </tr>
              </thead>
              <tbody>
                {skuPenetracion.map((s, i) => (
                  <tr key={i} className="border-b border-gray-50 hover:bg-gray-50">
                    <td className="py-2 px-3 text-gray-700">{s.nombre}</td>
                    <td className="py-2 px-3 text-center text-gray-600">{s.tiendas}/{totalTiendas}</td>
                    <td className="py-2 px-3">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-gray-100 rounded-full h-2.5">
                          <div
                            className="h-2.5 rounded-full"
                            style={{
                              width: `${s.pct}%`,
                              backgroundColor: s.pct === 100 ? "#27AE60" : s.pct >= 90 ? "#F7B500" : "#F5A623",
                            }}
                          />
                        </div>
                        <span className="text-gray-500 text-[10px] w-8">{s.pct}%</span>
                      </div>
                    </td>
                    <td className="py-2 px-3 text-right text-gray-800 font-semibold">
                      ${(s.venta / 1000).toFixed(0)}K
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="w-[280px] flex flex-col gap-3 justify-center">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 text-center">
            <p className="text-gray-400 text-xs mb-2">Fill Rate</p>
            <p className="text-[#F5A623] text-5xl font-bold">80.3%</p>
            <p className="text-gray-400 text-[10px] mt-2">233 de 290 combinaciones tienda-SKU</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 text-center">
            <p className="text-gray-400 text-xs mb-2">SKUs al 100%</p>
            <p className="text-[#27AE60] text-5xl font-bold">1</p>
            <p className="text-gray-400 text-[10px] mt-2">Papa Deshidratada en las 29 tiendas</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 text-center">
            <p className="text-gray-400 text-xs mb-2">SKUs ≥90%</p>
            <p className="text-[#F7B500] text-5xl font-bold">6</p>
            <p className="text-gray-400 text-[10px] mt-2">En 26 o más tiendas</p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
