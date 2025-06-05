"use client"

import React from 'react';
import { ArrowLeft, Clock, User, TrendingUp, BarChart3, Target, Database, Brain, Users } from 'lucide-react';

const Learning = () => {
  const blogPosts = [
    {
      title: "What Is an ICO?",
      excerpt: "An Initial Coin Offering (ICO) is a method for raising capital by selling cryptocurrency tokens to investors. ICOs provide a direct, fast, and efficient route to funding, bypassing traditional intermediaries. These tokens are used for accessing blockchain platforms or services, offering investors early access to promising projects. ICOs create decentralized investment opportunities, enabling anyone to contribute and participate in the cryptocurrency ecosystem.",
      author: "ICO",
      readTime: "5 min read",
      date: "June 1, 2025",
      category: "ICO Basics",
      icon: BarChart3
    },
    {
      title: "What Is a Meme Token?",
      excerpt: "Meme tokens are cryptocurrencies inspired by internet trends or jokes, like Dogecoin. They’re highly speculative and often driven by community hype rather than inherent utility. Meme tokens can experience massive price fluctuations based on social media influence and viral movements. While some tokens like Dogecoin have gained value, they are still volatile and carry higher risks for investors.",
      author: "MemeCoins",
      readTime: "8 min read",
      date: "May 28, 2025",
      category: "MemeCoins",
      icon: TrendingUp
    },
    {
      title: "Understanding Decentralized Wallets",
      excerpt: "A decentralized wallet lets users store cryptocurrency securely, providing full control over private keys. These wallets offer enhanced security and autonomy by eliminating reliance on third-party services. They are essential for interacting with decentralized finance (DeFi) applications and blockchain networks, providing secure access to digital assets. Decentralized wallets like MetaMask and Trust Wallet give users complete control over their crypto.",
      author: "Wallets",
      readTime: "12 min read",
      date: "May 25, 2025",
      category: "Wallets",
      icon: Brain
    },
    {
      title: "Exploring BONKbot",
      excerpt: "BONKbot is Solana's official crypto trading bot integrated with Telegram. This bot enables users to execute trades and interact with the $BONK community directly within Telegram, streamlining the process of trading Solana tokens. By automating trades, BONKbot allows users to access the Solana ecosystem’s liquidity with ease and efficiency.",
      author: "BONKbot",
      readTime: "10 min read",
      date: "May 22, 2025",
      category: "BONKbot",
      icon: Users
    },
    {
      title: "Raising Funds Through an ICO",
      excerpt: "Launching an ICO allows entrepreneurs to raise funds by selling tokens to investors. ICOs provide a flexible, efficient method to fund projects, offering a global pool of investors. A well-executed ICO can attract funding quickly, providing early-stage capital. It’s a powerful tool for startups, bypassing traditional financial institutions while building community engagement and support.",
      author: "Fundraising",
      readTime: "7 min read",
      date: "May 20, 2025",
      category: "Fundraising",
      icon: Target
    },
    {
      title: "Short-Term Income with Meme Tokens",
      excerpt: "Meme tokens offer the potential for short-term profits due to their highly volatile nature. Price movements are often driven by trends and social media activity, creating opportunities for traders. However, these tokens can lose value rapidly once the hype fades, so investors must act quickly. By following trends and understanding the speculative nature of meme coins, you can capitalize on market movements.",
      author: "Profits",
      readTime: "15 min read",
      date: "May 18, 2025",
      category: "Profits",
      icon: Database
    },
    {
      title: "How to Grow Your Business with ICO Funds",
      excerpt: "CO funds can significantly boost your business by supporting product development, marketing, and team expansion. Efficient use of these funds helps scale operations quickly, allowing startups to accelerate their market presence. By strategically investing in key areas, entrepreneurs can maximize the potential of their ICO funding, leading to faster growth and greater investor confidence.",
      author: "Growth",
      readTime: "11 min read",
      date: "May 15, 2025",
      category: "Growth",
      icon: TrendingUp
    },
    {
      title: "Jakaria.finance: Empowering Entrepreneurs and Investors",
      excerpt: "Jakaria.finance helps entrepreneurs raise funds through ICOs and enables investors to earn short-term profits by launching meme tokens on DEX platforms — all with no upfront fees. Entrepreneurs receive expert ICO development and marketing support, while investors benefit from meme token launches with minimal risk. Jakaria.finance makes crypto accessible, allowing both entrepreneurs and investors to achieve success without financial barriers.",
      author: "Empowerment",
      readTime: "6 min read",
      date: "May 12, 2025",
      category: "Empowerment",
      icon: Target
    },

  ];

  const categories = ["All","ICO Basics", "MemeCoins", "Wallets", "BONKbot", "Fundraising", "Profits", "Growth", "Empowerment"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div id='learning' className="min-h-screen md:mt-16 bg-gradient-to-br from-purple-50 via-white to-blue-50">
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
       
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent leading-tight">
            Learning Hub
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Explore our comprehensive collection of articles, guides, and insights.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8 sm:mb-12">
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 hover:border-purple-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPosts.map((post, index) => (
            <article key={index} className="bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group cursor-pointer">
              <div className="h-32 sm:h-48 bg-gradient-to-br from-purple-100 to-blue-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 group-hover:from-purple-600/30 group-hover:to-blue-600/30 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <post.icon className="w-12 h-12 sm:w-16 sm:h-16 text-purple-600/40 group-hover:text-purple-600/60 transition-colors duration-300" />
                </div>
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                  <span className="bg-white/90 text-purple-600 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-purple-600 transition-colors duration-200 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed line-clamp-8">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3">
                  <div className="flex items-center gap-1 sm:gap-2">
                    <User className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="truncate">{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <div className="text-xs text-gray-400">
                  {post.date}
                </div>
              </div>
            </article>
          ))}
        </div>


      </main>
    </div>
  );
};

export default Learning;