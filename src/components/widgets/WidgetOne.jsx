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

    // Widget configuration as JSON string
    script.innerHTML = JSON.stringify({
      symbols: [
        ["Apple", "AAPL|1D"],
        ["Google", "GOOGL|1D"],
        ["Microsoft", "MSFT|1D"],
      ],
      chartOnly: false,
      width: "100%",
      height: "100%",
      locale: "en",
      colorTheme: "light",
      autosize: false,
      showVolume: false,
      showMA: false,
      hideDateRanges: false,
      hideMarketStatus: false,
      hideSymbolLogo: false,
      scalePosition: "right",
      scaleMode: "Normal",
      fontFamily:
        "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
      fontSize: "10",
      noTimeScale: false,
      valuesTracking: "1",
      changeMode: "price-and-percent",
      chartType: "area",
      maLineColor: "#2962FF",
      maLineWidth: 1,
      maLength: 9,
      headerFontSize: "medium",
      lineWidth: 2,
      lineType: 0,
      dateRanges: ["1d|1", "1m|30", "3m|60", "12m|1D", "60m|1W", "all|1M"],
    });

    if (containerRef.current) {
      containerRef.current.innerHTML = ""; // clear old widget
      containerRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className="flex justify-center items-center w-full h-[450px] py-8">
      <div
        className="tradingview-widget-container w-full max-w-4xl h-full"
        ref={containerRef}
      >
        <div className="tradingview-widget-container__widget"></div>
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