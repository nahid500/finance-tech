'use client';

import Link from 'next/link';

export default function GreenTechInnovationsStory() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-teal-700 relative overflow-hidden">
      {/* Animated background patterns */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-teal-400 to-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-400 to-teal-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Navigation */}
        <div className="mb-8">
          <Link href="/" className="text-purple-200 hover:text-white transition-colors duration-300 flex items-center gap-2 font-['Poppins']">
            <i className="ri-arrow-left-line"></i>
            Back to Home
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center mr-6">
              <i className="ri-leaf-line text-white text-3xl"></i>
            </div>
            <div>
              <h1 className="text-5xl font-bold text-white font-['Montserrat'] tracking-tight">GreenTech Innovations</h1>
              <p className="text-xl text-purple-200 font-['Poppins']">Clean Energy Success Story</p>
            </div>
          </div>
          <div className="text-4xl font-bold text-green-400 mb-4">45% Cost Reduction</div>
          <p className="text-xl text-purple-200 font-['Poppins'] max-w-3xl mx-auto">
            How GreenTech Innovations optimized their renewable energy portfolio and achieved unprecedented efficiency gains
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-16">
          <img 
            src="https://readdy.ai/api/search-image?query=Sustainable%20energy%20company%20office%20with%20solar%20panels%20and%20green%20technology%2C%20eco-friendly%20workspace%2C%20renewable%20energy%20displays%2C%20modern%20environmental%20design%2C%20professional%20team%20working%20on%20sustainability%20projects%2C%20clean%20technology%20innovation%20headquarters&width=1200&height=600&seq=greentech_hero&orientation=landscape"
            alt="GreenTech Innovations Facility"
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
                  GreenTech Innovations has been at the forefront of renewable energy technology since 2016. Operating across 15 states with a portfolio of solar, wind, and hydroelectric projects, they manage over $850 million in clean energy assets.
                </p>
                <p>
                  Despite their strong market position, the company faced challenges in optimizing their diverse energy portfolio. Fluctuating energy prices, weather dependencies, and complex grid management required sophisticated predictive analytics that their existing systems couldn't provide.
                </p>
              </div>
            </div>

            {/* The Challenge */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
              <h2 className="text-3xl font-bold text-white mb-6 font-['Montserrat']">The Challenge</h2>
              <div className="space-y-6">
                <p className="text-gray-200 font-['Poppins'] text-lg leading-relaxed">
                  GreenTech's energy production was highly variable, leading to significant inefficiencies and missed revenue opportunities:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center">
                        <i className="ri-close-line text-red-400"></i>
                      </div>
                      <span className="text-gray-200 font-['Poppins']">Unpredictable energy output</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center">
                        <i className="ri-close-line text-red-400"></i>
                      </div>
                      <span className="text-gray-200 font-['Poppins']">High maintenance costs</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center">
                        <i className="ri-close-line text-red-400"></i>
                      </div>
                      <span className="text-gray-200 font-['Poppins']">Grid balancing issues</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center">
                        <i className="ri-close-line text-red-400"></i>
                      </div>
                      <span className="text-gray-200 font-['Poppins']">Suboptimal resource allocation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center">
                        <i className="ri-close-line text-red-400"></i>
                      </div>
                      <span className="text-gray-200 font-['Poppins']">Limited predictive capabilities</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center">
                        <i className="ri-close-line text-red-400"></i>
                      </div>
                      <span className="text-gray-200 font-['Poppins']">Reactive maintenance approach</span>
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
                  We deployed an AI-powered energy optimization platform that integrates weather data, market prices, and equipment performance to maximize efficiency and revenue.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                        <i className="ri-check-line text-green-400"></i>
                      </div>
                      <span className="text-gray-200 font-['Poppins']">Weather prediction integration</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                        <i className="ri-check-line text-green-400"></i>
                      </div>
                      <span className="text-gray-200 font-['Poppins']">Real-time performance monitoring</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                        <i className="ri-check-line text-green-400"></i>
                      </div>
                      <span className="text-gray-200 font-['Poppins']">Predictive maintenance alerts</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                        <i className="ri-check-line text-green-400"></i>
                      </div>
                      <span className="text-gray-200 font-['Poppins']">Energy trading optimization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                        <i className="ri-check-line text-green-400"></i>
                      </div>
                      <span className="text-gray-200 font-['Poppins']">Grid balancing automation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                        <i className="ri-check-line text-green-400"></i>
                      </div>
                      <span className="text-gray-200 font-['Poppins']">Portfolio risk management</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Results & Impact */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
              <h2 className="text-3xl font-bold text-white mb-6 font-['Montserrat']">Results & Environmental Impact</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 font-['Montserrat']">Business Results</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-200 font-['Poppins']">Operational Cost Reduction</span>
                      <span className="text-green-400 font-bold">45%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-200 font-['Poppins']">Energy Efficiency Increase</span>
                      <span className="text-green-400 font-bold">280%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-200 font-['Poppins']">Revenue Growth</span>
                      <span className="text-green-400 font-bold">165%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-200 font-['Poppins']">Maintenance Cost Reduction</span>
                      <span className="text-green-400 font-bold">60%</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 font-['Montserrat']">Environmental Impact</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-200 font-['Poppins']">CO2 Emissions Reduced</span>
                      <span className="text-green-400 font-bold">2.1M tons</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-200 font-['Poppins']">Clean Energy Generated</span>
                      <span className="text-green-400 font-bold">45 GWh</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-200 font-['Poppins']">Homes Powered</span>
                      <span className="text-green-400 font-bold">185,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-200 font-['Poppins']">Water Saved</span>
                      <span className="text-green-400 font-bold">850M gallons</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* CTO Testimonial */}
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-600/20 backdrop-blur-lg rounded-3xl p-8 border border-green-400/30 shadow-2xl">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">MC</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-['Montserrat']">Maria Chen</h3>
                  <p className="text-purple-200 font-['Poppins']">Chief Technology Officer</p>
                </div>
              </div>
              <blockquote className="text-gray-200 font-['Poppins'] italic text-lg leading-relaxed mb-4">
                "The platform transformed how we approach renewable energy management. We're not just generating clean power more efficiently – we're pioneering the future of sustainable energy."
              </blockquote>
              <div className="text-green-400 font-semibold">★★★★★ 5/5 Rating</div>
            </div>

            {/* Key Metrics */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6 font-['Montserrat']">Key Results</h3>
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">45%</div>
                  <div className="text-purple-200 font-['Poppins']">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">280%</div>
                  <div className="text-purple-200 font-['Poppins']">Efficiency Gain</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">2.1M</div>
                  <div className="text-purple-200 font-['Poppins']">Tons CO2 Saved</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">185K</div>
                  <div className="text-purple-200 font-['Poppins']">Homes Powered</div>
                </div>
              </div>
            </div>

            {/* Company Info */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6 font-['Montserrat']">Company Details</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-purple-200 font-['Poppins']">Industry:</span>
                  <span className="text-white font-semibold">Clean Energy</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-purple-200 font-['Poppins']">Founded:</span>
                  <span className="text-white font-semibold">2016</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-purple-200 font-['Poppins']">Employees:</span>
                  <span className="text-white font-semibold">320+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-purple-200 font-['Poppins']">Location:</span>
                  <span className="text-white font-semibold">Austin, TX</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-purple-200 font-['Poppins']">Assets:</span>
                  <span className="text-white font-semibold">$850M+</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-white mb-8 font-['Montserrat']">Ready to Optimize Your Energy Portfolio?</h2>
          <div className="inline-flex items-center gap-4">
            <button className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-teal-500 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 font-['Poppins'] whitespace-nowrap">
              <i className="ri-leaf-line mr-2"></i>
              Start Your Green Journey
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-full border border-white/30 hover:border-white/50 shadow-xl transition-all duration-300 backdrop-blur-lg font-['Poppins'] whitespace-nowrap">
              <i className="ri-phone-line mr-2"></i>
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
