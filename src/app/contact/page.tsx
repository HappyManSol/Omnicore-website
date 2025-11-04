import { Metadata } from "next";
import Image from "next/image";
import { Mail } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ContactForm from "@/components/contact-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { COMPANY_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with OmniCore Solutions to discuss your Web2 and Web3 project needs.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20 py-20 md:py-28">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                Let&rsquo;s Start the{" "}
                <span className="bg-gradient-to-r from-crypto-accent via-crypto-electric to-crypto-accent bg-clip-text text-transparent">
                  Conversation
                </span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground md:text-xl">
                Whether you need a website, app, marketing campaign, or Web3 product launch, 
                book a free discovery call and let&rsquo;s discuss how we can help you succeed.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 md:py-28">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                  Send us a message
                </h2>
                <ContactForm />
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <div className="mb-6 flex items-center gap-3">
                    <Image 
                      src="/images/OMNICORE TRANSPARENT.png" 
                      alt="OmniCore Solutions" 
                      width={48} 
                      height={48}
                      className="drop-shadow-[0_0_15px_rgba(0,240,255,0.3)] animate-pulse"
                    />
                    <h2 className="font-display text-2xl font-bold text-foreground">
                      Get in touch
                    </h2>
                  </div>
                  <p className="text-muted-foreground mb-8">
                    We typically respond within 24 hours. Send us a message and we&rsquo;ll get back to you as soon as possible.
                  </p>
                </div>

                <div className="space-y-6">
                  <Card className="border-crypto-accent/20 bg-crypto-grey-900/50 backdrop-blur">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-crypto-accent/10">
                          <Mail className="h-5 w-5 text-crypto-accent" />
                        </div>
                        <CardTitle className="text-lg">Email</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <a 
                        href={`mailto:${COMPANY_INFO.email}`}
                        className="text-muted-foreground hover:text-crypto-accent transition-colors"
                      >
                        {COMPANY_INFO.email}
                      </a>
                    </CardContent>
                  </Card>

                  <Card className="bg-crypto-accent/5 border-crypto-accent/20">
                    <CardHeader>
                      <CardTitle className="text-lg">Response Time</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-sm text-muted-foreground">
                      <p>We aim to respond to all inquiries within 24 hours during business days.</p>
                      <p className="text-crypto-accent">Available globally via email</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

