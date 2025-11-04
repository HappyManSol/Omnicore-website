import { ShieldCheck, Award, HeartHandshake } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { VALUES } from "@/lib/constants";

const ICON_MAP = {
  "shield-check": ShieldCheck,
  "award": Award,
  "heart-handshake": HeartHandshake,
};

export default function Values() {
  return (
    <section className="py-20 md:py-28 bg-crypto-grey-900/30" id="values">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Our Core Values
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            The principles that guide every decision we make and every relationship we build.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {VALUES.map((value) => {
            const Icon = ICON_MAP[value.icon as keyof typeof ICON_MAP];
            return (
              <Card key={value.title} className="text-center border-crypto-accent/20 bg-crypto-grey-900/50 backdrop-blur hover:border-crypto-accent/40 transition-colors">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-crypto-accent/10">
                    <Icon className="h-8 w-8 text-crypto-accent" />
                  </div>
                  <CardTitle className="text-2xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

