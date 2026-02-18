import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone } from "lucide-react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F1E7]">
      <Header />

      <main className="flex-1 container mx-auto px-6 py-16">
        <div className="max-w-xl mx-auto">
          <h1 className="font-display text-4xl font-bold text-foreground mb-4 text-center">
            Contact Support
          </h1>

          <p className="text-muted-foreground font-body text-center mb-10">
            Need help with your workshop access, booking, or payments?  
            Our support team is here to assist you.
          </p>

          {submitted ? (
            <div className="bg-white border border-black/10 rounded-xl p-10 text-center shadow-sm">
              <h2 className="font-display text-2xl font-semibold text-primary mb-2">
                Message Received
              </h2>
              <p className="text-muted-foreground font-body">
                Our team will get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white border border-black/10 rounded-xl p-8 space-y-5 shadow-sm"
            >
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  maxLength={100}
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  maxLength={255}
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Message
                </label>
                <textarea
                  required
                  maxLength={1000}
                  rows={5}
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="How can we help you?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#0F2925] text-white font-medium py-3 rounded-lg hover:opacity-95 transition"
              >
                Send Message
              </button>
            </form>
          )}

          {/* Direct Support Details */}
          <div className="mt-12 bg-white border border-black/10 rounded-xl p-6 text-center shadow-sm">
            <h3 className="font-display text-lg font-semibold text-foreground mb-4">
              Direct Support
            </h3>

            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center justify-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>support@protonsacademy.com</span>
              </div>

              <div className="flex items-center justify-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>+91 9894705061</span>
              </div>
            </div>

            <p className="mt-4 text-xs text-muted-foreground">
              Response time: Within 24 hours (Mon–Sat)
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
