import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function FeaturedCaseStudy() {
  return (
    <section className="py-20 md:py-28 bg-crypto-grey-900/30">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Proven Results
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            See how we helped FlashDash transform investor trading with AI-powered insights
          </p>
        </div>

        <Card className="max-w-4xl mx-auto border-crypto-accent/20 bg-crypto-grey-900/50 backdrop-blur hover:border-crypto-accent/40 transition-all">
          <CardContent className="p-8 md:p-12">
            <div className="flex items-start justify-between mb-4">
              <Badge className="bg-crypto-accent/10 text-crypto-accent border-crypto-accent/30">
                Web2
              </Badge>
              <Badge variant="outline" className="border-crypto-grey-700">
                Featured
              </Badge>
            </div>

            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
              AI-Powered Trading Dashboard
            </h3>
            <p className="text-crypto-accent font-medium mb-6">Client: FlashDash</p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-4 rounded-lg bg-crypto-dark/50 border border-crypto-accent/10">
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="h-5 w-5 text-crypto-accent mr-2" />
                  <p className="font-display text-2xl font-bold text-crypto-accent">&lt;50ms</p>
                </div>
                <p className="text-sm text-muted-foreground">Data Latency</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-crypto-dark/50 border border-crypto-accent/10">
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="h-5 w-5 text-crypto-accent mr-2" />
                  <p className="font-display text-2xl font-bold text-crypto-accent">35%</p>
                </div>
                <p className="text-sm text-muted-foreground">Better Decisions</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-crypto-dark/50 border border-crypto-accent/10">
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="h-5 w-5 text-crypto-accent mr-2" />
                  <p className="font-display text-2xl font-bold text-crypto-accent">10K+</p>
                </div>
                <p className="text-sm text-muted-foreground">Active Investors</p>
              </div>
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              Built a sophisticated custom trading dashboard for investors with real-time market data, 
              AI-powered analysis, custom alerts, and portfolio tracking. The platform processes market 
              data with ultra-low latency and uses AI to help traders make better decisions.
            </p>

            <Button asChild variant="outline" size="lg">
              <Link href="/case-studies">
                Read Full Case Study
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

