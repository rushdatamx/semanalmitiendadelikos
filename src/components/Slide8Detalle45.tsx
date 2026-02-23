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
  { tienda: "MT MAT Las Brisas", natDos: 8.7, fuegoDos: 8.8, jalDos: 12.0, natInv: 192, fuegoInv: 179, jalInv: 209 },
  { tienda: "MT NVO Reforma", natDos: 13.7, fuegoDos: 19.9, jalDos: 22.1, natInv: 292, fuegoInv: 281, jalInv: 299 },
  { tienda: "MT MTY Eloy Cavazos", natDos: 55.3, fuegoDos: 47.9, jalDos: 44.2, natInv: 456, fuegoInv: 424, jalInv: 412 },
  { tienda: "MT MTY Zuazua", natDos: 32.0, fuegoDos: 62.7, jalDos: 64.6, natInv: 545, fuegoInv: 475, jalInv: 482 },
  { tienda: "MT MTY Garcia", natDos: 46.8, fuegoDos: 29.5, jalDos: 40.0, natInv: 535, fuegoInv: 376, jalInv: 413 },
  { tienda: "MT MTY Cabezada", natDos: 24.4, fuegoDos: 54.2, jalDos: 54.1, natInv: 234, fuegoInv: 333, jalInv: 288 },
  { tienda: "MT MTY Plaza del Bosque", natDos: 41.1, fuegoDos: 74.9, jalDos: 65.6, natInv: 613, fuegoInv: 733, jalInv: 715 },
  { tienda: "MT REY Bugambilias", natDos: 131.8, fuegoDos: 185.6, jalDos: 156.5, natInv: 998, fuegoInv: 835, jalInv: 1006 },
  { tienda: "MT MTY Metroplex", natDos: 48.3, fuegoDos: 83.0, jalDos: 44.2, natInv: 240, fuegoInv: 255, jalInv: 169 },
  { tienda: "MT SAL Satelite", natDos: 92.2, fuegoDos: 156.7, jalDos: 127.0, natInv: 807, fuegoInv: 817, jalInv: 780 },
  { tienda: "MT MTY Valle de Sta María", natDos: 172.4, fuegoDos: 144.1, jalDos: 269.7, natInv: 234, fuegoInv: 211, jalInv: 260 },
  { tienda: "MT MTY Margaritas", natDos: 351.1, fuegoDos: 169.5, jalDos: 205.7, natInv: 514, fuegoInv: 448, jalInv: 294 },
  { tienda: "MT NVO Revolucion", natDos: 22.0, fuegoDos: 27.5, jalDos: 19.4, natInv: 377, fuegoInv: 404, jalInv: 310 },
  { tienda: "MT MTY Aztlan", natDos: 280.0, fuegoDos: 758.3, jalDos: 248.6, natInv: 450, fuegoInv: 433, jalInv: 444 },
  { tienda: "MT MTY San Roque", natDos: 100.2, fuegoDos: 154.0, jalDos: 176.2, natInv: 562, fuegoInv: 561, jalInv: 560 },
  { tienda: "MT REY Periferico", natDos: 60.3, fuegoDos: 60.3, jalDos: 70.8, natInv: 564, fuegoInv: 510, jalInv: 521 },
  { tienda: "MT REY Rio Bravo", natDos: 122.0, fuegoDos: 127.5, jalDos: 85.4, natInv: 257, fuegoInv: 264, jalInv: 293 },
  { tienda: "MT MTY Ciudadela", natDos: 52.0, fuegoDos: 56.4, jalDos: 41.0, natInv: 552, fuegoInv: 502, jalInv: 442 },
  { tienda: "MT SAL Fundadores", natDos: 95.2, fuegoDos: 121.8, jalDos: 82.3, natInv: 748, fuegoInv: 696, jalInv: 644 },
  { tienda: "MT MTY Huinala", natDos: 65.8, fuegoDos: 61.5, jalDos: 76.5, natInv: 576, fuegoInv: 488, jalInv: 544 },
  { tienda: "MT REY Aeropuerto", natDos: 17.7, fuegoDos: 51.1, jalDos: 29.5, natInv: 137, fuegoInv: 186, jalInv: 157 },
  { tienda: "MT MTY Buena Vista", natDos: 48.7, fuegoDos: 69.9, jalDos: 65.2, natInv: 530, fuegoInv: 597, jalInv: 601 },
  { tienda: "MT REY San Fernando", natDos: 21.0, fuegoDos: 17.3, jalDos: 20.9, natInv: 215, fuegoInv: 124, jalInv: 157 },
  { tienda: "MT MTY Lincoln", natDos: 31.9, fuegoDos: 59.2, jalDos: 43.5, natInv: 237, fuegoInv: 334, jalInv: 300 },
  { tienda: "MT MTY Anzures", natDos: 145.9, fuegoDos: 237.5, jalDos: 158.5, natInv: 375, fuegoInv: 407, jalInv: 385 },
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
        Inventario al 22-Feb-2026 · DOS Unidades (Days of Stock) · Umbral: 15 días · 25 tiendas · 100% cobertura
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
                let belowCount = 0;
                if (r.natDos < UMBRAL) belowCount++;
                if (r.fuegoDos < UMBRAL) belowCount++;
                if (r.jalDos < UMBRAL) belowCount++;
                const needsRestock = belowCount >= 2;

                return (
                  <tr key={i} className={`hover:bg-gray-50/50 transition-colors border-b border-gray-100 last:border-0 ${needsRestock ? "bg-red-50/30" : ""}`}>
                    <td className="px-4 py-1.5 text-gray-800 font-medium">{r.tienda}</td>
                    <td className="text-center px-3 py-1.5"><DosCell dos={r.natDos} inv={r.natInv} /></td>
                    <td className="text-center px-3 py-1.5"><DosCell dos={r.fuegoDos} inv={r.fuegoInv} /></td>
                    <td className="text-center px-3 py-1.5"><DosCell dos={r.jalDos} inv={r.jalInv} /></td>
                    <td className="text-center px-3 py-1.5">
                      <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold ${needsRestock ? "bg-red-50 text-red-600" : "bg-green-50 text-green-700"}`}>
                        {needsRestock ? "Restock" : "OK"}
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
        Formato: días de stock (inventario en unidades) · Rojo = DOS &lt; 15 días · Restock si 2+ sabores bajo umbral
      </p>
    </SlideWrapper>
  );
}
