"use client";

import SlideWrapper from "./SlideWrapper";
import { Package, Clock, TrendingDown, Truck, CheckCircle, Info } from "lucide-react";

const kpis340 = [
  { label: "Tiendas surtidas", value: "22", icon: Truck },
  { label: "Uds entregadas", value: "5,225", icon: Package },
  { label: "Uds consumidas", value: "1,468", pct: 17.1, icon: TrendingDown },
  { label: "Burn rate", value: "116 uds/dia", icon: TrendingDown },
  { label: "Dias para agotarse", value: "~61", icon: Clock },
];

const kpis45 = [
  { label: "Tiendas surtidas", value: "24", icon: Truck },
  { label: "Uds entregadas", value: "28,019", icon: Package },
  { label: "Uds consumidas", value: "7,429", pct: 16.6, icon: TrendingDown },
  { label: "Burn rate", value: "520 uds/dia", icon: TrendingDown },
  { label: "Dias para agotarse", value: "~75", icon: Clock },
];

function KpiCard({
  label,
  value,
  pct,
  icon: Icon,
  color,
}: {
  label: string;
  value: string;
  pct?: number;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  color: string;
}) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-3 flex items-center gap-3">
      <div
        className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: `${color}15` }}
      >
        <Icon className="w-5 h-5" style={{ color }} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[11px] text-gray-500 leading-tight">{label}</p>
        <div className="flex items-center gap-2">
          <p className="text-lg font-bold text-gray-800 leading-tight">{value}</p>
          {pct !== undefined && (
            <span
              className="text-[10px] font-semibold px-1.5 py-0.5 rounded-full"
              style={{ backgroundColor: `${color}20`, color }}
            >
              {pct}%
            </span>
          )}
        </div>
        {pct !== undefined && (
          <div className="w-full h-1.5 bg-gray-100 rounded-full mt-1 overflow-hidden">
            <div
              className="h-full rounded-full bg-green-500"
              style={{ width: `${pct}%` }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default function SlidePostRestockResumen() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-1">
        Post-Restock: Resumen Ejecutivo
      </h2>
      <p className="text-sm text-gray-500 mb-5">
        Restock masivo 24-25 Mar 2026 &middot; 12 dias de consumo (al 06-Abr-2026)
      </p>

      <div className="grid grid-cols-2 gap-6 flex-1">
        {/* LEFT — PDQ 340gr */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-3 h-3 rounded-full bg-[#F5A623]" />
            <h3 className="text-base font-bold text-gray-700">PDQ 340gr</h3>
            <span className="text-[10px] text-gray-400">240 pzs/PDQ</span>
          </div>
          <div className="space-y-2.5">
            {kpis340.map((k) => (
              <KpiCard
                key={k.label}
                label={k.label}
                value={k.value}
                pct={k.pct}
                icon={k.icon}
                color="#F5A623"
              />
            ))}
          </div>
        </div>

        {/* RIGHT — PDQ 45gr */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-3 h-3 rounded-full bg-[#3B82F6]" />
            <h3 className="text-base font-bold text-gray-700">PDQ 45gr</h3>
            <span className="text-[10px] text-gray-400">1,260 pzs/PDQ</span>
          </div>
          <div className="space-y-2.5">
            {kpis45.map((k) => (
              <KpiCard
                key={k.label}
                label={k.label}
                value={k.value}
                pct={k.pct}
                icon={k.icon}
                color="#3B82F6"
              />
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM ROW */}
      <div className="mt-4 space-y-2">
        <div className="flex items-center gap-2 bg-green-50 border border-green-200 rounded-lg px-4 py-2">
          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
          <p className="text-sm text-green-800 font-medium">
            Cobertura 100%: Todas las tiendas con stock en ambos PDQs
          </p>
        </div>
        <div className="flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-lg px-4 py-2">
          <Info className="w-4 h-4 text-blue-500 flex-shrink-0" />
          <p className="text-xs text-blue-700">
            Nota: Productos 100% nuevos en MITIENDA (2026). Sin YoY porque no existian en 2025.
          </p>
        </div>
      </div>
    </SlideWrapper>
  );
}
