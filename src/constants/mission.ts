// constants/mission.ts
export const MISSION_CONTENT = {
  title: "Guiding ethical stem cell research and technology.",
  heading: "Why We Exist",
  subheading: "",
  body: "The public deserves to understand how science is shaping the future of humanity. We exist to educate the public with scientific facts that clearly distinguish between ethical and unethical research. Our goal is to foster an informed debate that promotes therapies that are both effective and life-affirming. We provide this clarity by uniting credentialed experts across scientific fields. This collaboration allows us to counter misinformation and champion healing technologies that honor human dignity.",
  buttonText: "Support SALT",
  buttonHref: "/support",
  imageSrc: "/our-mission.svg",
  imageAlt: "Why We Exist",
  // Multiple images as an array
  images: [
    {
      src: "/why-we-exist.svg",
      alt: "Why We Exist - Image 1",
      priority: true,
    },
    {
      src: "/section-btn.svg",
      alt: "Why We Exist - Image 2",
      priority: false,
    },
    {
      src: "/our-mission-3.svg",
      alt: "Why We Exist - Image 3",
      priority: false,
    },
  ],
} as const;

// Separate constant for collaboration content
export const COLLABORATION_CONTENT = {
  title: "A New Collaboration for a New Era",
  description:
    "Our alliance bridges fields to keep ethics at the core of science and technology.",
  bridgeImage: "/bridge.png",
  fields: [
    {
      name: "Genomic Sciences & Gene Editing",
      icon: "/gen.svg",
      alt: "Genomic Sciences & Gene Editing icon",
    },
    {
      name: "Artificial Reproduction",
      icon: "/arti red.svg",
      alt: "Artificial Reproduction icon",
    },
    {
      name: "Stem Cell Research",
      icon: "/stem.svg",
      alt: "Stem Cell Research icon",
    },
    {
      name: "Embryology & Human Development",
      icon: "/emb.svg",
      alt: "Embryology & Human Development icon",
    },
    {
      name: "Biochemistry, Cell & Molecular Biology",
      icon: "/bio.svg",
      alt: "Biochemistry, Cell & Molecular Biology icon",
    },
    {
      name: "Artificial Intelligence",
      icon: "/art in.svg",
      alt: "Artificial Intelligence icon",
    },
  ],
} as const;

export const COLLA_CONTENT = {
  backgroundImage: "/bg-blue.svg", // Add background for why we exist section
} as const;
