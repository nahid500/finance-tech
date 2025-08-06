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
      title: "Understanding Tokenomics",
      excerpt: "Tokenomics involves the economic structure of a cryptocurrency, such as its supply distribution, utility, and demand. A well-designed tokenomics model can create strong market incentives, helping a project build a solid user base. It plays a critical role in determining whether a token will appreciate or devalue over time. Investors must carefully consider tokenomics before investing in an ICO.",
      author: "ICO",
      readTime: "5 min read",
      date: "June 11, 2025",
      category: "ICO Basics",
      icon: BarChart3
    },
    {
      title: "Legal Aspects of ICOs",
      excerpt: "Legal compliance is crucial for ICOs to avoid fraud and legal issues. ICOs must adhere to Know Your Customer (KYC) and Anti-Money Laundering (AML) policies to ensure that investors are legitimate. Additionally, ICOs must comply with local securities laws, which can vary by jurisdiction. Understanding the legal landscape prevents regulatory issues and ensures the ICO is transparent and secure.",
      author: "ICO",
      readTime: "6 min read",
      date: "June 13, 2025",
      category: "ICO Basics",
      icon: BarChart3
    },
    {
      title: "How to Evaluate ICO Projects",
      excerpt: "Evaluating an ICO involves analyzing the project's whitepaper, team, and technology. The whitepaper should clearly outline the problem the project aims to solve and its proposed solution. A reputable team with experience in the industry can increase the chances of success, while a solid technology foundation and roadmap are vital for long-term sustainability. Always research thoroughly before committing funds.",
      author: "ICO",
      readTime: "3 min read",
      date: "June 13, 2025",
      category: "ICO Basics",
      icon: BarChart3
    },
    {
      title: "Risks and Challenges of ICOs",
      excerpt: "While ICOs offer high potential returns, they come with significant risks. Regulatory uncertainty, the possibility of fraud, and market volatility can lead to substantial losses. ICOs can also face operational delays or fail to meet projected goals, leading to loss of investor confidence. It’s important for investors to be aware of these risks and conduct due diligence before participating.",
      author: "ICO",
      readTime: "7 min read",
      date: "June 14, 2025",
      category: "ICO Basics",
      icon: BarChart3
    },
    {
      title: "ICO vs. Traditional Fundraising",
      excerpt: "ICOs provide an alternative to traditional fundraising by directly offering tokens to the public, often bypassing banks and venture capitalists. This allows startups to raise funds quickly and without the stringent requirements of traditional methods. Unlike traditional fundraising, ICOs also offer investors the potential for higher returns but come with greater risks. Understanding these differences can help entrepreneurs decide which path is best for their project.",
      author: "ICO",
      readTime: "10 min read",
      date: "June 14, 2025",
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
      title: "Popular Meme Tokens and Their Impact",
      excerpt: "Meme tokens like Dogecoin and Shiba Inu have gained immense popularity due to social media hype and celebrity endorsements. These tokens are often created as jokes or for fun but have sparked large communities of enthusiastic supporters. While some meme coins have achieved impressive market caps, they are highly speculative and driven largely by community sentiment rather than technological value.",
      author: "MemeCoins",
      readTime: "8 min read",
      date: "May 28, 2025",
      category: "MemeCoins",
      icon: TrendingUp
    },
    {
      title: "Meme Coins: Fad or Future?",
      excerpt: "Meme coins may seem like a short-term trend driven by internet culture, but their massive price movements have attracted serious attention. Some believe that meme coins could evolve into more stable, value-driven tokens over time, while others argue they’re unsustainable. The future of meme coins depends on their ability to gain long-term use cases or remain relevant in a rapidly changing market.",
      author: "MemeCoins",
      readTime: "8 min read",
      date: "May 28, 2025",
      category: "MemeCoins",
      icon: TrendingUp
    },
    {
      title: "The Role of Community in Meme Tokens",
      excerpt: "Community support is the backbone of meme tokens. A strong, active community can drive the value of a meme token through social media campaigns, viral trends, and widespread adoption. The community often has a direct impact on the success of these tokens, and the more passionate and engaged the community, the higher the potential for price fluctuations.",
      author: "MemeCoins",
      readTime: "8 min read",
      date: "May 28, 2025",
      category: "MemeCoins",
      icon: TrendingUp
    },
    {
      title: "How to Trade Meme Tokens",
      excerpt: "Trading meme tokens is risky due to their high volatility. To maximize profits, traders need to understand market cycles and sentiment, tracking viral trends and influencer involvement. Knowing when to buy or sell based on hype or community-driven momentum is essential to success. Since meme tokens can lose value quickly, it's crucial to monitor the market constantly.",
      author: "MemeCoins",
      readTime: "8 min read",
      date: "May 28, 2025",
      category: "MemeCoins",
      icon: TrendingUp
    },
    {
      title: "Meme Coin Market Analysis Tools",
      excerpt: "To trade meme coins effectively, it's essential to use tools that track social media sentiment, trading volumes, and price movements. Websites like CoinMarketCap and platforms like TradingView allow users to analyze market trends, helping them make informed decisions. Social sentiment analysis tools can also help identify potential price swings driven by viral content.",
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
      title: "Types of Decentralized Wallets",
      excerpt: "There are different types of decentralized wallets, including software wallets, hardware wallets, and paper wallets. Software wallets are easy to use and accessible on both desktop and mobile devices. Hardware wallets provide the highest level of security by storing keys offline. Paper wallets are a low-tech but secure way to store cryptocurrency keys, though they require careful handling to avoid loss or damage.",
      author: "Wallets",
      readTime: "8 min read",
      date: "May 28, 2025",
      category: "Wallets",
      icon: TrendingUp
    },
    {
      title: "Securing Your Wallet with Two-Factor Authentication",
      excerpt: "Two-factor authentication (2FA) adds an additional security layer by requiring users to provide two forms of identification—typically a password and a temporary code sent to their phone. Enabling 2FA significantly reduces the risk of unauthorized access to your wallet, even if your password is compromised. It’s one of the simplest and most effective security measures for protecting your assets.",
      author: "Wallets",
      readTime: "8 min read",
      date: "May 28, 2025",
      category: "Wallets",
      icon: TrendingUp
    },
    {
      title: "Wallet Recovery and Backup",
      excerpt: "Backing up your wallet is essential to ensure you can recover your funds if you lose access. Write down your seed phrase or private key and store it securely. If you lose access to your wallet without a backup, your funds may be permanently lost. Always keep backups in multiple safe locations to prevent data loss.",
      author: "Wallets",
      readTime: "8 min read",
      date: "May 28, 2025",
      category: "Wallets",
      icon: TrendingUp
    },
    {
      title: "Wallet Address and Public Key",
      excerpt: " A wallet address is a unique string of characters that allows you to receive cryptocurrency. It’s similar to an email address, and anyone with your address can send you funds. Your public key is used to generate your wallet address, while your private key is what gives you control over the funds. Keep your private key secure, as anyone who has access to it can control your wallet.",
      author: "Wallets",
      readTime: "8 min read",
      date: "May 28, 2025",
      category: "Wallets",
      icon: TrendingUp
    },
    {
      title: "Choosing the Right Wallet for Your Needs",
      excerpt: "Choosing a wallet depends on how you plan to use your cryptocurrency. Software wallets are best for frequent trading, while hardware wallets are ideal for long-term storage and high security. If you’re just starting, a software wallet might be the easiest, but if you plan to hold large amounts of cryptocurrency, a hardware wallet is more secure.",
      author: "Wallets",
      readTime: "8 min read",
      date: "May 28, 2025",
      category: "Wallets",
      icon: TrendingUp
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
      title: "How to Set Up and Use BONKbot",
      excerpt: "Setting up BONKbot is simple and can be done by connecting it to your Telegram account. After linking your wallet and configuring your settings, you can start automating trades. BONKbot allows you to track and execute trades seamlessly from within Telegram, making it ideal for traders who prefer using mobile apps.",
      author: "BONKbot",
      readTime: "10 min read",
      date: "May 22, 2025",
      category: "BONKbot",
      icon: Users
    },
    {
      title: "BONKbot and Telegram: A Powerful Combination",
      excerpt: "BONKbot’s integration with Telegram offers a user-friendly experience for trading Solana tokens. It simplifies trading by allowing users to monitor markets and execute trades without needing to switch between different apps. This makes it more convenient for traders who rely on Telegram for communication and crypto management.",
      author: "BONKbot",
      readTime: "10 min read",
      date: "May 22, 2025",
      category: "BONKbot",
      icon: Users
    },
    {
      title: "Advanced Features of BONKbot",
      excerpt: "BONKbot’s advanced features include automated trading, real-time alerts, and portfolio management. You can set custom trading parameters, allowing the bot to execute trades on your behalf based on your preferences. These features help save time and improve trading efficiency.",
      author: "BONKbot",
      readTime: "10 min read",
      date: "May 22, 2025",
      category: "BONKbot",
      icon: Users
    },
    {
      title: "BONKbot vs Other Trading Bots",
      excerpt: "BONKbot specializes in Solana trading, which sets it apart from other bots that support multiple blockchains. Its focus on Solana allows it to integrate more deeply into the ecosystem, making it faster and more efficient for Solana traders. For multi-chain traders, other bots might offer a broader range of options.",
      author: "BONKbot",
      readTime: "10 min read",
      date: "May 22, 2025",
      category: "BONKbot",
      icon: Users
    },
    {
      title: "BONKbot and the Future of Automated Trading",
      excerpt: "Automated trading is becoming more prevalent, and BONKbot is at the forefront of this trend within the Solana ecosystem. By automating routine tasks and providing real-time insights, it’s reshaping how traders interact with the market. The future of crypto trading may see more bots like BONKbot offering sophisticated and user-friendly tools.",
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
      title: "ICO Fundraising Models: Public vs. Private Sales",
      excerpt: "In a public ICO, anyone can participate, while private sales are limited to specific investors, often offering tokens at a discount. Public sales provide broader exposure, while private sales can attract more significant investments from venture capitalists or private backers. Each model serves different fundraising needs and goals.",
      author: "Fundraising",
      readTime: "7 min read",
      date: "May 20, 2025",
      category: "Fundraising",
      icon: Target
    },
    {
      title: "Building a Strong ICO Marketing Campaign",
      excerpt: "A successful ICO campaign requires a well-thought-out marketing strategy, including social media promotion, influencer partnerships, and targeted advertising. Building trust through transparent communication is key. Effective marketing can help your ICO reach a wide audience and attract potential investors.",
      author: "Fundraising",
      readTime: "7 min read",
      date: "May 20, 2025",
      category: "Fundraising",
      icon: Target
    },
    {
      title: "Smart Contracts in ICO Fundraising",
      excerpt: "Smart contracts automate the ICO process, ensuring that funds are only transferred when specific conditions are met. This reduces human error and fraud risk. They also increase transparency by allowing all transactions to be recorded on the blockchain.",
      author: "Fundraising",
      readTime: "7 min read",
      date: "May 20, 2025",
      category: "Fundraising",
      icon: Target
    },
    {
      title: " Investor Protection in ICOs",
      excerpt: "Investor protection is a top priority in any ICO. Implementing token lock-up periods, clear terms and conditions, and third-party audits can help protect investors and build trust in the ICO. Ensuring transparency in your ICO project is essential for safeguarding investor interests.",
      author: "Fundraising",
      readTime: "7 min read",
      date: "May 20, 2025",
      category: "Fundraising",
      icon: Target
    },
    {
      title: "How to Set Token Prices in an ICO",
      excerpt: "Setting a token price that aligns with market demand and project valuation is crucial. Consider factors like the project’s future potential, the ICO’s fundraising target, and investor interest when setting the price. Offering a fair token price can encourage wider participation and drive success.",
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
      title: "Risk Management for Meme Token Investors",
      excerpt: "Meme tokens can generate substantial profits, but they are extremely volatile. Risk management strategies like setting stop-loss orders, diversifying investments, and understanding market cycles are key to minimizing potential losses. Always stay updated with the latest market trends and community sentiment to make informed decisions.",
      author: "Profits",
      readTime: "15 min read",
      date: "May 18, 2025",
      category: "Profits",
      icon: Database
    },
    {
      title: "Identifying Market Sentiment for Meme Tokens",
      excerpt: "Market sentiment for meme tokens can change rapidly, often influenced by social media, influencers, and viral trends. Identifying these shifts early can help you predict price movements and profit from market volatility. Tools like sentiment analysis platforms and social media monitoring can help track these fluctuations.",
      author: "Profits",
      readTime: "15 min read",
      date: "May 18, 2025",
      category: "Profits",
      icon: Database
    },
    {
      title: "Trading Meme Tokens with Technical Analysis",
      excerpt: "Technical analysis involves studying price charts and market patterns to predict future price movements. For meme tokens, using indicators like Moving Averages (MA), Relative Strength Index (RSI), and Bollinger Bands can help traders make better decisions on when to buy and sell, based on past trends.",
      author: "Profits",
      readTime: "15 min read",
      date: "May 18, 2025",
      category: "Profits",
      icon: Database
    },
    {
      title: "Profit Booking Strategies for Meme Tokens",
      excerpt: "Due to the volatile nature of meme tokens, profit booking is essential for securing gains. Strategies such as setting a profit target or scaling out of positions over time can help lock in profits without waiting for the market to turn. Make sure to act quickly when the market shows signs of reversing.",
      author: "Profits",
      readTime: "15 min read",
      date: "May 18, 2025",
      category: "Profits",
      icon: Database
    },
    {
      title: "Tax Implications of Trading Meme Tokens",
      excerpt: "Trading meme tokens can have tax implications, depending on your country’s tax laws. In many places, profits from cryptocurrency trading are taxed as capital gains. It’s essential to keep accurate records of your trades to calculate your tax liability and stay compliant with local regulations.",
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
      title: "How to Use ICO Funds for Marketing and Branding",
      excerpt: "Marketing and branding are crucial to scaling a business after an ICO. Allocate ICO funds towards developing a strong online presence, hiring marketing professionals, and engaging in social media campaigns. Building brand awareness will help attract more customers and investors, driving long-term growth.",
      author: "Growth",
      readTime: "11 min read",
      date: "May 15, 2025",
      category: "Growth",
      icon: TrendingUp
    },
    {
      title: "Scaling Operations with ICO Funds",
      excerpt: "ICO funds provide the necessary capital to expand operations. You can invest in scaling production, improving technology, or hiring talent to meet growing demand. Properly allocating funds in key areas like research and development, supply chain, and customer service can ensure that growth is sustainable.",
      author: "Growth",
      readTime: "11 min read",
      date: "May 15, 2025",
      category: "Growth",
      icon: TrendingUp
    },
    {
      title: "Building a Strong ICO Community for Growth",
      excerpt: "A strong community around your ICO is essential for growth. Engaging with your audience on social media, hosting AMAs (Ask Me Anything), and rewarding loyal backers can help you build trust and support. A vibrant community not only attracts investors but can also help spread the word about your project.",
      author: "Growth",
      readTime: "11 min read",
      date: "May 15, 2025",
      category: "Growth",
      icon: TrendingUp
    },
    {
      title: "Expanding Your Reach Through Partnerships",
      excerpt: "Strategic partnerships can help accelerate business growth by providing access to new audiences, resources, or technologies. Collaborate with industry leaders, influencers, or complementary projects to extend your ICO’s reach and enhance credibility in the market.",
      author: "Growth",
      readTime: "11 min read",
      date: "May 15, 2025",
      category: "Growth",
      icon: TrendingUp
    },
    {
      title: "Leveraging Blockchain for Long-Term Growth",
      excerpt: "Blockchain technology can enable long-term growth by improving transparency, reducing operational costs, and offering new ways to engage with customers. By integrating blockchain into your business, you can streamline processes, ensure data security, and create new revenue streams.",
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
    {
      title: "Overcoming Barriers to Entry in Cryptocurrency",
      excerpt: "Cryptocurrency can be intimidating due to its complexity and initial cost. Jakaria.finance lowers these barriers by providing easy access to ICOs and meme token launches without requiring large initial investments. This democratizes the opportunity to participate in the growing digital economy.",
      author: "Empowerment",
      readTime: "6 min read",
      date: "May 12, 2025",
      category: "Empowerment",
      icon: Target
    },
    {
      title: "How Jakaria.finance Supports Entrepreneurs",
      excerpt: "Jakaria.finance empowers entrepreneurs by offering expert ICO development services and guidance. This support allows startups to launch successful ICOs with minimal upfront investment. The platform also helps entrepreneurs navigate marketing, compliance, and community building to ensure their projects thrive.",
      author: "Empowerment",
      readTime: "6 min read",
      date: "May 12, 2025",
      category: "Empowerment",
      icon: Target
    },
    {
      title: "Building a Decentralized Future with Jakaria.finance",
      excerpt: "Jakaria.finance is helping to build a decentralized future by promoting ICOs and meme token launches that provide more control to individuals and startups. By eliminating the need for traditional financial intermediaries, Jakaria.finance supports the movement towards a more equitable, peer-to-peer financial ecosystem.",
      author: "Empowerment",
      readTime: "6 min read",
      date: "May 12, 2025",
      category: "Empowerment",
      icon: Target
    },
    {
      title: "Empowering Investors Through Knowledge and Tools",
      excerpt: "Jakaria.finance provides investors with the tools, insights, and knowledge they need to make informed decisions. Through market data, analysis, and a user-friendly platform, investors can navigate the complex cryptocurrency market with confidence and reduce risk.",
      author: "Empowerment",
      readTime: "6 min read",
      date: "May 12, 2025",
      category: "Empowerment",
      icon: Target
    },
    {
      title: "Case Studies of Successful ICOs and Meme Tokens",
      excerpt: "Studying successful ICOs and meme tokens provides valuable lessons. By analyzing case studies, investors and entrepreneurs can learn about the strategies that led to success and avoid common mistakes. These examples show the potential of ICOs and meme tokens when executed well and with a strong community.",
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