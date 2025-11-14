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
                Product &{" "}
                <span className="bg-gradient-to-r from-crypto-accent via-crypto-electric to-crypto-accent bg-clip-text text-transparent">
                  Growth
                </span>{" "}
                Partner for{" "}
                <span className="bg-gradient-to-r from-crypto-accent via-crypto-electric to-crypto-accent bg-clip-text text-transparent">
                  Web2 + Web3
                </span>{" "}
                Teams
              </h1>
              <div className="mt-6 space-y-4 text-lg text-muted-foreground md:text-xl">
                <p>
                  OmniCore helps founders ship, fix, and scale products without hiring a full in-house team.
                </p>
                <p>
                  We focus on clear roadmaps, sharp execution, and measurable growth.
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
                    We turn ideas into clear, shippable products and ecosystems users actually understand.
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
                      <span>Roadmaps, user journeys, and feature priorities</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-5 w-5 text-crypto-accent flex-shrink-0 mt-0.5" />
                      <span>Product flow and UX clean-up</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-5 w-5 text-crypto-accent flex-shrink-0 mt-0.5" />
                      <span>Web2 ↔ Web3 or cross-chain migration strategy</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Service 2: Website & Brand Buildout */}
              <Card className="group hover:shadow-lg transition-all hover:scale-[1.02] border-crypto-grey-800 bg-crypto-grey-900/50 backdrop-blur">
                <CardHeader>
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-crypto-accent/10 text-crypto-accent group-hover:bg-crypto-accent group-hover:text-crypto-dark transition-colors">
                    <Settings className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-2xl">Website & Brand Buildout</CardTitle>
                  <CardDescription className="text-base mt-3">
                    We build sites and brands that explain what you do in seconds, not paragraphs.
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
                      <span>Full website design and build (Next.js + Tailwind)</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-5 w-5 text-crypto-accent flex-shrink-0 mt-0.5" />
                      <span>Landing pages, dashboards, and product pages</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-5 w-5 text-crypto-accent flex-shrink-0 mt-0.5" />
                      <span>Brand identity and messaging that matches your audience</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Service 3: Marketing & Growth Engine */}
              <Card className="group hover:shadow-lg transition-all hover:scale-[1.02] border-crypto-grey-800 bg-crypto-grey-900/50 backdrop-blur">
                <CardHeader>
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-crypto-accent/10 text-crypto-accent group-hover:bg-crypto-accent group-hover:text-crypto-dark transition-colors">
                    <Megaphone className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-2xl">Marketing & Growth Engine</CardTitle>
                  <CardDescription className="text-base mt-3">
                    We align strategy, content, and funnels so growth isn&rsquo;t just &ldquo;posting more,&rdquo; but moving real metrics.
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
                      <span>Go-to-market and content strategy</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-5 w-5 text-crypto-accent flex-shrink-0 mt-0.5" />
                      <span>Funnel and email sequence design</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-5 w-5 text-crypto-accent flex-shrink-0 mt-0.5" />
                      <span>Partnership and ecosystem growth</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Service 4: Token & Economy Support */}
              <Card className="group hover:shadow-lg transition-all hover:scale-[1.02] border-crypto-grey-800 bg-crypto-grey-900/50 backdrop-blur">
                <CardHeader>
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-crypto-accent/10 text-crypto-accent group-hover:bg-crypto-accent group-hover:text-crypto-dark transition-colors">
                    <ArrowLeftRight className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-2xl">Token & Economy Support</CardTitle>
                  <CardDescription className="text-base mt-3">
                    We make sure your token and in-app economy support the product instead of fighting it.
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
                      <span>High-level review of token and reward structures</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-5 w-5 text-crypto-accent flex-shrink-0 mt-0.5" />
                      <span>Feedback on emissions, sinks, and incentives</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-5 w-5 text-crypto-accent flex-shrink-0 mt-0.5" />
                      <span>Occasional check-ins on live economy health</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Service 5: Launch Systems */}
              <Card className="group hover:shadow-lg transition-all hover:scale-[1.02] border-crypto-grey-800 bg-crypto-grey-900/50 backdrop-blur md:col-span-2">
                <CardHeader>
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-crypto-accent/10 text-crypto-accent group-hover:bg-crypto-accent group-hover:text-crypto-dark transition-colors">
                    <Rocket className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-2xl">Launch Systems</CardTitle>
                  <CardDescription className="text-base mt-3">
                    We turn launches into repeatable systems instead of one-off events.
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
                      <span>Launch roadmaps and milestones</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-5 w-5 text-crypto-accent flex-shrink-0 mt-0.5" />
                      <span>Product and feature launch coordination</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-5 w-5 text-crypto-accent flex-shrink-0 mt-0.5" />
                      <span>Post-launch review and iteration</span>
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
                  Why{" "}
                  <span className="bg-gradient-to-r from-crypto-accent via-crypto-electric to-crypto-accent bg-clip-text text-transparent">
                    Founders
                  </span>{" "}
                  Work With{" "}
                  <span className="bg-gradient-to-r from-crypto-accent via-crypto-electric to-crypto-accent bg-clip-text text-transparent">
                    OmniCore
                  </span>
                </h2>
              </div>
              
              <Card className="border-2 bg-background">
                <CardContent className="p-8 md:p-12">
                  <p className="text-lg text-foreground mb-8 leading-relaxed">
                    You don&rsquo;t need another siloed agency or one more freelancer to manage. You need one partner who sees the whole board and can actually execute.
                  </p>
                  
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-crypto-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">Product and growth under one roof, with token support in the background</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-crypto-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">Web2 + Web3 experience in a single operator</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-crypto-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">Strategic clarity with real implementation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-crypto-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">Faster, cleaner communication than juggling multiple vendors</span>
                    </li>
                  </ul>

                  <p className="text-base text-muted-foreground leading-relaxed">
                    OmniCore is for founders who want fewer moving parts and more accountable execution.
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
                Ready to{" "}
                <span className="bg-gradient-to-r from-crypto-accent via-crypto-electric to-crypto-accent bg-clip-text text-transparent">
                  Talk
                </span>
                ?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                If you&rsquo;re building or fixing a Web2 + Web3 product and want a single accountable partner, let&rsquo;s talk.
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

