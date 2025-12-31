import Link from "next/link";
import MainLayout from "./MainLayout";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const footerLinks = [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Contact", href: "#" },
  ];

  return (
    <footer className="bg-mirika-charcoal text-mirika-earth">
      <MainLayout
        padded={false}
        className="flex flex-col gap-4 py-8 md:flex-row md:items-center md:justify-between"
      >
        <p className="text-sm">
          © {currentYear} Mirika Consulting Group. All rights reserved.
        </p>
        <div className="flex flex-wrap items-center gap-4 text-sm">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="transition hover:text-mirika-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </MainLayout>
    </footer>
  );
}
