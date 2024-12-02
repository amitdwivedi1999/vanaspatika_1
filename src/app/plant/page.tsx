"use client"; // Mark this file as a client component

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [language, setLanguage] = useState("english"); // Default language is English
  const [content, setContent] = useState({
    details: [],
  });

  // Fetch data based on the selected language
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/content?lang=${language}`);
        const data = await res.json();
        setContent(data);
      } catch (error) {
        console.error("Error fetching content:", error);
      }
    };

    fetchData();
  }, [language]); // Trigger when language changes

  return (
    <>
      <div className="relative">
        <header className="absolute inset-x-0 top-0 z-10 w-full">
          <div className="px-4 mx-auto sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 lg:h-20">
              <div className="flex-shrink-0">
                <Link href="/" title="" className="flex">
                  <img
                    className="w-auto h-8"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/3/logo.svg"
                    alt=""
                  />
                </Link>
              </div>
              <button
                type="button"
                className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
              >
                {/* Menu open icon */}
                <svg
                  className="block w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </header>

        <section className="py-12 bg-white sm:py-16 lg:py-20">
          <div className="px-4 pt-20 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="lg:grid lg:grid-cols-12 lg:gap-x-16 xl:gap-x-24 mt-10">
              {/* Left side content */}
              <article className="lg:col-span-8">
                <div className="w-full">
                  <img
                    className="w-full pb-6 object-cover"
                    src="/images/lemon.jpg"
                    alt="Lemon Plant"
                  />
                </div>

                {/* Content dynamically below the image */}
                <div className="max-w-2xl">
                  <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                    {language === "english"
                      ? "Lemon Plant Care"
                      : "नींबू के पौधे की देखभाल"}
                  </h1>
                  <p className="mt-6 text-base font-medium text-gray-500">
                    {language === "english"
                      ? "Learn how to care for lemon plants, including watering, sunlight, and pruning tips."
                      : "नींबू के पौधों की देखभाल के बारे में जानें, जिसमें पानी देना, धूप और छंटाई शामिल हैं।"}
                  </p>
                </div>

                <div>
                  {content.details && content.details.length > 0 ? (
                    content.details.map((detail, index) => (
                      <div key={index} className="mt-8">
                        <h2 className="text-2xl font-semibold text-gray-900">
                          {detail.heading}
                        </h2>
                        <p className="mt-4 text-base text-gray-700 whitespace-pre-line">
                          {detail.description}
                        </p>
                      </div>
                    ))
                  ) : (
                    <p>Loading content...</p>
                  )}
                </div>
              </article>

              {/* Right side: Language button box */}
              <aside className="lg:col-span-4">
                <div className="flex justify-end">
                  <div className="bg-gray-100 border border-gray-300 rounded-md p-4">
                    <div className="flex space-x-4">
                      <button
                        onClick={() => setLanguage("english")}
                        className={`px-6 py-2 font-semibold text-base ${
                          language === "english"
                            ? "bg-orange-500 text-white"
                            : "bg-white text-black hover:bg-gray-200"
                        } rounded-md`}
                      >
                        English
                      </button>
                      <button
                        onClick={() => setLanguage("hindi")}
                        className={`px-6 py-2 font-semibold text-base ${
                          language === "hindi"
                            ? "bg-orange-500 text-white"
                            : "bg-white text-black hover:bg-gray-200"
                        } rounded-md`}
                      >
                        हिंदी
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <button
                    type="button"
                    className="flex items-center justify-center w-full px-4 py-3 text-base font-bold text-center text-white transition-all duration-200 border-2 rounded-md bg-orange-500 hover:bg-orange-600"
                  >
                    Download Chart
                  </button>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
