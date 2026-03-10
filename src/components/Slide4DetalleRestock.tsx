"use client";

import SlideWrapper from "./SlideWrapper";
import { AlertTriangle } from "lucide-react";

export default function Slide4DetalleRestock() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-1">Detalle de Restocks por PDQ</h2>
      <p className="text-sm text-gray-500 mb-5">DDI &lt; 15 en 2+ sabores = Restock del PDQ completo · Inventario al 08-Mar-2026</p>

      {/* Restocks PDQ 340gr */}
      <div className="space-y-3 mb-4">
        <div className="flex items-center gap-2 mb-1">
          <AlertTriangle className="w-5 h-5 text-red-500" />
          <h3 className="text-base font-bold text-gray-800">Restock — PDQ 340gr (3 tiendas)</h3>
          <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-red-100 text-red-600 border border-red-200">SIN OC EN SISTEMA</span>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white rounded-xl border border-red-200 shadow-sm p-4">
            <div className="flex items-center justify-between mb-1">
              <h4 className="text-sm font-bold text-gray-800">Anzures</h4>
              <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded-full bg-red-100 text-red-600">SIN OC</span>
            </div>
            <p className="text-[11px] text-gray-500">Sal=7.3, Fuego=9.0, Jal=1.4 DDI</p>
            <p className="text-[11px] text-red-500 font-semibold">3 sabores bajo umbral — Mas critico</p>
          </div>
          <div className="bg-white rounded-xl border border-red-200 shadow-sm p-4">
            <div className="flex items-center justify-between mb-1">
              <h4 className="text-sm font-bold text-gray-800">Reforma</h4>
              <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded-full bg-red-100 text-red-600">SIN OC</span>
            </div>
            <p className="text-[11px] text-gray-500">Sal=4.3 DDI, Jal=7.6 DDI</p>
            <p className="text-[11px] text-gray-400">Fuego OK (18.0 DDI)</p>
          </div>
          <div className="bg-white rounded-xl border border-red-200 shadow-sm p-4">
            <div className="flex items-center justify-between mb-1">
              <h4 className="text-sm font-bold text-gray-800">Eloy Cavazos</h4>
              <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded-full bg-red-100 text-red-600">SIN OC</span>
            </div>
            <p className="text-[11px] text-gray-500">Sal=4.0 DDI, Jal=7.1 DDI</p>
            <p className="text-[11px] text-gray-400">Fuego OK (30.2 DDI)</p>
          </div>
        </div>
      </div>

      {/* Restock PDQ 45gr */}
      <div className="space-y-3 mb-4">
        <div className="flex items-center gap-2 mb-1">
          <AlertTriangle className="w-5 h-5 text-orange-500" />
          <h3 className="text-base font-bold text-gray-800">Restock — PDQ 45gr (4 tiendas)</h3>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white rounded-xl border border-red-200 shadow-sm p-4">
            <div className="flex items-center justify-between mb-1">
              <h4 className="text-sm font-bold text-gray-800">Las Brisas</h4>
              <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded-full bg-green-100 text-green-700">OC CONFIRMADA</span>
            </div>
            <p className="text-[11px] text-gray-500">Nat=3.5, Fuego=3.6, Jal=2.1 DDI</p>
            <p className="text-[11px] text-gray-400">3 sabores bajo umbral — prioridad alta</p>
          </div>
          <div className="bg-white rounded-xl border border-red-200 shadow-sm p-4">
            <div className="flex items-center justify-between mb-1">
              <h4 className="text-sm font-bold text-gray-800">Reforma</h4>
              <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded-full bg-green-100 text-green-700">OC CONFIRMADA</span>
            </div>
            <p className="text-[11px] text-gray-500">Nat=5.6, Jal=8.9 DDI</p>
            <p className="text-[11px] text-gray-400">Fuego OK (11.6 DDI) · 2 sabores bajo umbral</p>
          </div>
          <div className="bg-white rounded-xl border border-red-200 shadow-sm p-4">
            <div className="flex items-center justify-between mb-1">
              <h4 className="text-sm font-bold text-gray-800">Garcia</h4>
              <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded-full bg-red-100 text-red-600">FALTANTE - SIN OC</span>
            </div>
            <p className="text-[11px] text-gray-500">Fuego=11.3, Jal=13.7 DDI</p>
            <p className="text-[11px] text-gray-400">Natural OK (16.2 DDI) · 2 sabores bajo umbral</p>
          </div>
          <div className="bg-white rounded-xl border border-red-200 shadow-sm p-4">
            <div className="flex items-center justify-between mb-1">
              <h4 className="text-sm font-bold text-gray-800">Cabezada</h4>
              <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded-full bg-yellow-100 text-yellow-700">PARCIAL</span>
            </div>
            <p className="text-[11px] text-gray-500">Nat=12.0, Fuego=13.7 DDI</p>
            <p className="text-[11px] text-gray-400">Jal OK (26.0 DDI) · Falta Fuego en OC</p>
          </div>
        </div>
      </div>

      <div className="mt-auto grid grid-cols-2 gap-4">
        <div className="bg-red-50 rounded-lg p-3 text-center">
          <p className="text-red-500 text-xs font-bold mb-1">Restocks 340gr</p>
          <p className="text-gray-800 font-bold text-lg">3 tiendas</p>
          <p className="text-gray-400 text-xs">Anzures, Reforma, Eloy Cavazos · Todas SIN OC</p>
        </div>
        <div className="bg-orange-50 rounded-lg p-3 text-center">
          <p className="text-orange-500 text-xs font-bold mb-1">Restocks 45gr</p>
          <p className="text-gray-800 font-bold text-lg">4 tiendas</p>
          <p className="text-gray-400 text-xs">2 OC Confirmada · 1 Faltante · 1 Parcial</p>
        </div>
      </div>
    </SlideWrapper>
  );
}
