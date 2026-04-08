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
  { tienda: "MT NVO Reforma", salDos: 7.6, fuegoDos: 18.7, jalDos: 20.5, salInv: 30, fuegoInv: 49, jalInv: 49 },
  { tienda: "MT MTY Anzures", salDos: 16.9, fuegoDos: 51.2, jalDos: 12.4, salInv: 52, fuegoInv: 67, jalInv: 39 },
  { tienda: "MT SAL Fundadores", salDos: 14.4, fuegoDos: 52.4, jalDos: 19.2, salInv: 59, fuegoInv: 144, jalInv: 72 },
  { tienda: "MT NVO Revolucion", salDos: 18.3, fuegoDos: 16.3, jalDos: 38.0, salInv: 61, fuegoInv: 61, jalInv: 76 },
  { tienda: "MT MTY Garcia", salDos: 18.0, fuegoDos: 27.3, jalDos: 26.8, salInv: 68, fuegoInv: 86, jalInv: 95 },
  { tienda: "MT MTY Ciudadela", salDos: 35.6, fuegoDos: 35.8, jalDos: 23.6, salInv: 85, fuegoInv: 102, jalInv: 80 },
  { tienda: "MT REY Periferico", salDos: 25.5, fuegoDos: 69.1, jalDos: 34.8, salInv: 68, fuegoInv: 121, jalInv: 84 },
  { tienda: "MT MTY Zuazua", salDos: 25.7, fuegoDos: 58.8, jalDos: 38.6, salInv: 77, fuegoInv: 113, jalInv: 92 },
  { tienda: "MT MTY Eloy Cavazos", salDos: 25.6, fuegoDos: 42.8, jalDos: 47.7, salInv: 57, fuegoInv: 79, jalInv: 66 },
  { tienda: "MT MTY Cabezada", salDos: 37.0, fuegoDos: 63.6, jalDos: 106.0, salInv: 74, fuegoInv: 93, jalInv: 106 },
  { tienda: "MT MTY Huinala", salDos: 95.7, fuegoDos: 48.4, jalDos: 82.0, salInv: 81, fuegoInv: 93, jalInv: 82 },
  { tienda: "MT MTY Margaritas", salDos: 69.3, fuegoDos: 112.1, jalDos: 56.1, salInv: 96, fuegoInv: 138, jalInv: 95 },
  { tienda: "MT REY San Fernando", salDos: 68.6, fuegoDos: 150.9, jalDos: 112.0, salInv: 80, fuegoInv: 88, jalInv: 84 },
  { tienda: "MT MTY Buena Vista", salDos: 60.0, fuegoDos: 84.0, jalDos: 46.8, salInv: 165, fuegoInv: 182, jalInv: 160 },
  { tienda: "MT REY Aeropuerto", salDos: 56.6, fuegoDos: 94.7, jalDos: 108.0, salInv: 66, fuegoInv: 71, jalInv: 72 },
  { tienda: "MT REY Rio Bravo", salDos: 109.0, fuegoDos: 83.8, jalDos: 152.8, salInv: 109, fuegoInv: 129, jalInv: 141 },
  { tienda: "MT MTY San Roque", salDos: 126.1, fuegoDos: 137.8, jalDos: 139.1, salInv: 97, fuegoInv: 106, jalInv: 107 },
  { tienda: "MT MTY Lincoln", salDos: 1040.0, fuegoDos: 55.7, jalDos: 114.1, salInv: 80, fuegoInv: 90, jalInv: 79 },
  { tienda: "MT REY Bugambilias", salDos: 710.7, fuegoDos: 1254.5, jalDos: 875.3, salInv: 164, fuegoInv: 193, jalInv: 202 },
  { tienda: "MT MTY Plaza del Bosque", salDos: 1053.0, fuegoDos: 193.4, jalDos: 102.9, salInv: 81, fuegoInv: 119, jalInv: 95 },
  { tienda: "MT SAL Satelite", salDos: 165.8, fuegoDos: 240.5, jalDos: 312.0, salInv: 204, fuegoInv: 222, jalInv: 216 },
  { tienda: "MT MAT Las Brisas", salDos: 166.0, fuegoDos: 77.5, jalDos: 145.7, salInv: 83, fuegoInv: 84, jalInv: 85 },
  { tienda: "MT MTY Metroplex", salDos: 0.0, fuegoDos: 0.0, jalDos: 0.0, salInv: 97, fuegoInv: 129, jalInv: 114 },
];

function DosCell({ dos, inv }: { dos: number | null; inv: number | null }) {
  if (dos === null) {
    return (
      <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-gray-100 text-gray-500">
        Sin producto
      </span>
    );
  }
  const low = dos > 0 && dos < UMBRAL;
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
        Inventario al 06-Abr-2026 · DDI (Dias de Inventario) · Umbral: 15 dias · 23 tiendas activas (excl. 3 sin producto)
      </p>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex-1">
        <div className="overflow-y-auto max-h-[540px]">
          <table className="w-full text-xs">
            <thead className="sticky top-0 bg-gray-50 z-10">
              <tr>
                <th className="text-left px-4 py-2 text-gray-600 font-semibold border-b border-gray-200 w-[35%]">Tienda</th>
                <th className="text-center px-3 py-2 text-gray-600 font-semibold border-b border-gray-200">Sal 340gr</th>
                <th className="text-center px-3 py-2 text-gray-600 font-semibold border-b border-gray-200">Fuego 340gr</th>
                <th className="text-center px-3 py-2 text-gray-600 font-semibold border-b border-gray-200">Jalapeno 340gr</th>
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
        Sin OC — PDQ 340gr no esta en sistema de OC de HEB · Excluye Aztlan, Cat Monterrey, Valle Sta Maria (sin producto)
      </p>
    </SlideWrapper>
  );
}
