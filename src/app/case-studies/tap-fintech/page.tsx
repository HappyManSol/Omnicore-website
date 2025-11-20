import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Tap Fintech Case Study",
  description: "Operational transformation for a fast-moving Web3 team - how OmniCore helped Tap Fintech build structured workflows and operational clarity.",
};

export default function TapFintechCaseStudy() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20 py-20 md:py-28">
          <div className="container">
            <div className="mx-auto max-w-3xl">
              <Button asChild variant="ghost" className="mb-8">
                <Link href="/case-studies">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Case Studies
                </Link>
              </Button>

              <div className="mb-6">
                <Badge className="bg-crypto-accent/10 text-crypto-accent border-crypto-accent/30 mb-4">
                  Web3
                </Badge>
                <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl mb-4">
                  Tap Fintech
                </h1>
                <p className="text-xl text-muted-foreground">
                  Operational Transformation for a Fast-Moving Web3 Team
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-20 md:py-28">
          <div className="container">
            <div className="mx-auto max-w-4xl space-y-16">
              {/* Challenge Section */}
              <Card className="border-2">
                <CardContent className="p-8 md:p-12">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                    Challenge
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Tap Fintech was growing fast but their workflows and communication systems were scattered. They lacked consistent task management, operational clarity, and structure within their marketing team. Leadership needed the business to run smoothly so they could focus on product and growth instead of daily operational firefighting.
                  </p>
                </CardContent>
              </Card>

              {/* What I Delivered Section */}
              <Card className="border-2">
                <CardContent className="p-8 md:p-12">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                    What I Delivered
                  </h2>
                  <ul className="space-y-4">
                    {[
                      "Audited all existing workflows, communication channels, and team structures",
                      "Implemented Asana as a unified operational system",
                      "Built intake pipelines, prioritization logic, templates, and reporting cycles",
                      "Coached and organized the marketing team for better coordination",
                      "Provided six months of hands-on operational leadership",
                      "Improved consistency, accountability, and output speed",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-crypto-accent flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Results Section */}
              <Card className="border-2">
                <CardContent className="p-8 md:p-12">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                    Results
                  </h2>
                  <ul className="space-y-4">
                    {[
                      "A fully structured operational ecosystem for the entire team",
                      "Clear marketing flow and faster execution",
                      "Stable processes that reduced confusion and task bottlenecks",
                      "Better team accountability and predictable work cycles",
                      "Leadership regained focus for growth and strategy",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-crypto-accent flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Why It Matters Section */}
              <Card className="border-2 bg-gradient-to-br from-background to-muted/20">
                <CardContent className="p-8 md:p-12">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                    Why It Matters
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    This project shows how OmniCore supports founders with real operational clarity. When teams lack structure, growth slows down. By implementing proper systems and coaching the team, we created a stable foundation that made the entire organization more effective.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 bg-muted/30">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
                Ready to Transform Your Operations?
              </h2>
              <p className="text-lg text-muted-foreground mb-10">
                Let&apos;s discuss how we can help you build structured workflows and operational clarity for your team.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Book a Discovery Call
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/case-studies">
                    View All Case Studies
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

