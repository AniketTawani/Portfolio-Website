import React from "react";
import "./project.css";
import { BsGlobe } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";

function ProjectCard({ project }) {
  return (
    <>
      <div className="project-card">
        <div className="project-info">
          <label htmlFor="" className="project-title-info">
            {project.title}
          </label>
          <div className="project-links">
            {project.demo && (
              <a className="project-link" href={project.demo} target="_blank">
                <div className="link-button">
                  <BsGlobe />
                  Demo
                </div>
              </a>
            )}
            {project.github && (
              <a className="project-link" href={project.github} target="_blank">
                <div className="link-button">
                  <AiFillGithub />
                  Github
                </div>
              </a>
            )}
          </div>
          <p className="project-about">{project.about}</p>
          <div className="project-tags">
            {project.tags.map((tag) => {
              return (
                <label htmlFor="" className="tags">
                  {tag}
                </label>
              );
            })}
          </div>
        </div>

        <div className="p">
          <div className="p-browser">
            <div className="p-circle"></div>
            <div className="p-circle"></div>
            <div className="p-circle"></div>
          </div>
          <a href="" target="_blank" rel="noreferrer">
            <img src={project.image} alt="" className="p-img" />
          </a>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
