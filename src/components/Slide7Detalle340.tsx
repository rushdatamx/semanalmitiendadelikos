"use client";

import SlideWrapper from "./SlideWrapper";

interface Row {
  tienda: string;
  sal: number | null;
  salUmb: number;
  fuego: number | null;
  fuegoUmb: number;
  jal: number | null;
  jalUmb: number;
}

const data: Row[] = [
  { tienda: "Cat Monterrey", sal: null, salUmb: 0, fuego: null, fuegoUmb: 0, jal: null, jalUmb: 0 },
  { tienda: "MT MTY Valle de Sta María", sal: null, salUmb: 0, fuego: null, fuegoUmb: 0, jal: null, jalUmb: 0 },
  { tienda: "MT MTY Aztlan", sal: null, salUmb: 0, fuego: null, fuegoUmb: 0, jal: null, jalUmb: 0 },
  { tienda: "MT REY Aeropuerto", sal: null, salUmb: 0, fuego: null, fuegoUmb: 0, jal: null, jalUmb: 0 },
  { tienda: "MT MAT Las Brisas", sal: 81, salUmb: 6, fuego: 80, fuegoUmb: 6, jal: 81, jalUmb: 6 },
  { tienda: "MT NVO Reforma", sal: 32, salUmb: 10, fuego: 49, fuegoUmb: 8, jal: 38, jalUmb: 9 },
  { tienda: "MT MTY Eloy Cavazos", sal: 24, salUmb: 10, fuego: 61, fuegoUmb: 7, jal: 46, jalUmb: 9 },
  { tienda: "MT MTY Zuazua", sal: 74, salUmb: 6, fuego: 76, fuegoUmb: 6, jal: 68, jalUmb: 7 },
  { tienda: "MT MTY Garcia", sal: 87, salUmb: 6, fuego: 99, fuegoUmb: 5, jal: 98, jalUmb: 5 },
  { tienda: "MT MTY Cabezada", sal: 48, salUmb: 8, fuego: 65, fuegoUmb: 7, jal: 68, jalUmb: 7 },
  { tienda: "MT MTY Plaza del Bosque", sal: 54, salUmb: 8, fuego: 79, fuegoUmb: 6, jal: 68, jalUmb: 7 },
  { tienda: "MT REY Bugambilias", sal: 108, salUmb: 3, fuego: 121, fuegoUmb: 2, jal: 138, jalUmb: 2 },
  { tienda: "MT MTY Metroplex", sal: 55, salUmb: 2, fuego: 68, fuegoUmb: 1, jal: 64, jalUmb: 1 },
  { tienda: "MT SAL Satelite", sal: 160, salUmb: 0, fuego: 160, fuegoUmb: 0, jal: 160, jalUmb: 0 },
  { tienda: "MT MTY Margaritas", sal: 94, salUmb: 5, fuego: 122, fuegoUmb: 3, jal: 98, jalUmb: 5 },
  { tienda: "MT NVO Revolucion", sal: 50, salUmb: 8, fuego: 67, fuegoUmb: 7, jal: 65, jalUmb: 7 },
  { tienda: "MT MTY San Roque", sal: 48, salUmb: 8, fuego: 64, fuegoUmb: 7, jal: 68, jalUmb: 7 },
  { tienda: "MT REY Periferico", sal: 80, salUmb: 6, fuego: 98, fuegoUmb: 5, jal: 81, jalUmb: 6 },
  { tienda: "MT REY Rio Bravo", sal: 95, salUmb: 5, fuego: 104, fuegoUmb: 4, jal: 100, jalUmb: 5 },
  { tienda: "MT MTY Ciudadela", sal: 75, salUmb: 6, fuego: 94, fuegoUmb: 5, jal: 88, jalUmb: 5 },
  { tienda: "MT SAL Fundadores", sal: 73, salUmb: 7, fuego: 130, fuegoUmb: 2, jal: 92, jalUmb: 5 },
  { tienda: "MT MTY Huinala", sal: 38, salUmb: 9, fuego: 76, fuegoUmb: 6, jal: 39, jalUmb: 9 },
  { tienda: "MT MTY Buena Vista", sal: 160, salUmb: 0, fuego: 160, fuegoUmb: 0, jal: 160, jalUmb: 0 },
  { tienda: "MT REY San Fernando", sal: 48, salUmb: 8, fuego: 50, fuegoUmb: 8, jal: 47, jalUmb: 9 },
  { tienda: "MT MTY Lincoln", sal: 57, salUmb: 8, fuego: 71, fuegoUmb: 7, jal: 59, jalUmb: 8 },
  { tienda: "MT MTY Anzures", sal: 35, salUmb: 9, fuego: 39, fuegoUmb: 9, jal: 27, jalUmb: 10 },
];

function Cell({ inv, umbral }: { inv: number | null; umbral: number }) {
  if (inv === null) {
    return (
      <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-gray-100 text-gray-500">
        Sin producto
      </span>
    );
  }
  const ok = umbral === 0 || inv >= umbral;
  return (
    <span className={`text-xs font-semibold ${ok ? "text-green-700" : "text-red-600"}`}>
      {inv} <span className="text-[10px] font-normal text-gray-400">/ {umbral}</span>
    </span>
  );
}

export default function Slide7Detalle340() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-1">Detalle Inventario — PDQ 340gr</h2>
      <p className="text-sm text-gray-500 mb-3">
        Inventario al 22-Feb-2026 · Umbral = 30% de venta promedio (últimos 4 periodos) · 22 tiendas activas · 4 sin producto
      </p>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex-1">
        <div className="overflow-y-auto max-h-[540px]">
          <table className="w-full text-xs">
            <thead className="sticky top-0 bg-gray-50 z-10">
              <tr>
                <th className="text-left px-4 py-2 text-gray-600 font-semibold border-b border-gray-200 w-[40%]">Tienda</th>
                <th className="text-center px-3 py-2 text-gray-600 font-semibold border-b border-gray-200">Sal 340gr</th>
                <th className="text-center px-3 py-2 text-gray-600 font-semibold border-b border-gray-200">Fuego 340gr</th>
                <th className="text-center px-3 py-2 text-gray-600 font-semibold border-b border-gray-200">Jalapeño 340gr</th>
                <th className="text-center px-3 py-2 text-gray-600 font-semibold border-b border-gray-200 w-[80px]">Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map((r, i) => {
                const sinProducto = r.sal === null;
                const ok = sinProducto ? false : (
                  (r.salUmb === 0 || r.sal! >= r.salUmb) &&
                  (r.fuegoUmb === 0 || r.fuego! >= r.fuegoUmb) &&
                  (r.jalUmb === 0 || r.jal! >= r.jalUmb)
                );
                return (
                  <tr key={i} className="hover:bg-gray-50/50 transition-colors border-b border-gray-100 last:border-0">
                    <td className="px-4 py-1.5 text-gray-800 font-medium">{r.tienda}</td>
                    <td className="text-center px-3 py-1.5"><Cell inv={r.sal} umbral={r.salUmb} /></td>
                    <td className="text-center px-3 py-1.5"><Cell inv={r.fuego} umbral={r.fuegoUmb} /></td>
                    <td className="text-center px-3 py-1.5"><Cell inv={r.jal} umbral={r.jalUmb} /></td>
                    <td className="text-center px-3 py-1.5">
                      {sinProducto ? (
                        <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold bg-gray-100 text-gray-500">Oportunidad</span>
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
