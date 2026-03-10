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
  { tienda: "MT MAT Las Brisas", natDos: 3.5, fuegoDos: 3.6, jalDos: 2.1, natInv: 65, fuegoInv: 58, jalInv: 33 },
  { tienda: "MT NVO Reforma", natDos: 5.6, fuegoDos: 11.6, jalDos: 8.9, natInv: 128, fuegoInv: 174, jalInv: 149 },
  { tienda: "MT MTY Plaza del Bosque", natDos: 11.7, fuegoDos: 28.2, jalDos: 20.4, natInv: 245, fuegoInv: 431, jalInv: 352 },
  { tienda: "MT MTY Cabezada", natDos: 12.0, fuegoDos: 13.7, jalDos: 26.0, natInv: 113, fuegoInv: 130, jalInv: 170 },
  { tienda: "MT MTY Lincoln", natDos: 15.2, fuegoDos: 18.6, jalDos: 11.2, natInv: 116, fuegoInv: 146, jalInv: 99 },
  { tienda: "MT MTY Garcia", natDos: 16.2, fuegoDos: 11.3, jalDos: 13.7, natInv: 284, fuegoInv: 184, jalInv: 204 },
  { tienda: "MT NVO Revolucion", natDos: 16.9, fuegoDos: 20.1, jalDos: 9.3, natInv: 287, fuegoInv: 300, jalInv: 159 },
  { tienda: "MT MTY Eloy Cavazos", natDos: 19.9, fuegoDos: 38.9, jalDos: 24.5, natInv: 194, fuegoInv: 317, jalInv: 238 },
  { tienda: "MT REY San Fernando", natDos: 29.8, fuegoDos: 31.8, jalDos: 21.3, natInv: 214, fuegoInv: 142, jalInv: 127 },
  { tienda: "MT MTY Buena Vista", natDos: 29.4, fuegoDos: 38.2, jalDos: 41.2, natInv: 320, fuegoInv: 401, jalInv: 431 },
  { tienda: "MT MTY San Roque", natDos: 34.0, fuegoDos: 48.2, jalDos: 51.4, natInv: 372, fuegoInv: 399, jalInv: 378 },
  { tienda: "MT REY Periferico", natDos: 35.3, fuegoDos: 59.6, jalDos: 58.3, natInv: 421, fuegoInv: 428, jalInv: 427 },
  { tienda: "MT MTY Zuazua", natDos: 39.3, fuegoDos: 97.1, jalDos: 61.7, natInv: 403, fuegoInv: 423, jalInv: 390 },
  { tienda: "MT SAL Fundadores", natDos: 42.6, fuegoDos: 35.7, jalDos: 35.4, natInv: 565, fuegoInv: 479, jalInv: 472 },
  { tienda: "MT MTY Anzures", natDos: 56.0, fuegoDos: 81.1, jalDos: 51.1, natInv: 294, fuegoInv: 333, jalInv: 290 },
  { tienda: "MT REY Aeropuerto", natDos: 63.0, fuegoDos: 91.8, jalDos: 54.4, natInv: 234, fuegoInv: 164, jalInv: 171 },
  { tienda: "MT REY Rio Bravo", natDos: 66.4, fuegoDos: 85.9, jalDos: 81.4, natInv: 211, fuegoInv: 230, jalInv: 250 },
  { tienda: "MT MTY Valle de Sta María", natDos: 71.1, fuegoDos: 120.9, jalDos: 157.6, natInv: 193, fuegoInv: 190, jalInv: 242 },
  { tienda: "MT MTY Ciudadela", natDos: 84.9, fuegoDos: 112.0, jalDos: 117.8, natInv: 482, fuegoInv: 448, jalInv: 408 },
  { tienda: "MT SAL Satelite", natDos: 131.1, fuegoDos: 147.1, jalDos: 98.7, natInv: 721, fuegoInv: 730, jalInv: 673 },
  { tienda: "MT MTY Huinala", natDos: 119.3, fuegoDos: 119.4, jalDos: 114.1, natInv: 507, fuegoInv: 452, jalInv: 481 },
  { tienda: "MT REY Bugambilias", natDos: 122.0, fuegoDos: 154.7, jalDos: 120.0, natInv: 928, fuegoInv: 779, jalInv: 930 },
  { tienda: "MT MTY Margaritas", natDos: 177.7, fuegoDos: 566.2, jalDos: 444.8, natInv: 476, fuegoInv: 445, jalInv: 286 },
  { tienda: "MT MTY Metroplex", natDos: 240.8, fuegoDos: 235.0, jalDos: 253.7, natInv: 215, fuegoInv: 235, jalInv: 154 },
  { tienda: "MT MTY Aztlan", natDos: 648.0, fuegoDos: 200.6, jalDos: 122.2, natInv: 440, fuegoInv: 394, jalInv: 397 },
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
        Inventario al 08-Mar-2026 · DDI (Días de Inventario) · Umbral: 15 días · 25 tiendas · OC activo
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
        OC activo: 1,035 uds/semana (última OC: 6-Mar)
      </p>
    </SlideWrapper>
  );
}
