import { Link } from "wouter";
import { Facebook, Instagram, Youtube, Linkedin, Twitter } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/programs", label: "Programs" },
  { href: "/impact", label: "Impact" },
  { href: "/donate", label: "Donate" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/media", label: "Media" },
  { href: "/contact", label: "Contact" },
];

const socials = [
  {
    href: "https://facebook.com/pcubefoundation",
    icon: Facebook,
    label: "Facebook",
  },
  {
    href: "https://instagram.com/pcubefoundation",
    icon: Instagram,
    label: "Instagram",
  },
  {
    href: "https://x.com/pcubefoundation",
    icon: Twitter,
    label: "X / Twitter",
  },
  {
    href: "https://youtube.com/@pcubefoundation",
    icon: Youtube,
    label: "YouTube",
  },
  {
    href: "https://linkedin.com/company/pcube-foundation",
    icon: Linkedin,
    label: "LinkedIn",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[hsl(240,10%,3%)] border-t border-[hsl(var(--border))] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo.jpeg"
                alt="PCube Foundation logo"
                className="w-10 h-10 rounded-sm object-cover"
                loading="lazy"
                decoding="async"
              />
              <span className="font-display text-xl tracking-widest text-[hsl(var(--foreground))]">
                PCUBE{" "}
                <span className="text-[hsl(var(--primary))]">FOUNDATION</span>
              </span>
            </div>
            <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed max-w-xs">
              A registered non-profit sports development organization building
              pathways from Thane's streets to national arenas.
            </p>
            <div className="space-y-1">
              <p className="text-[hsl(var(--muted-foreground))] text-xs">
                Reg. No: PCF/MH/2021/00847
              </p>
              <p className="text-[hsl(var(--muted-foreground))] text-xs">
                12A Ref: PCF/12A/2023 · 80G Ref: PCF/80G/2023
              </p>
            </div>
            <div className="flex items-center gap-1 flex-wrap">
              {["Registered NGO", "12A Certified", "80G Certified"].map(
                (badge) => (
                  <span
                    key={badge}
                    className="text-[10px] font-medium tracking-wider px-2 py-1 border border-[hsl(var(--primary))] text-[hsl(var(--primary))]"
                  >
                    {badge.toUpperCase()}
                  </span>
                ),
              )}
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm tracking-widest text-[hsl(var(--foreground))] mb-4">
              QUICK LINKS
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-[hsl(var(--muted-foreground))] text-sm hover:text-[hsl(var(--primary))] transition-colors duration-200 cursor-pointer">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-display text-sm tracking-widest text-[hsl(var(--foreground))] mb-4">
                CONNECT
              </h3>
              <div className="flex items-center gap-4">
                {socials.map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors duration-200"
                    data-testid={`link-social-${label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-display text-sm tracking-widest text-[hsl(var(--foreground))] mb-2">
                LOCATION
              </h3>
              <p className="text-[hsl(var(--muted-foreground))] text-sm">
                Thane District, Maharashtra, India
              </p>
              <p className="text-[hsl(var(--muted-foreground))] text-sm mt-1">
                info@pcubefoundation.org
              </p>
            </div>
            <Link href="/donate">
              <div className="inline-block bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] font-display tracking-widest text-sm px-6 py-3 hover:brightness-110 transition-all duration-200 cursor-pointer">
                DONATE NOW →
              </div>
            </Link>
          </div>
        </div>

        <div className="border-t border-[hsl(var(--border))] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[hsl(var(--muted-foreground))] text-xs tracking-wide text-center sm:text-left">
            Built with purpose for the children of Thane. © 2025 PCube
            Foundation. All rights reserved.
          </p>
          <p className="text-[hsl(var(--muted-foreground))] text-xs">
            Prospect · Progress · Play
          </p>
        </div>
      </div>
    </footer>
  );
}
