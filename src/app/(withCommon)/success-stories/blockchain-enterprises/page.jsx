'use client';

import Link from 'next/link';

export default function BlockChainEnterprisesStory() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-teal-700 relative overflow-hidden">
      {/* Advanced animated background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-green-400 to-teal-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-128 h-128 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Elegant Navigation */}
        <div className="mb-8 mt-16">
          <Link href="/#portfolio" className="text-purple-200 hover:text-white transition-all duration-500 flex items-center gap-3 font-['Inter'] font-medium tracking-wide group">
            <i className="ri-arrow-left-line text-xl group-hover:transform group-hover:-translate-x-1 transition-transform duration-300"></i>
            <span className="relative">
              Back to Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-teal-500 group-hover:w-full transition-all duration-500"></span>
            </span>
          </Link>
        </div>

        {/* Premium Header Design */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-10">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600 rounded-full flex items-center justify-center mr-8 shadow-2xl animate-pulse">
                <i className="ri-building-2-line text-white text-4xl"></i>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600 blur-lg opacity-50 animate-ping"></div>
              </div>
            </div>
            <div className="text-left">
              <h1 className="text-6xl font-bold text-white font-['Playfair_Display'] tracking-tight leading-tight">
                BlockChain Enterprises
                <span className="block text-2xl font-['Inter'] font-light text-green-200 mt-2">Fortune 500 Blockchain Consulting Powerhouse</span>
              </h1>
            </div>
          </div>
          <div className="relative inline-block">
            <div className="text-5xl font-black bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 bg-clip-text text-transparent mb-6 font-['Inter']">
              $8.2M Equity-Free Capital
            </div>
            <div className="absolute -top-2 -left-2 w-full h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg blur-xl opacity-30"></div>
          </div>
          <p className="text-2xl text-purple-100 font-['Inter'] font-light max-w-4xl mx-auto leading-relaxed">
            How BlockChain Enterprises secured massive expansion capital through strategic corporate ICO methodology while maintaining 100% ownership control and accelerating global market penetration
          </p>
        </div>

        {/* Premium Hero Image */}
        <div className="mb-20 relative group">
          <img 
            src="https://readdy.ai/api/search-image?query=Ultra-modern%20corporate%20blockchain%20headquarters%20with%20floor-to-ceiling%20glass%20walls%2C%20sophisticated%20enterprise%20team%20celebrating%20successful%20funding%20round%2C%20premium%20executive%20offices%20with%20digital%20transformation%20displays%2C%20Fortune%20500%20blockchain%20consulting%20success%20environment%2C%20professional%20corporate%20celebration%20with%20champagne%20and%20success%20metrics&width=1400&height=700&seq=blockchain_enterprises_premium_hero&orientation=landscape"
            alt="BlockChain Enterprises Corporate Headquarters"
            className="w-full h-[28rem] object-cover object-top rounded-3xl shadow-2xl transition-all duration-700 group-hover:shadow-3xl group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
          <div className="absolute bottom-6 left-6 right-6">
            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-xl rounded-2xl p-6 border border-green-400/30">
              <h3 className="text-xl font-bold text-white font-['Inter'] mb-2 flex items-center gap-2">
                <i className="ri-trophy-line text-green-400"></i>
                BlockChain Enterprises Global Success
              </h3>
              <p className="text-green-200 font-['Inter']">$8.2M Raised in 5 Days Without Equity Dilution</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-16">
          {/* Enhanced Main Content */}
          <div className="lg:col-span-2 space-y-16">
            {/* Corporate Excellence & Market Position */}
            <div className="bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/20 shadow-2xl">
              <h2 className="text-4xl font-bold text-white mb-8 font-['Playfair_Display']">Corporate Excellence & Market Leadership</h2>
              <div className="space-y-6 text-gray-100 font-['Inter'] text-lg leading-relaxed">
                <div className="flex items-start gap-6 p-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl border border-green-400/20">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-2xl font-['Inter']">AM</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3 font-['Inter']">Anna Mitchell - CFO & Strategic Architect</h3>
                    <p className="text-gray-200 leading-relaxed">
                      <span className="font-semibold text-green-400">Former JP Morgan Chase Senior VP</span><br/>
                      <span className="font-semibold text-green-400">Harvard Business School MBA, CFA Charter</span><br/>
                      <span className="font-semibold text-green-400">15 Years Corporate Finance + 4 Years Blockchain</span><br/>
                      <span className="font-semibold text-green-400">Led $2.3B+ Enterprise Digital Transformations</span>
                    </p>
                  </div>
                </div>
                
                <p className="text-xl font-light leading-relaxed">
                  <span className="font-semibold text-green-400">BlockChain Enterprises</span>, established in 2018, emerged as the definitive blockchain consulting authority for Fortune 500 corporations. Under Anna Mitchell's financial stewardship and CEO David Park's technical vision, the company transformed from a boutique consultancy into a $45M revenue powerhouse serving global enterprises.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-6 border border-blue-400/20">
                    <h4 className="text-xl font-bold text-white mb-4 font-['Inter']">🏆 Enterprise Client Portfolio</h4>
                    <ul className="space-y-2 text-gray-200">
                      <li className="flex items-center gap-3">
                        <i className="ri-check-double-line text-blue-400"></i>
                        <span><strong>IBM:</strong> $12M blockchain infrastructure overhaul</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <i className="ri-check-double-line text-blue-400"></i>
                        <span><strong>Microsoft:</strong> Supply chain transparency protocols</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <i className="ri-check-double-line text-blue-400"></i>
                        <span><strong>Amazon:</strong> Decentralized identity management</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <i className="ri-check-double-line text-blue-400"></i>
                        <span><strong>Tesla:</strong> Carbon credit blockchain platform</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-2xl p-6 border border-green-400/20">
                    <h4 className="text-xl font-bold text-white mb-4 font-['Inter']">📊 Performance Metrics (2023)</h4>
                    <ul className="space-y-2 text-gray-200">
                      <li className="flex justify-between">
                        <span>Annual Revenue:</span>
                        <strong className="text-green-400">$45M</strong>
                      </li>
                      <li className="flex justify-between">
                        <span>Active Projects:</span>
                        <strong className="text-green-400">127</strong>
                      </li>
                      <li className="flex justify-between">
                        <span>Global Workforce:</span>
                        <strong className="text-green-400">200+ Experts</strong>
                      </li>
                      <li className="flex justify-between">
                        <span>Client Retention:</span>
                        <strong className="text-green-400">94%</strong>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <p className="leading-relaxed">
                  By Q3 2023, explosive demand for enterprise blockchain solutions created unprecedented growth opportunities. Major corporations were allocating billions for digital transformation, but BlockChain Enterprises lacked the capital infrastructure to scale operations, acquire top-tier talent, and establish global presence. Traditional funding methods threatened operational independence and equity control Anna had carefully protected.
                </p>
              </div>
            </div>

            {/* Corporate Capital Constraints & Strategic Challenges */}
            <div className="bg-gradient-to-br from-red-900/20 via-red-800/15 to-red-700/10 backdrop-blur-xl rounded-3xl p-10 border border-red-400/30 shadow-2xl">
              <h2 className="text-4xl font-bold text-white mb-8 font-['Playfair_Display']">Corporate Capital Constraints & Strategic Challenges</h2>
              <div className="space-y-8">
                <p className="text-gray-100 font-['Inter'] text-lg leading-relaxed mb-8">
                  BlockChain Enterprises faced sophisticated corporate finance challenges that traditional funding mechanisms couldn't address within required timeframes:
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-red-300 font-['Inter'] mb-4">⚡ Market Opportunity Pressures</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4 p-4 bg-red-500/10 rounded-2xl border border-red-400/20">
                        <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <i className="ri-calendar-event-line text-red-400"></i>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white font-['Inter']">Q4 2023 Enterprise Budget Cycles</h4>
                          <p className="text-gray-200 text-sm">$2.3B corporate blockchain budgets requiring immediate partner capacity</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 bg-red-500/10 rounded-2xl border border-red-400/20">
                        <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <i className="ri-team-line text-red-400"></i>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white font-['Inter']">Global Talent Acquisition War</h4>
                          <p className="text-gray-200 text-sm">Top blockchain architects commanding $500K+ packages with immediate start requirements</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 bg-red-500/10 rounded-2xl border border-red-400/20">
                        <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <i className="ri-global-line text-red-400"></i>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white font-['Inter']">International Expansion Urgency</h4>
                          <p className="text-gray-200 text-sm">European & Asian markets demanding local presence for regulatory compliance</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-red-300 font-['Inter'] mb-4">💼 Traditional Funding Limitations</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4 p-4 bg-red-500/10 rounded-2xl border border-red-400/20">
                        <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <i className="ri-pie-chart-line text-red-400"></i>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white font-['Inter']">Equity Dilution Demands</h4>
                          <p className="text-gray-200 text-sm">Private equity requiring 35-45% ownership for growth capital</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 bg-red-500/10 rounded-2xl border border-red-400/20">
                        <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <i className="ri-time-line text-red-400"></i>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white font-['Inter']">Prolonged Due Diligence</h4>
                          <p className="text-gray-200 text-sm">90-120 day funding timelines incompatible with market velocity</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 bg-red-500/10 rounded-2xl border border-red-400/20">
                        <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <i className="ri-government-line text-red-400"></i>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white font-['Inter']">Operational Control Restrictions</h4>
                          <p className="text-gray-200 text-sm">Board seats and strategic oversight compromising decision-making agility</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-2xl p-6 border border-orange-400/20">
                  <h4 className="text-xl font-bold text-white mb-4 font-['Inter']">💡 Strategic Funding Requirements</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-white/5 rounded-xl">
                      <div className="text-2xl font-bold text-orange-400 mb-2">$10M</div>
                      <div className="text-orange-300 text-sm">Minimum Capital Need</div>
                    </div>
                    <div className="text-center p-4 bg-white/5 rounded-xl">
                      <div className="text-2xl font-bold text-red-400 mb-2">30 Days</div>
                      <div className="text-red-300 text-sm">Maximum Timeline</div>
                    </div>
                    <div className="text-center p-4 bg-white/5 rounded-xl">
                      <div className="text-2xl font-bold text-yellow-400 mb-2">0%</div>
                      <div className="text-yellow-300 text-sm">Equity Dilution Tolerance</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Revolutionary Corporate ICO Solution */}
            <div className="bg-gradient-to-br from-green-900/20 via-green-800/15 to-emerald-700/10 backdrop-blur-xl rounded-3xl p-10 border border-green-400/30 shadow-2xl">
              <h2 className="text-4xl font-bold text-white mb-8 font-['Playfair_Display']">Jakaria Inc Corporate ICO Revolution</h2>
              <div className="space-y-8">
                <p className="text-gray-100 font-['Inter'] text-lg leading-relaxed">
                  Our team engineered a groundbreaking corporate utility token ecosystem specifically designed for enterprise blockchain consulting firms, combining traditional corporate finance sophistication with tokenized access rights and automated revenue distribution mechanisms.
                </p>
                
                <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl p-8 border border-blue-400/30">
                  <h3 className="text-2xl font-bold text-white mb-6 font-['Inter']">🏢 Enterprise Utility Token Architecture</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                          <i className="ri-check-line text-green-400"></i>
                        </div>
                        <span className="text-gray-100 font-['Inter']">Corporate service access token (BENS)</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                          <i className="ri-check-line text-green-400"></i>
                        </div>
                        <span className="text-gray-100 font-['Inter']">Priority consulting queue mechanisms</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                          <i className="ri-check-line text-green-400"></i>
                        </div>
                        <span className="text-gray-100 font-['Inter']">Revenue-sharing smart contracts</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                          <i className="ri-check-line text-green-400"></i>
                        </div>
                        <span className="text-gray-100 font-['Inter']">Enterprise governance participation rights</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                          <i className="ri-check-line text-green-400"></i>
                        </div>
                        <span className="text-gray-100 font-['Inter']">Institutional-grade security audit protocols</span>
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
                        <span className="text-gray-100 font-['Inter']">Regulatory compliance framework</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                          <i className="ri-check-line text-green-400"></i>
                        </div>
                        <span className="text-gray-100 font-['Inter']">Corporate investor KYC/AML integration</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl p-8 border border-purple-400/30">
                  <h3 className="text-2xl font-bold text-white mb-6 font-['Inter']">📈 Institutional Investor Targeting</h3>
                  <div className="grid md:grid-cols-4 gap-6">
                    {[
                      { category: "Fortune 500 Corps", count: "12", investment: "$4.2M", color: "blue" },
                      { category: "Venture Funds", count: "18", investment: "$2.1M", color: "purple" },
                      { category: "Family Offices", count: "15", investment: "$1.5M", color: "green" },
                      { category: "Crypto Funds", count: "8", investment: "$400K", color: "yellow" }
                    ].map((investor, idx) => (
                      <div key={idx} className={`text-center p-4 bg-${investor.color}-500/10 rounded-2xl border border-${investor.color}-400/20`}>
                        <div className={`text-2xl font-bold text-${investor.color}-400 mb-1`}>{investor.count}</div>
                        <div className="text-white text-sm font-medium mb-2">{investor.category}</div>
                        <div className={`text-${investor.color}-300 text-xs`}>{investor.investment}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 5-Day Corporate ICO Launch Timeline */}
            <div className="bg-gradient-to-br from-yellow-900/20 via-orange-800/15 to-red-700/10 backdrop-blur-xl rounded-3xl p-10 border border-yellow-400/30 shadow-2xl">
              <h2 className="text-4xl font-bold text-white mb-8 font-['Playfair_Display']">5-Day Corporate ICO Launch Execution</h2>
              <div className="space-y-10">
                {[
                  {
                    day: "Day 1",
                    title: "Corporate Strategy & Legal Framework",
                    time: "Monday, 8:00 AM - 6:00 PM EST",
                    description: "Executive-level strategy sessions, corporate tokenomics design, and comprehensive legal compliance framework establishment.",
                    activities: [
                      "C-Suite executive strategy alignment sessions",
                      "Corporate utility token (BENS) architecture design",
                      "SEC compliance and regulatory framework development",
                      "Institutional investor targeting strategy creation"
                    ],
                    milestone: "Legal Framework & Strategy Approved",
                    color: "blue",
                    icon: "ri-building-line"
                  },
                  {
                    day: "Day 2",
                    title: "Smart Contract Development & Security",
                    time: "Tuesday, Full-Day Development Sprint",
                    description: "Enterprise-grade smart contract development with institutional security protocols and multi-signature treasury setup.",
                    activities: [
                      "BENS utility token smart contract development",
                      "Multi-signature corporate treasury implementation",
                      "Service access and revenue-sharing mechanisms",
                      "Comprehensive smart contract security audit"
                    ],
                    milestone: "Smart Contracts Deployed & Audited",
                    color: "purple",
                    icon: "ri-shield-check-line"
                  },
                  {
                    day: "Day 3",
                    title: "Corporate Documentation & Materials",
                    time: "Wednesday, Professional Preparation",
                    description: "Investment-grade documentation creation and institutional marketing materials development.",
                    activities: [
                      "120-page institutional whitepaper creation",
                      "Executive pitch deck with financial projections",
                      "Corporate token economics modeling",
                      "Investor relations portal development"
                    ],
                    milestone: "Investment Documentation Complete",
                    color: "green",
                    icon: "ri-file-paper-line"
                  },
                  {
                    day: "Day 4",
                    title: "Institutional Investor Outreach",
                    time: "Thursday, Investor Engagement",
                    description: "Targeted outreach to institutional investors, corporate partners, and strategic allies.",
                    activities: [
                      "Fortune 500 client base engagement",
                      "Institutional fund manager presentations",
                      "Strategic partnership token allocations",
                      "Corporate treasury diversification discussions"
                    ],
                    milestone: "45 Institutional Commitments Secured",
                    color: "yellow",
                    icon: "ri-handshake-line"
                  },
                  {
                    day: "Day 5",
                    title: "ICO Launch & Capital Achievement",
                    time: "Friday, 10:00 AM EST Launch",
                    description: "Corporate ICO launch with institutional participation and immediate $8.2M capital achievement.",
                    activities: [
                      "Corporate ICO platform launch",
                      "$8.2M funding milestone achieved",
                      "45 institutional investors onboarded",
                      "Corporate treasury management activation"
                    ],
                    milestone: "$8.2M Raised - 100% Equity Retained",
                    color: "green",
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
                      
                      <div className="grid md:grid-cols-2 gap-6 mb-4">
                        <div>
                          <h4 className="text-lg font-bold text-white mb-3 font-['Inter']">Key Activities:</h4>
                          <div className="space-y-2">
                            {phase.activities.map((activity, idx) => (
                              <div key={idx} className="flex items-start gap-3 p-3 bg-white/5 rounded-xl">
                                <div className={`w-6 h-6 bg-${phase.color}-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                                  <i className="ri-check-line text-xs text-green-400"></i>
                                </div>
                                <span className="text-gray-200 font-['Inter'] text-sm">{activity}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-bold text-white mb-3 font-['Inter']">Achievement Milestone:</h4>
                          <div className={`p-4 bg-gradient-to-r from-${phase.color}-500/10 to-${phase.color}-600/10 rounded-2xl border border-${phase.color}-400/20`}>
                            <div className="flex items-center gap-3">
                              <i className="ri-flag-line text-green-400 text-xl"></i>
                              <span className="text-green-300 font-medium font-['Inter']">{phase.milestone}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Comprehensive Business Transformation Results */}
            <div className="bg-gradient-to-br from-emerald-900/20 via-green-800/15 to-teal-700/10 backdrop-blur-xl rounded-3xl p-10 border border-emerald-400/30 shadow-2xl">
              <h2 className="text-4xl font-bold text-white mb-8 font-['Playfair_Display']">Corporate Transformation & Market Expansion Results</h2>
              <div className="space-y-8">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center p-6 bg-gradient-to-br from-green-500/20 to-emerald-600/20 rounded-3xl border border-green-400/30">
                    <div className="text-4xl font-black text-green-400 mb-3 font-['Inter']">$8.2M</div>
                    <div className="text-white font-semibold mb-2 font-['Inter']">Capital Raised</div>
                    <div className="text-green-300 text-sm">Zero equity dilution</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-blue-500/20 to-cyan-600/20 rounded-3xl border border-blue-400/30">
                    <div className="text-4xl font-black text-blue-400 mb-3 font-['Inter']">5</div>
                    <div className="text-white font-semibold mb-2 font-['Inter']">Days Launch</div>
                    <div className="text-blue-300 text-sm">Record corporate ICO speed</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-3xl border border-purple-400/30">
                    <div className="text-4xl font-black text-purple-400 mb-3 font-['Inter']">+180%</div>
                    <div className="text-white font-semibold mb-2 font-['Inter']">Revenue Growth</div>
                    <div className="text-purple-300 text-sm">6-month expansion results</div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6 font-['Inter']">🎯 Immediate Capital Deployment</h3>
                    <div className="space-y-4">
                      {[
                        { metric: "Global Office Expansion", value: "London, Tokyo, Sydney", detail: "Strategic market presence", color: "green" },
                        { metric: "Senior Talent Acquisition", value: "85 New Hires", detail: "Top-tier blockchain experts", color: "blue" },
                        { metric: "Technology Infrastructure", value: "$2.1M Investment", detail: "Enterprise platform upgrade", color: "purple" },
                        { metric: "Strategic Partnerships", value: "28 New Alliances", detail: "Fortune 500 integrations", color: "yellow" }
                      ].map((item, idx) => (
                        <div key={idx} className={`flex justify-between items-center p-4 bg-${item.color}-500/10 rounded-2xl border border-${item.color}-400/20`}>
                          <span className="text-gray-100 font-['Inter'] font-medium">{item.metric}</span>
                          <div className="text-right">
                            <div className={`text-${item.color}-400 font-bold text-lg`}>{item.value}</div>
                            <div className="text-gray-300 text-sm">{item.detail}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6 font-['Inter']">📈 6-Month Business Growth</h3>
                    <div className="space-y-4">
                      {[
                        { metric: "Revenue Increase", value: "+180%", detail: "$45M to $126M ARR", color: "green" },
                        { metric: "Client Portfolio Growth", value: "+67 Enterprises", detail: "Fortune 1000 expansion", color: "blue" },
                        { metric: "Project Capacity", value: "+340%", detail: "Concurrent engagement ability", color: "purple" },
                        { metric: "Market Valuation", value: "$125M", detail: "Independent assessment", color: "orange" }
                      ].map((item, idx) => (
                        <div key={idx} className={`flex justify-between items-center p-4 bg-${item.color}-500/10 rounded-2xl border border-${item.color}-400/20`}>
                          <span className="text-gray-100 font-['Inter'] font-medium">{item.metric}</span>
                          <div className="text-right">
                            <div className={`text-${item.color}-400 font-bold text-lg`}>{item.value}</div>
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
            {/* Anna's Executive Testimonial */}
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-600/20 backdrop-blur-xl rounded-3xl p-8 border border-green-400/30 shadow-2xl">
              <div className="flex items-center mb-8">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mr-6 shadow-2xl">
                    <span className="text-white font-bold text-2xl font-['Inter']">AM</span>
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-2 border-white flex items-center justify-center">
                    <i className="ri-check-line text-white text-xs"></i>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white font-['Playfair_Display']">Anna Mitchell</h3>
                  <p className="text-green-200 font-['Inter'] font-medium">CFO & Co-Founder</p>
                  <p className="text-green-300 text-sm font-['Inter']">Former JP Morgan Chase SVP</p>
                </div>
              </div>
              <blockquote className="text-gray-100 font-['Inter'] italic text-lg leading-relaxed mb-6 relative">
                <span className="text-6xl text-green-400/30 absolute -top-4 -left-2">"</span>
                <span className="relative z-10">
                  Jakaria Inc achieved what traditional corporate finance couldn't: $8.2M expansion capital in 5 days without surrendering a single share of equity. Their dedicated blockchain development team, enterprise-grade security protocols, and institutional investor network exceeded every expectation. This wasn't just fundraising - it was a complete corporate transformation that positioned us as the global leader in enterprise blockchain consulting.
                </span>
                <span className="text-6xl text-green-400/30 absolute -bottom-8 -right-2">"</span>
              </blockquote>
              <div className="flex items-center justify-between">
                <div className="text-green-400 font-semibold flex items-center gap-2">
                  {[1,2,3,4,5].map(star => (
                    <i key={star} className="ri-star-fill text-lg"></i>
                  ))}
                  <span className="ml-2">5/5 Corporate Excellence</span>
                </div>
                <div className="text-right">
                  <div className="text-green-300 text-sm">Verified Executive</div>
                  <div className="text-green-400 text-xs">December 2023</div>
                </div>
              </div>
            </div>

            {/* Advanced Corporate Metrics */}
            <div className="bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
              <h3 className="text-3xl font-bold text-white mb-8 font-['Playfair_Display']">Corporate Results</h3>
              <div className="space-y-8">
                {[
                  { value: "$8.2M", label: "Capital Raised", icon: "ri-money-dollar-circle-line", color: "green" },
                  { value: "100%", label: "Equity Retained", icon: "ri-shield-check-line", color: "blue" },
                  { value: "5", label: "Days Launch", icon: "ri-timer-line", color: "purple" },
                  { value: "+180%", label: "Revenue Growth", icon: "ri-trending-up-line", color: "yellow" }
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

            {/* Enhanced Corporate Profile */}
            <div className="bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
              <h3 className="text-3xl font-bold text-white mb-8 font-['Playfair_Display']">Corporate Profile</h3>
              <div className="space-y-6">
                {[
                  { label: "Industry Sector", value: "Enterprise Blockchain Consulting", icon: "ri-building-line" },
                  { label: "Establishment", value: "2018 (Seattle, WA)", icon: "ri-calendar-line" },
                  { label: "Global Workforce", value: "285+ Blockchain Experts", icon: "ri-team-line" },
                  { label: "Headquarters", value: "Seattle, WA + 3 Global Offices", icon: "ri-map-pin-line" },
                  { label: "Annual Revenue", value: "$126M+ (Post-Expansion)", icon: "ri-funds-line" },
                  { label: "Enterprise Clients", value: "94+ Fortune 1000", icon: "ri-building-4-line" },
                  { label: "Active Projects", value: "340+ Concurrent", icon: "ri-briefcase-line" },
                  { label: "Market Valuation", value: "$125M Independent Assessment", icon: "ri-trophy-line" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
          <h2 className="text-5xl font-bold text-white mb-6 font-['Playfair_Display']">Ready to Revolutionize Your Corporate Capital Strategy?</h2>
          <p className="text-xl text-purple-200 font-['Inter'] font-light mb-12 max-w-3xl mx-auto">
            Join the exclusive circle of Fortune 500 enterprises who've achieved unprecedented growth through our proven corporate ICO methodology
          </p>
          <div className="inline-flex items-center gap-6">
            <button className="bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 hover:from-green-500 hover:via-emerald-600 hover:to-teal-700 text-white font-bold py-5 px-10 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 font-['Inter'] whitespace-nowrap text-lg">
              <i className="ri-building-2-line mr-3 text-xl"></i>
              Launch Corporate ICO
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white font-semibold py-5 px-10 rounded-full border-2 border-white/30 hover:border-white/50 shadow-2xl transition-all duration-500 backdrop-blur-lg font-['Inter'] whitespace-nowrap text-lg group">
              <i className="ri-handshake-line mr-3 text-xl group-hover:animate-pulse"></i>
              Enterprise Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}