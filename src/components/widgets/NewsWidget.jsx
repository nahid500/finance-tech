"use client";

import { useEffect, useRef } from "react";

export default function NewsWidget() {
  const containerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      feedMode: "all_symbols",
      isTransparent: false,
      displayMode: "regular",
      width: "400",
      height: "550",
      colorTheme: "light",
      locale: "en",
    });

    if (containerRef.current) {
      containerRef.current.innerHTML = ""; // Clear previous widget on re-render
      containerRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className="flex justify-center items-center w-full py-8">
      <div className="tradingview-widget-container" ref={containerRef}>
        <div className="tradingview-widget-container__widget" />
        <div className="tradingview-widget-copyright text-center mt-2">
          <a
            href="https://www.tradingview.com/"
            target="_blank"
            rel="noopener nofollow"
            className="text-blue-600"
          >
            Track all markets on TradingView
          </a>
        </div>
      </div>
    </div>
  );
}
