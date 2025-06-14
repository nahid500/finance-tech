"use client"
import React from 'react';
import { BookOpen, Calendar } from 'lucide-react';

export const Learning = () => {
  const handleLearningClick = () => {
    window.location.href = '/learning';
  };

  const handleScheduleClick = () => {
    window.open('https://m.me/jakaria.sarkar.790', '_blank');
  };

  return (
    <section id='learning' className="py-8 sm:py-12 lg:py-16 bg-gray-50 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="relative h-48 sm:h-64 lg:h-auto order-1 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2426&q=80"
                alt="Business Analytics Dashboard"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
            </div>

            <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center order-2 lg:order-2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                Want to Learn More About ICO Fundraising Analytics?</h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Unlock Data-Driven ICO Success with Jakaria.finance
                Leverage our advanced ICO fundraising analytics, market trend analysis, and token performance insights to optimize your ICO launch, boost investor confidence, and drive business growth.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button
                  onClick={handleLearningClick}
                  className="flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
                >
                  <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
                  Learning
                </button>
                
                <button
                  onClick={handleScheduleClick}
                  className="flex items-center justify-center gap-2 sm:gap-3 bg-white border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
                >
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                  Book a Schedule
                </button>
              </div>

              <div className="mt-4 sm:mt-6 text-xs sm:text-sm text-gray-500 text-center sm:text-left">
                <p>📊 Data Visualization • 📈 Predictive Analytics • 🎯 Business Intelligence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};