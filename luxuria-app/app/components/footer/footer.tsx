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
    <footer className="w-full bg-[#001f30] border-t border-[#fff0a9]/20 pt-16 pb-8 mt-16">
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
                  123 Luxury Way, Beverly Hills, CA
                </span>
              </div>
              <div className="flex items-center space-x-3 text-[#fff0a9]/70">
                <HiOutlinePhone className="text-[#fff0a9] text-lg" />
                <span className="text-sm">+1 (555) Lux-Home</span>
              </div>
              <div className="flex items-center space-x-3 text-[#fff0a9]/70">
                <HiOutlineMail className="text-[#fff0a9] text-lg" />
                <span className="text-sm">concierge@luxuria.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#fff0a9]/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-[#fff0a9]/40 text-[10px] uppercase tracking-[0.2em]">
            © {currentYear} Luxuria Homes. All Rights Reserved.
          </p>
          <p className="text-[#fff0a9]/40 text-[10px] uppercase tracking-[0.2em]">
            Design by{" "}
            <span className="text-[#fff0a9]/70 font-bold">PremiumUI</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
