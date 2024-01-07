import { Link } from 'nextra-theme-docs';
import React from 'react'

export default function LandingPage() {
    return (
        <div className="">
           <Hero />
            <div className="">
                <FeaturesGrid />
            </div>
        </div>
    )
}

const Hero = () => {
    return (
      <div className=" text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-left">
          <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
            Welcome to <span className="text-indigo-600">Urban Framework</span>
          </h1>
          <p className="mt-6 max-w-md text-lg sm:max-w-lg sm:text-xl">
            Build fast, modern, and scalable applications with our intuitive framework designed for developers who demand the best performance and tooling.
          </p>
          <div className="mt-8 sm:flex">
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <Link href="/introduction" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };
  

const FeatureCard = ({ emoji, title, description }) => {
    return (
      <div className="flex flex-col items-start p-6 bg-transparent bg-opacity-80 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <span className="text-5xl border border-solid p-3 rounded-xl border-indigo-600">{emoji}</span>
        <h2 className="mt-4 text-xl font-semibold text-gray-500">{title}</h2>
        <p className="mt-2 text-base text-white">{description}</p>
      </div>
    );
  };
  
  const FeaturesGrid = () => {
    return (
      <div className="bg-transparent py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {gridData.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    );
  };
  

const gridData = [
    {
        emoji: "⚡️",
        title: "Blazing Fast",
        description:
            "Deliver blazing-fast websites with Urban.js's built-in performance optimizations.",
    },
    {
        emoji: "🔮",
        title: "File Based Routing",
        description: "Effortlessly manage routes with our intuitive file-based routing system, inspired by Next.js.",
    },
    {
        emoji: "🛠️",
        title: "Headless Components",
        description:
            "Enjoy maximum customization freedom with our headless components.",
    },
    {
        emoji: "🔋",
        title: "Batteries Included",
        description:
            "Build your website with our high-quality components and features. Don't reinvent the wheel.",
    },
    {
        emoji: "⚙️",
        title: "RSC Support",
        description:
            "Stay updated with cutting-edge React technology via our RSC support.",
    },
    {
        emoji: "🤙🏿",
        title: "Familiar DX",
        description: "Delight in the ultimate DX because it's just React.",
    },
];