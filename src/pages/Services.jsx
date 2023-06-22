"use client";
import React from "react";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import ImportantDevicesOutlinedIcon from "@mui/icons-material/ImportantDevicesOutlined";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import DataUsageOutlinedIcon from "@mui/icons-material/DataUsageOutlined";
import VideoCameraFrontOutlinedIcon from "@mui/icons-material/VideoCameraFrontOutlined";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import ContentPasteSearchOutlinedIcon from "@mui/icons-material/ContentPasteSearchOutlined";
import MainCard from "@/components/cards/MainCard";
import user from "@/assets/user.svg";

const Services = () => {
  const iconstyle = {
    fontSize: "2rem",
  };

  return (
    <div>
      <section id="services" className="bg-darkBg text-white">
        <div className="mx-auto max-w-screen-x lg:pt-16 md:mt-0 py-14 sm:py-24lg:py-16 ">
          <div className="mx-auto max-w-lg text-center ">
            <div className="flex flex-col items-center">
              <h2 className="text-3xl font-bold mb-2 text-white sm:text-4xl">
                Our Services
              </h2>
              <span className="h-[2px] bg-pink-darkPink  w-16 mb-4" />
            </div>
            <p className="mt-4 text-white">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequuntur aliquam doloribus nesciunt eos fugiat. Vitae aperiam
              fugit consequuntur saepe laborum.
            </p>
          </div>

          <div className="mt-12 px-8 lg:px-24 grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
            <MainCard
              icon={<PeopleOutlinedIcon />}
              title="Apps for Mobile & Web"
              iconBgColor="#000"
              description="Our tutors will make very user-friendly and efficient apps, exactly matching your needs. Boost your business now!"
            />

            <MainCard
              icon={<AccessTimeOutlinedIcon />}
              title=" 24/7 Support"
              iconBgColor="#000"
              description="Assignment solvers is focused on ensuring to meet the needs of the students around the globe for their assignments."
            />

            <MainCard
              icon={<ImportantDevicesOutlinedIcon />}
              title="live sessions"
              iconBgColor="#000"
              description="We provide the best solvers for you to interact with in real time to get instant solutions for your problems. Pickup your phone now!"
            />

            <MainCard
              icon={<ScienceOutlinedIcon />}
              title="Lab work"
              // iconBgColor="#000"
              description="PSpice, Orcad, AutoCAD, Solidworks, and many more simulation softwares, our lab solvers can handle them all."
            />

            <MainCard
              icon={<DataUsageOutlinedIcon />}
              title="project help"
              iconBgColor="#000"
              description="Get the most professional project assistance from our PhD solvers who can guide and walk you through your project online."
            />
            <MainCard
              icon={<VideoCameraFrontOutlinedIcon />}
              title="video calling support"
              iconBgColor="#000"
              description="Real-time tools and rich insights mean our support solution amplifies your team for an unbeatable experience."
            />

            <MainCard
              icon={<DriveFileRenameOutlineOutlinedIcon />}
              title="writing help"
              iconBgColor="#000"
              description="Our native essay solvers help you meet university standards in terms of writing and structuring of academic essays."
            />
            <MainCard
              icon={<ContentPasteSearchOutlinedIcon />}
              title="homework help"
              iconBgColor="#000"
              description="Stuck with homework? PhD solvers have a distinctive mode of expression assisting students to solve assignments flawlessly."
            />
          </div>

          {/* <div className="mt-12 text-center">
            <a
              href="#"
              className="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Get Started Today
            </a>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Services;
