import React from "react";
import Image from "next/image";
import about from "../assets/about5.png";

const AboutUs = () => {
  return (
    <div>
      <section id="aboutus" className="bg-gradient-to-r from-dark1 to-dark2">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-12 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 md:order-last lg:h-full">
              <Image
                alt="Party"
                src={about}
                className="absolute inset-0 h-full w-full object-contain"
              />
            </div>

            <div className="lg:py-16 text-center md:text-left">
              <h6 className="uppercase font-bold text-white">about us</h6>
              <h2 className="text-3xl capitalize font-bold sm:text-4xl text-white">
                why you should choose us
              </h2>

              <p className="mt-4 text-white">
                Welcome to "Assignment Solver", your trusted partner in solving
                academic assignments. We understand the challenges students face
                when it comes to complex coursework and tight deadlines. That's
                why we are here to provide you with top-quality assignment
                assistance, ensuring your academic success.
              </p>

              <a
                href="#contact"
                className="mt-8 inline-block rounded-full bg-pink-darkPink px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Know More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
