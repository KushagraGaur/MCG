import type { ReactNode } from "react";
type MainLayoutProps = {
  children: ReactNode;
  className?: string;
  padded?: boolean;
};

export default function MainLayout({
  children,
  className,
  padded = true,
}: MainLayoutProps) {
  const paddingClasses = padded ? "py-8 md:py-12" : "";

  return (
    <div
      className={`mx-auto max-w-6xl px-4 md:px-8 ${paddingClasses} ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
