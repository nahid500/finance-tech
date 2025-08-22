

'use client';

import Link from 'next/link';

export default function CryptoVenturesCapitalStory() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-teal-700 relative overflow-hidden">
      {/* Advanced animated background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-teal-400 to-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-128 h-128 bg-gradient-to-r from-purple-400 to-teal-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Elegant Navigation */}
        <div className="mb-8 mt-6">
          <Link href="/#portfolio" className="text-purple-200 hover:text-white transition-all duration-500 flex items-center gap-3 font-['Inter'] font-medium tracking-wide group">
            <i className="ri-arrow-left-line text-xl group-hover:transform group-hover:-translate-x-1 transition-transform duration-300"></i>
            <span className="relative">
              Back to Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-purple-500 group-hover:w-full transition-all duration-500"></span>
            </span>
          </Link>
        </div>

        {/* Premium Header Design */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-10">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600 rounded-full flex items-center justify-center mr-8 shadow-2xl animate-pulse">
                <i className="ri-coin-line text-white text-4xl"></i>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600 blur-lg opacity-50 animate-ping"></div>
              </div>
            </div>
            <div className="text-left">
              <h1 className="text-6xl font-bold text-white font-['Playfair_Display'] tracking-tight leading-tight">
                CryptoVentures Capital
                <span className="block text-2xl font-['Inter'] font-light text-purple-200 mt-2">Institutional Blockchain Investment Firm</span>
              </h1>
            </div>
          </div>
          <div className="relative inline-block">
            <div className="text-5xl font-black bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 bg-clip-text text-transparent mb-6 font-['Inter']">
              $12.5M Raised in 6 Days
            </div>
            <div className="absolute -top-2 -left-2 w-full h-full bg-gradient-to-r from-green-400 to-teal-500 rounded-lg blur-xl opacity-30"></div>
          </div>
          <p className="text-2xl text-purple-100 font-['Inter'] font-light max-w-4xl mx-auto leading-relaxed">
            How CryptoVentures Capital revolutionized institutional blockchain investments through strategic ICO methodology, achieving unprecedented capital acquisition without equity dilution
          </p>
        </div>

        {/* Premium Hero Image */}
        <div className="mb-20 relative group">
          <img 
            src="https://readdy.ai/api/search-image?query=Ultra-modern%20blockchain%20investment%20headquarters%20with%20floor-to-ceiling%20windows%20overlooking%20city%20skyline%2C%20sophisticated%20cryptocurrency%20trading%20floor%20with%20holographic%20displays%2C%20professional%20team%20celebrating%20successful%20ICO%20launch%2C%20premium%20office%20design%20with%20digital%20art%20installations%2C%20futuristic%20financial%20technology%20environment&width=1400&height=700&seq=cryptoventures_premium_hero&orientation=landscape"
            alt="CryptoVentures Capital Headquarters"
            className="w-full h-[28rem] object-cover object-top rounded-3xl shadow-2xl transition-all duration-700 group-hover:shadow-3xl group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
          <div className="absolute bottom-6 left-6 right-6">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white font-['Inter'] mb-2">CryptoVentures Capital Global Headquarters</h3>
              <p className="text-purple-200 font-['Inter']">Singapore's Premier Blockchain Investment Hub</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-16">
          {/* Enhanced Main Content */}
          <div className="lg:col-span-2 space-y-16">
            {/* Executive Summary */}
            <div className="bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/20 shadow-2xl">
              <h2 className="text-4xl font-bold text-white mb-8 font-['Playfair_Display']">Executive Summary</h2>
              <div className="space-y-6 text-gray-100 font-['Inter'] text-lg leading-relaxed">
                <p className="text-xl font-light leading-relaxed">
                  <span className="font-semibold text-yellow-400">CryptoVentures Capital</span>, established in 2021 by former Goldman Sachs executives, emerged as Singapore's leading institutional blockchain investment firm. Managing a diverse portfolio of 47 DeFi protocols, 23 NFT marketplaces, and 15 Layer-2 solutions, they commanded assets worth $1.8 billion across multiple blockchain ecosystems.
                </p>
                <p className="leading-relaxed">
                  Under the visionary leadership of CEO <span className="font-semibold text-blue-400">Michael Wang</span> (former JPMorgan Blockchain Lead) and CTO <span className="font-semibold text-purple-400">Sarah Kim</span> (ex-Ethereum Foundation), the firm pioneered institutional-grade cryptocurrency investment strategies. Their proprietary AI-driven analysis platform processed over 50,000 blockchain transactions daily, identifying alpha opportunities in emerging protocols.
                </p>
                <p className="leading-relaxed">
                  By Q3 2023, explosive growth in the DeFi sector created unprecedented investment opportunities. However, traditional venture capital routes proved insufficient for the speed required in cryptocurrency markets. The firm needed rapid capital deployment capabilities while maintaining their commitment to stakeholder equity preservation.
                </p>
              </div>
            </div>

            {/* Comprehensive Challenge Analysis */}
            <div className="bg-gradient-to-br from-red-900/20 via-red-800/15 to-red-700/10 backdrop-blur-xl rounded-3xl p-10 border border-red-400/30 shadow-2xl">
              <h2 className="text-4xl font-bold text-white mb-8 font-['Playfair_Display']">Strategic Challenges & Market Pressures</h2>
              <div className="space-y-8">
                <p className="text-gray-100 font-['Inter'] text-lg leading-relaxed mb-8">
                  The cryptocurrency investment landscape of late 2023 presented unique challenges that traditional funding mechanisms couldn't address effectively:
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-red-300 font-['Inter'] mb-4">Market Timing Pressures</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4 p-4 bg-red-500/10 rounded-2xl border border-red-400/20">
                        <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <i className="ri-time-line text-red-400"></i>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white font-['Inter']">48-Hour Investment Windows</h4>
                          <p className="text-gray-200 text-sm">Prime DeFi opportunities required immediate capital deployment</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 bg-red-500/10 rounded-2xl border border-red-400/20">
                        <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <i className="ri-speed-line text-red-400"></i>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white font-['Inter']">Rapid Market Evolution</h4>
                          <p className="text-gray-200 text-sm">New protocols launching daily with first-mover advantages</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 bg-red-500/10 rounded-2xl border border-red-400/20">
                        <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <i className="ri-trophy-line text-red-400"></i>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white font-['Inter']">Competitive Disadvantage</h4>
                          <p className="text-gray-200 text-sm">Rivals with faster funding secured premium deal flow</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-red-300 font-['Inter'] mb-4">Capital Structure Constraints</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4 p-4 bg-red-500/10 rounded-2xl border border-red-400/20">
                        <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <i className="ri-pie-chart-line text-red-400"></i>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white font-['Inter']">Equity Dilution Demands</h4>
                          <p className="text-gray-200 text-sm">VCs requiring 25-35% ownership for significant investments</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 bg-red-500/10 rounded-2xl border border-red-400/20">
                        <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <i className="ri-file-text-line text-red-400"></i>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white font-['Inter']">Restrictive Term Sheets</h4>
                          <p className="text-gray-200 text-sm">90-day due diligence processes incompatible with crypto speed</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 bg-red-500/10 rounded-2xl border border-red-400/20">
                        <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <i className="ri-lock-line text-red-400"></i>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white font-['Inter']">Board Control Requirements</h4>
                          <p className="text-gray-200 text-sm">External investors demanding operational oversight</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Revolutionary Solution Framework */}
            <div className="bg-gradient-to-br from-green-900/20 via-green-800/15 to-emerald-700/10 backdrop-blur-xl rounded-3xl p-10 border border-green-400/30 shadow-2xl">
              <h2 className="text-4xl font-bold text-white mb-8 font-['Playfair_Display']">Jakaria Inc Revolutionary Solution Framework</h2>
              <div className="space-y-8">
                <p className="text-gray-100 font-['Inter'] text-lg leading-relaxed">
                  Our team engineered a comprehensive ICO ecosystem specifically designed for institutional blockchain firms, combining traditional finance sophistication with cryptocurrency market dynamics. The solution integrated regulatory compliance, investor relations, and automated capital deployment mechanisms.
                </p>
                
                <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl p-8 border border-blue-400/30">
                  <h3 className="text-2xl font-bold text-white mb-6 font-['Inter']">🚀 Institutional-Grade Token Architecture</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                          <i className="ri-check-line text-green-400"></i>
                        </div>
                        <span className="text-gray-100 font-['Inter']">ERC-20 utility token with governance rights</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                          <i className="ri-check-line text-green-400"></i>
                        </div>
                        <span className="text-gray-100 font-['Inter']">Multi-signature treasury management</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                          <i className="ri-check-line text-green-400"></i>
                        </div>
                        <span className="text-gray-100 font-['Inter']">Automated profit-sharing mechanisms</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                          <i className="ri-check-line text-green-400"></i>
                        </div>
                        <span className="text-gray-100 font-['Inter']">Anti-whale protection algorithms</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                          <i className="ri-check-line text-green-400"></i>
                        </div>
                        <span className="text-gray-100 font-['Inter']">Staking rewards for long-term holders</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                          <i className="ri-check-line text-green-400"></i>
                        </div>
                        <span className="text-gray-100 font-['Inter']">Regulatory compliance frameworks</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl p-8 border border-purple-400/30">
                  <h3 className="text-2xl font-bold text-white mb-6 font-['Inter']">📊 Advanced Marketing & Distribution</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center p-4 bg-white/5 rounded-2xl">
                      <div className="text-3xl font-bold text-purple-400 mb-2">47</div>
                      <div className="text-purple-200 font-['Inter']">Institutional Investors</div>
                    </div>
                    <div className="text-center p-4 bg-white/5 rounded-2xl">
                      <div className="text-3xl font-bold text-blue-400 mb-2">12</div>
                      <div className="text-purple-200 font-['Inter']">Marketing Channels</div>
                    </div>
                    <div className="text-center p-4 bg-white/5 rounded-2xl">
                      <div className="text-3xl font-bold text-green-400 mb-2">85%</div>
                      <div className="text-purple-200 font-['Inter']">Pre-Sale Success</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Day-by-Day Launch Chronicle */}
            <div className="bg-gradient-to-br from-blue-900/20 via-blue-800/15 to-indigo-700/10 backdrop-blur-xl rounded-3xl p-10 border border-blue-400/30 shadow-2xl">
              <h2 className="text-4xl font-bold text-white mb-8 font-['Playfair_Display']">6-Day Launch Chronicle</h2>
              <div className="space-y-10">
                {[
                  {
                    day: "Day 1",
                    title: "Strategic Foundation & Architecture",
                    time: "Monday, 6:00 AM - 11:59 PM",
                    description: "Comprehensive business analysis, tokenomics architecture design, and regulatory framework establishment.",
                    details: [
                      "Executive strategy session with Michael Wang & Sarah Kim",
                      "Tokenomics modeling with 1M CVC token supply",
                      "Smart contract architecture planning",
                      "Legal compliance documentation preparation"
                    ],
                    color: "blue",
                    icon: "ri-lightbulb-line"
                  },
                  {
                    day: "Days 2-3",
                    title: "Development & Documentation Sprint",
                    time: "Tuesday-Wednesday, 48-Hour Intensive",
                    description: "Smart contract development, professional documentation creation, and security audit preparation.",
                    details: [
                      "ERC-20 token smart contract development & testing",
                      "75-page institutional whitepaper creation",
                      "Professional pitch deck with financial projections",
                      "Third-party security audit initiation"
                    ],
                    color: "purple",
                    icon: "ri-code-s-slash-line"
                  },
                  {
                    day: "Days 4-5",
                    title: "Marketing Orchestration & Pre-Sale",
                    time: "Thursday-Friday, Global Campaign",
                    description: "Multi-channel marketing campaign execution and institutional investor outreach coordination.",
                    details: [
                      "47 institutional investor presentations",
                      "Bloomberg Terminal syndication",
                      "CoinDesk & CryptoSlate media coverage",
                      "Private investor telegram community (2,400 members)"
                    ],
                    color: "green",
                    icon: "ri-megaphone-line"
                  },
                  {
                    day: "Day 6",
                    title: "Launch & Capital Achievement",
                    time: "Saturday, 12:00 PM SGT",
                    description: "ICO launch execution with real-time monitoring and successful $12.5M target achievement.",
                    details: [
                      "ICO launch on Ethereum mainnet",
                      "$12.5M raised in 14 hours 37 minutes",
                      "2,847 individual investors participated",
                      "Real-time treasury management activation"
                    ],
                    color: "yellow",
                    icon: "ri-trophy-line"
                  }
                ].map((phase, index) => (
                  <div key={index} className={`relative flex items-start gap-8 p-8 bg-gradient-to-r from-${phase.color}-500/10 to-${phase.color}-600/5 rounded-3xl border border-${phase.color}-400/20`}>
                    <div className={`w-16 h-16 bg-${phase.color}-500/20 rounded-full flex items-center justify-center border border-${phase.color}-400 flex-shrink-0`}>
                      <i className={`${phase.icon} text-${phase.color}-400 text-2xl`}></i>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <h3 className="text-2xl font-bold text-white font-['Inter']">{phase.day}: {phase.title}</h3>
                        <span className={`px-3 py-1 bg-${phase.color}-500/20 text-${phase.color}-300 rounded-full text-sm font-medium`}>
                          {phase.time}
                        </span>
                      </div>
                      <p className="text-gray-100 font-['Inter'] text-lg mb-6 leading-relaxed">{phase.description}</p>
                      <div className="grid md:grid-cols-2 gap-3">
                        {phase.details.map((detail, idx) => (
                          <div key={idx} className="flex items-start gap-3 p-3 bg-white/5 rounded-xl">
                            <div className={`w-6 h-6 bg-${phase.color}-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                              <i className="ri-check-line text-xs text-green-400"></i>
                            </div>
                            <span className="text-gray-200 font-['Inter'] text-sm">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Comprehensive Results Analysis */}
            <div className="bg-gradient-to-br from-emerald-900/20 via-green-800/15 to-teal-700/10 backdrop-blur-xl rounded-3xl p-10 border border-emerald-400/30 shadow-2xl">
              <h2 className="text-4xl font-bold text-white mb-8 font-['Playfair_Display']">Transformational Results & Impact Analysis</h2>
              <div className="space-y-8">
                <div className="grid md:grid-cols-2 gap-10">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6 font-['Inter']">🎯 Fundraising Excellence</h3>
                    <div className="space-y-4">
                      {[
                        { metric: "Total Capital Raised", value: "$12.5M", change: "vs $8M target", color: "green" },
                        { metric: "Launch Timeline", value: "6 Days", change: "vs 90-day VC average", color: "blue" },
                        { metric: "Investor Participation", value: "2,847", change: "+340% vs projection", color: "purple" },
                        { metric: "Token Price Appreciation", value: "+340%", change: "First month performance", color: "yellow" }
                      ].map((item, idx) => (
                        <div key={idx} className={`flex justify-between items-center p-4 bg-${item.color}-500/10 rounded-2xl border border-${item.color}-400/20`}>
                          <span className="text-gray-100 font-['Inter'] font-medium">{item.metric}</span>
                          <div className="text-right">
                            <div className={`text-${item.color}-400 font-bold text-xl`}>{item.value}</div>
                            <div className="text-gray-300 text-sm">{item.change}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6 font-['Inter']">📈 Business Transformation</h3>
                    <div className="space-y-4">
                      {[
                        { metric: "Portfolio Expansion", value: "12 New Investments", change: "Within 30 days", color: "green" },
                        { metric: "AUM Growth", value: "+285%", change: "From $1.8B to $5.13B", color: "blue" },
                        { metric: "Team Scaling", value: "+45 Professionals", change: "Global talent acquisition", color: "purple" },
                        { metric: "Market Coverage", value: "8 New Blockchains", change: "Multi-chain expansion", color: "yellow" }
                      ].map((item, idx) => (
                        <div key={idx} className={`flex justify-between items-center p-4 bg-${item.color}-500/10 rounded-2xl border border-${item.color}-400/20`}>
                          <span className="text-gray-100 font-['Inter'] font-medium">{item.metric}</span>
                          <div className="text-right">
                            <div className={`text-${item.color}-400 font-bold text-xl`}>{item.value}</div>
                            <div className="text-gray-300 text-sm">{item.change}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Premium Sidebar */}
          <div className="space-y-10">
            {/* Executive Testimonial */}
            <div className="bg-gradient-to-br from-yellow-500/20 to-orange-600/20 backdrop-blur-xl rounded-3xl p-8 border border-yellow-400/30 shadow-2xl">
              <div className="flex items-center mb-8">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mr-6 shadow-2xl">
                    <span className="text-white font-bold text-2xl font-['Inter']">MW</span>
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white font-['Playfair_Display']">Michael Wang</h3>
                  <p className="text-yellow-200 font-['Inter'] font-medium">CEO & Founder</p>
                  <p className="text-yellow-300 text-sm font-['Inter']">Former Goldman Sachs VP</p>
                </div>
              </div>
              <blockquote className="text-gray-100 font-['Inter'] italic text-lg leading-relaxed mb-6 relative">
                <span className="text-6xl text-yellow-400/30 absolute -top-4 -left-2">"</span>
                <span className="relative z-10">
                  Jakaria Inc delivered the impossible - $12.5M in 6 days with zero equity dilution. Their institutional-grade approach, dedicated blockchain development team, and transparent 24/7 support system transformed our capital strategy. This wasn't just fundraising; it was a complete business evolution that positioned us as the leading blockchain investment firm in Southeast Asia.
                </span>
                <span className="text-6xl text-yellow-400/30 absolute -bottom-8 -right-2">"</span>
              </blockquote>
              <div className="flex items-center justify-between">
                <div className="text-yellow-400 font-semibold flex items-center gap-2">
                  {[1,2,3,4,5].map(star => (
                    <i key={star} className="ri-star-fill text-lg"></i>
                  ))}
                  <span className="ml-2">5/5 Excellence Rating</span>
                </div>
                <div className="text-right">
                  <div className="text-yellow-300 text-sm">Verified Client</div>
                  <div className="text-yellow-400 text-xs">November 2023</div>
                </div>
              </div>
            </div>

            {/* Advanced Metrics Dashboard */}
            <div className="bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
              <h3 className="text-3xl font-bold text-white mb-8 font-['Playfair_Display']">Performance Metrics</h3>
              <div className="space-y-8">
                {[
                  { value: "$12.5M", label: "Capital Raised", icon: "ri-money-dollar-circle-line", color: "green" },
                  { value: "6", label: "Days to Success", icon: "ri-time-line", color: "blue" },
                  { value: "100%", label: "Equity Retained", icon: "ri-shield-check-line", color: "purple" },
                  { value: "2,847", label: "Investors", icon: "ri-group-line", color: "yellow" }
                ].map((metric, idx) => (
                  <div key={idx} className="text-center relative group">
                    <div className={`w-16 h-16 bg-${metric.color}-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <i className={`${metric.icon} text-${metric.color}-400 text-2xl`}></i>
                    </div>
                    <div className={`text-4xl font-black text-${metric.color}-400 mb-2 font-['Inter']`}>{metric.value}</div>
                    <div className="text-purple-200 font-['Inter'] font-medium">{metric.label}</div>
                    <div className={`h-1 bg-gradient-to-r from-${metric.color}-400 to-${metric.color}-600 rounded-full mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Company Profile */}
            <div className="bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
              <h3 className="text-3xl font-bold text-white mb-8 font-['Playfair_Display']">Company Profile</h3>
              <div className="space-y-6">
                {[
                  { label: "Industry Sector", value: "Institutional Blockchain Investment", icon: "ri-building-line" },
                  { label: "Establishment", value: "2021 (Singapore)", icon: "ri-calendar-line" },
                  { label: "Global Workforce", value: "127+ Professionals", icon: "ri-team-line" },
                  { label: "Headquarters", value: "Marina Bay, Singapore", icon: "ri-map-pin-line" },
                  { label: "Assets Under Management", value: "$5.13B+ Multi-Chain", icon: "ri-funds-line" },
                  { label: "Portfolio Projects", value: "85+ Active Investments", icon: "ri-pie-chart-line" },
                  { label: "Blockchain Coverage", value: "12 Major Networks", icon: "ri-link-m-line" },
                  { label: "Regulatory Status", value: "MAS Compliant", icon: "ri-shield-check-line" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <i className={`${item.icon} text-white text-lg`}></i>
                      </div>
                      <span className="text-purple-200 font-['Inter'] font-medium">{item.label}:</span>
                    </div>
                    <span className="text-white font-semibold font-['Inter'] text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Premium Call to Action */}
        <div className="text-center mt-20">
          <h2 className="text-5xl font-bold text-white mb-6 font-['Playfair_Display']">Ready to Revolutionize Your Capital Strategy?</h2>
          <p className="text-xl text-purple-200 font-['Inter'] font-light mb-12 max-w-3xl mx-auto">
            Join the ranks of successful institutional firms who've achieved unprecedented growth through our proven ICO methodology
          </p>
          <div className="inline-flex items-center gap-6">
            <button className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 hover:from-teal-500 hover:via-blue-600 hover:to-purple-700 text-white font-bold py-5 px-10 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 font-['Inter'] whitespace-nowrap text-lg">
              <i className="ri-rocket-line mr-3 text-xl"></i>
              Launch Your ICO Journey
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white font-semibold py-5 px-10 rounded-full border-2 border-white/30 hover:border-white/50 shadow-2xl transition-all duration-500 backdrop-blur-lg font-['Inter'] whitespace-nowrap text-lg group">
              <i className="ri-phone-line mr-3 text-xl group-hover:animate-pulse"></i>
              Executive Strategy Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}