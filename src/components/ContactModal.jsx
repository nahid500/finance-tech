'use client';

import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { X, MessageCircle, Send, Facebook } from 'lucide-react';
import FocusLock from 'react-focus-lock';

export const ContactModal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);
  const headingId = "contact-modal-title";

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const contactOptions = [
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      bgColor: 'bg-green-500 hover:bg-green-600',
      action: () => window.open('https://wa.me/13148573244', '_blank', 'noopener,noreferrer'),
      description: 'Chat with us instantly',
    },
    {
      name: 'Telegram',
      icon: Send,
      bgColor: 'bg-blue-500 hover:bg-blue-600',
      action: () => window.open('https://t.me/jakaria_finance', '_blank', 'noopener,noreferrer'),
      description: 'Message us on Telegram',
    },
    {
      name: 'Messenger',
      icon: Facebook,
      bgColor: 'bg-indigo-500 hover:bg-indigo-600',
      action: () => window.open('https://m.me/jakaria.sarkar.790', '_blank', 'noopener,noreferrer'),
      description: 'Connect via Messenger',
    },
  ];

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto"
      aria-labelledby={headingId}
      aria-modal="true"
      role="dialog"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal content */}
      <FocusLock>
        <div
          ref={modalRef}
          className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 my-12 overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6 text-white relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition duration-200"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
            <h2 id={headingId} className="text-2xl font-bold mb-2">Get in Touch</h2>
            <p className="text-white/90 text-sm">Choose your preferred way to contact us</p>
          </div>

          {/* Contact Options */}
          <div className="p-6 space-y-4">
            {contactOptions.map((option) => (
              <button
                key={option.name}
                onClick={option.action}
                className={`w-full ${option.bgColor} text-white rounded-xl p-4 flex items-center gap-4 transform hover:scale-105 transition duration-300 shadow-lg hover:shadow-xl group`}
              >
                <div className="bg-white/20 p-3 rounded-full group-hover:bg-white/30 transition duration-200">
                  <option.icon className="w-6 h-6" />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="font-semibold text-lg">{option.name}</h3>
                  <p className="text-white/90 text-sm">{option.description}</p>
                </div>
                <div className="text-white/70 group-hover:text-white transition duration-200">
                  →
                </div>
              </button>
            ))}
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-6 py-4 text-center">
            <p className="text-gray-600 text-sm">We'll respond within 24 hours</p>
          </div>
        </div>
      </FocusLock>
    </div>,
    document.body
  );
};
