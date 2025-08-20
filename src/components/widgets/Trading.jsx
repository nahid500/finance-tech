"use client";

import React, { useEffect, useRef, memo } from "react";

function Trading() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.innerHTML = ""; // cleanup

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
    script.type = "text/javascript";
    script.async = true;

    // ✅ Set explicit width and height (100% and 600px here)
    script.textContent = JSON.stringify({
      symbols: [
        ["Apple", "AAPL|1D"],
        ["Google", "GOOGL|1D"],
        ["Microsoft", "MSFT|1D"]
      ],
      chartType: "area",
      colorTheme: "light",
      autosize: false,
      width: "100%",
      height: 600,
      locale: "en"
    });

    container.appendChild(script);

    return () => {
      container.innerHTML = "";
    };
  }, []);

  return (
    <div className="w-full px-4 md:px-24 max-w-[1400px] mx-auto">
      {/* ✅ Wider, full-width container */}
      <div
        ref={containerRef}
        className="tradingview-widget-container__widget w-full h-[600px]"
      />
      <div className="text-center text-sm mt-2">
        <a
          href="https://www.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
        >
          <span className="text-blue-500">
            Apple, Google, and Microsoft quotes by TradingView
          </span>
        </a>
      </div>
    </div>
  );
}

export default memo(Trading);
