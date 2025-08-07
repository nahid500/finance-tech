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
      id: 2,
      stars: 5,
      text: "Excellent team and support from LinkedIn platform.",
      name: 'Jane Doe',
      location: 'New York, USA',
      verified: true,
      date: 'March 15',
      source: 'LinkedIn',
      avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    },
  ],
  google: [
    {
      id: 3,
      stars: 5,
      text: "Google reviews love them!",
      name: 'Mark Smith',
      location: 'California, USA',
      verified: true,
      date: 'February 20',
      source: 'GOOGLE',
      avatar: 'https://randomuser.me/api/portraits/men/50.jpg',
    },
  ],
  trustpilot: [
    {
      id: 4,
      stars: 5,
      text: "Top ratings on Trust Pilot for a reason.",
      name: 'Emily Clark',
      location: 'Texas, USA',
      verified: true,
      date: 'January 5',
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
            className="absolute top-1/2 left-2 -translate-y-1/2 bg-gray-300 rounded-full p-2 hover:bg-gray-400"
          >
            &#8592;
          </button>
          <button
            onClick={next}
            aria-label="Next review"
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-gray-300 rounded-full p-2 hover:bg-gray-400"
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
