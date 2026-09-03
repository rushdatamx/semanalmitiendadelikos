"use client";

import SlideWrapper from "./SlideWrapper";
import { TrendingUp } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell, LabelList } from "recharts";

const data = [
  { mes: "Ene", v2025: 215574, v2026: 803262, crec: "+272.6%" },
  { mes: "Feb", v2025: 256537, v2026: 636954, crec: "+148.3%" },
  { mes: "Mar", v2025: 268241, v2026: 739722, crec: "+175.8%" },
  { mes: "Abr", v2025: 278131, v2026: 859801, crec: "+209.1%" },
  { mes: "May", v2025: 303385, v2026: 814110, crec: "+168.3%" },
  { mes: "Jun", v2025: 314995, v2026: 819173, crec: "+160.1%" },
  { mes: "Jul", v2025: 317920, v2026: 754831, crec: "+137.4%" },
  { mes: "Ago", v2025: 530000, v2026: 692695, crec: "+30.7%" },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const formatK = (v: any) => `$${(Number(v) / 1000).toFixed(0)}K`;

export default function VtaSlide3Tendencia() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <div className="flex items-center gap-3 mb-1">
        <TrendingUp className="w-7 h-7 text-[#F5A623]" />
        <h2 className="text-3xl font-bold text-gray-800">Tendencia Mensual</h2>
      </div>
      <p className="text-gray-500 text-sm mb-4">Comparativo 2025 vs 2026 · Ene–Ago (meses completos)</p>

      <div className="flex-1 bg-white rounded-xl border border-gray-200 shadow-sm p-5">
        <ResponsiveContainer width="100%" height={420}>
          <BarChart data={data} barGap={8} barCategoryGap="25%">
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis dataKey="mes" tick={{ fill: "#6B7280", fontSize: 14 }} />
            <YAxis tickFormatter={formatK} tick={{ fill: "#9CA3AF", fontSize: 12 }} />
            <Tooltip
              formatter={(val) => [`$${(Number(val) / 1000).toFixed(0)}K`, ""]}
              contentStyle={{ borderRadius: "8px", border: "1px solid #E5E7EB" }}
            />
            <Legend
              formatter={(value: string) => <span className="text-sm text-gray-600">{value}</span>}
            />
            <Bar dataKey="v2025" name="2025" fill="#D4D4D4" radius={[6, 6, 0, 0]} barSize={42}>
              <LabelList dataKey="v2025" position="top" formatter={formatK} style={{ fill: "#9CA3AF", fontSize: 11 }} />
            </Bar>
            <Bar dataKey="v2026" name="2026" radius={[6, 6, 0, 0]} barSize={42}>
              {data.map((_, i) => (
                <Cell key={i} fill="#F5A623" />
              ))}
              <LabelList dataKey="crec" position="top" style={{ fill: "#27AE60", fontSize: 12, fontWeight: 700 }} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-3 flex justify-between items-center bg-[#FDF8F0] rounded-lg px-5 py-2.5 border border-[#E8DCC8]">
        <span className="text-gray-500 text-sm">Abril 2026 = mejor mes del YTD · $860K (+209%) · Agosto cierra en $693K (+31% vs ago 2025, −8.2% vs julio)</span>
        <span className="text-[#27AE60] font-bold text-sm">8 meses consecutivos creciendo</span>
      </div>
    </SlideWrapper>
  );
}
