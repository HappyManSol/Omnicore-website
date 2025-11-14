import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const TIERS = [
  {
    tier: 1,
    title: "Strategy Advisory Retainer",
    subheading: "High-level guidance, minimal execution.",
    description: "For clients who already have execution capability but need senior insight and build muscle sparingly. We provide strategic oversight while you lead the work.",
    bullets: [
      "Review and feedback on your website build (you do the work, we lead it)",
      "Marketing strategy session + monthly check-in to adjust the strategy",
      "Tokenomics sketch-work: we collaborate on token models, we deliver the draft",
    ],
    bestFor: "Clients who already have execution capability but need your senior insight + your build muscle sparingly.",
    startsAt: "Custom monthly retainer",
  },
  {
    tier: 2,
    title: "Product & Go-To-Market Build",
    subheading: "We are doing the build, we lead, we deliver.",
    description: "For clients who need a product, brand, website, and GTM launched but may not need a long-term embed. We take full ownership of execution and delivery.",
    bullets: [
      "Build of your website (using Cursor or similar), with us managing design/development as lead",
      "Full marketing strategy: from brand messaging to digital campaign plans",
      "Tokenomics: we build and deliver the token model, emission schedule, reward loops",
      "Launch plan and implementation steps (we manage/execute or supervise)",
    ],
    bestFor: "Clients who need a product/brand/website/GTM launched but may not need a long-term embed.",
    startsAt: "Project-based or 3–6 month retainers",
  },
  {
    tier: 3,
    title: "Full Web2 + Web3 Growth Partner",
    subheading: "We become part of your ecosystem — execution, growth, iteration.",
    description: "For scale-stage companies or ecosystems that need an external partner doing the heavy lifting. We operate as your embedded execution and growth team.",
    bullets: [
      "Ongoing website/asset builds (new features, updates, web pages)",
      "Full marketing program: ongoing campaigns, content, community growth, analytics",
      "Tokenomics oversight: we monitor the metrics, adjust, optimize, tie to user behaviour",
      "Partnerships, ecosystem growth, multi-product support",
    ],
    bestFor: "Scale-stage companies or ecosystems that need an external partner doing the heavy lifting.",
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

