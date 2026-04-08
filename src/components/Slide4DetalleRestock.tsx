"use client";

import SlideWrapper from "./SlideWrapper";
import { AlertTriangle, CheckCircle, Eye } from "lucide-react";

export default function Slide4DetalleRestock() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-1">Detalle de Restocks por PDQ</h2>
      <p className="text-sm text-gray-500 mb-5">DDI &lt; 15 en 2+ sabores = Restock del PDQ completo · Inventario al 06-Abr-2026</p>

      {/* PDQ 340gr - No restocks needed */}
      <div className="space-y-3 mb-4">
        <div className="flex items-center gap-2 mb-1">
          <CheckCircle className="w-5 h-5 text-green-500" />
          <h3 className="text-base font-bold text-gray-800">PDQ 340gr — Sin restocks necesarios</h3>
          <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-600 border border-yellow-200">SIN OC EN SISTEMA</span>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white rounded-xl border border-yellow-200 shadow-sm p-4">
            <div className="flex items-center justify-between mb-1">
              <h4 className="text-sm font-bold text-gray-800">Anzures</h4>
              <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded-full bg-yellow-100 text-yellow-700">1 SABOR BAJO</span>
            </div>
            <p className="text-[11px] text-gray-500">Sal=16.9, Fuego=51.2, <span className="text-red-500 font-semibold">Jal=12.4</span> DDI</p>
            <p className="text-[11px] text-gray-400">Jalapeno bajo umbral — monitoreando</p>
          </div>
          <div className="bg-white rounded-xl border border-yellow-200 shadow-sm p-4">
            <div className="flex items-center justify-between mb-1">
              <h4 className="text-sm font-bold text-gray-800">Reforma</h4>
              <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded-full bg-yellow-100 text-yellow-700">1 SABOR BAJO</span>
            </div>
            <p className="text-[11px] text-gray-500"><span className="text-red-500 font-semibold">Sal=7.6</span>, Fuego=18.7, Jal=20.5 DDI</p>
            <p className="text-[11px] text-gray-400">Sal bajo umbral — monitoreando</p>
          </div>
          <div className="bg-white rounded-xl border border-yellow-200 shadow-sm p-4">
            <div className="flex items-center justify-between mb-1">
              <h4 className="text-sm font-bold text-gray-800">Fundadores</h4>
              <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded-full bg-yellow-100 text-yellow-700">1 SABOR BAJO</span>
            </div>
            <p className="text-[11px] text-gray-500"><span className="text-red-500 font-semibold">Sal=14.4</span>, Fuego=52.4, Jal=19.2 DDI</p>
            <p className="text-[11px] text-gray-400">Sal bajo umbral — monitoreando</p>
          </div>
        </div>
      </div>

      {/* Restock PDQ 45gr */}
      <div className="space-y-3 mb-4">
        <div className="flex items-center gap-2 mb-1">
          <AlertTriangle className="w-5 h-5 text-orange-500" />
          <h3 className="text-base font-bold text-gray-800">Restock — PDQ 45gr (1 tienda)</h3>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white rounded-xl border border-red-200 shadow-sm p-4">
            <div className="flex items-center justify-between mb-1">
              <h4 className="text-sm font-bold text-gray-800">Aztlan</h4>
              <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded-full bg-green-100 text-green-700">OC CONFIRMADA</span>
            </div>
            <p className="text-[11px] text-gray-500">Nat=0.1, Fuego=0.5, Jal=0.4 DDI</p>
            <p className="text-[11px] text-gray-400">3 sabores bajo umbral — prioridad alta</p>
          </div>
          <div className="bg-white rounded-xl border border-yellow-200 shadow-sm p-4">
            <div className="flex items-center justify-between mb-1">
              <h4 className="text-sm font-bold text-gray-800">Cabezada</h4>
              <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded-full bg-yellow-100 text-yellow-700">1 SABOR BAJO</span>
            </div>
            <p className="text-[11px] text-gray-500"><span className="text-red-500 font-semibold">Nat=13.4</span>, Fuego=31.4, Jal=29.1 DDI</p>
            <p className="text-[11px] text-gray-400">Natural bajo umbral — sin OC para ese sabor</p>
          </div>
        </div>
      </div>

      <div className="mt-auto grid grid-cols-2 gap-4">
        <div className="bg-green-50 rounded-lg p-3 text-center">
          <p className="text-green-500 text-xs font-bold mb-1">PDQ 340gr</p>
          <p className="text-gray-800 font-bold text-lg">0 restocks</p>
          <p className="text-gray-400 text-xs">3 tiendas con 1 sabor bajo — monitoreando</p>
        </div>
        <div className="bg-orange-50 rounded-lg p-3 text-center">
          <p className="text-orange-500 text-xs font-bold mb-1">PDQ 45gr</p>
          <p className="text-gray-800 font-bold text-lg">1 restock</p>
          <p className="text-gray-400 text-xs">Aztlan OC Confirmada · Cabezada 1 sabor bajo</p>
        </div>
      </div>
    </SlideWrapper>
  );
}
