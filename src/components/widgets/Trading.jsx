"use client";

import React, { useEffect, useRef, memo } from "react";

function Trading() {
  const containerRef = useRef(null);
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.innerHTML = ""; // cleanup

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
    script.type = "text/javascript";
    script.async = true;

    script.textContent = JSON.stringify({
      symbols: [
        ["Apple", "AAPL|1D"],
        ["Google", "GOOGL|1D"],
        ["Microsoft", "MSFT|1D"]
      ],
      chartType: "area",
      colorTheme: "light",
      autosize: true,
      locale: "en"
    });

    container.appendChild(script);

    return () => {
      container.innerHTML = "";
    };
  }, []);

  return (
    <div className="w-full h-screen md:px-24">
      <div ref={containerRef} className="tradingview-widget-container__widget w-full h-full" />
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
