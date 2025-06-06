"use client"

// components/TawkTo.js
import { useEffect } from 'react';

const ChatWidget = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const tawkScript = document.createElement('script');
      tawkScript.src = 'https://embed.tawk.to/6842cd109ed8c2190a6d4e6a/1it2f22lj';
      tawkScript.async = true;
      tawkScript.charset = 'UTF-8';
      tawkScript.setAttribute('crossorigin', '*');

      document.body.appendChild(tawkScript);
    }
  }, []);

  return null; // No visible output needed
};

export default ChatWidget;
