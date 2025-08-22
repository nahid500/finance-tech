'use client';

import Link from 'next/link';

export default function FinanceMaxCorpStory() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-teal-700 relative overflow-hidden">
      {/* Animated background patterns */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-teal-400 to-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-400 to-teal-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Navigation */}
        <div className="mb-8 mt-16">
          <Link href="/#portfolio" className="text-purple-200 hover:text-white transition-colors duration-300 flex items-center gap-2 font-['Poppins']">
            <i className="ri-arrow-left-line"></i>
            Back to Home
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-full flex items-center justify-center mr-6">
              <i className="ri-money-dollar-circle-line text-white text-3xl"></i>
            </div>
            <div>
              <h1 className="text-5xl font-bold text-white font-['Montserrat'] tracking-tight">GameFi-Universe</h1>
              <p className="text-xl text-purple-200 font-['Poppins']">Investment Firm Success Story</p>
            </div>
          </div>
          <div className="text-4xl font-bold text-green-400 mb-4">190% Performance Boost</div>
          <p className="text-xl text-purple-200 font-['Poppins'] max-w-3xl mx-auto">
            How GameFi-Universe revolutionized their investment strategy and achieved consistent quarterly growth through predictive analytics
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-16">
          <img 
            src="https://readdy.ai/api/search-image?query=Modern%20financial%20trading%20floor%20with%20multiple%20screens%20displaying%20market%20data%2C%20professional%20traders%20analyzing%20charts%2C%20sophisticated%20technology%20setup%2C%20contemporary%20office%20design%2C%20financial%20success%20environment%2C%20high-tech%20trading%20platform%20headquarters&width=1200&height=600&seq=financemax_hero&orientation=landscape"
            alt="GameFi-Universe Trading Floor"
            className="w-full h-96 object-cover object-top rounded-3xl shadow-2xl"
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Story Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Company Overview */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
              <h2 className="text-3xl font-bold text-white mb-6 font-['Montserrat']">Company Overview</h2>
              <div className="space-y-4 text-gray-200 font-['Poppins'] text-lg leading-relaxed">
                <p>
                  GameFi-Universe, established in 2012, manages over $3.2 billion in assets for high-net-worth individuals and institutional investors. With a team of 85 investment professionals across New York and London, they specialize in quantitative trading and portfolio management.
                </p>
                <p>
                  Despite their expertise and market knowledge, the firm struggled with inconsistent performance across their diverse portfolio. Traditional analysis methods were proving insufficient in the rapidly evolving financial markets, leading to missed opportunities and suboptimal risk management.
                </p>
              </div>
            </div>

            {/* The Challenge */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
              <h2 className="text-3xl font-bold text-white mb-6 font-['Montserrat']">The Challenge</h2>
              <div className="space-y-6">
                <p className="text-gray-200 font-['Poppins'] text-lg leading-relaxed">
                  FinanceMax faced significant challenges in maintaining consistent performance across volatile markets:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center">
                        <i className="ri-close-line text-red-400"></i>
                      </div>
                      <span className="text-gray-200 font-['Poppins']">Inconsistent portfolio performance</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center">
                        <i className="ri-close-line text-red-400"></i>
                      </div>
                      <span className="text-gray-200 font-['Poppins']">Limited market prediction accuracy</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center">
                        <i className="ri-close-line text-red-400"></i>
                      </div>
                      <span className="text-gray-200 font-['Poppins']">High exposure to market volatility</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center">
                        <i className="ri-close-line text-red-400"></i>
                      </div>
                      <span className="text-gray-200 font-['Poppins']">Reactive investment decisions</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center">
                        <i className="ri-close-line text-red-400"></i>
                      </div>
                      <span className="text-gray-200 font-['Poppins']">Inadequate risk assessment</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center">
                        <i className="ri-close-line text-red-400"></i>
                      </div>
                      <span className="text-gray-200 font-['Poppins']">Client retention concerns</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* The Solution */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
              <h2 className="text-3xl font-bold text-white mb-6 font-['Montserrat']">Our Solution</h2>
              <div className="space-y-6">
                <p className="text-gray-200 font-['Poppins'] text-lg leading-relaxed">
                  We implemented a comprehensive predictive analytics platform that combines machine learning algorithms with real-time market data to optimize investment strategies and risk management.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                        <i className="ri-check-line text-green-400"></i>
                      </div>
                      <span className="text-gray-200 font-['Poppins']">AI-powered market prediction</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                        <i className="ri-check-line text-green-400"></i>
                      </div>
                      <span className="text-gray-200 font-['Poppins']">Real-time risk assessment</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                        <i className="ri-check-line text-green-400"></i>
                      </div>
                      <span className="text-gray-200 font-['Poppins']">Automated portfolio rebalancing</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                        <i className="ri-check-line text-green-400"></i>
                      </div>
                      <span className="text-gray-200 font-['Poppins']">Sentiment analysis integration</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                        <i className="ri-check-line text-green-400"></i>
                      </div>
                      <span className="text-gray-200 font-['Poppins']">Advanced backtesting tools</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                        <i className="ri-check-line text-green-400"></i>
                      </div>
                      <span className="text-gray-200 font-['Poppins']">Client reporting automation</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
              <h2 className="text-3xl font-bold text-white mb-6 font-['Montserrat']">Performance Transformation</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 font-['Montserrat']">Before Implementation</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-200 font-['Poppins']">Annual Return</span>
                      <span className="text-red-400 font-bold">8.2%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-200 font-['Poppins']">Sharpe Ratio</span>
                      <span className="text-red-400 font-bold">0.65</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-200 font-['Poppins']">Maximum Drawdown</span>
                      <span className="text-red-400 font-bold">-18.5%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-200 font-['Poppins']">Win Rate</span>
                      <span className="text-red-400 font-bold">52%</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 font-['Montserrat']">After Implementation</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-200 font-['Poppins']">Annual Return</span>
                      <span className="text-green-400 font-bold">23.8%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-200 font-['Poppins']">Sharpe Ratio</span>
                      <span className="text-green-400 font-bold">1.89</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-200 font-['Poppins']">Maximum Drawdown</span>
                      <span className="text-green-400 font-bold">-6.2%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-200 font-['Poppins']">Win Rate</span>
                      <span className="text-green-400 font-bold">78%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Client Impact */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
              <h2 className="text-3xl font-bold text-white mb-6 font-['Montserrat']">Client Success Stories</h2>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl p-6 border border-blue-400/30">
                  <h4 className="text-lg font-bold text-white mb-2 font-['Montserrat']">Pension Fund Portfolio</h4>
                  <p className="text-gray-200 font-['Poppins'] mb-3">$450M asset allocation optimization resulted in 15% outperformance vs. benchmark.</p>
                  <div className="text-green-400 font-bold">+$67.5M additional returns</div>
                </div>
                <div className="bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-2xl p-6 border border-green-400/30">
                  <h4 className="text-lg font-bold text-white mb-2 font-['Montserrat']">High Net Worth Individual</h4>
                  <p className="text-gray-200 font-['Poppins'] mb-3">Dynamic risk management protected $25M portfolio during market volatility.</p>
                  <div className="text-green-400 font-bold">-85% volatility vs. market</div>
                </div>
                <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-2xl p-6 border border-yellow-400/30">
                  <h4 className="text-lg font-bold text-white mb-2 font-['Montserrat']">Corporate Treasury</h4>
                  <p className="text-gray-200 font-['Poppins'] mb-3">Cash management optimization increased yield by 240 basis points annually.</p>
                  <div className="text-green-400 font-bold">+$3.2M yearly income</div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Portfolio Manager Testimonial */}
            <div className="bg-gradient-to-br from-yellow-500/20 to-orange-600/20 backdrop-blur-lg rounded-3xl p-8 border border-yellow-400/30 shadow-2xl">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">DR</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-['Montserrat']">David Rodriguez</h3>
                  <p className="text-purple-200 font-['Poppins']">Portfolio Manager</p>
                </div>
              </div>
              <blockquote className="text-gray-200 font-['Poppins'] italic text-lg leading-relaxed mb-4">
                "The predictive analytics completely changed our investment approach. We're no longer chasing the market – we're anticipating it. Our clients have never been happier."
              </blockquote>
              <div className="text-yellow-400 font-semibold">★★★★★ 5/5 Rating</div>
            </div>

            {/* Key Metrics */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6 font-['Montserrat']">Key Results</h3>
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">190%</div>
                  <div className="text-purple-200 font-['Poppins']">Performance Boost</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">1.89</div>
                  <div className="text-purple-200 font-['Poppins']">Sharpe Ratio</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">78%</div>
                  <div className="text-purple-200 font-['Poppins']">Win Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">$850M</div>
                  <div className="text-purple-200 font-['Poppins']">Additional Returns</div>
                </div>
              </div>
            </div>

            {/* Company Info */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6 font-['Montserrat']">Company Details</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-purple-200 font-['Poppins']">Industry:</span>
                  <span className="text-white font-semibold">Investment Firm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-purple-200 font-['Poppins']">Founded:</span>
                  <span className="text-white font-semibold">2012</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-purple-200 font-['Poppins']">Employees:</span>
                  <span className="text-white font-semibold">85+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-purple-200 font-['Poppins']">Location:</span>
                  <span className="text-white font-semibold">New York, NY</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-purple-200 font-['Poppins']">AUM:</span>
                  <span className="text-white font-semibold">$3.2B+</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-white mb-8 font-['Montserrat']">Ready to Optimize Your Investment Performance?</h2>
          <div className="inline-flex items-center gap-4">
            <button className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-teal-500 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 font-['Poppins'] whitespace-nowrap">
              <i className="ri-line-chart-line mr-2"></i>
              Boost Your Returns
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-full border border-white/30 hover:border-white/50 shadow-xl transition-all duration-300 backdrop-blur-lg font-['Poppins'] whitespace-nowrap">
              <i className="ri-phone-line mr-2"></i>
              Request Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}