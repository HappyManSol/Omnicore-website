import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ENGAGEMENT_OPTIONS = [
  {
    title: "Strategy Advisory Retainer",
    description: "High-leverage guidance without adding headcount.",
  },
  {
    title: "Product & Go-To-Market Build",
    description: "From idea to launch with one accountable partner.",
  },
  {
    title: "Full Web2 + Web3 Growth Partner",
    description: "A senior team plugged directly into your ecosystem.",
  },
] as const;

export default function EngagementPreview() {
  return (
    <section className="py-20 md:py-28 bg-crypto-dark">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl mb-6">
            Three Ways to Work With OmniCore
          </h2>
          <p className="text-lg text-muted-foreground">
            From light-touch advisory to fully embedded partnerships, OmniCore offers three engagement tiers 
            so you always know the level of support and ownership you&rsquo;re getting.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto mb-10">
          {ENGAGEMENT_OPTIONS.map((option, idx) => (
            <div
              key={idx}
              className="p-6 rounded-lg border border-crypto-grey-800 bg-crypto-grey-900/50 backdrop-blur hover:border-crypto-accent/40 transition-colors"
            >
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {option.title}
              </h3>
              <p className="text-sm text-muted-foreground">{option.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/services#engagement-models">
              Explore Engagement Models
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

