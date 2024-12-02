import Image from "next/image";
import Link from "next/link";

export default function Home() {
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
              {/* Menu open: "hidden", Menu closed: "block" */}
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
              {/* Menu open: "block", Menu closed: "hidden" */}
              <svg
                className="hidden w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="hidden ml-auto lg:flex lg:items-center lg:justify-center lg:space-x-10">
              <a
                href="#"
                title=""
                className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"
              >
                {" "}
                Features{" "}
              </a>
              <a
                href="#"
                title=""
                className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"
              >
                {" "}
                Solutions{" "}
              </a>
              <a
                href="#"
                title=""
                className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"
              >
                {" "}
                Resources{" "}
              </a>
              <a
                href="#"
                title=""
                className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"
              >
                {" "}
                Pricing{" "}
              </a>
              <a
                href="#"
                title=""
                className="inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold transition-all duration-200 rounded-full bg-orange-500 text-white hover:bg-orange-600 focus:bg-orange-600"
                role="button"
              >
                {" "}
                Try for free{" "}
              </a>
            </div>
          </div>
        </div>
      </header>
      <section className="bg-yellow-50 overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:items-stretch lg:min-h-[800px]">
          <div className="relative flex items-center justify-center w-full lg:order-2 lg:w-7/12">
            <div className="absolute bottom-0 right-0 hidden lg:block">
              <img
                className="object-contain w-auto h-48"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/3/curved-lines.png"
                alt=""
              />
            </div>
            <div className="relative px-4 pt-24 pb-16 text-center sm:px-6 md:px-24 2xl:px-32 lg:py-24 lg:text-left">
              <h1 className="text-4xl font-bold text-black sm:text-6xl xl:text-8xl">
                Get it done.
                <br />
                Fast, Easy.
              </h1>
              <p className="mt-8 text-xl text-black">
                We help you to make your remote work life easier. Build a
                distruction free working experience.
              </p>
              <form
                action="#"
                method="POST"
                className="max-w-xl mx-auto mt-8 bg-white lg:mx-0 sm:bg-transparent lg:mt-12 rounded-xl"
              >
                <div className="p-4 sm:p-2 sm:bg-white sm:border-2 sm:border-transparent sm:rounded-full sm:focus-within:border-orange-500 sm:focus-within:ring-1 sm:focus-within:ring-orange-500">
                  <div className="flex flex-col items-start sm:flex-row">
                    <div className="flex-1 w-full min-w-0">
                      <div className="relative text-gray-400 focus-within:text-gray-600">
                        <label htmlFor="email" className="sr-only" />
                        <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Enter email to get started"
                          className="block w-full px-4 py-4 text-base text-center text-black placeholder-gray-500 transition-all duration-200 border-transparent rounded-full sm:text-left focus:border-transparent focus:ring-0 caret-orange-500"
                          required=""
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full px-4 py-4 mt-4 font-semibold text-white transition-all duration-200 bg-orange-500 border border-transparent rounded-full sm:w-auto sm:ml-4 sm:mt-0 hover:bg-orange-600 focus:bg-orange-600"
                    >
                      Try 14 days free
                    </button>
                  </div>
                </div>
              </form>
              <p className="mt-5 text-base text-black">
                Instant access . No credit card required
              </p>
            </div>
          </div>
          <div className="relative w-full overflow-hidden lg:order-1 h-96 lg:h-auto lg:w-5/12">
            <div className="absolute inset-0">
              <img
                className="w-full h-full scale-150"
                src="/images/banner1.jpg"
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            {/* <div className="absolute bottom-0 left-0">
              <div className="p-4 sm:p-6 lg:p-8">
                <div className="flex items-center">
                  <svg
                    className="w-10 h-10 text-orange-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <h2 className="font-bold text-white text-7xl ml-2.5">395</h2>
                </div>
                <p className="max-w-xs mt-1.5 text-xl text-white">
                  Professionals have organized their desk via PostCra
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </div>

    <section className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl">Trusted by world class companies, design teams &amp; popular designers</h2>
        </div>
        <div className="grid grid-cols-1 mt-12 text-center sm:grid-cols-2 gap-y-8 lg:grid-cols-4 sm:gap-12">
          <div>
            <div className="flex items-center justify-center w-20 h-20 mx-auto bg-blue-100 rounded-full">
              <img className="text-blue-600 w-12 h-12" src="/images/plant.png" />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">
              Secured Payments
            </h3>
          </div>
          <div>
            <div className="flex items-center justify-center w-20 h-20 mx-auto bg-orange-100 rounded-full">
              <img className="text-blue-600 w-12 h-12" src="/images/succulents.png" />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">
              Succulents
            </h3>
          </div>
          <div>
            <div className="flex items-center justify-center w-20 h-20 mx-auto bg-blue-100 rounded-full">
              <img className="text-blue-600 w-12 h-12" src="/images/fertilizer.png" />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">
              Light &amp; Dark Version
            </h3>
          </div>
          <div>
            <div className="flex items-center justify-center w-20 h-20 mx-auto bg-red-100 rounded-full">
              <img className="text-blue-600 w-12 h-12" src="/images/seeds.png" />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">Seeds</h3>
          </div>
          <div>
            <div className="flex items-center justify-center w-20 h-20 mx-auto bg-orange-100 rounded-full">
              <img className="text-blue-600 w-12 h-12" src="/images/flower-pot.png" />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">Filter Blocks</h3>
          </div>
          <div>
            <div className="flex items-center justify-center w-20 h-20 mx-auto bg-red-100 rounded-full">
              <img className="text-blue-600 w-12 h-12" src="/images/natural-product.png" />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">Filter Blocks</h3>
            <p className="mt-4 text-sm text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
              sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div>
          <div>
            <div className="flex items-center justify-center w-20 h-20 mx-auto bg-blue-100 rounded-full">
              <img className="text-blue-600 w-12 h-12" src="/images/park.png" />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">Filter Blocks</h3>
            <p className="mt-4 text-sm text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
              sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div>
          <div>
            <div className="flex items-center justify-center w-20 h-20 mx-auto bg-red-100 rounded-full">
              <img className="text-blue-600 w-12 h-12" src="/images/bonsai.png" />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">Filter Blocks</h3>
            <p className="mt-4 text-sm text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
              sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl">
            Trusted by world class companies, design teams &amp; popular designers
          </h2>
        </div>
        <div className="grid grid-cols-1 mt-12 lg:mt-24 gap-y-12 md:grid-cols-3 gap-x-6">
          <div className="md:px-4 lg:px-10">
            <img
              className="-rotate-1"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/3/team.jpg"
              alt=""
            />
            <h3 className="mt-8 text-xl font-semibold leading-tight text-black">
              Join as a team
            </h3>
            <p className="mt-4 text-base text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
              sint.
            </p>
          </div>
          <div className="md:px-4 lg:px-10">
            <img
              className="rotate-1"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/3/work.jpg"
              alt=""
            />
            <h3 className="mt-8 text-xl font-semibold leading-tight text-black">
              Work from anywhere
            </h3>
            <p className="mt-4 text-base text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
              sint.
            </p>
          </div>
          <div className="md:px-4 lg:px-10">
            <img
              className="-rotate-1"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/3/success.jpg"
              alt=""
            />
            <h3 className="mt-8 text-xl font-semibold leading-tight text-black">
              Get success
            </h3>
            <p className="mt-4 text-base text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
              sint.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Latest from blog
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis.
          </p>
        </div>
        <div className="grid max-w-md grid-cols-1 mx-auto mt-12 lg:max-w-full lg:mt-16 lg:grid-cols-3 gap-x-16 gap-y-12">
          <div>
            <Link href="/plant" title="" className="block aspect-w-4 aspect-h-3">
              <img
                className="object-cover w-full h-full"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/1/blog-post-1.jpg"
                alt=""
              />
            </Link>
            <span className="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-rose-500 bg-rose-100 mt-9">
              {" "}
              Technology{" "}
            </span>
            <p className="mt-6 text-xl font-semibold">
              <Link href="/plant" title="" className="text-black">
                {" "}
                How to mange your remote team?{" "}
              </Link>
            </p>
            <p className="mt-4 text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
              sint. Velit officia consequat duis enim velit mollit.
            </p>
            <div className="h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed" />
            <span className="block text-sm font-bold tracking-widest text-gray-500 uppercase">
              {" "}
              Martin Jones . June 12, 2021{" "}
            </span>
          </div>
          <div>
            <a href="#" title="" className="block aspect-w-4 aspect-h-3">
              <img
                className="object-cover w-full h-full"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/1/blog-post-2.jpg"
                alt=""
              />
            </a>
            <span className="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-sky-500 bg-sky-100 mt-9">
              {" "}
              Marketing{" "}
            </span>
            <p className="mt-6 text-xl font-semibold">
              <a href="#" title="" className="text-black">
                {" "}
                6 Product launching emails you want to use on next campaign.{" "}
              </a>
            </p>
            <p className="mt-4 text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
              sint. Velit officia consequat duis enim velit mollit.
            </p>
            <div className="h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed" />
            <span className="block text-sm font-bold tracking-widest text-gray-500 uppercase">
              {" "}
              Martin Jones . June 12, 2021{" "}
            </span>
          </div>
          <div>
            <a href="#" title="" className="block aspect-w-4 aspect-h-3">
              <img
                className="object-cover w-full h-full"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/1/blog-post-3.jpg"
                alt=""
              />
            </a>
            <span className="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-sky-500 bg-sky-100 mt-9">
              {" "}
              Marketing{" "}
            </span>
            <p className="mt-6 text-xl font-semibold">
              <a href="#" title="" className="text-black">
                {" "}
                Learn from the best: 7 email marketing ideas you can use{" "}
              </a>
            </p>
            <p className="mt-4 text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
              sint. Velit officia consequat duis enim velit mollit.
            </p>
            <div className="h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed" />
            <span className="block text-sm font-bold tracking-widest text-gray-500 uppercase">
              {" "}
              Martin Jones . June 12, 2021{" "}
            </span>
          </div>
        </div>
      </div>
    </section>

    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="sm:flex sm:items-center sm:justify-between sm:space-x-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Learn how to improve your Photography skills
          </h2>
          <div className="mt-6 sm:mt-0 sm:shrink-0">
            <a
              href="#"
              title=""
              className="inline-flex items-center text-base font-medium text-gray-900 group"
            >
              See all articles
              <svg
                className="w-5 h-5 ml-2 transition-all duration-200 transform group-hover:translate-x-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="relative overflow-hidden bg-gray-900 group rounded-xl">
            <a href="#" title="" className="block">
              <img
                className="object-cover w-full h-full"
                src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/blog-grid/4/thumbnail-1.png"
                alt=""
              />
            </a>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 group-hover:backdrop-blur-[2px] transition-all duration-200 via-gray-900/20 to-transparent" />
            <div className="absolute transition-all duration-200 opacity-0 top-4 right-4 group-hover:opacity-100">
              <svg
                className="w-6 h-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1={17} y1={7} x2={7} y2={17} />
                <polyline points="8 7 17 7 17 16" />
              </svg>
            </div>
            <div className="absolute inset-x-0 bottom-0 p-6">
              <div className="transition-all duration-300 transform translate-y-1/2 group-hover:translate-y-0">
                <p className="text-lg font-bold leading-tight text-white">
                  <a href="#" title="" className="">
                    How to write content about your photographs
                    <span className="absolute inset-0" aria-hidden="true" />
                  </a>
                </p>
                <p className="mt-4 text-sm font-medium text-white/70">
                  April 09, 2022
                </p>
                <p className="mt-5 text-sm font-normal leading-6 text-white">
                  Lorem ipsum dolor sit amet, consec tetur adip iscing elit quis
                  auctor...
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden bg-gray-900 group rounded-xl">
            <a href="#" title="" className="block">
              <img
                className="object-cover w-full h-full"
                src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/blog-grid/4/thumbnail-2.png"
                alt=""
              />
            </a>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 group-hover:backdrop-blur-[2px] transition-all duration-200 via-gray-900/20 to-transparent" />
            <div className="absolute transition-all duration-200 opacity-0 top-4 right-4 group-hover:opacity-100">
              <svg
                className="w-6 h-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1={17} y1={7} x2={7} y2={17} />
                <polyline points="8 7 17 7 17 16" />
              </svg>
            </div>
            <div className="absolute inset-x-0 bottom-0 p-6">
              <div className="transition-all duration-300 transform translate-y-1/2 group-hover:translate-y-0">
                <p className="text-lg font-bold leading-tight text-white">
                  <a href="#" title="" className="">
                    How to write content about your photographs
                    <span className="absolute inset-0" aria-hidden="true" />
                  </a>
                </p>
                <p className="mt-4 text-sm font-medium text-white/70">
                  April 09, 2022
                </p>
                <p className="mt-5 text-sm font-normal leading-6 text-white">
                  Lorem ipsum dolor sit amet, consec tetur adip iscing elit quis
                  auctor...
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden bg-gray-900 group rounded-xl">
            <a href="#" title="" className="block">
              <img
                className="object-cover w-full h-full"
                src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/blog-grid/4/thumbnail-3.png"
                alt=""
              />
            </a>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 group-hover:backdrop-blur-[2px] transition-all duration-200 via-gray-900/20 to-transparent" />
            <div className="absolute transition-all duration-200 opacity-0 top-4 right-4 group-hover:opacity-100">
              <svg
                className="w-6 h-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1={17} y1={7} x2={7} y2={17} />
                <polyline points="8 7 17 7 17 16" />
              </svg>
            </div>
            <div className="absolute inset-x-0 bottom-0 p-6">
              <div className="transition-all duration-300 transform translate-y-1/2 group-hover:translate-y-0">
                <p className="text-lg font-bold leading-tight text-white">
                  <a href="#" title="" className="">
                    How to write content about your photographs
                    <span className="absolute inset-0" aria-hidden="true" />
                  </a>
                </p>
                <p className="mt-4 text-sm font-medium text-white/70">
                  April 09, 2022
                </p>
                <p className="mt-5 text-sm font-normal leading-6 text-white">
                  Lorem ipsum dolor sit amet, consec tetur adip iscing elit quis
                  auctor...
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden bg-gray-900 group rounded-xl">
            <a href="#" title="" className="block">
              <img
                className="object-cover w-full h-full"
                src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/blog-grid/4/thumbnail-4.png"
                alt=""
              />
            </a>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 group-hover:backdrop-blur-[2px] transition-all duration-200 via-gray-900/20 to-transparent" />
            <div className="absolute transition-all duration-200 opacity-0 top-4 right-4 group-hover:opacity-100">
              <svg
                className="w-6 h-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1={17} y1={7} x2={7} y2={17} />
                <polyline points="8 7 17 7 17 16" />
              </svg>
            </div>
            <div className="absolute inset-x-0 bottom-0 p-6">
              <div className="transition-all duration-300 transform translate-y-1/2 group-hover:translate-y-0">
                <p className="text-lg font-bold leading-tight text-white">
                  <a href="#" title="" className="">
                    How to write content about your photographs
                    <span className="absolute inset-0" aria-hidden="true" />
                  </a>
                </p>
                <p className="mt-4 text-sm font-medium text-white/70">
                  April 09, 2022
                </p>
                <p className="mt-5 text-sm font-normal leading-6 text-white">
                  Lorem ipsum dolor sit amet, consec tetur adip iscing elit quis
                  auctor...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    </>


  );
}
