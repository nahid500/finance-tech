'use client';

import { useEffect, useRef } from 'react';

export default function WidgetTwo() {
  const containerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-forex-heat-map.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      width: "550",
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
        "CNY"
      ],
      isTransparent: false,
      colorTheme: "light",
      locale: "en",
      backgroundColor: "#ffffff"
    });

    if (containerRef.current) {
      containerRef.current.innerHTML = '';
      containerRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className="flex justify-center items-center w-full h-full py-8">
      <div className="tradingview-widget-container">
        <div className="tradingview-widget-container__widget" ref={containerRef} />
        <div className="tradingview-widget-copyright text-center mt-2">
          <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
            <span className="text-blue-600">Track all markets on TradingView</span>
          </a>
        </div>
      </div>
    </div>
  );
}
