import React from "react";
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
import AI from "../assets/Logos/deeplearningAI.webp";
import { motion } from "framer-motion";

const certData = [
  {
    id: 1,
    certImg: CSM,
    certName: "CERTIFIED SCRUM MASTER",
    by: "Scrum Alliance",
    link: "https://bcert.me/bc/html/show-badge.html?b=psilhmne",
    provider: "https://www.scrumalliance.org/",
  },
  {
    id: 2,
    certImg: GPM,
    certName: "Google Project Management Professional",
    by: "Google Career Certificates",
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/M6GAHVGGQS5H",
    provider: "https://grow.google/certificates/project-management/",
  },
  {
    id: 3,
    certImg: ATLASSIAN,
    certName: "AGILE WITH ATLASSIAN JIRA",
    by: "Atlassian",
    link: "https://www.coursera.org/account/accomplishments/certificate/LJPZZF2HJQP5",
  },
  {
    id: 4,
    certImg: Google,
    certName: "AGILE PROJECT MANAGEMENT",
    by: "Grow with Google",
    link: "https://www.coursera.org/account/accomplishments/certificate/9AQN8JCGZMGQ",
    provider: "https://grow.google/",
  },
  {
    id: 5,
    certImg: IBM,
    certName: "WORKING AS A SCRUM MASTER",
    by: "IBM Training",
    link: "https://www.coursera.org/account/accomplishments/certificate/GHSMEBXZAK5P",
    provider: "https://www.ibm.com/training/",
  },
  {
    id: 6,
    certImg: Meta,
    certName: "Advanced React",
    by: "Meta",
    link: "https://coursera.org/share/0666f570c7f5f4b88b88c64a43ce1359",
  },
  {
    id: 7,
    certImg: Meta,
    certName: "Programming with JavaScript",
    by: "Meta",
    link: "https://coursera.org/share/f7bba754cb5f6ec56d7911804f44dec2",
  },
  {
    id: 8,
    certImg: Google,
    certName: "INTRODUCTION TO GIT AND GITHUB",
    by: "Grow with Google",
    link: "https://www.coursera.org/account/accomplishments/verify/KYL2DQAKT9GQ",
    provider: "https://grow.google/",
  },
  {
    id: 9,
    certImg: ErusmusUni,
    certName: "CYBERSECURITY IN HEALTHCARE (HOSPITALS & CARE CENTRES)",
    by: "Erasmus University Rotterdam",
    link: "https://coursera.org/share/e552fa062c2eb568035078fb2de4837d",
  },
  {
    id: 10,
    certImg: AI,
    certName: "CHATGPT PROMPT ENGINEERING FOR DEVELOPERS",
    by: "DEEPLEARNING.AI",
    link: "https://www.coursera.org/projects/chatgpt-prompt-engineering-for-developers-project",
    provider: "https://www.deeplearning.ai/",
  },
  {
    id: 11,
    certImg: CREST,
    certName: "LEVEL-4 ON BUILDING AR AND INTEGRATING WITH IOT APPLICATION",
    by: "CREST",
    link: "https://drive.google.com/file/d/1WVyk3ZRlOWymJGySia33QQOl8hLjY6xi/view?usp=sharing",
    provider: "https://crest.my/",
  },
  {
    id: 12,
    certImg: UCI,
    certName: "The Arduino Platform and C Programming",
    by: "University of California, Irvine",
    link: "https://www.coursera.org/account/accomplishments/certificate/2XYPCLJKBY8S",
  },
  {
    id: 13,
    certImg: Udemy,
    certName: "THE COMPLETE SOFTWARE TESTING BOOTCAMP -Ongoing",
    by: "Udemy",
    link: "https://www.udemy.com/course/testerbootcamp/?couponCode=24T6MT62024",
  },
  {
    id: 14,
    certImg: ISO,
    certName: "ISO 9001: 2015 QUALITY MANAGEMENT SYSTEM REQUIREMENT",
    by: "Universiti Teknologi Malaysia",
    link: "#",
    provider: "https://utmspace.edu.my/utm-professional-skills-certificate-program/",
  },
  {
    id: 15,
    certImg: UTM,
    certName: "DATA ANALYTICS FOR ORGANIZATION",
    by: "Universiti Teknologi Malaysia",
    link: "#",
    provider: "https://utmspace.edu.my/utm-professional-skills-certificate-program/",
  },
  {
    id: 16,
    certImg: UTM,
    certName: "OCCUPATIONAL SAFETY, HEALTH AND ENVIRONMENT (OSHE)",
    by: "Universiti Teknologi Malaysia",
    link: "#",
    provider: "https://utmspace.edu.my/utm-professional-skills-certificate-program/",
  },
];

  const CertCard = ({ certImg, certName, by, link, provider }) => {
    return (
      <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
         className="project-card group text-center lg:w-[24vw] md:w-[32vw] h-[48vh] w-[48vw] text-slate-400 flex flex-col justify-center items-center hover:shadow-lg hover:shadow-[#0284c7] shadow-sm shadow-[#0285c786] transition duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <img
          src={certImg}
          className="object-contain lg:w-[8vw] lg:h-[8vw] h-[16vw] w-[16vw] transition duration-300" alt={certImg} 
        />
        <h1 className="md:text-2xl text-xl px-2 font-bold group-hover:text-slate-100 mt-2 transition duration-300">
          {certName}
        </h1>
        <p className="text-sm">by</p>
        <a href={provider}>
          <p className="text-lg font-semibold hover:scale-125 transition duration-300 hover:text-white">
          {by}
        </p>
        </a>
      </motion.a>
    );
  };

const Certificates = () => {
  return (
    <div className="projects-container min-h-[100vh] bg-[#060f30] pt-16 w-full">
      <h1 className="badgeText font-bold text-5xl md:text-8xl text-center py-5 text-white">
        Certificates
      </h1>
      <div className="flex flex-wrap w-full justify-center py-10">
        {certData.map((project) => (
          <div key={project.id} className="">
            <CertCard {...project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
