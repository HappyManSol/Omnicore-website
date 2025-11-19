import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FounderOperator() {
  return (
    <>
      <section className="py-20 md:py-28 bg-crypto-dark">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              About the Operator
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              OmniCore isn&apos;t a large agency - it&apos;s a hands-on partnership led by someone who actually builds, fixes, and grows products. I work directly with founders to simplify their product decisions, clean up user flows, and guide launches or growth efforts with clarity and experience.
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-2 max-w-5xl mx-auto items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  Who I Am
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  My name is Happy, and I&apos;m a product and growth operator with experience across Web2 and Web3. Over the years I&apos;ve worked with startups, gaming studios, and crypto-native teams to help them achieve clearer product direction, smooth launches, stable user retention, and sustainable growth systems. I focus on straightforward communication, honest feedback, and hands-on support - no bloated agency process, no fluff, and no hype.
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  How I Work
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  You get direct communication, real execution, and an operator who understands how product, UX, incentives, and marketing tie together. Whether it&apos;s refining your onboarding, planning a launch, or improving live-user experience, I bring practical insight and help you move faster with fewer moving parts.
                </p>
              </div>
            </div>

            {/* Right Column - Visual */}
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-sm">
                <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-crypto-accent/20 via-crypto-electric/20 to-crypto-accent/20 p-1">
                  <div className="rounded-2xl bg-crypto-grey-900/50 backdrop-blur border border-crypto-accent/30 p-8 h-full flex items-center justify-center">
                    <Image 
                      src="/images/OMNICORE TRANSPARENT.png" 
                      alt="OmniCore Solutions" 
                      width={200} 
                      height={200}
                      className="drop-shadow-[0_0_20px_rgba(0,240,255,0.4)]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-crypto-grey-900/30">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Let&apos;s Work Together
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              If you want a partner who actually gets involved in the product, not just the planning, let&apos;s connect.
            </p>
            <div className="mt-10">
              <Button asChild size="lg" className="text-base">
                <Link href="/contact">
                  Book a Discovery Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

