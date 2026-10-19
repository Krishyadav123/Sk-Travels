
import { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  MotionConfig,
} from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X, ChevronRight } from "lucide-react";

const PHONE_NUMBER = "+919755331189";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  // { label: "Gallery", href: "/gallery" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

function BookNow({ className = "", onClick }) {
  return (
    <a
      href={`tel:${PHONE_NUMBER}`}
      onClick={onClick}
      aria-label="Call SK Tour and Travels to book"
      className={`inline-flex items-center justify-center gap-2 rounded-xl bg-yellow-400 px-4 py-3 text-sm font-bold text-black transition duration-300 hover:bg-yellow-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black ${className}`}
    >
      <Phone size={17} />
      97553 31189
    </a>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const currentPath = location.pathname.replace(/\/+$/, "") || "/";

  // Close menu on route changes and keyboard Escape.
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <MotionConfig reducedMotion="user">
      <motion.header
        initial={{ y: -35, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4"
      >
        <nav
          aria-label="Main navigation"
          className="mx-auto max-w-7xl rounded-2xl border border-white/10 bg-black/95 shadow-2xl shadow-black/30 backdrop-blur-xl"
        >
          <div className="flex items-center justify-between gap-3 px-4 py-3 sm:px-6">
            {/* Logo */}
            <Link
              to="/"
              onClick={handleLinkClick}
              aria-label="SK Tour and Travels home"
              className="shrink-0"
            >
              <img
                src="https://res.cloudinary.com/dhf8eyjee/image/upload/v1792053142/Untitled_design_4_acgbj3.png"
                alt="SK Tour and Travels"
                className="h-10 md:h-14 w-auto rounded-md md:rounded-lg"
              />
            </Link>

            {/* Desktop navigation */}
            <ul className="hidden items-center gap-0.5 xl:flex">
              {NAV_LINKS.map(({ label, href }) => {
                const isActive =
                  href === "/"
                    ? currentPath === "/"
                    : currentPath === href ||
                      currentPath.startsWith(`${href}/`);

                return (
                  <li key={href} className="relative">
                    <Link
                      to={href}
                      onClick={handleLinkClick}
                      aria-current={isActive ? "page" : undefined}
                      className={`block rounded-lg px-2.5 py-2 text-[13px] font-medium transition-colors duration-200 2xl:px-3 2xl:text-base ${
                        isActive
                          ? "text-yellow-400"
                          : "text-gray-300 hover:text-yellow-300"
                      }`}
                    >
                      {label}
                    </Link>

                    {isActive && (
                      <motion.span
                        layoutId="navbar-active-indicator"
                        className="absolute inset-x-2 -bottom-1 h-0.5 rounded-full bg-yellow-400"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </li>
                );
              })}
            </ul>

            {/* Call button and mobile menu toggle */}
            <div className="flex shrink-0 items-center gap-2">
              <div className="hidden xl:block">
                <BookNow />
              </div>

              <button
                type="button"
                onClick={() => setOpen((value) => !value)}
                aria-expanded={open}
                aria-controls="mobile-navigation"
                aria-label={
                  open ? "Close navigation" : "Open navigation"
                }
                className="rounded-xl border border-white/10 p-2.5 text-white transition hover:border-yellow-400/50 hover:text-yellow-400 xl:hidden"
              >
                {open ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>

          {/* Mobile navigation */}
          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                id="mobile-navigation"
                key="mobile-navigation"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                }}
                className="overflow-hidden xl:hidden"
              >
                <ul className="border-t border-white/10 px-3 py-3 sm:px-5">
                  {NAV_LINKS.map(({ label, href }) => {
                    const isActive =
                      href === "/"
                        ? currentPath === "/"
                        : currentPath === href ||
                          currentPath.startsWith(`${href}/`);

                    return (
                      <li key={href}>
                        <Link
                          to={href}
                          onClick={handleLinkClick}
                          aria-current={isActive ? "page" : undefined}
                          className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium transition ${
                            isActive
                              ? "bg-yellow-400/10 text-yellow-400"
                              : "text-gray-300 hover:bg-white/5 hover:text-white"
                          }`}
                        >
                          {label}

                          <ChevronRight
                            size={17}
                            className={
                              isActive
                                ? "text-yellow-400"
                                : "text-gray-500"
                            }
                          />
                        </Link>
                      </li>
                    );
                  })}

                  <li className="pt-3 sm:hidden">
                    <BookNow
                      className="w-full"
                      onClick={() => setOpen(false)}
                    />
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>
    </MotionConfig>
  );
}
