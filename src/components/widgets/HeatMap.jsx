"use client";

import { useEffect, useRef } from "react";

export default function HeatMap() {
  const containerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-forex-heat-map.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      width: "100%",
      height: "400",
      currencies: [
        "EUR",
        "USD",
        "JPY",
        "GBP",
        "CHF",
        "AUD",
        "CAD",
        "NZD",
        "CNY",
      ],
      isTransparent: false,
      colorTheme: "light",
      locale: "en",
      backgroundColor: "#ffffff",
    });

    if (containerRef.current) {
      containerRef.current.innerHTML = "";
      containerRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className="w-full px-4 py-8">
      <div className="overflow-x-auto flex">
        <div className="min-w-[1000px] mx-auto">
          <div className="tradingview-widget-container" ref={containerRef}>
            <div className="tradingview-widget-container__widget" />
            <div className="text-center text-sm mt-2 text-gray-500">
              <a
                href="https://www.tradingview.com/"
                rel="noopener noreferrer"
                target="_blank"
                className="text-blue-600 underline"
              >
                Track all markets on TradingView
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}