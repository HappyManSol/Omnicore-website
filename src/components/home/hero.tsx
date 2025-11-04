import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MISSION_STATEMENT } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-crypto-dark via-crypto-grey-900 to-crypto-dark py-20 md:py-28 lg:py-36">
      <div className="absolute inset-0 bg-gradient-to-r from-crypto-accent/5 via-transparent to-crypto-electric/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,240,255,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(124,58,237,0.05),transparent_50%)]" />
      
      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center rounded-full border border-crypto-accent/30 bg-crypto-grey-900/80 backdrop-blur-sm px-4 py-1.5 text-sm">
            <Sparkles className="mr-2 h-4 w-4 text-crypto-accent" />
            <span className="text-crypto-accent">
              Full-Service Web2 + Web3 Agency
            </span>
          </div>

          <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Navigate the{" "}
            <span className="bg-gradient-to-r from-crypto-accent via-crypto-electric to-crypto-accent bg-clip-text text-transparent animate-pulse">
              Digital Frontier
            </span>{" "}
            with Confidence
          </h1>

          <p className="mt-6 text-lg text-muted-foreground md:text-xl max-w-3xl mx-auto">
            We deliver complete digital solutions from websites and mobile apps to DeFi protocols and NFT platforms. Our team handles development, design, marketing, and partnerships so you can focus on what matters most: growing your business.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="text-base">
              <Link href="/contact">
                Book a Discovery Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base">
              <Link href="/services">
                Explore Services
              </Link>
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4 items-center justify-center">
            <div className="flex flex-col items-center p-4 rounded-lg border border-crypto-accent/20 bg-crypto-grey-900/50 backdrop-blur">
              <p className="font-display text-3xl font-bold text-crypto-accent">50+</p>
              <p className="text-sm text-crypto-grey-400">Projects Delivered</p>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg border border-crypto-accent/20 bg-crypto-grey-900/50 backdrop-blur">
              <p className="font-display text-3xl font-bold text-crypto-accent">$200M+</p>
              <p className="text-sm text-crypto-grey-400">Capital Raised</p>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg border border-crypto-accent/20 bg-crypto-grey-900/50 backdrop-blur">
              <p className="font-display text-3xl font-bold text-crypto-accent">100K+</p>
              <p className="text-sm text-crypto-grey-400">Users Onboarded</p>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg border border-crypto-accent/20 bg-crypto-grey-900/50 backdrop-blur">
              <p className="font-display text-3xl font-bold text-crypto-accent">98%</p>
              <p className="text-sm text-crypto-grey-400">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

