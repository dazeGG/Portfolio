import React, { useState, useEffect } from "react";
import API from "../api";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import style from "./styles/Projects.module.scss";

const Projects = () => {
  document.title = "daze | Projects";
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    API.get("/getAll").then((res) => {
      setProjects(res.data);
    });
  }, []);

  return (
    <div className={style.projects__cards}>
      {projects.map((project) => (
        <ProjectCard
          key={project._id}
          link={`/project/${project.title}`}
          title={project.title}
          stack={project.Stack}
          isOpenSource={project.isOpenSource}
          whatIsIt={project.What_is_it}
        />
      ))}
    </div>
  );
};

export default Projects;
