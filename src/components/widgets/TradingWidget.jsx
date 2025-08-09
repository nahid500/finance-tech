"use client";
import React, { useLayoutEffect, useRef, memo } from "react";

function TradingViewWidget() {
  const container = useRef();

  useLayoutEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-stock-heatmap.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "dataSource": "SPX500",
        "blockSize": "market_cap_basic",
        "blockColor": "change",
        "grouping": "sector",
        "locale": "en",
        "symbolUrl": "",
        "colorTheme": "light",
        "exchanges": [],
        "hasTopBar": false,
        "isDataSetEnabled": false,
        "isZoomEnabled": true,
        "hasSymbolTooltip": true,
        "isMonoSize": false,
        "width": "100%",
        "height": "100%"
      }`;
    container.current.appendChild(script);

    return () => {
      container.current.innerHTML = "";
    };
  }, []);

  return (
    <div className="w-full overflow-x-auto">
      <div className="flex justify-center min-w-[600px] sm:min-w-[800px] md:min-w-[1000px] lg:min-w-[1200px]">
        <div
          className="tradingview-widget-container w-full aspect-[12/5]"
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
