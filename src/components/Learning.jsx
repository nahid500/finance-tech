"use client"

import React from 'react';
import { ArrowLeft, Clock, User, TrendingUp, BarChart3, Target, Database, Brain, Users } from 'lucide-react';

const Learning = () => {
  const blogPosts = [
    {
      title: "Introduction to Business Analytics",
      excerpt: "Learn the fundamentals of business analytics and how it can transform your organization's decision-making process.",
      author: "Analytics Team",
      readTime: "5 min read",
      date: "June 1, 2025",
      category: "Fundamentals",
      icon: BarChart3
    },
    {
      title: "Data Visualization Best Practices",
      excerpt: "Discover how to create compelling visualizations that tell your data's story effectively and drive actionable insights.",
      author: "Data Science Team",
      readTime: "8 min read",
      date: "May 28, 2025",
      category: "Visualization",
      icon: TrendingUp
    },
    {
      title: "Predictive Analytics for Business Growth",
      excerpt: "Harness the power of predictive models to forecast trends and make informed decisions for sustainable growth.",
      author: "ML Engineers",
      readTime: "12 min read",
      date: "May 25, 2025",
      category: "Advanced",
      icon: Brain
    },
    {
      title: "Building Data-Driven Organizations",
      excerpt: "Learn how to create a culture of data-driven decision making across all levels of your organization.",
      author: "Strategy Team",
      readTime: "10 min read",
      date: "May 22, 2025",
      category: "Strategy",
      icon: Users
    },
    {
      title: "Customer Analytics and Segmentation",
      excerpt: "Master the art of customer segmentation using advanced analytics to improve marketing ROI and customer satisfaction.",
      author: "Marketing Analytics",
      readTime: "7 min read",
      date: "May 20, 2025",
      category: "Marketing",
      icon: Target
    },
    {
      title: "Database Design for Analytics",
      excerpt: "Understand how to structure your data warehouse and databases for optimal analytics performance and scalability.",
      author: "Data Engineering",
      readTime: "15 min read",
      date: "May 18, 2025",
      category: "Technical",
      icon: Database
    },
    {
      title: "Real-time Analytics Implementation",
      excerpt: "Explore real-time data processing techniques and tools to enable instant business insights and rapid response.",
      author: "Tech Team",
      readTime: "11 min read",
      date: "May 15, 2025",
      category: "Advanced",
      icon: TrendingUp
    },
    {
      title: "Analytics ROI Measurement",
      excerpt: "Learn frameworks and methodologies to measure and demonstrate the return on investment of your analytics initiatives.",
      author: "Business Team",
      readTime: "6 min read",
      date: "May 12, 2025",
      category: "Business",
      icon: Target
    },
    {
      title: "Machine Learning in Business Context",
      excerpt: "Practical guide to implementing machine learning solutions that solve real business problems and create value.",
      author: "AI Team",
      readTime: "14 min read",
      date: "May 10, 2025",
      category: "AI/ML",
      icon: Brain
    }
  ];

  const categories = ["All", "Fundamentals", "Visualization", "Advanced", "Strategy", "Marketing", "Technical", "Business", "AI/ML"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div id='learning' className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      
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
                <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed line-clamp-3">
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