'use client';

import Link from 'next/link';

export default function InvestorProPassiveStory() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-teal-700 relative overflow-hidden">
      {/* Advanced animated background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-128 h-128 bg-gradient-to-r from-indigo-400 to-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Elegant Navigation */}
        <div className="mb-8 mt-6">
          <Link href="/#portfolio" className="text-purple-200 hover:text-white transition-all duration-500 flex items-center gap-3 font-['Inter'] font-medium tracking-wide group">
            <i className="ri-arrow-left-line text-xl group-hover:transform group-hover:-translate-x-1 transition-transform duration-300"></i>
            <span className="relative">
              Back to Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-indigo-500 group-hover:w-full transition-all duration-500"></span>
            </span>
          </Link>
        </div>

        {/* Premium Header Design */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-10">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-400 via-indigo-500 to-blue-600 rounded-full flex items-center justify-center mr-8 shadow-2xl animate-pulse">
                <i className="ri-money-dollar-circle-line text-white text-4xl"></i>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400 via-indigo-500 to-blue-600 blur-lg opacity-50 animate-ping"></div>
              </div>
            </div>
            <div className="text-left">
              <h1 className="text-6xl font-bold text-white font-['Playfair_Display'] tracking-tight leading-tight">
                InvestorPro Passive Income
                <span className="block text-2xl font-['Inter'] font-light text-purple-200 mt-2">Systematic Weekly Meme Token Income Stream</span>
              </h1>
            </div>
          </div>
          <div className="relative inline-block">
            <div className="text-5xl font-black bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 bg-clip-text text-transparent mb-6 font-['Inter']">
              $15K Monthly Passive Income
            </div>
            <div className="absolute -top-2 -left-2 w-full h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg blur-xl opacity-30"></div>
          </div>
          <p className="text-2xl text-purple-100 font-['Inter'] font-light max-w-4xl mx-auto leading-relaxed">
            How Robert Taylor transformed from corporate employee to financial freedom through systematic weekly meme token launches with guaranteed zero-risk profit mechanisms
          </p>
        </div>

        {/* Premium Hero Image */}
        <div className="mb-20 relative group">
          <img 
            src="https://readdy.ai/api/search-image?query=Successful%20individual%20investor%20celebrating%20financial%20independence%20at%20luxury%20home%20office%2C%20multiple%20monitors%20showing%20consistent%20profitable%20cryptocurrency%20trades%2C%20stacks%20of%20money%20and%20passive%20income%20charts%2C%20professional%20trading%20setup%20with%20green%20profit%20indicators%2C%20financial%20freedom%20celebration%20with%20family%20photos%20and%20luxury%20lifestyle%20elements&width=1400&height=700&seq=investorpro_premium_hero&orientation=landscape"
            alt="InvestorPro Passive Income Success"
            className="w-full h-[28rem] object-cover object-top rounded-3xl shadow-2xl transition-all duration-700 group-hover:shadow-3xl group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
          <div className="absolute bottom-6 left-6 right-6">
            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-xl rounded-2xl p-6 border border-green-400/30">
              <h3 className="text-xl font-bold text-white font-['Inter'] mb-2 flex items-center gap-2">
                <i className="ri-trophy-line text-green-400"></i>
                Financial Freedom Achievement
              </h3>
              <p className="text-green-200 font-['Inter']">8 Months of Consistent $15K Monthly Returns</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-16">
          {/* Enhanced Main Content */}
          <div className="lg:col-span-2 space-y-16">
            {/* Personal Journey & Background */}
            <div className="bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/20 shadow-2xl">
              <h2 className="text-4xl font-bold text-white mb-8 font-['Playfair_Display']">From Corporate Grind to Financial Freedom</h2>
              <div className="space-y-6 text-gray-100 font-['Inter'] text-lg leading-relaxed">
                <div className="flex items-start gap-6 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl border border-blue-400/20">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-2xl font-['Inter']">RT</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3 font-['Inter']">Robert Taylor - The Corporate Escape Story</h3>
                    <p className="text-gray-200 leading-relaxed">
                      <span className="font-semibold text-blue-400">Age:</span> 34 years old<br/>
                      <span className="font-semibold text-blue-400">Location:</span> Denver, Colorado<br/>
                      <span className="font-semibold text-blue-400">Previous Role:</span> Senior Marketing Manager at Fortune 500 company<br/>
                      <span className="font-semibold text-blue-400">Annual Salary:</span> $95,000 + bonuses<br/>
                      <span className="font-semibold text-blue-400">Family:</span> Married with 2 children (ages 8 and 12)
                    </p>
                  </div>
                </div>
                
                <p className="text-xl font-light leading-relaxed">
                  Robert's story begins like millions of Americans: trapped in the corporate hamster wheel, earning a decent salary but feeling financially constrained. Despite his success as a marketing manager, rising inflation, mortgage payments, and college savings for his kids meant living paycheck to paycheck on a six-figure income.
                </p>
                
                <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-2xl p-6 border border-red-400/20">
                  <h4 className="text-xl font-bold text-white mb-4 font-['Inter']">💼 The Corporate Reality</h4>
                  <ul className="space-y-2 text-gray-200">
                    <li className="flex items-center gap-3">
                      <i className="ri-arrow-right-s-line text-red-400"></i>
                      <span>60-hour work weeks with minimal family time</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <i className="ri-arrow-right-s-line text-red-400"></i>
                      <span>$8,200 monthly expenses vs $7,900 take-home pay</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <i className="ri-arrow-right-s-line text-red-400"></i>
                      <span>$180,000 mortgage with 23 years remaining</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <i className="ri-arrow-right-s-line text-red-400"></i>
                      <span>College funds needing $400,000 by 2030</span>
                    </li>
                  </ul>
                </div>
                
                <p className="leading-relaxed">
                  The breaking point came in September 2023 when Robert realized he'd been working for 12 years but had less than $15,000 in savings. Traditional investment advice suggested decades of slow growth, but Robert needed faster results to secure his family's future. He began researching alternative income streams and discovered the explosive potential of cryptocurrency passive income systems.
                </p>
              </div>
            </div>

            {/* Challenge Analysis */}
            <div className="bg-gradient-to-br from-red-900/20 via-red-800/15 to-red-700/10 backdrop-blur-xl rounded-3xl p-10 border border-red-400/30 shadow-2xl">
              <h2 className="text-4xl font-bold text-white mb-8 font-['Playfair_Display']">The Middle-Class Financial Trap</h2>
              <div className="space-y-8">
                <p className="text-gray-100 font-['Inter'] text-lg leading-relaxed mb-8">
                  Robert faced the modern middle-class dilemma: earning too much for government assistance, too little for true financial security, and too busy for active investment management:
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-red-300 font-['Inter'] mb-4">⏰ Time Constraints</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4 p-4 bg-red-500/10 rounded-2xl border border-red-400/20">
                        <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <i className="ri-time-line text-red-400"></i>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white font-['Inter']">60-Hour Corporate Schedule</h4>
                          <p className="text-gray-200 text-sm">No time for active trading or market monitoring</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 bg-red-500/10 rounded-2xl border border-red-400/20">
                        <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <i className="ri-parent-line text-red-400"></i>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white font-['Inter']">Family Responsibilities</h4>
                          <p className="text-gray-200 text-sm">Kids' activities and household management consume evenings</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 bg-red-500/10 rounded-2xl border border-red-400/20">
                        <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <i className="ri-book-line text-red-400"></i>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white font-['Inter']">Learning Curve Barriers</h4>
                          <p className="text-gray-200 text-sm">Cryptocurrency complexity overwhelming for beginners</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-red-300 font-['Inter'] mb-4">💰 Financial Risk Factors</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4 p-4 bg-red-500/10 rounded-2xl border border-red-400/20">
                        <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <i className="ri-shield-line text-red-400"></i>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white font-['Inter']">Cannot Afford Losses</h4>
                          <p className="text-gray-200 text-sm">Family's financial security depends on every dollar</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 bg-red-500/10 rounded-2xl border border-red-400/20">
                        <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <i className="ri-question-line text-red-400"></i>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white font-['Inter']">Skeptical of "Get Rich Quick"</h4>
                          <p className="text-gray-200 text-sm">Previous bad experiences with investment schemes</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 bg-red-500/10 rounded-2xl border border-red-400/20">
                        <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <i className="ri-funds-line text-red-400"></i>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white font-['Inter']">Limited Investment Capital</h4>
                          <p className="text-gray-200 text-sm">Only $5,000 available for investment opportunities</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Revolutionary Passive Income Solution */}
            <div className="bg-gradient-to-br from-green-900/20 via-green-800/15 to-emerald-700/10 backdrop-blur-xl rounded-3xl p-10 border border-green-400/30 shadow-2xl">
              <h2 className="text-4xl font-bold text-white mb-8 font-['Playfair_Display']">Jakaria Inc Zero-Risk Passive Income System</h2>
              <div className="space-y-8">
                <p className="text-gray-100 font-['Inter'] text-lg leading-relaxed">
                  Our team designed a revolutionary passive income ecosystem specifically for busy professionals who want cryptocurrency profits without time investment or risk exposure. The system combines systematic meme token launches with guaranteed profit mechanisms and complete automation.
                </p>
                
                <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl p-8 border border-blue-400/30">
                  <h3 className="text-2xl font-bold text-white mb-6 font-['Inter']">🎯 Zero-Risk Profit Guarantee System</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                          <i className="ri-shield-check-line text-green-400"></i>
                        </div>
                        <span className="text-gray-100 font-['Inter']">100% principal protection guarantee</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                          <i className="ri-calendar-check-line text-green-400"></i>
                        </div>
                        <span className="text-gray-100 font-['Inter']">Weekly profit distribution schedule</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                          <i className="ri-robot-line text-green-400"></i>
                        </div>
                        <span className="text-gray-100 font-['Inter']">Fully automated execution system</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                          <i className="ri-eye-line text-green-400"></i>
                        </div>
                        <span className="text-gray-100 font-['Inter']">Complete transparency & real-time tracking</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                          <i className="ri-customer-service-line text-green-400"></i>
                        </div>
                        <span className="text-gray-100 font-['Inter']">24/7 dedicated support team</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                          <i className="ri-bar-chart-line text-green-400"></i>
                        </div>
                        <span className="text-gray-100 font-['Inter']">Scalable income based on participation</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                          <i className="ri-hand-coin-line text-green-400"></i>
                        </div>
                        <span className="text-gray-100 font-['Inter']">No upfront fees or hidden costs</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                          <i className="ri-file-shield-line text-green-400"></i>
                        </div>
                        <span className="text-gray-100 font-['Inter']">Legal compliance & regulatory protection</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl p-8 border border-purple-400/30">
                  <h3 className="text-2xl font-bold text-white mb-6 font-['Inter']">📊 Robert's Investment Structure</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center p-4 bg-white/5 rounded-2xl">
                      <div className="text-3xl font-bold text-purple-400 mb-2">$5,000</div>
                      <div className="text-purple-200 font-['Inter']">Initial Investment</div>
                      <div className="text-gray-300 text-sm mt-2">October 2023</div>
                    </div>
                    <div className="text-center p-4 bg-white/5 rounded-2xl">
                      <div className="text-3xl font-bold text-green-400 mb-2">30%</div>
                      <div className="text-purple-200 font-['Inter']">Weekly ROI</div>
                      <div className="text-gray-300 text-sm mt-2">Consistent Returns</div>
                    </div>
                    <div className="text-center p-4 bg-white/5 rounded-2xl">
                      <div className="text-3xl font-bold text-blue-400 mb-2">$15K+</div>
                      <div className="text-purple-200 font-['Inter']">Monthly Profit</div>
                      <div className="text-gray-300 text-sm mt-2">8 Month Average</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Weekly Income Cycle */}
            <div className="bg-gradient-to-br from-yellow-900/20 via-orange-800/15 to-red-700/10 backdrop-blur-xl rounded-3xl p-10 border border-yellow-400/30 shadow-2xl">
              <h2 className="text-4xl font-bold text-white mb-8 font-['Playfair_Display']">7-Day Passive Income Cycle Breakdown</h2>
              <div className="space-y-10">
                {[
                  {
                    day: "Monday",
                    title: "Market Analysis & Token Selection",
                    time: "6:00 AM - 12:00 PM EST",
                    description: "Our expert team conducts comprehensive market analysis and selects optimal meme token concepts with highest viral potential.",
                    activities: [
                      "AI-powered social sentiment analysis across 25+ platforms",
                      "Trend forecasting using proprietary algorithms",
                      "Token concept validation through focus groups",
                      "Competitive landscape analysis and positioning"
                    ],
                    robertRole: "Completely Passive - No Action Required",
                    color: "blue",
                    icon: "ri-search-eye-line"
                  },
                  {
                    day: "Tuesday-Wednesday",
                    title: "Development & Smart Contract Deployment",
                    time: "48-Hour Development Sprint",
                    description: "Our blockchain development team creates, tests, and deploys custom smart contracts with built-in profit mechanisms.",
                    activities: [
                      "Custom tokenomics design with guaranteed profit features",
                      "Smart contract development with anti-rug mechanisms",
                      "Security audit and testing protocols",
                      "Liquidity pool setup with automated profit distribution"
                    ],
                    robertRole: "Receives Real-Time Progress Updates",
                    color: "purple",
                    icon: "ri-code-s-slash-line"
                  },
                  {
                    day: "Thursday-Friday",
                    title: "Marketing Orchestration & Community Building",
                    time: "36-Hour Viral Campaign",
                    description: "Coordinated marketing blitz across multiple channels with influencer partnerships and community engagement campaigns.",
                    activities: [
                      "20+ crypto influencer activations",
                      "Multi-platform social media campaigns",
                      "Community building through Discord/Telegram",
                      "Viral content creation and distribution"
                    ],
                    robertRole: "Optional: Share Content for Bonus Rewards",
                    color: "green",
                    icon: "ri-megaphone-line"
                  },
                  {
                    day: "Saturday-Sunday",
                    title: "Profit Realization & Distribution",
                    time: "Weekend Profit Booking",
                    description: "Systematic profit taking at optimal price levels and automated distribution to all passive income participants.",
                    activities: [
                      "Algorithmic profit taking at predetermined levels",
                      "Treasury management and profit calculation",
                      "Automated distribution to participant wallets",
                      "Performance reporting and next cycle planning"
                    ],
                    robertRole: "Receives Profit Payment & Weekly Report",
                    color: "yellow",
                    icon: "ri-money-dollar-circle-line"
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
                          <h4 className="text-lg font-bold text-white mb-3 font-['Inter']">Our Team Activities:</h4>
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
                          <h4 className="text-lg font-bold text-white mb-3 font-['Inter']">Robert's Involvement:</h4>
                          <div className="p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl border border-green-400/20">
                            <div className="flex items-center gap-3">
                              <i className="ri-user-smile-line text-green-400 text-xl"></i>
                              <span className="text-green-300 font-medium font-['Inter']">{phase.robertRole}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Monthly Income Progression Analysis */}
            <div className="bg-gradient-to-br from-emerald-900/20 via-green-800/15 to-teal-700/10 backdrop-blur-xl rounded-3xl p-10 border border-emerald-400/30 shadow-2xl">
              <h2 className="text-4xl font-bold text-white mb-8 font-['Playfair_Display']">8-Month Income Transformation Journey</h2>
              <div className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6 font-['Inter']">📈 Monthly Progression</h3>
                    <div className="space-y-4">
                      {[
                        { month: "October 2023", income: "$12,200", note: "Learning phase & system optimization", growth: "Start" },
                        { month: "November 2023", income: "$13,800", note: "Increased participation & refinement", growth: "+13%" },
                        { month: "December 2023", income: "$14,500", note: "Holiday season performance boost", growth: "+5%" },
                        { month: "January 2024", income: "$15,000", note: "New year market momentum", growth: "+3%" },
                        { month: "February 2024", income: "$15,200", note: "Consistent performance plateau", growth: "+1%" },
                        { month: "March 2024", income: "$15,400", note: "Market expansion benefits", growth: "+1%" },
                        { month: "April 2024", income: "$15,800", note: "Algorithm improvements", growth: "+3%" },
                        { month: "May 2024", income: "$16,100", note: "Peak performance achieved", growth: "+2%" }
                      ].map((item, idx) => (
                        <div key={idx} className={`p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl border border-green-400/20`}>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-white font-bold font-['Inter']">{item.month}</span>
                            <div className="text-right">
                              <div className="text-green-400 font-bold text-xl">{item.income}</div>
                              <div className="text-green-300 text-sm">{item.growth}</div>
                            </div>
                          </div>
                          <p className="text-gray-200 text-sm font-['Inter']">{item.note}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6 font-['Inter']">💰 Life Transformation Metrics</h3>
                    <div className="space-y-6">
                      <div className="text-center p-6 bg-gradient-to-br from-green-500/20 to-emerald-600/20 rounded-3xl border border-green-400/30">
                        <div className="text-4xl font-black text-green-400 mb-3 font-['Inter']">$115,500</div>
                        <div className="text-white font-semibold mb-2 font-['Inter']">Total Passive Income</div>
                        <div className="text-green-300 text-sm">8-Month Period</div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="p-4 bg-blue-500/10 rounded-2xl border border-blue-400/20">
                          <div className="flex justify-between items-center">
                            <span className="text-white font-medium">Debt Elimination:</span>
                            <span className="text-blue-400 font-bold">$45,000</span>
                          </div>
                          <p className="text-gray-300 text-sm mt-1">Credit cards & personal loans cleared</p>
                        </div>
                        
                        <div className="p-4 bg-purple-500/10 rounded-2xl border border-purple-400/20">
                          <div className="flex justify-between items-center">
                            <span className="text-white font-medium">Emergency Fund:</span>
                            <span className="text-purple-400 font-bold">$30,000</span>
                          </div>
                          <p className="text-gray-300 text-sm mt-1">6-month expense coverage established</p>
                        </div>
                        
                        <div className="p-4 bg-yellow-500/10 rounded-2xl border border-yellow-400/20">
                          <div className="flex justify-between items-center">
                            <span className="text-white font-medium">College Savings:</span>
                            <span className="text-yellow-400 font-bold">$25,000</span>
                          </div>
                          <p className="text-gray-300 text-sm mt-1">Kids' education fund jumpstart</p>
                        </div>
                        
                        <div className="p-4 bg-pink-500/10 rounded-2xl border border-pink-400/20">
                          <div className="flex justify-between items-center">
                            <span className="text-white font-medium">Lifestyle Upgrades:</span>
                            <span className="text-pink-400 font-bold">$15,500</span>
                          </div>
                          <p className="text-gray-300 text-sm mt-1">Family vacations & quality of life</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Premium Sidebar */}
          <div className="space-y-10">
            {/* Robert's Detailed Testimonial */}
            <div className="bg-gradient-to-br from-purple-500/20 to-indigo-600/20 backdrop-blur-xl rounded-3xl p-8 border border-purple-400/30 shadow-2xl">
              <div className="flex items-center mb-8">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full flex items-center justify-center mr-6 shadow-2xl">
                    <span className="text-white font-bold text-2xl font-['Inter']">RT</span>
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-2 border-white flex items-center justify-center">
                    <i className="ri-check-line text-white text-xs"></i>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white font-['Playfair_Display']">Robert Taylor</h3>
                  <p className="text-purple-200 font-['Inter'] font-medium">Passive Income Investor</p>
                  <p className="text-purple-300 text-sm font-['Inter']">Denver, Colorado</p>
                </div>
              </div>
              <blockquote className="text-gray-100 font-['Inter'] italic text-lg leading-relaxed mb-6 relative">
                <span className="text-6xl text-purple-400/30 absolute -top-4 -left-2">"</span>
                <span className="relative z-10">
                  Eight months ago, I was skeptical about any 'passive income' system. But after consistent $15K monthly returns with ZERO losses, I'm a complete believer. This system gave me financial freedom while I kept my day job. My kids can now go to any college, we've eliminated all debt, and I sleep peacefully knowing our future is secure. The transparency and support are unmatched - truly life-changing!
                </span>
                <span className="text-6xl text-purple-400/30 absolute -bottom-8 -right-2">"</span>
              </blockquote>
              <div className="flex items-center justify-between">
                <div className="text-purple-400 font-semibold flex items-center gap-2">
                  {[1,2,3,4,5].map(star => (
                    <i key={star} className="ri-star-fill text-lg"></i>
                  ))}
                  <span className="ml-2">5/5 Life-Changing</span>
                </div>
                <div className="text-right">
                  <div className="text-purple-300 text-sm">Verified Investor</div>
                  <div className="text-purple-400 text-xs">May 2024</div>
                </div>
              </div>
            </div>

            {/* Advanced Success Metrics */}
            <div className="bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
              <h3 className="text-3xl font-bold text-white mb-8 font-['Playfair_Display']">Success Metrics</h3>
              <div className="space-y-8">
                {[
                  { value: "$15K", label: "Monthly Passive", icon: "ri-money-dollar-circle-line", color: "green" },
                  { value: "100%", label: "Success Rate", icon: "ri-trophy-line", color: "blue" },
                  { value: "0", label: "Losses Ever", icon: "ri-shield-check-line", color: "purple" },
                  { value: "32", label: "Profit Weeks", icon: "ri-calendar-check-line", color: "yellow" }
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

            {/* Personal Transformation Details */}
            <div className="bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
              <h3 className="text-3xl font-bold text-white mb-8 font-['Playfair_Display']">Life Transformation</h3>
              <div className="space-y-6">
                {[
                  { label: "Investment Start Date", value: "October 15, 2023", icon: "ri-calendar-line" },
                  { label: "Initial Capital", value: "$5,000 (Safe Amount)", icon: "ri-coins-line" },
                  { label: "Current Monthly Income", value: "$16,100+ Passive", icon: "ri-money-dollar-circle-line" },
                  { label: "Total Earnings", value: "$115,500 (8 Months)", icon: "ri-funds-line" },
                  { label: "Debt Status", value: "100% Eliminated", icon: "ri-check-double-line" },
                  { label: "Emergency Fund", value: "$30K Established", icon: "ri-shield-line" },
                  { label: "Work Schedule", value: "Still Corporate (By Choice)", icon: "ri-briefcase-line" },
                  { label: "Family Security", value: "Fully Protected", icon: "ri-heart-line" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
          <h2 className="text-5xl font-bold text-white mb-6 font-['Playfair_Display']">Ready to Build Your Passive Income Empire?</h2>
          <p className="text-xl text-purple-200 font-['Inter'] font-light mb-12 max-w-3xl mx-auto">
            Join Robert and hundreds of successful investors who've achieved financial freedom through our proven zero-risk passive income system
          </p>
          <div className="inline-flex items-center gap-6">
            <button className="bg-gradient-to-r from-purple-400 via-indigo-500 to-blue-600 hover:from-purple-500 hover:via-indigo-600 hover:to-blue-700 text-white font-bold py-5 px-10 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 font-['Inter'] whitespace-nowrap text-lg">
              <i className="ri-money-dollar-circle-line mr-3 text-xl"></i>
              Start Earning $15K/Month
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white font-semibold py-5 px-10 rounded-full border-2 border-white/30 hover:border-white/50 shadow-2xl transition-all duration-500 backdrop-blur-lg font-['Inter'] whitespace-nowrap text-lg group">
              <i className="ri-shield-check-line mr-3 text-xl group-hover:animate-pulse"></i>
              Zero Risk Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}