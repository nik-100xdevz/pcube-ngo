import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/impact", label: "Impact" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/media", label: "Media" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <>
      <motion.nav
        data-testid="navbar"
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backdropFilter: scrolled ? "blur(20px)" : "blur(0px)",
          backgroundColor: scrolled ? "rgba(10,10,14,0.92)" : "transparent",
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,0.06)"
            : "1px solid transparent",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16 lg:h-20">
          <Link href="/" data-testid="link-logo">
            <div className="flex items-center gap-3 group cursor-pointer">
              <img
                src="/logo.jpeg"
                alt="PCube Foundation logo"
                className="w-10 h-10 rounded-sm object-cover"
                loading="eager"
                decoding="async"
              />
              <span className="font-display text-xl tracking-widest text-[hsl(var(--foreground))] hidden sm:block">
                PCUBE{" "}
                <span className="text-[hsl(var(--primary))]">FOUNDATION</span>
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  data-testid={`link-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <span className="relative text-sm font-medium tracking-wide cursor-pointer group">
                    <span
                      className={
                        isActive
                          ? "text-[hsl(var(--primary))]"
                          : "text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors duration-200"
                      }
                    >
                      {link.label}
                    </span>
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[hsl(var(--primary))]"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-4">
            <Link href="/donate" data-testid="link-donate-nav">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="hidden lg:block bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] font-display tracking-widest text-sm px-6 py-2.5 transition-all duration-200 hover:brightness-110"
                data-testid="button-donate-nav"
              >
                DONATE NOW
              </motion.button>
            </Link>

            <button
              className="lg:hidden text-[hsl(var(--foreground))] p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              data-testid="button-menu-toggle"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[hsl(var(--background))] flex flex-col items-center justify-center lg:hidden"
            data-testid="mobile-menu"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    data-testid={`link-mobile-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <span className="font-display text-4xl tracking-widest text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors duration-200 cursor-pointer">
                      {link.label.toUpperCase()}
                    </span>
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.06, duration: 0.4 }}
              >
                <Link href="/donate" data-testid="link-mobile-donate">
                  <span className="font-display text-4xl tracking-widest text-[hsl(var(--primary))] cursor-pointer">
                    DONATE
                  </span>
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
