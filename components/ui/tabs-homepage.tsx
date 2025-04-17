"use client";

import { Tabs } from "../ui/tabs";

export function OferteSection() {
  const tabs = [
    {
      title: "București",
      value: "bucuresti",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-black bg-white border shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pachet Nuntă - București
          </h2>
          <p className="mb-4 text-base md:text-lg">
            Ideal pentru nunți elegante în capitală, cu muzică live și atmosferă
            de neuitat.
          </p>
          <ul className="list-disc list-inside text-sm md:text-base space-y-2 mb-6">
            <li>Formație completă (solist, instrumentiști)</li>
            <li>Sonorizare profesională</li>
            <li>DJ pentru momente de pauză</li>
            <li>Transport inclus în București</li>
            <li>Consultanță muzicală personalizată</li>
          </ul>
          <p className="text-xl font-semibold text-gray-800">De la 3.200€</p>
        </div>
      ),
    },
    {
      title: "Pitești",
      value: "pitesti",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-black bg-white border shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pachet Eveniment - Pitești
          </h2>
          <p className="mb-4 text-base md:text-lg">
            Soluția perfectă pentru petreceri private și evenimente corporate.
          </p>
          <ul className="list-disc list-inside text-sm md:text-base space-y-2 mb-6">
            <li>Solist + instrumentist (acordeon, saxofon)</li>
            <li>MC pentru atmosferă și anunțuri</li>
            <li>Sonorizare și lumini</li>
            <li>Playlist personalizat</li>
            <li>Transport inclus</li>
          </ul>
          <p className="text-xl font-semibold text-gray-800">De la 2.500€</p>
        </div>
      ),
    },
    {
      title: "Mioveni",
      value: "mioveni",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-black bg-white border shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pachet Complet - Mioveni
          </h2>
          <p className="mb-4 text-base md:text-lg">
            Tot ce ai nevoie pentru o petrecere memorabilă în Mioveni.
          </p>
          <ul className="list-disc list-inside text-sm md:text-base space-y-2 mb-6">
            <li>Formație completă (minim 5 membri)</li>
            <li>Lumini de scenă + fum greu</li>
            <li>Foto-video (opțional)</li>
            <li>Program artistic variat</li>
            <li>Asistență tehnică pe toată durata evenimentului</li>
          </ul>
          <p className="text-xl font-semibold text-gray-800">De la 3.500€</p>
        </div>
      ),
    },
  ];

  return (
    <section
      id="oferte"
      className="h-[45rem] md:h-[40rem] relative flex flex-col max-w-sm md:max-w-7xl mx-auto w-full items-start justify-start mb-52 px-4 md:px-0"
    >
      <div className="mb-10">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
          Descoperă pachetele noastre
        </h2>
        <p className="text-base md:text-lg text-gray-600 max-w-2xl">
          Indiferent de oraș, ai parte de servicii muzicale complete,
          personalizate pentru tipul tău de eveniment. Alege orașul și vezi ce
          ți-am pregătit!
        </p>
      </div>

      <Tabs tabs={tabs} />
    </section>
  );
}
