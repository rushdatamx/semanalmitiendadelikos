"use client";

import SlideWrapper from "./SlideWrapper";

interface Row {
  tienda: string;
  nat: number;
  natUmb: number;
  fuego: number;
  fuegoUmb: number;
  jal: number;
  jalUmb: number;
}

const data: Row[] = [
  { tienda: "MT MAT Las Brisas", nat: 192, natUmb: 130, fuego: 179, fuegoUmb: 98, jal: 209, jalUmb: 95 },
  { tienda: "MT NVO Reforma", nat: 292, natUmb: 126, fuego: 281, fuegoUmb: 92, jal: 299, jalUmb: 84 },
  { tienda: "MT MTY Eloy Cavazos", nat: 456, natUmb: 80, fuego: 424, fuegoUmb: 72, jal: 412, jalUmb: 80 },
  { tienda: "MT MTY Zuazua", nat: 545, natUmb: 163, fuego: 475, fuegoUmb: 98, jal: 482, jalUmb: 98 },
  { tienda: "MT MTY Garcia", nat: 535, natUmb: 112, fuego: 376, fuegoUmb: 98, jal: 413, jalUmb: 95 },
  { tienda: "MT MTY Cabezada", nat: 234, natUmb: 66, fuego: 333, fuegoUmb: 47, jal: 288, jalUmb: 41 },
  { tienda: "MT MTY Plaza del Bosque", nat: 613, natUmb: 66, fuego: 733, fuegoUmb: 44, jal: 715, jalUmb: 44 },
  { tienda: "MT REY Bugambilias", nat: 998, natUmb: 50, fuego: 835, fuegoUmb: 42, jal: 1006, jalUmb: 43 },
  { tienda: "MT MTY Metroplex", nat: 240, natUmb: 54, fuego: 255, fuegoUmb: 47, jal: 169, jalUmb: 40 },
  { tienda: "MT SAL Satelite", nat: 807, natUmb: 62, fuego: 817, fuegoUmb: 41, jal: 780, jalUmb: 55 },
  { tienda: "MT MTY Valle de Sta María", nat: 234, natUmb: 40, fuego: 211, fuegoUmb: 34, jal: 260, jalUmb: 34 },
  { tienda: "MT MTY Margaritas", nat: 514, natUmb: 49, fuego: 448, fuegoUmb: 46, jal: 294, jalUmb: 46 },
  { tienda: "MT NVO Revolucion", nat: 377, natUmb: 123, fuego: 404, fuegoUmb: 109, jal: 310, jalUmb: 113 },
  { tienda: "MT MTY Aztlan", nat: 450, natUmb: 6, fuego: 433, fuegoUmb: 3, jal: 444, jalUmb: 7 },
  { tienda: "MT MTY San Roque", nat: 562, natUmb: 84, fuego: 561, fuegoUmb: 64, jal: 560, jalUmb: 68 },
  { tienda: "MT REY Periferico", nat: 564, natUmb: 108, fuego: 510, fuegoUmb: 85, jal: 521, jalUmb: 88 },
  { tienda: "MT REY Rio Bravo", nat: 257, natUmb: 102, fuego: 264, fuegoUmb: 90, jal: 293, jalUmb: 98 },
  { tienda: "MT MTY Ciudadela", nat: 552, natUmb: 105, fuego: 502, fuegoUmb: 93, jal: 442, jalUmb: 84 },
  { tienda: "MT SAL Fundadores", nat: 748, natUmb: 42, fuego: 696, fuegoUmb: 34, jal: 644, jalUmb: 37 },
  { tienda: "MT MTY Huinala", nat: 576, natUmb: 121, fuego: 488, fuegoUmb: 102, jal: 544, jalUmb: 98 },
  { tienda: "MT REY Aeropuerto", nat: 137, natUmb: 47, fuego: 186, fuegoUmb: 31, jal: 157, jalUmb: 39 },
  { tienda: "MT MTY Buena Vista", nat: 530, natUmb: 73, fuego: 597, fuegoUmb: 59, jal: 601, jalUmb: 60 },
  { tienda: "MT REY San Fernando", nat: 215, natUmb: 126, fuego: 124, fuegoUmb: 77, jal: 157, jalUmb: 86 },
  { tienda: "MT MTY Lincoln", nat: 237, natUmb: 60, fuego: 334, fuegoUmb: 41, jal: 300, jalUmb: 46 },
  { tienda: "MT MTY Anzures", nat: 375, natUmb: 43, fuego: 407, fuegoUmb: 34, jal: 385, jalUmb: 35 },
];

function Cell({ inv, umbral }: { inv: number; umbral: number }) {
  if (inv === 0 && umbral === 0) {
    return (
      <span className="text-[10px] text-gray-400">Sin rotación</span>
    );
  }
  const ok = umbral === 0 || inv >= umbral;
  return (
    <span className={`text-xs font-semibold ${ok ? "text-green-700" : "text-red-600"}`}>
      {inv} <span className="text-[10px] font-normal text-gray-400">/ {umbral}</span>
    </span>
  );
}

export default function Slide8Detalle45() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-1">Detalle Inventario — PDQ 45gr</h2>
      <p className="text-sm text-gray-500 mb-3">
        Inventario al 22-Feb-2026 · Umbral = 30% de venta promedio (últimos 4 periodos) · 25 tiendas · 100% cobertura
      </p>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex-1">
        <div className="overflow-y-auto max-h-[540px]">
          <table className="w-full text-xs">
            <thead className="sticky top-0 bg-gray-50 z-10">
              <tr>
                <th className="text-left px-4 py-2 text-gray-600 font-semibold border-b border-gray-200 w-[40%]">Tienda</th>
                <th className="text-center px-3 py-2 text-gray-600 font-semibold border-b border-gray-200">Natural 45gr</th>
                <th className="text-center px-3 py-2 text-gray-600 font-semibold border-b border-gray-200">Fuego 45gr</th>
                <th className="text-center px-3 py-2 text-gray-600 font-semibold border-b border-gray-200">Jalapeño 45gr</th>
                <th className="text-center px-3 py-2 text-gray-600 font-semibold border-b border-gray-200 w-[80px]">Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map((r, i) => {
                const noRotacion = r.nat === 0 && r.natUmb === 0;
                const ok = noRotacion ? true : (
                  (r.natUmb === 0 || r.nat >= r.natUmb) &&
                  (r.fuegoUmb === 0 || r.fuego >= r.fuegoUmb) &&
                  (r.jalUmb === 0 || r.jal >= r.jalUmb)
                );
                return (
                  <tr key={i} className="hover:bg-gray-50/50 transition-colors border-b border-gray-100 last:border-0">
                    <td className="px-4 py-1.5 text-gray-800 font-medium">{r.tienda}</td>
                    <td className="text-center px-3 py-1.5"><Cell inv={r.nat} umbral={r.natUmb} /></td>
                    <td className="text-center px-3 py-1.5"><Cell inv={r.fuego} umbral={r.fuegoUmb} /></td>
                    <td className="text-center px-3 py-1.5"><Cell inv={r.jal} umbral={r.jalUmb} /></td>
                    <td className="text-center px-3 py-1.5">
                      {noRotacion ? (
                        <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold bg-gray-100 text-gray-500">Sin rotación</span>
                      ) : (
                        <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold ${ok ? "bg-green-50 text-green-700" : "bg-red-50 text-red-600"}`}>
                          {ok ? "OK" : "Restock"}
                        </span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <p className="text-[10px] text-gray-400 mt-2 text-center">
        Formato: unidades en inventario / umbral mínimo (30% vta promedio por periodo)
      </p>
    </SlideWrapper>
  );
}
