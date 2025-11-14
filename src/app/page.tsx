import { Metadata } from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Hero from "@/components/home/hero";
import ServicesPreview from "@/components/home/services-preview";
import EngagementPreview from "@/components/home/engagement-preview";
import FeaturedCaseStudy from "@/components/home/featured-case-study";
import LeadMagnet from "@/components/home/lead-magnet";
import Values from "@/components/home/values";
import CTASection from "@/components/home/cta-section";
import { OrganizationSchema, WebSiteSchema } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Home",
};

export default function HomePage() {
  return (
    <>
      <OrganizationSchema />
      <WebSiteSchema />
      <Header />
      <main id="main-content">
        <Hero />
        <ServicesPreview />
        <EngagementPreview />
        <FeaturedCaseStudy />
        <LeadMagnet />
        <Values />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}

