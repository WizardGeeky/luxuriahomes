import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from "react-icons/hi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#001f30]  border-[#fff0a9]/20 pt-16 pb-8">
      <div className="w-11/12 lg:w-10/12 mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Section 1: Brand Identity */}
          <div className="flex flex-col space-y-6">
            <Link href="/" className="flex flex-col items-start group">
              <h1 className="text-[#fff0a9] font-black text-4xl tracking-tighter leading-none logo-text">
                Luxuria
              </h1>
              <span className="text-[#fff0a9] font-medium text-[10px] tracking-[0.4em] uppercase leading-none mt-1 opacity-80">
                homes
              </span>
            </Link>
            <p className="text-[#fff0a9]/70 text-sm leading-relaxed max-w-xs">
              Crafting extraordinary living spaces for those who appreciate the
              finer things in life. Elegance, redefined.
            </p>
            <div className="flex space-x-5">
              {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="text-[#fff0a9]/60 hover:text-[#fff0a9] transition-colors text-lg"
                  >
                    <Icon />
                  </a>
                ),
              )}
            </div>
          </div>

          {/* Section 2: Quick Links */}
          <div>
            <h4 className="text-[#fff0a9] font-bold uppercase tracking-widest text-xs mb-8">
              Navigation
            </h4>
            <ul className="space-y-4">
              {["Home", "Portfolio", "Services", "Our Process", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href={`#${item.toLowerCase()}`}
                      className="text-[#fff0a9]/70 hover:text-[#fff0a9] text-sm transition-all hover:pl-2"
                    >
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Section 3: Legal/Support */}
          <div>
            <h4 className="text-[#fff0a9] font-bold uppercase tracking-widest text-xs mb-8">
              Support
            </h4>
            <ul className="space-y-4">
              {[
                "Privacy Policy",
                "Terms of Service",
                "Cookie Policy",
                "FAQs",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-[#fff0a9]/70 hover:text-[#fff0a9] text-sm transition-all"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 4: Contact Info */}
          <div className="flex flex-col space-y-6">
            <h4 className="text-[#fff0a9] font-bold uppercase tracking-widest text-xs mb-2">
              Connect
            </h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-[#fff0a9]/70">
                <HiOutlineLocationMarker className="text-[#fff0a9] text-lg" />
                <span className="text-sm">
                  Unit 7, 21 Technology Drive Agustine Heights, QLD, 4300
                </span>
              </div>
              <div className="flex items-center space-x-3 text-[#fff0a9]/70">
                <HiOutlinePhone className="text-[#fff0a9] text-lg" />
                <span className="text-sm">
                  +61 433 196 100, +61 482 794 242
                </span>
              </div>
              <div className="flex items-center space-x-3 text-[#fff0a9]/70">
                <HiOutlineMail className="text-[#fff0a9] text-lg" />
                <span className="text-sm">admin@luxuriahomes.au</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-5 border-t border-[#fff0a9]/10 mt-20">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-3">
            {/* Left: License Info with a subtle dot separator */}
            <div className="flex items-center gap-4">
              <p className="text-[#fff0a9]/40 text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-medium">
                QBCC License:{" "}
                <span className="text-[#fff0a9]/60">15405403</span>
              </p>
            </div>

            {/* Center: Copyright - Elegant & Minimal */}
            <p className="text-[#fff0a9]/30 text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-light">
              © 2026 Luxuria Homes{" "}
              <span className="mx-2 md:mx-4 opacity-20">|</span> All Rights
              Reserved
            </p>

            {/* Right: Credits with a signature animation */}
            <div className="flex items-center">
              <p className="text-[#fff0a9]/40 text-[10px] md:text-[11px] uppercase tracking-[0.3em]">
                CRAFTED BY{" "}
                <a
                  href="https://eswarb.vercel.app/"
                  className="text-[#fff0a9]/80 font-black cursor-pointer ml-1 transition-all"
                >
                  ESWAR
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
