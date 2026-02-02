import Image from "next/image";
import Sparkle from "@/components/Sparkle";

const partners = [
  {
    name: "Water For People",
    description:
      "Water For People works alongside communities, local entrepreneurs, and governments to develop water and sanitation solutions that last. Their 'Everyone Forever' model ensures that once a region achieves full coverage, it stays that way through strong local systems and accountability.",
    focusArea: "Climate Resilient",
    location: "9 countries across Africa, Asia & Latin America",
    website: "https://www.waterforpeople.org",
    image: "/images/impact/CMB2_391_WaterAid_ Tom Greenwood.jpg",
  },
  {
    name: "WaterAid",
    description:
      "WaterAid is an international organisation working in 34 countries to transform lives by improving access to clean water, decent toilets and good hygiene. They work with local partners, communities and governments to deliver sustainable solutions at scale.",
    focusArea: "Closing the Gap",
    location: "34 countries worldwide",
    website: "https://www.wateraid.org",
    image: "/images/impact/TIM7_076_WaterAid_ Jerry Galea.jpg",
  },
  {
    name: "Splash",
    description:
      "Splash brings clean water, sanitation, and hygiene to children in urban areas of the developing world. They focus on government schools and health facilities, reaching millions of children with sustainable infrastructure and behaviour change programs.",
    focusArea: "Closing the Gap",
    location: "Ethiopia, India, Bangladesh & more",
    website: "https://splash.org",
    image: "/images/impact/handwashing-students.jpg",
  },
  {
    name: "FINISH Society",
    description:
      "FINISH creates sustainable markets for sanitation in India. Rather than charity, they build business models that work—training local entrepreneurs, creating supply chains, and making toilets affordable and desirable for rural households.",
    focusArea: "Closing the Gap",
    location: "India",
    website: "https://finishsociety.com",
    image: "/images/impact/VFBF27_098_WaterAid_ Basile Ouedraogo.jpg",
  },
  {
    name: "iDE",
    description:
      "iDE uses market-based approaches to provide sanitation access. They train local entrepreneurs to manufacture and sell affordable toilets, creating sustainable businesses while solving the sanitation crisis from the ground up.",
    focusArea: "Climate Resilient",
    location: "Cambodia, Bangladesh, Ethiopia, Ghana",
    website: "https://www.ideglobal.org",
    image: "/images/impact/TIM8_248_WaterAid_ Vlad Sokhin.jpg",
  },
  {
    name: "Sanergy",
    description:
      "Sanergy builds healthy, prosperous communities by making hygienic sanitation accessible and affordable in Africa's informal settlements. They collect waste and convert it into valuable products like organic fertilizer, creating a circular economy.",
    focusArea: "Climate Resilient",
    location: "Kenya",
    website: "https://www.sanergy.com",
    image: "/images/impact/water jugs being handed out- LWALA.jpg",
  },
];

export default function PartnersPage() {
  return (
    <>
      {/* Hero with impactful photo */}
      <section className="relative min-h-[70vh] flex items-end">
        <div className="absolute inset-0">
          <Image
            src="/images/impact/sanitation-workers.jpg"
            alt="Sanitation workers"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-16 pt-32">
          <div className="max-w-3xl">
            <div className="inline-block bg-brand-blue text-white text-sm font-bold px-4 py-2 rounded-full mb-6">
              Our partners
            </div>
            <h1 className="display-text text-5xl md:text-6xl lg:text-7xl text-white mb-6">
              We back exceptional organisations doing hard work in hard places.
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Our partners are on the front lines—building infrastructure, changing behaviours, and creating lasting systems for water and sanitation access.
            </p>
          </div>
        </div>
      </section>

      {/* How we choose */}
      <section className="bg-brand-cream py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { label: "Strategic alignment", desc: "Does their work align with our focus areas?" },
              { label: "Impact potential", desc: "Can they deliver meaningful, lasting change?" },
              { label: "Strong leadership", desc: "Do they have the team to execute?" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="text-brand-green font-bold text-lg">{item.label}</div>
                <p className="text-black/60 text-sm mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Grid - Larger tiles with images */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-8">
            {partners.map((partner, i) => (
              <a
                key={partner.name}
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className={`group bg-brand-cream rounded-3xl overflow-hidden hover-lift ${
                  i % 2 === 0 ? "rotate-neg-1" : "rotate-2"
                } hover:rotate-0 transition-transform`}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span
                      className={`text-xs font-bold px-3 py-1.5 rounded-full ${
                        partner.focusArea === "Climate Resilient"
                          ? "bg-brand-blue text-white"
                          : "bg-brand-orange text-white"
                      }`}
                    >
                      {partner.focusArea}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="display-text text-2xl md:text-3xl text-black group-hover:text-brand-green transition-colors">
                      {partner.name}
                    </h3>
                  </div>
                  <p className="text-black/50 text-sm mb-4">{partner.location}</p>
                  <p className="text-black/70 leading-relaxed mb-6">
                    {partner.description}
                  </p>
                  <span className="text-brand-green font-bold group-hover:underline">
                    Visit website →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Statement (no quotes) */}
      <section className="bg-brand-green py-24">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <Sparkle className="w-12 h-12 text-brand-blue mx-auto mb-8" />
          <p className="display-text text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
            We fund organisations, not projects. Because real change takes time—and trust.
          </p>
        </div>
      </section>

      {/* Want to partner? */}
      <section className="bg-black py-20">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <h2 className="display-text text-4xl md:text-5xl text-white mb-6">
            Think we should talk?
          </h2>
          <p className="text-xl text-white/60 mb-8 leading-relaxed">
            We're always looking for exceptional organisations doing important work. If that sounds like you, we'd love to hear from you.
          </p>
          <a
            href="mailto:hello@crapfoundation.org"
            className="inline-block bg-brand-pink text-white font-bold px-10 py-4 rounded-full text-lg hover:bg-white hover:text-brand-pink transition-all hover-lift"
          >
            Get in touch
          </a>
        </div>
      </section>
    </>
  );
}
