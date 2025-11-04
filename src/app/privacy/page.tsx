import { Metadata } from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "OmniCore Solutions privacy policy and data protection information.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="py-20 md:py-28">
          <div className="container max-w-4xl">
            <h1 className="font-display text-4xl font-bold tracking-tight text-foreground mb-8">
              Privacy Policy
            </h1>
            
            <div className="prose prose-slate max-w-none">
              <p className="text-lg text-muted-foreground mb-8">
                Last updated: {new Date().toLocaleDateString()}
              </p>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Introduction
                </h2>
                <p className="text-muted-foreground mb-4">
                  OmniCore Solutions (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                  when you visit our website.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Information We Collect
                </h2>
                <p className="text-muted-foreground mb-4">
                  We collect information that you provide directly to us, including:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                  <li>Name and contact information (email, phone number)</li>
                  <li>Company name</li>
                  <li>Messages and communications you send to us</li>
                  <li>Any other information you choose to provide</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  How We Use Your Information
                </h2>
                <p className="text-muted-foreground mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                  <li>Respond to your inquiries and provide customer service</li>
                  <li>Send you marketing communications (with your consent)</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Information Sharing
                </h2>
                <p className="text-muted-foreground mb-4">
                  We do not sell, trade, or rent your personal information to third parties. 
                  We may share your information with service providers who assist us in operating 
                  our website and conducting our business.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Contact Us
                </h2>
                <p className="text-muted-foreground">
                  If you have questions about this Privacy Policy, please contact us at{" "}
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

