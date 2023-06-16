/* eslint-disable react/prop-types */

// const MainCard = ({ icon, iconBgColor, title, description }) => {
//     return (
//       <div className="rounded-md bg-white p-6 gap-5 flex flex-col mb-10 sm:items-start sm:justify-start items-center justify-center">
//         <div className="">
//           {/* icon */}
//           <div
//             className={`w-14 h-14 rounded-[15px] items-center justify-center flex ${iconBgColor}`}
//           >
//             <img src={icon} alt="Icon" className="w-7 h-7" />
//           </div>
//         </div>
//         <span className="font-semibold md:text-base font-Inter sm:text-[24px]">{title}</span>
//         <p className="text-sm capitalize md:text-[14px] sm:text-left text-center font-medium font-Inter">{description}</p>
//       </div>
//     );
//   };
//   export default MainCard;

/* eslint-disable react/prop-types */
import React, { useState } from "react";
import classNames from "classnames";

const MainCard = ({ icon, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };


  const cardClasses = classNames(
    "flex flex-col items-center cursor-pointer text-center md:block md:text-left rounded-xl shadow-pink-light  border border-pink-500/10 p-8 shadow-md transition mb-4",
    {
      "bg-btnColor hover:shadow-pink-hotPink -translate-y-4": isHovered,
    }
  );

  const iconClasses = classNames("rounded-full text-pink-darkPink border-2 w-fit p-4 transition bg-darkBg mb-4", {
    " text-white bg-pink-darkPink border-pink-darkPink":
      isHovered,
  });


  return (
    <div
      className={cardClasses}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={iconClasses}>{icon}</div>
      <span className="text-lg sm:text-xl uppercase font-bold font-Inter mb-2">
        {title}
      </span>
      <p className="text-sm capitalize md:text-[14px] sm:text-left text-center font-medium font-Inter mt-2">
        {description}
      </p>
    </div>
  );
};

export default MainCard;
