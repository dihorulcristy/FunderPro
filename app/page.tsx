import { AlertTriangle, BookOpen, Check, ExternalLink, Info, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const affiliateLink = "https://funderpro.cxclick.com/visit/?bta=35241&brand=funderpro";

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Top Compliance Bar */}
      <div className="bg-slate-900 text-white py-2 text-xs text-center px-4">
        <p className="flex items-center justify-center gap-2 opacity-90">
          <Info className="w-3 h-3" />
          <span>INDEPENDENT REVIEW SITE: This website is a review blog and is NOT the official FunderPro website.</span>
        </p>
      </div>

      {/* Navigation */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 h-16 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-indigo-600 text-white p-1.5 rounded-md font-bold text-lg leading-none">FP</div>
            <div className="flex flex-col">
              <span className="font-bold text-slate-900 leading-tight">FunderProp</span>
              <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Prop Trading Reviews</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4 text-sm font-medium text-slate-600">
            <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-semibold">
              Independent Analysis
            </span>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-10 max-w-4xl">

        {/* Article Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-indigo-600 font-medium text-sm mb-4">
            <BookOpen className="w-4 h-4" />
            <span>Prop Firm Reviews</span>
            <span>&rsaquo;</span>
            <span>FunderPro</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            FunderPro Review (2026): Is It a Legitimate Prop Firm?
          </h1>
          <div className="flex items-center gap-4 text-sm text-slate-500 border-b border-slate-200 pb-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-600">E</div>
              <span>By Editorial Team</span>
            </div>
            <span>&bull;</span>
            <span>Updated: February 2026</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Main Content Column */}
          <div className="md:col-span-2 space-y-8">

            {/* Quick Summary Box */}
            <div className="bg-white p-6 rounded-lg border-l-4 border-indigo-500 shadow-sm">
              <h2 className="font-bold text-xl text-slate-900 mb-2">Executive Summary</h2>
              <p className="text-slate-600 leading-relaxed">
                FunderPro is a newer entrant to the prop trading space offering "Real Capital" accounts. While they offer distinct advantages like unlimited trading time and weekly payouts, traders should be aware of the specific scaling requirements and evaluation rules before signing up.
              </p>
            </div>

            <div className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">The Promise of Real Capital</h2>
              <p className="mb-4">
                Many prop firms typically operate on demo accounts even after a trader is "funded". FunderPro markets itself differently by emphasizing Real Capital scaling. This review examines whether their infrastructure supports professional trading effectively.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-8 mb-3">Key Features Analysis</h3>
              <ul className="space-y-3 list-none pl-0">
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-green-600 shrink-0" />
                  <span><strong>Unlimited Time Limit:</strong> This is a significant advantage for swing traders who need time for setups to play out.</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-green-600 shrink-0" />
                  <span><strong>Weekly Payouts:</strong> Cash flow is faster than the industry standard of bi-weekly or monthly payouts.</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-green-600 shrink-0" />
                  <span><strong>TradeLocker Platform:</strong> A modern alternative to MT4/MT5, though it may have a learning curve for some.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Sidebar / CTA Column */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 sticky top-24">
              <div className="text-center mb-6">
                <span className="text-sm font-bold text-slate-400 uppercase">Review Score</span>
                <div className="text-5xl font-extrabold text-indigo-600 my-2">4.5<span className="text-2xl text-slate-300">/5</span></div>
                <div className="flex justify-center gap-1 text-yellow-400">
                  {'★★★★☆'.split('').map((s, i) => <span key={i}>{s}</span>)}
                </div>
              </div>

              {/* Special Offer Box */}
              <div className="bg-red-50 border border-red-100 rounded-lg p-4 mb-6">
                <p className="text-red-700 font-bold text-sm uppercase tracking-wide mb-1 text-center">Limited Offer</p>
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-red-600">25% OFF</p>
                  <p className="text-xs text-red-500 mb-2">All Challenges & Instant Accounts</p>
                  <div className="bg-white border border-red-200 border-dashed rounded py-1 px-2 text-red-700 font-mono text-sm tracking-wider">
                    NEWME20
                  </div>
                  <p className="text-[10px] text-red-400 mt-1">Use code at checkout</p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Credibility</span>
                  <span className="font-bold text-slate-700">High</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Payout Speed</span>
                  <span className="font-bold text-slate-700">Fast (Weekly)</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Platform</span>
                  <span className="font-bold text-slate-700">TradeLocker</span>
                </div>
              </div>

              <a
                href={affiliateLink}
                className="block w-full bg-slate-900 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg text-center transition-colors shadow-md flex items-center justify-center gap-2 group"
              >
                Visit Website <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <p className="text-xs text-center text-slate-400 mt-3">Link opens official FunderPro site</p>
            </div>
          </div>
        </div>

        {/* Disclaimer Section */}
        <div className="mt-20 pt-10 border-t border-slate-200">
          <div className="flex gap-4 p-4 bg-slate-100 rounded-lg text-sm text-slate-600">
            <AlertTriangle className="w-6 h-6 text-slate-500 shrink-0" />
            <div>
              <p className="font-bold mb-1 text-slate-700">Advertiser Disclosure & Risk Warning</p>
              <p>
                <strong>FunderProp.com</strong> is an independent review hub and is not owned by or part of FunderPro. We may receive compensation if you click links on our site, but this does not influence our objective analysis.
              </p>
              <p className="mt-2">
                Trading in financial markets involves a high degree of risk and exists the possibility of losing your initial deposit.
              </p>
            </div>
          </div>
        </div>

      </main>

      <footer className="bg-slate-900 text-slate-400 py-12 text-sm">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="font-bold text-white text-lg mb-2">FunderProp</div>
            <p>Your source for independent prop firm reviews.</p>
          </div>
          <div className="md:text-right">
            <p className="mb-2">&copy; 2026 FunderProp. All rights reserved.</p>
            <p className="text-xs text-slate-500">Not affiliated with FunderPro Official.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
