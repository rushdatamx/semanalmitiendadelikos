"use client";

import SlideWrapper from "./SlideWrapper";

const stores = [
  { tienda: "MT MAT Las Brisas", pdq340: "OK", pdq45: "OK" },
  { tienda: "MT NVO Reforma", pdq340: "OK", pdq45: "OK" },
  { tienda: "MT MTY Eloy Cavazos", pdq340: "OK", pdq45: "OK" },
  { tienda: "MT MTY Zuazua", pdq340: "OK", pdq45: "OK" },
  { tienda: "MT MTY Garcia", pdq340: "OK", pdq45: "OK" },
  { tienda: "MT MTY Cabezada", pdq340: "OK", pdq45: "OK" },
  { tienda: "MT NVO Revolucion", pdq340: "OK", pdq45: "OK" },
  { tienda: "MT MTY San Roque", pdq340: "OK", pdq45: "OK" },
  { tienda: "MT REY Periferico", pdq340: "OK", pdq45: "OK" },
  { tienda: "MT REY Rio Bravo", pdq340: "OK", pdq45: "OK" },
  { tienda: "MT MTY Ciudadela", pdq340: "OK", pdq45: "OK" },
  { tienda: "MT MTY Huinala", pdq340: "OK", pdq45: "OK" },
  { tienda: "MT REY San Fernando", pdq340: "OK", pdq45: "OK" },
  { tienda: "MT MTY Lincoln", pdq340: "OK", pdq45: "OK" },
  { tienda: "MT MTY Anzures", pdq340: "OK", pdq45: "OK" },
  { tienda: "MT MTY La Silla", pdq340: "OK", pdq45: "OK" },
  { tienda: "MT MTY Contry", pdq340: "OK", pdq45: "OK" },
  { tienda: "MT MTY Plaza del Bosque", pdq340: "OK", pdq45: "OK" },
  { tienda: "MT SAL Fundadores", pdq340: "OK", pdq45: "OK" },
  { tienda: "MT REY Bugambilias", pdq340: "OK", pdq45: "OK" },
  { tienda: "MT SAL Satelite", pdq340: "OK", pdq45: "OK" },
  { tienda: "MT MTY Sendero", pdq340: "OK", pdq45: "OK" },
  { tienda: "MT MTY Margaritas", pdq340: "OK", pdq45: "OK" },
  { tienda: "MT MTY Metroplex", pdq340: "OK", pdq45: "OK" },
  { tienda: "MT MTY Buena Vista", pdq340: "OK", pdq45: "OK" },
];

export default function Slide3MapaOportunidades() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-1">Mapa de Presencia por Tienda</h2>
      <p className="text-sm text-gray-500 mb-4">25 tiendas con ambos PDQs · Cobertura PDQ 340gr: 88% · Cobertura PDQ 45gr: 100%</p>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex-1">
        <div className="overflow-y-auto max-h-[530px]">
          <table className="w-full text-sm">
            <thead className="sticky top-0 bg-gray-50 z-10">
              <tr>
                <th className="text-left px-4 py-2.5 text-gray-600 font-semibold border-b border-gray-200">Tienda</th>
                <th className="text-center px-4 py-2.5 text-gray-600 font-semibold border-b border-gray-200">PDQ 340gr</th>
                <th className="text-center px-4 py-2.5 text-gray-600 font-semibold border-b border-gray-200">PDQ 45gr</th>
              </tr>
            </thead>
            <tbody>
              {stores.map((s, i) => (
                <tr key={i} className="hover:bg-gray-50/50 transition-colors border-b border-gray-100 last:border-0">
                  <td className="px-4 py-2 text-gray-800 font-medium">{s.tienda}</td>
                  <td className="text-center px-4 py-2">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-green-50 text-green-700">
                      OK
                    </span>
                  </td>
                  <td className="text-center px-4 py-2">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-green-50 text-green-700">
                      OK
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </SlideWrapper>
  );
}
