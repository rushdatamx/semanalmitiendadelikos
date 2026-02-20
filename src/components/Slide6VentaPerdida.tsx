"use client";

import SlideWrapper from "./SlideWrapper";
import { TrendingUp, Store, Package } from "lucide-react";

/*
  Cálculo de venta perdida:
  - PDQ 340gr: venta promedio por periodo en tiendas activas (22) = $93,975 / 22 = ~$4,272/tienda
    → 4 tiendas sin producto × $4,272 = ~$17,087 por periodo
  - PDQ 45gr: 100% cobertura, 0 tiendas sin producto → $0
  - Total oportunidad: ~$17,087 por periodo

  Crecimiento PDQ 340gr: de $0 en P01-2026 a $93,975 en P03-2026 (3 periodos)
*/

export default function Slide6VentaPerdida() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10" hideFooter>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Venta Perdida y Potencial de Crecimiento
      </h2>

      {/* Hero number */}
      <div className="bg-gradient-to-br from-[#F5A623] to-[#E8950F] rounded-2xl p-8 text-white text-center mb-6 shadow-lg">
        <p className="text-sm opacity-90 mb-2">
          Oportunidad por periodo colocando PDQ 340gr en tiendas faltantes
        </p>
        <p className="text-6xl font-black tracking-tight">~$17,087</p>
        <p className="text-lg mt-2 opacity-90">MXN por periodo fiscal</p>
      </div>

      <div className="grid grid-cols-3 gap-6 flex-1">
        {/* Card 1: Tiendas sin PDQ */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <Store className="w-8 h-8 text-gray-400 mb-3" />
          <p className="text-4xl font-bold text-gray-800">4</p>
          <p className="text-sm text-gray-500 mt-1">
            Tiendas sin PDQ 340gr
          </p>
          <div className="mt-4 text-xs text-gray-400 space-y-1">
            <p>Cat Monterrey</p>
            <p>MT MTY Valle de Sta Maria</p>
            <p>MT MTY Aztlan</p>
            <p>MT REY Aeropuerto</p>
          </div>
        </div>

        {/* Card 2: Crecimiento */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <TrendingUp className="w-8 h-8 text-green-500 mb-3" />
          <p className="text-4xl font-bold text-green-600">+148%</p>
          <p className="text-sm text-gray-500 mt-1">
            Crecimiento PDQ 340gr P02→P03
          </p>
          <p className="text-xs text-gray-400 mt-4">
            De $37,833 a $93,975 en un periodo
          </p>
          <p className="text-xs text-gray-400 mt-1">
            Lanzamiento exitoso en solo 3 periodos
          </p>
        </div>

        {/* Card 3: PDQ 45gr */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <Package className="w-8 h-8 text-blue-500 mb-3" />
          <p className="text-4xl font-bold text-blue-600">100%</p>
          <p className="text-sm text-gray-500 mt-1">
            Cobertura PDQ 45gr
          </p>
          <p className="text-xs text-gray-400 mt-4">
            Presente en las 26 tiendas
          </p>
          <p className="text-xs text-gray-400 mt-1">
            Venta P03: $249,048
          </p>
          <p className="text-xs text-gray-400 mt-1">
            20 tiendas necesitan restock para mantener venta
          </p>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-500">
          Prioridad: surtir 39 restocks pendientes + colocar PDQ 340gr en 4 tiendas nuevas
        </p>
      </div>
    </SlideWrapper>
  );
}
