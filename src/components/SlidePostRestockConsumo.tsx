"use client";

import SlideWrapper from "./SlideWrapper";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ReferenceLine,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const daily340 = [
  { date: "03/09", inv: 3933 },
  { date: "03/10", inv: 3870 },
  { date: "03/11", inv: 3795 },
  { date: "03/12", inv: 3729 },
  { date: "03/13", inv: 3651 },
  { date: "03/14", inv: 3528 },
  { date: "03/15", inv: 3435 },
  { date: "03/16", inv: 3341 },
  { date: "03/17", inv: 3293 },
  { date: "03/18", inv: 3245 },
  { date: "03/19", inv: 3171 },
  { date: "03/20", inv: 3106 },
  { date: "03/21", inv: 3028 },
  { date: "03/22", inv: 2932 },
  { date: "03/23", inv: 2897 },
  { date: "03/24", inv: 6696 },
  { date: "03/25", inv: 8571 },
  { date: "03/26", inv: 8487 },
  { date: "03/27", inv: 8402 },
  { date: "03/28", inv: 8287 },
  { date: "03/29", inv: 8151 },
  { date: "03/30", inv: 8066 },
  { date: "03/31", inv: 7966 },
  { date: "04/01", inv: 7835 },
  { date: "04/02", inv: 7640 },
  { date: "04/03", inv: 7450 },
  { date: "04/04", inv: 7323 },
  { date: "04/05", inv: 7188 },
  { date: "04/06", inv: 7124 },
];

const daily45 = [
  { date: "03/09", inv: 24367 },
  { date: "03/10", inv: 23523 },
  { date: "03/11", inv: 22885 },
  { date: "03/12", inv: 21563 },
  { date: "03/13", inv: 21039 },
  { date: "03/14", inv: 20088 },
  { date: "03/15", inv: 19687 },
  { date: "03/16", inv: 19149 },
  { date: "03/17", inv: 18651 },
  { date: "03/18", inv: 18812 },
  { date: "03/19", inv: 18683 },
  { date: "03/20", inv: 17998 },
  { date: "03/21", inv: 17374 },
  { date: "03/22", inv: 16709 },
  { date: "03/23", inv: 16322 },
  { date: "03/24", inv: 38679 },
  { date: "03/25", inv: 46393 },
  { date: "03/26", inv: 46636 },
  { date: "03/27", inv: 45855 },
  { date: "03/28", inv: 44894 },
  { date: "03/29", inv: 43792 },
  { date: "03/30", inv: 43098 },
  { date: "03/31", inv: 42176 },
  { date: "04/01", inv: 42009 },
  { date: "04/02", inv: 41537 },
  { date: "04/03", inv: 41238 },
  { date: "04/04", inv: 40335 },
  { date: "04/05", inv: 39495 },
  { date: "04/06", inv: 38869 },
];

const fmtK = (v: number) => `${(v / 1000).toFixed(1)}K`;
const fmtTooltip = (v: number) =>
  v.toLocaleString("es-MX", { minimumFractionDigits: 0, maximumFractionDigits: 0 });

export default function SlidePostRestockConsumo() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-1">
        Curva de Consumo Diario
      </h2>
      <p className="text-sm text-gray-500 mb-4">
        Inventario total en red &middot; Linea vertical marca el restock (24-Mar)
      </p>

      {/* 340gr Chart */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-3">
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#F5A623]" />
            <span className="text-sm font-bold text-gray-700">PDQ 340gr</span>
          </div>
          <div className="flex gap-4 text-[11px]">
            <span className="px-2 py-0.5 bg-gray-100 rounded-full text-gray-600">
              Pre: <strong>-77 uds/dia</strong>
            </span>
            <span className="px-2 py-0.5 bg-orange-100 rounded-full text-orange-700">
              Post: <strong>-117 uds/dia</strong>
            </span>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={210}>
          <AreaChart data={daily340} margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis
              dataKey="date"
              tick={{ fill: "#999", fontSize: 10 }}
              axisLine={{ stroke: "#ddd" }}
              interval={2}
            />
            <YAxis
              tickFormatter={fmtK}
              tick={{ fill: "#999", fontSize: 10 }}
              axisLine={{ stroke: "#ddd" }}
              width={45}
            />
            <Tooltip
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              formatter={((value: any) => [fmtTooltip(Number(value) || 0), "Inventario"]) as any}
              contentStyle={{
                borderRadius: "8px",
                border: "1px solid #e5e7eb",
                boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.05)",
                fontSize: "12px",
              }}
            />
            <ReferenceLine
              x="03/24"
              stroke="#EF4444"
              strokeDasharray="6 4"
              strokeWidth={2}
              label={{
                value: "Restock",
                position: "top",
                fill: "#EF4444",
                fontSize: 11,
                fontWeight: 600,
              }}
            />
            <Area
              type="monotone"
              dataKey="inv"
              stroke="#F5A623"
              strokeWidth={2}
              fill="#F5A623"
              fillOpacity={0.15}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* 45gr Chart */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#3B82F6]" />
            <span className="text-sm font-bold text-gray-700">PDQ 45gr</span>
          </div>
          <div className="flex gap-4 text-[11px]">
            <span className="px-2 py-0.5 bg-gray-100 rounded-full text-gray-600">
              Pre: <strong>-537 uds/dia</strong>
            </span>
            <span className="px-2 py-0.5 bg-blue-100 rounded-full text-blue-700">
              Post: <strong>-520 uds/dia</strong>
            </span>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={210}>
          <AreaChart data={daily45} margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis
              dataKey="date"
              tick={{ fill: "#999", fontSize: 10 }}
              axisLine={{ stroke: "#ddd" }}
              interval={2}
            />
            <YAxis
              tickFormatter={fmtK}
              tick={{ fill: "#999", fontSize: 10 }}
              axisLine={{ stroke: "#ddd" }}
              width={45}
            />
            <Tooltip
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              formatter={((value: any) => [fmtTooltip(Number(value) || 0), "Inventario"]) as any}
              contentStyle={{
                borderRadius: "8px",
                border: "1px solid #e5e7eb",
                boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.05)",
                fontSize: "12px",
              }}
            />
            <ReferenceLine
              x="03/24"
              stroke="#EF4444"
              strokeDasharray="6 4"
              strokeWidth={2}
              label={{
                value: "Restock",
                position: "top",
                fill: "#EF4444",
                fontSize: 11,
                fontWeight: 600,
              }}
            />
            <Area
              type="monotone"
              dataKey="inv"
              stroke="#3B82F6"
              strokeWidth={2}
              fill="#3B82F6"
              fillOpacity={0.15}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </SlideWrapper>
  );
}
