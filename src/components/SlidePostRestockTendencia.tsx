"use client";

import SlideWrapper from "./SlideWrapper";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Cell,
} from "recharts";
import { Rocket, ArrowRight } from "lucide-react";

const data340 = [
  { periodo: "P01", uds: 0 },
  { periodo: "P02", uds: 908 },
  { periodo: "P03", uds: 2314 },
  { periodo: "P04", uds: 1818 },
  { periodo: "P05", uds: 2321 },
  { periodo: "P06", uds: 1627 },
];

const data45 = [
  { periodo: "P01", uds: 21818 },
  { periodo: "P02", uds: 10306 },
  { periodo: "P03", uds: 21164 },
  { periodo: "P04", uds: 16451 },
  { periodo: "P05", uds: 16231 },
  { periodo: "P06", uds: 11827 },
];

const fmtK = (v: number) => {
  if (v === 0) return "0";
  if (v >= 1000) return `${(v / 1000).toFixed(1)}K`;
  return String(v);
};

const fmtTooltip = (v: number) =>
  v.toLocaleString("es-MX") + " uds";

export default function SlidePostRestockTendencia() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <div className="flex items-center gap-3 mb-1">
        <Rocket className="w-7 h-7 text-[#F5A623]" />
        <h2 className="text-2xl font-bold text-gray-800">
          Producto nuevo, crecimiento real
        </h2>
      </div>
      <p className="text-sm text-gray-500 mb-4">
        Venta por periodo fiscal 2026 &middot; Ambos PDQs no existian en 2025
      </p>

      <div className="grid grid-cols-2 gap-5">
        {/* 340gr */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 flex flex-col">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#F5A623]" />
              <span className="text-sm font-bold text-gray-700">PDQ 340gr</span>
            </div>
            <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
              +156% P02→P05
            </span>
          </div>
          <div className="flex-1">
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={data340} margin={{ top: 10, right: 10, left: -10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
                <XAxis dataKey="periodo" tick={{ fill: "#666", fontSize: 12 }} axisLine={{ stroke: "#ddd" }} />
                <YAxis tickFormatter={fmtK} tick={{ fill: "#999", fontSize: 11 }} axisLine={{ stroke: "#ddd" }} width={40} />
                <Tooltip
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  formatter={((value: any) => [fmtTooltip(Number(value) || 0), "Venta"]) as any}
                  contentStyle={{ borderRadius: "8px", border: "1px solid #e5e7eb", fontSize: "12px" }}
                />
                <Bar dataKey="uds" radius={[4, 4, 0, 0]}>
                  {data340.map((entry, i) => (
                    <Cell key={entry.periodo} fill={i === data340.length - 1 ? "#F5A623AA" : "#F5A623"} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex items-center justify-between mt-2 text-xs">
            <span className="text-gray-800 font-bold">Total: 8,988 uds ($445K)</span>
            <span className="text-gray-400 italic">P06 en curso</span>
          </div>
        </div>

        {/* 45gr */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 flex flex-col">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#3B82F6]" />
              <span className="text-sm font-bold text-gray-700">PDQ 45gr</span>
            </div>
            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
              Estable ~16-21K/periodo
            </span>
          </div>
          <div className="flex-1">
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={data45} margin={{ top: 10, right: 10, left: -10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
                <XAxis dataKey="periodo" tick={{ fill: "#666", fontSize: 12 }} axisLine={{ stroke: "#ddd" }} />
                <YAxis tickFormatter={fmtK} tick={{ fill: "#999", fontSize: 11 }} axisLine={{ stroke: "#ddd" }} width={40} />
                <Tooltip
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  formatter={((value: any) => [fmtTooltip(Number(value) || 0), "Venta"]) as any}
                  contentStyle={{ borderRadius: "8px", border: "1px solid #e5e7eb", fontSize: "12px" }}
                />
                <Bar dataKey="uds" radius={[4, 4, 0, 0]}>
                  {data45.map((entry, i) => (
                    <Cell key={entry.periodo} fill={i === data45.length - 1 ? "#3B82F6AA" : "#3B82F6"} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex items-center justify-between mt-2 text-xs">
            <span className="text-gray-800 font-bold">Total: 97,797 uds ($1.1M)</span>
            <span className="text-gray-400 italic">P06 en curso</span>
          </div>
        </div>
      </div>

      {/* Bottom: the ask */}
      <div className="mt-5 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200 px-6 py-4">
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <p className="text-base font-bold text-gray-800 mb-1">
              De $0 a $1.5M en 6 periodos — sin existir en 2025
            </p>
            <p className="text-sm text-gray-600">
              340gr creciendo (+156%) y 45gr consolidado como producto estable.
              El restock del 24-Mar confirmo que con stock suficiente, la venta responde.
            </p>
          </div>
          <div className="flex flex-col items-center gap-1 bg-white rounded-xl px-5 py-3 border border-green-200 shadow-sm">
            <div className="flex items-center gap-2 text-green-600">
              <span className="text-xs">$0</span>
              <ArrowRight className="w-4 h-4" />
              <span className="text-lg font-bold">$1.5M</span>
            </div>
            <p className="text-[10px] text-gray-400">en 6 periodos fiscales</p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
