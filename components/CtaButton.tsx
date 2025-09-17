// components/CtaButton.tsx
import React from "react";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export const CtaButton = ({
  href,
  children,
  variant = "primary",
  className = "",
}: Props) => {
  const base: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "12px 18px",
    borderRadius: 12,
    fontWeight: 700,
    textDecoration: "none",
  };

  const primary: React.CSSProperties = {
    ...base,
    background: "#166534",
    color: "#ffffff",
  };

  const secondary: React.CSSProperties = {
    ...base,
    background: "#f4f4f5",
    color: "#111827",
    border: "1px solid #e5e7eb",
  };

  return (
    <a href={href} style={variant === "primary" ? primary : secondary} className={className}>
      {children}
    </a>
  );
};

export default CtaButton;
