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
  { tienda: "MT MAT Las Brisas", salDos: 255.2, fuegoDos: 144.4, jalDos: 138.0, salInv: 73, fuegoInv: 67, jalInv: 69 },
  { tienda: "MT NVO Reforma", salDos: 7.4, fuegoDos: 26.0, jalDos: 13.5, salInv: 17, fuegoInv: 40, jalInv: 26 },
  { tienda: "MT MTY Eloy Cavazos", salDos: 6.4, fuegoDos: 32.0, jalDos: 13.5, salInv: 15, fuegoInv: 48, jalInv: 26 },
  { tienda: "MT MTY Zuazua", salDos: 34.1, fuegoDos: 70.0, jalDos: 49.2, salInv: 45, fuegoInv: 60, jalInv: 51 },
  { tienda: "MT MTY Garcia", salDos: 32.9, fuegoDos: 54.7, jalDos: 77.0, salInv: 67, fuegoInv: 86, jalInv: 88 },
  { tienda: "MT MTY Cabezada", salDos: 30.1, fuegoDos: 36.3, jalDos: 48.8, salInv: 44, fuegoInv: 57, jalInv: 61 },
  { tienda: "MT MTY Plaza del Bosque", salDos: 26.7, fuegoDos: 90.3, jalDos: 56.0, salInv: 40, fuegoInv: 71, jalInv: 60 },
  { tienda: "MT REY Bugambilias", salDos: 121.4, fuegoDos: 203.2, jalDos: 255.6, salInv: 104, fuegoInv: 116, jalInv: 137 },
  { tienda: "MT MTY Metroplex", salDos: 55.0, fuegoDos: 144.4, jalDos: 103.8, salInv: 53, fuegoInv: 67, jalInv: 63 },
  { tienda: "MT SAL Satelite", salDos: 0, fuegoDos: 0, jalDos: 0, salInv: 160, fuegoInv: 160, jalInv: 160 },
  { tienda: "MT MTY Margaritas", salDos: 36.5, fuegoDos: 100.3, jalDos: 44.8, salInv: 73, fuegoInv: 111, jalInv: 88 },
  { tienda: "MT NVO Revolucion", salDos: 27.3, fuegoDos: 72.3, jalDos: 46.7, salInv: 40, fuegoInv: 62, jalInv: 50 },
  { tienda: "MT MTY San Roque", salDos: 28.7, fuegoDos: 59.2, jalDos: 74.3, salInv: 41, fuegoInv: 55, jalInv: 61 },
  { tienda: "MT REY Periferico", salDos: 64.0, fuegoDos: 85.0, jalDos: 101.6, salInv: 64, fuegoInv: 91, jalInv: 69 },
  { tienda: "MT REY Rio Bravo", salDos: 55.3, fuegoDos: 84.0, jalDos: 84.0, salInv: 81, fuegoInv: 96, jalInv: 93 },
  { tienda: "MT MTY Ciudadela", salDos: 49.8, fuegoDos: 90.2, jalDos: 61.3, salInv: 64, fuegoInv: 87, jalInv: 81 },
  { tienda: "MT SAL Fundadores", salDos: 31.3, fuegoDos: 192.8, jalDos: 41.5, salInv: 66, fuegoInv: 124, jalInv: 77 },
  { tienda: "MT MTY Huinala", salDos: 20.7, fuegoDos: 51.5, jalDos: 15.6, salInv: 34, fuegoInv: 68, jalInv: 34 },
  { tienda: "MT MTY Buena Vista", salDos: 1090.9, fuegoDos: 0, jalDos: 2225.4, salInv: 156, fuegoInv: 160, jalInv: 158 },
  { tienda: "MT REY San Fernando", salDos: 28.0, fuegoDos: 26.0, jalDos: 25.3, salInv: 40, fuegoInv: 39, jalInv: 38 },
  { tienda: "MT MTY Lincoln", salDos: 28.7, fuegoDos: 63.5, jalDos: 39.0, salInv: 41, fuegoInv: 59, jalInv: 46 },
  { tienda: "MT MTY Anzures", salDos: 9.3, fuegoDos: 11.3, jalDos: 5.0, salInv: 20, fuegoInv: 23, jalInv: 12 },
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
        Inventario al 01-Mar-2026 · DDI (Días de Inventario) · Umbral: 15 días · Restock si 2+ sabores bajo · 22 tiendas activas
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
