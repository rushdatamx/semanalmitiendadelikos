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
  ReferenceLine,
} from "recharts";
import { TrendingUp } from "lucide-react";

const weekly340 = [
  { week: "Sem 1", label: "Mar 9-15", uds: 498, avg: 71, type: "pre" },
  { week: "Sem 2", label: "Mar 16-22", uds: 503, avg: 72, type: "pre" },
  { week: "Sem 3", label: "Mar 23-29", uds: 455, avg: 65, type: "restock" },
  { week: "Sem 4", label: "Mar 30-Abr 5", uds: 963, avg: 138, type: "post" },
];

const weekly45 = [
  { week: "Sem 1", label: "Mar 9-15", uds: 4680, avg: 669, type: "pre" },
  { week: "Sem 2", label: "Mar 16-22", uds: 3139, avg: 448, type: "pre" },
  { week: "Sem 3", label: "Mar 23-29", uds: 3231, avg: 462, type: "restock" },
  { week: "Sem 4", label: "Mar 30-Abr 5", uds: 4297, avg: 614, type: "post" },
];

const fmtN = (v: number) => v.toLocaleString("es-MX");

const barColor = (type: string, base: string) => {
  if (type === "post") return base;
  if (type === "restock") return `${base}99`;
  return `${base}55`;
};

export default function SlidePostRestockConsumo() {
  const preAvg340 = Math.round((498 + 503) / 2);
  const postAvg340 = 963;
  const growth340 = Math.round(((postAvg340 - preAvg340) / preAvg340) * 100);

  const preAvg45 = Math.round((4680 + 3139) / 2);
  const postAvg45 = 4297;
  const growth45 = Math.round(((postAvg45 - preAvg45) / preAvg45) * 100);

  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <div className="flex items-center gap-3 mb-1">
        <TrendingUp className="w-7 h-7 text-[#27AE60]" />
        <h2 className="text-2xl font-bold text-gray-800">
          Tendencia de Venta Semanal
        </h2>
      </div>
      <p className="text-sm text-gray-500 mb-4">
        Unidades vendidas por semana &middot; Pre-restock vs Post-restock (24-Mar)
      </p>

      <div className="grid grid-cols-2 gap-5 flex-1">
        {/* 340gr */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 flex flex-col">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#F5A623]" />
              <span className="text-base font-bold text-gray-700">PDQ 340gr</span>
            </div>
            <span className={`text-sm font-bold px-3 py-1 rounded-full ${growth340 > 0 ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
              {growth340 > 0 ? "+" : ""}{growth340}% post-restock
            </span>
          </div>
          <div className="flex-1">
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={weekly340} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="week" tick={{ fill: "#666", fontSize: 12 }} axisLine={{ stroke: "#ddd" }} />
                <YAxis tick={{ fill: "#999", fontSize: 11 }} axisLine={{ stroke: "#ddd" }} />
                <Tooltip
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  formatter={((v: any) => [fmtN(Number(v)), "Unidades"]) as any}
                  labelFormatter={((label: any) => {
                    const item = weekly340.find(w => w.week === label);
                    return item ? item.label : String(label);
                  }) as any}
                  contentStyle={{ borderRadius: "8px", border: "1px solid #e5e7eb", fontSize: "12px" }}
                />
                <ReferenceLine y={preAvg340} stroke="#999" strokeDasharray="4 4" label={{ value: `Pre: ${fmtN(preAvg340)}/sem`, position: "insideTopRight", fill: "#999", fontSize: 10 }} />
                <Bar dataKey="uds" radius={[6, 6, 0, 0]} maxBarSize={60}>
                  {weekly340.map((entry, i) => (
                    <Cell key={i} fill={barColor(entry.type, "#F5A623")} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-3">
            <div className="text-center bg-gray-50 rounded-lg px-3 py-2">
              <p className="text-[10px] text-gray-400">Promedio pre-restock</p>
              <p className="text-lg font-bold text-gray-500">{fmtN(preAvg340)} uds/sem</p>
              <p className="text-[10px] text-gray-400">~71 uds/dia</p>
            </div>
            <div className="text-center bg-orange-50 rounded-lg px-3 py-2 border border-orange-200">
              <p className="text-[10px] text-orange-400">Post-restock (Sem 4)</p>
              <p className="text-lg font-bold text-[#F5A623]">{fmtN(postAvg340)} uds/sem</p>
              <p className="text-[10px] text-orange-400">~138 uds/dia</p>
            </div>
          </div>
        </div>

        {/* 45gr */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 flex flex-col">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#3B82F6]" />
              <span className="text-base font-bold text-gray-700">PDQ 45gr</span>
            </div>
            <span className={`text-sm font-bold px-3 py-1 rounded-full ${growth45 > 0 ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>
              {growth45 > 0 ? "+" : ""}{growth45}% post-restock
            </span>
          </div>
          <div className="flex-1">
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={weekly45} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="week" tick={{ fill: "#666", fontSize: 12 }} axisLine={{ stroke: "#ddd" }} />
                <YAxis tick={{ fill: "#999", fontSize: 11 }} axisLine={{ stroke: "#ddd" }} tickFormatter={(v: number) => `${(v / 1000).toFixed(1)}K`} />
                <Tooltip
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  formatter={((v: any) => [fmtN(Number(v)), "Unidades"]) as any}
                  labelFormatter={((label: any) => {
                    const item = weekly45.find(w => w.week === label);
                    return item ? item.label : String(label);
                  }) as any}
                  contentStyle={{ borderRadius: "8px", border: "1px solid #e5e7eb", fontSize: "12px" }}
                />
                <ReferenceLine y={preAvg45} stroke="#999" strokeDasharray="4 4" label={{ value: `Pre: ${fmtN(preAvg45)}/sem`, position: "insideTopRight", fill: "#999", fontSize: 10 }} />
                <Bar dataKey="uds" radius={[6, 6, 0, 0]} maxBarSize={60}>
                  {weekly45.map((entry, i) => (
                    <Cell key={i} fill={barColor(entry.type, "#3B82F6")} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-3">
            <div className="text-center bg-gray-50 rounded-lg px-3 py-2">
              <p className="text-[10px] text-gray-400">Promedio pre-restock</p>
              <p className="text-lg font-bold text-gray-500">{fmtN(preAvg45)} uds/sem</p>
              <p className="text-[10px] text-gray-400">~559 uds/dia</p>
            </div>
            <div className="text-center bg-blue-50 rounded-lg px-3 py-2 border border-blue-200">
              <p className="text-[10px] text-blue-400">Post-restock (Sem 4)</p>
              <p className="text-lg font-bold text-[#3B82F6]">{fmtN(postAvg45)} uds/sem</p>
              <p className="text-[10px] text-blue-400">~614 uds/dia</p>
            </div>
          </div>
        </div>
      </div>

      <p className="text-[10px] text-gray-400 mt-3 text-center">
        Consumo calculado de inventario diario &middot; Sem 3 incluye dias de entrega (restock 24-25 Mar) &middot; Barras claras = pre-restock, oscuras = post-restock
      </p>
    </SlideWrapper>
  );
}
