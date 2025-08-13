"use client";
import React, { useEffect, useRef, memo } from "react";

function TradingViewWidget() {
  const container = useRef();

  useEffect(() => {
    if (!container.current) return;

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-stock-heatmap.js";
    script.async = true;
    script.type = "text/javascript";

    // Inject config safely via textContent
    const config = {
      dataSource: "SPX500",
      blockSize: "market_cap_basic",
      blockColor: "change",
      grouping: "sector",
      locale: "en",
      symbolUrl: "",
      colorTheme: "light",
      exchanges: [],
      hasTopBar: false,
      isDataSetEnabled: false,
      isZoomEnabled: false,
      hasSymbolTooltip: true,
      isMonoSize: false,
      width: "100%",
      height: "100%",
    };

    script.textContent = JSON.stringify(config);
    container.current.appendChild(script);

    return () => {
      if (container.current) {
        container.current.textContent = "";
      }
    };
  }, []);

  return (
    <div className="w-full overflow-x-auto">
      <div className="flex justify-center min-w-[360px] sm:min-w-[600px] md:min-w-[800px] md:px-24 lg:min-w-[1200px]">
        <div
          className="tradingview-widget-container w-full aspect-[12/5] min-h-[500px]"
          ref={container}
        >
          <div className="tradingview-widget-container__widget" />
          <div className="tradingview-widget-copyright">
            <a
              href="https://www.tradingview.com/"
              rel="noopener nofollow"
              target="_blank"
            >
              <span className="blue-text">Stock heatmap by TradingView</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(TradingViewWidget);
