"use client";

import SlideWrapper from "./SlideWrapper";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const trendData = [
  { periodo: "P12-2025", "PDQ 340gr": 0, "PDQ 45gr": 208212 },
  { periodo: "P13-2025", "PDQ 340gr": 0, "PDQ 45gr": 200291 },
  { periodo: "P01-2026", "PDQ 340gr": 0, "PDQ 45gr": 233334 },
  { periodo: "P02-2026", "PDQ 340gr": 37833, "PDQ 45gr": 111390 },
  { periodo: "P03-2026", "PDQ 340gr": 93975, "PDQ 45gr": 249048 },
  { periodo: "P04-2026", "PDQ 340gr": 70161, "PDQ 45gr": 145197 },
];

const fmt = (v: number) =>
  `$${(v / 1000).toFixed(0)}K`;

const fmtTooltip = (v: number) =>
  `$${v.toLocaleString("es-MX", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;

export default function Slide5Tendencia() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-1">
        Tendencia de Ventas por Periodo Fiscal
      </h2>
      <p className="text-sm text-gray-500 mb-6">
        Venta total en pesos · PDQ 340gr lanzado en P02-2026 · P04-2026 periodo
        parcial
      </p>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex-1">
        <ResponsiveContainer width="100%" height={460}>
          <LineChart data={trendData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis
              dataKey="periodo"
              tick={{ fill: "#666", fontSize: 13 }}
              axisLine={{ stroke: "#ddd" }}
            />
            <YAxis
              tickFormatter={fmt}
              tick={{ fill: "#666", fontSize: 12 }}
              axisLine={{ stroke: "#ddd" }}
            />
            <Tooltip
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              formatter={(value: any, name: any) => [
                fmtTooltip(Number(value) || 0),
                String(name),
              ]}
              contentStyle={{
                borderRadius: "8px",
                border: "1px solid #e5e7eb",
                boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.05)",
              }}
            />
            <Legend
              wrapperStyle={{ paddingTop: "12px", fontSize: "13px" }}
            />
            <Line
              type="monotone"
              dataKey="PDQ 340gr"
              stroke="#F5A623"
              strokeWidth={3}
              dot={{ fill: "#F5A623", r: 5 }}
              activeDot={{ r: 7 }}
            />
            <Line
              type="monotone"
              dataKey="PDQ 45gr"
              stroke="#3B82F6"
              strokeWidth={3}
              dot={{ fill: "#3B82F6", r: 5 }}
              activeDot={{ r: 7 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </SlideWrapper>
  );
}
