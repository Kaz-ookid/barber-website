export const site = {
  name: "Burtin Barber",
  owner: "Rudy Burtin",
  city: "Lausanne",
  address: "Av. de Tivoli 6, 1007 Lausanne",
  phone: "+41 79 339 06 39",
  phoneHref: "tel:+41793390639",
  mapsUrl: "https://maps.google.com/?q=Av.+de+Tivoli+6,+1007+Lausanne",
  planityUrl: "https://www.planity.com/burtin-rudy-1007-lausanne",
  rating: "4.9",
  reviews: "144",
  instagram: "https://www.instagram.com/burtinbarber/",
  tiktok: "https://www.tiktok.com/@burtinbarber",
  youtube: "https://www.youtube.com/@Burtinbarber",
  handle: "@burtinbarber",
  chairRentalMail: "mailto:contact@burtinbarber.ch?subject=Location%20de%20chaise",
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
  { name: "Couleur / mèches", duration: "2 h 40", price: "sur devis" },
];

export const hours = [
  { day: "Lundi", time: "12:00 · 19:00" },
  { day: "Mardi", time: "07:40 · 19:00" },
  { day: "Mercredi", time: "07:40 · 19:00" },
  { day: "Jeudi", time: "07:40 · 19:00" },
  { day: "Vendredi", time: "07:40 · 19:00" },
  { day: "Samedi", time: "07:40 · 19:00" },
  { day: "Dimanche", time: "Fermé", closed: true },
];

const unsplash = (id: string, w: number) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;

export const images = {
  hero: unsplash("1503951914875-452162b0f3f1", 1600),
  rudy: unsplash("1567894340315-735d7c361db0", 800),
  interior: unsplash("1585747860715-2ba37e788b70", 1200),
  chair: unsplash("1512690459411-b9245aed614b", 800),
  tools: unsplash("1621605815971-fbc98d665033", 800),
  pomade: unsplash("1587909209111-5097ee578ec3", 800),
};

export interface GalleryItem {
  src: string;
  alt: string;
  label: string;
  tag: string;
}

export const gallery: GalleryItem[] = [
  {
    src: unsplash("1599351431202-1e0f0137899a", 800),
    alt: "Finition d'un dégradé au rasoir",
    label: "Dégradé bas",
    tag: "Rasoir",
  },
  {
    src: unsplash("1622286342621-4bd786c2447c", 800),
    alt: "Coupe aux ciseaux sur cheveux texturés",
    label: "Crop texturé",
    tag: "Ciseaux",
  },
  {
    src: unsplash("1493256338651-d82f7acb2b38", 800),
    alt: "Travail de nuque à la tondeuse",
    label: "Contours nets",
    tag: "Tondeuse",
  },
  {
    src: unsplash("1605497788044-5a32c7078486", 800),
    alt: "Coiffage et finitions en salon",
    label: "Coiffage",
    tag: "Styling",
  },
  {
    src: unsplash("1517832606299-7ae9b720a186", 800),
    alt: "Taille de barbe aux ciseaux",
    label: "Barbe sculptée",
    tag: "Barbe",
  },
  {
    src: unsplash("1593702288056-7927b442d0fa", 800),
    alt: "Coupe classique aux ciseaux",
    label: "Coupe classique",
    tag: "Ciseaux",
  },
];

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image?: string;
  featured?: boolean;
  placeholder?: boolean;
}

export const team: TeamMember[] = [
  {
    name: "Rudy Burtin",
    role: "Fondateur · Barbier",
    bio: "L'œil d'un visagiste, formé fauteuil après fauteuil. Précision tondeuse, maîtrise ciseaux, et une vidéo par jour pour le prouver.",
    image: unsplash("1567894340315-735d7c361db0", 800),
    featured: true,
  },
  {
    name: "Barbier invité",
    role: "Bientôt au salon",
    bio: "Le salon accueille régulièrement des barbiers invités. Annonce à venir.",
    placeholder: true,
  },
  {
    name: "Ta place ?",
    role: "Chaise à louer",
    bio: "Tu es barbier et tu cherches un fauteuil dans un salon qui tourne ? Le salon loue des chaises à la semaine ou au mois.",
    placeholder: true,
  },
];

export interface Product {
  name: string;
  kind: string;
  price: string;
  desc: string;
}

export const products: Product[] = [
  {
    name: "Pâte coiffante mate",
    kind: "Coiffage",
    price: "28.-",
    desc: "Fixation forte, fini mat. Celle que Rudy utilise au salon.",
  },
  {
    name: "Poudre texturisante",
    kind: "Volume",
    price: "24.-",
    desc: "Volume instantané à la racine, toucher naturel.",
  },
  {
    name: "Huile à barbe",
    kind: "Barbe",
    price: "22.-",
    desc: "Nourrit et discipline sans effet gras.",
  },
  {
    name: "Shampoing quotidien",
    kind: "Soin",
    price: "19.-",
    desc: "Doux, sans sulfates, pour un usage quotidien.",
  },
];

export const marqueeWords = [
  "Coupe sur-mesure",
  "Dégradé",
  "Barbe",
  "Transformation",
  "Coiffage",
  "Soins",
];

