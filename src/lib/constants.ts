export const SITE_CONFIG = {
  name: "OmniCore Solutions",
  altName: "OmniCore Business Services",
  description: "Full-service Web2 + Web3 agency specializing in product development, marketing, partnerships, and growth.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://omnicore.vercel.app",
  ogImage: "/images/Your paragraph text.png",
  links: {
    twitter: "https://x.com/OmniCoreSOL",
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
  "Help founders turn ideas into products that actually work for real users. Whether it's a website, app, or Web3 experience, we focus on clear flows, honest feedback, and steady progress so you can focus on building the business.";

export const COMPETITION_STATEMENT = 
  "We're comfortable in both traditional and crypto-native products. That means we can help you bridge Web2 and Web3 without overcomplicating things. We also bring a strong network in the space, so if there's a genuine fit for your product, we'll work to help you find it.";

export const FINANCIAL_STATEMENT = 
  "We care about more than just launch day. We think about how your product, incentives, and operations hold up over time so you're not constantly rebuilding from scratch.";

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
    description: "Ship your MVP in 12 weeks, reduce time-to-market by 30%. End-to-end product strategy, development, and launch execution.",
    icon: "package",
    tiers: [2, 3],
    details: [
      "Product strategy & roadmap",
      "Technical architecture",
      "Agile development",
      "Quality assurance",
    ],
  },
  {
    title: "Marketing & Go-to-Market",
    description: "Generate 3x more qualified leads with proven campaigns. We build, execute, and optimize marketing strategies that convert.",
    icon: "megaphone",
    tiers: [2, 3],
    details: [
      "Market research & positioning",
      "Content marketing",
      "Community building",
      "Launch strategy",
    ],
  },
  {
    title: "Launchpad Integration & Partnerships",
    description: "Access $5M+ in partnership opportunities. We connect you with tier-1 launchpads and strategic partners that accelerate growth.",
    icon: "rocket",
    tiers: [3],
    optionalTier: 2,
    details: [
      "Launchpad selection",
      "Application support",
      "Token sale strategy",
      "Community engagement",
    ],
  },
  {
    title: "Business Development & Strategic Alliances",
    description: "Close high-value partnerships 2x faster. Leverage our network to forge alliances that drive revenue and market expansion.",
    icon: "handshake",
    tiers: [3],
    details: [
      "Partnership strategy",
      "Deal sourcing",
      "Negotiation support",
      "Relationship management",
    ],
  },
  {
    title: "Web2 ↔ Web3 Bridges",
    description: "Seamlessly integrate blockchain with 40% lower technical debt. Expert tokenomics, smart contracts, and migration planning.",
    icon: "bridge",
    tiers: [2, 3],
    details: [
      "Tokenomics design",
      "Integration strategy",
      "Compliance consulting",
      "Migration planning",
    ],
  },
  {
    title: "Tooling Integration & Ops",
    description: "Save 15+ hours per week with automated workflows. Enterprise-grade tools, analytics, and operational excellence.",
    icon: "settings",
    tiers: [3],
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
    id: "flashdash-trading-dashboard",
    title: "AI-Powered Trading Dashboard",
    client: "FlashDash",
    category: "Web2",
    challenge: "Build a custom trading dashboard for active investors that lets them safely upload and manage their own portfolios via Google Sheets, and track the exact metrics and signals they care about in real time.",
    solution: "Designed and developed a web application where each investor connects a secure Google Sheet as their data source, defines tickers, allocations, and custom metrics, and has the dashboard automatically sync and visualize that data. Layered real-time market data, custom alerts, and AI-assisted insights on top of their own portfolio configuration.",
    results: "Investors can now control their own portfolio structure while using a shared, powerful dashboard UI, making it easy to experiment with strategies, monitor risk, and act quickly without being locked into a fixed set of views or hard-coded metrics.",
    image: "/images/case-studies/flashdash.jpg",
    tags: ["AI", "Trading", "Dashboard", "Analytics"],
  },
  {
    id: "web3-gaming-studio-growth",
    title: "Leading Web3 Gaming Studio - 10k+ Concurrent Users",
    client: "Product Optimization, Growth Systems, and Operational Support",
    category: "Web3",
    challenge: "The studio had strong traction but was struggling with user flow clarity, operational bottlenecks, and maintaining high concurrency without degrading user experience. They needed a structured product approach to sustain momentum and prepare for future fundraising.",
    solution: "We rebuilt their core product flows, streamlined onboarding, clarified key user touchpoints, and introduced a clean operational framework. This included website adjustments, growth funnel improvements, and behind-the-scenes economy support where necessary.",
    results: "Maintained over 10,000 concurrent users during peak activity. Reduced user drop-off at key interaction points. Improved internal product clarity, enabling faster iteration cycles. Supported the company's ability to raise $6 million within six months. What We Delivered: Product flow refinement. Growth funnel improvements. UX clarity and user journey mapping. Operational structure for faster product shipping. Quiet token/economy support when relevant.",
    image: "/images/case-studies/web3-gaming.jpg",
    tags: ["Product", "Growth", "Web3", "Gaming", "Operations"],
  },
] as const;

