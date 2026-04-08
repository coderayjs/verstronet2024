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
      className="scroll-mt-24 border-t border-zinc-200/80 bg-zinc-100/80 backdrop-blur-sm dark:border-white/10 dark:bg-black/50">
      <div className="container mx-auto px-6 py-14 md:py-20">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <p className="mb-4 text-[11px] uppercase tracking-[0.28em] text-zinc-500">
              Company
            </p>
            <Link
              to="/"
              className="mb-5 inline-flex items-center gap-3 transition-opacity hover:opacity-90">
              <img
                src="/images/logo.png"
                alt=""
                className="h-10 w-auto object-contain dark:brightness-0 dark:invert"
              />
              <span className="text-lg font-semibold uppercase tracking-[0.28em] text-zinc-900 dark:text-white">
                Verstronet
              </span>
            </Link>
            <p className="max-w-md text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Training, systems design, and mission-ready products for teams who
              operate where reliability and clarity matter most.
            </p>
          </div>

          <div className="md:col-span-4">
            <p className="mb-4 text-[11px] uppercase tracking-[0.28em] text-zinc-500">
              Contact
            </p>
            <p className="mb-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              For partnerships, press, and general inquiries:
            </p>
            <a
              href="mailto:hello@verstronet.com"
              className="text-sm text-zinc-800 underline-offset-4 transition-colors hover:text-zinc-950 hover:underline dark:text-zinc-200 dark:hover:text-white">
              hello@verstronet.com
            </a>
          </div>

          <div className="md:col-span-3">
            <p className="mb-4 text-[11px] uppercase tracking-[0.28em] text-zinc-500">
              Follow
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={SOCIAL.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm border border-zinc-300/80 bg-white/60 px-4 py-2.5 text-xs uppercase tracking-[0.12em] text-zinc-800 transition-colors hover:border-zinc-400 hover:bg-white dark:border-white/15 dark:bg-white/[0.04] dark:text-zinc-200 dark:hover:border-white/30 dark:hover:bg-white/[0.08]">
                <FontAwesomeIcon icon={faInstagram} className="h-4 w-4" />
                Instagram
              </a>
              <a
                href={SOCIAL.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm border border-zinc-300/80 bg-white/60 px-4 py-2.5 text-xs uppercase tracking-[0.12em] text-zinc-800 transition-colors hover:border-zinc-400 hover:bg-white dark:border-white/15 dark:bg-white/[0.04] dark:text-zinc-200 dark:hover:border-white/30 dark:hover:bg-white/[0.08]">
                <FontAwesomeIcon icon={faFacebook} className="h-4 w-4" />
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-zinc-200/80 pt-8 dark:border-white/10 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-zinc-500 dark:text-zinc-600">
            © {year} Verstronet. All rights reserved.
          </p>
          <Link
            to="/"
            className="w-fit text-xs text-zinc-500 transition-colors hover:text-zinc-800 dark:hover:text-zinc-300">
            Back to top
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
