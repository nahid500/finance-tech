'use client';

import Link from 'next/link';

export default function MemeRocketTokenStory() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-teal-700 relative overflow-hidden">
      {/* Advanced animated background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-pink-400 to-red-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-128 h-128 bg-gradient-to-r from-red-400 to-orange-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Elegant Navigation */}
        <div className="mb-8 mt-16">
          <Link href="/#portfolio" className="text-purple-200 hover:text-white transition-all duration-500 flex items-center gap-3 font-['Inter'] font-medium tracking-wide group">
            <i className="ri-arrow-left-line text-xl group-hover:transform group-hover:-translate-x-1 transition-transform duration-300"></i>
            <span className="relative">
              Back to Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-red-500 group-hover:w-full transition-all duration-500"></span>
            </span>
          </Link>
        </div>

        {/* Premium Header Design */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-10">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-pink-400 via-red-500 to-orange-600 rounded-full flex items-center justify-center mr-8 shadow-2xl animate-bounce">
                <i className="ri-rocket-2-line text-white text-4xl"></i>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-400 via-red-500 to-orange-600 blur-lg opacity-50 animate-ping"></div>
              </div>
            </div>
            <div className="text-left">
              <h1 className="text-6xl font-bold text-white font-['Playfair_Display'] tracking-tight leading-tight">
                MemeRocket Token
                <span className="block text-2xl font-['Inter'] font-light text-pink-200 mt-2">Viral Community-Driven Cryptocurrency</span>
              </h1>
            </div>
          </div>
          <div className="relative inline-block">
            <div className="text-5xl font-black bg-gradient-to-r from-pink-400 via-red-500 to-orange-600 bg-clip-text text-transparent mb-6 font-['Inter']">
              2,400% Returns in Week 1
            </div>
            <div className="absolute -top-2 -left-2 w-full h-full bg-gradient-to-r from-pink-400 to-red-500 rounded-lg blur-xl opacity-30"></div>
          </div>
          <p className="text-2xl text-purple-100 font-['Inter'] font-light max-w-4xl mx-auto leading-relaxed">
            How MemeRocket achieved explosive viral growth with guaranteed DEX listing and community-driven pump mechanisms in just 18 hours
          </p>
        </div>

        {/* Premium Hero Image */}
        <div className="mb-20 relative group">
          <img 
            src="https://readdy.ai/api/search-image?query=Explosive%20meme%20token%20launch%20celebration%20with%20rocket%20graphics%20shooting%20through%20colorful%20clouds%2C%20cryptocurrency%20community%20members%20celebrating%20with%20phones%20showing%20massive%20green%20gains%2C%20viral%20social%20media%20notifications%20flying%20everywhere%2C%20digital%20confetti%20and%20fireworks%2C%20futuristic%20trading%20screens%20displaying%20pump%20charts%20with%20rocket%20emojis&width=1400&height=700&seq=memerocket_premium_hero&orientation=landscape"
            alt="MemeRocket Token Viral Launch"
            className="w-full h-[28rem] object-cover object-top rounded-3xl shadow-2xl transition-all duration-700 group-hover:shadow-3xl group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
          <div className="absolute bottom-6 left-6 right-6">
            <div className="bg-gradient-to-r from-pink-500/20 to-red-500/20 backdrop-blur-xl rounded-2xl p-6 border border-pink-400/30">
              <h3 className="text-xl font-bold text-white font-['Inter'] mb-2 flex items-center gap-2">
                <i className="ri-rocket-line text-pink-400"></i>
                MemeRocket Community Celebration
              </h3>
              <p className="text-pink-200 font-['Inter']">Historic 2,400% Launch Day Performance</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-16">
          {/* Enhanced Main Content */}
          <div className="lg:col-span-2 space-y-16">
            {/* Creator Story & Vision */}
            <div className="bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/20 shadow-2xl">
              <h2 className="text-4xl font-bold text-white mb-8 font-['Playfair_Display']">Creator Vision & Genesis</h2>
              <div className="space-y-6 text-gray-100 font-['Inter'] text-lg leading-relaxed">
                <p className="text-xl font-light leading-relaxed">
                  <span className="font-semibold text-pink-400">Jake Davis</span>, a 28-year-old digital marketing visionary from Austin, Texas, recognized the untapped potential in community-driven meme tokens. With 6 years of experience in viral marketing campaigns for Fortune 500 brands, Jake understood the psychological triggers that make content explode across social media platforms.
                </p>
                <p className="leading-relaxed">
                  After witnessing the astronomical success of tokens like Dogecoin and Shiba Inu, Jake realized that most meme tokens failed due to poor launch execution rather than lack of community appeal. He envisioned <span className="font-semibold text-red-400">MemeRocket</span> as the perfect fusion of internet culture, cutting-edge tokenomics, and viral marketing psychology.
                </p>
                <p className="leading-relaxed">
                  The concept was simple yet revolutionary: create a token that not only captured meme culture but actively rewarded viral behavior through innovative smart contract mechanisms. However, transforming this vision into reality required technical expertise, regulatory compliance, and marketing infrastructure that Jake didn't possess internally.
                </p>
              </div>
            </div>

            {/* Comprehensive Market Analysis */}
            <div className="bg-gradient-to-br from-red-900/20 via-red-800/15 to-red-700/10 backdrop-blur-xl rounded-3xl p-10 border border-red-400/30 shadow-2xl">
              <h2 className="text-4xl font-bold text-white mb-8 font-['Playfair_Display']">Meme Token Market Challenges</h2>
              <div className="space-y-8">
                <p className="text-gray-100 font-['Inter'] text-lg leading-relaxed mb-8">
                  The meme token ecosystem in Q4 2023 presented unique challenges that required perfect timing, viral mechanics, and technical sophistication:
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-red-300 font-['Inter'] mb-4">🔥 Viral Competition Intensity</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4 p-4 bg-red-500/10 rounded-2xl border border-red-400/20">
                        <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <i className="ri-timer-line text-red-400"></i>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white font-['Inter']">15-Minute Attention Windows</h4>
                          <p className="text-gray-200 text-sm">Average social media engagement timeframe for new tokens</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 bg-red-500/10 rounded-2xl border border-red-400/20">
                        <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <i className="ri-fire-line text-red-400"></i>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white font-['Inter']">200+ Daily Token Launches</h4>
                          <p className="text-gray-200 text-sm">Overwhelming market saturation requiring exceptional differentiation</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 bg-red-500/10 rounded-2xl border border-red-400/20">
                        <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <i className="ri-trending-up-line text-red-400"></i>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white font-['Inter']">99.7% Failure Rate</h4>
                          <p className="text-gray-200 text-sm">Most meme tokens die within 48 hours of launch</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-red-300 font-['Inter'] mb-4">⚡ Technical Execution Barriers</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4 p-4 bg-red-500/10 rounded-2xl border border-red-400/20">
                        <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <i className="ri-exchange-line text-red-400"></i>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white font-['Inter']">DEX Listing Complexity</h4>
                          <p className="text-gray-200 text-sm">Technical barriers preventing rapid market access</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 bg-red-500/10 rounded-2xl border border-red-400/20">
                        <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <i className="ri-bubble-chart-line text-red-400"></i>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white font-['Inter']">Pump Mechanism Engineering</h4>
                          <p className="text-gray-200 text-sm">Sophisticated smart contracts required for sustainable growth</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 bg-red-500/10 rounded-2xl border border-red-400/20">
                        <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <i className="ri-group-line text-red-400"></i>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white font-['Inter']">Community Coordination</h4>
                          <p className="text-gray-200 text-sm">Simultaneous multi-platform engagement orchestration</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Revolutionary Meme Token Solution */}
            <div className="bg-gradient-to-br from-green-900/20 via-green-800/15 to-emerald-700/10 backdrop-blur-xl rounded-3xl p-10 border border-green-400/30 shadow-2xl">
              <h2 className="text-4xl font-bold text-white mb-8 font-['Playfair_Display']">Jakaria Inc Viral Token Solution</h2>
              <div className="space-y-8">
                <p className="text-gray-100 font-['Inter'] text-lg leading-relaxed">
                  Our team engineered a comprehensive meme token ecosystem combining viral tokenomics, guaranteed DEX listing protocols, and multi-channel social media orchestration designed specifically for maximum community engagement and sustainable pump mechanics.
                </p>
                
                <div className="bg-gradient-to-r from-pink-500/20 to-red-500/20 rounded-3xl p-8 border border-pink-400/30">
                  <h3 className="text-2xl font-bold text-white mb-6 font-['Inter']">🚀 Viral-Optimized Token Architecture</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                          <i className="ri-check-line text-green-400"></i>
                        </div>
                        <span className="text-gray-100 font-['Inter']">Deflationary burn mechanism (2% per transaction)</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                          <i className="ri-check-line text-green-400"></i>
                        </div>
                        <span className="text-gray-100 font-['Inter']">Community rewards for viral content creation</span>
                      </div>
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
                        <span className="text-gray-100 font-['Inter']">Automated liquidity pool management</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                          <i className="ri-check-line text-green-400"></i>
                        </div>
                        <span className="text-gray-100 font-['Inter']">Meme milestone reward system</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                          <i className="ri-check-line text-green-400"></i>
                        </div>
                        <span className="text-gray-100 font-['Inter']">Social media integration smart contracts</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                          <i className="ri-check-line text-green-400"></i>
                        </div>
                        <span className="text-gray-100 font-['Inter']">Diamond hands bonus mechanisms</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                          <i className="ri-check-line text-green-400"></i>
                        </div>
                        <span className="text-gray-100 font-['Inter']">Viral coefficient tracking & rewards</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl p-8 border border-purple-400/30">
                  <h3 className="text-2xl font-bold text-white mb-6 font-['Inter']">📱 Multi-Platform Social Orchestration</h3>
                  <div className="grid md:grid-cols-4 gap-6">
                    {[
                      { platform: "Twitter/X", reach: "2.4M", engagement: "34%", color: "blue" },
                      { platform: "TikTok", reach: "850K", engagement: "67%", color: "pink" },
                      { platform: "Telegram", reach: "15K", engagement: "89%", color: "cyan" },
                      { platform: "Discord", reach: "8.5K", engagement: "92%", color: "purple" }
                    ].map((platform, idx) => (
                      <div key={idx} className={`text-center p-4 bg-${platform.color}-500/10 rounded-2xl border border-${platform.color}-400/20`}>
                        <div className={`text-2xl font-bold text-${platform.color}-400 mb-1`}>{platform.reach}</div>
                        <div className="text-white text-sm font-medium mb-2">{platform.platform}</div>
                        <div className={`text-${platform.color}-300 text-xs`}>{platform.engagement} Engagement</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 18-Hour Launch Chronicle */}
            <div className="bg-gradient-to-br from-yellow-900/20 via-orange-800/15 to-red-700/10 backdrop-blur-xl rounded-3xl p-10 border border-yellow-400/30 shadow-2xl">
              <h2 className="text-4xl font-bold text-white mb-8 font-['Playfair_Display']">18-Hour Viral Launch Chronicle</h2>
              <div className="space-y-10">
                {[
                  {
                    hours: "0-6",
                    title: "Genesis & Smart Contract Deployment",
                    time: "6:00 AM - 12:00 PM EST",
                    description: "Token creation with viral-focused tokenomics and automated pump mechanisms.",
                    milestones: [
                      "MemeRocket (MRKT) token deployed on BSC",
                      "1B total supply with 50% burned at launch",
                      "Anti-whale limits: 1% max transaction",
                      "Liquidity pool locked for 2 years"
                    ],
                    color: "blue",
                    icon: "ri-rocket-line"
                  },
                  {
                    hours: "6-12",
                    title: "Viral Marketing Orchestration",
                    time: "12:00 PM - 6:00 PM EST",
                    description: "Simultaneous multi-platform marketing blitz with influencer coordination.",
                    milestones: [
                      "47 crypto influencers activated simultaneously",
                      "Custom memes deployed across 12 platforms",
                      "Telegram community reached 8,000 members",
                      "Twitter trending hashtag #MemeRocketLaunch"
                    ],
                    color: "purple",
                    icon: "ri-megaphone-line"
                  },
                  {
                    hours: "12-18",
                    title: "DEX Listing & Explosive Growth",
                    time: "6:00 PM - 12:00 AM EST",
                    description: "Guaranteed DEX listing execution with coordinated buy pressure and viral momentum.",
                    milestones: [
                      "PancakeSwap listing approved in 14 minutes",
                      "Initial price: $0.000001, Peak: $0.000025",
                      "12,400 holders acquired in 6 hours",
                      "2,400% price appreciation achieved"
                    ],
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
                        <h3 className="text-2xl font-bold text-white font-['Inter']">Hours {phase.hours}: {phase.title}</h3>
                        <span className={`px-3 py-1 bg-${phase.color}-500/20 text-${phase.color}-300 rounded-full text-sm font-medium`}>
                          {phase.time}
                        </span>
                      </div>
                      <p className="text-gray-100 font-['Inter'] text-lg mb-6 leading-relaxed">{phase.description}</p>
                      <div className="grid md:grid-cols-2 gap-3">
                        {phase.milestones.map((milestone, idx) => (
                          <div key={idx} className="flex items-start gap-3 p-3 bg-white/5 rounded-xl">
                            <div className={`w-6 h-6 bg-${phase.color}-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                              <i className="ri-check-line text-xs text-green-400"></i>
                            </div>
                            <span className="text-gray-200 font-['Inter'] text-sm">{milestone}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Comprehensive Performance Analysis */}
            <div className="bg-gradient-to-br from-emerald-900/20 via-green-800/15 to-teal-700/10 backdrop-blur-xl rounded-3xl p-10 border border-emerald-400/30 shadow-2xl">
              <h2 className="text-4xl font-bold text-white mb-8 font-['Playfair_Display']">Explosive Performance Analysis</h2>
              <div className="space-y-8">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center p-6 bg-gradient-to-br from-green-500/20 to-emerald-600/20 rounded-3xl border border-green-400/30">
                    <div className="text-4xl font-black text-green-400 mb-3 font-['Inter']">2,400%</div>
                    <div className="text-white font-semibold mb-2 font-['Inter']">Week 1 Returns</div>
                    <div className="text-green-300 text-sm">From $0.000001 to $0.000025</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-blue-500/20 to-cyan-600/20 rounded-3xl border border-blue-400/30">
                    <div className="text-4xl font-black text-blue-400 mb-3 font-['Inter']">$4.2M</div>
                    <div className="text-white font-semibold mb-2 font-['Inter']">Peak Market Cap</div>
                    <div className="text-blue-300 text-sm">Achieved within 18 hours</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-3xl border border-purple-400/30">
                    <div className="text-4xl font-black text-purple-400 mb-3 font-['Inter']">12.4K</div>
                    <div className="text-white font-semibold mb-2 font-['Inter']">Token Holders</div>
                    <div className="text-purple-300 text-sm">Organic community growth</div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6 font-['Inter']">🎯 Social Media Domination</h3>
                    <div className="space-y-4">
                      {[
                        { metric: "Twitter Impressions", value: "2.4M", detail: "Viral hashtag performance", color: "blue" },
                        { metric: "TikTok Views", value: "850K", detail: "Meme compilation videos", color: "pink" },
                        { metric: "Telegram Growth", value: "15,000", detail: "Active community members", color: "cyan" },
                        { metric: "Discord Engagement", value: "8,500", detail: "Daily active participants", color: "purple" }
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
                    <h3 className="text-2xl font-bold text-white mb-6 font-['Inter']">📈 Trading Performance</h3>
                    <div className="space-y-4">
                      {[
                        { metric: "Daily Volume Peak", value: "$890K", detail: "24h trading record", color: "green" },
                        { metric: "Price Volatility", value: "±45%", detail: "Healthy price action", color: "yellow" },
                        { metric: "Liquidity Pool TVL", value: "$1.2M", detail: "Deep liquidity support", color: "blue" },
                        { metric: "Holder Retention", value: "87%", detail: "Diamond hands community", color: "purple" }
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
            {/* Creator Testimonial */}
            <div className="bg-gradient-to-br from-pink-500/20 to-red-600/20 backdrop-blur-xl rounded-3xl p-8 border border-pink-400/30 shadow-2xl">
              <div className="flex items-center mb-8">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-red-500 rounded-full flex items-center justify-center mr-6 shadow-2xl">
                    <span className="text-white font-bold text-2xl font-['Inter']">JD</span>
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-2 border-white flex items-center justify-center">
                    <i className="ri-check-line text-white text-xs"></i>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white font-['Playfair_Display']">Jake Davis</h3>
                  <p className="text-pink-200 font-['Inter'] font-medium">Founder & Creator</p>
                  <p className="text-pink-300 text-sm font-['Inter']">Digital Marketing Expert</p>
                </div>
              </div>
              <blockquote className="text-gray-100 font-['Inter'] italic text-lg leading-relaxed mb-6 relative">
                <span className="text-6xl text-pink-400/30 absolute -top-4 -left-2">"</span>
                <span className="relative z-10">
                  Absolutely mind-blowing results! DEX listing in 18 hours, guaranteed pump delivered 2,400% returns, and viral marketing beyond my wildest dreams. The community exploded overnight with organic growth I'd never seen before. This is how meme tokens should be launched - with professional execution and unstoppable momentum!
                </span>
                <span className="text-6xl text-pink-400/30 absolute -bottom-8 -right-2">"</span>
              </blockquote>
              <div className="flex items-center justify-between">
                <div className="text-pink-400 font-semibold flex items-center gap-2">
                  {[1,2,3,4,5].map(star => (
                    <i key={star} className="ri-star-fill text-lg"></i>
                  ))}
                  <span className="ml-2">5/5 Explosive Rating</span>
                </div>
                <div className="text-right">
                  <div className="text-pink-300 text-sm">Verified Creator</div>
                  <div className="text-pink-400 text-xs">December 2023</div>
                </div>
              </div>
            </div>

            {/* Advanced Performance Metrics */}
            <div className="bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
              <h3 className="text-3xl font-bold text-white mb-8 font-['Playfair_Display']">Launch Metrics</h3>
              <div className="space-y-8">
                {[
                  { value: "2,400%", label: "Week 1 Returns", icon: "ri-rocket-line", color: "green" },
                  { value: "18hr", label: "DEX Listing Speed", icon: "ri-timer-line", color: "blue" },
                  { value: "$4.2M", label: "Peak Market Cap", icon: "ri-funds-line", color: "purple" },
                  { value: "12.4K", label: "Community Members", icon: "ri-group-line", color: "pink" }
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

            {/* Enhanced Project Details */}
            <div className="bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
              <h3 className="text-3xl font-bold text-white mb-8 font-['Playfair_Display']">Project Specifications</h3>
              <div className="space-y-6">
                {[
                  { label: "Token Standard", value: "BEP-20 (BSC)", icon: "ri-coins-line" },
                  { label: "Total Supply", value: "1B MRKT (50% Burned)", icon: "ri-fire-line" },
                  { label: "Launch Strategy", value: "Viral Community-Driven", icon: "ri-rocket-2-line" },
                  { label: "Listing Speed", value: "18 Hours (Guaranteed)", icon: "ri-speed-line" },
                  { label: "Anti-Whale Protection", value: "1% Max Transaction", icon: "ri-shield-check-line" },
                  { label: "Liquidity Lock", value: "2 Years (Rugproof)", icon: "ri-lock-line" },
                  { label: "Community Rewards", value: "2% Reflection", icon: "ri-gift-line" },
                  { label: "Marketing Budget", value: "$50K Multi-Channel", icon: "ri-megaphone-line" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-red-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
          <h2 className="text-5xl font-bold text-white mb-6 font-['Playfair_Display']">Ready to Launch Your Viral Meme Token?</h2>
          <p className="text-xl text-purple-200 font-['Inter'] font-light mb-12 max-w-3xl mx-auto">
            Join the exclusive circle of meme token creators who've achieved explosive growth through our proven viral launch system
          </p>
          <div className="inline-flex items-center gap-6">
            <button className="bg-gradient-to-r from-pink-400 via-red-500 to-orange-600 hover:from-pink-500 hover:via-red-600 hover:to-orange-700 text-white font-bold py-5 px-10 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 font-['Inter'] whitespace-nowrap text-lg">
              <i className="ri-rocket-2-line mr-3 text-xl"></i>
              Launch Viral Token Now
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white font-semibold py-5 px-10 rounded-full border-2 border-white/30 hover:border-white/50 shadow-2xl transition-all duration-500 backdrop-blur-lg font-['Inter'] whitespace-nowrap text-lg group">
              <i className="ri-fire-line mr-3 text-xl group-hover:animate-pulse"></i>
              Get Pump Guarantee
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}