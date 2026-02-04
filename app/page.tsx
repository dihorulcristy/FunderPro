import { CheckCircle2, ChevronRight, XCircle } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const affiliateLink = "https://funderpro.cxclick.com/visit/?bta=35241&brand=funderpro";

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Disclaimer Top Bar */}
      <div className="bg-gray-100 py-2 border-b border-gray-200">
        <div className="container mx-auto px-4 text-xs text-gray-500 text-center uppercase tracking-wide font-medium">
          Advertorial. This is an independent review site.
        </div>
      </div>

      {/* Header */}
      <header className="bg-white border-b border-gray-100 py-5 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-xl font-bold text-gray-900 tracking-tight">
            Prop Trading <span className="text-orange-600">Daily Reviews</span>
          </div>
          <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-600">
            <Link href="#review" className="hover:text-orange-600 transition-colors">Review</Link>
            <Link href="#features" className="hover:text-orange-600 transition-colors">Features</Link>
            <Link href="#verdict" className="hover:text-orange-600 transition-colors">Verdict</Link>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero / Headline */}
        <section className="py-16 md:py-24 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-block bg-red-50 border border-red-100 p-4 rounded-xl mb-8 animate-pulse">
            <p className="text-red-600 font-bold text-lg md:text-xl">
              🔥 Limited Time Offer: 25% OFF All Challenges & Instant Funding!
            </p>
            <p className="text-sm text-red-500 mt-1">Use link below to claim discount</p>
          </div>
          <br />
          <span className="inline-block bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full mb-6">
            2026 UPDATE
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            Is FunderPro the Right Choice for Traders in 2026? <br className="hidden md:block" />
            <span className="text-gray-500">An Honest Review</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            We break down the rules, scaling plans, and payouts to see if this prop firm lives up to the hype.
          </p>
          <div className="flex justify-center">
            <a
              href={affiliateLink}
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-lg text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center gap-2"
            >
              Visit Official FunderPro Website <ChevronRight size={20} />
            </a>
          </div>
        </section>

        {/* Introduction */}
        <section id="review" className="py-12 bg-white max-w-3xl mx-auto px-4">
          <div className="prose prose-lg prose-gray mx-auto">
            <p>
              In the rapidly evolving world of proprietary trading, traders are constantly looking for reliability, fair conditions, and legitimate scaling opportunities. With so many firms popping up, it can be difficult to distinguish the serious contenders from the noise.
            </p>
            <p>
              **FunderPro** has entered the market with a promise of "Real Funding" and a focus on removing the time pressure that often causes traders to fail. Unlike many competitors that impose strict time limits on their challenge phases, FunderPro offers unlimited time to complete the evaluation.
            </p>
            <p>
              But is that enough to make them the best choice for you? This review takes an objective look at their offering, from their trading infrastructure to their payout policies.
            </p>
          </div>
        </section>

        {/* Key Features */}
        <section id="features" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Key Features Breakdown</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600 font-bold text-xl">1</div>
                <h3 className="font-bold text-xl mb-3">Unlimited Time</h3>
                <p className="text-gray-600">No deadlines to hit profit targets. Traders can take as long as they need to pass the evaluation phases.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-600 font-bold text-xl">2</div>
                <h3 className="font-bold text-xl mb-3">Real Capital Scaling</h3>
                <p className="text-gray-600">A clear plan to scale capital up to $5M for successful traders who consistently generate profits.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 text-purple-600 font-bold text-xl">3</div>
                <h3 className="font-bold text-xl mb-3">Weekly Payouts</h3>
                <p className="text-gray-600">Traders can request payouts on a weekly basis, improving cash flow compared to monthly competitors.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pros & Cons */}
        <section id="verdict" className="py-16 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">The Verdict: Pros & Cons</h2>
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-xl font-bold mb-6 text-green-700 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6" /> What We Like
                </h3>
                <ul className="space-y-4">
                  {[
                    "Unlimited trading period (No time pressure)",
                    "Weekly payouts for funded traders",
                    "Direct processing with top-tier liquidity providers",
                    "Scaling plan up to $5,000,000",
                    "Simple rules with no hidden consistency traps"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-6 text-red-700 flex items-center gap-2">
                  <XCircle className="w-6 h-6" /> Points to Consider
                </h3>
                <ul className="space-y-4">
                  {[
                    "Evaluation fee is required upfront (refundable upon first payout)",
                    "Standard drawdown limits apply (must manage risk)",
                    "News trading restrictions during high-impact events"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-400 mt-0.5 shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gray-900 text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Trading Journey?</h2>
            <p className="text-gray-400 mb-10 max-w-xl mx-auto">
              If you value time flexibility and weekly payouts, FunderPro is a strong contender in 2026.
            </p>
            <a
              href={affiliateLink}
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-10 rounded-lg text-lg shadow-lg hover:shadow-orange-500/20 transition-all inline-flex items-center gap-2"
            >
              Visit Official FunderPro Website <ChevronRight />
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-12 text-sm text-gray-500">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="font-bold text-gray-900 text-lg mb-4">Prop Trading Daily Reviews</div>
              <p className="max-w-xs">Independent reviews and news for the proprietary trading industry. Helping traders make informed decisions.</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-900">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-gray-900">Terms of Service</a></li>
                <li><a href="#" className="hover:text-gray-900">Disclaimer</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Contact</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-900">Contact Us</a></li>
                <li><a href="#" className="hover:text-gray-900">Editorial Team</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-200 text-center md:text-left flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2026 Prop Trading Daily Reviews. All rights reserved.</p>
            <p className="mt-4 md:mt-0 italic">This site contains affiliate links.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
