"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { PaymentModal } from "./PaymentModal";

export default function TimedPopupModal() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Disable in development environment
    if (process.env.NODE_ENV === "development") return;

    // Reset state on path change
    setIsOpen(false);

    if (!pathname) return;

    // Check if current route is an excluded route
    const isExcluded =
      pathname.startsWith("/authority") ||
      pathname.startsWith("/user") ||
      pathname.startsWith("/nullify") ||
      pathname.startsWith("/contact") ||
      pathname.includes("thank-you") ||
      pathname.startsWith("/payment-success") ||
      pathname.startsWith("/payment-cancelled") ||
      pathname.startsWith("/payment-failure") ||
      pathname.startsWith("/login") ||
      pathname.startsWith("/email-landing");

    if (isExcluded) {
      return;
    }

    // Set 3-second delay timer to open popup modal
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [pathname]);

  // Disable in development environment
  if (process.env.NODE_ENV === "development") return null;

  if (!pathname) return null;

  const isExcluded =
    pathname.startsWith("/authority") ||
    pathname.startsWith("/user") ||
    pathname.startsWith("/nullify") ||
    pathname.startsWith("/contact") ||
    pathname.includes("thank-you") ||
    pathname.startsWith("/payment-success") ||
    pathname.startsWith("/payment-cancelled") ||
    pathname.startsWith("/payment-failure") ||
    pathname.startsWith("/login") ||
    pathname.startsWith("/email-landing");

  if (isExcluded) return null;

  return (
    <PaymentModal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
    />
  );
}
