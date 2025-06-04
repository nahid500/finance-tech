"use client";

import Script from "next/script";
import { useEffect } from "react";

export default function CustomerWidget() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.elfsight) {
      window.elfsight.load();
    }
  }, []);

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-8 flex justify-center items-center">
      <div className="w-full max-w-5xl">
        {/* Elfsight Platform Script */}
        <Script
          src="https://static.elfsight.com/platform/platform.js"
          strategy="lazyOnload"
          onLoad={() => {
            if (window.elfsight) {
              window.elfsight.load();
            }
          }}
        />

        {/* Elfsight Widget Container */}
        <div
          className="elfsight-app-3cf7d962-81d1-4a36-8562-bd29e1557fe9"
          data-elfsight-app-lazy
        />
      </div>
    </div>
  );
}
