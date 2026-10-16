export interface NavItem {
  href: string;
  label: string;
}

export interface Initiative {
  id: string;
  name: string;
  theme: string;
  summary: string;
  actionLabel: string;
  href: string;
  external: boolean;
  image?: string;
  imageAlt?: string;
  note?: string;
}

export interface IdeaPiece {
  title: string;
  source: string;
  href: string;
  summary: string;
}

export const navItems: NavItem[] = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#ideas", label: "Ideas" },
  { href: "#speaking", label: "Speaking" },
];

export const links = {
  studio: "https://studiocoka.com",
  studioJournal: "https://studiocoka.com/journal",
  linkedin: "https://www.linkedin.com/in/crystal-kizor",
  instagram: "https://www.instagram.com/crystalkizor/",
  tedx: "https://www.tedxportharcourt.com/speakers/a01411ad-22eb-4e92-9f94-6867a1f1446b",
  qazini:
    "https://www.qazini.com/crystal-kizor-is-designing-nigerian-buildings-that-breathe",
  issuu: "https://issuu.com/crystal-kizor",
  teaLinkedin: "https://www.linkedin.com/company/the-effective-architect",
  thinkingArchitectTalk: "https://luma.com/h37zgdhx",
} as const;

export const initiatives: Initiative[] = [
  {
    id: "studio-coka",
    name: "Studio COKA",
    theme: "Design and the built environment",
    summary:
      "A climate-responsive architecture, interior, and construction studio. Work is shaped by site, heat, light, air, and the people who will live in the building — not by fashion.",
    actionLabel: "Explore the studio",
    href: links.studio,
    external: true,
    image: "/images/coka-hero.jpeg",
    imageAlt:
      "Studio COKA rendering of a sculptural civic building with sweeping timber-toned roofs and a public plaza.",
  },
  {
    id: "elevated",
    name: "ELEvated",
    theme: "Design and the built environment",
    summary:
      "Contemporary furniture and product design rooted in African context, materials, and ideas — objects made to sit inside the same spatial language as the architecture.",
    actionLabel: "Ask about the collection",
    href: "#connect",
    external: false,
    image: "/images/coka-og.jpg",
    imageAlt:
      "Garden pavilion with laterite walls, timber furniture, and a shaded outdoor dining room.",
    note: "A dedicated collection site is not published yet. Enquiries are welcome through LinkedIn.",
  },
  {
    id: "tea",
    name: "The Effective Architect (TEA)",
    theme: "Education and opportunity",
    summary:
      "An architecture education and media platform helping architects and built-environment professionals think clearly, design with climate in mind, and build stronger careers.",
    actionLabel: "Follow TEA",
    href: links.teaLinkedin,
    external: true,
  },
  {
    id: "ako",
    name: "AKO Alliance",
    theme: "Education and opportunity",
    summary:
      "An initiative focused on expanding access to education and creating opportunities for children and young people.",
    actionLabel: "Learn about the initiative",
    href: "#connect",
    external: false,
    note: "A public destination for AKO Alliance is not yet verified. Reach Crystal to learn more.",
  },
  {
    id: "speaking",
    name: "Speaking",
    theme: "Ideas and public engagement",
    summary:
      "Talks and conversations on architecture, climate-responsive design, African cities, entrepreneurship, and the built environment — including TEDxPortHarcourt.",
    actionLabel: "Invite Crystal to speak",
    href: "#speaking",
    external: false,
  },
  {
    id: "personal",
    name: "Crystal Kizor",
    theme: "Ideas and public engagement",
    summary:
      "Research, writing, authorship, and media that sit under the personal brand: how we build in hot climates, and what that asks of culture, craft, and care.",
    actionLabel: "Read her work",
    href: "#ideas",
    external: false,
  },
  {
    id: "alive",
    name: "Alive and Free",
    theme: "Faith and personal development",
    summary:
      "A Christian youth movement helping young people explore truth, healing, freedom, identity, purpose, and life in Christ.",
    actionLabel: "Discover the movement",
    href: "#connect",
    external: false,
    image: "/images/portrait-gold.jpg",
    imageAlt:
      "Crystal Kizor standing before a wall of climbing greenery, wearing a gold ensemble.",
    note: "A public site for Alive and Free is not yet verified.",
  },
];

export const ideaPieces: IdeaPiece[] = [
  {
    title: "Crystal Kizor Is Designing Nigerian Buildings That Breathe",
    source: "Qazini / bird story agency",
    href: links.qazini,
    summary:
      "A reported portrait of climate-first design in Enugu and Nsukka — orientation, light, and buildings that stay cooler without defaulting to air conditioning.",
  },
  {
    title: "Rethinking the Tropical Home: Beyond Walls and Air Conditioning",
    source: "Studio COKA Journal",
    href: links.studioJournal,
    summary:
      "Notes from practice on homes that collaborate with climate, written from the studio Crystal leads.",
  },
  {
    title: "Architecture & Interiors Portfolio",
    source: "Issuu",
    href: links.issuu,
    summary:
      "A published architecture and interiors portfolio collecting drawings, spatial studies, and project thinking.",
  },
];

export const speakingTopics = [
  "Climate-responsive architecture in hot climates",
  "Indigenous and modern African design",
  "Cities, materials, and energy",
  "Entrepreneurship in the built environment",
  "Design education and professional practice",
];
