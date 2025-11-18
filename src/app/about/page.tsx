import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Users, TrendingUp, Award } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  SITE_CONFIG, 
  MISSION_STATEMENT, 
  COMPETITION_STATEMENT, 
  FINANCIAL_STATEMENT,
  VALUES 
} from "@/lib/constants";
import { ShieldCheck, HeartHandshake } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about OmniCore Solutions, our mission, values, and the team behind your Web3 success.",
};

const ICON_MAP = {
  "shield-check": ShieldCheck,
  "award": Award,
  "heart-handshake": HeartHandshake,
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20 py-20 md:py-28">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                Building{" "}
                <span className="bg-gradient-to-r from-crypto-accent via-crypto-electric to-crypto-accent bg-clip-text text-transparent">
                  Strong Products
                </span>{" "}
                Across Web2 + Web3
              </h1>
              <p className="mt-6 text-lg text-muted-foreground md:text-xl">
                From modern Web2 products to crypto-native experiences, OmniCore helps founders make their products clearer, easier to use, and easier to grow. Instead of a big agency team, you get a hands-on partner focused on what actually moves your product forward.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 md:py-28">
          <div className="container">
            <div className="mx-auto max-w-4xl">
              <div className="text-center mb-12">
                <div className="mx-auto w-16 h-16 mb-4 flex items-center justify-center">
                  <Image 
                    src="/images/OMNICORE TRANSPARENT.png" 
                    alt="OmniCore Solutions" 
                    width={64} 
                    height={64}
                    className="drop-shadow-[0_0_15px_rgba(0,240,255,0.3)] animate-pulse"
                  />
                </div>
                <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Our Mission
                </h2>
              </div>
              
              <Card className="border-2 bg-gradient-to-br from-background to-muted/20">
                <CardContent className="p-8 md:p-12">
                  <blockquote className="text-xl md:text-2xl text-center font-medium leading-relaxed text-foreground">
                    &ldquo;{MISSION_STATEMENT}&rdquo;
                  </blockquote>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 md:py-28 bg-muted/30">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Our Core Values
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                The principles that guide every decision we make and every relationship we build.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
              {VALUES.map((value) => {
                const Icon = ICON_MAP[value.icon as keyof typeof ICON_MAP];
                return (
                  <Card key={value.title} className="text-center border-2">
                    <CardHeader>
                      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-2xl">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {value.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 md:py-28">
          <div className="container">
            <div className="mx-auto max-w-4xl">
              <div className="text-center mb-12">
                <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Why Choose OmniCore?
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Expertise across traditional digital and blockchain technologies
                </p>
              </div>

              <div className="space-y-12">
                {/* Expertise */}
                <Card className="border-2">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                          <Users className="h-7 w-7 text-primary" />
                        </div>
                      </div>
                      <div>
                      <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                        Dual Expertise: Web2 & Web3
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {COMPETITION_STATEMENT}
                      </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Financial Planning */}
                <Card className="border-2">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                          <TrendingUp className="h-7 w-7 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                          Long-Term Financial Success
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {FINANCIAL_STATEMENT}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 md:py-28 bg-muted/30">
          <div className="container">
            <div className="mx-auto max-w-5xl">
              <div className="text-center mb-12">
                <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  How We Work With Founders
                </h2>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <Card className="text-center">
                  <CardContent className="pt-8 pb-8">
                    <p className="font-display text-xl font-bold text-primary mb-2">Product-First</p>
                    <p className="text-muted-foreground">We start from user behavior and real product needs, not just hype.</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="pt-8 pb-8">
                    <p className="font-display text-xl font-bold text-primary mb-2">Hands-On Support</p>
                    <p className="text-muted-foreground">You're not getting a deck and disappearing act - you're getting a partner in the work.</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="pt-8 pb-8">
                    <p className="font-display text-xl font-bold text-primary mb-2">Web2 + Web3</p>
                    <p className="text-muted-foreground">Experience across both traditional and crypto-native products.</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="pt-8 pb-8">
                    <p className="font-display text-xl font-bold text-primary mb-2">Straightforward Communication</p>
                    <p className="text-muted-foreground">Honest conversations, clear expectations, and no inflated promises.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Let&rsquo;s Build Something Great Together
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                If you're building or fixing a product and want a partner who will tell you the truth and help you move forward, let's talk.
              </p>
              <div className="mt-10">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Book a Discovery Call
                    <ArrowRight className="ml-2 h-5 w-5" />
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

