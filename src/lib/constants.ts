export const SITE_CONFIG = {
  name: "OmniCore Solutions",
  altName: "OmniCore Business Services",
  description: "Web2 + Web3 consultancy and one-stop shop for product, growth, partnerships.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://omnicore.vercel.app",
  ogImage: "/og-image.jpg",
  links: {
    twitter: "https://twitter.com/omnicore",
    linkedin: "https://linkedin.com/company/omnicore-solutions",
    github: "https://github.com/omnicore",
    telegram: "https://t.me/OmniCoreSolutions",
  },
} as const;

export const COMPANY_INFO = {
  email: "info@omnicoresolutions.io",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/contact", label: "Contact" },
] as const;

export const MISSION_STATEMENT = 
  "The web3 space is confusing and overwhelming, with many dynamics that projects often overlook before going to market. Let us leverage our wealth of knowledge to navigate these challenges for you.";

export const COMPETITION_STATEMENT = 
  "We have expertise in high places in the space, with relationships with anyone you would need for any opportunity in the market. If there is a fit for your product, we will find it.";

export const FINANCIAL_STATEMENT = 
  "With our help, we will make sure your project is not only successful but also planned and financed with the future in mind for long-term success.";

export const VALUES = [
  {
    title: "Honesty",
    description: "Transparent communication and clear expectations. We believe in being upfront about timelines, costs, and potential challenges.",
    icon: "shield-check",
  },
  {
    title: "Integrity",
    description: "Ethical practices and unwavering commitment to quality. We do what's right, not what's easy.",
    icon: "award",
  },
  {
    title: "Helpfulness",
    description: "Responsive support and knowledge sharing. We're here to empower your success at every step of the journey.",
    icon: "heart-handshake",
  },
] as const;

export const SERVICES = [
  {
    title: "Product Management & Development",
    description: "End-to-end product strategy, roadmap planning, and technical development to bring your vision to life.",
    icon: "package",
    details: [
      "Product strategy & roadmap",
      "Technical architecture",
      "Agile development",
      "Quality assurance",
    ],
  },
  {
    title: "Marketing & Go-to-Market",
    description: "Comprehensive marketing strategies tailored for Web2 and Web3 audiences to maximize your launch impact.",
    icon: "megaphone",
    details: [
      "Market research & positioning",
      "Content marketing",
      "Community building",
      "Launch strategy",
    ],
  },
  {
    title: "Launchpad Integration & Partnerships",
    description: "Strategic partnerships with leading launchpads to ensure your project gets the visibility it deserves.",
    icon: "rocket",
    details: [
      "Launchpad selection",
      "Application support",
      "Token sale strategy",
      "Community engagement",
    ],
  },
  {
    title: "Business Development & Strategic Alliances",
    description: "Leverage our network to forge partnerships that drive growth and open new opportunities.",
    icon: "handshake",
    details: [
      "Partnership strategy",
      "Deal sourcing",
      "Negotiation support",
      "Relationship management",
    ],
  },
  {
    title: "Web2 ↔ Web3 Bridges",
    description: "Navigate the intersection of traditional and blockchain technology with expert tokenomics advisory.",
    icon: "bridge",
    details: [
      "Tokenomics design",
      "Integration strategy",
      "Compliance consulting",
      "Migration planning",
    ],
  },
  {
    title: "Tooling Integration & Ops",
    description: "Streamline operations with enterprise-grade tools like Asana, Jira, and custom analytics solutions.",
    icon: "settings",
    details: [
      "Project management setup",
      "Analytics implementation",
      "Workflow automation",
      "Team training",
    ],
  },
] as const;

export const CASE_STUDIES = [
  {
    id: "defi-protocol-launch",
    title: "DeFi Protocol Launch",
    client: "AquaFinance",
    category: "Web3",
    challenge: "Launch a new DeFi protocol with complex tokenomics and regulatory considerations.",
    solution: "Comprehensive go-to-market strategy including tokenomics design, launchpad partnership, and community building.",
    results: "$50M TVL within 3 months, 25K+ active users, successful IDO on tier-1 launchpad.",
    image: "/images/case-studies/defi-protocol.jpg",
    tags: ["DeFi", "Tokenomics", "Community"],
  },
  {
    id: "nft-marketplace",
    title: "Enterprise NFT Marketplace",
    client: "ArtChain",
    category: "Web3",
    challenge: "Build a white-label NFT marketplace platform for enterprise clients with custom branding.",
    solution: "Full-stack development with Web3 integration, payment rails, and comprehensive admin dashboard.",
    results: "Platform launched in 4 months, onboarded 5 enterprise clients, 100K+ NFTs minted.",
    image: "/images/case-studies/nft-marketplace.jpg",
    tags: ["NFT", "Development", "Enterprise"],
  },
  {
    id: "web2-to-web3-migration",
    title: "Web2 to Web3 Migration",
    client: "GameVerse",
    category: "Web2",
    challenge: "Migrate existing gaming platform to incorporate blockchain rewards and NFT items.",
    solution: "Phased migration strategy with hybrid architecture, preserving user experience while adding Web3 features.",
    results: "Zero downtime migration, 40% increase in user engagement, new revenue stream from NFT sales.",
    image: "/images/case-studies/gaming-migration.jpg",
    tags: ["Gaming", "Migration", "NFT"],
  },
  {
    id: "dao-governance",
    title: "DAO Governance Platform",
    client: "CommunityDAO",
    category: "Web3",
    challenge: "Create a decentralized governance platform for a community of 50K+ members.",
    solution: "Custom DAO tooling with vote delegation, proposal templates, and on-chain execution.",
    results: "200+ proposals executed, 70% voter participation rate, seamless governance operations.",
    image: "/images/case-studies/dao-governance.jpg",
    tags: ["DAO", "Governance", "Tooling"],
  },
  {
    id: "saas-analytics",
    title: "SaaS Analytics Dashboard",
    client: "MetricsFlow",
    category: "Web2",
    challenge: "Build real-time analytics platform for tracking multi-chain crypto transactions.",
    solution: "Scalable data pipeline with custom indexers and intuitive dashboard with advanced filtering.",
    results: "Processing 1M+ transactions/day, <100ms query latency, 95% customer satisfaction.",
    image: "/images/case-studies/analytics-dashboard.jpg",
    tags: ["Analytics", "SaaS", "Development"],
  },
  {
    id: "partnership-strategy",
    title: "Strategic Partnership Program",
    client: "ChainBridge",
    category: "Web3",
    challenge: "Establish partnerships with 10+ major blockchain ecosystems for cross-chain protocol.",
    solution: "Comprehensive BD strategy with targeted outreach, value proposition development, and deal structuring.",
    results: "12 partnerships secured in 6 months, $5M in partnership grants, 3 technical integrations live.",
    image: "/images/case-studies/partnerships.jpg",
    tags: ["Partnerships", "BD", "Strategy"],
  },
] as const;

