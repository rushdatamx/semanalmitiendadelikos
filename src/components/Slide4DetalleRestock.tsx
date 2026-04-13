"use client";

import SlideWrapper from "./SlideWrapper";
import { AlertTriangle, CheckCircle, XCircle } from "lucide-react";

export default function Slide4DetalleRestock() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-1">Detalle de Restocks por PDQ</h2>
      <p className="text-sm text-gray-500 mb-5">DDI &lt; 15 en 2+ sabores = Restock del PDQ completo · Inventario al 12-Abr-2026</p>

      {/* PDQ 340gr - 2 agotadas + 2 monitoreando */}
      <div className="space-y-3 mb-4">
        <div className="flex items-center gap-2 mb-1">
          <XCircle className="w-5 h-5 text-red-500" />
          <h3 className="text-base font-bold text-gray-800">PDQ 340gr — 2 tiendas agotadas</h3>
          <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-red-100 text-red-600 border border-red-200">SIN OC EN SISTEMA</span>
        </div>
        <div className="grid grid-cols-4 gap-3">
          <div className="bg-white rounded-xl border border-red-200 shadow-sm p-4">
            <div className="flex items-center justify-between mb-1">
              <h4 className="text-sm font-bold text-gray-800">Valle Sta Maria</h4>
              <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded-full bg-red-100 text-red-700">AGOTADO</span>
            </div>
            <p className="text-[11px] text-gray-500">Sal=0, Fuego=0, Jal=0 DDI</p>
            <p className="text-[11px] text-red-500 font-semibold">Sin inventario — envio manual urgente</p>
          </div>
          <div className="bg-white rounded-xl border border-red-200 shadow-sm p-4">
            <div className="flex items-center justify-between mb-1">
              <h4 className="text-sm font-bold text-gray-800">Aztlan</h4>
              <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded-full bg-red-100 text-red-700">AGOTADO</span>
            </div>
            <p className="text-[11px] text-gray-500">Sal=0, Fuego=0, Jal=0 DDI</p>
            <p className="text-[11px] text-red-500 font-semibold">Sin inventario — envio manual urgente</p>
          </div>
          <div className="bg-white rounded-xl border border-yellow-200 shadow-sm p-4">
            <div className="flex items-center justify-between mb-1">
              <h4 className="text-sm font-bold text-gray-800">Reforma</h4>
              <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded-full bg-yellow-100 text-yellow-700">1 SABOR BAJO</span>
            </div>
            <p className="text-[11px] text-gray-500"><span className="text-red-500 font-semibold">Sal=6.8</span>, Fuego=24.8, Jal=22.9 DDI</p>
            <p className="text-[11px] text-gray-400">Sal bajo umbral — monitoreando</p>
          </div>
          <div className="bg-white rounded-xl border border-yellow-200 shadow-sm p-4">
            <div className="flex items-center justify-between mb-1">
              <h4 className="text-sm font-bold text-gray-800">Fundadores</h4>
              <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded-full bg-yellow-100 text-yellow-700">1 SABOR BAJO</span>
            </div>
            <p className="text-[11px] text-gray-500"><span className="text-red-500 font-semibold">Sal=13.5</span>, Fuego=68.7, Jal=23.5 DDI</p>
            <p className="text-[11px] text-gray-400">Sal bajo umbral — monitoreando</p>
          </div>
        </div>
      </div>

      {/* Restock PDQ 45gr */}
      <div className="space-y-3 mb-4">
        <div className="flex items-center gap-2 mb-1">
          <AlertTriangle className="w-5 h-5 text-orange-500" />
          <h3 className="text-base font-bold text-gray-800">Restock — PDQ 45gr (2 tiendas)</h3>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white rounded-xl border border-red-200 shadow-sm p-4">
            <div className="flex items-center justify-between mb-1">
              <h4 className="text-sm font-bold text-gray-800">Reforma</h4>
              <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded-full bg-red-100 text-red-700">SIN OC</span>
            </div>
            <p className="text-[11px] text-gray-500"><span className="text-red-500 font-semibold">Nat=9.8, Fuego=13.2, Jal=13.8</span> DDI</p>
            <p className="text-[11px] text-gray-400">3 sabores bajo umbral — requiere OC adicional</p>
          </div>
          <div className="bg-white rounded-xl border border-green-200 shadow-sm p-4">
            <div className="flex items-center justify-between mb-1">
              <h4 className="text-sm font-bold text-gray-800">Aztlan</h4>
              <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded-full bg-green-100 text-green-700">OC CONFIRMADA</span>
            </div>
            <p className="text-[11px] text-gray-500"><span className="text-red-500 font-semibold">Nat=5.2, Fuego=5.7, Jal=10.5</span> DDI</p>
            <p className="text-[11px] text-gray-400">3 sabores bajo umbral — OC del 10-Abr</p>
          </div>
        </div>
      </div>

      <div className="mt-auto grid grid-cols-2 gap-4">
        <div className="bg-red-50 rounded-lg p-3 text-center">
          <p className="text-red-500 text-xs font-bold mb-1">PDQ 340gr</p>
          <p className="text-gray-800 font-bold text-lg">2 agotadas</p>
          <p className="text-gray-400 text-xs">Valle Sta Maria + Aztlan · Envio manual · 2 tiendas monitoreando</p>
        </div>
        <div className="bg-orange-50 rounded-lg p-3 text-center">
          <p className="text-orange-500 text-xs font-bold mb-1">PDQ 45gr</p>
          <p className="text-gray-800 font-bold text-lg">2 restocks</p>
          <p className="text-gray-400 text-xs">Aztlan OC confirmada · Reforma sin OC (solicitar)</p>
        </div>
      </div>
    </SlideWrapper>
  );
}
