'use client';

import { useState } from 'react';
import linkedin from "@/assets/icons/linkedin.png";
import google from "@/assets/icons/google.png";
import trustpilot from "@/assets/icons/trustpilot.png";
import { verified } from 'lucide-react';



const reviewSources = [
  { id: 'all', label: 'All Reviews', rating: 5.0 },
  { id: 'linkedin', label: 'LinkedIn', rating: 4.5 },
  { id: 'google', label: 'GOOGLE', rating: 4.8 },
  { id: 'trustpilot', label: 'TRUST PILOT', rating: 4.7 },
];

const reviewsData = {
  all: [
    // {
    //   id: 1,
    //   stars: 5,
    //   text: (
    //     <>
    //   If you want to get into crypto without the stress, <a href="/"><strong>Jakaria.finance</strong></a> is the way to go. They know their stuff and are super friendly. Would definitely use them again. The no upfront fee policy shows they truly believe in their work.
    //     </>
    //     ),
    //   name: 'David Brown',
    //   location: 'Illinois, USA',
    //   verified: true,
    //   date: 'April 9',
    //   source: 'GOOGLE',
    //   avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
    // },
    // Add more reviews here
  ],
  linkedin: [
    {
      id: 2,
      stars: 5,
      text: (<>
      I was initially skeptical about <strong>launching</strong> an <strong>ICO</strong>, but <a href="/"><strong>Jakaria.finance</strong></a> changed my perspective. They not only helped me <strong>raise the capital</strong> I needed but also guided me with expertise that’s hard to find anywhere else. <strong>The best part?</strong> No upfront fees—they truly care about the success of their clients. Thanks to <a href="/"><strong>Jakaria.finance</strong></a>. I now feel confident navigating the crypto world. <strong>I highly recommend their services</strong>
      </>
        ),
        name: 'Ethan P., Founder of FinTech Solutions',
      location: 'New York, USA',
      verified: true,
      date: 'August 08,2024',
      source: 'LinkedIn',
      avatar: '/reviewers/link 01.png',
    },
    {
      id: 3,
      stars: 5,
      text: (<><a href="/"><strong>Jakaria.finance</strong></a> didn’t just help me <strong>raise the funds</strong> I needed for my business, they also taught me how to <strong>leverage the crypto market</strong> to generate quick profits . Their customer service is outstanding, and their team goes the extra mile to <strong>ensure your success</strong>. I was never left in the dark—they were there for me every step of the way. I wouldn’t <strong>trust</strong> anyone else in the <strong>crypto space</strong></>
        ),
      name: 'David H., Entrepreneur and Investor',
      location: 'New York, USA',
      verified: true,
      date: 'August 18,2024',
      source: 'LinkedIn',
      avatar: '/reviewers/link 02.png',
    },
    {
      id: 4,
      stars: 5,
      text: (<>I was initially <strong>unsure about launching a memecoin, but</strong> <a href="/"><strong>Jakaria.finance</strong></a> made it incredibly <strong>easy and profitable</strong>. Within just 7 days, I saw impressive returns! Their team really knows the <strong>crypto space</strong>, providing invaluable insights that helped my project succeed. Plus, no upfront fees—what a relief! Thanks to <a href="/"><strong>Jakaria.finance</strong></a>, I’m now <strong>confidently</strong> stepping into the world of <strong>crypto</strong></>
        ),
      name: 'Jessica T., Business Owner',
      location: 'New York, USA',
      verified: true,
      date: 'Jan 23,2024',
      source: 'LinkedIn',
      avatar: '/reviewers/link 03.png',
    },
        {
      id: 1,
      stars: 5,
      text: (<>
      <a href="/"><strong>Jakaria.finance</strong></a> helped us launch our ICO in just 7 days, and the results were beyond our expectations! We successfully raised the capital needed to scale our product globally. The team’s expertise, guidance, and continuous support made all the difference. Plus, the best part? No upfront fees —which made it easy for us to take the leap. I can confidently say their service is top-tier. Highly recommend to any entrepreneur looking to elevate their business!</>
        ),
      name: 'John M., CEO of TechVibe Innovations',
      location: 'New York, USA',
      verified: true,
      date: 'March 15',
      source: 'LinkedIn',
      avatar: '/reviewers/link 06.png',
    },
    {
      id: 5,
      stars: 5,
      text: (<><a href="/"><strong>Jakaria.finance</strong></a>. went above and beyond our expectations. They laid out a <strong>clear strategy</strong> for our <strong>ICO</strong> and had us up and running in record time . Their professionalism, coupled with their deep understanding of the <strong>crypto market</strong>, made the <strong>entire process seamless</strong>. If you’re looking for a <strong>partner</strong> who can get your business to the next level, <a href="/"><strong>Jakaria.finance</strong></a>. is your go-to!"</>
        ),
      name: 'Michael B., Co-founder of Blockchain Enterprises',
      location: 'New York, USA',
      verified: true,
      date: 'February 28,2024',
      source: 'LinkedIn',
      avatar: '/reviewers/link 04.png',
    },
    {
      id: 6,
      stars: 5,
      text: (<>Working with <a href="/"><strong>Jakaria.finance</strong></a>. was a true game-changer for us! We <strong>launched our memecoin</strong> on a decentralized exchange and saw remarkable <strong>short-term profits</strong>. The entire process was smooth and hassle-free. The team was professional and provided exceptional support every step of the way. What really stood out to us was the <strong>no upfront fees policy</strong>, which made getting started so much easier. You can’t go wrong with <a href="/"><strong>Jakaria.finance</strong></a>"</>
        ),
      name: '.Sarah L., Founder of CryptoSavvy',
      location: 'New York, USA',
      verified: true,
      date: ' November 08,2024',
      source: 'LinkedIn',
      avatar: '/reviewers/link 05.png',
    },
  ],
  google: [
    {
      id: 7,
      stars: 5,
      text: (<>Super happy with <a href="/"><strong>Jakaria.finance</strong></a>! They helped me launch my <strong>ICO</strong> in no time and made the whole thing <strong>so easy</strong>. The team was always there when I had questions. <strong>Definitely recommend!</strong> Their quick responses and <strong>clear guidance</strong> made all the difference"</>
        ),
      name: 'John Miller',
      location: 'New York, USA',
      verified: true,
      date: 'JUNE 14, 2023',
      source: 'GOOGLE',
      avatar: '/reviewers/google  1.png',
    },
    {
      id: 8,
      stars: 5,
      text: (<><strong>Great</strong> experience working with <a href="/"><strong>Jakaria.finance</strong></a> They took care of everything for my <strong>meme token launch</strong> and it actually went smoother than I expected. <strong>No upfront fees</strong> made it even better! The process was simple, and I felt supported from start to finish"</>
        ),
      name: 'Emily Johnson',
      location: 'California, USA',
      verified: true,
      date: 'November 01, 2025',
      source: 'GOOGLE',
      avatar: '/reviewers/google 2.png',
    },
    {
      id: 9,
      stars: 5,
      text: (<><strong>Fast, reliable, and honest service.</strong> <a href="/"><strong>Jakaria.finance</strong></a> helped me raise <strong>funds</strong> for my project without any hassle. Loved how transparent and supportive they were throughout. I’m really <strong>impressed</strong> by their professionalism and <strong>friendly approach</strong></>
        ),
      name: 'Michael Davis',
      location: 'Texas, USA',
      verified: true,
      date: 'February 20',
      source: 'GOOGLE',
      avatar: '/reviewers/google  3.png',
    },
    {
      id: 10,
      stars: 5,
      text: (<><strong>Launching a token</strong> seemed scary before, but <a href="/"><strong>Jakaria.finance</strong></a> made it simple and fun. The whole process took <strong>just a week</strong> and their marketing team really <strong>boosted my project’s</strong> reach! I’m excited to work with them again on <strong>future projects</strong>"</>
        ),
      name: 'Sarah Wilson',
      location: 'Florida, USA',
      verified: true,
      date: 'February 12, 2025',
      source: 'GOOGLE',
      avatar: '/reviewers/google 4.png',
    },
    {
      id: 11,
      stars: 5,
      text: (<>If you want to get into crypto without the stress, <a href="/"><strong>Jakaria.finance</strong></a> is the way to go. They know their stuff and are super friendly. I would definitely use them again. The no upfront fee policy shows they truly believe in their work"</>
        ),
      name: 'David Brown',
      location: 'Illinois, USA',
      verified: true,
      date: 'February 09, 2025',
      source: 'GOOGLE',
      avatar: '/reviewers/gogle 05.png',
    },
  ],
  trustpilot: [
    {
      id: 12,
      stars: 5,
      text: (<><a href="/"><strong>Jakaria.finance</strong></a> made launching my <strong>token stress-free</strong>. Their team walked me through <strong>every step</strong>, and I never <strong>felt lost</strong>. The support was <strong>fantastic</strong> and the whole process was faster than I imagined"</>
        ),
      name: 'Jessica Martinez',
      location: 'Seattle, USA',
      verified: true,
      date: 'March 18, 2025',
      source: 'TRUST PILOT',
      avatar: '/reviewers/trust 01.png',
    },
    {
      id: 13,
      stars: 5,
      text: (<>I was <strong>skeptical</strong> about <strong>memecoin</strong> launches until I worked with <a href="/"><strong>Jakaria.finance</strong></a> , They know the market well and helped me get listed on a <strong>DEX</strong> quickly. Best part – zero upfront fees, which made it <strong>risk-free to try</strong>"</>
        ),
      name: 'Emily Clark',
      location: 'Denver, USA',
      verified: true,
      date: 'January 5, 2025',
      source: 'TRUST PILOT',
      avatar: '/reviewers/trust 02.png',
    },
    {
      id: 14,
      stars: 5,
      text: (<>Their <strong>blockchain developers</strong> are really skilled. My <strong>ICO launch</strong> was smooth and the marketing push got <strong>great attention</strong>. I appreciate how <strong>transparent</strong> they were about timelines and costs"</>
        ),
      name: 'Olivia Anderson',
      location: 'Boston, USA',
      verified: true,
      date: 'January 5, 2025',
      source: 'TRUST PILOT',
      avatar: '/reviewers/trust 03.png',
    },
    {
      id: 15,
      stars: 5,
      text: (<>I loved how <a href="/"><strong>Jakaria.finance</strong></a> handled my <strong>project</strong> from start to finish. They’re fast, reliable, and super communicative. The entire ICO process was completed within a week, just like they <strong>promised</strong>"</>
        ),
      name: 'Ethan Clark',
      location: 'Austin, USA',
      verified: true,
      date: 'March 25, 2025',
      source: 'TRUST PILOT',
      avatar: '/reviewers/trust 04.png',
    },
    {
      id: 16,
      stars: 5,
      text: (<>Working with <a href="/"><strong>Jakaria.finance</strong></a> was a great experience. They made <strong>token creation</strong> easy and helped me connect with the right investors. Their <strong>24/7 support</strong> made me <strong>feel confident</strong> throughout the launch</>
        ),
      name: 'Megan Scott',
      location: 'Miami, USA',
      verified: true,
      date: 'September 5, 2025',
      source: 'TRUST PILOT',
      avatar: '/reviewers/trust 06.png',
    },
    {
      id: 17,
      stars: 5,
      text: (<>If you want to get your <strong>crypto project off</strong> the ground <strong>without</strong> headaches, <a href="/"><strong>Jakaria.finance</strong></a> is the team to trust. They took care of everything and delivered results on time. Would definitely <strong>recommend</strong>"</>
        ),
      name: 'James Rodriguez',
      location: 'Chicago, USA',
      verified: true,
      date: 'January 15, 2025',
      source: 'TRUST PILOT',
      avatar: '/reviewers/trust 05.png',
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

const reviews = 
  activeSource === 'all' 
    ? [...reviewsData.linkedin, ...reviewsData.google, ...reviewsData.trustpilot] 
    : reviewsData[activeSource];
  const overallRating = reviewSources.find((s) => s.id === activeSource)?.rating || 5;

  // Handle carousel navigation
  const prev = () => {
    setCurrentReviewIndex((i) => (i === 0 ? reviews.length - 1 : i - 1));
  };

  const next = () => {
    setCurrentReviewIndex((i) => (i === reviews.length - 1 ? 0 : i + 1));
  };

  return (
    <div className="max-w-6xl mx-auto my-12 py-6 px-4 sm:px-6 lg:px-8 bg-gray-50 rounded-lg shadow-md">
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
            {source.id === 'linkedin' && (
              <img src={linkedin.src} alt="LinkedIn" className="w-5 h-5" />
            )}
            {source.id === 'google' && (
              <img src={google.src} alt="google" className="w-5 h-5" />
            )}
            {source.id === 'trustpilot' && (
              <img src={trustpilot.src} alt="trustpilot" className="w-5 h-5" />
            )}
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
            <span className="text-gray-400">{reviews.length}</span>
          </div>
        </div>
      </div>

      {/* Review Card */}
      {reviews.length > 0 && (
        <div className="bg-white p-6 rounded-md shadow relative">
          {/* Stars */}
          <Stars count={reviews[currentReviewIndex].stars} />

          {/* Text */}
          <p className="mt-3 pb-10 text-gray-800">{reviews[currentReviewIndex].text}</p>

          {/* Navigation Arrows */}
          <button
            onClick={prev}
            aria-label="Previous review"
            className="absolute flex items-center justify-center w-8 h-8 top-1/2 left-2 -translate-y-1/2  rounded-full p-2 bg-gray-200 hover:bg-gray-300"
          >
            &lt;
          </button>
          <button
            onClick={next}
            aria-label="Next review"
            className="absolute flex items-center justify-center w-8 h-8 top-1/2 right-2 -translate-y-1/2 rounded-full p-2 bg-gray-200 hover:bg-gray-300"
          >
            &gt;
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
                    xmlns={verified}
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



