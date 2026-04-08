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
import { TrendingUp } from "lucide-react";

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
  v.toLocaleString("es-MX", { minimumFractionDigits: 0, maximumFractionDigits: 0 }) + " uds";

export default function SlidePostRestockTendencia() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <div className="flex items-center gap-3 mb-1">
        <TrendingUp className="w-6 h-6 text-gray-700" />
        <h2 className="text-2xl font-bold text-gray-800">
          Tendencia de Venta por Periodo Fiscal
        </h2>
      </div>
      <p className="text-sm text-gray-500 mb-4">
        Unidades vendidas &middot; P01 a P06 2026 &middot; Productos 100% nuevos (sin datos 2025)
      </p>

      <div className="grid grid-cols-2 gap-5 flex-1">
        {/* LEFT — PDQ 340gr */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 flex flex-col">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#F5A623]" />
              <span className="text-sm font-bold text-gray-700">PDQ 340gr</span>
            </div>
            <span className="text-[10px] px-2 py-0.5 bg-orange-50 text-orange-600 rounded-full font-medium">
              23 tiendas activas &middot; Lanzamiento P02-2026
            </span>
          </div>
          <div className="flex-1">
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={data340} margin={{ top: 10, right: 10, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
                <XAxis
                  dataKey="periodo"
                  tick={{ fill: "#666", fontSize: 12 }}
                  axisLine={{ stroke: "#ddd" }}
                />
                <YAxis
                  tickFormatter={fmtK}
                  tick={{ fill: "#999", fontSize: 11 }}
                  axisLine={{ stroke: "#ddd" }}
                  width={40}
                />
                <Tooltip
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  formatter={((value: any) => [fmtTooltip(Number(value) || 0), "Venta"]) as any}
                  contentStyle={{
                    borderRadius: "8px",
                    border: "1px solid #e5e7eb",
                    boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.05)",
                    fontSize: "12px",
                  }}
                />
                <Bar dataKey="uds" radius={[4, 4, 0, 0]}>
                  {data340.map((entry, i) => (
                    <Cell
                      key={entry.periodo}
                      fill={i === data340.length - 1 ? "#F5A623AA" : "#F5A623"}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex items-center justify-between mt-1 px-1">
            <span className="text-sm font-bold text-gray-800">
              Total: 8,988 uds <span className="text-gray-400 font-normal">($445K)</span>
            </span>
            <span className="text-[10px] text-gray-400 italic">P06 en curso</span>
          </div>
        </div>

        {/* RIGHT — PDQ 45gr */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 flex flex-col">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#3B82F6]" />
              <span className="text-sm font-bold text-gray-700">PDQ 45gr</span>
            </div>
            <span className="text-[10px] px-2 py-0.5 bg-blue-50 text-blue-600 rounded-full font-medium">
              26 tiendas activas &middot; Lanzamiento P01-2026
            </span>
          </div>
          <div className="flex-1">
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={data45} margin={{ top: 10, right: 10, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
                <XAxis
                  dataKey="periodo"
                  tick={{ fill: "#666", fontSize: 12 }}
                  axisLine={{ stroke: "#ddd" }}
                />
                <YAxis
                  tickFormatter={fmtK}
                  tick={{ fill: "#999", fontSize: 11 }}
                  axisLine={{ stroke: "#ddd" }}
                  width={40}
                />
                <Tooltip
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  formatter={((value: any) => [fmtTooltip(Number(value) || 0), "Venta"]) as any}
                  contentStyle={{
                    borderRadius: "8px",
                    border: "1px solid #e5e7eb",
                    boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.05)",
                    fontSize: "12px",
                  }}
                />
                <Bar dataKey="uds" radius={[4, 4, 0, 0]}>
                  {data45.map((entry, i) => (
                    <Cell
                      key={entry.periodo}
                      fill={i === data45.length - 1 ? "#3B82F6AA" : "#3B82F6"}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex items-center justify-between mt-1 px-1">
            <span className="text-sm font-bold text-gray-800">
              Total: 97,797 uds <span className="text-gray-400 font-normal">($1.1M)</span>
            </span>
            <span className="text-[10px] text-gray-400 italic">P06 en curso</span>
          </div>
        </div>
      </div>

      {/* Summary bar */}
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="bg-orange-50 border border-orange-200 rounded-lg px-4 py-2">
          <p className="text-xs text-orange-800">
            <strong>340gr:</strong> $445K en 5 periodos &middot; Crecimiento de 908 &rarr; 2,321 uds (<span className="font-bold">+156%</span>)
          </p>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-2">
          <p className="text-xs text-blue-800">
            <strong>45gr:</strong> $1.1M en 6 periodos &middot; Estable ~16-21K uds/periodo
          </p>
        </div>
      </div>
    </SlideWrapper>
  );
}
