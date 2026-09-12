import { KITCHENS, PORTRAITS, DETAILS, img } from "./images";

/* ------------------------------------------------------------------ */
/*  Company                                                           */
/* ------------------------------------------------------------------ */

export const COMPANY = {
  name: "Absolute Keukens",
  tagline: "De slimme make over voor jouw keuken",
  claim: "Een compleet nieuwe keuken. Zonder verbouwen.",
  phone: "010 322 07 35",
  phoneHref: "tel:+31103220735",
  whatsapp: "https://wa.me/31103220735",
  email: "info@absolutecustomz.com",
  emailHref: "mailto:info@absolutecustomz.com",
  address: "Leerlooierstraat 155P, 3194 AB Hoogvliet Rotterdam",
  kvk: "KvK 12345678",
  btw: "BTW NL0000.00.000.B01",
  socials: {
    instagram: "https://instagram.com/absolutekeukens",
    tiktok: "https://tiktok.com/@absolutekeukens",
    facebook: "https://facebook.com/absolutekeukens",
  },
} as const;

/* ------------------------------------------------------------------ */
/*  Navigation                                                        */
/* ------------------------------------------------------------------ */

export const NAV = [
  { label: "Diensten", href: "/diensten" },
  { label: "Werkwijze", href: "/werkwijze" },
  { label: "Projecten", href: "/projecten" },
  { label: "Kleuren", href: "/kleuren" },
  { label: "Over ons", href: "/over-ons" },
] as const;

export const FOOTER_LINKS = {
  keuken: [
    { label: "Keuken wrappen", href: "/diensten#wrappen" },
    { label: "Fronten vernieuwen", href: "/diensten#fronten" },
    { label: "Werkbladen", href: "/diensten#werkbladen" },
    { label: "Grepen en details", href: "/diensten#details" },
  ],
  bedrijf: [
    { label: "Over ons", href: "/over-ons" },
    { label: "Werkwijze", href: "/werkwijze" },
    { label: "Projecten", href: "/projecten" },
    { label: "Veelgestelde vragen", href: "/veelgestelde-vragen" },
  ],
  service: [
    { label: "Prijs berekenen", href: "/prijs-berekenen" },
    { label: "Kleurenoverzicht", href: "/kleuren" },
    { label: "Contact", href: "/contact" },
    { label: "Offerte aanvragen", href: "/contact#offerte" },
  ],
} as const;

/* ------------------------------------------------------------------ */
/*  Trust bar                                                         */
/* ------------------------------------------------------------------ */

export const TRUST = [
  { value: "500+", label: "Keukens vernieuwd" },
  { value: "4,9", label: "Gemiddeld op reviews" },
  { value: "10 jaar", label: "Garantie op folie" },
  { value: "1 dag", label: "Gemiddelde plaatsing" },
] as const;

/* ------------------------------------------------------------------ */
/*  Services                                                          */
/* ------------------------------------------------------------------ */

export const SERVICES = [
  {
    id: "wrappen",
    icon: "layers",
    title: "Keuken wrappen",
    short: "Nieuwe uitstraling met hoogwaardige folie",
    body: "Wij wrappen jouw bestaande fronten, kasten en panelen met premium meubelfolie. Het resultaat voelt strak en nieuw, terwijl jouw vertrouwde indeling gewoon blijft staan.",
    image: KITCHENS.matteGreen,
    points: ["Mat, zijdeglans of houtstructuur", "Bestand tegen vocht en vet", "Naadloze afwerking"],
  },
  {
    id: "fronten",
    icon: "panels",
    title: "Fronten vernieuwen",
    short: "Deurtjes en lades in een frisse look",
    body: "Van klassiek naar strak of van hoogglans naar mat. We vernieuwen de fronten volledig, inclusief zichtzijden en kopse kanten, voor een egale en luxe uitstraling.",
    image: KITCHENS.handleless,
    points: ["Ruim honderd kleuren", "Perfecte pasvorm", "Snelle montage"],
  },
  {
    id: "werkbladen",
    icon: "slab",
    title: "Werkbladen",
    short: "Een blad dat de keuken afmaakt",
    body: "Kies een nieuw werkblad in steenlook, beton of warm hout. Wij meten in, produceren op maat en plaatsen alles strak aansluitend op jouw keuken.",
    image: DETAILS.worktop,
    points: ["Steen, beton en houtlook", "Naadloos ingemeten", "Hittebestendig"],
  },
  {
    id: "details",
    icon: "handle",
    title: "Grepen en details",
    short: "De finishing touch die het verschil maakt",
    body: "Nieuwe grepen, verlichting onder de kasten en verzorgde kitranden. De kleine details tillen het eindresultaat naar een hoger niveau.",
    image: KITCHENS.detail,
    points: ["Moderne grepen", "Sfeervolle verlichting", "Verzorgde randafwerking"],
  },
] as const;

/* ------------------------------------------------------------------ */
/*  Process                                                           */
/* ------------------------------------------------------------------ */

export const PROCESS = [
  {
    step: "01",
    title: "Bereken je prijs",
    body: "Upload een paar foto's van je keuken. Je ontvangt direct een heldere prijsindicatie op maat, zonder verplichtingen.",
  },
  {
    step: "02",
    title: "Advies en kleuren",
    body: "We komen langs of bespreken online jouw wensen. Samen kies je de kleur, structuur en materialen die bij jouw huis passen.",
  },
  {
    step: "03",
    title: "Op maat gemaakt",
    body: "Alles wordt exact ingemeten en in ons atelier voorbereid. Zo verloopt de plaatsing snel en tot in de puntjes verzorgd.",
  },
  {
    step: "04",
    title: "Klaar in één dag",
    body: "Ons team plaatst jouw vernieuwde keuken vaak binnen één werkdag. 's Avonds kook je alweer in een keuken die als nieuw voelt.",
  },
] as const;

/* ------------------------------------------------------------------ */
/*  Why choose us                                                     */
/* ------------------------------------------------------------------ */

export const REASONS = [
  {
    icon: "leaf",
    title: "Duurzaam vernieuwen",
    body: "Jouw keuken hoeft niet naar de container. Wij geven het bestaande karkas een tweede leven en besparen zo bergen afval.",
  },
  {
    icon: "wallet",
    title: "Tot zestig procent voordeliger",
    body: "Een make over kost een fractie van een volledig nieuwe keuken. Hetzelfde luxe gevoel, een veel vriendelijker prijskaartje.",
  },
  {
    icon: "clock",
    title: "Weinig overlast",
    body: "Geen weken van stof en sloopwerk. We werken schoon, gericht en meestal ben je binnen een dag weer klaar.",
  },
  {
    icon: "shield",
    title: "Tien jaar garantie",
    body: "We werken met geteste, professionele materialen en geven tien jaar garantie op de folie. Kwaliteit waar je op bouwt.",
  },
] as const;

/* ------------------------------------------------------------------ */
/*  Projects (before / after)                                        */
/* ------------------------------------------------------------------ */

export const PROJECTS = [
  {
    id: "arkel",
    title: "Warme mat groene keuken",
    place: "Arkel",
    tag: "Wrappen + werkblad",
    before: KITCHENS.classic,
    after: KITCHENS.matteGreen,
  },
  {
    id: "dordrecht",
    title: "Strak greeploos in antraciet",
    place: "Dordrecht",
    tag: "Fronten + grepen",
    before: KITCHENS.compact,
    after: KITCHENS.handleless,
  },
  {
    id: "rotterdam",
    title: "Licht en tijdloos wit",
    place: "Rotterdam",
    tag: "Volledige make over",
    before: KITCHENS.interior,
    after: KITCHENS.minimalWhite,
  },
  {
    id: "bergen",
    title: "Natuurlijk hout met steenlook",
    place: "Bergen op Zoom",
    tag: "Wrappen + werkblad",
    before: KITCHENS.airy,
    after: KITCHENS.woodWarm,
  },
  {
    id: "spijkenisse",
    title: "Marmerlook met messing",
    place: "Spijkenisse",
    tag: "Fronten + details",
    before: KITCHENS.bright,
    after: KITCHENS.marble,
  },
  {
    id: "barendrecht",
    title: "Robuust eiland in loftstijl",
    place: "Barendrecht",
    tag: "Volledige make over",
    before: KITCHENS.cabinetry,
    after: KITCHENS.islandDark,
  },
] as const;

/* ------------------------------------------------------------------ */
/*  Testimonials                                                      */
/* ------------------------------------------------------------------ */

export const TESTIMONIALS = [
  {
    quote:
      "Onze keuken voelt weer als nieuw en niemand gelooft dat het dezelfde is. Strak werk en een topresultaat.",
    author: "Familie De Vries, Rotterdam",
    image: img(PORTRAITS.a, { w: 240, h: 240 }),
    alt: "Portret van een tevreden klant",
  },
  {
    quote:
      "Binnen één dag stond alles er en het was netjes achtergelaten. De afwerking is echt tot in de puntjes.",
    author: "Sanne Bakker, Dordrecht",
    image: img(PORTRAITS.f, { w: 240, h: 240 }),
    alt: "Portret van een tevreden klant",
  },
  {
    quote:
      "Prettig advies, eerlijke prijs en een resultaat dat je in een dure showroom verwacht. Echt een aanrader.",
    author: "Mark Jansen, Spijkenisse",
    image: img(PORTRAITS.b, { w: 240, h: 240 }),
    alt: "Portret van een tevreden klant",
  },
  {
    quote:
      "We twijfelden tussen nieuw of vernieuwen. Blij dat we hebben gewrapt, want het scheelde duizenden euro's.",
    author: "Ayoub El Amrani, Barendrecht",
    image: img(PORTRAITS.h, { w: 240, h: 240 }),
    alt: "Portret van een tevreden klant",
  },
  {
    quote:
      "De prijsindicatie via de foto's klopte verrassend goed. Vlot geregeld en heel vriendelijk team.",
    author: "Linda Visser, Bergen op Zoom",
    image: img(PORTRAITS.c, { w: 240, h: 240 }),
    alt: "Portret van een tevreden klant",
  },
] as const;

/* ------------------------------------------------------------------ */
/*  Colours / materials                                               */
/* ------------------------------------------------------------------ */

export const COLOR_GROUPS = [
  {
    name: "Warme neutralen",
    swatches: [
      { name: "Zand", hex: "#D9C7A6" },
      { name: "Klei", hex: "#C9A87C" },
      { name: "Mokka", hex: "#7C5A3A" },
      { name: "Room", hex: "#EDE6D6" },
    ],
  },
  {
    name: "Diepe tinten",
    swatches: [
      { name: "Olijf", hex: "#3F5540" },
      { name: "Antraciet", hex: "#2C2E2C" },
      { name: "Marine", hex: "#243447" },
      { name: "Bosgroen", hex: "#2B3B2C" },
    ],
  },
  {
    name: "Zacht en licht",
    swatches: [
      { name: "Krijtwit", hex: "#F3EFE7" },
      { name: "Mist", hex: "#CFD3CC" },
      { name: "Salie", hex: "#A9B39B" },
      { name: "Parel", hex: "#E4E1DA" },
    ],
  },
  {
    name: "Natuur en steen",
    swatches: [
      { name: "Eiken", hex: "#B08A55" },
      { name: "Walnoot", hex: "#5B4231" },
      { name: "Marmer", hex: "#E9E6E1" },
      { name: "Beton", hex: "#9A9793" },
    ],
  },
] as const;

export const FINISHES = [
  { name: "Mat", image: DETAILS.swatch1, note: "Fluweelzachte, moderne look" },
  { name: "Zijdeglans", image: DETAILS.swatch2, note: "Subtiele glans met diepte" },
  { name: "Houtstructuur", image: DETAILS.swatch3, note: "Voelbaar natuurlijk hout" },
  { name: "Steenlook", image: DETAILS.swatch4, note: "Robuust en tijdloos" },
] as const;

/* ------------------------------------------------------------------ */
/*  Packages / pricing                                                */
/* ------------------------------------------------------------------ */

export const PACKAGES = [
  {
    name: "Kleine keuken",
    size: "Tot 4 lades en 5 kasten",
    from: 449,
    featured: false,
    points: [
      "Fronten en zichtzijden gewrapt",
      "Premium folie in jouw kleur",
      "Vakkundige montage",
      "Tien jaar garantie",
    ],
  },
  {
    name: "Middelgrote keuken",
    size: "Tot 6 lades en 9 kasten",
    from: 799,
    featured: true,
    points: [
      "Alles uit het kleine pakket",
      "Grotere fronten en panelen",
      "Nieuwe grepen naar keuze",
      "Voorrang in de planning",
    ],
  },
  {
    name: "Grote keuken",
    size: "Tot 8 lades en 12 kasten",
    from: 1099,
    featured: false,
    points: [
      "Alles uit het middelgrote pakket",
      "Eiland of extra kastenwand",
      "Advies aan huis met stalen",
      "Optioneel nieuw werkblad",
    ],
  },
] as const;

/* ------------------------------------------------------------------ */
/*  FAQ                                                                */
/* ------------------------------------------------------------------ */

export const FAQS = [
  {
    q: "Wat is keuken wrappen precies?",
    a: "Bij wrappen brengen we een hoogwaardige folie aan over jouw bestaande fronten, kasten en panelen. Je krijgt een compleet nieuwe uitstraling zonder dat de keuken eruit hoeft. Snel, netjes en een stuk voordeliger dan een nieuwe keuken.",
  },
  {
    q: "Hoelang gaat de folie mee?",
    a: "Wij werken met professionele meubelfolie die is gemaakt voor intensief gebruik in de keuken. Bij normaal gebruik gaat het vele jaren mee en je krijgt tien jaar garantie op de folie zelf.",
  },
  {
    q: "Hoelang duurt de plaatsing?",
    a: "De meeste keukens vernieuwen we binnen één werkdag. Bij grotere projecten met werkbladen kan het iets langer duren. We stemmen de planning altijd vooraf met je af.",
  },
  {
    q: "Kan ik daarna nog gewoon schoonmaken?",
    a: "Zeker. De folie is bestand tegen vocht en vet en je maakt het simpel schoon met een vochtige doek. Agressieve schuurmiddelen raden we af, net als bij een reguliere keuken.",
  },
  {
    q: "Hoe werkt de prijsindicatie met foto's?",
    a: "Je uploadt een paar foto's van je keuken vanuit verschillende hoeken. Ons systeem herkent de fronten, lades en panelen en zet dit om in een heldere richtprijs. De definitieve offerte volgt na een controle door ons team.",
  },
  {
    q: "Zitten er kosten aan een prijsindicatie?",
    a: "Nee. De prijsindicatie en het bijbehorende advies zijn volledig gratis en vrijblijvend. Je zit nergens aan vast tot je zelf besluit om door te gaan.",
  },
] as const;
