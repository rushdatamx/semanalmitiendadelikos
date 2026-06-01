"use client";

import SlideWrapper from "./SlideWrapper";
import { PieChart } from "lucide-react";

const categorias = [
  { nombre: "Durito Teja", venta: 1677036, pct: 43.5, crec: "+87.6%", pos: true, color: "#F5A623" },
  { nombre: "Papa 45g (3 sabores)", venta: 1201750, pct: 31.2, crec: "NUEVO", pos: true, color: "#F7B500" },
  { nombre: "Papa 340g (3 sabores)", venta: 707231, pct: 18.4, crec: "NUEVO", pos: true, color: "#FFD666" },
  { nombre: "Papa Deshidratada 190g", venta: 135202, pct: 3.5, crec: "+38.2%", pos: true, color: "#2E75B6" },
  { nombre: "Cheeto 400g", venta: 132542, pct: 3.4, crec: "+32.0%", pos: true, color: "#27AE60" },
  { nombre: "Otros", venta: 88, pct: 0.0, crec: "-99.9%", pos: false, color: "#9CA3AF" },
];

function DonutSegment({ segments, size = 220 }: { segments: { pct: number; color: string }[]; size?: number }) {
  const r = size / 2;
  const cx = r;
  const cy = r;
  const outerR = r - 4;
  const innerR = r * 0.55;
  let cumAngle = -90;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {segments.map((seg, i) => {
        const angle = (seg.pct / 100) * 360;
        const startAngle = cumAngle;
        const endAngle = cumAngle + angle;
        cumAngle = endAngle;

        const rad = (a: number) => (a * Math.PI) / 180;
        const x1o = cx + outerR * Math.cos(rad(startAngle));
        const y1o = cy + outerR * Math.sin(rad(startAngle));
        const x2o = cx + outerR * Math.cos(rad(endAngle));
        const y2o = cy + outerR * Math.sin(rad(endAngle));
        const x1i = cx + innerR * Math.cos(rad(endAngle));
        const y1i = cy + innerR * Math.sin(rad(endAngle));
        const x2i = cx + innerR * Math.cos(rad(startAngle));
        const y2i = cy + innerR * Math.sin(rad(startAngle));
        const large = angle > 180 ? 1 : 0;

        return (
          <path
            key={i}
            d={`M ${x1o} ${y1o} A ${outerR} ${outerR} 0 ${large} 1 ${x2o} ${y2o} L ${x1i} ${y1i} A ${innerR} ${innerR} 0 ${large} 0 ${x2i} ${y2i} Z`}
            fill={seg.color}
            stroke="white"
            strokeWidth="2"
          />
        );
      })}
      <text x={cx} y={cy - 8} textAnchor="middle" className="text-2xl font-bold" fill="#374151">5</text>
      <text x={cx} y={cy + 14} textAnchor="middle" className="text-xs" fill="#9CA3AF">categorías</text>
    </svg>
  );
}

export default function VtaSlide4Categorias() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <div className="flex items-center gap-3 mb-1">
        <PieChart className="w-7 h-7 text-[#F5A623]" />
        <h2 className="text-3xl font-bold text-gray-800">Mix de Categorías</h2>
      </div>
      <p className="text-gray-500 text-sm mb-5">Ene-May 2026 · Distribución por línea de producto</p>

      <div className="flex gap-6 flex-1">
        <div className="flex flex-col items-center justify-center w-[280px]">
          <DonutSegment
            segments={categorias.filter(c => c.pct > 0).map(c => ({ pct: c.pct, color: c.color }))}
            size={240}
          />
        </div>

        <div className="flex-1 space-y-2.5">
          {categorias.filter(c => c.pct > 0).map((c, i) => {
            const isNew = c.crec === "NUEVO";
            const crecColor = isNew ? "#2E75B6" : c.pos ? "#27AE60" : "#E31837";
            return (
              <div key={i} className="bg-white rounded-xl border border-gray-200 shadow-sm px-5 py-3 flex items-center gap-4 animate-count-up" style={{ animationDelay: `${i * 80}ms` }}>
                <div className="w-4 h-4 rounded-full flex-shrink-0" style={{ backgroundColor: c.color }} />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-800 font-semibold text-sm">{c.nombre}</span>
                      {isNew && (
                        <span className="text-[9px] px-1.5 py-0.5 rounded font-semibold bg-[#2E75B6]/15 text-[#2E75B6]">NUEVO</span>
                      )}
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-bold" style={{ color: crecColor }}>{c.crec}</span>
                      <span className="text-gray-800 font-bold">${(c.venta / 1000).toFixed(0)}K</span>
                      <span className="text-gray-400 text-sm w-14 text-right">{c.pct}%</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2 mt-2">
                    <div className="h-2 rounded-full animate-bar-grow" style={{ width: `${c.pct}%`, backgroundColor: c.color, animationDelay: `${i * 80}ms` }} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-3 flex justify-between items-center bg-[#FDF8F0] rounded-lg px-5 py-2.5 border border-[#E8DCC8]">
        <span className="text-gray-500 text-sm">Durito Teja = 43.5% de la venta · Papas (45g+340g) = 49.6% combinadas</span>
        <span className="text-[#F5A623] font-bold">$3.85M</span>
      </div>
    </SlideWrapper>
  );
}
