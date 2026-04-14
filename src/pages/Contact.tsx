import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  Twitter,
  MapPin,
  Mail,
} from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().optional(),
  subject: z.string().min(1, "Select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});
type ContactForm = z.infer<typeof contactSchema>;

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
    label: "X (Twitter)",
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

export default function Contact() {
  const prefersReduced = useReducedMotion();
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (_data: ContactForm) => {
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitted(true);
  };

  return (
    <main>
      <a
        href="#contact-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[hsl(var(--primary))] focus:text-[hsl(var(--primary-foreground))]"
      >
        Skip to content
      </a>

      <section
        id="contact-content"
        aria-label="Contact hero"
        className="pt-40 pb-12 lg:pt-48 lg:pb-16 border-b border-[hsl(var(--border))]"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={prefersReduced ? {} : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-display text-sm tracking-widest text-[hsl(var(--primary))]">
              REACH OUT
            </span>
            <h1 className="font-display text-[clamp(3rem,9vw,7rem)] tracking-tight text-[hsl(var(--foreground))] mt-2 leading-none">
              CONTACT
            </h1>
          </motion.div>
        </div>
      </section>

      <section aria-label="Contact form and info" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* FORM */}
            <div className="lg:col-span-3">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="border border-[hsl(var(--primary))] p-12 text-center h-full flex flex-col items-center justify-center"
                  data-testid="contact-form-success"
                >
                  <div className="w-16 h-16 bg-[hsl(var(--primary))] flex items-center justify-center mx-auto mb-4">
                    <span className="font-display text-2xl text-[hsl(var(--primary-foreground))]">
                      ✓
                    </span>
                  </div>
                  <h3 className="font-display text-2xl tracking-wider text-[hsl(var(--foreground))] mb-2">
                    MESSAGE SENT
                  </h3>
                  <p className="text-[hsl(var(--muted-foreground))] max-w-xs">
                    We read every message. Someone from the PCube team will
                    respond within 2 business days.
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-6"
                  data-testid="contact-form"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="font-display text-xs tracking-widest text-[hsl(var(--muted-foreground))] block mb-2">
                        FULL NAME
                      </label>
                      <input
                        {...register("name")}
                        className="w-full bg-[hsl(var(--card))] border border-[hsl(var(--border))] text-[hsl(var(--foreground))] px-4 py-3 focus:outline-none focus:border-[hsl(var(--primary))] transition-colors text-sm"
                        placeholder="Priya Sharma"
                        data-testid="input-contact-name"
                      />
                      {errors.name && (
                        <p className="text-[hsl(var(--destructive))] text-xs mt-1">
                          {errors.name.message}
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
                        className="w-full bg-[hsl(var(--card))] border border-[hsl(var(--border))] text-[hsl(var(--foreground))] px-4 py-3 focus:outline-none focus:border-[hsl(var(--primary))] transition-colors text-sm"
                        placeholder="you@email.com"
                        data-testid="input-contact-email"
                      />
                      {errors.email && (
                        <p className="text-[hsl(var(--destructive))] text-xs mt-1">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="font-display text-xs tracking-widest text-[hsl(var(--muted-foreground))] block mb-2">
                        PHONE (OPTIONAL)
                      </label>
                      <input
                        {...register("phone")}
                        className="w-full bg-[hsl(var(--card))] border border-[hsl(var(--border))] text-[hsl(var(--foreground))] px-4 py-3 focus:outline-none focus:border-[hsl(var(--primary))] transition-colors text-sm"
                        placeholder="+91 98765 43210"
                        data-testid="input-contact-phone"
                      />
                    </div>
                    <div>
                      <label className="font-display text-xs tracking-widest text-[hsl(var(--muted-foreground))] block mb-2">
                        SUBJECT
                      </label>
                      <select
                        {...register("subject")}
                        className="w-full bg-[hsl(var(--card))] border border-[hsl(var(--border))] text-[hsl(var(--foreground))] px-4 py-3 focus:outline-none focus:border-[hsl(var(--primary))] transition-colors text-sm"
                        data-testid="select-contact-subject"
                      >
                        <option value="">Select subject...</option>
                        <option value="general">General Inquiry</option>
                        <option value="volunteer">Volunteer</option>
                        <option value="sponsorship">Sponsorship</option>
                        <option value="media">Media</option>
                        <option value="donation">Donation Query</option>
                      </select>
                      {errors.subject && (
                        <p className="text-[hsl(var(--destructive))] text-xs mt-1">
                          {errors.subject.message}
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
                      rows={6}
                      className="w-full bg-[hsl(var(--card))] border border-[hsl(var(--border))] text-[hsl(var(--foreground))] px-4 py-3 focus:outline-none focus:border-[hsl(var(--primary))] transition-colors text-sm resize-none"
                      placeholder="Tell us how we can help, or how you'd like to get involved..."
                      data-testid="textarea-contact-message"
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
                    data-testid="button-submit-contact"
                  >
                    {isSubmitting ? "SENDING..." : "SEND MESSAGE →"}
                  </motion.button>
                </form>
              )}
            </div>

            {/* INFO */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h3 className="font-display text-sm tracking-widest text-[hsl(var(--foreground))] mb-4">
                  FIND US
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin
                      size={16}
                      className="text-[hsl(var(--primary))] flex-shrink-0 mt-0.5"
                    />
                    <div>
                      <p className="text-[hsl(var(--foreground))] text-sm">
                        Thane District, Maharashtra, India
                      </p>
                      <p className="text-[hsl(var(--muted-foreground))] text-xs mt-0.5">
                        Field programs operate across Thane municipal zones
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail
                      size={16}
                      className="text-[hsl(var(--primary))] flex-shrink-0 mt-0.5"
                    />
                    <div>
                      <p className="text-[hsl(var(--foreground))] text-sm">
                        info@pcubefoundation.org
                      </p>
                      <p className="text-[hsl(var(--muted-foreground))] text-xs mt-0.5">
                        Response within 2 business days
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-display text-sm tracking-widest text-[hsl(var(--foreground))] mb-4">
                  FOLLOW THE JOURNEY
                </h3>
                <div className="space-y-3">
                  {socials.map(({ href, icon: Icon, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors duration-200 group"
                      data-testid={`link-contact-social-${label.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      <Icon
                        size={16}
                        className="group-hover:scale-110 transition-transform duration-200"
                      />
                      <span className="text-sm">{label}</span>
                      <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                        →
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="border border-[hsl(var(--border))] p-6">
                <h3 className="font-display text-sm tracking-widest text-[hsl(var(--primary))] mb-2">
                  MEDIA INQUIRIES
                </h3>
                <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">
                  For press coverage, photography access, or interview requests,
                  mark your message subject as "Media" and our communications
                  team will prioritize your request.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
