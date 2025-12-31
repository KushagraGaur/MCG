"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

type MenuItem = {
  label: string;
  href?: string;
  children?: MenuItem[];
};

const navItems: MenuItem[] = [
  {
    label: "Sustainability Consulting",
    children: [
      {
        label: "Our Services",
        href: "/sustainability-consulting/our-services",
      },
      { label: "Our Methodology", href: "/sustainability-consulting/our-methodology" },
    ],
  },
  {
    label: "ESG Reporting",
    children: [
      { label: "Get ESG Certification", href: "/esg-reporting/get-esg-certification" },
      { label: "Generate GRI Report", href: "/esg-reporting/generate-gri-report" },
      { label: "Generate BRSR Report", href: "/esg-reporting/generate-brsr-report" },
      { label: "Get ISO Certification", href: "/esg-reporting/get-iso-certification" },
    ],
  },
  {
    label: "Carbon Accounting",
    children: [
      {
        label: "What is Carbon Accounting?",
        href: "/carbon-accounting/what-is-carbon-accounting",
      },
      { label: "Get Carbon Assessment", href: "/carbon-accounting/get-carbon-assessment" },
      { label: "Trade Carbon Credits", href: "/carbon-accounting/trade-carbon-credits" },
    ],
  },
  {
    label: "Our Company",
    children: [
      { label: "About Us", href: "/our-company/about-us" },
      { label: "Our Certifications", href: "/our-company/our-certifications" },
      { label: "Resources & Case Studies", href: "/our-company/resources-case-studies" },
    ],
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement | null>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setOpenMenu(null);
        setOpenSubMenu(null);
        setMobileOpen(false);
      }
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenMenu(null);
        setOpenSubMenu(null);
        setMobileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!mobileOpen) {
      setOpenMenu(null);
      setOpenSubMenu(null);
    }
  }, [mobileOpen]);

  const toggleMenu = (label: string) => {
    setOpenMenu((prev) => (prev === label ? null : label));
    setOpenSubMenu(null);
  };

  const toggleSubMenu = (label: string) => {
    setOpenSubMenu((prev) => (prev === label ? null : label));
  };

  const clearCloseTimeout = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const scheduleClose = () => {
    clearCloseTimeout();
    closeTimeoutRef.current = setTimeout(() => {
      setOpenMenu(null);
      setOpenSubMenu(null);
    }, 150);
  };

  const renderNav = (mode: "desktop" | "mobile") => {
    const isDesktop = mode === "desktop";
    const baseNavClasses = isDesktop
      ? "hidden items-center gap-6 text-sm text-mirika-charcoal md:flex md:text-base"
      : "flex flex-col gap-2 text-sm text-mirika-charcoal";

    return (
      <nav className={baseNavClasses}>
        {navItems.map((item) => {
          const isOpen = openMenu === item.label;
          return (
            <div
              key={item.label}
              className={`relative ${isDesktop ? "" : "w-full"}`}
              onMouseEnter={() => {
                if (!isDesktop) return;
                clearCloseTimeout();
                setOpenMenu(item.label);
              }}
              onMouseLeave={() => {
                if (!isDesktop) return;
                scheduleClose();
              }}
            >
              <button
                type="button"
                className={`flex w-full items-center gap-1 rounded-full px-3 py-2 text-left font-medium transition hover:text-mirika-forest focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mirika-emerald ${
                  isDesktop ? "md:text-sm" : ""
                }`}
                onClick={() => toggleMenu(item.label)}
                onFocus={() => isDesktop && setOpenMenu(item.label)}
                aria-expanded={isOpen}
                aria-haspopup="true"
              >
                {item.label}
                <svg
                  aria-hidden="true"
                  className={`h-3 w-3 transition ${isOpen ? "rotate-180" : ""}`}
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L5 5L9 1"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <div
                className={`${
                  isOpen ? "block" : "hidden"
                } ${isDesktop ? "absolute left-0 top-full z-30 mt-2 min-w-[240px] rounded-lg border border-mirika-earth/60 bg-white py-2 shadow-lg" : "mt-2 rounded-lg border border-mirika-earth/60 bg-white py-2 shadow-lg"}`}
                role="menu"
                onMouseEnter={() => {
                  if (!isDesktop) return;
                  clearCloseTimeout();
                }}
                onMouseLeave={() => {
                  if (!isDesktop) return;
                  scheduleClose();
                }}
              >
                <div className="rounded-lg bg-white py-1">
                  {item.children?.map((child) => {
                    const subKey = `${item.label}-${child.label}`;
                    const isSubOpen = openSubMenu === subKey;
                    const showNested = isDesktop || isSubOpen;

                    if (child.children) {
                      return (
                        <div key={child.label}>
                          <button
                            type="button"
                            className="flex w-full items-center justify-between px-4 py-2 text-left text-sm font-medium text-mirika-charcoal transition hover:bg-mirika-softGrey focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mirika-emerald"
                            onClick={() => toggleSubMenu(subKey)}
                            aria-expanded={isSubOpen}
                            aria-haspopup="true"
                          >
                            <span>{child.label}</span>
                            <svg
                              aria-hidden="true"
                              className={`h-3 w-3 transition ${showNested ? "rotate-180" : ""}`}
                              viewBox="0 0 10 6"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1 1L5 5L9 1"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>
                          <div
                            className={`${
                              showNested ? "block" : "hidden"
                            } space-y-1 bg-mirika-softGrey/60 px-4 py-2 md:bg-transparent md:px-2 md:py-1`}
                          >
                            {child.children.map((nested) => (
                              <Link
                                key={nested.label}
                                href={nested.href ?? "#"}
                                className="block rounded-md px-3 py-2 pl-5 text-sm text-mirika-graphite transition hover:bg-mirika-softGrey hover:text-mirika-forest focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mirika-emerald md:pl-6"
                                onClick={() => {
                                  if (!isDesktop) setMobileOpen(false);
                                }}
                                role="menuitem"
                              >
                                {nested.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      );
                    }

                    return (
                      <Link
                        key={child.label}
                        href={child.href ?? "#"}
                        className="block px-4 py-2 text-sm text-mirika-graphite transition hover:bg-mirika-softGrey hover:text-mirika-forest focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mirika-emerald"
                        onClick={() => {
                          if (!isDesktop) setMobileOpen(false);
                        }}
                        role="menuitem"
                      >
                        {child.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </nav>
    );
  };

  return (
    <header
      ref={headerRef}
      className="w-full sticky top-0 z-50 bg-mirika-softGrey/90 backdrop-blur"
    >
      <div className="border-b border-mirika-earth/60">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-8">
          <Link
            href="/"
            className="flex items-center font-semibold uppercase tracking-[0.1em] text-sm text-mirika-charcoal whitespace-nowrap md:text-lg md:tracking-[0.15em]"
          >
            MIRIKA CONSULTING GROUP
          </Link>

          <div className="flex items-center gap-4 md:gap-8">
            {renderNav("desktop")}
            <Link
              href="/contact"
              className="hidden items-center rounded-full bg-mirika-forest px-4 py-2 text-sm font-medium text-white transition hover:bg-mirika-emerald md:inline-flex"
            >
              Contact Us
            </Link>
            <button
              type="button"
              aria-label="Toggle navigation"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-mirika-earth/70 text-mirika-charcoal transition hover:bg-mirika-earth/40 md:hidden"
              onClick={() => setMobileOpen((prev) => !prev)}
            >
              <span className="sr-only">Toggle menu</span>
              <div className="space-y-1.5">
                <span className="block h-0.5 w-6 bg-mirika-charcoal" />
                <span className="block h-0.5 w-6 bg-mirika-charcoal" />
                <span className="block h-0.5 w-6 bg-mirika-charcoal" />
              </div>
            </button>
          </div>
        </div>

        <div
          className={`${
            mobileOpen ? "block" : "hidden"
          } md:hidden bg-mirika-softGrey/95 px-4 pb-6`}
        >
          <div className="max-h-[70vh] overflow-y-auto">
            {renderNav("mobile")}
            <div className="mt-3">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-full bg-mirika-forest px-4 py-2 text-sm font-medium text-white transition hover:bg-mirika-emerald"
                onClick={() => setMobileOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
