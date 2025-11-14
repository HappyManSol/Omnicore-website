import { Metadata } from "next";
import Link from "next/link";
import { ServiceSchema, BreadcrumbSchema } from "@/components/json-ld";
import { SITE_CONFIG } from "@/lib/constants";
import { 
  Package, 
  Megaphone, 
  Rocket, 
  ArrowRight,
  Settings,
  ArrowLeftRight,
  CheckCircle2
} from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import EngagementTiers from "@/components/services/engagement-tiers";

export const metadata: Metadata = {
  title: "Services",
  description: "Comprehensive Web2 and Web3 consultancy services including product development, marketing, partnerships, and more.",
};


export default function ServicesPage() {
  return (
    <>
      <ServiceSchema />
      <BreadcrumbSchema items={[
        { name: "Home", url: SITE_CONFIG.url },
        { name: "Services", url: `${SITE_CONFIG.url}/services` }
      ]} />
      <Header />
      <main id="main-content">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-crypto-dark via-crypto-grey-900 to-crypto-dark py-20 md:py-28">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                Work With{" "}
                <span className="bg-gradient-to-r from-crypto-accent via-crypto-electric to-crypto-accent bg-clip-text text-transparent">
                  OmniCore
                </span>
                : The Partner Founders Call When They Can&rsquo;t Afford to Guess
              </h1>
              <div className="mt-6 space-y-4 text-lg text-muted-foreground md:text-xl">
                <p>
                  OmniCore isn&rsquo;t an agency and it isn&rsquo;t a contractor. It&rsquo;s a hybrid product, growth, and tokenomics partner that actually builds, fixes, and executes.
                </p>
                <p>
                  Whether you&rsquo;re structuring your first token, preparing a launch, rebuilding your brand, or shipping a new product feature — OmniCore gives you clarity, direction, and execution without the cost of hiring a full team.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Engagement Tiers */}
        <EngagementTiers />

        {/* Services Grid */}
        <section className="py-20 md:py-28">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
              {/* Service 1: Product & Ecosystem Development */}
              <Card className="group hover:shadow-lg transition-all hover:scale-[1.02] border-crypto-grey-800 bg-crypto-grey-900/50 backdrop-blur">
                <CardHeader>
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-crypto-accent/10 text-crypto-accent group-hover:bg-crypto-accent group-hover:text-crypto-dark transition-colors">
                    <Package className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-2xl">Product & Ecosystem Development</CardTitle>
                  <CardDescription className="text-base mt-3">
                    From first concept to live ecosystem, we help you structure products that actually make sense for users and your business. That includes roadmaps, user journeys, and the trade-offs between features, timelines, and resources.
                  </CardDescription>
                  <div className="mt-4">
                    <Badge variant="outline" className="border-crypto-accent/30 text-crypto-accent bg-crypto-accent/5">
                      Included in: Tier 2 & Tier 3
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-5 w-5 text-crypto-accent flex-shrink-0 mt-0.5" />
                      <span>Roadmaps, user journeys, and feature prioritization</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-5 w-5 text-crypto-accent flex-shrink-0 mt-0.5" />
                      <span>Product flow restructuring and UX clarity</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-5 w-5 text-crypto-accent flex-shrink-0 mt-0.5" />
                      <span>Cross-chain or Web2/Web3 migration strategy</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Service 2: Tokenomics Design & Economic Balancing */}
              <Card className="group hover:shadow-lg transition-all hover:scale-[1.02] border-crypto-grey-800 bg-crypto-grey-900/50 backdrop-blur">
                <CardHeader>
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-crypto-accent/10 text-crypto-accent group-hover:bg-crypto-accent group-hover:text-crypto-dark transition-colors">
                    <ArrowLeftRight className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-2xl">Tokenomics Design & Economic Balancing</CardTitle>
                  <CardDescription className="text-base mt-3">
                    We design and tune token economies that don&rsquo;t break under real users. From emissions and sinks to reward loops and gameable edges, we focus on sustainability and behavior, not hype.
                  </CardDescription>
                  <div className="mt-4">
                    <Badge variant="outline" className="border-crypto-accent/30 text-crypto-accent bg-crypto-accent/5">
                      Included in: Tier 2 & Tier 3 (light review in Tier 1)
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-5 w-5 text-crypto-accent flex-shrink-0 mt-0.5" />
                      <span>Token supply, distribution, and emissions schedules</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-5 w-5 text-crypto-accent flex-shrink-0 mt-0.5" />
                      <span>Staking, rewards, and gamified incentive structures</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-5 w-5 text-crypto-accent flex-shrink-0 mt-0.5" />
                      <span>Live economy analysis and ongoing optimization</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Service 3: Website & Brand Buildout */}
              <Card className="group hover:shadow-lg transition-all hover:scale-[1.02] border-crypto-grey-800 bg-crypto-grey-900/50 backdrop-blur">
                <CardHeader>
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-crypto-accent/10 text-crypto-accent group-hover:bg-crypto-accent group-hover:text-crypto-dark transition-colors">
                    <Settings className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-2xl">Website & Brand Buildout</CardTitle>
                  <CardDescription className="text-base mt-3">
                    Your website is often the first and only impression you get with investors and users. We design and build sites that clearly communicate what you do, why it matters, and how to get started.
                  </CardDescription>
                  <div className="mt-4">
                    <Badge variant="outline" className="border-crypto-accent/30 text-crypto-accent bg-crypto-accent/5">
                      Included in: Tier 2 & Tier 3 (light edits and improvements in Tier 1)
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-5 w-5 text-crypto-accent flex-shrink-0 mt-0.5" />
                      <span>Full website design and build (Next.js + Tailwind)</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-5 w-5 text-crypto-accent flex-shrink-0 mt-0.5" />
                      <span>Landing pages, dashboards, and product pages</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-5 w-5 text-crypto-accent flex-shrink-0 mt-0.5" />
                      <span>Brand identity, messaging, and positioning</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Service 4: Marketing & Growth Engine */}
              <Card className="group hover:shadow-lg transition-all hover:scale-[1.02] border-crypto-grey-800 bg-crypto-grey-900/50 backdrop-blur">
                <CardHeader>
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-crypto-accent/10 text-crypto-accent group-hover:bg-crypto-accent group-hover:text-crypto-dark transition-colors">
                    <Megaphone className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-2xl">Marketing & Growth Engine</CardTitle>
                  <CardDescription className="text-base mt-3">
                    We build the growth system around your product — not just campaigns in isolation. Strategy, funnels, and execution all aligned to your actual user behavior and KPIs.
                  </CardDescription>
                  <div className="mt-4">
                    <Badge variant="outline" className="border-crypto-accent/30 text-crypto-accent bg-crypto-accent/5">
                      Included in: Tier 2 & Tier 3 (strategy only in Tier 1)
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-5 w-5 text-crypto-accent flex-shrink-0 mt-0.5" />
                      <span>GTM plan, content strategy, and campaign structure</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-5 w-5 text-crypto-accent flex-shrink-0 mt-0.5" />
                      <span>Funnel creation, email sequences, and user activation flows</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-5 w-5 text-crypto-accent flex-shrink-0 mt-0.5" />
                      <span>Partnership growth and ecosystem reach</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Service 5: Launch Execution */}
              <Card className="group hover:shadow-lg transition-all hover:scale-[1.02] border-crypto-grey-800 bg-crypto-grey-900/50 backdrop-blur md:col-span-2">
                <CardHeader>
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-crypto-accent/10 text-crypto-accent group-hover:bg-crypto-accent group-hover:text-crypto-dark transition-colors">
                    <Rocket className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-2xl">Launch Execution</CardTitle>
                  <CardDescription className="text-base mt-3">
                    Launches aren&rsquo;t one-day events — they&rsquo;re systems. We coordinate product, token, marketing, and partnerships so your launch doesn&rsquo;t fizzle after week one.
                  </CardDescription>
                  <div className="mt-4">
                    <Badge variant="outline" className="border-crypto-accent/30 text-crypto-accent bg-crypto-accent/5">
                      Included in: Tier 2 & Tier 3
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-5 w-5 text-crypto-accent flex-shrink-0 mt-0.5" />
                      <span>Event-based roadmaps and milestones</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-5 w-5 text-crypto-accent flex-shrink-0 mt-0.5" />
                      <span>Token and product launch synchronization</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-5 w-5 text-crypto-accent flex-shrink-0 mt-0.5" />
                      <span>Post-launch analysis and iteration</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why OmniCore */}
        <section className="py-20 md:py-28 bg-muted/30">
          <div className="container">
            <div className="mx-auto max-w-4xl">
              <div className="text-center mb-12">
                <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                  Why OmniCore?
                </h2>
              </div>
              
              <Card className="border-2 bg-background">
                <CardContent className="p-8 md:p-12">
                  <p className="text-lg text-foreground mb-8 leading-relaxed">
                    Founders don&rsquo;t need more disconnected agencies or one-dimensional contractors. They need a partner who understands how product, incentives, brand, and growth fit together — and is willing to take responsibility for outcomes.
                  </p>
                  
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-crypto-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">One partner who understands product, design, tokenomics, and growth</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-crypto-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">Strategic clarity backed by hands-on execution</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-crypto-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">Faster turnaround than traditional agencies</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-crypto-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">Cleaner communication than juggling multiple freelancers</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-crypto-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">Higher accountability than pure advisors</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-crypto-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">Web2 and Web3 experience in a single operating system</span>
                    </li>
                  </ul>

                  <p className="text-base text-muted-foreground leading-relaxed">
                    OmniCore is built for founders who want fewer moving parts and more ownership, clarity, and momentum.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Ready to Get Started?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Let&rsquo;s discuss how our services can help you achieve your goals.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Book a Discovery Call
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/case-studies">
                    View Case Studies
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

