import React from "react";
import ProjectCard from "./ProjectCard";
import { ProjectData } from "./Projectdata";

function Project() {
  const data = ProjectData;
  return (
    <>
      <section id="projects">
        <div className="projects">
          <label htmlFor="" data-aos="fade-up" className="project-title">
            Projects
          </label>
          <div data-aos="fade-up">
            {data.map((project) => {
              return <ProjectCard project={project} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Project;
