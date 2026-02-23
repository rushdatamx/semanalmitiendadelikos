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
  { tienda: "MT MAT Las Brisas", salDos: 0, fuegoDos: 0, jalDos: 1140.8, salInv: 81, fuegoInv: 80, jalInv: 81 },
  { tienda: "MT NVO Reforma", salDos: 18.3, fuegoDos: 40.4, jalDos: 25.3, salInv: 32, fuegoInv: 49, jalInv: 38 },
  { tienda: "MT MTY Eloy Cavazos", salDos: 11.6, fuegoDos: 38.0, jalDos: 31.4, salInv: 24, fuegoInv: 61, jalInv: 46 },
  { tienda: "MT MTY Zuazua", salDos: 258.7, fuegoDos: 265.7, jalDos: 158.5, salInv: 74, fuegoInv: 76, jalInv: 68 },
  { tienda: "MT MTY Garcia", salDos: 48.7, fuegoDos: 63.0, jalDos: 65.3, salInv: 87, fuegoInv: 99, jalInv: 98 },
  { tienda: "MT MTY Cabezada", salDos: 33.6, fuegoDos: 44.4, jalDos: 56.0, salInv: 48, fuegoInv: 65, jalInv: 68 },
  { tienda: "MT MTY Plaza del Bosque", salDos: 47.2, fuegoDos: 85.0, jalDos: 48.8, salInv: 54, fuegoInv: 79, jalInv: 68 },
  { tienda: "MT REY Bugambilias", salDos: 131.5, fuegoDos: 282.1, jalDos: 257.5, salInv: 108, fuegoInv: 121, jalInv: 138 },
  { tienda: "MT MTY Metroplex", salDos: 61.6, fuegoDos: 158.5, jalDos: 112.1, salInv: 55, fuegoInv: 68, jalInv: 64 },
  { tienda: "MT SAL Satelite", salDos: 0, fuegoDos: 0, jalDos: 0, salInv: 160, fuegoInv: 160, jalInv: 160 },
  { tienda: "MT MTY Margaritas", salDos: 71.2, fuegoDos: 170.9, jalDos: 61.0, salInv: 94, fuegoInv: 122, jalInv: 98 },
  { tienda: "MT NVO Revolucion", salDos: 36.8, fuegoDos: 89.3, jalDos: 107.1, salInv: 50, fuegoInv: 67, jalInv: 65 },
  { tienda: "MT MTY San Roque", salDos: 40.7, fuegoDos: 105.4, jalDos: 119.1, salInv: 48, fuegoInv: 64, jalInv: 68 },
  { tienda: "MT REY Periferico", salDos: 131.8, fuegoDos: 78.4, jalDos: 103.1, salInv: 80, fuegoInv: 98, jalInv: 81 },
  { tienda: "MT REY Rio Bravo", salDos: 66.5, fuegoDos: 88.2, jalDos: 84.8, salInv: 95, fuegoInv: 104, jalInv: 100 },
  { tienda: "MT MTY Ciudadela", salDos: 51.2, fuegoDos: 94.0, jalDos: 63.2, salInv: 75, fuegoInv: 94, jalInv: 88 },
  { tienda: "MT SAL Fundadores", salDos: 39.3, fuegoDos: 303.0, jalDos: 69.6, salInv: 73, fuegoInv: 130, jalInv: 92 },
  { tienda: "MT MTY Huinala", salDos: 21.3, fuegoDos: 64.5, jalDos: 18.8, salInv: 38, fuegoInv: 76, jalInv: 39 },
  { tienda: "MT MTY Buena Vista", salDos: 0, fuegoDos: 0, jalDos: 0, salInv: 160, fuegoInv: 160, jalInv: 160 },
  { tienda: "MT REY San Fernando", salDos: 42.0, fuegoDos: 45.2, jalDos: 39.9, salInv: 48, fuegoInv: 50, jalInv: 47 },
  { tienda: "MT MTY Lincoln", salDos: 66.5, fuegoDos: 132.5, jalDos: 78.7, salInv: 57, fuegoInv: 71, jalInv: 59 },
  { tienda: "MT MTY Anzures", salDos: 21.8, fuegoDos: 26.6, jalDos: 14.5, salInv: 35, fuegoInv: 39, jalInv: 27 },
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
        Inventario al 22-Feb-2026 · DDI (Días de Inventario) · Umbral: 15 días · Restock si 2+ sabores bajo · 22 tiendas activas
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
                // DOS=0 with inventory>0 = anaquel problem (has stock but no sales velocity)
                const anaquelCount = doses.filter((d, j) => d === 0 && invs[j] > 0).length;
                // DOS>0 and <15 = low stock, actually selling
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
        DDI=0 con inventario = Sin Venta · DDI &gt; 0 y &lt; 15 = bajo umbral · Restock si 2+ sabores con DDI &gt; 0 bajo umbral
      </p>
    </SlideWrapper>
  );
}
