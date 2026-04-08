import React from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  MenuSeparator,
} from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import CustomButton from "./CustomButton";
import ThemeToggle from "./ThemeToggle";

const navLink =
  "text-xs tracking-[0.14em] uppercase text-zinc-600 hover:text-zinc-900 transition duration-300 dark:text-zinc-300 dark:hover:text-white";

const menuItem = (focus) =>
  `block w-full px-4 py-2.5 text-left text-xs tracking-[0.12em] uppercase ${
    focus
      ? "bg-zinc-100 text-zinc-900 dark:bg-white/10 dark:text-white"
      : "text-zinc-700 dark:text-zinc-300"
  }`;

const ProductsMenu = () => (
  <Menu as="div" className="relative inline-block text-left">
    <MenuButton
      className={`${navLink} inline-flex items-center gap-1 rounded-sm focus:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 dark:focus-visible:ring-white/40`}>
      Products
      <ChevronDown className="h-3.5 w-3.5 opacity-70" aria-hidden />
    </MenuButton>
    <MenuItems
      transition
      anchor="bottom start"
      className="z-[100] mt-2 w-56 origin-top-left rounded-sm border border-zinc-200 bg-white/95 py-1 shadow-2xl backdrop-blur-md outline-none [--anchor-gap:8px] data-[closed]:opacity-0 data-[closed]:scale-95 data-[closed]:transition data-[closed]:duration-100 data-[closed]:ease-out dark:border-white/15 dark:bg-zinc-950/95">
      <MenuItem>
        {({ focus }) => (
          <Link to="/#products" className={menuItem(focus)}>
            All products
          </Link>
        )}
      </MenuItem>
      <MenuItem>
        {({ focus }) => (
          <Link to="/sale" className={menuItem(focus)}>
            Shop
          </Link>
        )}
      </MenuItem>
      <MenuSeparator className="my-1 h-px bg-zinc-200 dark:bg-white/10" />
      <MenuItem>
        {({ focus }) => (
          <Link to="/#flicknet" className={menuItem(focus)}>
            Flicknet
          </Link>
        )}
      </MenuItem>
      <MenuItem>
        {({ focus }) => (
          <Link to="/#niletron" className={menuItem(focus)}>
            Niletron 1.0
          </Link>
        )}
      </MenuItem>
    </MenuItems>
  </Menu>
);

const Header = ({ onLoginClick }) => {
  return (
    <header className="container mx-auto flex flex-wrap items-center justify-between gap-4 px-6 py-6">
      <Link to="/" className="flex shrink-0 items-center gap-3">
        <img
          src="/images/logo.png"
          alt=""
          className="h-9 w-auto object-contain dark:brightness-0 dark:invert"
        />
        <span className="text-sm font-semibold uppercase tracking-[0.28em] text-zinc-900 dark:text-white">
          Verstronet
        </span>
      </Link>

      <div className="flex min-w-0 flex-1 items-center justify-end gap-3 md:gap-4">
        <div className="flex flex-wrap items-center gap-4 md:hidden">
          <Link to="/" className={navLink}>
            Home
          </Link>
          <ProductsMenu />
          <Link to="/sale" className={navLink}>
            Shop
          </Link>
          <Link to="/#team" className={navLink}>
            Team
          </Link>
        </div>

        <nav className="hidden flex-wrap items-center justify-end gap-8 md:flex">
          <Link to="/" className={navLink}>
            Home
          </Link>
          <ProductsMenu />
          <Link to="/sale" className={navLink}>
            Shop
          </Link>
          <Link to="/#innovations" className={navLink}>
            Innovations
          </Link>
          <Link to="/#mission-systems" className={navLink}>
            Mission
          </Link>
          <Link to="/#team" className={navLink}>
            Team
          </Link>
          <Link to="/#company" className={navLink}>
            Company
          </Link>
        </nav>

        <ThemeToggle />
        <CustomButton onClick={onLoginClick} variant="secondary">
          Log in
        </CustomButton>
      </div>
    </header>
  );
};

export default Header;
