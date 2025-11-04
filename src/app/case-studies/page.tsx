"use client";

import { useState } from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import CaseStudyCard from "@/components/case-study-card";
import { CASE_STUDIES } from "@/lib/constants";

type FilterType = "All" | "Web2" | "Web3";

export default function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");

  const filteredCaseStudies = CASE_STUDIES.filter((study) => {
    if (activeFilter === "All") return true;
    return study.category === activeFilter;
  });

  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20 py-20 md:py-28">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                Success Stories That{" "}
                <span className="bg-gradient-to-r from-crypto-accent via-crypto-electric to-crypto-accent bg-clip-text text-transparent">
                  Speak for Themselves
                </span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground md:text-xl">
                From traditional companies embracing blockchain to Web3-native startups, see how we&rsquo;ve helped diverse clients 
                build products, launch successfully, and achieve exceptional growth.
              </p>
            </div>
          </div>
        </section>

        {/* Filter and Case Studies */}
        <section className="py-20 md:py-28">
          <div className="container">
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {(["All", "Web2", "Web3"] as FilterType[]).map((filter) => (
                <Button
                  key={filter}
                  variant={activeFilter === filter ? "default" : "outline"}
                  size="lg"
                  onClick={() => setActiveFilter(filter)}
                  className="min-w-[120px]"
                >
                  {filter}
                </Button>
              ))}
            </div>

            {/* Case Studies Grid */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredCaseStudies.map((study) => (
                <CaseStudyCard
                  key={study.id}
                  title={study.title}
                  client={study.client}
                  category={study.category}
                  challenge={study.challenge}
                  solution={study.solution}
                  results={study.results}
                  tags={study.tags}
                />
              ))}
            </div>

            {filteredCaseStudies.length === 0 && (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">
                  No case studies found for this category.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 bg-muted/30">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Ready to Write Your Success Story?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Let&rsquo;s discuss how we can help you achieve similar results and exceed your goals.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Book a Discovery Call
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/services">
                    View Services
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

