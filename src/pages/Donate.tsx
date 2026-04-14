import { useState } from "react";
import { motion } from "framer-motion";
import { Shield, FileText, Download } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const donationOptions = [
  { amount: 500, impact: "Training equipment for one week" },
  { amount: 1000, impact: "Travel support for one competition" },
  { amount: 2500, impact: "One month's coaching for one child" },
  { amount: 5000, impact: "Full equipment kit for one student" },
];

const breakdown = [
  {
    label: "Training & Coaching",
    percentage: 52,
    color: "hsl(var(--primary))",
  },
  { label: "Equipment", percentage: 24, color: "hsl(240,60%,60%)" },
  { label: "Travel & Competition", percentage: 16, color: "hsl(160,60%,50%)" },
  { label: "Operations", percentage: 8, color: "hsl(var(--muted-foreground))" },
];

export default function Donate() {
  const [selected, setSelected] = useState<number | null>(2500);
  const [custom, setCustom] = useState("");
  const prefersReduced = useReducedMotion();

  return (
    <main>
      <a
        href="#donate-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[hsl(var(--primary))] focus:text-[hsl(var(--primary-foreground))]"
      >
        Skip to content
      </a>

      {/* HERO */}
      <section
        id="donate-content"
        aria-label="Donate hero"
        className="pt-40 pb-20 lg:pt-48 lg:pb-28 border-b border-[hsl(var(--border))]"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={prefersReduced ? {} : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-display text-sm tracking-widest text-[hsl(var(--primary))]">
              JOIN THE MISSION
            </span>
            <h1 className="font-display text-[clamp(3rem,9vw,7rem)] tracking-tight text-[hsl(var(--foreground))] mt-2 leading-none">
              YOU'RE NOT
              <br />
              DONATING.
              <br />
              <span className="text-[hsl(var(--primary))]">
                YOU'RE INVESTING.
              </span>
            </h1>
            <p className="mt-6 text-[hsl(var(--muted-foreground))] text-lg max-w-2xl leading-relaxed">
              Every rupee you put into PCube Foundation is a direct investment
              in a child's shot at the national championship podium. You are not
              a benefactor. You are a partner in one of the most specific,
              accountable sports development organizations in Maharashtra.
            </p>
          </motion.div>
        </div>
      </section>

      {/* DONATION SELECTOR */}
      <section aria-label="Choose donation amount" className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="mb-10">
            <span className="font-display text-sm tracking-widest text-[hsl(var(--primary))]">
              CHOOSE YOUR INVESTMENT
            </span>
            <h2 className="font-display text-4xl tracking-tight text-[hsl(var(--foreground))] mt-2">
              WHAT YOUR RUPEES DO
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {donationOptions.map(({ amount, impact }) => (
              <motion.button
                key={amount}
                onClick={() => {
                  setSelected(amount);
                  setCustom("");
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`p-6 border text-left transition-all duration-200 ${
                  selected === amount
                    ? "border-[hsl(var(--primary))] bg-[hsl(var(--primary))]/5"
                    : "border-[hsl(var(--border))] hover:border-[hsl(var(--primary))]/40"
                }`}
                data-testid={`button-donation-${amount}`}
              >
                <div className="flex items-start justify-between mb-2">
                  <span
                    className={`font-display text-3xl ${selected === amount ? "text-[hsl(var(--primary))]" : "text-[hsl(var(--foreground))]"}`}
                  >
                    ₹{amount.toLocaleString("en-IN")}
                  </span>
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mt-1 ${
                      selected === amount
                        ? "border-[hsl(var(--primary))] bg-[hsl(var(--primary))]"
                        : "border-[hsl(var(--muted-foreground))]"
                    }`}
                  >
                    {selected === amount && (
                      <div className="w-2 h-2 rounded-full bg-[hsl(var(--primary-foreground))]" />
                    )}
                  </div>
                </div>
                <p className="text-[hsl(var(--muted-foreground))] text-sm">
                  {impact}
                </p>
              </motion.button>
            ))}
          </div>

          <div className="mb-10">
            <label className="font-display text-xs tracking-widest text-[hsl(var(--muted-foreground))] block mb-3">
              CUSTOM AMOUNT (₹)
            </label>
            <input
              type="number"
              value={custom}
              onChange={(e) => {
                setCustom(e.target.value);
                setSelected(null);
              }}
              placeholder="Enter any amount"
              className="w-full bg-[hsl(var(--card))] border border-[hsl(var(--border))] text-[hsl(var(--foreground))] px-6 py-4 font-display text-2xl focus:outline-none focus:border-[hsl(var(--primary))] transition-colors placeholder:text-[hsl(var(--muted-foreground))]/40"
              data-testid="input-custom-amount"
            />
          </div>

          <div className="flex items-center gap-4 mb-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] font-display tracking-widest text-lg py-5 hover:brightness-110 transition-all duration-200"
              data-testid="button-proceed-donate"
            >
              PROCEED TO DONATE →
            </motion.button>
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            {[
              "Registered NGO",
              "12A Certified",
              "80G Tax Exempt",
              "Secure",
            ].map((badge) => (
              <div
                key={badge}
                className="flex items-center gap-2 border border-[hsl(var(--border))] px-3 py-2"
              >
                <Shield size={12} className="text-[hsl(var(--primary))]" />
                <span className="font-display text-[10px] tracking-widest text-[hsl(var(--muted-foreground))]">
                  {badge.toUpperCase()}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRANSPARENCY */}
      <section
        aria-label="Fund allocation"
        className="py-20 lg:py-28 bg-[hsl(var(--card))]"
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="mb-10">
            <span className="font-display text-sm tracking-widest text-[hsl(var(--primary))]">
              FULL TRANSPARENCY
            </span>
            <h2 className="font-display text-4xl tracking-tight text-[hsl(var(--foreground))] mt-2">
              WHERE EVERY RUPEE GOES
            </h2>
          </div>
          <div className="space-y-4">
            {breakdown.map((item, i) => (
              <motion.div
                key={item.label}
                initial={prefersReduced ? {} : { opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="flex items-center gap-6"
                data-testid={`breakdown-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="w-36 text-right">
                  <span className="font-display text-sm tracking-wider text-[hsl(var(--foreground))]">
                    {item.percentage}%
                  </span>
                </div>
                <div className="flex-1 h-8 bg-[hsl(var(--background))] border border-[hsl(var(--border))] overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{
                      delay: i * 0.1 + 0.2,
                      duration: 1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="h-full"
                    style={{ backgroundColor: item.color }}
                  />
                </div>
                <div className="w-48">
                  <span className="text-[hsl(var(--muted-foreground))] text-sm">
                    {item.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="mt-8 text-[hsl(var(--muted-foreground))] text-sm flex items-center gap-2">
            <FileText size={14} className="text-[hsl(var(--primary))]" />
            We publish annual impact reports. Request yours at
            info@pcubefoundation.org
          </p>
        </div>
      </section>

      {/* 12A & 80G */}
      <section
        aria-label="Tax exemption certificates"
        className="py-20 lg:py-28"
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="mb-10">
            <span className="font-display text-sm tracking-widest text-[hsl(var(--primary))]">
              TAX BENEFITS
            </span>
            <h2 className="font-display text-4xl tracking-tight text-[hsl(var(--foreground))] mt-2">
              YOUR DEDUCTIONS
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="border border-[hsl(var(--primary))] p-8 bg-[hsl(var(--primary))]/5">
              <span className="font-display text-4xl text-[hsl(var(--primary))] block mb-4">
                12A
              </span>
              <h3 className="font-display text-xl tracking-wider text-[hsl(var(--foreground))] mb-3">
                ORGANIZATIONAL TAX EXEMPTION
              </h3>
              <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed mb-4">
                Our 12A registration means PCube Foundation itself is exempt
                from paying income tax on donations and grants received. Every
                rupee you give goes to the mission, not to the government.
              </p>
              <p className="font-display text-xs tracking-widest text-[hsl(var(--muted-foreground))]">
                REF: PCF/12A/2023
              </p>
              <button
                className="mt-4 flex items-center gap-2 text-[hsl(var(--primary))] text-sm hover:underline"
                data-testid="button-download-12a"
              >
                <Download size={14} /> Download Certificate
              </button>
            </div>
            <div className="border border-[hsl(var(--border))] p-8">
              <span className="font-display text-4xl text-[hsl(var(--foreground))] block mb-4">
                80G
              </span>
              <h3 className="font-display text-xl tracking-wider text-[hsl(var(--foreground))] mb-3">
                DONOR TAX DEDUCTION
              </h3>
              <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed mb-4">
                Our 80G certification means YOU can deduct 50% of your donation
                from your taxable income. Donate ₹10,000 and reduce your tax
                liability by ₹5,000 — while fully funding a child's training.
              </p>
              <p className="font-display text-xs tracking-widest text-[hsl(var(--muted-foreground))]">
                REF: PCF/80G/2023
              </p>
              <button
                className="mt-4 flex items-center gap-2 text-[hsl(var(--primary))] text-sm hover:underline"
                data-testid="button-download-80g"
              >
                <Download size={14} /> Download Certificate
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
