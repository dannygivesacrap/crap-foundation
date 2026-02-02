import Image from "next/image";
import Link from "next/link";
import Sparkle from "@/components/Sparkle";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-black">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/impact/hero-water-girl.jpg"
            alt="Girl drinking clean water"
            fill
            className="object-cover opacity-50 object-right md:object-center"
            priority
          />
        </div>

        <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 py-20">
          <div className="max-w-5xl">
            <h1 className="display-text text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-8">
              The toilet has saved more lives than any other invention.
            </h1>

            <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl leading-snug">
              Yet billions of people still lack access to clean water and safe sanitation. We're working to change that—within our lifetime.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/donate"
                className="bg-brand-green text-white font-bold px-8 py-4 rounded-full text-lg hover:bg-white hover:text-brand-green transition-all hover-lift"
              >
                Donate Now
              </Link>
              <Link
                href="/transparency"
                className="bg-transparent text-white font-bold px-8 py-4 rounded-full text-lg border-2 border-white hover:bg-white hover:text-black transition-all"
              >
                See Every Dollar
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-sm animate-bounce">
          ↓
        </div>
      </section>

      {/* Stats Marquee - Positive stats */}
      <section className="bg-brand-green py-5 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 mx-6">
              <span className="text-white font-bold text-lg">$10M+ DONATED</span>
              <Sparkle className="w-5 h-5 text-brand-blue" />
              <span className="text-white font-bold text-lg">900,000+ PEOPLE REACHED</span>
              <Sparkle className="w-5 h-5 text-brand-pink" />
              <span className="text-white font-bold text-lg">6 PARTNER ORGANISATIONS</span>
              <Sparkle className="w-5 h-5 text-brand-orange" />
              <span className="text-white font-bold text-lg">100% TO IMPACT</span>
              <Sparkle className="w-5 h-5 text-white" />
            </div>
          ))}
        </div>
      </section>

      {/* The Problem - Bold Stats */}
      <section className="bg-black text-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-brand-pink font-bold text-sm uppercase tracking-wide">The challenge</span>
              <h2 className="display-text text-4xl md:text-5xl lg:text-6xl mt-4 mb-6">
                Progress is happening.{" "}
                <span className="text-brand-blue">But not fast enough.</span>
              </h2>
              <p className="text-xl text-white/70 leading-relaxed mb-6">
                At the current rate, universal access to water and sanitation won't be achieved until the 22nd century. We believe we can do better.
              </p>
              <p className="text-xl text-white/70 leading-relaxed">
                Every person deserves access to clean water and a safe toilet. It's a matter of dignity, health, and opportunity.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-brand-blue p-8 rounded-3xl rotate-neg-1 hover-lift">
                <div className="big-number text-6xl md:text-7xl text-white">2B</div>
                <div className="text-white/80 mt-2 font-medium">people without safe water</div>
              </div>
              <div className="bg-brand-pink p-8 rounded-3xl rotate-2 hover-lift">
                <div className="big-number text-6xl md:text-7xl text-white">3.6B</div>
                <div className="text-white/80 mt-2 font-medium">people without safe sanitation</div>
              </div>
              <div className="bg-brand-orange p-8 rounded-3xl rotate-2 hover-lift">
                <div className="big-number text-6xl md:text-7xl text-white">1.4M</div>
                <div className="text-white/80 mt-2 font-medium">lives lost each year</div>
              </div>
              <div className="bg-brand-green p-8 rounded-3xl rotate-neg-1 hover-lift">
                <div className="big-number text-6xl md:text-7xl text-white">80%</div>
                <div className="text-white/80 mt-2 font-medium">of wastewater untreated</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="bg-brand-cream py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden rotate-neg-2 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="/images/impact/handwashing-students.jpg"
                  alt="Students washing hands"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-brand-pink text-white font-bold px-6 py-3 rounded-full rotate-2 text-lg">
                $10M+ donated
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-brand-green font-bold text-sm uppercase tracking-wide">Who we are</span>
              <h2 className="display-text text-4xl md:text-5xl lg:text-6xl text-black mt-4 mb-6">
                Created by people who give a crap.
              </h2>
              <div className="space-y-4 text-lg text-black/70 leading-relaxed">
                <p>
                  No really, we were created by the toilet paper company <strong className="text-black">Who Gives A Crap</strong>. Since 2012, they've been making eco-friendly toilet paper and donating 50% of their profits to help solve the global sanitation crisis.
                </p>
                <p>
                  In 2021, they founded The Crap Foundation as an independent charity to ensure their donations reach the highest-impact organisations around the world.
                </p>
                <p>
                  We're a registered charity in Australia, laser-focused on one goal: <strong className="text-black">clean water and safe toilets for everyone.</strong>
                </p>
              </div>
              <a
                href="https://whogivesacrap.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-brand-green font-bold mt-6 hover:underline"
              >
                Visit Who Gives A Crap →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What We Fund - With Photos */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-brand-blue font-bold text-sm uppercase tracking-wide">What we fund</span>
            <h2 className="display-text text-4xl md:text-5xl lg:text-6xl text-black mt-4">
              Two focus areas
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Climate Resilient WASH */}
            <div className="group relative rounded-3xl overflow-hidden hover-lift">
              <div className="absolute inset-0">
                <Image
                  src="/images/impact/flooding-sanitation.jpg"
                  alt="Climate resilient WASH"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
              </div>
              <div className="relative p-10 min-h-[500px] flex flex-col justify-end">
                <span className="text-brand-blue text-sm font-bold uppercase tracking-wide">Focus Area 01</span>
                <h3 className="display-text text-3xl md:text-4xl text-white mt-2 mb-4">
                  Climate Resilient WASH
                </h3>
                <p className="text-white/80 text-lg leading-relaxed mb-6">
                  Climate change threatens water supplies through droughts, floods, and contamination. We fund solutions that can withstand these challenges.
                </p>
                <ul className="space-y-2">
                  {["Nature-based solutions", "Water efficiency", "Waste management & recovery"].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-white/90">
                      <Sparkle className="w-4 h-4 text-brand-blue flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Reducing Inequities */}
            <div className="group relative rounded-3xl overflow-hidden hover-lift">
              <div className="absolute inset-0">
                <Image
                  src="/images/impact/latrine-woman.jpg"
                  alt="Reducing WASH inequities"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
              </div>
              <div className="relative p-10 min-h-[500px] flex flex-col justify-end">
                <span className="text-brand-orange text-sm font-bold uppercase tracking-wide">Focus Area 02</span>
                <h3 className="display-text text-3xl md:text-4xl text-white mt-2 mb-4">
                  Reducing WASH Inequities
                </h3>
                <p className="text-white/80 text-lg leading-relaxed mb-6">
                  Progress has been unequal. The most vulnerable communities are being left behind. We fund work that reaches those who need it most.
                </p>
                <ul className="space-y-2">
                  {["Communities in extreme poverty", "People living with disabilities", "Schools & health clinics"].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-white/90">
                      <Sparkle className="w-4 h-4 text-brand-orange flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-brand-green py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-brand-blue font-bold text-sm uppercase tracking-wide">How we work</span>
            <h2 className="display-text text-4xl md:text-5xl lg:text-6xl text-white mt-4">
              We do things differently
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Unrestricted funding",
                description: "We trust our partners. They know what they need better than we do, so we don't tie our funding to specific projects.",
                rotation: "rotate-neg-1",
              },
              {
                title: "Long-term commitment",
                description: "Real change takes time. We commit to multi-year partnerships that allow organisations to plan and grow.",
                rotation: "rotate-2",
              },
              {
                title: "Back local leaders",
                description: "We actively seek out exceptional local organisations that are often overlooked by traditional funders.",
                rotation: "rotate-neg-1",
              },
            ].map((item) => (
              <div
                key={item.title}
                className={`bg-white rounded-3xl p-8 ${item.rotation} hover:rotate-0 transition-transform hover-lift`}
              >
                <h3 className="display-text text-2xl text-brand-green mb-3">
                  {item.title}
                </h3>
                <p className="text-black/70 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Radical Transparency */}
      <section className="bg-black py-20">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <h2 className="display-text text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            We publish{" "}
            <span className="text-brand-pink">every dollar</span>{" "}
            we receive and give away.
          </h2>
          <p className="text-xl text-white/60 mb-8">
            Full transparency. No hidden fees. Complete accountability.
          </p>
          <Link
            href="/transparency"
            className="inline-block bg-brand-pink text-white font-bold px-10 py-4 rounded-full text-lg hover:bg-white hover:text-brand-pink transition-all hover-lift"
          >
            See the numbers →
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-pink py-32 md:py-40">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <Sparkle className="w-16 h-16 text-white mx-auto mb-8 animate-sparkle" />
          <h2 className="display-text text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Join us in making clean water and sanitation a reality for everyone.
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Every contribution brings us closer to a world where no one has to worry about where their next drink of water will come from.
          </p>
          <Link
            href="/donate"
            className="inline-block bg-white text-brand-pink font-bold px-12 py-5 rounded-full text-xl hover:bg-black hover:text-white transition-all hover-lift"
          >
            Donate Now
          </Link>
        </div>
      </section>
    </>
  );
}
