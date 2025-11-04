import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-crypto-dark">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-crypto-accent/20 via-crypto-electric/20 to-crypto-accent/20 p-1">
          <div className="rounded-3xl bg-crypto-grey-900/95 backdrop-blur-sm p-12 md:p-16 lg:p-20 border border-crypto-accent/30">
            <div className="mx-auto max-w-3xl text-center">
              <Calendar className="mx-auto h-12 w-12 text-crypto-accent mb-6" />
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                Ready to Transform Your Project?
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Let&rsquo;s discuss how we can help you navigate the Web3 space and achieve your goals. 
                Book a free discovery call to get started.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="text-base">
                  <Link href="/contact">
                    Book a Discovery Call
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-base">
                  <Link href="/case-studies">
                    View Case Studies
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

