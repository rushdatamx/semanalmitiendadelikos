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
  { tienda: "MT MTY Aztlan", natDos: 0.1, fuegoDos: 0.5, jalDos: 0.4, natInv: 2, fuegoInv: 7, jalInv: 6 },
  { tienda: "MT MTY Cabezada", natDos: 13.4, fuegoDos: 31.4, jalDos: 29.1, natInv: 340, fuegoInv: 393, jalInv: 365 },
  { tienda: "MT MAT Las Brisas", natDos: 34.2, fuegoDos: 15.0, jalDos: 41.2, natInv: 402, fuegoInv: 365, jalInv: 391 },
  { tienda: "MT NVO Reforma", natDos: 16.9, fuegoDos: 18.1, jalDos: 18.5, natInv: 472, fuegoInv: 391, jalInv: 405 },
  { tienda: "MT MTY Garcia", natDos: 25.9, fuegoDos: 26.4, jalDos: 20.3, natInv: 461, fuegoInv: 406, jalInv: 394 },
  { tienda: "MT SAL Fundadores", natDos: 27.5, fuegoDos: 35.3, jalDos: 32.1, natInv: 483, fuegoInv: 508, jalInv: 469 },
  { tienda: "MT REY Rio Bravo", natDos: 26.6, fuegoDos: 50.8, jalDos: 56.1, natInv: 511, fuegoInv: 477, jalInv: 505 },
  { tienda: "MT NVO Revolucion", natDos: 31.1, fuegoDos: 31.6, jalDos: 38.7, natInv: 542, fuegoInv: 499, jalInv: 518 },
  { tienda: "MT MTY Zuazua", natDos: 40.5, fuegoDos: 38.4, jalDos: 32.0, natInv: 623, fuegoInv: 556, jalInv: 451 },
  { tienda: "MT MTY Margaritas", natDos: 33.9, fuegoDos: 82.5, jalDos: 71.5, natInv: 435, fuegoInv: 438, jalInv: 429 },
  { tienda: "MT MTY Valle de Sta Maria", natDos: 34.8, fuegoDos: 31.2, jalDos: 72.5, natInv: 110, fuegoInv: 101, jalInv: 171 },
  { tienda: "MT MTY Ciudadela", natDos: 41.3, fuegoDos: 58.3, jalDos: 46.3, natInv: 616, fuegoInv: 641, jalInv: 591 },
  { tienda: "MT MTY Buena Vista", natDos: 42.9, fuegoDos: 50.9, jalDos: 43.3, natInv: 479, fuegoInv: 462, jalInv: 436 },
  { tienda: "MT MTY Anzures", natDos: 43.7, fuegoDos: 60.9, jalDos: 38.9, natInv: 457, fuegoInv: 554, jalInv: 478 },
  { tienda: "MT REY Periferico", natDos: 72.6, fuegoDos: 54.2, jalDos: 106.6, natInv: 611, fuegoInv: 569, jalInv: 666 },
  { tienda: "MT MTY Lincoln", natDos: 53.3, fuegoDos: 84.6, jalDos: 427.2, natInv: 453, fuegoInv: 423, jalInv: 534 },
  { tienda: "MT SAL Satelite", natDos: 53.7, fuegoDos: 60.4, jalDos: 57.3, natInv: 739, fuegoInv: 720, jalInv: 701 },
  { tienda: "MT REY San Fernando", natDos: 73.3, fuegoDos: 56.2, jalDos: 46.8, natInv: 601, fuegoInv: 480, jalInv: 515 },
  { tienda: "MT MTY Huinala", natDos: 102.4, fuegoDos: 93.9, jalDos: 84.5, natInv: 717, fuegoInv: 679, jalInv: 663 },
  { tienda: "MT MTY Metroplex", natDos: 91.9, fuegoDos: 138.8, jalDos: 24.3, natInv: 579, fuegoInv: 523, jalInv: 426 },
  { tienda: "MT MTY Eloy Cavazos", natDos: 194.6, fuegoDos: 78.3, jalDos: 229.2, natInv: 506, fuegoInv: 506, jalInv: 550 },
  { tienda: "MT REY Aeropuerto", natDos: 247.0, fuegoDos: 343.3, jalDos: 346.5, natInv: 638, fuegoInv: 515, jalInv: 567 },
  { tienda: "MT MTY San Roque", natDos: 250.6, fuegoDos: 187.5, jalDos: 431.6, natInv: 694, fuegoInv: 678, jalInv: 664 },
  { tienda: "MT REY Bugambilias", natDos: 231.9, fuegoDos: 423.9, jalDos: 420.3, natInv: 1017, fuegoInv: 913, jalInv: 970 },
  { tienda: "MT MTY Plaza del Bosque", natDos: 0.0, fuegoDos: 198.8, jalDos: 145.3, natInv: 529, fuegoInv: 581, jalInv: 503 },
  { tienda: "MT MTY Cat Monterrey", natDos: 0.0, fuegoDos: 0.0, jalDos: 0.0, natInv: 45, fuegoInv: 45, jalInv: 90 },
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
        Inventario al 06-Abr-2026 · DDI (Dias de Inventario) · Umbral: 15 dias · 26 tiendas · OC activo
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
        OC activo: 180 uds/semana (ultima OC: 27-Mar)
      </p>
    </SlideWrapper>
  );
}
