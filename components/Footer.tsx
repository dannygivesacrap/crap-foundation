import Link from "next/link";
import Image from "next/image";
import Sparkle from "./Sparkle";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo & tagline */}
          <div className="md:col-span-2">
            <Image
              src="/images/logo-white.png"
              alt="Crap Foundation"
              width={180}
              height={60}
              className="h-12 w-auto mb-6"
            />
            <p className="text-white/60 text-lg leading-relaxed max-w-sm">
              Everyone deserves a safe place to poop. We're working to make that happen.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wide text-white/40 mb-4">
              Explore
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/partners", label: "Partners" },
                { href: "/transparency", label: "Transparency" },
                { href: "/donate", label: "Donate" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wide text-white/40 mb-4">
              Say hi
            </h3>
            <ul className="space-y-3 text-white/60">
              <li>
                <a
                  href="mailto:hello@crapfoundation.org"
                  className="hover:text-white transition-colors"
                >
                  hello@crapfoundation.org
                </a>
              </li>
              <li className="text-sm leading-relaxed">
                Suite 816, 585 Little Collins St<br />
                Melbourne VIC 3000<br />
                Australia
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} The Crap Foundation
            </p>
            <Link
              href="/game"
              className="text-white/20 hover:text-brand-pink text-sm transition-colors"
              title="A very important mission"
            >
              🚽
            </Link>
          </div>
          <div className="flex items-center gap-2 text-white/40 text-sm">
            <span>Proudly backed by</span>
            <a
              href="https://whogivesacrap.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-brand-pink transition-colors font-bold"
            >
              Who Gives A Crap
            </a>
            <Sparkle className="w-4 h-4 text-brand-blue" />
          </div>
        </div>
      </div>
    </footer>
  );
}
