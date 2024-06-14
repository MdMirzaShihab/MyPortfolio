import React, { useState, useEffect } from "react";
import CSM from "../assets/Logos/CSM-logo.webp";
import GPM from "../assets/Logos/GPM.webp";
import UTM from "../assets/Logos/UTM-LOGO.webp";
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

const badgeData = [
  {
    badgeID: 1,
    badgeName: "CSM",
    badgeImage: CSM,
    badgeInnertext: [
      {
        textTitle: "Facilitate Scrum Ceremonies: ",
        text: "Expertly lead sprint planning, daily stand-ups, sprint reviews, and retrospectives to ensure team alignment and productivity.",
      },
      {
        textTitle: "Remove Obstacles: ",
        text: "Identify and eliminate impediments swiftly to keep the team moving forward efficiently.",
      },
      {
        textTitle: "Coach and Mentor: ",
        text: "Guide the team in self-organization, cross-functionality, and Agile best practices for continuous improvement.",
      },
      {
        textTitle: "Promote Continuous Improvement: ",
        text: "Foster a culture of continuous improvement, helping the team enhance processes and performance.",
      },
      {
        textTitle: "Enhance Communication and Collaboration: ",
        text: "Facilitate open communication and effective collaboration within the team and with stakeholders",
      },
      {
        textTitle: "Certified Expertise: ",
        text: "Leverage formal training and certification to apply Scrum principles effectively and credibly",
      },
    ],
    badgeBg: "#f9b620",
    badgeTextColor: "text-[#ffffff]",
  },
  {
    badgeID: 2,
    badgeName: "UTM",
    badgeImage: UTM,
    badgeInnertext: [
      {
        textTitle: "Global Ranking: ",
        text: "Graduated from UTM, ranked 181st globally, ensuring a top-tier education in engineering and technology.",
      },
      {
        textTitle: "Strong Technical Foundation: ",
        text: "Developed robust software engineering skills through UTM's rigorous and comprehensive curriculum.",
      },
      {
        textTitle: "Innovative Research Exposure: ",
        text: "Gained experience in cutting-edge research projects, fostering a deep understanding of advanced technologies.",
      },
      {
        textTitle: "Problem-Solving Skills: ",
        text: "Honed critical problem-solving abilities through challenging coursework and practical applications.",
      },
      {
        textTitle: "Industry-Relevant Training:",
        text: " Received training aligned with industry standards, preparing me to meet current and future technological demands.",
      },
      {
        textTitle: "Agile Project Management:",
        text: "Combined technical expertise with certified Scrum Master skills to drive efficient and effective project delivery.",
      },
    ],
    badgeBg: "#5d001d",
    badgeTextColor: "text-[#e69305]",
  },
  {
    badgeID: 3,
    badgeName: "GPM",
    badgeImage: GPM,
    badgeInnertext: [
      {
        textTitle: "Industry-Recognized Certification: ",
        text: "Completed the Google Project Management Professional Certificate, showcasing my expertise in project management best practices.",
      },
      {
        textTitle: "Comprehensive Skill Set: ",
        text: "Gained a deep understanding of project planning, execution, and monitoring, ensuring successful project delivery.",
      },
      {
        textTitle: "Effective Communication: ",
        text: "Learned advanced communication techniques to facilitate clear and efficient stakeholder engagement.",
      },
      {
        textTitle: "Risk Management Proficiency:",
        text: "Acquired skills in identifying, assessing, and mitigating project risks to ensure smooth project progression.",
      },
      {
        textTitle: "Leadership and Team Collaboration: ",
        text: "Enhanced leadership abilities to effectively guide teams and foster a collaborative working environment.",
      },
      {
        textTitle: "Data-Driven Decision Making: ",
        text: "Developed competencies in using data and metrics to make informed project decisions and optimize outcomes.",
      },
    ],
    badgeBg: "#c36f00",
    badgeTextColor: "text-[#ffffff]",
  },
];

gsap.registerPlugin(ScrollTrigger);

const BadgeSection = () => {
  const [activeBadgeID, setActiveBadgeID] = useState(null);

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

  return (
    <div className="badgeSec p-5 overflow-hidden" style={{ backgroundColor }}>
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
        <h1 className="badgeText font-bold text-5xl md:text-8xl text-center pb-5 text-white">
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
              className={`badgeCard flex w-[100px] h-[133px] xl:w-[300px] xl:h-[400px] p-2 bg-white hover:bg-sky-100 justify-center items-center rounded-2xl border-4 ${badgeBorderColor} overflow-hidden cursor-pointer`}
              onClick={() => handleBadgeClick(badge.badgeID)}>
              <img
                src={badge.badgeImage}
                className="object-contain"
                alt={badge.badgeName}
              />
            </div>
            <h1 className="text-sky-200 font-dancing text-2xl">Click me</h1>
          </div>
        ))}
      </div>
      {activeBadgeID &&
        renderBadgeDetails(
          badgeData.find((badge) => badge.badgeID === activeBadgeID)
        )}
    </div>
  );
};

export default BadgeSection;
