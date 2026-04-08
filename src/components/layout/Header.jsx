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

const navLink =
  "text-xs tracking-[0.14em] uppercase text-zinc-300 hover:text-white transition duration-300";

const menuItem = (focus) =>
  `block w-full px-4 py-2.5 text-left text-xs tracking-[0.12em] uppercase ${
    focus ? "bg-white/10 text-white" : "text-zinc-300"
  }`;

const ProductsMenu = () => (
  <Menu as="div" className="relative inline-block text-left">
    <MenuButton
      className={`${navLink} inline-flex items-center gap-1 rounded-sm focus:outline-none focus-visible:ring-1 focus-visible:ring-white/40`}>
      Products
      <ChevronDown className="h-3.5 w-3.5 opacity-70" aria-hidden />
    </MenuButton>
    <MenuItems
      transition
      anchor="bottom start"
      className="z-[100] mt-2 w-56 origin-top-left rounded-sm border border-white/15 bg-zinc-950/95 py-1 shadow-2xl backdrop-blur-md outline-none [--anchor-gap:8px] data-[closed]:opacity-0 data-[closed]:scale-95 data-[closed]:transition data-[closed]:duration-100 data-[closed]:ease-out">
      <MenuItem>
        {({ focus }) => (
          <Link to="/#products" className={menuItem(focus)}>
            All products
          </Link>
        )}
      </MenuItem>
      <MenuSeparator className="my-1 h-px bg-white/10" />
      <MenuItem>
        {({ focus }) => (
          <Link to="/#flicknet" className={menuItem(focus)}>
            Flicknet
          </Link>
        )}
      </MenuItem>
      <MenuItem>
        {({ focus }) => (
          <Link to="/sale" className={menuItem(focus)}>
            Flicknet presale
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
    <header className="container mx-auto px-6 py-6 flex flex-wrap items-center justify-between gap-4">
      <Link to="/" className="flex items-center gap-3 shrink-0">
        <img
          src="/images/logo.png"
          alt=""
          className="h-9 w-auto object-contain brightness-0 invert"
        />
        <span className="text-sm font-semibold tracking-[0.28em] uppercase text-white">
          Verstronet
        </span>
      </Link>

      <div className="flex flex-1 items-center justify-end gap-4 min-w-0">
        <div className="flex md:hidden items-center gap-4 flex-wrap">
          <Link to="/" className={navLink}>
            Home
          </Link>
          <ProductsMenu />
          <Link to="/#team" className={navLink}>
            Team
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8 flex-wrap justify-end">
          <Link to="/" className={navLink}>
            Home
          </Link>
          <ProductsMenu />
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

        <CustomButton onClick={onLoginClick} variant="secondary">
          Log in
        </CustomButton>
      </div>
    </header>
  );
};

export default Header;
