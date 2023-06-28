"use client";
import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LocalActivityOutlinedIcon from "@mui/icons-material/LocalActivityOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";

const Pricing = () => {
  const iconstyle = {
    fontSize: "2rem",
  };

  return (
    <>
      <section id="pricing" className="bg-darkBg text-white">
        <div className="mx-auto max-w-screen-x  lg:pt-16 md:mt-0 px-4 py-14 sm:py-22 sm:px-6 lg:py-16 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex flex-col items-center">
              <h2 className="text-3xl font-bold mb-2 text-white sm:text-4xl">
                Pricing
              </h2>
              <span className="h-[2px] bg-pink-darkPink  w-16 mb-4" />
            </div>
            <p className="mt-4 text-white">
              We have crafted different pricing plans based on different
              learning needs. Choose pay-as-you-go plan to clear a few doubts
              instantly or choose a more supported tutoring plan that can help
              you advance your subject knowledge.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-3 ">
            <div className="wrapper grid-flow-col block rounded-xl border text-center border-pink-500/10 py-12 shadow-md shadow-pink-light transition hover:border-pink-light hover:shadow-pink-light">
              <div className="card items-center gap-6 flex flex-col">
                <div className="rounded-full bg-pink-pinkLight w-fit text-pink-darkPink p-4 hover:text-white hover:bg-pink-darkPink transition hover:border-pink-darkPink">
                  <ShoppingCartOutlinedIcon style={iconstyle} />
                </div>

                <ul className="grid gap-4">
                  <li className="font-bold font-xl font-QuickSand text-pink-darkPink">
                    $10 <span className="font-normal text-white">/mon</span>
                  </li>
                  <li className="font-bold font-2xl uppercase">pro</li>
                  <li>1 User</li>
                  <li>10 GB Storage</li>
                  <li>Email Support</li>
                  <li>Lifetime Updates</li>
                </ul>

                <a
                  href="#"
                  className="inline-block rounded-full bg-pink-darkPink sm:px-8 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                >
                  Buy Now
                </a>
              </div>
            </div>

            <div className="wrapper grid-flow-col block rounded-xl border text-center border-pink-500/10 py-12 shadow-md shadow-pink-light transition hover:border-pink-light hover:shadow-pink-light">
              <div className="card items-center gap-6 flex flex-col">
                <div className="rounded-full border-2 bg-pink-darkPink w-fit text-white border-pink-darkPink p-4">
                  <LocalActivityOutlinedIcon style={iconstyle} />
                </div>

                <ul className="grid gap-4">
                  <li className="font-bold font-xl font-QuickSand text-pink-darkPink">
                    $35 <span className="font-normal text-white">/mon</span>
                  </li>
                  <li className="font-bold font-2xl uppercase">plus</li>
                  <li>10 User</li>
                  <li>30 GB Storage</li>
                  <li>Priority Email Support</li>
                  <li>Lifetime Updates</li>
                </ul>

                <a
                  href="#"
                  className="inline-block rounded-full bg-pink-darkPink sm:px-8 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                >
                  Buy Now
                </a>
              </div>
            </div>

            <div className="wrapper grid-flow-col block rounded-xl border text-center border-pink-500/10 py-12 shadow-md shadow-pink-light transition hover:border-pink-light hover:shadow-pink-light">
              <div className="card items-center gap-6 flex flex-col">
                <div className="rounded-full bg-pink-pinkLight w-fit text-pink-darkPink p-4 hover:text-white hover:bg-pink-darkPink transition hover:border-pink-darkPink">
                  <StarBorderOutlinedIcon style={iconstyle} />
                </div>

                <ul className="grid gap-4">
                  <li className="font-bold font-xl font-QuickSand text-pink-darkPink">
                    $150 <span className="font-normal text-white">/mon</span>
                  </li>
                  <li className="font-bold font-2xl uppercase">pro</li>
                  <li>Unlimited User</li>
                  <li>Unlimited Storage</li>
                  <li>24/7 Support</li>
                  <li>Lifetime Updates</li>
                </ul>

                <a
                  href="#"
                  className="inline-block rounded-full bg-pink-darkPink sm:px-8 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                >
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
