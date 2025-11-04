import Link from "next/link";
import { ArrowRight, Package, Megaphone, Rocket, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const FEATURED_SERVICES = [
  {
    title: "Product Management & Development",
    description: "End-to-end product strategy, roadmap planning, and technical development to bring your vision to life.",
    icon: Package,
  },
  {
    title: "Marketing & Go-to-Market",
    description: "Comprehensive marketing strategies tailored for Web2 and Web3 audiences to maximize your launch impact.",
    icon: Megaphone,
  },
  {
    title: "Launchpad Integration & Partnerships",
    description: "Strategic partnerships with leading launchpads to ensure your project gets the visibility it deserves.",
    icon: Rocket,
  },
  {
    title: "Business Development & Strategic Alliances",
    description: "Leverage our network to forge partnerships that drive growth and open new opportunities.",
    icon: Handshake,
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-20 md:py-28 bg-crypto-dark" id="services-preview">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Comprehensive Solutions for Your Success
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From ideation to launch and beyond, we provide end-to-end support for your Web2 and Web3 projects.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {FEATURED_SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.title} className="group hover:shadow-[0_0_30px_rgba(0,240,255,0.1)] transition-all border-crypto-grey-800 bg-crypto-grey-900/50 backdrop-blur">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-crypto-accent/10 text-crypto-accent group-hover:bg-crypto-accent group-hover:text-crypto-dark transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/services">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

