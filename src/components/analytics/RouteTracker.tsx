"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function RouteTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if ((window as any).gtag) {
      (window as any).gtag("config", "G-XXXXXXXXXX", {
        page_path: pathname,
      });
    }
  }, [pathname]);

  return null;
}
