export interface PortfolioItem {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    title: "Landing Page de Desenvolvimento",
    description: "Site moderno para venda de serviços de desenvolvimento web, com design responsivo e seção de preços interativa.",
    image: "/img/landing-page-dev.jpg",
    tags: ["Next.js", "TailwindCSS", "Framer Motion", "Landing Page"],
    link: "https://sites-landing-page.vercel.app/"
  },
  {
    title: "Academic Fashion",
    description: "E-commerce de roupas esportivas com design moderno e foco em performance.",
    image: "/img/academic-fashion.jpg",
    tags: ["E-commerce", "React", "Design Responsivo", "UX/UI"],
    link: "https://academic-fashon-landingpage.netlify.app/"
  },
  {
    title: "Luxury Joias",
    description: "Site elegante para joalheria de luxo, com galeria de produtos e depoimentos de clientes.",
    image: "/img/luxury-joias.jpg",
    tags: ["Design Premium", "Galeria", "Animações", "Joalheria"],
    link: "https://landing-page-joalheiria-luxury.netlify.app/"
  },
  {
    title: "Portfólio Profissional",
    description: "Site pessoal com portfólio de serviços e soluções de desenvolvimento.",
    image: "/img/portfolio-services.jpg",
    tags: ["Portfólio", "Next.js", "Design Moderno", "Serviços"],
    link: "https://renan-portfolio-2025.vercel.app"
  }
]; 