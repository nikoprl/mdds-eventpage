"use strict";

const json = {
  events: [
    {
      id: "1",
      time: "8.00-8.30",
      title: "Saapuminen Myllypuron D-talon aulassa",
      desc: "Tapahtumaan ilmoittautuminen Myllypuron kampuksen D-talon aulassa. Tapahtumaan osallistuminen edellyttää ennakkoilmoittautumista. ",
    },
    {
      id: "2",
      time: "8.30-9.00",
      title: "Verkostoitumista, virittäytymistä, pientä naposteltavaa aamuun",
      desc: "Siirtyminen Ravintolasaliin ja virittäytymistä tunnelmaan Ravintolasalin näyttelyissä.",
    },
    {
      id: "3",
      time: "9.00-10.00",
      title:
        "Keynote-puheenvuoro: Merkityksellisyyden kokemukset kestävän tulevaisuuden edellytyksenä ",
      desc: "Arto O. Salonen (KT), Anna-Maria Isola (VTT) & Laura Huhtinen-Hildén (FT, MuM)",
    },
    {
      id: "4",
      time: "10.15-11.15",
      title: "Luovuus työelämässä -rinnakkaissessiot 1",
      desc: "Rinnakkaissessio on tunnin mittainen syventyminen yhteen tulokulmaan luovuudesta työelämässä. Ilmoittautumisen yhteydessä valitset mihin sessioon osallistut. Sessioissa on rajallinen määrä osallistujapaikkoja, joihin otamme ilmoittautumisjärjestyksessä.",
    },
    {
      id: "5",
      time: "11.30-12.30",
      title: "Yhteistä ohjelmaa Ravintolasalissa",
      desc: "Inspiraatio-esitys: Kokemuksia luovuudesta – saamme vieraita Lahden seudulta, jotka esittävät inspiroivan esimerkin luovuuden merkityksestä arjen tukena.\n Keynote-puheenvuoro: Musiikki, mieli, keho ja aivot – miten musiikki meitä vahvistaa? Suvi Saarikallio (FT)",
    },
    {
      id: "6",
      time: "12.30-13.30",
      title:
        "Lounas Metropolian Sodexo-ravintolassa (omakustanne) ja siirtyminen iltapäivän rinnakkaissessioihin",
      desc: "",
    },
    {
      id: "7",
      time: "13.45-14.45",
      title: "Luovuus työelämässä -rinnakkaissessiot 2",
      desc: "Iltapäivän rinnakkaissessioiden tarjonta koostuu samasta sessiotarjonnasta kuin aamupäivällä (ks. ylempää). Osallistuja voi siis osallistua tapahtuman aikana kahteen erilaiseen rinnakkaissessioon. Omat sessiot valitaan ilmoittautumisen yhteydessä.",
    },
    {
      id: "8",
      time: "15.00",
      title: "Tapahtuma päättyy",
      desc: "",
    },
  ],
};

const renderEvents = () => {
  const timeline = document.querySelector(".timeline");

  for (let i = 0; i < json.events.length; i++) {
    const eventitem =
    `<li class="event" data-date="${json.events[i].time}">
      <h3>${json.events[i].title}</h3>
      <p>${json.events[i].desc}</p>
    </li>`;

    timeline.innerHTML += eventitem;
  }
};
