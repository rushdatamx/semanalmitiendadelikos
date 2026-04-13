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
  { tienda: "MT MTY Aztlan", natDos: 5.2, fuegoDos: 5.7, jalDos: 10.5, natInv: 47, fuegoInv: 52, jalInv: 96 },
  { tienda: "MT NVO Reforma", natDos: 9.8, fuegoDos: 13.2, jalDos: 13.8, natInv: 233, fuegoInv: 224, jalInv: 236 },
  { tienda: "MT MTY Cabezada", natDos: 16.2, fuegoDos: 33.3, jalDos: 40.0, natInv: 243, fuegoInv: 331, jalInv: 300 },
  { tienda: "MT MAT Las Brisas", natDos: 19.7, fuegoDos: 20.1, jalDos: 26.0, natInv: 334, fuegoInv: 321, jalInv: 346 },
  { tienda: "MT SAL Fundadores", natDos: 20.1, fuegoDos: 24.0, jalDos: 23.1, natInv: 316, fuegoInv: 346, jalInv: 337 },
  { tienda: "MT MTY Garcia", natDos: 22.6, fuegoDos: 26.7, jalDos: 21.2, natInv: 349, fuegoInv: 310, jalInv: 289 },
  { tienda: "MT NVO Revolucion", natDos: 24.9, fuegoDos: 36.7, jalDos: 29.6, natInv: 375, fuegoInv: 398, jalInv: 393 },
  { tienda: "MT REY Rio Bravo", natDos: 31.0, fuegoDos: 38.6, jalDos: 40.1, natInv: 363, fuegoInv: 363, jalInv: 377 },
  { tienda: "MT MTY Valle de Sta Maria", natDos: 47.0, fuegoDos: 35.8, jalDos: 97.1, natInv: 109, fuegoInv: 92, jalInv: 163 },
  { tienda: "MT MTY Anzures", natDos: 41.4, fuegoDos: 76.4, jalDos: 49.5, natInv: 405, fuegoInv: 521, jalInv: 431 },
  { tienda: "MT SAL Satelite", natDos: 42.9, fuegoDos: 50.0, jalDos: 48.1, natInv: 641, fuegoInv: 634, jalInv: 613 },
  { tienda: "MT MTY Buena Vista", natDos: 45.6, fuegoDos: 58.2, jalDos: 45.8, natInv: 436, fuegoInv: 428, jalInv: 386 },
  { tienda: "MT MTY Zuazua", natDos: 48.6, fuegoDos: 48.7, jalDos: 28.1, natInv: 562, fuegoInv: 490, jalInv: 353 },
  { tienda: "MT MTY Ciudadela", natDos: 51.1, fuegoDos: 66.2, jalDos: 62.4, natInv: 548, fuegoInv: 572, jalInv: 544 },
  { tienda: "MT MTY Margaritas", natDos: 57.7, fuegoDos: 117.1, jalDos: 107.2, natInv: 435, fuegoInv: 435, jalInv: 429 },
  { tienda: "MT REY Periferico", natDos: 58.1, fuegoDos: 69.9, jalDos: 84.4, natInv: 531, fuegoInv: 529, jalInv: 603 },
  { tienda: "MT REY San Fernando", natDos: 59.7, fuegoDos: 62.8, jalDos: 63.8, natInv: 544, fuegoInv: 426, jalInv: 476 },
  { tienda: "MT MTY Lincoln", natDos: 60.9, fuegoDos: 84.8, jalDos: 146.0, natInv: 444, fuegoInv: 409, jalInv: 532 },
  { tienda: "MT MTY Metroplex", natDos: 60.7, fuegoDos: 78.7, jalDos: 40.4, natInv: 464, fuegoInv: 444, jalInv: 332 },
  { tienda: "MT MTY Huinala", natDos: 68.9, fuegoDos: 74.9, jalDos: 67.5, natInv: 632, fuegoInv: 586, jalInv: 583 },
  { tienda: "MT MTY Eloy Cavazos", natDos: 78.4, fuegoDos: 80.5, jalDos: 121.1, natInv: 501, fuegoInv: 503, jalInv: 545 },
  { tienda: "MT MTY Plaza del Bosque", natDos: 110.0, fuegoDos: 107.9, jalDos: 101.5, natInv: 503, fuegoInv: 551, jalInv: 475 },
  { tienda: "MT REY Bugambilias", natDos: 208.8, fuegoDos: 239.8, jalDos: 273.3, natInv: 977, fuegoInv: 865, jalInv: 937 },
  { tienda: "MT MTY San Roque", natDos: 265.3, fuegoDos: 188.3, jalDos: 294.9, natInv: 682, fuegoInv: 659, jalInv: 653 },
  { tienda: "MT REY Aeropuerto", natDos: 313.1, fuegoDos: 263.6, jalDos: 285.6, natInv: 615, fuegoInv: 499, jalInv: 551 },
];

function DosCell({ dos, inv }: { dos: number; inv: number }) {
  const low = dos > 0 && dos < UMBRAL;
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
        Inventario al 12-Abr-2026 · DDI (Dias de Inventario) · Umbral: 15 dias · 25 tiendas (excl. CEDIS) · OC activo
      </p>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex-1">
        <div className="overflow-y-auto max-h-[540px]">
          <table className="w-full text-xs">
            <thead className="sticky top-0 bg-gray-50 z-10">
              <tr>
                <th className="text-left px-4 py-2 text-gray-600 font-semibold border-b border-gray-200 w-[35%]">Tienda</th>
                <th className="text-center px-3 py-2 text-gray-600 font-semibold border-b border-gray-200">Natural 45gr</th>
                <th className="text-center px-3 py-2 text-gray-600 font-semibold border-b border-gray-200">Fuego 45gr</th>
                <th className="text-center px-3 py-2 text-gray-600 font-semibold border-b border-gray-200">Jalapeno 45gr</th>
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
        OC activo: 540 uds/semana (ultima OC: 10-Abr) · Excluye CEDIS Cat Monterrey
      </p>
    </SlideWrapper>
  );
}
