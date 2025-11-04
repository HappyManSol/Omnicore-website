import { Metadata } from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "OmniCore Solutions terms of service and usage guidelines.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="py-20 md:py-28">
          <div className="container max-w-4xl">
            <h1 className="font-display text-4xl font-bold tracking-tight text-foreground mb-8">
              Terms of Service
            </h1>
            
            <div className="prose prose-slate max-w-none">
              <p className="text-lg text-muted-foreground mb-8">
                Last updated: {new Date().toLocaleDateString()}
              </p>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Agreement to Terms
                </h2>
                <p className="text-muted-foreground mb-4">
                  By accessing our website, you agree to be bound by these Terms of Service 
                  and all applicable laws and regulations. If you do not agree with any of 
                  these terms, you are prohibited from using this site.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Use License
                </h2>
                <p className="text-muted-foreground mb-4">
                  Permission is granted to temporarily access the materials on OmniCore Solutions&rsquo; 
                  website for personal, non-commercial transitory viewing only.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Services
                </h2>
                <p className="text-muted-foreground mb-4">
                  OmniCore Solutions provides consulting services in Web2 and Web3 technologies. 
                  Specific terms for services will be outlined in individual service agreements.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Disclaimer
                </h2>
                <p className="text-muted-foreground mb-4">
                  The materials on our website are provided on an &lsquo;as is&rsquo; basis. OmniCore Solutions 
                  makes no warranties, expressed or implied, and hereby disclaims and negates all 
                  other warranties including, without limitation, implied warranties or conditions 
                  of merchantability, fitness for a particular purpose, or non-infringement of 
                  intellectual property or other violation of rights.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Limitations
                </h2>
                <p className="text-muted-foreground mb-4">
                  In no event shall OmniCore Solutions or its suppliers be liable for any damages 
                  arising out of the use or inability to use the materials on our website.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Contact Information
                </h2>
                <p className="text-muted-foreground">
                  If you have any questions about these Terms, please contact us at{" "}
                  <a href="mailto:hello@omnicore.solutions" className="text-primary hover:underline">
                    hello@omnicore.solutions
                  </a>
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

