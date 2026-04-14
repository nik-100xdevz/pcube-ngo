import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { useState } from "react";
import SponsorTier from "@/components/sections/SponsorTier";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const sponsorSchema = z.object({
  companyName: z.string().min(2, "Company name is required"),
  contactPerson: z.string().min(2, "Contact person is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(10, "Phone number required"),
  industry: z.string().min(2, "Industry is required"),
  tier: z.string().min(1, "Please select a tier"),
  message: z.string().min(10, "Please provide a brief message"),
});
type SponsorForm = z.infer<typeof sponsorSchema>;

const tiers = [
  {
    name: "Supporter",
    tagline: "Foundation Partner",
    investment: "₹1,00,000",
    funds: "Funds one month of full program operations",
    benefits: [
      "Logo on PCube website",
      "Mention in annual impact report",
      "Certificate of appreciation",
      "Email newsletter shoutout",
    ],
  },
  {
    name: "Contender",
    tagline: "Season Sponsor",
    investment: "₹5,00,000",
    funds: "Funds full equipment for 20 students",
    benefits: [
      "Logo on all event banners and materials",
      "Named acknowledgment at events",
      "Dedicated impact report section",
      "Social media feature (quarterly)",
      "Company visit to training facility",
    ],
    featured: true,
  },
  {
    name: "Champion",
    tagline: "Title Sponsor",
    investment: "₹15,00,000+",
    funds: "Funds an entire sport program for one year",
    benefits: [
      "Program naming rights for one sport",
      "Premium placement on all materials",
      "Executive presence at national events",
      "Custom CSR impact documentation",
      "Annual press release co-issued",
      "Bi-annual review meetings with leadership",
    ],
  },
];

export default function Sponsors() {
  const prefersReduced = useReducedMotion();
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SponsorForm>({
    resolver: zodResolver(sponsorSchema),
  });

  const onSubmit = async (_data: SponsorForm) => {
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitted(true);
  };

  return (
    <main>
      <a
        href="#sponsors-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[hsl(var(--primary))] focus:text-[hsl(var(--primary-foreground))]"
      >
        Skip to content
      </a>

      {/* HERO */}
      <section
        id="sponsors-content"
        aria-label="Sponsors hero"
        className="pt-40 pb-20 lg:pt-48 lg:pb-28 border-b border-[hsl(var(--border))]"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={prefersReduced ? {} : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-display text-sm tracking-widest text-[hsl(var(--primary))]">
              FOR CSR DECISION-MAKERS
            </span>
            <h1 className="font-display text-[clamp(2.5rem,8vw,6rem)] tracking-tight text-[hsl(var(--foreground))] mt-2 leading-none max-w-4xl">
              THIS IS NOT A DONATION ASK.
              <br />
              <span className="text-[hsl(var(--primary))]">
                THIS IS A BUSINESS PROPOSAL.
              </span>
            </h1>
            <p className="mt-6 text-[hsl(var(--muted-foreground))] text-lg max-w-2xl leading-relaxed">
              Partner with PCube Foundation and receive measurable brand
              visibility, documented social impact, and full CSR compliance —
              while funding one of Maharashtra's most active youth sports
              development programs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* TIERS */}
      <section aria-label="Sponsorship tiers" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-12">
            <span className="font-display text-sm tracking-widest text-[hsl(var(--primary))]">
              PARTNERSHIP OPTIONS
            </span>
            <h2 className="font-display text-4xl lg:text-5xl tracking-tight text-[hsl(var(--foreground))] mt-2">
              CHOOSE YOUR LEVEL
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {tiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={prefersReduced ? {} : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
              >
                <SponsorTier {...tier} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY PCUBE */}
      <section
        aria-label="Why PCube for CSR"
        className="py-20 lg:py-28 bg-[hsl(var(--card))]"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-display text-sm tracking-widest text-[hsl(var(--primary))]">
                THE CASE FOR PCUBE
              </span>
              <h2 className="font-display text-4xl lg:text-5xl tracking-tight text-[hsl(var(--foreground))] mt-2">
                WHY US
              </h2>
            </div>
            <div className="space-y-6 text-[hsl(var(--muted-foreground))] leading-relaxed">
              <p>
                PCube Foundation is government-registered, 80G-certified, and
                operating with documented, verifiable impact in Thane District.
                We have produced two national-level athletes. We have trained 47
                children. We have conducted 11 competitive events.
              </p>
              <p>
                When your company sponsors PCube, you receive a compliance-ready
                package including 80G-certified receipts, impact documentation,
                photography from events, and a dedicated section in our annual
                impact report — everything your CSR reporting requires.
              </p>
              <p className="text-[hsl(var(--foreground))] font-medium">
                We have community roots, national ambition, and a growing
                profile. You get brand association with a story that is only
                getting bigger.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CURRENT PARTNERS */}
      <section aria-label="Current partners" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <span className="font-display text-sm tracking-widest text-[hsl(var(--primary))]">
            FOUNDING PARTNERS
          </span>
          <h2 className="font-display text-4xl tracking-tight text-[hsl(var(--foreground))] mt-2 mb-12">
            JOIN OUR FOUNDERS
          </h2>
          <div className="border-2 border-dashed border-[hsl(var(--border))] p-16 flex items-center justify-center">
            <div className="text-center">
              <p className="font-display text-2xl text-[hsl(var(--muted-foreground))] mb-2">
                YOUR LOGO HERE
              </p>
              <p className="text-[hsl(var(--muted-foreground))] text-sm">
                Be the first company to partner with PCube Foundation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INQUIRY FORM */}
      <section
        aria-label="Partnership inquiry form"
        className="py-20 lg:py-28 bg-[hsl(var(--card))]"
      >
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <div className="mb-10">
            <span className="font-display text-sm tracking-widest text-[hsl(var(--primary))]">
              GET IN TOUCH
            </span>
            <h2 className="font-display text-4xl tracking-tight text-[hsl(var(--foreground))] mt-2">
              START A CONVERSATION
            </h2>
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="border border-[hsl(var(--primary))] p-12 text-center"
              data-testid="sponsor-form-success"
            >
              <div className="w-16 h-16 bg-[hsl(var(--primary))] flex items-center justify-center mx-auto mb-4">
                <span className="font-display text-2xl text-[hsl(var(--primary-foreground))]">
                  ✓
                </span>
              </div>
              <h3 className="font-display text-2xl tracking-wider text-[hsl(var(--foreground))] mb-2">
                MESSAGE RECEIVED
              </h3>
              <p className="text-[hsl(var(--muted-foreground))]">
                Our partnerships team will be in touch within 2 business days.
              </p>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6"
              data-testid="sponsor-inquiry-form"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="font-display text-xs tracking-widest text-[hsl(var(--muted-foreground))] block mb-2">
                    COMPANY NAME
                  </label>
                  <input
                    {...register("companyName")}
                    className="w-full bg-[hsl(var(--background))] border border-[hsl(var(--border))] text-[hsl(var(--foreground))] px-4 py-3 focus:outline-none focus:border-[hsl(var(--primary))] transition-colors text-sm"
                    placeholder="Acme Corporation"
                    data-testid="input-company-name"
                  />
                  {errors.companyName && (
                    <p className="text-[hsl(var(--destructive))] text-xs mt-1">
                      {errors.companyName.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="font-display text-xs tracking-widest text-[hsl(var(--muted-foreground))] block mb-2">
                    CONTACT PERSON
                  </label>
                  <input
                    {...register("contactPerson")}
                    className="w-full bg-[hsl(var(--background))] border border-[hsl(var(--border))] text-[hsl(var(--foreground))] px-4 py-3 focus:outline-none focus:border-[hsl(var(--primary))] transition-colors text-sm"
                    placeholder="Rajesh Kumar"
                    data-testid="input-contact-person"
                  />
                  {errors.contactPerson && (
                    <p className="text-[hsl(var(--destructive))] text-xs mt-1">
                      {errors.contactPerson.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="font-display text-xs tracking-widest text-[hsl(var(--muted-foreground))] block mb-2">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    {...register("email")}
                    className="w-full bg-[hsl(var(--background))] border border-[hsl(var(--border))] text-[hsl(var(--foreground))] px-4 py-3 focus:outline-none focus:border-[hsl(var(--primary))] transition-colors text-sm"
                    placeholder="csr@company.com"
                    data-testid="input-email-sponsor"
                  />
                  {errors.email && (
                    <p className="text-[hsl(var(--destructive))] text-xs mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="font-display text-xs tracking-widest text-[hsl(var(--muted-foreground))] block mb-2">
                    PHONE
                  </label>
                  <input
                    {...register("phone")}
                    className="w-full bg-[hsl(var(--background))] border border-[hsl(var(--border))] text-[hsl(var(--foreground))] px-4 py-3 focus:outline-none focus:border-[hsl(var(--primary))] transition-colors text-sm"
                    placeholder="+91 98765 43210"
                    data-testid="input-phone-sponsor"
                  />
                  {errors.phone && (
                    <p className="text-[hsl(var(--destructive))] text-xs mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="font-display text-xs tracking-widest text-[hsl(var(--muted-foreground))] block mb-2">
                    INDUSTRY
                  </label>
                  <input
                    {...register("industry")}
                    className="w-full bg-[hsl(var(--background))] border border-[hsl(var(--border))] text-[hsl(var(--foreground))] px-4 py-3 focus:outline-none focus:border-[hsl(var(--primary))] transition-colors text-sm"
                    placeholder="Technology / Finance / FMCG..."
                    data-testid="input-industry"
                  />
                  {errors.industry && (
                    <p className="text-[hsl(var(--destructive))] text-xs mt-1">
                      {errors.industry.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="font-display text-xs tracking-widest text-[hsl(var(--muted-foreground))] block mb-2">
                    TIER INTEREST
                  </label>
                  <select
                    {...register("tier")}
                    className="w-full bg-[hsl(var(--background))] border border-[hsl(var(--border))] text-[hsl(var(--foreground))] px-4 py-3 focus:outline-none focus:border-[hsl(var(--primary))] transition-colors text-sm"
                    data-testid="select-tier"
                  >
                    <option value="">Select tier...</option>
                    <option value="supporter">Supporter</option>
                    <option value="contender">Contender</option>
                    <option value="champion">Champion</option>
                  </select>
                  {errors.tier && (
                    <p className="text-[hsl(var(--destructive))] text-xs mt-1">
                      {errors.tier.message}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <label className="font-display text-xs tracking-widest text-[hsl(var(--muted-foreground))] block mb-2">
                  MESSAGE
                </label>
                <textarea
                  {...register("message")}
                  rows={4}
                  className="w-full bg-[hsl(var(--background))] border border-[hsl(var(--border))] text-[hsl(var(--foreground))] px-4 py-3 focus:outline-none focus:border-[hsl(var(--primary))] transition-colors text-sm resize-none"
                  placeholder="Tell us about your CSR goals and how you'd like to partner..."
                  data-testid="textarea-message-sponsor"
                />
                {errors.message && (
                  <p className="text-[hsl(var(--destructive))] text-xs mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] font-display tracking-widest text-sm py-4 hover:brightness-110 transition-all duration-200 disabled:opacity-60"
                data-testid="button-submit-sponsor"
              >
                {isSubmitting ? "SENDING..." : "SEND INQUIRY →"}
              </motion.button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
