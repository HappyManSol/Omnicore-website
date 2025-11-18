import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
            See how we helped FlashDash give investors more control over how they track their own portfolios.
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
                <p className="font-display text-lg font-bold text-crypto-accent mb-2">Google Sheets Integration</p>
                <p className="text-sm text-muted-foreground">Investors connect their own portfolios as a live data source.</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-crypto-dark/50 border border-crypto-accent/10">
                <p className="font-display text-lg font-bold text-crypto-accent mb-2">Custom Metrics</p>
                <p className="text-sm text-muted-foreground">Each investor chooses the signals and views that matter to them.</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-crypto-dark/50 border border-crypto-accent/10">
                <p className="font-display text-lg font-bold text-crypto-accent mb-2">Real-Time View</p>
                <p className="text-sm text-muted-foreground">Market data, alerts, and portfolio changes update without refresh.</p>
              </div>
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              We built a dashboard where investors plug in their own portfolios via Google Sheets and track the exact metrics they care about. The app combines their custom setup with real-time market data, alerts, and clear visuals so they can see what matters fast while allowing AI to feed them new options based on the metrics THEY choose.
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

