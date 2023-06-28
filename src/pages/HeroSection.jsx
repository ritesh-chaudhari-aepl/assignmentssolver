import React from "react";
import bgbanner from "../assets/bgbanner.png";
import bannerrightimage from "../assets/Online.png";
import Image from "next/image";

const HeroSection = () => {
  // const bgstyles = {
  //   backgroundImage: `url(${hero})`,
  //   backgroundSize: "contain",
  //   backgroundPosition: "10%",
  //   backgroundRepeat: "no-repeat",
  //   height: "100vh",
  // };
  const banner = {
    // backgroundImage: "url(" + `${bgbanner}` + ")",
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "-webkit-fill-available",
    width: "-webkit-fill-available",
  };
  return (
    <div className="pt-28 md:pt-32 lg:pt-16">
      <section className="relative bg-darkBg bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0">
          <Image src={bgbanner} alt="background image" style={banner} />
        </div>
        {/* <div class="absolute inset-0 bg-darkBg/75 sm:bg-transparent sm:from-white/95 sm:to-white/25  sm:bg-gradient-to-l" /> */}

        <div className="relative mx-auto max-w-screen-xl px-4 py-2 sm:px-6 md:flex h-auto lg:items-center justify-between lg:px-8">
          <div className="md:w-1/2 w-full text-center sm:text-left">
            <h1 class="text-3xl text-white font-QuickSand font-extrabold xl:text-5xl">
              Solving your academic challenges, one assignment at a time
              <strong class="mt-3 block font-QuickSand font-extrabold text-pink-darkPink">
                Assignment Solver
              </strong>
            </h1>

            <p class="mt-5 text-white font-OpenSans max-w-lg sm:text-l/relaxed">
              Welcome to Assignment Solver, your trusted partner in solving
              academic assignments. 
            </p>

            <div class="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="#contact"
                class="block w-full rounded-full bg-pink-darkPink px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Get Started
              </a>

              <a
                href="#sessions"
                class="block w-full rounded-full bg-gray-100 px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="flex md:w-1/2 w-full justify-end sm:text-right">
            <Image
              className="md:w-[80%] xl:w-full w-full"
              alt="Party"
              src={bannerrightimage}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
