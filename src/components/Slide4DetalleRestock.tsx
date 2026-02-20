"use client";

import SlideWrapper from "./SlideWrapper";

interface RestockRow {
  tienda: string;
  pdq: string;
  saborDispara: string;
  invActual: number;
  umbral: number;
  piezas: string;
}

const restockData: RestockRow[] = [
  { tienda: "MT MAT Las Brisas", pdq: "340gr", saborDispara: "Sal 340gr", invActual: 0, umbral: 112, piezas: "240" },
  { tienda: "MT MAT Las Brisas", pdq: "45gr", saborDispara: "Natural 45gr", invActual: 18, umbral: 132, piezas: "1,260" },
  { tienda: "MT NVO Reforma", pdq: "340gr", saborDispara: "Fuego 340gr", invActual: 5, umbral: 98, piezas: "240" },
  { tienda: "MT NVO Reforma", pdq: "45gr", saborDispara: "Fuego 45gr", invActual: 12, umbral: 110, piezas: "1,260" },
  { tienda: "MT MTY Eloy Cavazos", pdq: "340gr", saborDispara: "Jalapeno 340gr", invActual: 3, umbral: 88, piezas: "240" },
  { tienda: "MT MTY Eloy Cavazos", pdq: "45gr", saborDispara: "Jalapeno 45gr", invActual: 22, umbral: 105, piezas: "1,260" },
  { tienda: "MT MTY Zuazua", pdq: "340gr", saborDispara: "Sal 340gr", invActual: 8, umbral: 75, piezas: "240" },
  { tienda: "MT MTY Zuazua", pdq: "45gr", saborDispara: "Natural 45gr", invActual: 15, umbral: 95, piezas: "1,260" },
  { tienda: "MT MTY Garcia", pdq: "340gr", saborDispara: "Fuego 340gr", invActual: 0, umbral: 102, piezas: "240" },
  { tienda: "MT MTY Garcia", pdq: "45gr", saborDispara: "Fuego 45gr", invActual: 20, umbral: 118, piezas: "1,260" },
  { tienda: "MT MTY Cabezada", pdq: "340gr", saborDispara: "Jalapeno 340gr", invActual: 6, umbral: 92, piezas: "240" },
  { tienda: "MT MTY Cabezada", pdq: "45gr", saborDispara: "Natural 45gr", invActual: 10, umbral: 125, piezas: "1,260" },
  { tienda: "MT NVO Revolucion", pdq: "340gr", saborDispara: "Sal 340gr", invActual: 2, umbral: 80, piezas: "240" },
  { tienda: "MT NVO Revolucion", pdq: "45gr", saborDispara: "Fuego 45gr", invActual: 8, umbral: 100, piezas: "1,260" },
  { tienda: "MT MTY San Roque", pdq: "340gr", saborDispara: "Fuego 340gr", invActual: 4, umbral: 95, piezas: "240" },
  { tienda: "MT MTY San Roque", pdq: "45gr", saborDispara: "Natural 45gr", invActual: 25, umbral: 140, piezas: "1,260" },
];

export default function Slide4DetalleRestock() {
  const total340 = 19;
  const total45 = 20;

  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-1">
        Detalle de Restock Necesario
      </h2>
      <p className="text-sm text-gray-500 mb-4">
        Tiendas donde al menos 1 sabor cayó por debajo del umbral 30%
      </p>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex-1">
        <div className="overflow-y-auto max-h-[440px]">
          <table className="w-full text-sm">
            <thead className="sticky top-0 bg-gray-50 z-10">
              <tr>
                <th className="text-left px-4 py-2.5 text-gray-600 font-semibold border-b border-gray-200">Tienda</th>
                <th className="text-center px-3 py-2.5 text-gray-600 font-semibold border-b border-gray-200">PDQ</th>
                <th className="text-left px-3 py-2.5 text-gray-600 font-semibold border-b border-gray-200">Sabor que Dispara</th>
                <th className="text-right px-3 py-2.5 text-gray-600 font-semibold border-b border-gray-200">Inv. Actual</th>
                <th className="text-right px-3 py-2.5 text-gray-600 font-semibold border-b border-gray-200">Umbral 30%</th>
                <th className="text-right px-3 py-2.5 text-gray-600 font-semibold border-b border-gray-200">Piezas a Surtir</th>
              </tr>
            </thead>
            <tbody>
              {restockData.map((r, i) => (
                <tr key={i} className="hover:bg-gray-50/50 transition-colors border-b border-gray-100 last:border-0">
                  <td className="px-4 py-2 text-gray-800 font-medium">{r.tienda}</td>
                  <td className="text-center px-3 py-2">
                    <span className={`inline-block px-2 py-0.5 rounded text-xs font-semibold ${r.pdq === "340gr" ? "bg-amber-100 text-amber-800" : "bg-blue-100 text-blue-800"}`}>
                      {r.pdq}
                    </span>
                  </td>
                  <td className="px-3 py-2 text-gray-600">{r.saborDispara}</td>
                  <td className="text-right px-3 py-2 font-mono text-gray-800">{r.invActual}</td>
                  <td className="text-right px-3 py-2 font-mono text-gray-500">{r.umbral}</td>
                  <td className="text-right px-3 py-2 font-mono font-bold text-orange-700">{r.piezas}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Totales */}
      <div className="flex items-center justify-between mt-4 bg-white rounded-xl px-6 py-3 shadow-sm border border-gray-200">
        <div className="flex gap-8">
          <div>
            <span className="text-sm text-gray-500">PDQs 340gr a surtir: </span>
            <span className="font-bold text-gray-800">{total340} PDQs</span>
            <span className="text-xs text-gray-400 ml-1">({(total340 * 240).toLocaleString()} pzs)</span>
          </div>
          <div>
            <span className="text-sm text-gray-500">PDQs 45gr a surtir: </span>
            <span className="font-bold text-gray-800">{total45} PDQs</span>
            <span className="text-xs text-gray-400 ml-1">({(total45 * 1260).toLocaleString()} pzs)</span>
          </div>
        </div>
        <div className="text-right">
          <span className="text-sm text-gray-500">Total piezas: </span>
          <span className="font-bold text-[#F5A623] text-lg">
            {(total340 * 240 + total45 * 1260).toLocaleString()}
          </span>
        </div>
      </div>
    </SlideWrapper>
  );
}
