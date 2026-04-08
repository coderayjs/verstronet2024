import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const SOCIAL = {
  instagram: "https://www.instagram.com/verstronet.inc/",
  facebook: "https://www.facebook.com/verstronet.inc",
};

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      id="company"
      className="scroll-mt-24 border-t border-white/10 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-14 md:py-20">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <p className="text-[11px] tracking-[0.28em] uppercase text-zinc-500 mb-4">
              Company
            </p>
            <p className="text-lg font-semibold tracking-tight text-white mb-3">
              Verstronet
            </p>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-md">
              Training, systems design, and mission-ready products for teams who
              operate where reliability and clarity matter most.
            </p>
          </div>

          <div className="md:col-span-4">
            <p className="text-[11px] tracking-[0.28em] uppercase text-zinc-500 mb-4">
              Contact
            </p>
            <p className="text-sm text-zinc-400 mb-3 leading-relaxed">
              For partnerships, press, and general inquiries:
            </p>
            <a
              href="mailto:hello@verstronet.com"
              className="text-sm text-zinc-200 hover:text-white underline-offset-4 hover:underline transition-colors">
              hello@verstronet.com
            </a>
          </div>

          <div className="md:col-span-3">
            <p className="text-[11px] tracking-[0.28em] uppercase text-zinc-500 mb-4">
              Follow
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={SOCIAL.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm border border-white/15 bg-white/[0.04] px-4 py-2.5 text-xs tracking-[0.12em] uppercase text-zinc-200 hover:border-white/30 hover:bg-white/[0.08] transition-colors">
                <FontAwesomeIcon icon={faInstagram} className="h-4 w-4" />
                Instagram
              </a>
              <a
                href={SOCIAL.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm border border-white/15 bg-white/[0.04] px-4 py-2.5 text-xs tracking-[0.12em] uppercase text-zinc-200 hover:border-white/30 hover:bg-white/[0.08] transition-colors">
                <FontAwesomeIcon icon={faFacebook} className="h-4 w-4" />
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-zinc-600">
            © {year} Verstronet. All rights reserved.
          </p>
          <Link
            to="/"
            className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors w-fit">
            Back to top
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
