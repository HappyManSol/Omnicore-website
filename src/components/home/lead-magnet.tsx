"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Download, CheckCircle2, Loader2, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

const leadMagnetSchema = z.object({
  email: z.string().email("Invalid email address"),
  name: z.string().min(2, "Name required").optional(),
});

type LeadMagnetData = z.infer<typeof leadMagnetSchema>;

export default function LeadMagnet() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LeadMagnetData>({
    resolver: zodResolver(leadMagnetSchema),
  });

  async function onSubmit(data: LeadMagnetData) {
    setIsSubmitting(true);

    try {
      // Send to your backend/Mailchimp/etc
      const response = await fetch("/api/lead-magnet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to subscribe");

      setIsSuccess(true);
      reset();

      // Auto-download the checklist
      window.open("/downloads/web3-launch-checklist.pdf", "_blank");

      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error("Lead magnet error:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSuccess) {
    return (
      <div className="rounded-lg border-2 border-crypto-accent bg-crypto-accent/5 p-6 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-crypto-accent mb-3" />
        <h3 className="font-semibold text-foreground mb-2">Success! Check Your Email</h3>
        <p className="text-sm text-muted-foreground">
          Your checklist is downloading. We&rsquo;ve also sent it to your inbox!
        </p>
      </div>
    );
  }

  return (
    <section className="py-20 md:py-28 bg-crypto-dark">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <Rocket className="mx-auto h-12 w-12 text-crypto-accent mb-4" />
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            Ready to Launch Your Web3 Project?
          </h2>
          <p className="text-lg text-muted-foreground">
            Get our proven checklist used by 100+ successful launches
          </p>
        </div>

        <Card className="border-crypto-accent/30 bg-crypto-grey-900/80 backdrop-blur">
          <CardContent className="p-8">
        <div className="flex items-start gap-4 mb-6">
          <div className="flex-shrink-0">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-crypto-accent/10">
              <Download className="h-6 w-6 text-crypto-accent" />
            </div>
          </div>
          <div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">
              Free Web3 Launch Readiness Checklist
            </h3>
            <p className="text-sm text-muted-foreground">
              Get our proven 50-point checklist used by successful Web3 projects to ensure a flawless launch.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Input
              type="email"
              placeholder="Enter your email"
              {...register("email")}
              className="bg-crypto-dark border-crypto-grey-700"
              aria-label="Email address"
            />
            {errors.email && (
              <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
            )}
          </div>

          <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Download className="mr-2 h-5 w-5" />
                Download Free Checklist
              </>
            )}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            Join 5,000+ founders and builders. No spam, ever.
          </p>
        </form>
      </CardContent>
    </Card>
      </div>
    </section>
  );
}

