"use client";

import { useEffect, useRef } from "react";

export default function WidgetThree() {
  const containerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-hotlists.js";
    script.async = true;
    script.type = "text/javascript";

    script.innerHTML = JSON.stringify({
      colorTheme: "light",
      dateRange: "12M",
      exchange: "US",
      showChart: true,
      locale: "en",
      largeChartUrl: "",
      isTransparent: false,
      showSymbolLogo: false,
      showFloatingTooltip: false,
      width: "400",
      height: "550",
      plotLineColorGrowing: "rgba(41, 98, 255, 1)",
      plotLineColorFalling: "rgba(41, 98, 255, 1)",
      gridLineColor: "rgba(240, 243, 250, 0)",
      scaleFontColor: "rgba(15, 15, 15, 1)",
      belowLineFillColorGrowing: "rgba(41, 98, 255, 0.12)",
      belowLineFillColorFalling: "rgba(41, 98, 255, 0.12)",
      belowLineFillColorGrowingBottom: "rgba(41, 98, 255, 0)",
      belowLineFillColorFallingBottom: "rgba(41, 98, 255, 0)",
      symbolActiveColor: "rgba(41, 98, 255, 0.12)",
    });

    if (containerRef.current) {
      containerRef.current.innerHTML = ""; // Clear previous
      containerRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className="flex justify-center items-center py-8">
      <div
        className="tradingview-widget-container"
        style={{ width: 400, height: 550 }}
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
