import Header from "@/components/Header";
import Footer from "@/components/Footer";


import {
  Award,
  BadgeCheck,
  Users,
  HeartPulse,
  Brain,
  Sparkles,
} from "lucide-react";

const StatPill = ({ icon: Icon, children }: any) => (
  <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
    <Icon className="h-4 w-4" />
    {children}
  </div>
);

const ProofChip = ({ icon: Icon, children }: any) => (
  <div className="flex items-center gap-2 text-sm text-foreground/80">
    <Icon className="h-4 w-4 text-primary" />
    <span className="font-medium">{children}</span>
  </div>
);

const CredCard = ({ icon: Icon, title }: any) => (
  <div className="flex items-center gap-3 rounded-xl bg-[#0F2925] px-5 py-4 text-white shadow-sm">
    <div className="grid h-10 w-10 place-items-center rounded-lg bg-white/10">
      <Icon className="h-5 w-5 text-[#FDE68A]" />
    </div>
    <p className="text-sm font-semibold leading-snug">{title}</p>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* COACH PORTFOLIO SECTION */}
        <section className="bg-[#F6F1E7]">
          <div className="container mx-auto px-6 py-14 md:py-20">
            {/* Top Heading */}
            <div className="mb-10 md:mb-14 text-center">
              <p className="text-xs tracking-[0.35em] uppercase text-foreground/60">
                Meet your Coach
              </p>
              <h1 className="mt-3 font-display text-3xl md:text-5xl font-bold text-foreground">
                Dr. Valarrmathi Srinivasan
              </h1>
              <div className="mt-5 flex flex-wrap justify-center gap-3">
                <StatPill icon={Sparkles}>India’s Peak Energy Transformation Coach</StatPill>
                <StatPill icon={BadgeCheck}>Founder — Chaitanya Jyoti Kriya</StatPill>
              </div>
            </div>

            {/* Main Grid */}
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
              {/* Left: Image */}
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-lg border border-black/10 bg-white">
                  <img
                    src="/coach.png"
                    alt="Dr. Valarrmathi Srinivasan"
                    className="w-full h-[420px] md:h-[520px] object-cover"
                    loading="eager"
                  />
                </div>

                {/* Small proof row under image */}
                <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
                  <ProofChip icon={Award}>Unicorn Coach Award</ProofChip>
                  <ProofChip icon={BadgeCheck}>Certified Breath Coach</ProofChip>
                </div>
              </div>

              {/* Right: Bio + Credibility */}
              <div className="space-y-6">
                <p className="text-base md:text-lg leading-relaxed text-foreground/75">
                  For 15+ years, Dr. Valarrmathi has helped thousands transform their health, reset
                  their energy, and reclaim their best selves — using a blend of science-backed
                  breathwork and ancient wisdom.
                </p>

                {/* Credibility cards (like screenshot) */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <CredCard icon={HeartPulse} title="Certified in Nervous System Regulation" />
                  <CredCard icon={Brain} title="Expert in Gut–Brain Healing" />
                  <CredCard icon={Sparkles} title="Specialist in Energy Medicine & Kriya Yoga" />
                  <CredCard icon={Users} title="Helped 10,000+ People Transform" />
                </div>

                {/* CTA (optional) */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="#book"
                    className="inline-flex items-center justify-center rounded-xl bg-[#0F2925] px-6 py-3 text-white font-semibold shadow-sm hover:opacity-95 transition"
                  >
                    Book a Session
                  </a>
                  <a
                    href="#proof"
                    className="inline-flex items-center justify-center rounded-xl border border-black/15 bg-white px-6 py-3 text-foreground font-semibold hover:bg-black/5 transition"
                  >
                    View Credentials
                  </a>
                </div>
              </div>
            </div>

            {/* CERTIFICATE / PROOF SECTION */}
            <div id="proof" className="mt-14 md:mt-16">
              <div className="rounded-3xl bg-white border border-black/10 shadow-sm p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div>
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                      Credentials & Certifications
                    </h2>
                    <p className="mt-2 text-foreground/70 leading-relaxed max-w-2xl">
                      Transparent proof builds trust. Here are her key certifications and training
                      milestones that back the work you’ll experience.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <div className="rounded-full bg-black/5 px-4 py-2 text-sm font-medium text-foreground/80">
                      Breathwork Certification
                    </div>
                    <div className="rounded-full bg-black/5 px-4 py-2 text-sm font-medium text-foreground/80">
                      Nervous System Regulation
                    </div>
                    <div className="rounded-full bg-black/5 px-4 py-2 text-sm font-medium text-foreground/80">
                      Energy Medicine
                    </div>
                  </div>
                </div>

                {/* Certificate image */}
                <div className="mt-6 rounded-2xl overflow-hidden border border-black/10 bg-[#F6F1E7]">
                  {/* If you don't have certificateImage yet, replace with a placeholder div */}
                  <img
                    src="/Certificate.jpeg"
                    alt="Certification"
                    className="w-full h-[260px] md:h-[340px] object-contain p-4"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
