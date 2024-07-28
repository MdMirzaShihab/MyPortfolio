import React, { useState, useEffect } from "react";
import { badgeData } from "../Constants";
import { Link } from "react-router-dom";
import ATLASSIAN from "../assets/Logos/ATLASSIAN.webp";
import CREST from "../assets/Logos/CREST.webp";
import ErusmusUni from "../assets/Logos/ErusmusUni.webp";
import Google from "../assets/Logos/Google.webp";
import IBM from "../assets/Logos/IBM.webp";
import ISO from "../assets/Logos/ISO.webp";
import Meta from "../assets/Logos/Meta.webp";
import UCI from "../assets/Logos/UCI.webp";
import Udemy from "../assets/Logos/Udemy.webp";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const BadgeSection = () => {
  const [isExpanded, setIsExpanded] = useState(null);
  const [activeBadgeID, setActiveBadgeID] = useState(null);

  const toggle = () => setIsExpanded(!isExpanded);

  useEffect(() => {
    // If details are shown, scale down the card containers, otherwise scale them back up
    if (activeBadgeID) {
      gsap.to(".cardContainer", { duration: 1.5, scale: 0.5 });
    } else {
      gsap.to(".cardContainer", { duration: 1.5, scale: 1 });
    }
  }, [activeBadgeID]); // This effect runs whenever activeBadgeID changes

  const handleBadgeClick = (badgeID) => {
    setActiveBadgeID(activeBadgeID === badgeID ? null : badgeID);
  };

  const renderBadgeDetails = (badge) => {
    const badgeTextColor = badge.badgeTextColor;
    return (
      <div className="badgeDetails flex flex-col md:flex-row text-gray-50 px-10 pb-10 justify-center items-center gap-8 backdrop-blur-sm rounded-2xl">
        <div className="badgeCard flex w-[300px] h-[400px] p-2 bg-white justify-center items-center rounded-2xl border-4 border-[#e69305] overflow-hidden cursor-pointer">
          <img
            src={badge.badgeImage}
            className="object-contain"
            alt={badge.badgeName}
          />
        </div>
        <div>
          <ul className="flex flex-col justify-evenly">
            {badge.badgeInnertext.map((item, index) => (
              <li
                key={index}
                className={`lg:text-3xl ${badgeTextColor} font-bold my-2`}>
                {item.textTitle}
                <span className="lg:text-2xl font-dancing font-normal">
                  {" "}
                  {item.text}{" "}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  // Determine the background color based on the active badge
  const backgroundColor = activeBadgeID
    ? badgeData.find((badge) => badge.badgeID === activeBadgeID).badgeBg
    : "#060f30";

  const activePadding = activeBadgeID ? "py-0" : "py-10 pb-60";
  const badgeBorderColor = activeBadgeID
    ? "border-[#e69305]"
    : "border-sky-200";

  const badgeShadowColor = activeBadgeID
    ? "shadow-[#e69305]"
    : "shadow-[#0284c7]";

  const badgeHoverColor = activeBadgeID
    ? "hover:bg-[#e69305]"
    : "hover:bg-sky-100";

  return (
    // Desktop Versiom

    <div>
      <div style={{ backgroundColor }} className="badgeSec p-5 hidden lg:block">
        <div className="relative blur-sm">
          <img
            src={IBM}
            className="absolute top-[20vh] left-[5vw] object-contain w-[150px]"
            alt="IBM"
          />
          <img
            data-scroll
            data-scroll-speed="0.1"
            src={Meta}
            className="absolute top-[35vh] left-[10vw] object-contain w-[200px]"
            alt="ErusmusUni"
          />
          <img
            data-scroll
            data-scroll-speed="0.2"
            src={UCI}
            className="absolute top-[60vh] left-[5vw] object-contain w-[300px]"
            alt="UCI"
          />
          <img
            src={ErusmusUni}
            className="absolute top-[10vh] right-[12vw] object-contain w-[400px]"
            alt="Meta"
          />

          <img
            data-scroll
            data-scroll-speed="0.1"
            src={Udemy}
            className="absolute top-[80vh] left-[20vw] object-contain w-[200px]"
            alt="Udemy"
          />

          <img
            data-scroll
            data-scroll-speed="0.1"
            src={Google}
            className="absolute top-[25vh] right-[2vw] object-contain w-[200px]"
            alt="Google"
          />

          <img
            data-scroll
            data-scroll-speed="0.3"
            src={CREST}
            className="absolute top-[65vh] right-[35vw] object-contain w-[200px]"
            alt="CREST"
          />

          <img
            data-scroll
            data-scroll-speed="0.2"
            src={ATLASSIAN}
            className="absolute top-[60vh] right-[5vw] object-contain w-[200px]"
            alt="ATLASSIAN"
          />

          <img
            data-scroll
            data-scroll-speed="0.1"
            src={ISO}
            className="absolute top-[80vh] right-[12vw] object-contain w-[200px]"
            alt="ISO"
          />
        </div>

        <div data-scroll data-scroll-speed="0.1" className="mt-16">
          <h1 className="badgeText font-bold text-8xl text-center pb-5 text-white">
            Badges That Represent Me
          </h1>
        </div>
        <div
          className={`cardContainer ${activePadding} flex justify-center gap-12`}>
          {badgeData.map((badge) => (
            <div
              data-scroll
              data-scroll-speed="0.2"
              key={badge.badgeID}
              className=" flex flex-col items-center">
              <div
                className={`badgeCard flex flex-col gap-3 w-[300px] h-[400px] p-2 ${badgeHoverColor} justify-center items-center rounded-2xl border-4 ${badgeBorderColor} hover:${badgeShadowColor} ${badgeShadowColor} hover:shadow-lg shadow-md overflow-hidden cursor-pointer transition-transform duration-700 transform hover:-translate-y-3`}
                onClick={() => handleBadgeClick(badge.badgeID)}>
                <img
                  src={badge.badgeImage}
                  className="object-contain"
                  alt={badge.badgeName}
                />
                <h1 className="text-sky-100 font-dancing text-3xl">Click me</h1>
              </div>
            </div>
          ))}
        </div>
        {activeBadgeID &&
          renderBadgeDetails(
            badgeData.find((badge) => badge.badgeID === activeBadgeID)
          )}

        <div className="-mt-10 flex justify-center pb-10">
          <motion.div
            data-scroll
            data-scroll-speed="0.1"
            className="relative w-full mx-auto m-5 p-6 flex justify-center items-center transition-shadow duration-300">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-slate-50 mb-1">
                Discover More Achievements!
              </h2>
              <p className="text-slate-100 pb-3">
                Unlock the Stories Behind My Success! Each badge is a testament
                to my commitment and expertise. Witness the dedication and hard
                work that have shaped my journey.
              </p>

              <Link to="/certificates">
                <motion.div
                  className={`inline-block px-6 py-3 border-4 ${badgeBorderColor} text-slate-100 font-bold rounded-full shadow-md shadow-[#0284c7] ${badgeShadowColor} hover:shadow-lg transition-colors duration-300`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}>
                  Interested to know More?
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/*  Mobile version */}

      <div className="relative lg:hidden bg-[#060f30] pb-20">
          <h1 className="badgeText font-bold text-4xl text-center px-4 pt-10 text-white">
            Badges That Represent Me
          </h1>
        <div className={`${activePadding} flex flex-col justify-center gap-4`}>
          {badgeData.map((badge) => (
            <div key={badge.badgeID} className="flex flex-col items-center p-5">
              <div
                className={`badgeCard flex flex-col gap-3 w-full p-2 justify-center items-center rounded-2xl border-4 shadow-sky-100 shadow-lg overflow-hidden`}>
                <img
                  src={badge.badgeImage}
                  className="h-[200px] "
                  alt={badge.badgeName}
                />
                <h1 className="text-white text-4xl text-center font-bold ">
                  {" "}
                  {badge.badgeTitle}
                </h1>
                <button
                  onClick={toggle}
                  className="text-white cursor-pointer flex flex-col items-center">
                  <span className="text-sm">
                    {isExpanded ? "Hide details" : "Show details"}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className={` ${isExpanded ? "rotate-180" : ""} w-10`}
                    style={{ transition: "transform 0.3s ease" }}>
                    <path d="M12 22L23 11H1z" fill="currentColor" />
                  </svg>
                </button>
                {isExpanded && (
                  <div className="p-5">
                    {badge.badgeInnertext.map((inner, index) => (
                      <ul className="py-1" key={index}>
                        <li className="text-slate-200 font-semibold text-xl">
                          {" "}
                          {inner.textTitle}:
                          <span className=" font-normal text-lg text-slate-300">
                            {" "}
                            {inner.text}{" "}
                          </span>{" "}
                        </li>
                      </ul>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center -mt-40">
          <motion.div
            className="relative w-full mx-auto m-5 p-6 flex justify-center items-center transition-shadow duration-300">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-slate-50 mb-1">
                Discover More Achievements!
              </h2>
              <p className="text-slate-100 pb-3">
                Unlock the Stories Behind My Success! Each badge is a testament
                to my commitment and expertise. Witness the dedication and hard
                work that have shaped my journey.
              </p>
              <Link to="/certificates">
                <motion.div
                  className={`inline-block px-6 py-3 border-4 ${badgeBorderColor} text-slate-100 font-bold rounded-full shadow-md shadow-[#0284c7] ${badgeShadowColor} hover:shadow-lg transition-colors duration-300`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}>
                  Interested to know More?
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BadgeSection;
