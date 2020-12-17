import React from "react";
import ProjectCard from "./ProjectCard";

/**
 * Props = {  listOfProjects : arrayOf Objects }
 */

const ProjectsList = (props) => {
  return (
    <section id="projects">
      <h2 class="text-important">Projects</h2>
      <div class="projects-container">
        {props.listOfProjects.map((el, i) => (
          <ProjectCard key={i} project={el} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsList;
