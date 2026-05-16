export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold uppercase tracking-widest">
          Legal Compliance for Creators
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Scan Content for{" "}
          <span className="text-[#58a6ff]">Copyright Risks</span>{" "}
          Before You Publish
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Upload blog posts, social media copy, or marketing materials and get an instant risk report — with safe alternatives — before a violation costs you.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Protecting Content — $12/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Credit-based. Cancel anytime. No lock-in.</p>

        {/* Feature pills */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {["Text & Image Scanning", "Risk Score Reports", "Safe Alternatives", "Marketing & Blog Ready", "Instant Results"].map((f) => (
            <span key={f} className="px-4 py-1.5 rounded-full bg-[#161b22] border border-[#30363d] text-sm text-[#c9d1d9]">{f}</span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8 text-center shadow-xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#58a6ff] mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$12<span className="text-xl font-normal text-[#8b949e]">/mo</span></p>
          <p className="text-sm text-[#8b949e] mb-6">Everything you need to publish safely</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "100 content scans per month",
              "Text + image copyright detection",
              "Detailed risk score per upload",
              "Safe alternative suggestions",
              "Blog, social & marketing support",
              "Priority email support"
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "What types of content can I scan?",
              a: "You can scan blog posts, social media captions, ad copy, and images. Our engine checks text against copyright databases and images via recognition APIs to flag potential violations."
            },
            {
              q: "How does the credit system work?",
              a: "Each scan consumes one credit. Your $12/mo plan includes 100 credits. Credits reset monthly and unused credits do not roll over."
            },
            {
              q: "What happens if a risk is detected?",
              a: "You receive a detailed risk report with a risk score, the flagged sections, and suggested safe alternatives so you can revise before publishing."
            }
          ].map(({ q, a }) => (
            <div key={q} className="rounded-xl border border-[#30363d] bg-[#161b22] p-5">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-sm text-[#8b949e] leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center pb-10 text-xs text-[#484f58]">
        © {new Date().getFullYear()} Content Copyright Shield. All rights reserved.
      </footer>
    </main>
  );
}
