'use client';

import { useEffect, useRef } from 'react';

export default function WidgetThree() {
  const containerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-hotlists.js';
    script.async = true;
    script.innerHTML = `
      {
        "colorTheme": "light",
        "dateRange": "12M",
        "exchange": "US",
        "showChart": true,
        "locale": "en",
        "width": "100%",
        "height": "100%",
        "largeChartUrl": "",
        "isTransparent": false,
        "showSymbolLogo": false,
        "showFloatingTooltip": false,
        "plotLineColorGrowing": "rgba(41, 98, 255, 1)",
        "plotLineColorFalling": "rgba(41, 98, 255, 1)",
        "gridLineColor": "rgba(240, 243, 250, 0)",
        "scaleFontColor": "rgba(15, 15, 15, 1)",
        "belowLineFillColorGrowing": "rgba(41, 98, 255, 0.12)",
        "belowLineFillColorFalling": "rgba(41, 98, 255, 0.12)",
        "belowLineFillColorGrowingBottom": "rgba(41, 98, 255, 0)",
        "belowLineFillColorFallingBottom": "rgba(41, 98, 255, 0)",
        "symbolActiveColor": "rgba(41, 98, 255, 0.12)"
      }
    `;

    if (containerRef.current) {
      containerRef.current.innerHTML = ''; // Clear old widget if rerendered
      containerRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className="w-full flex justify-center py-8">
      <div className="container max-w-4xl mx-auto">
        <div className="tradingview-widget-container" ref={containerRef}>
          <div className="tradingview-widget-container__widget" />
          <div className="tradingview-widget-copyright text-center mt-2">
            <a
              href="https://www.tradingview.com/"
              rel="noopener nofollow"
              target="_blank"
            >
              <span className="text-blue-600">Track all markets on TradingView</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
