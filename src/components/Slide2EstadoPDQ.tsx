"use client";

import SlideWrapper from "./SlideWrapper";
import { Package } from "lucide-react";

const pdqData = [
  {
    tipo: "PDQ 340gr",
    piezas: "240 pzs (80 × sabor)",
    presencia: 22,
    restock: 19,
    sinProducto: 4,
    totalTiendas: 26,
    cobertura: 84.6,
  },
  {
    tipo: "PDQ 45gr",
    piezas: "1,260 pzs (420 × sabor)",
    presencia: 26,
    restock: 20,
    sinProducto: 0,
    totalTiendas: 26,
    cobertura: 100.0,
  },
];

export default function Slide2EstadoPDQ() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        Estado General de los 2 PDQs
      </h2>
      <p className="text-sm text-gray-500 mb-8">
        Regla: si cualquier sabor tiene inventario &lt; 30% de venta promedio
        por periodo → restock PDQ completo
      </p>

      <div className="grid grid-cols-2 gap-8 flex-1">
        {pdqData.map((pdq) => (
          <div
            key={pdq.tipo}
            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-6">
              <Package className="w-8 h-8 text-[#F5A623]" />
              <div>
                <h3 className="text-xl font-bold text-gray-800">{pdq.tipo}</h3>
                <p className="text-xs text-gray-400">{pdq.piezas}</p>
              </div>
            </div>

            {/* Cobertura bar */}
            <div className="mb-6">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Cobertura en cadena</span>
                <span className="font-bold text-gray-800">
                  {pdq.cobertura}%
                </span>
              </div>
              <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-green-400 to-green-500"
                  style={{ width: `${pdq.cobertura}%` }}
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-green-50 rounded-xl">
                <p className="text-3xl font-bold text-green-600">
                  {pdq.presencia - pdq.restock}
                </p>
                <p className="text-xs text-green-700 mt-1">Tiendas OK</p>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-xl">
                <p className="text-3xl font-bold text-orange-600">
                  {pdq.restock}
                </p>
                <p className="text-xs text-orange-700 mt-1">
                  Necesitan Restock
                </p>
              </div>
              <div className="text-center p-4 bg-gray-100 rounded-xl">
                <p className="text-3xl font-bold text-gray-600">
                  {pdq.sinProducto}
                </p>
                <p className="text-xs text-gray-500 mt-1">Sin Producto</p>
              </div>
            </div>

            <p className="text-xs text-gray-400 mt-4 text-center">
              {pdq.presencia} de {pdq.totalTiendas} tiendas con presencia
            </p>
          </div>
        ))}
      </div>
    </SlideWrapper>
  );
}
