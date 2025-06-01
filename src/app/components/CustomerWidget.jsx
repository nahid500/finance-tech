'use client';

import Script from 'next/script';
import { useEffect } from 'react';

export default function CustomerWidget() {
  useEffect(() => {
    if (window.elfsight) {
      window.elfsight.load();
    }
  }, []);

  return (
    <>
      <Script src="https://static.elfsight.com/platform/platform.js" strategy="lazyOnload" />

      <div className="elfsight-app-3cf7d962-81d1-4a36-8562-bd29e1557fe9" data-elfsight-app-lazy></div>
    </>
  );
}
