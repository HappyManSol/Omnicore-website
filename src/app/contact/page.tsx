import { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
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
              <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                Let&rsquo;s Start the{" "}
                <span className="bg-gradient-to-r from-blue to-purple bg-clip-text text-transparent">
                  Conversation
                </span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground md:text-xl">
                Ready to transform your project? Book a free discovery call and let&rsquo;s explore 
                how we can help you succeed in the Web3 space.
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
                  <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                    Get in touch
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    We typically respond within 24 hours. For urgent inquiries, 
                    please call us directly.
                  </p>
                </div>

                <div className="space-y-6">
                  <Card>
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                          <Mail className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle className="text-lg">Email</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <a 
                        href={`mailto:${COMPANY_INFO.email}`}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {COMPANY_INFO.email}
                      </a>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                          <Phone className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle className="text-lg">Phone</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <a 
                        href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {COMPANY_INFO.phone}
                      </a>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                          <MapPin className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle className="text-lg">Office</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        {COMPANY_INFO.address}
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <Card className="bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-lg">Working Hours</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm text-muted-foreground">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                    <p>Saturday - Sunday: Closed</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

