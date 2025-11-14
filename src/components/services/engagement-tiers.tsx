import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const TIERS = [
  {
    tier: 1,
    title: "Tier 1 — Strategic Advisory + Light Execution",
    subheading: "For founders who need clarity, direction, and senior-level decision support.",
    description: "You get a seasoned operator in your corner — weekly calls, async support, and direct help with the most important pieces.",
    bullets: [
      "Website edits, improvements, or rapid fixes",
      "Tokenomics review, emissions plan drafting, reward loop sketches",
      "Marketing strategy + monthly optimization",
      "Roadmap corrections and prioritization",
      "Pitch deck, fundraising narrative, and partner prep",
      "Priority DM/Slack access",
    ],
    bestFor: "Best for teams who already have execution capability but need direction, validation, and correction from someone who understands Web2 + Web3 in one brain.",
    startsAt: "Custom monthly retainer",
  },
  {
    tier: 2,
    title: "Tier 2 — Product, Tokenomics & Launch Build",
    subheading: "For teams preparing to launch and needing a partner who actually builds the foundation.",
    description: "This is where OmniCore steps in and does the hard work — the website, the token model, the GTM plan, and the product structure.",
    bullets: [
      "Full website build or rebuild (Next.js, responsive, optimized)",
      "Tokenomics design: supply, emissions, sinks, sources, reward loops",
      "Brand + messaging framework",
      "Complete GTM strategy, content structure, and launch sequence",
      "Community and user funnel setup",
      "Milestone-based reporting and KPI planning",
      "Team coordination across dev, design, and marketing",
    ],
    bestFor: "Best for teams heading toward a major launch, token event, or fundraising round who need their ecosystem built correctly the first time.",
    startsAt: "Project-based or 3–6 month retainers",
  },
  {
    tier: 3,
    title: "Tier 3 — Embedded Growth & Product Partner",
    subheading: "For ecosystems, protocols, and studios that need a long-term external operator.",
    description: "This is the closest thing to hiring a Head of Product, Head of Growth, and Tokenomics Lead — all in one partner.",
    bullets: [
      "Continuous website development and new feature rollouts",
      "Full tokenomics management, balancing, and emissions updates",
      "Monthly launch campaigns, marketing execution, and content direction",
      "Multi-product ecosystem and roadmap planning",
      "Funnel analysis, KPI dashboards, and performance optimization",
      "Partnership development (launchpads, exchanges, ecosystems)",
      "UX/UI improvements and iterative product updates",
    ],
    bestFor: "Best for teams managing multiple products or economies who want long-term operational support without adding multiple full-time salaries.",
    startsAt: "Long-term retainer or revenue-aligned structures",
  },
] as const;

export default function EngagementTiers() {
  return (
    <section className="py-20 md:py-28 bg-crypto-grey-900/30" id="engagement-models">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl mb-6">
            How We Work:{" "}
            <span className="bg-gradient-to-r from-crypto-accent via-crypto-electric to-crypto-accent bg-clip-text text-transparent">
              Three Ways
            </span>{" "}
            To Engage{" "}
            <span className="bg-gradient-to-r from-crypto-accent via-crypto-electric to-crypto-accent bg-clip-text text-transparent">
              OmniCore
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Every founder needs a different level of support. Some just need direction, some need the foundation built, and some need a long-term operator. OmniCore works in three tiers so you always know what you&rsquo;re getting.
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

