import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { useState } from "react";
import VolunteerRole from "@/components/sections/VolunteerRole";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const volunteerSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(10, "Phone required"),
  roles: z.array(z.string()).min(1, "Select at least one role"),
  availability: z.string().min(2, "Availability required"),
  motivation: z.string().min(20, "Tell us why you want to join"),
  experience: z.string().optional(),
});
type VolunteerForm = z.infer<typeof volunteerSchema>;

const roles = [
  {
    title: "Event Coordination",
    timeCommitment: "4-8 hrs/month",
    skills: "Organization, logistics",
    impact:
      "Ensure our tournaments and training events run seamlessly — from logistics to on-ground coordination.",
  },
  {
    title: "Coaching Support",
    timeCommitment: "6-12 hrs/month",
    skills: "Sports knowledge, patience",
    impact:
      "Work alongside our coaches to support training sessions, drills, and student development.",
  },
  {
    title: "Photography & Media",
    timeCommitment: "2-4 hrs/month",
    skills: "Photography, video editing",
    impact:
      "Document the students' journeys with photography and video — critical for storytelling and fundraising.",
  },
  {
    title: "Student Mentorship",
    timeCommitment: "4-6 hrs/month",
    skills: "Empathy, communication",
    impact:
      "One-on-one mentorship with students on academics, personal development, and navigating life beyond sport.",
  },
  {
    title: "Administrative Support",
    timeCommitment: "3-5 hrs/month",
    skills: "Spreadsheets, organization",
    impact:
      "Support our program team with documentation, scheduling, record-keeping, and data management.",
  },
  {
    title: "Community Outreach",
    timeCommitment: "4-8 hrs/month",
    skills: "Communication, drive",
    impact:
      "Visit schools and neighborhoods across Thane to identify new prospects and spread awareness of PCube's programs.",
  },
];

export default function GetInvolved() {
  const prefersReduced = useReducedMotion();
  const [submitted, setSubmitted] = useState(false);
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<VolunteerForm>({
    resolver: zodResolver(volunteerSchema),
    defaultValues: { roles: [] },
  });

  const toggleRole = (role: string) => {
    const updated = selectedRoles.includes(role)
      ? selectedRoles.filter((r) => r !== role)
      : [...selectedRoles, role];
    setSelectedRoles(updated);
    setValue("roles", updated);
  };

  const onSubmit = async (_data: VolunteerForm) => {
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitted(true);
  };

  return (
    <main>
      <a
        href="#involve-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[hsl(var(--primary))] focus:text-[hsl(var(--primary-foreground))]"
      >
        Skip to content
      </a>

      <section
        id="involve-content"
        aria-label="Get involved hero"
        className="pt-40 pb-20 lg:pt-48 lg:pb-28 border-b border-[hsl(var(--border))]"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={prefersReduced ? {} : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-display text-sm tracking-widest text-[hsl(var(--primary))]">
              JOIN THE MOVEMENT
            </span>
            <h1 className="font-display text-[clamp(3rem,9vw,7rem)] tracking-tight text-[hsl(var(--foreground))] mt-2 leading-none">
              THIS ISN'T
              <br />
              VOLUNTEERING.
              <br />
              <span className="text-[hsl(var(--primary))]">
                THIS IS BUILDING.
              </span>
            </h1>
            <p className="mt-6 text-[hsl(var(--muted-foreground))] text-lg max-w-2xl leading-relaxed">
              PCube Foundation is run by people who believe that the most
              important thing they can do with their time is give
              underprivileged children a fighting chance at national sport. If
              that resonates, there's a place for you here.
            </p>
          </motion.div>
        </div>
      </section>

      <section aria-label="Volunteer roles" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-12">
            <span className="font-display text-sm tracking-widest text-[hsl(var(--primary))]">
              OPEN ROLES
            </span>
            <h2 className="font-display text-4xl lg:text-5xl tracking-tight text-[hsl(var(--foreground))] mt-2">
              WHERE YOU FIT
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {roles.map((role, i) => (
              <VolunteerRole key={role.title} {...role} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section
        aria-label="Volunteer application"
        className="py-20 lg:py-28 bg-[hsl(var(--card))]"
      >
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <div className="mb-10">
            <span className="font-display text-sm tracking-widest text-[hsl(var(--primary))]">
              APPLY NOW
            </span>
            <h2 className="font-display text-4xl tracking-tight text-[hsl(var(--foreground))] mt-2">
              JOIN THE TEAM
            </h2>
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="border border-[hsl(var(--primary))] p-12 text-center"
              data-testid="volunteer-form-success"
            >
              <div className="w-16 h-16 bg-[hsl(var(--primary))] flex items-center justify-center mx-auto mb-4">
                <span className="font-display text-2xl text-[hsl(var(--primary-foreground))]">
                  ✓
                </span>
              </div>
              <h3 className="font-display text-2xl tracking-wider text-[hsl(var(--foreground))] mb-2">
                APPLICATION RECEIVED
              </h3>
              <p className="text-[hsl(var(--muted-foreground))]">
                Thank you for wanting to be part of the mission. We'll reach out
                within a week.
              </p>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6"
              data-testid="volunteer-application-form"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="font-display text-xs tracking-widest text-[hsl(var(--muted-foreground))] block mb-2">
                    NAME
                  </label>
                  <input
                    {...register("name")}
                    className="w-full bg-[hsl(var(--background))] border border-[hsl(var(--border))] text-[hsl(var(--foreground))] px-4 py-3 focus:outline-none focus:border-[hsl(var(--primary))] transition-colors text-sm"
                    placeholder="Your name"
                    data-testid="input-volunteer-name"
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
                    className="w-full bg-[hsl(var(--background))] border border-[hsl(var(--border))] text-[hsl(var(--foreground))] px-4 py-3 focus:outline-none focus:border-[hsl(var(--primary))] transition-colors text-sm"
                    placeholder="you@email.com"
                    data-testid="input-volunteer-email"
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
                    data-testid="input-volunteer-phone"
                  />
                  {errors.phone && (
                    <p className="text-[hsl(var(--destructive))] text-xs mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="font-display text-xs tracking-widest text-[hsl(var(--muted-foreground))] block mb-2">
                    AVAILABILITY
                  </label>
                  <input
                    {...register("availability")}
                    className="w-full bg-[hsl(var(--background))] border border-[hsl(var(--border))] text-[hsl(var(--foreground))] px-4 py-3 focus:outline-none focus:border-[hsl(var(--primary))] transition-colors text-sm"
                    placeholder="Weekends / Evenings..."
                    data-testid="input-availability"
                  />
                  {errors.availability && (
                    <p className="text-[hsl(var(--destructive))] text-xs mt-1">
                      {errors.availability.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="font-display text-xs tracking-widest text-[hsl(var(--muted-foreground))] block mb-3">
                  ROLE INTEREST (SELECT ALL THAT APPLY)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {roles.map((role) => (
                    <button
                      key={role.title}
                      type="button"
                      onClick={() => toggleRole(role.title)}
                      className={`text-xs text-left px-3 py-2 border transition-all duration-200 ${
                        selectedRoles.includes(role.title)
                          ? "border-[hsl(var(--primary))] text-[hsl(var(--primary))] bg-[hsl(var(--primary))]/5"
                          : "border-[hsl(var(--border))] text-[hsl(var(--muted-foreground))]"
                      }`}
                      data-testid={`toggle-role-${role.title.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {role.title}
                    </button>
                  ))}
                </div>
                {errors.roles && (
                  <p className="text-[hsl(var(--destructive))] text-xs mt-1">
                    {errors.roles.message}
                  </p>
                )}
              </div>

              <div>
                <label className="font-display text-xs tracking-widest text-[hsl(var(--muted-foreground))] block mb-2">
                  WHY YOU WANT TO JOIN
                </label>
                <textarea
                  {...register("motivation")}
                  rows={4}
                  className="w-full bg-[hsl(var(--background))] border border-[hsl(var(--border))] text-[hsl(var(--foreground))] px-4 py-3 focus:outline-none focus:border-[hsl(var(--primary))] transition-colors text-sm resize-none"
                  placeholder="Tell us what brought you here..."
                  data-testid="textarea-motivation"
                />
                {errors.motivation && (
                  <p className="text-[hsl(var(--destructive))] text-xs mt-1">
                    {errors.motivation.message}
                  </p>
                )}
              </div>

              <div>
                <label className="font-display text-xs tracking-widest text-[hsl(var(--muted-foreground))] block mb-2">
                  RELEVANT EXPERIENCE (OPTIONAL)
                </label>
                <textarea
                  {...register("experience")}
                  rows={3}
                  className="w-full bg-[hsl(var(--background))] border border-[hsl(var(--border))] text-[hsl(var(--foreground))] px-4 py-3 focus:outline-none focus:border-[hsl(var(--primary))] transition-colors text-sm resize-none"
                  placeholder="Any sports, coaching, NGO, or community experience..."
                  data-testid="textarea-experience"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] font-display tracking-widest text-sm py-4 hover:brightness-110 transition-all duration-200 disabled:opacity-60"
                data-testid="button-submit-volunteer"
              >
                {isSubmitting ? "SUBMITTING..." : "SUBMIT APPLICATION →"}
              </motion.button>
            </form>
          )}
        </div>
      </section>

      <section aria-label="Community programs" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-12">
            <span className="font-display text-sm tracking-widest text-[hsl(var(--primary))]">
              COMMUNITY PROGRAMS
            </span>
            <h2 className="font-display text-4xl lg:text-5xl tracking-tight text-[hsl(var(--foreground))] mt-2">
              BEYOND THE FIELD
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "School Outreach Drives",
                desc: "Regular visits to government schools across Thane to identify talent, raise awareness, and build trust with families.",
              },
              {
                title: "Local Tournament Organization",
                desc: "Annual inter-school and community tournaments that give students competitive exposure before national pathways.",
              },
              {
                title: "Awareness Campaigns",
                desc: "Building a community culture around structured sport — working with local leaders, educators, and parents to shift perceptions.",
              },
            ].map((prog, i) => (
              <motion.div
                key={prog.title}
                initial={prefersReduced ? {} : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] p-8"
              >
                <h3 className="font-display text-xl tracking-wider text-[hsl(var(--foreground))] mb-3">
                  {prog.title.toUpperCase()}
                </h3>
                <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">
                  {prog.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
