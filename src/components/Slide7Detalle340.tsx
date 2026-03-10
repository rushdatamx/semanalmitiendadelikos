"use client";

import SlideWrapper from "./SlideWrapper";

interface Row {
  tienda: string;
  salDos: number | null;
  fuegoDos: number | null;
  jalDos: number | null;
  salInv: number | null;
  fuegoInv: number | null;
  jalInv: number | null;
}

const UMBRAL = 15;

const data: Row[] = [
  { tienda: "MT NVO Reforma", salDos: 4.3, fuegoDos: 18.0, jalDos: 7.6, salInv: 8, fuegoInv: 29, jalInv: 12 },
  { tienda: "MT MTY Eloy Cavazos", salDos: 4.0, fuegoDos: 30.2, jalDos: 7.1, salInv: 7, fuegoInv: 42, jalInv: 14 },
  { tienda: "MT MTY Anzures", salDos: 7.3, fuegoDos: 9.0, jalDos: 1.4, salInv: 13, fuegoInv: 16, jalInv: 3 },
  { tienda: "MT MTY Plaza del Bosque", salDos: 9.0, fuegoDos: 59.8, jalDos: 42.8, salInv: 20, fuegoInv: 62, jalInv: 52 },
  { tienda: "MT MTY Huinala", salDos: 16.5, fuegoDos: 42.7, jalDos: 16.2, salInv: 23, fuegoInv: 58, jalInv: 26 },
  { tienda: "MT MTY Lincoln", salDos: 16.5, fuegoDos: 50.8, jalDos: 42.0, salInv: 26, fuegoInv: 49, jalInv: 39 },
  { tienda: "MT REY San Fernando", salDos: 28.0, fuegoDos: 25.7, jalDos: 16.1, salInv: 35, fuegoInv: 34, jalInv: 27 },
  { tienda: "MT NVO Revolucion", salDos: 20.7, fuegoDos: 33.9, jalDos: 20.7, salInv: 34, fuegoInv: 46, jalInv: 34 },
  { tienda: "MT MTY Zuazua", salDos: 21.9, fuegoDos: 62.4, jalDos: 34.2, salInv: 36, fuegoInv: 58, jalInv: 44 },
  { tienda: "MT MTY Cabezada", salDos: 21.9, fuegoDos: 35.9, jalDos: 56.0, salInv: 32, fuegoInv: 50, jalInv: 54 },
  { tienda: "MT MTY Margaritas", salDos: 22.6, fuegoDos: 74.2, jalDos: 29.3, salInv: 55, fuegoInv: 98, jalInv: 68 },
  { tienda: "MT MTY San Roque", salDos: 24.4, fuegoDos: 48.8, jalDos: 53.0, salInv: 34, fuegoInv: 47, jalInv: 53 },
  { tienda: "MT MTY Metroplex", salDos: 27.2, fuegoDos: 124.0, jalDos: 52.9, salInv: 35, fuegoInv: 62, jalInv: 51 },
  { tienda: "MT SAL Fundadores", salDos: 36.2, fuegoDos: 124.9, jalDos: 30.9, salInv: 62, fuegoInv: 116, jalInv: 64 },
  { tienda: "MT MTY Garcia", salDos: 35.1, fuegoDos: 39.8, jalDos: 67.9, salInv: 59, fuegoInv: 71, jalInv: 80 },
  { tienda: "MT MAT Las Brisas", salDos: 38.7, fuegoDos: 34.2, jalDos: 40.7, salInv: 47, fuegoInv: 44, jalInv: 48 },
  { tienda: "MT REY Rio Bravo", salDos: 44.6, fuegoDos: 77.0, jalDos: 88.0, salInv: 70, fuegoInv: 88, jalInv: 88 },
  { tienda: "MT REY Periferico", salDos: 45.2, fuegoDos: 85.1, jalDos: 48.8, salInv: 50, fuegoInv: 82, jalInv: 54 },
  { tienda: "MT MTY Ciudadela", salDos: 45.5, fuegoDos: 73.4, jalDos: 69.1, salInv: 52, fuegoInv: 76, jalInv: 74 },
  { tienda: "MT REY Bugambilias", salDos: 120.2, fuegoDos: 216.4, jalDos: 253.7, salInv: 103, fuegoInv: 116, jalInv: 136 },
  { tienda: "MT MTY Buena Vista", salDos: 220.8, fuegoDos: 470.4, jalDos: 420.2, salInv: 142, fuegoInv: 151, jalInv: 150 },
  { tienda: "MT SAL Satelite", salDos: 612.0, fuegoDos: 1090.9, jalDos: 612.0, salInv: 153, fuegoInv: 156, jalInv: 153 },
];

function DosCell({ dos, inv }: { dos: number | null; inv: number | null }) {
  if (dos === null) {
    return (
      <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-gray-100 text-gray-500">
        Sin producto
      </span>
    );
  }
  const low = dos < UMBRAL;
  const dosDisplay = dos >= 100 ? Math.round(dos) : dos.toFixed(1);
  return (
    <span className={`text-xs font-semibold ${low ? "text-red-600" : "text-green-700"}`}>
      {dosDisplay}d <span className="text-[10px] font-normal text-gray-400">({inv} uds)</span>
    </span>
  );
}

export default function Slide7Detalle340() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-1">Detalle Inventario — PDQ 340gr</h2>
      <p className="text-sm text-gray-500 mb-3">
        Inventario al 08-Mar-2026 · DDI (Días de Inventario) · Umbral: 15 días · 22 tiendas activas
      </p>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex-1">
        <div className="overflow-y-auto max-h-[540px]">
          <table className="w-full text-xs">
            <thead className="sticky top-0 bg-gray-50 z-10">
              <tr>
                <th className="text-left px-4 py-2 text-gray-600 font-semibold border-b border-gray-200 w-[35%]">Tienda</th>
                <th className="text-center px-3 py-2 text-gray-600 font-semibold border-b border-gray-200">Sal 340gr</th>
                <th className="text-center px-3 py-2 text-gray-600 font-semibold border-b border-gray-200">Fuego 340gr</th>
                <th className="text-center px-3 py-2 text-gray-600 font-semibold border-b border-gray-200">Jalapeño 340gr</th>
                <th className="text-center px-3 py-2 text-gray-600 font-semibold border-b border-gray-200 w-[80px]">Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map((r, i) => {
                if (r.salDos === null) return null;
                const doses = [r.salDos!, r.fuegoDos!, r.jalDos!];
                const invs = [r.salInv!, r.fuegoInv!, r.jalInv!];
                const anaquelCount = doses.filter((d, j) => d === 0 && invs[j] > 0).length;
                const restockCount = doses.filter(d => d > 0 && d < UMBRAL).length;
                const hasAnaquelIssue = anaquelCount >= 2;
                const needsRestock = restockCount >= 2;

                let status: string;
                let statusClass: string;
                let rowClass = "";
                if (hasAnaquelIssue) {
                  status = "Sin Venta";
                  statusClass = "bg-orange-50 text-orange-600";
                  rowClass = "bg-orange-50/30";
                } else if (needsRestock) {
                  status = "Restock";
                  statusClass = "bg-red-50 text-red-600";
                  rowClass = "bg-red-50/30";
                } else {
                  status = "OK";
                  statusClass = "bg-green-50 text-green-700";
                }

                return (
                  <tr key={i} className={`hover:bg-gray-50/50 transition-colors border-b border-gray-100 last:border-0 ${rowClass}`}>
                    <td className="px-4 py-1.5 text-gray-800 font-medium">{r.tienda}</td>
                    <td className="text-center px-3 py-1.5"><DosCell dos={r.salDos} inv={r.salInv} /></td>
                    <td className="text-center px-3 py-1.5"><DosCell dos={r.fuegoDos} inv={r.fuegoInv} /></td>
                    <td className="text-center px-3 py-1.5"><DosCell dos={r.jalDos} inv={r.jalInv} /></td>
                    <td className="text-center px-3 py-1.5">
                      <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold ${statusClass}`}>
                        {status}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <p className="text-[10px] text-gray-400 mt-2 text-center">
        Sin OC — PDQ 340gr no está en sistema de OC de HEB
      </p>
    </SlideWrapper>
  );
}
