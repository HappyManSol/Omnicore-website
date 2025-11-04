import { Metadata } from "next";
import Link from "next/link";
import { ServiceSchema, BreadcrumbSchema } from "@/components/json-ld";
import { SITE_CONFIG } from "@/lib/constants";
import { 
  Package, 
  Megaphone, 
  Rocket, 
  Handshake, 
  ArrowRight,
  Settings,
  ArrowLeftRight,
  CheckCircle2
} from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SERVICES, COMPETITION_STATEMENT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services",
  description: "Comprehensive Web2 and Web3 consultancy services including product development, marketing, partnerships, and more.",
};

const ICON_MAP = {
  "package": Package,
  "megaphone": Megaphone,
  "rocket": Rocket,
  "handshake": Handshake,
  "bridge": ArrowLeftRight,
  "settings": Settings,
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
                Full-Service{" "}
                <span className="bg-gradient-to-r from-crypto-accent via-crypto-electric to-crypto-accent bg-clip-text text-transparent">
                  Web3 Agency
                </span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground md:text-xl">
                We don&rsquo;t just consult, we execute. From building traditional websites and apps to launching DeFi protocols and NFT platforms, 
                we deliver complete product development, design, marketing, and strategic partnerships across Web2 and Web3.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 md:py-28">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
              {SERVICES.map((service) => {
                const Icon = ICON_MAP[service.icon as keyof typeof ICON_MAP];
                return (
                  <Card key={service.title} className="group hover:shadow-lg transition-all hover:scale-[1.02]">
                    <CardHeader>
                      <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Icon className="h-7 w-7" />
                      </div>
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                      <CardDescription className="text-base mt-3">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {service.details.map((detail) => (
                          <li key={detail} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Competition Statement / Why Choose Us */}
        <section className="py-20 md:py-28 bg-muted/30">
          <div className="container">
            <div className="mx-auto max-w-4xl">
              <div className="text-center mb-12">
                <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                  Why Choose OmniCore?
                </h2>
              </div>
              
              <Card className="border-2 bg-background">
                <CardContent className="p-8 md:p-12">
                  <blockquote className="text-xl md:text-2xl text-center font-medium leading-relaxed text-foreground">
                    &ldquo;{COMPETITION_STATEMENT}&rdquo;
                  </blockquote>
                  
                  <div className="mt-12 grid gap-6 md:grid-cols-3">
                    <div className="text-center">
                      <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        <CheckCircle2 className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">Industry Expertise</h3>
                      <p className="text-sm text-muted-foreground">
                        Deep knowledge of Web2 and Web3 ecosystems
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        <CheckCircle2 className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">Proven Network</h3>
                      <p className="text-sm text-muted-foreground">
                        Relationships with key players and decision makers
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        <CheckCircle2 className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">Results-Driven</h3>
                      <p className="text-sm text-muted-foreground">
                        Track record of successful project launches
                      </p>
                    </div>
                  </div>
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

