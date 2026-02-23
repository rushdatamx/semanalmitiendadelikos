"use client";

import SlideWrapper from "./SlideWrapper";
import { EyeOff, AlertTriangle, Info } from "lucide-react";

interface Problema {
  tienda: string;
  producto: string;
  pdq: string;
  inv: number;
  ultimaVenta: string;
  diasSinVenta: number | null;
}

const problemas: Problema[] = [
  { tienda: "MT MAT Las Brisas", producto: "Papa Casera Sal 340gr", pdq: "340gr", inv: 81, ultimaVenta: "19-Ene-2026", diasSinVenta: 34 },
  { tienda: "MT MAT Las Brisas", producto: "Papa Casera Fuego 340gr", pdq: "340gr", inv: 80, ultimaVenta: "19-Ene-2026", diasSinVenta: 34 },
  { tienda: "MT SAL Satelite", producto: "Papa Casera Sal 340gr", pdq: "340gr", inv: 160, ultimaVenta: "Nunca", diasSinVenta: null },
  { tienda: "MT SAL Satelite", producto: "Papa Casera Fuego 340gr", pdq: "340gr", inv: 160, ultimaVenta: "Nunca", diasSinVenta: null },
  { tienda: "MT SAL Satelite", producto: "Papa Casera Jalapeño 340gr", pdq: "340gr", inv: 160, ultimaVenta: "Nunca", diasSinVenta: null },
  { tienda: "MT MTY Buena Vista", producto: "Papa Casera Sal 340gr", pdq: "340gr", inv: 160, ultimaVenta: "Nunca", diasSinVenta: null },
  { tienda: "MT MTY Buena Vista", producto: "Papa Casera Fuego 340gr", pdq: "340gr", inv: 160, ultimaVenta: "Nunca", diasSinVenta: null },
  { tienda: "MT MTY Buena Vista", producto: "Papa Casera Jalapeño 340gr", pdq: "340gr", inv: 160, ultimaVenta: "Nunca", diasSinVenta: null },
];

export default function Slide11Anaquel() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <div className="flex items-center gap-3 mb-1">
        <EyeOff className="w-7 h-7 text-red-500" />
        <h2 className="text-2xl font-bold text-gray-800">Problemas de Anaquel</h2>
      </div>
      <p className="text-sm text-gray-500 mb-4">
        Productos con inventario &gt; 0 pero sin venta en los últimos 15 días (8 Feb – 22 Feb 2026) · Posible falta de exhibición
      </p>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-4">
        <table className="w-full text-xs">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left px-4 py-2 text-gray-600 font-semibold border-b border-gray-200">Tienda</th>
              <th className="text-left px-3 py-2 text-gray-600 font-semibold border-b border-gray-200">Producto</th>
              <th className="text-center px-3 py-2 text-gray-600 font-semibold border-b border-gray-200">PDQ</th>
              <th className="text-center px-3 py-2 text-gray-600 font-semibold border-b border-gray-200">Inventario</th>
              <th className="text-center px-3 py-2 text-gray-600 font-semibold border-b border-gray-200">Última venta</th>
              <th className="text-center px-3 py-2 text-gray-600 font-semibold border-b border-gray-200">Días sin venta</th>
            </tr>
          </thead>
          <tbody>
            {problemas.map((p, i) => {
              const isNunca = p.diasSinVenta === null;
              const prevTienda = i > 0 ? problemas[i - 1].tienda : "";
              const showTienda = p.tienda !== prevTienda;

              return (
                <tr key={i} className="border-b border-gray-100 last:border-0 hover:bg-gray-50/50">
                  <td className="px-4 py-2 text-gray-800 font-medium">
                    {showTienda ? p.tienda : ""}
                  </td>
                  <td className="px-3 py-2 text-gray-700">{p.producto}</td>
                  <td className="text-center px-3 py-2">
                    <span className="text-[9px] px-1.5 py-0.5 rounded font-semibold bg-[#F5A623]/15 text-[#B8860B]">
                      {p.pdq}
                    </span>
                  </td>
                  <td className="text-center px-3 py-2 font-semibold text-gray-800">{p.inv} uds</td>
                  <td className="text-center px-3 py-2">
                    <span className={isNunca ? "text-red-500 font-semibold" : "text-gray-600"}>
                      {p.ultimaVenta}
                    </span>
                  </td>
                  <td className="text-center px-3 py-2">
                    {isNunca ? (
                      <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold bg-red-100 text-red-600">Sin venta</span>
                    ) : (
                      <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold bg-orange-100 text-orange-600">{p.diasSinVenta}d</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Tienda detail cards */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="bg-white rounded-lg border border-red-200 shadow-sm p-3">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-4 h-4 text-red-500" />
            <span className="text-xs font-bold text-gray-800">Las Brisas</span>
          </div>
          <p className="text-[10px] text-gray-500 mb-1">2 de 3 sabores 340gr sin venta (34 días)</p>
          <p className="text-[10px] text-gray-500">Jalapeño 340gr sí vende · PDQ 45gr activo ($10.8K en 15d)</p>
        </div>
        <div className="bg-white rounded-lg border border-red-200 shadow-sm p-3">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-4 h-4 text-red-500" />
            <span className="text-xs font-bold text-gray-800">Satélite</span>
          </div>
          <p className="text-[10px] text-gray-500 mb-1">3 de 3 sabores 340gr nunca han vendido</p>
          <p className="text-[10px] text-gray-500">PDQ 45gr sí vende ($3.5K en 15d) · PDQ 340gr sin exhibir</p>
        </div>
        <div className="bg-white rounded-lg border border-red-200 shadow-sm p-3">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-4 h-4 text-red-500" />
            <span className="text-xs font-bold text-gray-800">Buena Vista</span>
          </div>
          <p className="text-[10px] text-gray-500 mb-1">3 de 3 sabores 340gr nunca han vendido</p>
          <p className="text-[10px] text-gray-500">PDQ 45gr sí vende ($4.6K en 15d) · PDQ 340gr sin exhibir</p>
        </div>
      </div>

      <div className="flex items-center gap-2 bg-orange-50 rounded-lg px-4 py-2.5">
        <Info className="w-4 h-4 text-orange-500 flex-shrink-0" />
        <p className="text-[11px] text-gray-600">
          <span className="font-semibold">Conclusión:</span> Los 8 problemas son del PDQ 340gr. Las 3 tiendas venden PDQ 45gr activamente, lo que sugiere que el PDQ 340gr no está exhibido en anaquel. Acción: verificar exhibición física del PDQ 340gr en estas tiendas.
        </p>
      </div>
    </SlideWrapper>
  );
}
