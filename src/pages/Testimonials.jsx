"use client";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import { BiSolidQuoteAltLeft } from "react-icons/bs";
import Image from "next/image";
import demo from "../assets/testimonial5.png";

const Testimonials = () => {
  return (
    <div
      id="testimonials"
      className="bg-gradient-to-r from-dark1 to-dark2 pb-17 font-sans"
    >
      <div className="align-middle items-center m-auto">
        <div className=" text-center p-9 font-sans text-white">
          <div>Testimonial</div>
          <div className="font-serif text-3xl sm:text-4xl py-5 text-white font-bold">
            Our Success Stories
          </div>
        </div>
        <div className="flex max-w-3xl text-center gap-3 items-center m-auto">
          <button className="bg-pink-darkPink p-4 rounded-md">
            <ArrowBackIosIcon className="text-white" />
          </button>
          <div className="bg-darkBg py-14 rounded-xl shadow-md shadow-btnColor p-3">
            {/* <span className="font-DmSerifDisplay text-5xl text-pink-pinkLight items-left">"</span> */}
            {/* <BiSolidQuoteAltLeft className="text-pink-pinkLight" /> */}
            <div className="font-sans text-white">
              {" "}
              Tutorlancer has helped me not only understand the subject but
              master the answering techniques required to obtain a istinction.
              the material is not only well compiled and organies but helps
              immensely with revision.{" "}
            </div>
            <div className="font-serif pt-3 text-xl font-bold text-white">
              Jhon Dev
            </div>
            <div className="font-sans text-sm text-white">UI/UX Designer</div>
            {/* <span className="font-DmSerifDisplay text-5xl text-pink-pinkLight items-right">"</span> */}
          </div>
          <button className="bg-pink-darkPink p-4 rounded-md">
            <ArrowForwardIosIcon className="text-white" />
          </button>
        </div>
        <Image
          className="m-auto rounded-xl shadow-sm shadow-pink-pinkLight bottom-10 relative"
          src={demo}
          width={100}
          height={100}
          alt="Not Found"
        />
      </div>
    </div>
  );
};

export default Testimonials;
