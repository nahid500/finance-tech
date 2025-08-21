'use client';

import Link from 'next/link';

export default function DeFiMaxProtocolStory() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-teal-700 relative overflow-hidden">
      {/* Advanced animated background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-128 h-128 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Elegant Navigation */}
        <div className="mb-8">
          <Link href="/" className="text-purple-200 hover:text-white transition-all duration-500 flex items-center gap-3 font-['Inter'] font-medium tracking-wide group">
            <i className="ri-arrow-left-line text-xl group-hover:transform group-hover:-translate-x-1 transition-transform duration-300"></i>
            <span className="relative">
              Back to Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-500"></span>
            </span>
          </Link>
        </div>

        {/* Premium Header Design */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-10">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-600 rounded-full flex items-center justify-center mr-8 shadow-2xl animate-pulse">
                <i className="ri-exchange-line text-white text-4xl"></i>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-600 blur-lg opacity-50 animate-ping"></div>
              </div>
            </div>
            <div className="text-left">
              <h1 className="text-6xl font-bold text-white font-['Playfair_Display'] tracking-tight leading-tight">
                DeFiMax Protocol
                <span className="block text-2xl font-['Inter'] font-light text-blue-200 mt-2">Next-Generation DeFi Ecosystem Platform</span>
              </h1>
            </div>
          </div>
          <div className="relative inline-block">
            <div className="text-5xl font-black bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600 bg-clip-text text-transparent mb-6 font-['Inter']">
              500% Token Growth in First Month
            </div>
            <div className="absolute -top-2 -left-2 w-full h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg blur-xl opacity-30"></div>
          </div>
          <p className="text-2xl text-purple-100 font-['Inter'] font-light max-w-4xl mx-auto leading-relaxed">
            How DeFiMax Protocol revolutionized decentralized finance through complete ecosystem development, achieving unprecedented token appreciation and sustainable TVL growth
          </p>
        </div>

        {/* Premium Hero Image */}
        <div className="mb-20 relative group">
          <img 
            src="https://readdy.ai/api/search-image?query=Futuristic%20DeFi%20protocol%20headquarters%20with%20holographic%20displays%20showing%20yield%20farming%20data%2C%20sophisticated%20blockchain%20developers%20working%20on%20decentralized%20finance%20platforms%2C%20modern%20fintech%20laboratory%20with%20multiple%20screens%20displaying%20TVL%20metrics%20and%20token%20analytics%2C%20cutting-edge%20cryptocurrency%20ecosystem%20development%20center&width=1400&height=700&seq=defimax_premium_hero&orientation=landscape"
            alt="DeFiMax Protocol Development Center"
            className="w-full h-[28rem] object-cover object-top rounded-3xl shadow-2xl transition-all duration-700 group-hover:shadow-3xl group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
          <div className="absolute bottom-6 left-6 right-6">
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl rounded-2xl p-6 border border-blue-400/30">
              <h3 className="text-xl font-bold text-white font-['Inter'] mb-2 flex items-center gap-2">
                <i className="ri-exchange-line text-blue-400"></i>
                DeFiMax Protocol Innovation Center
              </h3>
              <p className="text-blue-200 font-['Inter']">$18.5M Total Value Locked Achievement</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-16">
          {/* Enhanced Main Content */}
          <div className="lg:col-span-2 space-y-16">
            {/* Visionary Leadership & Project Genesis */}
            <div className="bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/20 shadow-2xl">
              <h2 className="text-4xl font-bold text-white mb-8 font-['Playfair_Display']">Visionary Leadership & Project Genesis</h2>
              <div className="space-y-6 text-gray-100 font-['Inter'] text-lg leading-relaxed">
                <div className="flex items-start gap-6 p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl border border-purple-400/20">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-2xl font-['Inter']">SR</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3 font-['Inter']">Sarah Rodriguez - DeFi Visionary</h3>
                    <p className="text-gray-200 leading-relaxed">
                      <span className="font-semibold text-purple-400">Former Goldman Sachs Quantitative Analyst</span><br/>
                      <span className="font-semibold text-purple-400">MIT Computer Science & Finance Double Major</span><br/>
                      <span className="font-semibold text-purple-400">5 Years Traditional Finance + 3 Years Blockchain</span><br/>
                      <span className="font-semibold text-purple-400">Author of "Democratic Finance Revolution" (2022)</span>
                    </p>
                  </div>
                </div>
                
                <p className="text-xl font-light leading-relaxed">
                  Sarah's revolutionary vision emerged from a profound frustration with traditional finance's gatekeeping mechanisms. Having witnessed how sophisticated financial instruments remained exclusive to institutional players, she recognized blockchain's potential to democratize access to advanced yield strategies, liquidity mining, and governance participation.
                </p>
                
                <p className="leading-relaxed">
                  DeFiMax Protocol was conceived as the "Goldman Sachs of DeFi" - a comprehensive ecosystem that would combine the sophistication of traditional finance with the accessibility of decentralized systems. The protocol aimed to offer institutional-grade yield farming, automated portfolio rebalancing, and risk management tools accessible to anyone with a wallet.
                </p>
                
                <div className="bg-gradient-to-r from-blue-500/10 to-teal-500/10 rounded-2xl p-6 border border-blue-400/20">
                  <h4 className="text-xl font-bold text-white mb-4 font-['Inter']">🎯 Protocol Vision Statement</h4>
                  <blockquote className="text-lg italic text-blue-300 leading-relaxed">
                    "To create a comprehensive DeFi ecosystem that democratizes access to sophisticated financial instruments while maintaining institutional-level security and performance standards. Every user, regardless of portfolio size, deserves access to advanced yield optimization, risk management, and governance participation."
                  </blockquote>
                </div>
              </div>
            </div>

            {/* Complex DeFi Development Challenges */}
            <div className="bg-gradient-to-br from-red-900/20 via-red-800/15 to-red-700/10 backdrop-blur-xl rounded-3xl p-10 border border-red-400/30 shadow-2xl">
              <h2 className="text-4xl font-bold text-white mb-8 font-['Playfair_Display']">Complex DeFi Development Challenges</h2>
              <div className="space-y-8">
                <p className="text-gray-100 font-['Inter'] text-lg leading-relaxed mb-8">
                  Building a comprehensive DeFi protocol requires solving multiple interconnected technical, economic, and security challenges simultaneously:
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-red-300 font-['Inter'] mb-4">⚡ Technical Architecture Complexity</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4 p-4 bg-red-500/10 rounded-2xl border border-red-400/20">
                        <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <i className="ri-code-s-slash-line text-red-400"></i>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white font-['Inter']">Multi-Layer Smart Contract Architecture</h4>
                          <p className="text-gray-200 text-sm">Yield farming, governance, treasury, and security modules requiring seamless integration</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 bg-red-500/10 rounded-2xl border border-red-400/20">
                        <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <i className="ri-shield-keyhole-line text-red-400"></i>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white font-['Inter']">Multi-Signature Security Implementation</h4>
                          <p className="text-gray-200 text-sm">Complex treasury management with time-locked upgrades and emergency protocols</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 bg-red-500/10 rounded-2xl border border-red-400/20">
                        <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <i className="ri-global-line text-red-400"></i>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white font-['Inter']">Cross-Chain Compatibility Requirements</h4>
                          <p className="text-gray-200 text-sm">Multi-blockchain deployment with unified liquidity and governance mechanisms</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-red-300 font-['Inter'] mb-4">📊 Economic Model Complexity</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4 p-4 bg-red-500/10 rounded-2xl border border-red-400/20">
                        <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <i className="ri-pie-chart-line text-red-400"></i>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white font-['Inter']">Sustainable Tokenomics Design</h4>
                          <p className="text-gray-200 text-sm">Balancing token utility, governance, rewards, and long-term value accrual</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 bg-red-500/10 rounded-2xl border border-red-400/20">
                        <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <i className="ri-funds-line text-red-400"></i>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white font-['Inter']">Yield Strategy Optimization</h4>
                          <p className="text-gray-200 text-sm">Dynamic yield farming algorithms adapting to market conditions</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 bg-red-500/10 rounded-2xl border border-red-400/20">
                        <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <i className="ri-government-line text-red-400"></i>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white font-['Inter']">Governance Mechanism Design</h4>
                          <p className="text-gray-200 text-sm">Decentralized decision-making with protection against governance attacks</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-2xl p-6 border border-orange-400/20">
                  <h4 className="text-xl font-bold text-white mb-4 font-['Inter']">🚨 Critical Launch Requirements</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-white/5 rounded-xl">
                      <div className="text-2xl font-bold text-orange-400 mb-2">$2M+</div>
                      <div className="text-orange-300 text-sm">Minimum TVL for Credibility</div>
                    </div>
                    <div className="text-center p-4 bg-white/5 rounded-xl">
                      <div className="text-2xl font-bold text-red-400 mb-2">5+</div>
                      <div className="text-red-300 text-sm">Security Audits Required</div>
                    </div>
                    <div className="text-center p-4 bg-white/5 rounded-xl">
                      <div className="text-2xl font-bold text-yellow-400 mb-2">1,000+</div>
                      <div className="text-yellow-300 text-sm">Active Users for Network Effects</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Revolutionary DeFi Ecosystem Solution */}
            <div className="bg-gradient-to-br from-green-900/20 via-green-800/15 to-emerald-700/10 backdrop-blur-xl rounded-3xl p-10 border border-green-400/30 shadow-2xl">
              <h2 className="text-4xl font-bold text-white mb-8 font-['Playfair_Display']">Jakaria Inc Complete DeFi Ecosystem Solution</h2>
              <div className="space-y-8">
                <p className="text-gray-100 font-['Inter'] text-lg leading-relaxed">
                  Our team delivered a comprehensive DeFi ecosystem combining advanced tokenomics, multi-layer smart contracts, security audits, and community building within our signature 7-day timeframe. The solution integrated institutional-grade features with retail accessibility.
                </p>
                
                <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl p-8 border border-blue-400/30">
                  <h3 className="text-2xl font-bold text-white mb-6 font-['Inter']">🚀 Multi-Protocol DeFi Architecture</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                          <i className="ri-check-line text-green-400"></i>
                        </div>
                        <span className="text-gray-100 font-['Inter']">Advanced yield farming with auto-compounding</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                          <i className="ri-check-line text-green-400"></i>
                        </div>
                        <span className="text-gray-100 font-['Inter']">Multi-pool liquidity mining algorithms</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                          <i className="ri-check-line text-green-400"></i>
                        </div>
                        <span className="text-gray-100 font-['Inter']">Dynamic APY optimization engine</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                          <i className="ri-check-line text-green-400"></i>
                        </div>
                        <span className="text-gray-100 font-['Inter']">Impermanent loss protection mechanisms</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                          <i className="ri-check-line text-green-400"></i>
                        </div>
                        <span className="text-gray-100 font-['Inter']">Decentralized governance DAO framework</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                          <i className="ri-check-line text-green-400"></i>
                        </div>
                        <span className="text-gray-100 font-['Inter']">Cross-chain bridge integration</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                          <i className="ri-check-line text-green-400"></i>
                        </div>
                        <span className="text-gray-100 font-['Inter']">Automated portfolio rebalancing</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                          <i className="ri-check-line text-green-400"></i>
                        </div>
                        <span className="text-gray-100 font-['Inter']">Enterprise-grade security protocols</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl p-8 border border-purple-400/30">
                  <h3 className="text-2xl font-bold text-white mb-6 font-['Inter']">🔒 Advanced Security & Audit Framework</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center p-4 bg-white/5 rounded-2xl">
                      <div className="text-3xl font-bold text-purple-400 mb-2">5</div>
                      <div className="text-purple-200 font-['Inter']">Independent Audits</div>
                      <div className="text-gray-300 text-sm mt-1">ConsenSys, Trail of Bits, etc.</div>
                    </div>
                    <div className="text-center p-4 bg-white/5 rounded-2xl">
                      <div className="text-3xl font-bold text-blue-400 mb-2">7/7</div>
                      <div className="text-purple-200 font-['Inter']">Multi-Sig Security</div>
                      <div className="text-gray-300 text-sm mt-1">Council governance</div>
                    </div>
                    <div className="text-center p-4 bg-white/5 rounded-2xl">
                      <div className="text-3xl font-bold text-green-400 mb-2">48hr</div>
                      <div className="text-purple-200 font-['Inter']">Timelock Delays</div>
                      <div className="text-gray-300 text-sm mt-1">Emergency protection</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 7-Day Complete DeFi Ecosystem Launch */}
            <div className="bg-gradient-to-br from-yellow-900/20 via-orange-800/15 to-red-700/10 backdrop-blur-xl rounded-3xl p-10 border border-yellow-400/30 shadow-2xl">
              <h2 className="text-4xl font-bold text-white mb-8 font-['Playfair_Display']">7-Day Complete DeFi Ecosystem Launch</h2>
              <div className="space-y-10">
                {[
                  {
                    day: "Day 1",
                    title: "Architecture Design & Tokenomics Modeling",
                    time: "Monday, 6:00 AM - 11:59 PM",
                    description: "Comprehensive system architecture design and advanced tokenomics modeling with economic sustainability analysis.",
                    deliverables: [
                      "Complete DeFi protocol architecture blueprint",
                      "DMAX tokenomics with 100M supply distribution",
                      "Multi-pool yield farming strategy framework",
                      "Governance mechanism design specification"
                    ],
                    color: "blue",
                    icon: "ri-blueprint-line"
                  },
                  {
                    day: "Day 2-3",
                    title: "Smart Contract Development & Testing",
                    time: "Tuesday-Wednesday, 48-Hour Sprint",
                    description: "Multi-layer smart contract development with comprehensive testing and optimization protocols.",
                    deliverables: [
                      "Core protocol smart contracts (Yield, Governance, Treasury)",
                      "Comprehensive unit and integration test suites",
                      "Gas optimization and performance benchmarking",
                      "Initial security vulnerability assessment"
                    ],
                    color: "purple",
                    icon: "ri-code-s-slash-line"
                  },
                  {
                    day: "Day 4",
                    title: "Security Audits & Multi-Sig Setup",
                    time: "Thursday, Security Focus Day",
                    description: "Professional security audits, multi-signature wallet configuration, and emergency protocol implementation.",
                    deliverables: [
                      "Independent smart contract security audits",
                      "7/11 multi-signature treasury configuration",
                      "Emergency pause and upgrade mechanisms",
                      "Timelock contract deployment and testing"
                    ],
                    color: "green",
                    icon: "ri-shield-check-line"
                  },
                  {
                    day: "Day 5-6",
                    title: "Community Building & Liquidity Bootstrap",
                    time: "Friday-Saturday, Community Launch",
                    description: "Strategic community building, initial liquidity provision, and governance token distribution.",
                    deliverables: [
                      "Discord & Telegram community establishment",
                      "Initial DEX liquidity provision ($500K)",
                      "Community governance token airdrop",
                      "Documentation and tutorial creation"
                    ],
                    color: "yellow",
                    icon: "ri-community-line"
                  },
                  {
                    day: "Day 7",
                    title: "Protocol Launch & TVL Achievement",
                    time: "Sunday, Ecosystem Activation",
                    description: "Full protocol launch with yield farming activation and immediate TVL growth achievement.",
                    deliverables: [
                      "Complete DeFi protocol live deployment",
                      "$18.5M TVL achieved within 24 hours",
                      "8,200 active users onboarded",
                      "500% token appreciation milestone"
                    ],
                    color: "green",
                    icon: "ri-rocket-line"
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
                        {phase.deliverables.map((deliverable, idx) => (
                          <div key={idx} className="flex items-start gap-3 p-3 bg-white/5 rounded-xl">
                            <div className={`w-6 h-6 bg-${phase.color}-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                              <i className="ri-check-line text-xs text-green-400"></i>
                            </div>
                            <span className="text-gray-200 font-['Inter'] text-sm">{deliverable}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Comprehensive Success Metrics & Growth Analysis */}
            <div className="bg-gradient-to-br from-emerald-900/20 via-green-800/15 to-teal-700/10 backdrop-blur-xl rounded-3xl p-10 border border-emerald-400/30 shadow-2xl">
              <h2 className="text-4xl font-bold text-white mb-8 font-['Playfair_Display']">Ecosystem Success Metrics & Growth Analysis</h2>
              <div className="space-y-8">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center p-6 bg-gradient-to-br from-green-500/20 to-emerald-600/20 rounded-3xl border border-green-400/30">
                    <div className="text-4xl font-black text-green-400 mb-3 font-['Inter']">500%</div>
                    <div className="text-white font-semibold mb-2 font-['Inter']">Token Growth</div>
                    <div className="text-green-300 text-sm">First month performance</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-blue-500/20 to-cyan-600/20 rounded-3xl border border-blue-400/30">
                    <div className="text-4xl font-black text-blue-400 mb-3 font-['Inter']">$18.5M</div>
                    <div className="text-white font-semibold mb-2 font-['Inter']">TVL Locked</div>
                    <div className="text-blue-300 text-sm">Peak ecosystem value</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-3xl border border-purple-400/30">
                    <div className="text-4xl font-black text-purple-400 mb-3 font-['Inter']">8,200</div>
                    <div className="text-white font-semibold mb-2 font-['Inter']">Active Users</div>
                    <div className="text-purple-300 text-sm">Daily protocol interaction</div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6 font-['Inter']">🎯 Protocol Performance Metrics</h3>
                    <div className="space-y-4">
                      {[
                        { metric: "DMAX Token Launch Price", value: "$0.08", detail: "Initial DEX offering", color: "green" },
                        { metric: "Month 1 Peak Price", value: "$0.48", detail: "500% appreciation", color: "blue" },
                        { metric: "Total Value Locked (TVL)", value: "$18.5M", detail: "Cross-platform deposits", color: "purple" },
                        { metric: "Daily Transaction Volume", value: "$2.3M", detail: "Peak trading activity", color: "yellow" },
                        { metric: "Yield Farming APY", value: "145%", detail: "Averaged across pools", color: "pink" },
                        { metric: "Governance Participation", value: "67%", detail: "Token holder voting", color: "cyan" }
                      ].map((item, idx) => (
                        <div key={idx} className={`flex justify-between items-center p-4 bg-${item.color}-500/10 rounded-2xl border border-${item.color}-400/20`}>
                          <span className="text-gray-100 font-['Inter'] font-medium">{item.metric}</span>
                          <div className="text-right">
                            <div className={`text-${item.color}-400 font-bold text-xl`}>{item.value}</div>
                            <div className="text-gray-300 text-sm">{item.detail}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6 font-['Inter']">📈 Community & Ecosystem Growth</h3>
                    <div className="space-y-4">
                      {[
                        { metric: "Discord Community", value: "25,000", detail: "Active members", color: "indigo" },
                        { metric: "Twitter Followers", value: "48,000", detail: "Organic growth", color: "blue" },
                        { metric: "Medium Articles", value: "150+", detail: "Educational content", color: "green" },
                        { metric: "GitHub Contributors", value: "23", detail: "Open source development", color: "purple" },
                        { metric: "Partnership Protocols", value: "12", detail: "Integration partnerships", color: "orange" },
                        { metric: "Security Audits Passed", value: "5/5", detail: "Zero vulnerabilities", color: "green" }
                      ].map((item, idx) => (
                        <div key={idx} className={`flex justify-between items-center p-4 bg-${item.color}-500/10 rounded-2xl border border-${item.color}-400/20`}>
                          <span className="text-gray-100 font-['Inter'] font-medium">{item.metric}</span>
                          <div className="text-right">
                            <div className={`text-${item.color}-400 font-bold text-xl`}>{item.value}</div>
                            <div className="text-gray-300 text-sm">{item.detail}</div>
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
            {/* Sarah's Detailed Testimonial */}
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 backdrop-blur-xl rounded-3xl p-8 border border-blue-400/30 shadow-2xl">
              <div className="flex items-center mb-8">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mr-6 shadow-2xl">
                    <span className="text-white font-bold text-2xl font-['Inter']">SR</span>
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-2 border-white flex items-center justify-center">
                    <i className="ri-check-line text-white text-xs"></i>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white font-['Playfair_Display']">Sarah Rodriguez</h3>
                  <p className="text-blue-200 font-['Inter'] font-medium">Protocol Lead & Founder</p>
                  <p className="text-blue-300 text-sm font-['Inter']">Former Goldman Sachs Analyst</p>
                </div>
              </div>
              <blockquote className="text-gray-100 font-['Inter'] italic text-lg leading-relaxed mb-6 relative">
                <span className="text-6xl text-blue-400/30 absolute -top-4 -left-2">"</span>
                <span className="relative z-10">
                  From token creation to building our entire DeFi ecosystem, Jakaria Inc delivered beyond every expectation. Our DMAX token achieved 500% growth in the first month with completely organic community building. The technical sophistication, security protocols, and user experience they created rivals anything from established protocols. This wasn't just a launch - it was the foundation of a financial revolution.
                </span>
                <span className="text-6xl text-blue-400/30 absolute -bottom-8 -right-2">"</span>
              </blockquote>
              <div className="flex items-center justify-between">
                <div className="text-blue-400 font-semibold flex items-center gap-2">
                  {[1,2,3,4,5].map(star => (
                    <i key={star} className="ri-star-fill text-lg"></i>
                  ))}
                  <span className="ml-2">5/5 Revolutionary</span>
                </div>
                <div className="text-right">
                  <div className="text-blue-300 text-sm">Verified Founder</div>
                  <div className="text-blue-400 text-xs">January 2024</div>
                </div>
              </div>
            </div>

            {/* Advanced Success Metrics */}
            <div className="bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
              <h3 className="text-3xl font-bold text-white mb-8 font-['Playfair_Display']">Protocol Results</h3>
              <div className="space-y-8">
                {[
                  { value: "500%", label: "Token Growth", icon: "ri-trending-up-line", color: "green" },
                  { value: "$18.5M", label: "TVL Locked", icon: "ri-safe-line", color: "blue" },
                  { value: "8,200", label: "Active Users", icon: "ri-group-line", color: "purple" },
                  { value: "7", label: "Days to Launch", icon: "ri-timer-line", color: "yellow" }
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

            {/* Enhanced Project Specifications */}
            <div className="bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
              <h3 className="text-3xl font-bold text-white mb-8 font-['Playfair_Display']">Protocol Specifications</h3>
              <div className="space-y-6">
                {[
                  { label: "Protocol Type", value: "Complete DeFi Ecosystem", icon: "ri-exchange-line" },
                  { label: "Blockchain Network", value: "Ethereum Mainnet", icon: "ri-global-line" },
                  { label: "Token Standard", value: "ERC-20 (DMAX)", icon: "ri-coin-line" },
                  { label: "Total Supply", value: "100M DMAX", icon: "ri-database-line" },
                  { label: "Security Audits", value: "5 Independent Audits", icon: "ri-shield-check-line" },
                  { label: "Multi-Sig Treasury", value: "7/11 Council Members", icon: "ri-key-line" },
                  { label: "Governance Model", value: "Decentralized DAO", icon: "ri-government-line" },
                  { label: "Cross-Chain Support", value: "5+ Networks Planned", icon: "ri-link-m-line" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
          <h2 className="text-5xl font-bold text-white mb-6 font-['Playfair_Display']">Ready to Build Your DeFi Protocol Empire?</h2>
          <p className="text-xl text-purple-200 font-['Inter'] font-light mb-12 max-w-3xl mx-auto">
            Join the ranks of revolutionary protocols that have transformed decentralized finance through our comprehensive ecosystem development approach
          </p>
          <div className="inline-flex items-center gap-6">
            <button className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600 hover:from-blue-500 hover:via-purple-600 hover:to-pink-700 text-white font-bold py-5 px-10 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 font-['Inter'] whitespace-nowrap text-lg">
              <i className="ri-exchange-line mr-3 text-xl"></i>
              Launch DeFi Protocol
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white font-semibold py-5 px-10 rounded-full border-2 border-white/30 hover:border-white/50 shadow-2xl transition-all duration-500 backdrop-blur-lg font-['Inter'] whitespace-nowrap text-lg group">
              <i className="ri-shield-check-line mr-3 text-xl group-hover:animate-pulse"></i>
              Free Protocol Audit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}