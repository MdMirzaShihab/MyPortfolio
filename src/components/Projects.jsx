import React from "react";


const projectLinks = [
  {
    id: 1,
    name: "Boipoka",
    link: "/boipoka",
  },
  {
    id: 2,
    name: "CEdelivery",
    link: "/cedelivery",
  },
  {
    id: 3,
    name: "DigBazE",
    link: "/digbaze",
  },
  {
    id: 4,
    name: "Exponentum",
    link: "/exponentum",
  },
  {
    id: 5,
    name: "FlyingFarmers",
    link: "/flyingfarmers",
  },
  {
    id: 6,
    name: "PDCL",
    link: "/pdcl",
  },
  {
    id: 7,
    name: "Pogoda",
    link: "/pogoda",
  },
  {
    id: 8,
    name: "Sabisy",
    link: "/sabisy",
  },
  {
    id: 9,
    name: "Subidha",
    link: "/subidha",
  },
  {
    id: 10,
    name: "Trademic",
    link: "/trademic",
  },
  {
    id: 11,
    name: "UTMgo",
    link: "/utmgo",
  },
];


const ProjectCard = ({ name, link }) => {
  const handleCardClick = () => {
    // Redirect to the specified link
    window.location.href = link;
  };

  return (
    <div className="project-card text-white" onClick={handleCardClick}>
      {name}
    </div>
  );
};

const Projects = () => {
  return (
    <div className="projects-container bg-[#060f30] h-screen pt-16">
      {projectLinks.map((project) => (
        <ProjectCard key={project.id} name={project.name} link={project.link} />
      ))}
    </div>
  );
};

export default Projects;
