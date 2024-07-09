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
import Aibig from "../assets/Logos/Aibig.webp";
import ConnectUS from "../assets/Logos/ConnectUS.webp";
import ELS from "../assets/Logos/ELS.webp";
import TUIlmenau from "../assets/Logos/TUIlmenau.webp";
import Popular from "../assets/Logos/Popular.webp";
import img1 from "../assets/Gallery/img1.webp";
import img2 from "../assets/Gallery/img2.webp";
import img3 from "../assets/Gallery/img3.webp";
import img4 from "../assets/Gallery/img4.webp";
import img5 from "../assets/Gallery/img5.webp";
import img6 from "../assets/Gallery/img6.webp";
import img7 from "../assets/Gallery/img7.webp";
import img8 from "../assets/Gallery/img8.webp";
import img9 from "../assets/Gallery/img9.webp";
import img10 from "../assets/Gallery/img10.webp";
import img11 from "../assets/Gallery/img11.webp";
import img12 from "../assets/Gallery/img12.webp";
import img13 from "../assets/Gallery/img13.webp";
import img14 from "../assets/Gallery/img14.webp";
import img15 from "../assets/Gallery/img15.webp";
import img16 from "../assets/Gallery/img16.webp";
import img17 from "../assets/Gallery/img17.webp";
import img18 from "../assets/Gallery/img18.webp";



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




  const ExpData = [
    {
      companyID: 1,
      companyName:"Popular Diagnostic Centre Ltd.",
      companyImg: Popular,
      link:"https://populardiagnostic.com/",
      supervisor:"Mohammad Arif",
      duration: "02/2023 - Present",
      skills:["Scrum Master", "Development Team Lead", "Product Design"],
      technology: "JavaScript-React, Node.js",
      designation: "SOFTWARE ENGINEER",
      location: "Dhaka, Bangladesh",
      workDetails: ["Led the establishment of the software development team, for inhouse software development at PDCL.", "Designed the digital patient end software for the organization, streamlining patient management and enhancing user experience.", "Collaborated with healthcare professionals to gather requirements and ensure compliance with industry standards.", "Successfully implemented agile methodologies to improve project efficiency and product quality.",],
      stick:"top-[25vh]",
      type: "Development",
    },
    {
      companyID: 2,
      companyName:"ConnectUS",
      companyImg: ConnectUS,
      link:"",
      supervisor:"Wan Nordin",
      duration: "05/2019 - 11/2019",
      skills:["Frontend", "Agile Methodology"],
      technology: "JavaScript-AngularJS",
      designation: "SOFTWARE DEVELOPER INTERN",
      location: "Singapore",
      workDetails:["Contributed to the frontend development of an event management media system targeting the markets of Singapore and Malaysia.", "Gained valuable experience in startup culture and agile development practices.",],
      stick:"top-[28vh]",
      type: "Development",
    },
    {
      companyID: 3,
      companyName:"Smart E-Life Solutions Sdn. Bhd.",
      companyImg: ELS,
      link:"https://elife-solutions.com/",
      supervisor:"Prof. Dr. -Ing. Eko Supriyanto",
      duration: "09/2018 - 01/2020",
      skills:["Agile Development", "Medical Technology"],
      technology: "C++, C#",
      designation: "SOFTWARE DEVELOPER INTERN",
      location: "Johor, Malaysia",
      workDetails:["Collaborated on a risk management system for Petronas using the QT framework.", "Worked on the 'smart hospital management system (asset model)' project.", "Gained hands-on experience in software development for the oil and gas industry."],
      stick:"top-[31vh]",
      type: "Development",
    },
    {
      companyID: 4,
      companyName:"AIBIG Lab, University of Technology Malaysia",
      companyImg: Aibig,
      link:"https://aibig.utm.my/",
      supervisor:"Hui Wen Nies",
      duration: "01/2022 - 08/2022",
      skills:["Academic Research", "Machine Learning Algorithms"],
      technology: "Python",
      designation: "RESEARCH INTERN",
      location: "Johor, Malaysia",
      workDetails:["Conducted research in bioinformatics, focusing on optimization and feature selection methods in disease classification.", "Assisted in the preparation of a research paper titled 'A Review of Computational Methods for Optimization and Feature Selection in Disease Classification.'",],
      stick:"top-[34vh]", 
      type: "Research",
    },
    {
      companyID: 5,
      companyName:"Technische Universität Ilmenau",
      companyImg: TUIlmenau,
      link:"https://www.tu-ilmenau.de/",
      supervisor:"Uwe Graichen",
      duration: "06/2019 - 09/2019",
      skills:["Academic Research", "Medical Technology"],
      technology: "Matlab",
      designation: "RESEARCH INTERN",
      location: "Thuringia, Germany",
      workDetails:["Worked on Matlab simulations and gained insights into MRI technology.", "Got an insight idea of the ongoing research project 'Generation of Volume Conductor Models from MRI Data Sets.'",],
      stick:"top-[37vh]",
      type: "Research",
    },
  ];


  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
  ];



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


  export { certData, ExpData, images, badgeData }