import Image from "next/image";
import Sparkle from "@/components/Sparkle";

export default function DonatePage() {
  return (
    <>
      {/* Hero with impact photo */}
      <section className="relative min-h-[60vh] flex items-end">
        <div className="absolute inset-0">
          <Image
            src="/images/impact/COL1_165.jpg"
            alt="Community celebrating water access"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-16 pt-32">
          <div className="max-w-3xl">
            <div className="inline-block bg-brand-pink text-white text-sm font-bold px-4 py-2 rounded-full mb-6">
              100% goes to impact
            </div>
            <h1 className="display-text text-5xl md:text-6xl lg:text-7xl text-white mb-6">
              Give a crap.
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Our operational costs are covered by Who Gives A Crap. That means every single dollar you donate goes straight to the people who need it.
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left: Donation widget */}
            <div className="max-w-md mx-auto lg:mx-0 lg:max-w-none">
              <h2 className="display-text text-3xl md:text-4xl text-black mb-8">
                Make a donation
              </h2>

              {/* Donorbox placeholder */}
              <div className="bg-brand-cream rounded-2xl p-10 mb-8">
                <div className="text-center py-16">
                  <Sparkle className="w-16 h-16 text-brand-green mx-auto mb-6" />
                  <p className="text-2xl font-bold text-black mb-4">
                    Donation widget goes here
                  </p>
                  <p className="text-black/60 mb-8">
                    Powered by Donorbox
                  </p>

                  <div className="bg-white rounded-xl p-6 border-2 border-dashed border-black/20 text-left">
                    <p className="text-sm text-black/50 mb-2">To enable:</p>
                    <code className="text-xs bg-black/5 p-3 rounded block overflow-x-auto">
                      {`<iframe src="https://donorbox.org/embed/crap-foundation" />`}
                    </code>
                  </div>
                </div>
              </div>

              {/* Tax info */}
              <div className="bg-white border-2 border-black/10 rounded-xl p-6">
                <h3 className="font-bold text-black mb-2">Tax deductible 🇦🇺</h3>
                <p className="text-black/60 text-sm leading-relaxed">
                  The Crap Foundation is a registered charity in Australia. Donations over $2 are tax deductible for Australian taxpayers.
                </p>
              </div>
            </div>

            {/* Right: Impact + image */}
            <div className="max-w-md mx-auto lg:mx-0 lg:max-w-none">
              <h2 className="display-text text-3xl md:text-4xl text-black mb-8">
                What your money does
              </h2>

              <div className="space-y-4 mb-12">
                {[
                  { amount: "$25", impact: "Clean water for one person for a year", color: "blue" },
                  { amount: "$50", impact: "A handwashing station at a school", color: "green" },
                  { amount: "$100", impact: "A safe toilet for a family", color: "orange" },
                  { amount: "$500", impact: "Hygiene training for a whole community", color: "pink" },
                ].map((item) => (
                  <div
                    key={item.amount}
                    className={`bg-brand-${item.color} rounded-xl p-6 text-white hover-lift`}
                  >
                    <div className="flex items-center gap-6">
                      <div className="big-number text-4xl">{item.amount}</div>
                      <div className="text-lg text-white/90">{item.impact}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden rotate-2 hover:rotate-0 transition-transform">
                <Image
                  src="/images/impact/handwashing-students.jpg"
                  alt="Students with clean water access"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-black py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="display-text text-4xl md:text-5xl text-white">
              Why donate to us?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                emoji: "💯",
                title: "100% to impact",
                description: "Our ops are covered. Your money goes straight to partners doing the work.",
              },
              {
                emoji: "📊",
                title: "Radical transparency",
                description: "We publish every dollar we receive and every dollar we give away. No black boxes.",
              },
              {
                emoji: "🔍",
                title: "We do our homework",
                description: "We vet the hell out of every partner. No fly-by-night operations.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="text-5xl mb-4">{item.emoji}</div>
                <h3 className="display-text text-2xl text-white mb-3">{item.title}</h3>
                <p className="text-white/60 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other ways */}
      <section className="bg-brand-cream py-20">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <h2 className="display-text text-3xl md:text-4xl text-black mb-6">
            Not ready to donate?
          </h2>
          <p className="text-xl text-black/60 mb-8 leading-relaxed">
            You can still help by buying toilet paper from Who Gives A Crap. They donate 50% of their profits to us. Same impact, plus you get TP.
          </p>
          <a
            href="https://whogivesacrap.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-black text-white font-bold px-10 py-4 rounded-full text-lg hover:bg-brand-green transition-all hover-lift"
          >
            Shop Who Gives A Crap →
          </a>
        </div>
      </section>
    </>
  );
}
