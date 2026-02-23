export const SITE_NAME = "AGC Logistics"
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://agclogistics.mq"
export const SITE_DESCRIPTION =
  "AGC Logistics assure la livraison à domicile de médicaments et produits de santé en Martinique. Partenaire de confiance pour les pharmacies et les patients."

export const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "contact@agclogistics.mq" // TODO: remplacer
export const CONTACT_PHONE = "TODO: +596 6XX XXX XXX" // TODO: numéro réel
export const CONTACT_ADDRESS = "TODO: Adresse complète, Martinique" // TODO

export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Pharmacies", href: "/pharmacies" },
  { label: "Patients", href: "/patients" },
  { label: "Comment ça marche", href: "/comment-ca-marche" },
  { label: "Zones couvertes", href: "/zones-couvertes" },
  { label: "FAQ", href: "/faq" },
  { label: "À propos", href: "/a-propos" },
  { label: "Blog", href: "/blog" },
]

export const ZONES_MARTINIQUE = [
  "Fort-de-France",
  "Le Lamentin",
  "Le Robert",
  "Sainte-Marie",
  "Le François",
  "Le Vauclin",
  "Rivière-Pilote",
  "Le Marin",
  "Les Trois-Îlets",
  "Le Diamant",
  "Sainte-Anne",
  "Le Sainte-Luce",
  "Le Carbet",
  "Saint-Pierre",
  "Le Morne-Rouge",
  "Basse-Pointe",
  "Macouba",
  "Grand'Rivière",
  "Ajoupa-Bouillon",
  "Fonds-Saint-Denis",
  "Bellefontaine",
  "Case-Pilote",
  "Schoelcher",
  "Ducos",
  "Rivière-Salée",
  "Anses-d'Arlet",
  "Saint-Esprit",
  "Gros-Morne",
  "Trinité",
  "Lorrain",
]
