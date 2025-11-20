import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const TIERS = [
  {
    tier: 1,
    title: "Tier 1 - Advisory + Light Execution",
    subheading: "Senior oversight with targeted hands-on help.",
    description: "You run the day-to-day; we keep your product and growth decisions tight, aligned, and strategic.",
    bullets: [
      "Weekly or bi-weekly strategy calls",
      "Feedback on decks, roadmaps, and key product docs",
      "Website and funnel improvements when needed",
      "High-level review of token/economy plans if applicable",
    ],
    bestFor: "Teams with execution in place that need a senior operator for clarity and direction.",
    startsAt: "Custom monthly retainer",
  },
  {
    tier: 2,
    title: "Tier 2 - Product & Launch Build",
    subheading: "The core of your product and launch built properly end-to-end.",
    description: "We design and build the foundation: product flows, brand, website, and go-to-market, everything needed to launch confidently.",
    bullets: [
      "Full website build or rebuild (Next.js, responsive)",
      "Clear product flows, user journeys, and feature priorities",
      "Brand and messaging framework",
      "Go-to-market plan and launch sequence",
      "Funnel and community setup",
      "Quiet token/economy support where relevant",
    ],
    bestFor: "Teams preparing for launch or fundraising who need a solid, cohesive foundation.",
    startsAt: "Project-based or 3–6 month retainers",
  },
  {
    tier: 3,
    title: "Tier 3 - Embedded Product & Growth Partner",
    subheading: "An external product and growth lead on call.",
    description: "We embed alongside leadership and help run product and growth long-term, with economy support only when needed.",
    bullets: [
      "Continuous website and feature development",
      "Product roadmap ownership and prioritization",
      "Monthly campaigns and growth execution",
      "Multi-product ecosystem planning",
      "KPI tracking and optimization",
      "Partnerships and ecosystem development",
      "Occasional economy check-ins when applicable",
    ],
    bestFor: "Studios and teams with multiple products or ongoing growth needs.",
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
            Three engagement levels depending on how deep you need us embedded into your product and growth.
          </p>
          <div className="mt-6 inline-flex items-center rounded-full border border-crypto-accent/30 bg-crypto-grey-900/80 backdrop-blur-sm px-4 py-1.5 text-sm whitespace-nowrap">
            <Sparkles className="mr-2 h-4 w-4 text-crypto-accent flex-shrink-0" />
            <span className="text-crypto-accent">
              Three tiers that make it easy for you to get the exact level of support you need without paying for anything you don&apos;t.
            </span>
          </div>
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

