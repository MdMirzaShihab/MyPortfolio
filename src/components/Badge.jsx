import React, { useState, useEffect } from "react";
import CSM from "../assets/CSM-logo.png";
import GPM from "../assets/GPM.png";
import UTM from "../assets/UTM-LOGO.png";
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
    badgeBg: "#947a03",
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
    badgeBg: "#630031",
    badgeTextColor: "text-[#ffd700]",
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
    badgeBg: "#065535",
    badgeTextColor: "text-[#ffffff]",
  },
];

gsap.registerPlugin(ScrollTrigger);

const Badge = () => {
  const [activeBadgeID, setActiveBadgeID] = useState(null);

  useEffect(() => {
    // If details are shown, scale down the card containers, otherwise scale them back up
    if (activeBadgeID) {
      gsap.to(".cardContainer", { duration:1.5, scale: 0.5 });
    } else {
      gsap.to(".cardContainer", { duration:1.5, scale: 1 });
    }
  }, [activeBadgeID]); // This effect runs whenever activeBadgeID changes

  const handleBadgeClick = (badgeID) => {
    setActiveBadgeID(activeBadgeID === badgeID ? null : badgeID);
  };

  const renderBadgeDetails = (badge) => {
    const badgeTextColor = badge.badgeTextColor
    return (
      <div className="badgeDetails flex flex-col md:flex-row text-gray-50 px-10 pb-10 justify-center items-center gap-8 backdrop-blur-sm rounded-2xl">
        <div className="badgeCard flex w-[300px] h-[400px] p-2 bg-white justify-center items-center rounded-2xl border-4 border-sky-200 overflow-hidden cursor-pointer">
          <img
            src={badge.badgeImage}
            className="object-contain"
            alt={badge.badgeName}
          />
        </div>
        <div>
          <ul className="flex flex-col justify-evenly">
            {badge.badgeInnertext.map((item, index) => (
              <li key={index} className={`lg:text-3xl ${badgeTextColor} font-bold my-2`}>
                {item.textTitle}
                <span className="lg:text-2xl font-dancing font-normal"> {item.text} </span>
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


  return (
    <div className="badgeSec p-5" style={{ backgroundColor }}>
      <div  data-scroll data-scroll-speed="0.1" className="mt-16">
        <h1 className="badgeText font-bold text-5xl md:text-8xl text-center pb-5 text-white">
          Badges That Represent Me
        </h1>
      </div>
      <div className={`cardContainer ${activePadding} flex justify-center gap-12`}>
        {badgeData.map((badge) => (
          <div
            key={badge.badgeID}
            className=" flex flex-col items-center">
            <div
            data-scroll data-scroll-speed="0.2"
              className="badgeCard flex w-[100px] h-[133px] xl:w-[300px] xl:h-[400px] p-2 bg-white hover:bg-sky-100 justify-center items-center rounded-2xl border-4 border-sky-200 overflow-hidden cursor-pointer"
              onClick={() => handleBadgeClick(badge.badgeID)}>
              <img
                src={badge.badgeImage}
                className="object-contain"
                alt={badge.badgeName}
              />
            </div>
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

export default Badge;