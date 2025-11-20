import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CaseStudyCardProps {
  title: string;
  client: string;
  category: string;
  challenge: string;
  solution: string;
  results: string;
  tags: readonly string[];
  link?: string;
}

export default function CaseStudyCard({
  title,
  client,
  category,
  challenge,
  solution,
  results,
  tags,
  link,
}: CaseStudyCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all h-full flex flex-col">
      <CardHeader>
        <div className="flex items-start justify-between mb-2">
          <Badge variant={category === "Web3" ? "default" : "secondary"}>
            {category}
          </Badge>
        </div>
        <CardTitle className="text-xl group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="text-sm font-medium">
          Client: {client}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <div className="space-y-4 flex-1">
          <div>
            <h4 className="font-semibold text-sm text-foreground mb-1">Challenge</h4>
            <p className="text-sm text-muted-foreground">{challenge}</p>
          </div>
          <div>
            <h4 className="font-semibold text-sm text-foreground mb-1">Solution</h4>
            <p className="text-sm text-muted-foreground">{solution}</p>
          </div>
          <div>
            <h4 className="font-semibold text-sm text-foreground mb-1">Results</h4>
            <p className="text-sm text-muted-foreground font-medium">{results}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-6">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        {link && (
          <div className="mt-6">
            <Button asChild variant="outline" size="sm" className="w-full">
              <Link href={link}>
                Read Case Study
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

