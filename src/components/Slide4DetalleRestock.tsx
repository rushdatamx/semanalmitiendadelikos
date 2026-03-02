"use client";

import SlideWrapper from "./SlideWrapper";
import { AlertTriangle, EyeOff, Info } from "lucide-react";

export default function Slide4DetalleRestock() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-1">Detalle de Restocks e Inventario sin Venta</h2>
      <p className="text-sm text-gray-500 mb-5">DDI=0 con inventario = Sin Venta (tiene producto pero no vende) · DDI &gt; 0 y &lt; 15 días = Restock si 2+ sabores</p>

      {/* Restocks PDQ 340gr */}
      <div className="space-y-3 mb-4">
        <div className="flex items-center gap-2 mb-1">
          <AlertTriangle className="w-5 h-5 text-red-500" />
          <h3 className="text-base font-bold text-gray-800">Restock — PDQ 340gr (3 tiendas)</h3>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white rounded-xl border border-red-200 shadow-sm p-4">
            <div className="flex items-center justify-between mb-1">
              <h4 className="text-sm font-bold text-gray-800">Reforma</h4>
              <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded-full bg-red-100 text-red-600">Restock 340gr</span>
            </div>
            <p className="text-[11px] text-gray-500">Sal=7.4 DDI, Jalapeño=13.5 DDI</p>
            <p className="text-[11px] text-gray-400">Fuego OK (26.0 DDI)</p>
          </div>
          <div className="bg-white rounded-xl border border-red-200 shadow-sm p-4">
            <div className="flex items-center justify-between mb-1">
              <h4 className="text-sm font-bold text-gray-800">Eloy Cavazos</h4>
              <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded-full bg-red-100 text-red-600">Restock 340gr</span>
            </div>
            <p className="text-[11px] text-gray-500">Sal=6.4 DDI, Jalapeño=13.5 DDI</p>
            <p className="text-[11px] text-gray-400">Fuego OK (32.0 DDI)</p>
          </div>
          <div className="bg-white rounded-xl border border-red-200 shadow-sm p-4">
            <div className="flex items-center justify-between mb-1">
              <h4 className="text-sm font-bold text-gray-800">Anzures</h4>
              <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded-full bg-red-100 text-red-600">Restock 340gr</span>
            </div>
            <p className="text-[11px] text-gray-500">Sal=9.3, Fuego=11.3, Jal=5.0 DDI</p>
            <p className="text-[11px] text-gray-400">3 sabores bajo umbral</p>
          </div>
        </div>
      </div>

      {/* Restock PDQ 45gr */}
      <div className="space-y-3 mb-4">
        <div className="flex items-center gap-2 mb-1">
          <AlertTriangle className="w-5 h-5 text-red-500" />
          <h3 className="text-base font-bold text-gray-800">Restock — PDQ 45gr (2 tiendas)</h3>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white rounded-xl border border-red-200 shadow-sm p-4">
            <div className="flex items-center justify-between mb-1">
              <h4 className="text-sm font-bold text-gray-800">Las Brisas</h4>
              <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded-full bg-red-100 text-red-600">Restock 45gr</span>
            </div>
            <p className="text-[11px] text-gray-500">Natural=3.0, Fuego=3.6, Jalapeño=4.7 DDI</p>
            <p className="text-[11px] text-gray-400">Tienda con mayor venta — prioridad alta</p>
          </div>
          <div className="bg-white rounded-xl border border-red-200 shadow-sm p-4">
            <div className="flex items-center justify-between mb-1">
              <h4 className="text-sm font-bold text-gray-800">Reforma</h4>
              <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded-full bg-red-100 text-red-600">Restock 45gr</span>
            </div>
            <p className="text-[11px] text-gray-500">Natural=7.4, Jalapeño=9.2, Fuego=12.1 DDI</p>
            <p className="text-[11px] text-gray-400">3 sabores bajo umbral de 15 días</p>
          </div>
        </div>
      </div>

      {/* Sin Venta */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 mb-1">
          <EyeOff className="w-5 h-5 text-orange-500" />
          <h3 className="text-base font-bold text-gray-800">Inventario sin Venta — PDQ 340gr</h3>
        </div>
        <div className="grid grid-cols-1 gap-3">
          <div className="bg-white rounded-xl border border-orange-200 shadow-sm p-4">
            <div className="flex items-center justify-between mb-1">
              <h4 className="text-sm font-bold text-gray-800">Satélite</h4>
              <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded-full bg-orange-100 text-orange-600">Sin Venta 340gr</span>
            </div>
            <p className="text-[11px] text-gray-500">3 sabores con DDI=0 (160 uds c/u) — nunca han vendido, verificar exhibición</p>
          </div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-4">
        <div className="bg-red-50 rounded-lg p-3 text-center">
          <p className="text-red-500 text-xs font-bold mb-1">Restocks 340gr</p>
          <p className="text-gray-800 font-bold text-lg">3 tiendas</p>
          <p className="text-gray-400 text-xs">Reforma, Eloy Cavazos, Anzures</p>
        </div>
        <div className="bg-red-50 rounded-lg p-3 text-center">
          <p className="text-red-500 text-xs font-bold mb-1">Restocks 45gr</p>
          <p className="text-gray-800 font-bold text-lg">2 tiendas</p>
          <p className="text-gray-400 text-xs">Las Brisas, Reforma</p>
        </div>
        <div className="bg-orange-50 rounded-lg p-3 text-center">
          <p className="text-orange-500 text-xs font-bold mb-1">Sin Venta 340gr</p>
          <p className="text-gray-800 font-bold text-lg">1 tienda</p>
          <p className="text-gray-400 text-xs">Satélite — verificar exhibición</p>
        </div>
      </div>
    </SlideWrapper>
  );
}
