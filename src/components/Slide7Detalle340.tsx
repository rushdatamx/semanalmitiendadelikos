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
  { tienda: "MT NVO Reforma", salDos: 6.8, fuegoDos: 24.8, jalDos: 22.9, salInv: 16, fuegoInv: 39, jalInv: 36 },
  { tienda: "MT SAL Fundadores", salDos: 13.5, fuegoDos: 68.7, jalDos: 23.5, salInv: 44, fuegoInv: 135, jalInv: 62 },
  { tienda: "MT MTY Garcia", salDos: 18.7, fuegoDos: 30.0, jalDos: 32.4, salInv: 52, fuegoInv: 74, jalInv: 81 },
  { tienda: "MT SAL Satelite", salDos: 18.7, fuegoDos: 258.2, jalDos: 21.0, salInv: 91, fuegoInv: 212, jalInv: 99 },
  { tienda: "MT NVO Revolucion", salDos: 20.2, fuegoDos: 16.1, jalDos: 37.7, salInv: 47, fuegoInv: 42, jalInv: 62 },
  { tienda: "MT MTY Anzures", salDos: 28.7, fuegoDos: 52.4, jalDos: 17.0, salInv: 41, fuegoInv: 58, jalInv: 28 },
  { tienda: "MT REY Periferico", salDos: 25.7, fuegoDos: 74.7, jalDos: 31.8, salInv: 56, fuegoInv: 112, jalInv: 67 },
  { tienda: "MT REY San Fernando", salDos: 28.5, fuegoDos: 85.0, jalDos: 56.0, salInv: 53, fuegoInv: 79, jalInv: 66 },
  { tienda: "MT MTY Eloy Cavazos", salDos: 28.6, fuegoDos: 44.6, jalDos: 35.9, salInv: 44, fuegoInv: 70, jalInv: 50 },
  { tienda: "MT MTY Ciudadela", salDos: 29.4, fuegoDos: 39.5, jalDos: 26.4, salInv: 65, fuegoInv: 86, jalInv: 68 },
  { tienda: "MT MTY Zuazua", salDos: 31.1, fuegoDos: 71.1, jalDos: 40.9, salInv: 61, fuegoInv: 99, jalInv: 73 },
  { tienda: "MT MTY Cabezada", salDos: 38.0, fuegoDos: 59.6, jalDos: 79.7, salInv: 61, fuegoInv: 83, jalInv: 94 },
  { tienda: "MT MTY Margaritas", salDos: 48.1, fuegoDos: 60.9, jalDos: 39.0, salInv: 79, fuegoInv: 113, jalInv: 78 },
  { tienda: "MT REY Rio Bravo", salDos: 54.9, fuegoDos: 65.9, jalDos: 101.6, salInv: 96, fuegoInv: 113, jalInv: 127 },
  { tienda: "MT MTY Buena Vista", salDos: 77.0, fuegoDos: 112.7, jalDos: 66.7, salInv: 154, fuegoInv: 177, jalInv: 150 },
  { tienda: "MT MAT Las Brisas", salDos: 79.0, fuegoDos: 68.7, jalDos: 85.1, salInv: 79, fuegoInv: 81, jalInv: 82 },
  { tienda: "MT REY Aeropuerto", salDos: 88.4, fuegoDos: 103.8, jalDos: 112.1, salInv: 60, fuegoInv: 63, jalInv: 64 },
  { tienda: "MT MTY Huinala", salDos: 131.8, fuegoDos: 46.3, jalDos: 127.5, salInv: 80, fuegoInv: 81, jalInv: 82 },
  { tienda: "MT MTY San Roque", salDos: 156.5, fuegoDos: 154.6, jalDos: 140.0, salInv: 95, fuegoInv: 105, jalInv: 105 },
  { tienda: "MT MTY Lincoln", salDos: 160.0, fuegoDos: 80.3, jalDos: 92.2, salInv: 80, fuegoInv: 86, jalInv: 79 },
  { tienda: "MT REY Bugambilias", salDos: 275.0, fuegoDos: 869.2, jalDos: 549.0, salInv: 157, fuegoInv: 186, jalInv: 196 },
  { tienda: "MT MTY Metroplex", salDos: 302.2, fuegoDos: 516.0, jalDos: 355.1, salInv: 97, fuegoInv: 129, jalInv: 114 },
  { tienda: "MT MTY Plaza del Bosque", salDos: 324.0, fuegoDos: 222.0, jalDos: 115.7, salInv: 81, fuegoInv: 119, jalInv: 95 },
  { tienda: "MT MTY Valle Sta Maria", salDos: null, fuegoDos: null, jalDos: null, salInv: null, fuegoInv: null, jalInv: null },
  { tienda: "MT MTY Aztlan", salDos: null, fuegoDos: null, jalDos: null, salInv: null, fuegoInv: null, jalInv: null },
];

function DosCell({ dos, inv }: { dos: number | null; inv: number | null }) {
  if (dos === null) {
    return (
      <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-red-100 text-red-600">
        Agotado
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
        Inventario al 12-Abr-2026 · DDI (Dias de Inventario) · Umbral: 15 dias · 25 tiendas (excl. CEDIS Cat Monterrey)
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
                if (r.salDos === null) {
                  return (
                    <tr key={i} className="bg-red-50/30 hover:bg-red-50/50 transition-colors border-b border-gray-100 last:border-0">
                      <td className="px-4 py-1.5 text-gray-800 font-medium">{r.tienda}</td>
                      <td className="text-center px-3 py-1.5"><DosCell dos={null} inv={null} /></td>
                      <td className="text-center px-3 py-1.5"><DosCell dos={null} inv={null} /></td>
                      <td className="text-center px-3 py-1.5"><DosCell dos={null} inv={null} /></td>
                      <td className="text-center px-3 py-1.5">
                        <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold bg-red-50 text-red-600">Agotado</span>
                      </td>
                    </tr>
                  );
                }
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
        Sin OC — PDQ 340gr no esta en sistema de OC de HEB · Excluye CEDIS Cat Monterrey
      </p>
    </SlideWrapper>
  );
}
