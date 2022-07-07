import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../api";
import style from "./styles/Project.module.scss";

const Project = () => {
  const { projectTitle } = useParams();
  document.title = `daze | ${projectTitle}`;
  const [project, setProject] = useState({});

  useEffect(() => {
    API.get(`/get?title=${projectTitle}`).then((res) => {
      setProject(res.data);
    });
  }, []);

  return (
    <div className={style.project}>
      <div className={style.project__title}>
        <b>{project.title}</b>|<span>{project.What_is_it}</span>
        <span
          className={
            (project.isOpenSource ? style.yes : style.no) +
            " " +
            style.is__open__source
          }
        >
          {(project.isOpenSource ? "" : "Not ") + "Open Source"}
        </span>
      </div>
      <div className={style.project__content}>
        <div className={style.description}>
          <b>Описание:</b> {project.description}
        </div>
        <div className={style.stack}>
          <b>Stack: </b>
          {(project.Stack || []).map((stackItem) => (
            <div
              key={stackItem}
              className={
                style[stackItem.toLowerCase().replace(/[^a-zа-я]+/g, "")]
              }
            >
              {stackItem}
            </div>
          ))}
        </div>
        <div className={style.stack__full}>
          <b>Stack Full: </b>
          {(project.Stack_full || []).join(", ")}
        </div>
      </div>
      <div className={style.project__links}>
        <div className={style.links__code}>
          <a
            className={project.isOpenSource ? "" : style.innactive}
            href={project.isOpenSource ? project.linkToGit : null}
            target="_blank"
            rel="noreferrer"
          >
            Исходники
          </a>
        </div>
        <div className={style.links__project}>
          <a href={project.linkToProject} target="_blank" rel="noreferrer">
            Проект
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
