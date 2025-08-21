// app/components/GoogleAnalytics.js
"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

const GA_TRACKING_ID = "G-SK61CDXL9G";

export function GoogleAnalytics() {
  const pathname = usePathname();
  const firstLoad = useRef(true);

  useEffect(() => {
    if (!firstLoad.current) {
      window.gtag("config", GA_TRACKING_ID, {
        page_path: pathname,
      });
    }
    firstLoad.current = false;
  }, [pathname]);

  return null;
}
