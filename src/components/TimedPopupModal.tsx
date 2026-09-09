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

    // Check if current route is an excluded route (including home page which has its own hero CTA)
    const isExcluded =
      pathname === "/" ||
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

    // Do not pop up if the user already interacted with or opened a modal in this session
    try {
      if (sessionStorage.getItem("hasOpenedPaymentModal") === "true") {
        return;
      }
    } catch (_) {}

    let timer: NodeJS.Timeout | null = null;

    const handleModalStateChange = (e: any) => {
      if (e?.detail?.isOpen) {
        if (timer) clearTimeout(timer);
        setIsOpen(false);
      }
    };

    window.addEventListener("paymentModalStateChange", handleModalStateChange);

    // Set 3-second delay timer to open popup modal if no modal is already open
    timer = setTimeout(() => {
      if (typeof window !== "undefined") {
        if ((window as any).__isPaymentModalOpen) return;
        try {
          if (sessionStorage.getItem("hasOpenedPaymentModal") === "true") return;
        } catch (_) {}
      }
      setIsOpen(true);
    }, 3000);

    return () => {
      if (timer) clearTimeout(timer);
      window.removeEventListener("paymentModalStateChange", handleModalStateChange);
    };
  }, [pathname]);

  // Disable in development environment
  if (process.env.NODE_ENV === "development") return null;

  if (!pathname) return null;

  const isExcluded =
    pathname === "/" ||
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
      onClose={() => {
        setIsOpen(false);
        try {
          sessionStorage.setItem("hasOpenedPaymentModal", "true");
        } catch (_) {}
      }}
    />
  );
}
