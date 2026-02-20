"use client";

import SlideWrapper from "./SlideWrapper";

type Status = "SIN PRODUCTO" | "RESTOCK" | "OK";

interface StoreRow {
  tienda: string;
  pdq340: Status;
  pdq45: Status;
}

const stores: StoreRow[] = [
  // SIN PRODUCTO first (opportunity)
  { tienda: "Cat Monterrey", pdq340: "SIN PRODUCTO", pdq45: "OK" },
  { tienda: "MT MTY Valle de Santa Maria", pdq340: "SIN PRODUCTO", pdq45: "RESTOCK" },
  { tienda: "MT MTY Aztlan", pdq340: "SIN PRODUCTO", pdq45: "OK" },
  { tienda: "MT REY Aeropuerto", pdq340: "SIN PRODUCTO", pdq45: "RESTOCK" },
  // RESTOCK both
  { tienda: "MT MAT Las Brisas", pdq340: "RESTOCK", pdq45: "RESTOCK" },
  { tienda: "MT NVO Reforma", pdq340: "RESTOCK", pdq45: "RESTOCK" },
  { tienda: "MT MTY Eloy Cavazos", pdq340: "RESTOCK", pdq45: "RESTOCK" },
  { tienda: "MT MTY Zuazua", pdq340: "RESTOCK", pdq45: "RESTOCK" },
  { tienda: "MT MTY Garcia", pdq340: "RESTOCK", pdq45: "RESTOCK" },
  { tienda: "MT MTY Cabezada", pdq340: "RESTOCK", pdq45: "RESTOCK" },
  { tienda: "MT NVO Revolucion", pdq340: "RESTOCK", pdq45: "RESTOCK" },
  { tienda: "MT MTY San Roque", pdq340: "RESTOCK", pdq45: "RESTOCK" },
  { tienda: "MT REY Periferico", pdq340: "RESTOCK", pdq45: "RESTOCK" },
  { tienda: "MT REY Rio Bravo", pdq340: "RESTOCK", pdq45: "RESTOCK" },
  { tienda: "MT MTY Ciudadela", pdq340: "RESTOCK", pdq45: "RESTOCK" },
  { tienda: "MT MTY Huinala", pdq340: "RESTOCK", pdq45: "RESTOCK" },
  { tienda: "MT REY San Fernando", pdq340: "RESTOCK", pdq45: "RESTOCK" },
  { tienda: "MT MTY Lincoln", pdq340: "RESTOCK", pdq45: "RESTOCK" },
  { tienda: "MT MTY Anzures", pdq340: "RESTOCK", pdq45: "RESTOCK" },
  { tienda: "MT MTY La Silla", pdq340: "RESTOCK", pdq45: "RESTOCK" },
  { tienda: "MT MTY Contry", pdq340: "RESTOCK", pdq45: "RESTOCK" },
  { tienda: "MT MTY Plaza del Bosque", pdq340: "RESTOCK", pdq45: "OK" },
  { tienda: "MT SAL Fundadores", pdq340: "RESTOCK", pdq45: "OK" },
  // OK
  { tienda: "MT REY Bugambilias", pdq340: "OK", pdq45: "OK" },
  { tienda: "MT SAL Satelite", pdq340: "OK", pdq45: "OK" },
  { tienda: "MT MTY Sendero", pdq340: "RESTOCK", pdq45: "RESTOCK" },
];

const statusConfig: Record<Status, { bg: string; text: string; label: string }> = {
  "SIN PRODUCTO": { bg: "bg-gray-100", text: "text-gray-500", label: "Oportunidad" },
  RESTOCK: { bg: "bg-orange-50", text: "text-orange-700", label: "Restock" },
  OK: { bg: "bg-green-50", text: "text-green-700", label: "OK" },
};

export default function Slide3MapaOportunidades() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-1">
        Mapa de Oportunidades por Tienda
      </h2>
      <p className="text-sm text-gray-500 mb-4">
        26 tiendas · Ordenadas por prioridad de oportunidad
      </p>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex-1">
        <div className="overflow-y-auto max-h-[530px]">
          <table className="w-full text-sm">
            <thead className="sticky top-0 bg-gray-50 z-10">
              <tr>
                <th className="text-left px-4 py-2.5 text-gray-600 font-semibold border-b border-gray-200">
                  Tienda
                </th>
                <th className="text-center px-4 py-2.5 text-gray-600 font-semibold border-b border-gray-200">
                  PDQ 340gr
                </th>
                <th className="text-center px-4 py-2.5 text-gray-600 font-semibold border-b border-gray-200">
                  PDQ 45gr
                </th>
              </tr>
            </thead>
            <tbody>
              {stores.map((s, i) => (
                <tr
                  key={i}
                  className="hover:bg-gray-50/50 transition-colors border-b border-gray-100 last:border-0"
                >
                  <td className="px-4 py-2 text-gray-800 font-medium">
                    {s.tienda}
                  </td>
                  {[s.pdq340, s.pdq45].map((status, j) => {
                    const cfg = statusConfig[status];
                    return (
                      <td key={j} className="text-center px-4 py-2">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${cfg.bg} ${cfg.text}`}
                        >
                          {cfg.label}
                        </span>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </SlideWrapper>
  );
}
