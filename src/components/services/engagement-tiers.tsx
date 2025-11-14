import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const TIERS = [
  {
    tier: 1,
    title: "Strategy Advisory Retainer",
    subheading: "High-leverage guidance without adding headcount.",
    description: "For founders who want a seasoned operator in their corner without hiring a full-time product lead. We join as your strategic partner to stress-test decisions, refine roadmaps, and keep your team aligned.",
    bullets: [
      "Weekly or bi-weekly strategy calls (product, tokenomics, GTM)",
      "Async feedback on decks, docs, and roadmaps",
      "Risk and opportunity mapping for upcoming launches or pivots",
      "Priority access via DM/Slack for quick check-ins",
    ],
    bestFor: "Early-stage teams validating direction, or established teams needing senior-level perspective.",
    startsAt: "Custom monthly retainer",
  },
  {
    tier: 2,
    title: "Product & Go-To-Market Build",
    subheading: "From idea to launch with one accountable partner.",
    description: "For teams who need more than advice. We co-own the product and launch with you—aligning product strategy, token design, branding, and GTM into one execution track.",
    bullets: [
      "Product strategy, user journeys, and roadmap planning",
      "Tokenomics and reward loop design (where applicable)",
      "Brand and messaging framework aligned to your market",
      "Launch plan, campaign structure, and KPI definition",
      "Coordination with your internal dev, design, and marketing teams",
    ],
    bestFor: "Projects preparing for a major launch, fundraise, or migration (Web2 → Web3 or vice versa).",
    startsAt: "Project-based or 3–6 month retainers",
  },
  {
    tier: 3,
    title: "Full Web2 + Web3 Growth Partner",
    subheading: "A senior team plugged directly into your ecosystem.",
    description: "For founders who want OmniCore embedded as a long-term partner. We operate as your external product + growth team—covering strategy, build, GTM, partnerships, and ongoing optimization.",
    bullets: [
      "Ongoing product leadership and roadmap ownership",
      "Tokenomics management and emissions/reward tuning",
      "Marketing, content, and community growth direction",
      "Launchpad and ecosystem partnerships (Web2 + Web3)",
      "Analytics, KPI tracking, and continuous optimization",
    ],
    bestFor: "Studios, protocols, and ecosystems managing multiple products or games that need a reliable, senior external partner.",
    startsAt: "Long-term retainer or revenue-aligned structures",
  },
] as const;

export default function EngagementTiers() {
  return (
    <section className="py-20 md:py-28 bg-crypto-grey-900/30" id="engagement-models">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl mb-6">
            Engagement Models Built for Real Founders
          </h2>
          <p className="text-lg text-muted-foreground">
            Whether you need a strategic advisor, a build partner, or a full-stack Web2 + Web3 team, 
            OmniCore works in three clear tiers so you always know what you&rsquo;re getting and what outcomes to expect.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {TIERS.map((tier) => (
            <Card
              key={tier.tier}
              className="group hover:shadow-[0_0_30px_rgba(0,240,255,0.1)] transition-all border-crypto-grey-800 bg-crypto-grey-900/50 backdrop-blur flex flex-col"
            >
              <CardHeader>
                <div className="mb-4">
                  <Badge className="bg-crypto-accent/10 text-crypto-accent border-crypto-accent/30 mb-3">
                    Tier {tier.tier}
                  </Badge>
                </div>
                <CardTitle className="text-2xl mb-2">{tier.title}</CardTitle>
                <CardDescription className="text-base font-medium text-crypto-accent mb-4">
                  {tier.subheading}
                </CardDescription>
                <CardDescription className="text-sm leading-relaxed">
                  {tier.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <ul className="space-y-3 mb-6 flex-1">
                  {tier.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-5 w-5 text-crypto-accent flex-shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="space-y-4 pt-6 border-t border-crypto-grey-800">
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground mb-1">Best for:</p>
                    <p className="text-sm text-foreground">{tier.bestFor}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground mb-1">Starts at:</p>
                    <p className="text-sm text-foreground">{tier.startsAt}</p>
                  </div>
                  <Button asChild className="w-full mt-4" size="lg">
                    <Link href="/contact">
                      Book a Discovery Call
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

