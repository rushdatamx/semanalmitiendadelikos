"use client";

import SlideWrapper from "./SlideWrapper";

interface Row {
  tienda: string;
  natDos: number;
  fuegoDos: number;
  jalDos: number;
  natInv: number;
  fuegoInv: number;
  jalInv: number;
}

const UMBRAL = 15;

const data: Row[] = [
  { tienda: "MT MAT Las Brisas", natDos: 3.0, fuegoDos: 3.6, jalDos: 4.7, natInv: 55, fuegoInv: 64, jalInv: 81 },
  { tienda: "MT NVO Reforma", natDos: 7.4, fuegoDos: 12.1, jalDos: 9.2, natInv: 178, fuegoInv: 194, jalInv: 162 },
  { tienda: "MT MTY Eloy Cavazos", natDos: 29.6, fuegoDos: 48.8, jalDos: 33.6, natInv: 263, fuegoInv: 380, jalInv: 306 },
  { tienda: "MT MTY Zuazua", natDos: 35.5, fuegoDos: 107.0, jalDos: 79.3, natInv: 479, fuegoInv: 474, jalInv: 453 },
  { tienda: "MT MTY Garcia", natDos: 31.5, fuegoDos: 17.3, jalDos: 23.1, natInv: 445, fuegoInv: 277, jalInv: 317 },
  { tienda: "MT MTY Cabezada", natDos: 13.4, fuegoDos: 31.5, jalDos: 49.4, natInv: 146, fuegoInv: 245, jalInv: 256 },
  { tienda: "MT MTY Plaza del Bosque", natDos: 20.4, fuegoDos: 41.8, jalDos: 33.3, natInv: 408, fuegoInv: 564, jalInv: 505 },
  { tienda: "MT REY Bugambilias", natDos: 130.4, fuegoDos: 146.5, jalDos: 129.7, natInv: 964, fuegoInv: 790, jalInv: 954 },
  { tienda: "MT MTY Metroplex", natDos: 85.1, fuegoDos: 162.3, jalDos: 94.6, natInv: 240, fuegoInv: 255, jalInv: 169 },
  { tienda: "MT SAL Satelite", natDos: 98.8, fuegoDos: 136.1, jalDos: 112.6, natInv: 759, fuegoInv: 768, jalInv: 724 },
  { tienda: "MT MTY Valle de Sta María", natDos: 98.5, fuegoDos: 129.9, jalDos: 257.0, natInv: 211, fuegoInv: 204, jalInv: 257 },
  { tienda: "MT MTY Margaritas", natDos: 221.8, fuegoDos: 285.2, jalDos: 338.4, natInv: 491, fuegoInv: 448, jalInv: 290 },
  { tienda: "MT NVO Revolucion", natDos: 20.7, fuegoDos: 23.0, jalDos: 13.5, natInv: 357, fuegoInv: 367, jalInv: 229 },
  { tienda: "MT MTY Aztlan", natDos: 280.0, fuegoDos: 257.8, jalDos: 132.5, natInv: 450, fuegoInv: 405, jalInv: 407 },
  { tienda: "MT MTY San Roque", natDos: 54.7, fuegoDos: 97.1, jalDos: 89.0, natInv: 471, fuegoInv: 510, jalInv: 467 },
  { tienda: "MT REY Periferico", natDos: 44.5, fuegoDos: 59.1, jalDos: 58.9, natInv: 496, fuegoInv: 464, jalInv: 469 },
  { tienda: "MT REY Rio Bravo", natDos: 74.6, fuegoDos: 119.0, jalDos: 76.0, natInv: 229, fuegoInv: 255, jalInv: 266 },
  { tienda: "MT MTY Ciudadela", natDos: 64.8, fuegoDos: 83.5, jalDos: 64.8, natInv: 500, fuegoInv: 468, jalInv: 419 },
  { tienda: "MT SAL Fundadores", natDos: 40.4, fuegoDos: 49.0, jalDos: 42.2, natInv: 571, fuegoInv: 544, jalInv: 519 },
  { tienda: "MT MTY Huinala", natDos: 113.2, fuegoDos: 107.3, jalDos: 119.8, natInv: 566, fuegoInv: 483, jalInv: 522 },
  { tienda: "MT REY Aeropuerto", natDos: 33.0, fuegoDos: 68.0, jalDos: 39.6, natInv: 204, fuegoInv: 170, jalInv: 181 },
  { tienda: "MT MTY Buena Vista", natDos: 42.4, fuegoDos: 52.7, jalDos: 50.4, natInv: 407, fuegoInv: 486, jalInv: 500 },
  { tienda: "MT REY San Fernando", natDos: 32.5, fuegoDos: 37.4, jalDos: 28.3, natInv: 259, fuegoInv: 183, jalInv: 171 },
  { tienda: "MT MTY Lincoln", natDos: 34.4, fuegoDos: 36.7, jalDos: 28.3, natInv: 227, fuegoInv: 245, jalInv: 215 },
  { tienda: "MT MTY Anzures", natDos: 99.7, fuegoDos: 139.3, jalDos: 89.4, natInv: 349, fuegoInv: 378, jalInv: 345 },
];

function DosCell({ dos, inv }: { dos: number; inv: number }) {
  const low = dos < UMBRAL;
  const dosDisplay = dos >= 100 ? Math.round(dos) : dos.toFixed(1);
  return (
    <span className={`text-xs font-semibold ${low ? "text-red-600" : "text-green-700"}`}>
      {dosDisplay}d <span className="text-[10px] font-normal text-gray-400">({inv} uds)</span>
    </span>
  );
}

export default function Slide8Detalle45() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-1">Detalle Inventario — PDQ 45gr</h2>
      <p className="text-sm text-gray-500 mb-3">
        Inventario al 01-Mar-2026 · DDI (Días de Inventario) · Umbral: 15 días · 25 tiendas · 100% cobertura
      </p>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex-1">
        <div className="overflow-y-auto max-h-[540px]">
          <table className="w-full text-xs">
            <thead className="sticky top-0 bg-gray-50 z-10">
              <tr>
                <th className="text-left px-4 py-2 text-gray-600 font-semibold border-b border-gray-200 w-[35%]">Tienda</th>
                <th className="text-center px-3 py-2 text-gray-600 font-semibold border-b border-gray-200">Natural 45gr</th>
                <th className="text-center px-3 py-2 text-gray-600 font-semibold border-b border-gray-200">Fuego 45gr</th>
                <th className="text-center px-3 py-2 text-gray-600 font-semibold border-b border-gray-200">Jalapeño 45gr</th>
                <th className="text-center px-3 py-2 text-gray-600 font-semibold border-b border-gray-200 w-[80px]">Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map((r, i) => {
                const doses = [r.natDos, r.fuegoDos, r.jalDos];
                const invs = [r.natInv, r.fuegoInv, r.jalInv];
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
                    <td className="text-center px-3 py-1.5"><DosCell dos={r.natDos} inv={r.natInv} /></td>
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
      <p className="text-[10px] text-blue-600 font-semibold mt-1 text-center">
        ✓ OC activo: 990 uds/semana (tendencia: +175% en 3 semanas)
      </p>
    </SlideWrapper>
  );
}
