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
      {
        label: "Our Methodology",
        href: "/sustainability-consulting/our-methodology",
      },
    ],
  },
  {
    label: "ESG Reporting",
    children: [
      {
        label: "Get ESG Certification",
        href: "/esg-reporting/get-esg-certification",
      },
      {
        label: "Generate GRI Report",
        href: "/esg-reporting/generate-gri-report",
      },
      {
        label: "Generate BRSR Report",
        href: "/esg-reporting/generate-brsr-report",
      },
      {
        label: "Get ISO Certification",
        href: "/esg-reporting/get-iso-certification",
      },
    ],
  },
  {
    label: "Our Company",
    children: [
      {
        label: "About Us",
        href: "/our-company/about-us",
      },
      {
        label: "Our Certifications",
        href: "/our-company/our-certifications",
      },
      {
        label: "Resources & Case Studies",
        href: "/our-company/resources-case-studies",
      },
    ],
  },
];


export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const [hasScrolled, setHasScrolled] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setHasScrolled(scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    
    return (
      <nav className={`${isDesktop ? "hidden md:flex items-center" : "flex flex-col gap-2"} bg-white/40 backdrop-blur-lg px-6 py-3 rounded-full gap-6`}>
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
                className={`flex items-center gap-1 text-sm font-dm-sans font-bold text-black hover:text-mirika-forest transition ${
                  isDesktop ? "" : "w-full text-left py-2"
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
                } ${isDesktop ? "absolute left-0 top-full z-30 mt-2 min-w-[240px] rounded-xl border border-gray-200 bg-white/90 backdrop-blur-lg py-3 shadow-2xl" : "mt-2 rounded-xl border border-gray-200 bg-white py-3 shadow-lg"}`}
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
                <div className="space-y-1">
                  {item.children?.map((child) => {
                    const subKey = `${item.label}-${child.label}`;
                    const isSubOpen = openSubMenu === subKey;
                    const showNested = isDesktop || isSubOpen;

                    if (child.children) {
                      return (
                        <div key={child.label}>
                          <button
                            type="button"
                            className="flex w-full items-center justify-between px-5 py-2.5 text-sm font-dm-sans text-gray-700 hover:bg-[#E8F2F0] hover:text-mirika-forest transition"
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
                            } space-y-1 bg-[#E8F2F0]/60 px-5 py-2`}
                          >
                            {child.children.map((nested) => (
                              <Link
                                key={nested.label}
                                href={nested.href ?? "#"}
                                className="block rounded-md px-3 py-2 pl-6 text-sm font-dm-sans text-gray-600 hover:bg-[#E8F2F0] hover:text-mirika-forest transition"
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
                        className="block px-5 py-2.5 text-sm font-dm-sans text-gray-700 hover:bg-[#E8F2F0] hover:text-mirika-forest transition"
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
  className={`sticky top-0 z-50 w-full bg-white transition-all duration-300 ${
    hasScrolled ? "shadow-sm" : ""
  } py-4`}
>

      <div className="mx-auto max-w-[1420px] px-8">
        <div className="flex items-center justify-between">
          {/* Logo - Always visible */}
          <Link 
            href="/" 
            className={`text-2xl font-dm-sans font-medium tracking-tight transition-colors duration-300 ${
              hasScrolled ? "text-black" : "text-black"
            }`}
          >
            MIRIKA CONSULTING GROUP
          </Link>

          <div className="flex items-center gap-6">
            {/* Desktop Navigation Oval - Only this has blur effect */}
            <div className={`hidden md:flex items-center bg-white/40 backdrop-blur-lg px-6 py-3 rounded-full gap-6 transition-all duration-300 ${
              hasScrolled ? "scale-95" : "scale-100"
            }`}>
              {navItems.map((item) => {
                const isOpen = openMenu === item.label;
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => {
                      clearCloseTimeout();
                      setOpenMenu(item.label);
                    }}
                    onMouseLeave={() => {
                      scheduleClose();
                    }}
                  >
                    <button
                      type="button"
                      className="flex items-center gap-1 text-sm font-dm-sans font-bold text-black hover:text-mirika-forest transition"
                      onClick={() => toggleMenu(item.label)}
                      onFocus={() => setOpenMenu(item.label)}
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

                    {isOpen && (
                      <div
                        className="absolute left-0 top-full z-30 mt-2 min-w-[240px] rounded-xl border border-gray-200 bg-white/90 backdrop-blur-lg py-3 shadow-2xl"
                        role="menu"
                        onMouseEnter={() => {
                          clearCloseTimeout();
                        }}
                        onMouseLeave={() => {
                          scheduleClose();
                        }}
                      >
                        <div className="space-y-1">
                          {item.children?.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href ?? "#"}
                              className="block px-5 py-2.5 text-sm font-dm-sans text-gray-700 hover:bg-[#E8F2F0] hover:text-mirika-forest transition"
                              role="menuitem"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            
            {/* Contact Button - Always visible */}
            <Link 
              href="/contact" 
              className={`hidden md:flex items-center justify-center text-sm font-dm-sans font-bold px-6 py-3 rounded-full transition-all duration-300 ${
                hasScrolled 
                  ? "bg-mirika-forest text-white hover:bg-[#2C554A]" 
                  : "bg-mirika-forest text-white hover:bg-[#2C554A]"
              }`}
            >
              Contact Us
              <span className="ml-1 text-white">↗</span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 md:hidden ${
                hasScrolled 
                  ? "border border-gray-300 text-black hover:bg-gray-100" 
                  : "border border-gray-300 text-black hover:bg-gray-100"
              }`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <div className="space-y-1.5">
                <span className="block h-0.5 w-6 bg-current" />
                <span className="block h-0.5 w-6 bg-current" />
                <span className="block h-0.5 w-6 bg-current" />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        <div
          className={`${
            mobileOpen ? "block" : "hidden"
          } md:hidden bg-white/95 backdrop-blur-lg rounded-2xl mt-4 p-6 shadow-2xl`}
        >
          <div className="max-h-[70vh] overflow-y-auto">
            {renderNav("mobile")}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center bg-mirika-forest text-white text-sm font-dm-sans font-bold px-6 py-3 rounded-full hover:bg-[#2C554A] transition"
                onClick={() => setMobileOpen(false)}
              >
                Contact Us
                <span className="ml-1 text-white">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}