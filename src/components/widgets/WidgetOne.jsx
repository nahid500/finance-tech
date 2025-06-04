"use client";

import { useEffect, useRef } from "react";

export default function WidgetOne() {
  const containerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
    script.async = true;
    script.type = "text/javascript";

    script.innerHTML = JSON.stringify({
      symbols: [
        ["Apple", "AAPL|1D"],
        ["Google", "GOOGL|1D"],
        ["Microsoft", "MSFT|1D"],
      ],
      autosize: true,
      colorTheme: "light",
      locale: "en",
    });

    if (containerRef.current) {
      containerRef.current.innerHTML = "";
      containerRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className="w-full px-4 py-8 flex justify-center items-center">
      <div
        className="tradingview-widget-container w-full max-w-5xl min-h-[450px]"
        ref={containerRef}
      >
        <div className="tradingview-widget-container__widget" />
        <div className="text-center text-sm mt-2 text-gray-500">
          <a
            href="https://www.tradingview.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Track all markets on TradingView
          </a>
        </div>
      </div>
    </div>
  );
}
