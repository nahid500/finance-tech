'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { SimpleAreaChart } from './ui/SimpleAreaChart';

export default function LiveMarketData() {
  const [stats, setStats] = useState({
    volume24h: 2.4,
    volumeChange: 12.5,
    marketCap: 847,
    marketCapChange: -3.2,
    activeProjects: 197,
    projectsChange: 15.3
  });

  const [chartData, setChartData] = useState([
    { time: '00:00', value: 845 },
    { time: '04:00', value: 852 },
    { time: '08:00', value: 848 },
    { time: '12:00', value: 856 },
    { time: '16:00', value: 851 },
    { time: '20:00', value: 871 },
    { time: '24:00', value: 878 }
  ]);

  const [isLive, setIsLive] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        volume24h: prev.volume24h + (Math.random() - 0.5) * 0.1,
        volumeChange: prev.volumeChange + (Math.random() - 0.5) * 2,
        marketCap: prev.marketCap + (Math.random() - 0.5) * 10,
        marketCapChange: prev.marketCapChange + (Math.random() - 0.5) * 1,
        activeProjects: prev.activeProjects + Math.floor(Math.random() * 3 - 1),
        projectsChange: prev.projectsChange + (Math.random() - 0.5) * 2
      }));

      setChartData(prev => {
        const newData = [...prev];
        newData.shift();
        const lastValue = newData[newData.length - 1].value;
        const newValue = lastValue + (Math.random() - 0.5) * 20;
        newData.push({
          time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
          value: Math.max(0, newValue)
        });
        return newData;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num, suffix = '') => {
    if (num >= 1000) {
      return `$${(num / 1000).toFixed(1)}K${suffix}`;
    }
    return `$${num.toFixed(1)}${suffix}`;
  };

  const formatChange = (change) => {
    const color = change >= 0 ? 'text-green-400' : 'text-red-400';
    const sign = change >= 0 ? '+' : '';
    return <span className={`${color} text-sm italic`}>{sign}{change.toFixed(1)}%</span>;
  };


  const successStories = [
    {
      href: "/success-stories/cryptoventures-capital",
      title: "CryptoVentures Capital",
      subtitle: "ICO Fundraising",
      testimonial: "Jakaria Inc helped us raise $12.5M through ICO in just 6 days without any upfront fees. Their dedicated team made the impossible possible.",
      avatar: "MW",
      name: "Michael Wang",
      role: "CEO & Founder",
      metric: "$12.5M",
      description: "Raised in 6 Days",
      icon: "ri-coin-line",
      bgColor: "from-yellow-400 to-orange-600",
      image: "https://readdy.ai/api/search-image?query=Modern%20blockchain%20startup%20office%20with%20cryptocurrency%20trading%20displays%2C%20professional%20team%20analyzing%20digital%20assets%2C%20high-tech%20financial%20environment%2C%20ICO%20development%20workspace%2C%20blockchain%20technology%20innovation%2C%20cryptocurrency%20success%20celebration&width=400&height=250&seq=cryptoventures_success&orientation=landscape"
    },
    {
      href: "/success-stories/defimax-protocol",
      title: "DeFiMax Protocol",
      subtitle: "Token Creation & Ecosystem",
      testimonial: "From token creation to building our entire DeFi ecosystem, the team delivered beyond expectations. Our token achieved 500% growth in first month.",
      avatar: "SR",
      name: "Sarah Rodriguez",
      role: "Protocol Lead",
      metric: "500%",
      description: "Token Growth",
      icon: "ri-exchange-line",
      bgColor: "from-blue-400 to-purple-600",
      image: "https://readdy.ai/api/search-image?query=DeFi%20protocol%20development%20team%20working%20on%20decentralized%20finance%20platform%2C%20blockchain%20developers%20coding%20smart%20contracts%2C%20modern%20fintech%20office%2C%20cryptocurrency%20ecosystem%20building%2C%20digital%20finance%20innovation%20workspace&width=400&height=250&seq=defimax_success&orientation=landscape"
    },
    {
      href: "/success-stories/memerocket-token",
      title: "MemeRocket Token",
      subtitle: "Meme Token Launch",
      testimonial: "Listed on major DEX within 18 hours with guaranteed pump! Generated 2,400% returns in first week. The marketing was absolutely phenomenal.",
      avatar: "JD",
      name: "Jake Davis",
      role: "Token Creator",
      metric: "2,400%",
      description: "Returns in Week 1",
      icon: "ri-rocket-2-line",
      bgColor: "from-pink-400 to-red-600",
      image: "https://readdy.ai/api/search-image?query=Meme%20token%20launch%20celebration%20with%20rocket%20graphics%2C%20cryptocurrency%20community%20celebration%2C%20viral%20marketing%20campaign%20success%2C%20digital%20asset%20trading%20excitement%2C%20decentralized%20exchange%20listing%20celebration%2C%20crypto%20pump%20celebration&width=400&height=250&seq=memerocket_success&orientation=landscape"
    },
    {
      href: "/success-stories/blockchain-enterprises",
      title: "BlockChain Enterprises",
      subtitle: "Corporate ICO",
      testimonial: "Raised $8.2M for expansion without giving up any equity. The dedicated blockchain developers delivered flawlessly in 5 days.",
      avatar: "AM",
      name: "Anna Mitchell",
      role: "CFO",
      metric: "$8.2M",
      description: "Equity-Free Capital",
      icon: "ri-building-2-line",
      bgColor: "from-green-400 to-teal-600",
      image: "https://readdy.ai/api/search-image?query=Enterprise%20blockchain%20implementation%20office%20with%20corporate%20team%20developing%20cryptocurrency%20solutions%2C%20professional%20blockchain%20consultants%2C%20business%20transformation%20through%20digital%20assets%2C%20corporate%20cryptocurrency%20adoption%2C%20enterprise%20token%20development&width=400&height=250&seq=blockchain_enterprises_success&orientation=landscape"
    },
    {
      href: "/success-stories/investorpro-passive",
      title: "InvestorPro Passive Income",
      subtitle: "Passive Income Generation",
      testimonial: "Generating $15K monthly passive income through weekly meme token launches. Zero risk, consistent profits, and complete transparency.",
      avatar: "RT",
      name: "Robert Taylor",
      role: "Investor",
      metric: "$15K",
      description: "Monthly Passive",
      icon: "ri-money-dollar-circle-line",
      bgColor: "from-purple-400 to-indigo-600",
      image: "https://readdy.ai/api/search-image?query=Individual%20investor%20earning%20passive%20income%20through%20cryptocurrency%20trading%2C%20person%20monitoring%20profitable%20meme%20token%20launches%20on%20computer%2C%20home%20office%20setup%20with%20crypto%20trading%20success%2C%20financial%20independence%20through%20digital%20assets%2C%20passive%20income%20celebration&width=400&height=250&seq=investorpro_success&orientation=landscape"
    },
    {
      href: "/success-stories/gamefi-universe",
      title: "GameFi Universe",
      subtitle: "Gaming Token Ecosystem",
      testimonial: "Built complete GameFi ecosystem with play-to-earn mechanics. Reached 50K active players and $3M market cap within 2 weeks of launch.",
      avatar: "LC",
      name: "Lisa Chen",
      role: "Game Director",
      metric: "50K",
      description: "Active Players",
      icon: "ri-gamepad-line",
      bgColor: "from-cyan-400 to-blue-600",
      image: "https://readdy.ai/api/search-image?query=GameFi%20development%20team%20creating%20blockchain%20gaming%20ecosystem%2C%20play-to-earn%20game%20development%20office%2C%20NFT%20gaming%20platform%20launch%2C%20cryptocurrency%20gaming%20community%20celebration%2C%20blockchain%20game%20success%20story%2C%20gaming%20token%20ecosystem&width=400&height=250&seq=gamefi_success&orientation=landscape"
    },
    
  ];

  const nextStories = () => {
    setCurrentIndex((prev) => (prev + 3) % successStories.length);
  };

  const prevStories = () => {
    setCurrentIndex((prev) => (prev - 3 + successStories.length) % successStories.length);
  };

  const visibleStories = [
    successStories[currentIndex],
    successStories[(currentIndex + 1) % successStories.length],
    successStories[(currentIndex + 2) % successStories.length]
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-purple-500 to-teal-700 relative overflow-hidden">
      {/* Animated background patterns */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-teal-400 to-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-400 to-teal-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-gradient-to-r from-teal-300 to-purple-400 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center mb-4">
            <h1 className="text-5xl font-bold text-white mb-8 font-[\'Montserrat\'] tracking-tight">
              Live Market Data
            </h1>
            <div className={`ml-4 flex items-center gap-2 px-4 py-2 rounded-full ${isLive ? 'bg-green-500/20 border border-green-400' : 'bg-gray-500/20 border border-gray-400'} transition-all duration-300`}>
              <div className={`w-2 h-2 rounded-full ${isLive ? 'bg-green-400 animate-pulse' : 'bg-gray-400'}`}></div>
              <span className={`text-sm font-medium ${isLive ? 'text-green-400' : 'text-gray-400'}`}>
                {isLive ? 'Live' : 'Offline'}
              </span>
            </div>
          </div>
          <p className="text-xl text-purple-200 font-[\'Poppins\'] max-w-2xl mx-auto">
            Real-time project valuation and market analytics with live updates
          </p>
        </div>

        {/* Live Chart */}
        <div className="mb-16 mb:px-12 animate-slide-up">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
            <h2 className="text-2xl font-bold text-white mb-6 text-center font-[\'Montserrat\']">Market Trend Analysis</h2>
            <div className="h-64">
              <SimpleAreaChart 
                data={chartData} 
                dataKey="value" 
                nameKey="time"
                color="#14B8A6"
                gradient={true}
              />
            </div>
          </div>
        </div>

        {/* Data Statistics
        <div className="grid md:grid-cols-3 gap-8">
          <div className="group animate-slide-up-delay-1">
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-600/20 backdrop-blur-lg rounded-2xl p-8 border border-green-400/30 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:bg-gradient-to-br hover:from-green-500/30 hover:to-emerald-600/30 cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-white font-[\'Montserrat\']">24h Volume</h3>
                <div className="w-8 h-8 flex items-center justify-center">
                  <i className="ri-arrow-up-line text-green-400 text-xl group-hover:animate-bounce"></i>
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-white font-[\'Poppins\'] tracking-tight">
                  {formatNumber(stats.volume24h, 'M')}
                </div>
                <div>{formatChange(stats.volumeChange)}</div>
              </div>
            </div>
          </div>

          <div className="group animate-slide-up-delay-2">
            <div className="bg-gradient-to-br from-blue-500/20 to-indigo-600/20 backdrop-blur-lg rounded-2xl p-8 border border-blue-400/30 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:bg-gradient-to-br hover:from-blue-500/30 hover:to-indigo-600/30 cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-white font-[\'Montserrat\']">Market Cap</h3>
                <div className="w-8 h-8 flex items-center justify-center">
                  <i className="ri-pie-chart-line text-blue-400 text-xl group-hover:animate-spin"></i>
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-white font-[\'Poppins\'] tracking-tight">
                  {formatNumber(stats.marketCap, 'M')}
                </div>
                <div>{formatChange(stats.marketCapChange)}</div>
              </div>
            </div>
          </div>

          <div className="group animate-slide-up-delay-3">
            <div className="bg-gradient-to-br from-yellow-500/20 to-amber-600/20 backdrop-blur-lg rounded-2xl p-8 border border-yellow-400/30 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:bg-gradient-to-br hover:from-yellow-500/30 hover:to-amber-600/30 cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-white font-[\'Montserrat\']">Active Projects</h3>
                <div className="w-8 h-8 flex items-center justify-center">
                  <i className="ri-rocket-line text-yellow-400 text-xl group-hover:animate-pulse"></i>
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-white font-[\'Poppins\'] tracking-tight">
                  {stats.activeProjects.toLocaleString()}
                </div>
                <div>{formatChange(stats.projectsChange)}</div>
              </div>
            </div>
          </div>
        </div> */}

        {/* Client Success Stories Section */}
        <div className="mt-24 animate-fade-in-up">
          <div className="text-center mb-16 px-6">
            <h2 className="text-4xl font-bold text-white mb-8 font-[\'Montserrat\'] tracking-tight">
              Client Success Stories
            </h2>
            <p className="text-xl text-purple-200 font-[\'Poppins\'] max-w-3xl mx-auto">
              Discover how businesses raised millions through our ICO services, launched successful tokens, and built thriving blockchain ecosystems
            </p>
          </div>

          {/* Success Stories Carousel */}
          <div className="relative">
            {/* Navigation Buttons */}
            <button 
              onClick={prevStories}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-lg rounded-full p-4 border border-white/20 shadow-xl transition-all duration-300 hover:scale-110"
            >
              <i className="ri-arrow-left-line text-white text-2xl"></i>
            </button>
            <button 
              onClick={nextStories}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-lg rounded-full p-4 border border-white/20 shadow-xl transition-all duration-300 hover:scale-110"
            >
              <i className="ri-arrow-right-line text-white text-2xl"></i>
            </button>

            {/* Stories Grid */}
            <div className="mx-12">
              <div className="grid lg:grid-cols-3 gap-8">
                {visibleStories.map((story, index) => (
                  <div key={`${story.href}-${currentIndex}-${index}`} className="group">
                    <Link href={story.href}>
                      <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:bg-white/15 cursor-pointer h-full">
                        <div className="mb-6">
                          <img 
                            src={story.image}
                            alt={story.title}
                            className="w-full h-48 object-cover object-top rounded-2xl"
                          />
                        </div>
                        <div className="flex items-center mb-4">
                          <div className={`w-12 h-12 bg-gradient-to-br ${story.bgColor} rounded-full flex items-center justify-center mr-4`}>
                            <i className={`${story.icon} text-white text-xl`}></i>
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white font-[\'Montserrat\']">{story.title}</h3>
                            <p className="text-purple-200 text-sm font-[\'Poppins\']">{story.subtitle}</p>
                          </div>
                        </div>
                        <blockquote className="text-gray-200 font-[\'Poppins\'] italic mb-6 leading-relaxed">
                          "{story.testimonial}"
                        </blockquote>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className={`w-10 h-10 bg-gradient-to-br ${story.bgColor} rounded-full flex items-center justify-center mr-3`}>
                              <span className="text-white font-bold text-sm">{story.avatar}</span>
                            </div>
                            <div>
                              <p className="text-white font-semibold font-[\'Poppins\']">{story.name}</p>
                              <p className="text-purple-200 text-xs">{story.role}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-green-400 font-bold text-2xl">{story.metric}</div>
                            <div className="text-purple-200 text-xs">{story.description}</div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination Indicators */}
            {/* <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: Math.ceil(successStories.length / 3) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index * 3)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    Math.floor(currentIndex / 3) === index 
                      ? 'bg-white' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div> */}

          {/* Key Statistics */}
          {/* <div className="mt-16 bg-gradient-to-r from-purple-600/30 to-teal-600/30 backdrop-blur-lg rounded-3xl p-12 border border-white/20 shadow-2xl">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-4 font-[\'Montserrat\']">Our Impact in Numbers</h3>
              <p className="text-purple-200 font-[\'Poppins\'] text-lg">Transforming businesses through blockchain innovation and ICO excellence</p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i className="ri-coin-line text-white text-2xl"></i>
                </div>
                <div className="text-4xl font-bold text-white mb-2 font-[\'Poppins\']">$85M+</div>
                <div className="text-purple-200 font-[\'Poppins\']">Funds Raised</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i className="ri-rocket-2-line text-white text-2xl"></i>
                </div>
                <div className="text-4xl font-bold text-white mb-2 font-[\'Poppins\']">150+</div>
                <div className="text-purple-200 font-[\'Poppins\']">Successful Launches</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i className="ri-time-line text-white text-2xl"></i>
                </div>
                <div className="text-4xl font-bold text-white mb-2 font-[\'Poppins\']">6.2</div>
                <div className="text-purple-200 font-[\'Poppins\']">Days Average Launch</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i className="ri-award-line text-white text-2xl"></i>
                </div>
                <div className="text-4xl font-bold text-white mb-2 font-[\'Poppins\']">100%</div>
                <div className="text-purple-200 font-[\'Poppins\']">Success Rate</div>
              </div>
            </div> */}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-4">
              <button className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-teal-500 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 font-[\'Poppins\'] whitespace-nowrap">
                <i className="ri-rocket-line mr-2"></i>
                Launch Your ICO Today
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-full border border-white/30 hover:border-white/50 shadow-xl transition-all duration-300 backdrop-blur-lg font-[\'Poppins\'] whitespace-nowrap">
                <i className="ri-phone-line mr-2"></i>
                Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}