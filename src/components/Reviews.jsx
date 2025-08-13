'use client';

import { useState } from 'react';

const reviewSources = [
  { id: 'all', label: 'All Reviews', rating: 5.0 },
  { id: 'linkedin', label: 'LinkedIn', rating: 4.5 },
  { id: 'google', label: 'GOOGLE', rating: 5.0 },
  { id: 'trustpilot', label: 'TRUST PILOT', rating: 4.7 },
];

const reviewsData = {
  all: [
    {
      id: 1,
      stars: 5,
      text: "If you want to get into crypto without the stress, Jakaria.finance is the way to go. They know their stuff and are super friendly. Would definitely use them again. The no upfront fee policy shows they truly believe in their work.",
      name: 'David Brown',
      location: 'Illinois, USA',
      verified: true,
      date: 'April 9',
      source: 'GOOGLE',
      avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
    },
    // Add more reviews here
  ],
  linkedin: [
    {
      id: 1,
      stars: 5,
      text: "Jakaria.finance helped us launch our ICO in just 7 days, and the results were beyond our expectations! We successfully raised the capital needed to scale our product globally. The team’s expertise, guidance, and continuous support made all the difference. Plus, the best part? No upfront fees —which made it easy for us to take the leap. I can confidently say their service is top-tier. Highly recommend to any entrepreneur looking to elevate their business!",
      name: 'John M., CEO of TechVibe Innovations',
      location: 'New York, USA',
      verified: true,
      date: 'March 15',
      source: 'LinkedIn',
      avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    },
    {
      id: 2,
      stars: 5,
      text: "I was initially skeptical about launching an ICO, but Jakaria.finance changed my perspective. They not only helped me raise the capital I needed but also guided me with expertise that’s hard to find anywhere else. The best part? No upfront fees—they truly care about the success of their clients. Thanks to Jakaria.finance. I now feel confident navigating the crypto world. I highly recommend their services",
      name: 'Ethan P., Founder of FinTech Solutions',
      location: 'New York, USA',
      verified: true,
      date: 'August 08,2024',
      source: 'LinkedIn',
      avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    },
    {
      id: 3,
      stars: 5,
      text: "Jakaria.finance. didn’t just help me raise the funds I needed for my business, they also taught me how to leverage the crypto market to generate quick profits . Their customer service is outstanding, and their team goes the extra mile to ensure your success. I was never left in the dark—they were there for me every step of the way. I wouldn’t trust anyone else in the crypto space",
      name: 'David H., Entrepreneur and Investor',
      location: 'New York, USA',
      verified: true,
      date: 'August 18,2024',
      source: 'LinkedIn',
      avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    },
    {
      id: 4,
      stars: 5,
      text: "I was initially unsure about launching a memecoin, but Jakaria.finance made it incredibly easy and profitable. Within just 7 days, I saw impressive returns! Their team really knows the crypto space, providing invaluable insights that helped my project succeed. Plus, no upfront fees—what a relief! Thanks to Jakaria.finance, I’m now confidently stepping into the world of crypto",
      name: 'Jessica T., Business Owner',
      location: 'New York, USA',
      verified: true,
      date: 'Jan 23,2024',
      source: 'LinkedIn',
      avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    },
    {
      id: 5,
      stars: 5,
      text: "Jakaria.finance. went above and beyond our expectations. They laid out a clear strategy for our ICO and had us up and running in record time . Their professionalism, coupled with their deep understanding of the crypto market, made the entire process seamless. If you’re looking for a partner who can get your business to the next level, Jakaria.finance. is your go-to!",
      name: 'Michael B., Co-founder of Blockchain Enterprises',
      location: 'New York, USA',
      verified: true,
      date: 'February 28,2024',
      source: 'LinkedIn',
      avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    },
    {
      id: 6,
      stars: 5,
      text: "Working with Jakaria.finance. was a true game-changer for us! We launched our memecoin on a decentralized exchange and saw remarkable short-term profits. The entire process was smooth and hassle-free. The team was professional and provided exceptional support every step of the way. What really stood out to us was the no upfront fees policy, which made getting started so much easier. You can’t go wrong with Jakaria.finance",
      name: '.Sarah L., Founder of CryptoSavvy',
      location: 'New York, USA',
      verified: true,
      date: ' November 08,2024',
      source: 'LinkedIn',
      avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    },
  ],
  google: [
    {
      id: 7,
      stars: 5,
      text: "Super happy with Jakaria.finance! They helped me launch my ICO in no time and made the whole thing so easy. The team was always there when I had questions. Definitely recommend! Their quick responses and clear guidance made all the difference",
      name: 'John Miller',
      location: 'New York, USA',
      verified: true,
      date: 'JUNE 14, 2023',
      source: 'GOOGLE',
      avatar: 'https://randomuser.me/api/portraits/men/50.jpg',
    },
    {
      id: 8,
      stars: 5,
      text: "Great experience working with Jakaria.finance They took care of everything for my meme token launch and it actually went smoother than I expected. No upfront fees made it even better! The process was simple, and I felt supported from start to finish",
      name: 'Emily Johnson',
      location: 'California, USA',
      verified: true,
      date: 'November 01, 2025',
      source: 'GOOGLE',
      avatar: 'https://randomuser.me/api/portraits/men/50.jpg',
    },
    {
      id: 9,
      stars: 5,
      text: "Fast, reliable, and honest service. Jakaria.finance helped me raise funds for my project without any hassle. Loved how transparent and supportive they were throughout. I’m really impressed by their professionalism and friendly approach",
      name: 'Michael Davis',
      location: 'Texas, USA',
      verified: true,
      date: 'February 20',
      source: 'GOOGLE',
      avatar: 'https://randomuser.me/api/portraits/men/50.jpg',
    },
    {
      id: 10,
      stars: 5,
      text: "Launching a token seemed scary before, but Jakaria.finance made it simple and fun. The whole process took just a week and their marketing team really boosted my project’s reach! I’m excited to work with them again on future projects",
      name: 'Sarah Wilson',
      location: 'Florida, USA',
      verified: true,
      date: 'February 12, 2025',
      source: 'GOOGLE',
      avatar: 'https://randomuser.me/api/portraits/men/50.jpg',
    },
    {
      id: 11,
      stars: 5,
      text: "If you want to get into crypto without the stress, Jakaria.finance is the way to go. They know their stuff and are super friendly. I would definitely use them again. The no upfront fee policy shows they truly believe in their work",
      name: 'David Brown',
      location: 'Illinois, USA',
      verified: true,
      date: 'February 09, 2025',
      source: 'GOOGLE',
      avatar: 'https://randomuser.me/api/portraits/men/50.jpg',
    },
  ],
  trustpilot: [
    {
      id: 12,
      stars: 5,
      text: "Jakaria.finance made launching my token stress-free. Their team walked me through every step, and I never felt lost. The support was fantastic and the whole process was faster than I imagined",
      name: 'Jessica Martinez',
      location: 'Seattle, USA',
      verified: true,
      date: 'March 18, 2025',
      source: 'TRUST PILOT',
      avatar: 'https://randomuser.me/api/portraits/women/40.jpg',
    },
    {
      id: 13,
      stars: 5,
      text: "I was skeptical about memecoin launches until I worked with Jakaria.finance , They know the market well and helped me get listed on a DEX quickly. Best part – zero upfront fees, which made it risk-free to try",
      name: 'Emily Clark',
      location: 'Denver, USA',
      verified: true,
      date: 'January 5, 2025',
      source: 'TRUST PILOT',
      avatar: 'https://randomuser.me/api/portraits/women/40.jpg',
    },
    {
      id: 14,
      stars: 5,
      text: "Their blockchain developers are really skilled. My ICO launch was smooth and the marketing push got great attention. I appreciate how transparent they were about timelines and costs",
      name: 'Olivia Anderson',
      location: 'Boston, USA',
      verified: true,
      date: 'January 5, 2025',
      source: 'TRUST PILOT',
      avatar: 'https://randomuser.me/api/portraits/women/40.jpg',
    },
    {
      id: 15,
      stars: 5,
      text: "I loved how Jakaria.finance handled my project from start to finish. They’re fast, reliable, and super communicative. The entire ICO process was completed within a week, just like they promised",
      name: 'Ethan Clark',
      location: 'Austin, USA',
      verified: true,
      date: 'March 25, 2025',
      source: 'TRUST PILOT',
      avatar: 'https://randomuser.me/api/portraits/women/40.jpg',
    },
    {
      id: 16,
      stars: 5,
      text: "Working with Jakaria.finance was a great experience. They made token creation easy and helped me connect with the right investors. Their 24/7 support made me feel confident throughout the launch",
      name: 'Megan Scott',
      location: 'Miami, USA',
      verified: true,
      date: 'September 5, 2025',
      source: 'TRUST PILOT',
      avatar: 'https://randomuser.me/api/portraits/women/40.jpg',
    },
    {
      id: 17,
      stars: 5,
      text: " If you want to get your crypto project off the ground without headaches, Jakaria.finance is the team to trust. They took care of everything and delivered results on time. Would definitely recommend",
      name: 'James Rodriguez',
      location: 'Chicago, USA',
      verified: true,
      date: 'January 15, 2025',
      source: 'TRUST PILOT',
      avatar: 'https://randomuser.me/api/portraits/women/40.jpg',
    },
  ],
};

function Stars({ count }) {
  return (
    <div className="flex space-x-1 text-yellow-400">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < count ? 'fill-current' : 'stroke-current'}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  const [activeSource, setActiveSource] = useState('all');
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const reviews = reviewsData[activeSource];
  const overallRating = reviewSources.find((s) => s.id === activeSource)?.rating || 5;

  // Handle carousel navigation
  const prev = () => {
    setCurrentReviewIndex((i) => (i === 0 ? reviews.length - 1 : i - 1));
  };

  const next = () => {
    setCurrentReviewIndex((i) => (i === reviews.length - 1 ? 0 : i + 1));
  };

  return (
    <div className="max-w-3xl mx-auto my-12 p-6 bg-gray-50 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-6">What our customers say</h2>

      {/* Tabs */}
      <nav className="flex space-x-6 border-b border-gray-300 mb-6">
        {reviewSources.map((source) => (
          <button
            key={source.id}
            onClick={() => {
              setActiveSource(source.id);
              setCurrentReviewIndex(0);
            }}
            className={`flex items-center gap-2 pb-2 ${
              activeSource === source.id
                ? 'border-b-2 border-black font-semibold'
                : 'text-gray-600 hover:text-black'
            }`}
          >
            {source.label} <span className="font-bold">{source.rating.toFixed(1)}</span>
          </button>
        ))}
      </nav>

      {/* Overall Rating */}
      <div className="bg-white p-4 rounded-md mb-6 flex items-center gap-4 shadow-sm">
        <div>
          <p className="font-semibold">Overall Rating</p>
          <div className="flex items-center gap-2">
            <p className="text-2xl font-bold">{overallRating.toFixed(1)}</p>
            <Stars count={Math.round(overallRating)} />
            <span className="text-gray-400">(17)</span>
          </div>
        </div>
      </div>

      {/* Review Card */}
      {reviews.length > 0 && (
        <div className="bg-white p-6 rounded-md shadow relative">
          {/* Stars */}
          <Stars count={reviews[currentReviewIndex].stars} />

          {/* Text */}
          <p className="mt-3 text-gray-800">{reviews[currentReviewIndex].text}</p>

          {/* Navigation Arrows */}
          <button
            onClick={prev}
            aria-label="Previous review"
            className="absolute top-1/2 left-2 -translate-y-1/2  rounded-full p-2 hover:bg-gray-200"
          >
            &#8592;
          </button>
          <button
            onClick={next}
            aria-label="Next review"
            className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full p-2 hover:bg-gray-200"
          >
            &#8594;
          </button>

          {/* Reviewer Info */}
          <div className="flex items-center gap-3 mt-6">
            <img
              src={reviews[currentReviewIndex].avatar}
              alt={reviews[currentReviewIndex].name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold flex items-center gap-2">
                {reviews[currentReviewIndex].name},{' '}
                <span className="text-sm text-gray-600">{reviews[currentReviewIndex].location}</span>
                {reviews[currentReviewIndex].verified && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline-block w-4 h-4 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </p>
              <p className="text-xs text-gray-500">
                {reviews[currentReviewIndex].date} on{' '}
                <a href="#" className="text-blue-600 hover:underline">
                  {reviews[currentReviewIndex].source}
                </a>
              </p>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentReviewIndex(idx)}
                className={`w-3 h-3 rounded-full ${
                  idx === currentReviewIndex ? 'bg-black' : 'bg-gray-400'
                }`}
                aria-label={`Go to review ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
