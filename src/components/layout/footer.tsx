import Link from "next/link";
import { Linkedin, Twitter, Github, Mail, Send } from "lucide-react";
import { SITE_CONFIG, NAV_LINKS, COMPANY_INFO } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-crypto-grey-800 bg-crypto-grey-900/50" role="contentinfo">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div>
              <h3 className="font-display text-lg font-semibold text-crypto-accent">
                {SITE_CONFIG.name}
              </h3>
              <p className="text-sm text-crypto-grey-400">
                {SITE_CONFIG.altName}
              </p>
            </div>
            <p className="text-sm text-crypto-grey-400">
              {SITE_CONFIG.description}
            </p>
            <div className="flex space-x-4">
              <a
                href={SITE_CONFIG.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-crypto-grey-400 hover:text-crypto-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={SITE_CONFIG.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-crypto-grey-400 hover:text-crypto-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href={SITE_CONFIG.links.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-crypto-grey-400 hover:text-crypto-accent transition-colors"
                aria-label="Telegram"
              >
                <Send className="h-5 w-5" />
              </a>
              <a
                href={SITE_CONFIG.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-crypto-grey-400 hover:text-crypto-accent transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-sm font-semibold text-foreground mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-sm font-semibold text-foreground mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <span className="text-sm text-muted-foreground">
                  Product Development
                </span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">
                  Marketing & GTM
                </span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">
                  Partnerships
                </span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">
                  Web2 ↔ Web3 Bridges
                </span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-sm font-semibold text-foreground mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-sm text-muted-foreground hover:text-crypto-accent transition-colors flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  {COMPANY_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} {SITE_CONFIG.name}. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

