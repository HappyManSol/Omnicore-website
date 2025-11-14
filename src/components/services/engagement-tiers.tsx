import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const TIERS = [
  {
    tier: 1,
    title: "Tier 1 — Advisory + Light Execution",
    subheading: "Senior guidance with targeted hands-on help.",
    description: "You keep your team moving; we keep decisions clean, focused, and aligned.",
    bullets: [
      "Weekly or bi-weekly strategy calls",
      "Feedback on decks, roadmaps, and key docs",
      "Website and funnel tweaks as needed",
      "Tokenomics and GTM review, not full rebuild",
    ],
    bestFor: "Teams with execution in place that need a senior operator to sanity-check direction.",
    startsAt: "Custom monthly retainer",
  },
  {
    tier: 2,
    title: "Tier 2 — Product, Tokenomics & Launch Build",
    subheading: "Foundation built properly, end to end.",
    description: "We design and build the core of your ecosystem: product, site, token model, and launch plan.",
    bullets: [
      "Full website build or rebuild (Next.js, responsive)",
      "Tokenomics design: supply, emissions, sinks, sources",
      "Brand and messaging framework",
      "GTM plan and launch sequence",
      "Funnel and community setup",
    ],
    bestFor: "Teams heading into a launch, token event, or raise that can&rsquo;t afford to get the basics wrong.",
    startsAt: "Project-based or 3–6 month retainers",
  },
  {
    tier: 3,
    title: "Tier 3 — Embedded Growth & Product Partner",
    subheading: "An external product and growth lead, on call.",
    description: "We plug in alongside leadership and help run product, tokenomics, and growth long-term.",
    bullets: [
      "Ongoing website and feature development",
      "Tokenomics management and economy tuning",
      "Monthly campaigns and growth execution",
      "Multi-product roadmap and KPI ownership",
      "Partnerships and ecosystem development",
    ],
    bestFor: "Ecosystems and studios managing multiple products or economies.",
    startsAt: "Long-term retainer or revenue-aligned structures",
  },
] as const;

export default function EngagementTiers() {
  return (
    <section className="py-20 md:py-28 bg-crypto-grey-900/30" id="engagement-models">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl mb-6">
            How We{" "}
            <span className="bg-gradient-to-r from-crypto-accent via-crypto-electric to-crypto-accent bg-clip-text text-transparent">
              Work
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Three engagement levels, depending on how deep you need us plugged in.
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

