export const site = {
  name: "Burtin Barber",
  barber: "Rudy Burtin",
  city: "Lausanne",
  address: "Av. de Tivoli 6, 1007 Lausanne",
  phone: "+41 79 339 06 39",
  phoneHref: "tel:+41793390639",
  planityUrl: "https://www.planity.com/burtin-rudy-1007-lausanne",
  mapsUrl: "https://maps.google.com/?q=Av.+de+Tivoli+6,+1007+Lausanne",
  rating: "4.9",
  reviews: "144",
  instagram: "https://www.instagram.com/burtinbarber/",
  tiktok: "https://www.tiktok.com/@burtinbarber",
  youtube: "https://www.youtube.com/@Burtinbarber",
  handle: "@burtinbarber",
};

export interface Service {
  name: string;
  duration: string;
  price: string;
  note?: string;
  featured?: boolean;
}

export const services: Service[] = [
  { name: "Coupe", duration: "40 min", price: "50.-" },
  { name: "Coupe + barbe", duration: "1 h", price: "65.-" },
  { name: "Taille de barbe", duration: "30 min", price: "35.-" },
  {
    name: "Coupe transformation",
    duration: "1 h",
    price: "65.-",
    note: "Nouveau style, étude du visage comprise",
  },
  { name: "Transformation + barbe", duration: "1 h 15", price: "75.-" },
  {
    name: "Burtin Signature",
    duration: "1 h 30",
    price: "95.-",
    note: "L'expérience complète : diagnostic, coupe, barbe, soins",
    featured: true,
  },
  { name: "Forfait étudiant, coupe + barbe", duration: "45 min", price: "57.-" },
  { name: "Accès prioritaire", duration: "30 min", price: "dès 70.-" },
  { name: "Couleur / mèches", duration: "2 h 40", price: "sur devis" },
  { name: "Coupe à domicile", duration: "sur rendez-vous", price: "dès 75.-" },
];

export const hours = [
  { day: "Lundi", time: "12:00 · 19:30" },
  { day: "Mardi", time: "07:00 · 19:30" },
  { day: "Mercredi", time: "07:00 · 19:30" },
  { day: "Jeudi", time: "07:00 · 19:30" },
  { day: "Vendredi", time: "07:00 · 19:30" },
  { day: "Samedi", time: "07:00 · 19:30" },
  { day: "Dimanche", time: "Fermé", closed: true },
];

const unsplash = (id: string, w: number, extra = "") =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop${extra}`;

export const images = {
  hero: unsplash("1503951914875-452162b0f3f1", 1800),
  portraitWork: unsplash("1567894340315-735d7c361db0", 900),
  chair: unsplash("1512690459411-b9245aed614b", 900),
  shopInterior: unsplash("1585747860715-2ba37e788b70", 1400),
  tools: unsplash("1621605815971-fbc98d665033", 900),
  pomade: unsplash("1587909209111-5097ee578ec3", 900),
};

export interface PortfolioItem {
  src: string;
  alt: string;
  label: string;
  tag: string;
}

export const portfolio: PortfolioItem[] = [
  {
    src: unsplash("1599351431202-1e0f0137899a", 900),
    alt: "Finition d'un dégradé au rasoir",
    label: "Dégradé bas",
    tag: "Rasoir",
  },
  {
    src: unsplash("1622286342621-4bd786c2447c", 900),
    alt: "Coupe aux ciseaux sur cheveux texturés",
    label: "Crop texturé",
    tag: "Ciseaux",
  },
  {
    src: unsplash("1493256338651-d82f7acb2b38", 900),
    alt: "Travail de nuque à la tondeuse",
    label: "Contours nets",
    tag: "Tondeuse",
  },
  {
    src: unsplash("1605497788044-5a32c7078486", 900),
    alt: "Coiffage et finitions en salon",
    label: "Coiffage",
    tag: "Styling",
  },
  {
    src: unsplash("1517832606299-7ae9b720a186", 900),
    alt: "Taille de barbe aux ciseaux",
    label: "Barbe sculptée",
    tag: "Barbe",
  },
  {
    src: unsplash("1593702288056-7927b442d0fa", 900),
    alt: "Coupe classique aux ciseaux",
    label: "Coupe classique",
    tag: "Ciseaux",
  },
];

export const marqueeWords = [
  "Tondeuse",
  "Ciseaux",
  "Barbe",
  "Dégradé",
  "Transformation",
  "Sur-mesure",
];
